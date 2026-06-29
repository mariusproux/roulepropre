import React, { useState, MouseEvent, CSSProperties } from "react";

interface Ripple {
  key: number;
  x: number;
  y: number;
  size: number;
}

interface RippleButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  /** Couleur de l'onde au clic. */
  rippleColor?: string;
  rippleDuration?: number;
}

/**
 * Bouton avec effet d'onde ("ripple") au clic — version épurée, accessible.
 * Adapté du composant 21st.dev (easemize/multi-type-ripple-buttons), allégé
 * pour ne garder que l'onde au clic et nos tokens de design.
 */
const RippleButton = ({
  children,
  className = "",
  rippleColor = "rgba(255, 255, 255, 0.55)",
  rippleDuration = 600,
  onClick,
  disabled,
  ...props
}: RippleButtonProps) => {
  const [ripples, setRipples] = useState<Ripple[]>([]);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (disabled) return;
    const button = event.currentTarget;
    const rect = button.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height) * 2;
    const ripple: Ripple = {
      key: Date.now(),
      x: event.clientX - rect.left - size / 2,
      y: event.clientY - rect.top - size / 2,
      size,
    };
    setRipples((prev) => [...prev, ripple]);
    window.setTimeout(
      () => setRipples((prev) => prev.filter((r) => r.key !== ripple.key)),
      rippleDuration,
    );
    onClick?.(event);
  };

  return (
    <button
      className={`relative isolate overflow-hidden ${className}`}
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      <span className="pointer-events-none relative z-10">{children}</span>
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
        {ripples.map((r) => (
          <span
            key={r.key}
            className="absolute rounded-full"
            style={
              {
                left: r.x,
                top: r.y,
                width: r.size,
                height: r.size,
                backgroundColor: rippleColor,
                animation: `ripple-effect ${rippleDuration}ms ease-out forwards`,
              } as CSSProperties
            }
          />
        ))}
      </span>
    </button>
  );
};

export { RippleButton };
