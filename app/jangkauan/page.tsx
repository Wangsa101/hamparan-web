"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";

type Region =
  | "Sumatera"
  | "Jawa"
  | "BaliNusra"
  | "Kalimantan"
  | "Sulawesi"
  | "Maluku"
  | "Papua";

type Province = {
  id: string;
  name: string;
  x: number; // %
  y: number; // %
  region: Region;
};

const REGIONS: { key: Region; label: string }[] = [
  { key: "Sumatera", label: "Sumatera" },
  { key: "Jawa", label: "Jawa" },
  { key: "Kalimantan", label: "Kalimantan" },
  { key: "Sulawesi", label: "Sulawesi" },
  { key: "BaliNusra", label: "Bali & Nusa Tenggara" },
  { key: "Maluku", label: "Maluku" },
  { key: "Papua", label: "Papua" },
];

const REGION_COLOR: Record<Region, string> = {
  Sumatera: "emerald",
  Jawa: "green",
  BaliNusra: "teal",
  Kalimantan: "cyan",
  Sulawesi: "lime",
  Maluku: "sky",
  Papua: "indigo",
};

// 38 provinsi (posisi dot perkiraan, bisa lo geser dikit kalau mau super presisi)
const PROVINCES: Province[] = [
  // Sumatera (10)
  { id: "aceh", name: "Aceh", x: 18, y: 32, region: "Sumatera" },
  { id: "sumut", name: "Sumatera Utara", x: 22, y: 36, region: "Sumatera" },
  { id: "sumbar", name: "Sumatera Barat", x: 20, y: 42, region: "Sumatera" },
  { id: "riau", name: "Riau", x: 24, y: 41, region: "Sumatera" },
  { id: "kepri", name: "Kepulauan Riau", x: 28, y: 36, region: "Sumatera" },
  { id: "jambi", name: "Jambi", x: 24, y: 46, region: "Sumatera" },
  { id: "bengkulu", name: "Bengkulu", x: 20, y: 48, region: "Sumatera" },
  { id: "sumsel", name: "Sumatera Selatan", x: 24, y: 52, region: "Sumatera" },
  { id: "babel", name: "Kep. Bangka Belitung", x: 30, y: 52, region: "Sumatera" },
  { id: "lampung", name: "Lampung", x: 26, y: 58, region: "Sumatera" },

  // Jawa (6)
  { id: "banten", name: "Banten", x: 32, y: 63, region: "Jawa" },
  { id: "dki", name: "DKI Jakarta", x: 34, y: 63, region: "Jawa" },
  { id: "jabar", name: "Jawa Barat", x: 36, y: 64, region: "Jawa" },
  { id: "jateng", name: "Jawa Tengah", x: 40, y: 66, region: "Jawa" },
  { id: "diy", name: "DI Yogyakarta", x: 42, y: 68, region: "Jawa" },
  { id: "jatim", name: "Jawa Timur", x: 46, y: 66, region: "Jawa" },

  // Bali + Nusa Tenggara (3)
  { id: "bali", name: "Bali", x: 50, y: 70, region: "BaliNusra" },
  { id: "ntb", name: "Nusa Tenggara Barat", x: 54, y: 72, region: "BaliNusra" },
  { id: "ntt", name: "Nusa Tenggara Timur", x: 60, y: 74, region: "BaliNusra" },

  // Kalimantan (5)
  { id: "kalbar", name: "Kalimantan Barat", x: 42, y: 40, region: "Kalimantan" },
  { id: "kalteng", name: "Kalimantan Tengah", x: 46, y: 44, region: "Kalimantan" },
  { id: "kalsel", name: "Kalimantan Selatan", x: 48, y: 50, region: "Kalimantan" },
  { id: "kaltim", name: "Kalimantan Timur", x: 52, y: 42, region: "Kalimantan" },
  { id: "kaltara", name: "Kalimantan Utara", x: 50, y: 36, region: "Kalimantan" },

  // Sulawesi (6)
  { id: "sulut", name: "Sulawesi Utara", x: 60, y: 42, region: "Sulawesi" },
  { id: "gorontalo", name: "Gorontalo", x: 58, y: 46, region: "Sulawesi" },
  { id: "sulteng", name: "Sulawesi Tengah", x: 60, y: 50, region: "Sulawesi" },
  { id: "sulbar", name: "Sulawesi Barat", x: 56, y: 54, region: "Sulawesi" },
  { id: "sulsel", name: "Sulawesi Selatan", x: 58, y: 60, region: "Sulawesi" },
  { id: "sultra", name: "Sulawesi Tenggara", x: 62, y: 58, region: "Sulawesi" },

  // Maluku (2)
  { id: "maluku", name: "Maluku", x: 70, y: 56, region: "Maluku" },
  { id: "malut", name: "Maluku Utara", x: 72, y: 48, region: "Maluku" },

  // Papua (6)
  { id: "papbar", name: "Papua Barat", x: 82, y: 54, region: "Papua" },
  { id: "papua", name: "Papua", x: 92, y: 54, region: "Papua" },
  { id: "papbaratdaya", name: "Papua Barat Daya", x: 80, y: 58, region: "Papua" },
  { id: "papteng", name: "Papua Tengah", x: 86, y: 52, region: "Papua" },
  { id: "papgun", name: "Papua Pegunungan", x: 88, y: 50, region: "Papua" },
  { id: "papsel", name: "Papua Selatan", x: 88, y: 60, region: "Papua" },
];

