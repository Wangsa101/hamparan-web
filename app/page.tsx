import Link from "next/link";
import Image from "next/image";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function SectionHeader({
  eyebrow,
  title,
  desc,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
}) {
  return (
    <div className="max-w-2xl">
      {eyebrow && (
        <p className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs font-medium text-emerald-700 shadow-sm">
          <span className="inline-block h-2 w-2 rounded-full bg-emerald-600" />
          {eyebrow}
        </p>
      )}

      <h2 className="mt-3 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
        {title}
      </h2>

      {desc && (
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{desc}</p>
      )}
    </div>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
      {children}
    </span>
  );
}

export default function Home() {
  const sectors = [
    {
      title: "Agrobisnis",
      desc: "Hulu–budidaya–panen untuk mendukung ketahanan pangan berbasis kawasan.",
      img: "/agrobisnis.jpg",
    },
    {
      title: "Agroindustri",
      desc: "Pascapanen, pengolahan, hingga packaging & distribusi modern.",
      img: "/agroindustri.jpg",
    },
    {
      title: "Agrowisata",
      desc: "Edukasi & wisata agro dalam satu kawasan terpadu.",
      img: "/agrowisata.jpg",
    },
  ];

  const programs = [
    {
      title: "Hulu–Hilir Terintegrasi",
      desc: "Penyuluhan, pembibitan, penanaman, pemeliharaan, panen & pascapanen.",
      tags: ["Budidaya", "Panen", "Pascapanen"],
    },
    {
      title: "Processing & Packaging",
      desc: "Sortir, pengolahan bahan jadi, pengepakan untuk menjaga kualitas.",
      tags: ["Sortir", "Processing", "Packaging"],
    },
    {
      title: "Marketing & Distribusi",
      desc: "Distribusi luas hingga bertahap menuju pasar ekspor.",
      tags: ["Marketing", "Distribusi", "Ekspor"],
    },
  ];

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* HERO — Enterprise */}
      <section className="relative overflow-hidden">
        {/* Clean enterprise background */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-slate-50 to-white" />

        <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 pt-12 pb-14 md:grid-cols-2">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-white px-3 py-1 text-xs font-medium text-emerald-700 shadow-sm">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-600" />
              Integrated Agro Ecosystem
            </div>

            <h1 className="mt-5 text-[40px] font-semibold tracking-tight text-slate-900 md:text-5xl leading-[1.05]">
              Bangun rantai pasok agro{" "}
              <span className="text-emerald-700">end-to-end</span> dalam satu
              platform.
            </h1>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-600">
              Pendekatan hulu–hilir yang terintegrasi: budidaya, pengolahan,
              hingga distribusi. Lebih rapi, lebih terukur, dan siap scale.
            </p>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/ekosistem"
                className="rounded-full bg-emerald-700 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-emerald-800 transition"
              >
                Explore Ecosystem
              </Link>
              <Link
                href="/kontak"
                className="rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 transition"
              >
                Book a Call
              </Link>

              <span className="text-xs text-slate-500">
                Respon cepat • Kolaborasi fleksibel
              </span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <Pill>Hulu–Hilir</Pill>
              <Pill>Processing</Pill>
              <Pill>Distribution</Pill>
              <Pill>Export Ready</Pill>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
              <Image
                src="/hero.jpg"
                alt="Hamparan Hijau Internusa"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw"
                quality={90}
              />

              {/* more subtle overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/35 via-transparent to-emerald-600/10" />

              <div className="absolute left-4 top-4 rounded-full border border-white/25 bg-white/15 px-3 py-1 text-xs font-medium text-white backdrop-blur">
                Real-time Monitoring
              </div>

              <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <div className="text-xs font-medium text-white/80">
                      Mode
                    </div>
                    <div className="mt-1 text-sm font-semibold text-white">
                      End-to-End Supply Chain
                    </div>
                    <div className="mt-1 text-xs text-white/70">
                      Budidaya • Processing • Distribusi
                    </div>
                  </div>
                  <div className="rounded-xl bg-white/15 px-3 py-2 text-xs font-semibold text-white">
                    SaaS-ready
                  </div>
                </div>
              </div>
            </div>

            <div className="pointer-events-none absolute -bottom-8 -left-6 hidden w-40 rounded-2xl border border-slate-200 bg-white/90 p-4 shadow-md md:block">
              <div className="text-xs text-slate-500">Ops efficiency</div>
              <div className="mt-1 text-lg font-semibold text-slate-900">
                ↑ 18%
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEKTOR */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <SectionHeader
          eyebrow="Pilar Ekosistem"
          title="Tiga lini utama untuk memperkuat rantai nilai agro"
          desc="Agrobisnis, Agroindustri, dan Agrowisata terintegrasi dalam satu ekosistem."
        />

        <div className="mt-7 grid gap-5 md:grid-cols-3">
          {sectors.map((item) => (
            <div
              key={item.title}
              className="group relative h-80 overflow-hidden rounded-3xl border border-slate-200 shadow-lg"
            >
              <Image
                src={item.img}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
                quality={90}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-white/80">{item.desc}</p>

                <Link
                  href="/ekosistem"
                  className="mt-4 inline-block text-sm font-medium text-emerald-200 hover:text-emerald-100"
                >
                  Pelajari lebih lanjut →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* PROGRAM */}
      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeader
            eyebrow="Program"
            title="Program unggulan untuk agro modern"
            desc="Pendekatan terintegrasi dari budidaya hingga distribusi."
          />
          <Link
            href="/program"
            className="inline-flex w-fit rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 shadow-sm hover:bg-slate-50 transition"
          >
            Semua Program →
          </Link>
        </div>

        <div className="mt-7 grid gap-4 md:grid-cols-3">
          {programs.map((p) => (
            <div
              key={p.title}
              className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition"
            >
              <div className="text-lg font-semibold">{p.title}</div>
              <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700 ring-1 ring-emerald-200/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA — Enterprise */}
      <section className="mx-auto max-w-6xl px-4 pb-12">
        <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 p-7 text-white shadow-lg md:p-9">
          <div className="absolute inset-0 -z-10 bg-gradient-to-br from-slate-950 via-slate-900 to-emerald-950/40" />
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl">
              <div className="text-xs font-medium text-white/70">
                Kemitraan & Kolaborasi
              </div>
              <div className="mt-2 text-2xl font-semibold md:text-3xl">
                Bangun ekosistem pangan Indonesia bersama kami.
              </div>
              <p className="mt-3 text-sm text-white/75">
                Hubungi kami untuk peluang kemitraan, program, atau pengembangan
                kawasan.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/kontak"
                className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-white/90 transition shadow-sm"
              >
                Ajukan Kemitraan
              </Link>
              <Link
                href="/profil"
                className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition"
              >
                Lihat Profil
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
