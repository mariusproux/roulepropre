import { useEffect, useRef, type RefObject } from "react";

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/**
 * Applique un effet de parallaxe au scroll, de façon économe :
 * - ne calcule que lorsque l'élément est visible (IntersectionObserver),
 * - throttle via requestAnimationFrame,
 * - listener passif,
 * - désactivé si l'utilisateur préfère moins d'animations.
 *
 * `apply` reçoit le scroll courant et l'élément observé ; c'est la seule
 * partie qui diffère d'un usage à l'autre.
 */
export function useParallax(
  ref: RefObject<HTMLElement>,
  apply: (scrollY: number, el: HTMLElement) => void,
) {
  const applyRef = useRef(apply);
  applyRef.current = apply;

  useEffect(() => {
    const el = ref.current;
    if (!el || prefersReducedMotion()) return;

    let visible = false;
    let raf = 0;

    const run = () => {
      raf = 0;
      applyRef.current(window.scrollY, el);
    };
    const onScroll = () => {
      if (!visible || raf) return;
      raf = requestAnimationFrame(run);
    };

    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) applyRef.current(window.scrollY, el);
    });
    io.observe(el);
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ref]);
}
