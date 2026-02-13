import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";

const programs = [
  {
    title: "Program Ketahanan Pangan Nasional",
    desc: "Penguatan ketersediaan pangan melalui pengembangan kawasan agro terintegrasi dan pembinaan rantai pasok.",
  },
  {
    title: "Program Makan Bergizi Gratis (PMBG)",
    desc: "Dukungan suplai bahan pangan berkualitas untuk pemenuhan gizi masyarakat melalui sistem distribusi yang rapi.",
  },
  {
    title: "Pengembangan Kawasan Agro Terpadu",
    desc: "Kawasan produktif berbasis teknologi: produksi, pengolahan, packaging, logistik, hingga akses pasar.",
  },
  {
    title: "Penanaman & Komoditas Strategis",
    desc: "Pengembangan komoditas prioritas dengan tata kelola modern, monitoring, dan peningkatan produktivitas.",
  },
];

const pillars = [
  {
    title: "Agrobisnis",
    desc: "Budidaya modern dan berkelanjutan dari lahan hingga panen.",
    points: ["Pembibitan & budidaya", "SOP & pendampingan", "Produktivitas & kualitas"],
  },
  {
    title: "Agroindustri",
    desc: "Pascapanen, pengolahan, dan packaging sesuai standar pasar.",
    points: ["Grading & QC", "Processing & packaging", "Standardisasi"],
  },
  {
    title: "Distribusi & Pasar",
    desc: "Konektivitas demand–supply dengan logistik yang efisien.",
    points: ["Jaringan distribusi", "Kemitraan buyer", "Traceability"],
  },
];

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-medium text-slate-700 shadow-sm transition hover:bg-slate-50 hover:text-slate-900">
      {children}
    </span>
  );
}

export default function ProgramPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* HERO */}
      <section className="relative">
        {/* enterprise background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-slate-50 to-white" />

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-12 md:grid-cols-2 md:py-16">
          {/* LEFT: Executive summary */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <PageHeader
              kicker="Strategic Initiatives"
              title="Program Strategis"
              desc="Inisiatif PT Hamparan Hijau Internusa untuk ketahanan pangan, penguatan rantai pasok, dan kolaborasi lintas pihak."
            />

            <div className="mt-6 flex flex-wrap gap-2">
              {["Ketahanan Pangan", "Kawasan Agro", "Distribusi", "Kolaborasi"].map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </div>

            <div className="mt-7 flex flex-wrap gap-3">
              <Link
                href="/kontak"
                className="rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
              >
                Ajukan Kerja Sama
              </Link>
              <Link
                href="/ekosistem"
                className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50"
              >
                Lihat Ekosistem
              </Link>

              <span className="self-center text-xs text-slate-500">
                Respon cepat • Model kolaborasi fleksibel
              </span>
            </div>
          </div>

          {/* RIGHT: Image hero */}
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
              <Image
                src="/section2.jpg"
                alt="Program Strategis - PT Hamparan Hijau Internusa"
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={92}
              />

              {/* cinematic overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/35 via-transparent to-emerald-600/10" />

              <div className="absolute left-4 top-4 rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                Strategic Programs
              </div>

              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs font-medium text-white/80">Focus</div>
                    <div className="mt-1 text-sm font-semibold text-white">
                      End-to-End Supply Chain Enablement
                    </div>
                    <div className="mt-1 text-xs text-white/70">
                      Produksi • Pengolahan • Distribusi
                    </div>
                  </div>
                  <div className="rounded-xl bg-white/15 px-3 py-2 text-xs font-semibold text-white">
                    Scale-ready
                  </div>
                </div>
              </div>
            </div>

            {/* subtle metric card */}
            <div className="pointer-events-none absolute -bottom-6 -left-6 hidden w-44 rounded-2xl border border-slate-200 bg-white/85 p-4 shadow-md backdrop-blur md:block">
              <div className="text-xs text-slate-500">Operational readiness</div>
              <div className="mt-1 text-lg font-semibold text-slate-900">↑ Terukur</div>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section className="mx-auto max-w-6xl px-4 py-14">
        <div className="max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs font-medium text-emerald-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-600" />
            Program Areas
          </p>
          <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            Pilar program yang mendukung ekosistem agro
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-slate-600">
            Struktur program disusun untuk memastikan operasional hulu–hilir berjalan efektif dan terukur.
          </p>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="text-lg font-semibold text-slate-900">{p.title}</div>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>

              <div className="mt-4 space-y-2">
                {p.points.map((x) => (
                  <div key={x} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-600" />
                    <div className="text-sm text-slate-700">{x}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAM LIST */}
      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-medium text-slate-700 shadow-sm">
              <span className="h-2 w-2 rounded-full bg-slate-700" />
              Strategic Programs
            </p>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
              Daftar program strategis
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600">
              Program berikut dapat dikembangkan melalui kemitraan pemerintah, kawasan, distribusi, dan kolaborasi lintas pihak.
            </p>
          </div>

          <Link
            href="/kontak"
            className="inline-flex w-fit rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-800"
          >
            Diskusi Program →
          </Link>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {programs.map((p, idx) => (
            <div
              key={p.title}
              className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <div className="text-xs font-medium text-slate-500">
                    Program {String(idx + 1).padStart(2, "0")}
                  </div>
                  <div className="mt-1 text-lg font-semibold text-slate-900">
                    {p.title}
                  </div>
                </div>

                <span className="rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                  Strategic
                </span>
              </div>

              <p className="mt-2 text-sm leading-relaxed text-slate-600">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA block */}
        <div className="mt-10 relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-lg">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.35),transparent_35%),radial-gradient(circle_at_85%_25%,rgba(132,204,22,0.20),transparent_40%)]" />

          <div className="text-sm font-semibold text-white/80">Kolaborasi</div>
          <div className="mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
            Mari bersinergi untuk masa depan pangan Indonesia.
          </div>
          <p className="mt-3 max-w-2xl text-sm text-white/75">
            Kami terbuka untuk kerja sama pemerintah, mitra distribusi, mitra kawasan, dan kolaborasi program strategis.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/kontak"
              className="inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm transition hover:bg-white/90"
            >
              Ajukan Kerja Sama
            </Link>
            <Link
              href="/ekosistem"
              className="inline-flex rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              Lihat Ekosistem
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