function cx(...xs: Array<string | false | null | undefined>) {
  return xs.filter(Boolean).join(" ");
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/70 px-3 py-1 text-xs font-medium text-emerald-700 shadow-sm backdrop-blur">
      <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
      {children}
    </span>
  );
}

function StatCard({
  value,
  label,
  desc,
}: {
  value: string;
  label: string;
  desc: string;
}) {
  return (
    <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm">
      <div className="text-3xl font-semibold tracking-tight">{value}</div>
      <div className="mt-2 text-sm font-medium text-slate-900">{label}</div>
      <div className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</div>
    </div>
  );
}

function MapLegend({ activeRegion }: { activeRegion: Region }) {
  return (
    <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-white/70">
      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
        Total: {PROVINCES.length}
      </span>
      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
        Highlight: {REGIONS.find((r) => r.key === activeRegion)?.label}
      </span>
      <span className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1">
        Hover untuk preview • Klik untuk lock
      </span>
    </div>
  );
}

function MiniMapPremium({
  activeRegion,
  onRegion,
  activeProvinceId,
  onPickProvince,
}: {
  activeRegion: Region;
  onRegion: (r: Region) => void;
  activeProvinceId: string;
  onPickProvince: (id: string) => void;
}) {
  const [hovered, setHovered] = useState<string | null>(null);
  const [locked, setLocked] = useState<boolean>(true);
  const wrapRef = useRef<HTMLDivElement | null>(null);

  const selectedId = locked ? activeProvinceId : hovered ?? activeProvinceId;
  const selected = useMemo(
    () => PROVINCES.find((p) => p.id === selectedId),
    [selectedId]
  );

  const highlighted = useMemo(() => {
    return new Set(PROVINCES.filter((p) => p.region === activeRegion).map((p) => p.id));
  }, [activeRegion]);

  const tooltip = useMemo(() => {
    const p = PROVINCES.find((x) => x.id === (hovered ?? activeProvinceId));
    return p ?? null;
  }, [hovered, activeProvinceId]);

  return (
    <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur">
      <div className="flex items-center justify-between gap-3">
        <div className="text-xs text-white/80">
          <div className="font-semibold">Indonesia – 38 Provinsi</div>
          <div className="mt-0.5 text-[11px] text-white/60">
            {locked ? "Mode: locked (klik dot untuk ganti)" : "Mode: preview (hover)"}
          </div>
        </div>

        <button
          onClick={() => setLocked((v) => !v)}
          className="rounded-full border border-white/15 bg-white/5 px-3 py-2 text-xs font-semibold text-white/80 hover:bg-white/10"
          title="Toggle lock/preview"
        >
          {locked ? "🔒 Locked" : "👁 Preview"}
        </button>
      </div>

      {/* Region Buttons */}
      <div className="mt-4 flex flex-wrap gap-2">
        {REGIONS.map((r) => {
          const active = r.key === activeRegion;
          return (
            <button
              key={r.key}
              onClick={() => onRegion(r.key)}
              className={cx(
                "rounded-full px-3 py-2 text-xs font-semibold transition ring-1",
                active
                  ? "bg-white/15 ring-white/20"
                  : "bg-white/5 ring-white/10 hover:bg-white/10"
              )}
            >
              {r.label}
            </button>
          );
        })}
      </div>

      {/* Map */}
      <div
        ref={wrapRef}
        className="relative mt-4 aspect-[2/1] w-full overflow-hidden rounded-xl border border-white/10 bg-black/20"
      >
        <img
          src="/indonesia-map.png"
          alt="Indonesia Map"
          className="h-full w-full object-contain opacity-90"
          draggable={false}
        />

        {/* tooltip (simple absolute) */}
        {tooltip && (
          <div
            className="pointer-events-none absolute z-20 hidden md:block"
            style={{
              left: `${tooltip.x}%`,
              top: `${tooltip.y}%`,
              transform: "translate(12px, -110%)",
            }}
          >
            <div className="rounded-xl border border-white/15 bg-slate-950/85 px-3 py-2 text-[11px] text-white shadow-lg backdrop-blur">
              <div className="font-semibold">{tooltip.name}</div>
              <div className="mt-0.5 text-white/70">
                Region: {REGIONS.find((r) => r.key === tooltip.region)?.label}
              </div>
              <div className="mt-1 text-white/60">Klik untuk set aktif</div>
            </div>
          </div>
        )}

        {/* Dots */}
        {PROVINCES.map((p) => {
          const isActive = activeProvinceId === p.id;
          const isRegion = highlighted.has(p.id);
          const color = REGION_COLOR[p.region];

          // tailwind classes computed safely
          const dotBase =
            "block rounded-full transition will-change-transform";
          const size = isActive ? "h-3.5 w-3.5" : "h-3 w-3";
          const opacity = isRegion ? "opacity-100" : "opacity-50";

          // use a neutral base + ring overlay (avoid dynamic class explosion)
          const bg = isActive
            ? "bg-emerald-300"
            : isRegion
            ? "bg-white"
            : "bg-white/70";

          const ring = isActive
            ? "ring-4 ring-emerald-400/25"
            : "ring-2 ring-white/10 hover:ring-white/20";

          return (
            <button
              key={p.id}
              onMouseEnter={() => setHovered(p.id)}
              onMouseLeave={() => setHovered(null)}
              onFocus={() => setHovered(p.id)}
              onBlur={() => setHovered(null)}
              onClick={() => {
                onPickProvince(p.id);
                setLocked(true);
              }}
              className="absolute z-10"
              style={{
                left: `${p.x}%`,
                top: `${p.y}%`,
                transform: "translate(-50%, -50%)",
              }}
              aria-label={p.name}
              title={p.name}
            >
              {/* pulse for active */}
              {isActive && (
                <span className="absolute -inset-2 rounded-full bg-emerald-400/20 blur-sm animate-pulse" />
              )}

              {/* subtle region tint (tiny halo) */}
              {isRegion && !isActive && (
                <span className="absolute -inset-2 rounded-full bg-white/5 blur-sm" />
              )}

              <span className={cx(dotBase, size, bg, ring, opacity)} />

              {/* tiny label on active (desktop) */}
              {isActive && (
                <span className="pointer-events-none absolute left-1/2 top-full mt-2 hidden -translate-x-1/2 whitespace-nowrap rounded-full border border-white/10 bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white/90 backdrop-blur md:block">
                  {p.name}
                </span>
              )}

              {/* optional: colored hint (keeps it premium but subtle) */}
              <span
                className={cx(
                  "absolute -right-2 -top-2 hidden h-2 w-2 rounded-full ring-1 ring-white/10 md:block",
                  color === "emerald" && "bg-emerald-300/80",
                  color === "green" && "bg-green-300/80",
                  color === "teal" && "bg-teal-300/80",
                  color === "cyan" && "bg-cyan-300/80",
                  color === "lime" && "bg-lime-300/80",
                  color === "sky" && "bg-sky-300/80",
                  color === "indigo" && "bg-indigo-300/80"
                )}
              />
            </button>
          );
        })}
      </div>

      <MapLegend activeRegion={activeRegion} />

      {/* Selected detail */}
      <div className="mt-5 rounded-2xl border border-white/10 bg-white/5 p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <div className="text-xs font-medium text-white/70">
              Provinsi aktif
            </div>
            <div className="mt-1 text-base font-semibold">
              {selected?.name ?? "—"}
            </div>
            <div className="mt-1 text-xs text-white/60">
              Region: {selected ? REGIONS.find((r) => r.key === selected.region)?.label : "—"}
            </div>
          </div>

          <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-semibold text-emerald-200 ring-1 ring-emerald-400/20">
            Active
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <Link
            href="/kontak"
            className="inline-flex rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-white/90 transition"
          >
            Ajukan Kemitraan
          </Link>
          <Link
            href="/program"
            className="inline-flex rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10 transition"
          >
            Lihat Program
          </Link>
        </div>
      </div>
    </div>
  );
}

