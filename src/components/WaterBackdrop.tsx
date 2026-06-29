// Décor d'eau génératif : bulles qui remontent + grille de gouttes en watermark.
// Purement décoratif (aria-hidden) ; les animations sont coupées par prefers-reduced-motion.

const bubbles = [
  { left: "8%", size: 14, delay: 0, dur: 11 },
  { left: "18%", size: 8, delay: 3, dur: 9 },
  { left: "32%", size: 20, delay: 1.5, dur: 13 },
  { left: "47%", size: 10, delay: 5, dur: 10 },
  { left: "63%", size: 16, delay: 2.5, dur: 12 },
  { left: "76%", size: 7, delay: 4, dur: 9 },
  { left: "88%", size: 12, delay: 0.8, dur: 11 },
  { left: "94%", size: 9, delay: 6, dur: 10 },
];

const WaterBackdrop = () => (
  <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
    {/* Watermark de gouttes */}
    <svg className="absolute inset-0 h-full w-full opacity-[0.05]" aria-hidden="true">
      <defs>
        <pattern id="drops" width="90" height="90" patternUnits="userSpaceOnUse" patternTransform="rotate(8)">
          <path d="M20 8 C20 8 30 20 30 27 a10 10 0 1 1 -20 0 C10 20 20 8 20 8 Z" fill="#fff" />
          <circle cx="64" cy="60" r="4" fill="#fff" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#drops)" />
    </svg>

    {/* Bulles qui remontent */}
    {bubbles.map((b, i) => (
      <span
        key={i}
        className="absolute bottom-0 rounded-full bg-rp-sky/40 ring-1 ring-white/20"
        style={{
          left: b.left,
          width: b.size,
          height: b.size,
          animation: `bubble-rise ${b.dur}s ease-in ${b.delay}s infinite`,
        }}
      />
    ))}
  </div>
);

export default WaterBackdrop;
