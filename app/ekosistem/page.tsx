import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs font-medium text-emerald-700 shadow-sm">
      <span className="h-2 w-2 rounded-full bg-emerald-600" />
      {children}
    </span>
  );
}

function Icon({
  name,
  className = "h-5 w-5",
}: {
  name: "leaf" | "factory" | "map";
  className?: string;
}) {
  const common = { className };
  if (name === "leaf")
    return (
      <svg viewBox="0 0 24 24" fill="none" {...common}>
        <path
          d="M20 4c-7.5.2-12.8 3.9-15 11.2-.4 1.4-.6 2.9-.6 4.8 1.9 0 3.4-.2 4.8-.6C16.1 17.2 19.8 12 20 4Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M6.2 17.8c2.6-3.6 6.1-6.2 11-8.2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );

  if (name === "factory")
    return (
      <svg viewBox="0 0 24 24" fill="none" {...common}>
        <path
          d="M4 20V10l6 3V10l6 3V8l4 2v10H4Z"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <path
          d="M8 20v-3M12 20v-5M16 20v-2"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
        />
      </svg>
    );

  return (
    <svg viewBox="0 0 24 24" fill="none" {...common}>
      <path
        d="M4 6l8-3 8 3v12l-8 3-8-3V6Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M12 3v18"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path
        d="M4 9l8 3 8-3"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PremiumCard({
  title,
  icon,
  items,
}: {
  title: string;
  icon: "leaf" | "factory" | "map";
  items: string[];
}) {
  return (
    <div className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="text-lg font-semibold text-slate-900">{title}</div>
          <div className="mt-1 text-xs text-slate-500">
            Standar proses • KPI terukur • Scale-ready
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-slate-50 p-3 text-emerald-700 transition group-hover:bg-emerald-50">
          <Icon name={icon} />
        </div>
      </div>

      <ul className="mt-5 space-y-2 text-sm text-slate-600">
        {items.map((t) => (
          <li key={t} className="flex items-start gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-emerald-600" />
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Kpi({
  label,
  value,
  note,
}: {
  label: string;
  value: string;
  note: string;
}) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4">
      <div className="text-xs font-medium text-slate-500">{label}</div>
      <div className="mt-1 text-sm font-semibold text-slate-900">{value}</div>
      <div className="mt-1 text-xs text-slate-500">{note}</div>
    </div>
  );
}

export default function EkosistemPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="relative">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-slate-50 to-white" />

        <div className="mx-auto max-w-6xl px-4 pt-10 pb-12">
          {/* Executive summary */}
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <Badge>Integrated Ecosystem</Badge>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
              Ekosistem Agro Terintegrasi
            </h1>

            <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600">
              Kami membangun ekosistem terstruktur dari hulu sampai hilir untuk meningkatkan
              produktivitas, kualitas, dan efisiensi distribusi pangan—dengan tata kelola,
              SOP, dan KPI yang terukur.
            </p>

            {/* Governance strip */}
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <Kpi
                label="Governance"
                value="SOP & audit internal"
                note="Proses standar & konsisten"
              />
              <Kpi
                label="Monitoring"
                value="KPI operasional"
                note="Progress, biaya, output, mutu"
              />
              <Kpi
                label="Distribution"
                value="Supply → Demand"
                note="Rute & channel lebih efektif"
              />
            </div>
          </div>

          {/* Pillars */}
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <PremiumCard
              title="Agrobisnis"
              icon="leaf"
              items={[
                "Pembukaan & pengelolaan lahan",
                "Pembibitan & penanaman",
                "Pemupukan & pemeliharaan",
                "Panen & pasca panen",
              ]}
            />
            <PremiumCard
              title="Agroindustri"
              icon="factory"
              items={[
                "Sortasi & quality control",
                "Pengolahan hasil bumi",
                "Packaging & standardisasi",
                "Distribusi & pemasaran",
              ]}
            />
            <PremiumCard
              title="Agrowisata"
              icon="map"
              items={[
                "Edukasi & pelatihan agro",
                "Kawasan wisata berbasis agro",
                "Fasilitas penunjang (opsional)",
                "Pemberdayaan ekonomi lokal",
              ]}
            />
          </div>

          {/* How we work */}
          <div className="mt-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <div className="max-w-2xl">
              <div className="text-xs font-medium text-slate-500">How We Work</div>
              <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900">
                Dari onboarding sampai scale
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                Alur kerja yang terstandardisasi untuk memastikan kualitas output, efisiensi biaya,
                serta kesiapan ekspansi bertahap.
              </p>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              {[
                {
                  n: "01",
                  t: "Onboard kawasan & mitra",
                  d: "Mapping lokasi, komoditas, kapasitas, dan rencana tanam/produksi.",
                },
                {
                  n: "02",
                  t: "Jalankan SOP & monitoring",
                  d: "Operasional budidaya, pascapanen, hingga processing dengan KPI terukur.",
                },
                {
                  n: "03",
                  t: "Distribusi & scale",
                  d: "Koneksikan supply ke demand, rapihkan logistik, dan siap ekspansi.",
                },
              ].map((s) => (
                <div
                  key={s.n}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="text-sm font-semibold text-emerald-700">{s.n}</div>
                  <div className="mt-2 text-base font-semibold text-slate-900">{s.t}</div>
                  <p className="mt-2 text-sm text-slate-600">{s.d}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-950 p-8 text-white shadow-lg md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div className="max-w-2xl">
                <div className="text-xs font-medium text-white/70">
                  Kolaborasi & Kemitraan
                </div>
                <div className="mt-2 text-2xl font-semibold md:text-3xl">
                  Siap membangun ekosistem di wilayah Anda?
                </div>
                <p className="mt-3 text-sm text-white/75">
                  Ceritakan lokasi, komoditas utama, dan target output. Kami bantu susun model
                  kemitraan yang sesuai.
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="/kontak"
                  className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 shadow-sm hover:bg-white/90 transition"
                >
                  Ajukan Kemitraan
                </a>
                <a
                  href="/program"
                  className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
                >
                  Lihat Program
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