function ProvincePanel({
  activeRegion,
  activeProvinceId,
  onPickProvince,
}: {
  activeRegion: Region;
  activeProvinceId: string;
  onPickProvince: (id: string) => void;
}) {
  const [q, setQ] = useState("");

  const list = useMemo(() => {
    const base = PROVINCES.filter((p) => p.region === activeRegion);
    const filtered = q.trim()
      ? base.filter((p) => p.name.toLowerCase().includes(q.toLowerCase()))
      : base;

    return filtered.sort((a, b) => a.name.localeCompare(b.name, "id"));
  }, [activeRegion, q]);

  return (
    <div className="mt-6 rounded-2xl border border-white/15 bg-white/5 p-4 backdrop-blur">
      <div className="flex items-center justify-between gap-3">
        <div className="text-xs text-white/80">
          <div className="font-semibold">Daftar Provinsi</div>
          <div className="mt-0.5 text-[11px] text-white/60">
            Filter per region • cepat pilih
          </div>
        </div>

        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search..."
          className="w-40 rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white placeholder:text-white/40 outline-none focus:ring-2 focus:ring-emerald-400/20"
        />
      </div>

      <div className="mt-4 max-h-56 overflow-auto pr-1">
        <div className="grid gap-2">
          {list.map((p) => {
            const active = p.id === activeProvinceId;
            return (
              <button
                key={p.id}
                onClick={() => onPickProvince(p.id)}
                className={cx(
                  "flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-left text-xs transition ring-1",
                  active
                    ? "bg-white/15 ring-white/20"
                    : "bg-white/5 ring-white/10 hover:bg-white/10"
                )}
              >
                <span className="font-semibold text-white/90">{p.name}</span>
                <span className="text-[11px] text-white/55">{p.id.toUpperCase()}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default function JangkauanPage() {
  const [activeRegion, setActiveRegion] = useState<Region>("Jawa");
  const [activeProvinceId, setActiveProvinceId] = useState<string>("jabar");

  const selectedProvince = useMemo(
    () => PROVINCES.find((p) => p.id === activeProvinceId),
    [activeProvinceId]
  );

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.14),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(132,204,22,0.10),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(2,132,199,0.06),transparent_45%)]" />

        <div className="mx-auto max-w-6xl px-4 py-14">
          <div className="rounded-[32px] border border-slate-100 bg-white p-8 shadow-sm md:p-10">
            <PageHeader
              kicker="National Reach"
              title="Jangkauan Operasional"
              desc="Kami membangun jaringan operasional lintas wilayah Indonesia untuk mendukung rantai pasok pangan yang kuat — dari onboarding kawasan hingga distribusi."
            />

            <div className="mt-6 flex flex-wrap items-center gap-3">
              {["Multi-Region", "Supply–Demand", "Traceability", "Scale-ready"].map((t) => (
                <span
                  key={t}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/kontak"
                className="rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-md shadow-emerald-900/10 hover:bg-emerald-800 transition"
              >
                Diskusi Jangkauan
              </Link>
              <Link
                href="/ekosistem"
                className="rounded-full border border-slate-200 bg-white/70 px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-white transition backdrop-blur"
              >
                Lihat Ekosistem
              </Link>

              <span className="text-xs text-slate-500">
                Rencana bertahap • Berbasis data • Kolaboratif
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="mx-auto max-w-6xl px-4 pb-10">
        <div className="grid gap-4 md:grid-cols-3">
          <StatCard
            value="38"
            label="Provinsi (coverage)"
            desc="Struktur jangkauan dirancang untuk ekspansi lintas pulau."
          />
          <StatCard
            value="—"
            label="Hectares"
            desc="Akan diisi setelah data final kawasan & kapasitas."
          />
          <StatCard
            value="—"
            label="Mitra"
            desc="Koperasi, BUMDes, buyer, stakeholder, dan operator kawasan."
          />
        </div>
      </section>

      {/* CONTENT */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          {/* LEFT */}
          <div className="rounded-3xl border border-slate-100 bg-white p-8 shadow-sm">
            <Badge>Coverage Framework</Badge>

            <h2 className="mt-4 text-2xl font-semibold tracking-tight md:text-3xl">
              Dari kawasan ke pasar, terukur per wilayah
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Model jangkauan kami disusun untuk mendukung pembinaan produksi, SOP
              operasional, dan konektivitas logistik–distribusi. Fokusnya: implementasi yang rapi dan siap scale.
            </p>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="text-sm font-semibold text-slate-900">
                Onboarding kawasan
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Pemetaan lokasi, komoditas, kapasitas, dan rencana tanam/produksi.
              </p>
            </div>

            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="text-sm font-semibold text-slate-900">
                SOP & monitoring
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Standarisasi proses budidaya & pascapanen dengan KPI terukur.
              </p>
            </div>

            <div className="mt-4 rounded-2xl border border-slate-200 bg-slate-50 p-5">
              <div className="text-sm font-semibold text-slate-900">
                Distribusi & scale
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Koneksikan supply ke demand, rapikan logistik, dan siap ekspansi.
              </p>
            </div>

            {/* quick info */}
            <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-5">
              <div className="text-xs text-slate-500">Aktif sekarang</div>
              <div className="mt-1 text-lg font-semibold text-slate-900">
                {selectedProvince?.name ?? "—"}
              </div>
              <div className="mt-1 text-sm text-slate-600">
                Region:{" "}
                {selectedProvince
                  ? REGIONS.find((r) => r.key === selectedProvince.region)?.label
                  : "—"}
              </div>
            </div>
          </div>

          {/* RIGHT (Premium Dark + Map + List) */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-slate-950 p-8 text-white shadow-sm">
            <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_25%_20%,rgba(16,185,129,0.25),transparent_45%),radial-gradient(circle_at_80%_30%,rgba(132,204,22,0.18),transparent_50%)]" />

            <div className="text-sm font-semibold text-white/80">
              Wilayah Prioritas
            </div>
            <div className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
              Ekspansi lintas pulau, bertahap dan realistis
            </div>

            <p className="mt-3 text-sm text-white/70">
              Fokus awal disesuaikan dengan kesiapan kawasan, kemitraan, dan kebutuhan demand.
            </p>

            <MiniMapPremium
              activeRegion={activeRegion}
              onRegion={(r) => setActiveRegion(r)}
              activeProvinceId={activeProvinceId}
              onPickProvince={(id) => setActiveProvinceId(id)}
            />

            <ProvincePanel
              activeRegion={activeRegion}
              activeProvinceId={activeProvinceId}
              onPickProvince={(id) => setActiveProvinceId(id)}
            />
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
