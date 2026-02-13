"use client";

import { useMemo, useState } from "react";

type RegionKey =
  | "sumatra"
  | "java"
  | "kalimantan"
  | "sulawesi"
  | "bali_ntt"
  | "maluku_papua";

type Props = {
  /** region yg mau di-highlight sebagai "active" (misal target fokus) */
  activeRegions?: RegionKey[];
  /** optional callback kalau user klik region */
  onSelect?: (region: RegionKey) => void;
  /** ukuran komponen */
  className?: string;
};

const REGION_LABEL: Record<RegionKey, string> = {
  sumatra: "Sumatera",
  java: "Jawa",
  kalimantan: "Kalimantan",
  sulawesi: "Sulawesi",
  bali_ntt: "Bali & Nusa Tenggara",
  maluku_papua: "Maluku & Papua",
};

// Stylized paths (bukan bentuk geografis presisi, tapi “map-like” dan premium)
const PATHS: Record<
  RegionKey,
  { d: string; dot: { cx: number; cy: number } }
> = {
  // Sumatra (left, diagonal)
  sumatra: {
    d: "M58 130 C40 114, 40 92, 58 78 C78 63, 98 63, 112 78 C124 91, 118 109, 104 124 C92 136, 74 140, 58 130 Z",
    dot: { cx: 78, cy: 105 },
  },
  // Java (long horizontal)
  java: {
    d: "M126 168 C145 156, 184 154, 224 160 C256 165, 270 172, 256 181 C236 194, 184 196, 150 188 C128 182, 114 176, 126 168 Z",
    dot: { cx: 190, cy: 175 },
  },
  // Kalimantan (big blob)
  kalimantan: {
    d: "M150 92 C164 70, 198 62, 232 74 C258 84, 272 110, 262 134 C252 160, 224 170, 196 162 C168 154, 136 124, 150 92 Z",
    dot: { cx: 210, cy: 120 },
  },
  // Sulawesi (spiky)
  sulawesi: {
    d: "M276 104 C292 92, 312 96, 322 112 C330 124, 324 140, 310 146 C314 160, 306 172, 292 170 C280 168, 274 154, 276 142 C262 138, 256 124, 264 114 C268 108, 272 106, 276 104 Z",
    dot: { cx: 295, cy: 135 },
  },
  // Bali + NTT (small chain)
  bali_ntt: {
    d: "M238 186 C248 180, 262 180, 272 186 C282 192, 274 200, 260 200 C246 200, 232 192, 238 186 Z M278 194 C288 188, 302 188, 312 194 C322 200, 314 208, 300 208 C286 208, 272 200, 278 194 Z",
    dot: { cx: 292, cy: 201 },
  },
  // Maluku + Papua (right big)
  maluku_papua: {
    d: "M332 138 C350 118, 382 112, 416 124 C446 135, 464 156, 456 176 C446 202, 410 214, 378 204 C350 196, 320 166, 332 138 Z",
    dot: { cx: 400, cy: 165 },
  },
};

function cx(
  active: boolean,
  hovered: boolean,
  base: string,
  activeCls: string,
  hoverCls: string
) {
  return [base, active ? activeCls : "", hovered ? hoverCls : ""]
    .filter(Boolean)
    .join(" ");
}

export default function IndonesiaMiniMap({
  activeRegions = [],
  onSelect,
  className = "",
}: Props) {
  const [hover, setHover] = useState<RegionKey | null>(null);

  const activeSet = useMemo(() => new Set(activeRegions), [activeRegions]);
  const selectedLabel = hover ? REGION_LABEL[hover] : "Hover/klik pulau";

  return (
    <div className={className}>
      <div className="flex items-center justify-between gap-3">
        <div className="text-sm font-semibold text-white/85">Indonesia Map</div>
        <div className="text-xs text-white/70">{selectedLabel}</div>
      </div>

      <div className="mt-3 rounded-2xl border border-white/15 bg-white/5 p-3 backdrop-blur">
        <svg
          viewBox="0 0 520 260"
          className="h-44 w-full"
          role="img"
          aria-label="Stylized map of Indonesia"
        >
          <defs>
            {/* soft glow */}
            <filter id="glow" x="-30%" y="-30%" width="160%" height="160%">
              <feGaussianBlur stdDeviation="6" result="coloredBlur" />
              <feMerge>
                <feMergeNode in="coloredBlur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>

            {/* gradient fill */}
            <linearGradient id="land" x1="0" x2="1" y1="0" y2="1">
              <stop offset="0" stopColor="rgba(255,255,255,0.22)" />
              <stop offset="1" stopColor="rgba(255,255,255,0.10)" />
            </linearGradient>

            <linearGradient id="active" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0" stopColor="rgba(16,185,129,0.65)" />
              <stop offset="1" stopColor="rgba(132,204,22,0.45)" />
            </linearGradient>
          </defs>

          {/* “sea” texture lines */}
          <g opacity="0.35">
            {Array.from({ length: 7 }).map((_, i) => (
              <path
                key={i}
                d={`M20 ${30 + i * 28} C 140 ${18 + i * 28}, 260 ${
                  44 + i * 28
                }, 500 ${26 + i * 28}`}
                stroke="rgba(255,255,255,0.14)"
                strokeWidth="1"
                fill="none"
              />
            ))}
          </g>

          {/* islands */}
          {(Object.keys(PATHS) as RegionKey[]).map((k) => {
            const isActive = activeSet.has(k);
            const isHover = hover === k;

            return (
              <g key={k}>
                <path
                  d={PATHS[k].d}
                  onMouseEnter={() => setHover(k)}
                  onMouseLeave={() => setHover(null)}
                  onClick={() => onSelect?.(k)}
                  className="cursor-pointer transition"
                  fill={isActive ? "url(#active)" : "url(#land)"}
                  stroke={
                    isActive
                      ? "rgba(255,255,255,0.55)"
                      : "rgba(255,255,255,0.28)"
                  }
                  strokeWidth={isHover || isActive ? 1.4 : 1}
                  style={{
                    filter: isActive ? "url(#glow)" : "none",
                    opacity: isHover ? 0.98 : 0.92,
                  }}
                />

                {/* dot marker */}
                <circle
                  cx={PATHS[k].dot.cx}
                  cy={PATHS[k].dot.cy}
                  r={isActive ? 4.2 : 3.2}
                  fill={
                    isActive
                      ? "rgba(255,255,255,0.9)"
                      : "rgba(255,255,255,0.55)"
                  }
                  opacity={isHover ? 0.95 : 0.75}
                />
              </g>
            );
          })}
        </svg>

        {/* legend */}
        <div className="mt-3 flex flex-wrap gap-2">
          {(Object.keys(REGION_LABEL) as RegionKey[]).map((k) => {
            const isActive = activeSet.has(k);
            return (
              <button
                key={k}
                type="button"
                onMouseEnter={() => setHover(k)}
                onMouseLeave={() => setHover(null)}
                onClick={() => onSelect?.(k)}
                className={cx(
                  isActive,
                  hover === k,
                  "rounded-full border px-3 py-1 text-xs font-medium transition backdrop-blur",
                  "border-white/35 bg-white/15 text-white",
                  "border-white/25 bg-white/10 text-white/95"
                )}
              >
                {REGION_LABEL[k]}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-2 text-[11px] text-white/60">
        *Stylized (bukan peta presisi). Bisa diupgrade jadi peta provinsi kalau data siap.
      </div>
    </div>
  );
}
