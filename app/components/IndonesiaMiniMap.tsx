"use client";

import Image from "next/image";

type IslandKey =
  | "sumatera"
  | "jawa"
  | "kalimantan"
  | "sulawesi"
  | "bali_nt"
  | "maluku_papua";

export default function IndonesiaMiniMap({
  active = "jawa",
  onSelect,
}: {
  active?: IslandKey;
  onSelect?: (k: IslandKey) => void;
}) {
  const Tag = ({ k, label }: { k: IslandKey; label: string }) => {
    const on = active === k;
    return (
      <button
        onClick={() => onSelect?.(k)}
        className={[
          "rounded-full px-3 py-1 text-xs font-semibold transition border",
          on
            ? "bg-emerald-500/20 text-emerald-200 border-emerald-400/40"
            : "bg-white/5 text-white/70 border-white/10 hover:bg-white/10",
        ].join(" ")}
      >
        {label}
      </button>
    );
  };

  const Hotspot = ({
    k,
    style,
    title,
  }: {
    k: IslandKey;
    style: React.CSSProperties;
    title: string;
  }) => {
    const on = active === k;
    return (
      <button
        title={title}
        onClick={() => onSelect?.(k)}
        className={[
          "absolute rounded-2xl transition",
          on ? "ring-2 ring-emerald-400/70" : "ring-0",
          "hover:ring-2 hover:ring-white/30",
        ].join(" ")}
        style={style}
      />
    );
  };

  return (
    <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950 p-5">
      <div className="pointer-events-none absolute inset-0 opacity-80">
        <div className="absolute -left-10 top-10 h-56 w-56 rounded-full bg-emerald-500/20 blur-3xl" />
        <div className="absolute -right-10 top-0 h-64 w-64 rounded-full bg-lime-500/10 blur-3xl" />
      </div>

      <div className="relative">
        <div className="mb-3 flex items-center justify-between">
          <div className="text-sm font-semibold text-white/90">Peta Indonesia</div>
          <div className="text-xs text-white/60">Klik pulau</div>
        </div>

        {/* Map */}
        <div className="relative h-[260px] w-full md:h-[320px]">
          <Image
            src="/indonesia-map.png"
            alt="Peta Indonesia"
            fill
            priority
            className="object-contain"
            sizes="(max-width: 768px) 100vw, 50vw"
          />

          {/* Hotspots (posisi % biar responsif) */}
          <Hotspot
            k="sumatera"
            title="Sumatera"
            style={{ left: "10%", top: "33%", width: "18%", height: "28%" }}
          />
          <Hotspot
            k="jawa"
            title="Jawa"
            style={{ left: "28%", top: "63%", width: "20%", height: "12%" }}
          />
          <Hotspot
            k="kalimantan"
            title="Kalimantan"
            style={{ left: "43%", top: "30%", width: "22%", height: "30%" }}
          />
          <Hotspot
            k="sulawesi"
            title="Sulawesi"
            style={{ left: "64%", top: "38%", width: "14%", height: "22%" }}
          />
          <Hotspot
            k="bali_nt"
            title="Bali & Nusa Tenggara"
            style={{ left: "49%", top: "71%", width: "22%", height: "10%" }}
          />
          <Hotspot
            k="maluku_papua"
            title="Maluku & Papua"
            style={{ left: "74%", top: "40%", width: "22%", height: "32%" }}
          />

          {/* Overlay highlight */}
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-emerald-950/35 via-transparent to-lime-500/10" />
        </div>

        {/* Legend */}
        <div className="mt-4 flex flex-wrap gap-2">
          <Tag k="sumatera" label="Sumatera" />
          <Tag k="jawa" label="Jawa" />
          <Tag k="kalimantan" label="Kalimantan" />
          <Tag k="sulawesi" label="Sulawesi" />
          <Tag k="bali_nt" label="Bali & NT" />
          <Tag k="maluku_papua" label="Maluku & Papua" />
        </div>
      </div>
    </div>
  );
}