interface WaveDividerProps {
  /** Couleur de remplissage de la vague (la section qui "coule" par-dessus la suivante). */
  fill?: string;
  /** Retourne la vague verticalement (creux vers le haut). */
  flip?: boolean;
  className?: string;
}

/**
 * Séparateur fluide entre deux sections — l'élément signature "eau" du site.
 * Purement décoratif : masqué aux lecteurs d'écran.
 */
const WaveDivider = ({ fill = "#FFFFFF", flip = false, className = "" }: WaveDividerProps) => (
  <div
    aria-hidden="true"
    className={`pointer-events-none -mb-px leading-[0] ${className}`}
    style={flip ? { transform: "scaleY(-1)" } : undefined}
  >
    <svg
      viewBox="0 0 1440 120"
      preserveAspectRatio="none"
      className="block h-[60px] w-full md:h-[110px]"
    >
      <path
        fill={fill}
        d="M0,64 C240,128 480,16 720,40 C960,64 1200,128 1440,80 L1440,120 L0,120 Z"
      />
    </svg>
  </div>
);

export default WaveDivider;
