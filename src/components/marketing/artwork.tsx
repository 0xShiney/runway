import { cn } from "@/lib/utils";

type Palette = {
  from: string;
  via: string;
  to: string;
  glow: string;
  accent: string;
};

/**
 * Original abstract "frame" artwork used in place of Runway's licensed
 * product footage. Each variant is a deterministic composition of gradients,
 * light blooms and film grain so the layout keeps the cinematic density of the
 * reference without reusing unlicensed media.
 */
const palettes: Record<string, Palette> = {
  dawn: { from: "#1b1a24", via: "#5c4033", to: "#e3a86f", glow: "#ffd9b0", accent: "#f0c49a" },
  ember: { from: "#140b08", via: "#6b2413", to: "#e46a33", glow: "#ffb07a", accent: "#ff8a4c" },
  ocean: { from: "#04121a", via: "#0f4a5c", to: "#2ea7b8", glow: "#a8f0f7", accent: "#5fd6e6" },
  forest: { from: "#0b120d", via: "#1f3d2b", to: "#7fae74", glow: "#d7f0c8", accent: "#a8d39a" },
  violet: { from: "#0d0a18", via: "#3a2263", to: "#8b6ad6", glow: "#d9c8ff", accent: "#b79aff" },
  steel: { from: "#0a0d10", via: "#28323c", to: "#7c8a96", glow: "#e4edf5", accent: "#aebdc9" },
  sand: { from: "#1a1611", via: "#6a5b41", to: "#d6c3a1", glow: "#fff6e2", accent: "#e8d7b8" },
  mono: { from: "#080808", via: "#2c2c2c", to: "#8f8f8f", glow: "#f2f2f2", accent: "#cfcfcf" },
};

export type ArtworkVariant = keyof typeof palettes;

export function Artwork({
  variant = "dawn",
  className,
  seed = 1,
  label,
}: {
  variant?: ArtworkVariant;
  className?: string;
  seed?: number;
  label?: string;
}) {
  const palette = palettes[variant] ?? palettes.dawn;
  const id = `${variant}-${seed}`;
  const shift = (seed % 5) * 6;

  return (
    <svg
      viewBox="0 0 1600 900"
      preserveAspectRatio="xMidYMid slice"
      className={cn("h-full w-full", className)}
      role={label ? "img" : "presentation"}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`bg-${id}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor={palette.from} />
          <stop offset="52%" stopColor={palette.via} />
          <stop offset="100%" stopColor={palette.to} />
        </linearGradient>
        <radialGradient id={`glow-${id}`} cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={palette.glow} stopOpacity="0.95" />
          <stop offset="55%" stopColor={palette.accent} stopOpacity="0.35" />
          <stop offset="100%" stopColor={palette.accent} stopOpacity="0" />
        </radialGradient>
        <radialGradient id={`shade-${id}`} cx="50%" cy="50%" r="60%">
          <stop offset="0%" stopColor="#000" stopOpacity="0" />
          <stop offset="100%" stopColor="#000" stopOpacity="0.62" />
        </radialGradient>
        <linearGradient id={`beam-${id}`} x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#fff" stopOpacity="0" />
          <stop offset="50%" stopColor="#fff" stopOpacity="0.28" />
          <stop offset="100%" stopColor="#fff" stopOpacity="0" />
        </linearGradient>
        <filter id={`blur-${id}`} x="-30%" y="-30%" width="160%" height="160%">
          <feGaussianBlur stdDeviation="70" />
        </filter>
        <filter id={`grain-${id}`} x="0" y="0" width="100%" height="100%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" seed={seed} />
          <feColorMatrix type="saturate" values="0" />
          <feComponentTransfer>
            <feFuncA type="linear" slope="0.22" />
          </feComponentTransfer>
        </filter>
      </defs>

      <rect width="1600" height="900" fill={`url(#bg-${id})`} />

      <g filter={`url(#blur-${id})`}>
        <ellipse cx={520 + shift * 12} cy={300 + shift * 6} rx="420" ry="300" fill={`url(#glow-${id})`} />
        <ellipse cx={1180 - shift * 10} cy={640 - shift * 8} rx="360" ry="240" fill={palette.accent} opacity="0.24" />
        <ellipse cx={880 + shift * 6} cy={140} rx="300" ry="160" fill={palette.glow} opacity="0.16" />
      </g>

      {/* structural horizon lines, evoking a shot framing grid */}
      <g stroke="#fff" strokeOpacity="0.12" strokeWidth="1">
        <line x1="0" y1="620" x2="1600" y2="596" />
        <line x1="0" y1="660" x2="1600" y2="634" strokeOpacity="0.07" />
        <line x1="240" y1="0" x2="300" y2="900" strokeOpacity="0.06" />
        <line x1="1240" y1="0" x2="1180" y2="900" strokeOpacity="0.06" />
      </g>

      <rect x="0" y="380" width="1600" height="120" fill={`url(#beam-${id})`} opacity="0.5" />
      <rect width="1600" height="900" fill={`url(#shade-${id})`} />
      <rect width="1600" height="900" fill="#fff" opacity="0.02" />
      <rect width="1600" height="900" filter={`url(#grain-${id})`} opacity="0.5" />
    </svg>
  );
}
