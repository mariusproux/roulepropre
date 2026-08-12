import { useEffect, useState } from "react";

/**
 * Retourne `true` dès que le défilement vertical dépasse `threshold` px.
 * Un seul listener passif, partagé par la navbar et la barre mobile.
 */
export function useScrollPast(threshold: number): boolean {
  const [past, setPast] = useState(false);

  useEffect(() => {
    const onScroll = () => setPast(window.scrollY > threshold);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [threshold]);

  return past;
}
