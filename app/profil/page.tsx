import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProfilPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="mx-auto max-w-6xl px-4 pt-10 pb-12">
        <div className="relative overflow-hidden rounded-3xl border border-slate-100 bg-white p-6 shadow-sm md:p-10">
          <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.10),transparent_35%),radial-gradient(circle_at_80%_30%,rgba(132,204,22,0.08),transparent_40%)]" />

          <div className="grid gap-8 md:grid-cols-[260px,1fr] md:items-start">
            {/* PHOTO */}
            <div className="flex justify-center md:block">
              <div className="relative h-64 w-64 overflow-hidden rounded-3xl ring-1 ring-slate-200 shadow-md">
                <Image
                  src="/direktur.jpg"
                  alt="Syamsoel Bachrie - Direktur Utama"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 768px) 256px, 260px"
                />
              </div>
            </div>

            {/* CONTENT */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/70 px-3 py-1 text-xs font-semibold text-emerald-700 shadow-sm backdrop-blur">
                <span className="inline-block h-2 w-2 rounded-full bg-emerald-500" />
                Sambutan Direktur Utama
              </div>

              <h1 className="mt-4 text-3xl font-semibold tracking-tight text-slate-900 md:text-4xl">
                Syamsoel Bachrie S Dipl. TM{" "}
                <span className="text-slate-300">—</span>{" "}
                <span className="text-emerald-700">Direktur Utama</span>
              </h1>

              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-600">
                Menegaskan integrasi Agrobisnis, Agroindustri, dan Agrowisata
                sebagai strategi pelayanan dan kesejahteraan masyarakat petani
                Indonesia.
              </p>

              {/* QUOTE CARD */}
              <div className="mt-6 rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
                <div className="text-xs font-semibold text-slate-500">Pesan</div>
                <p className="mt-3 text-sm leading-relaxed text-slate-700">
                  “Dengan konsep program ketahanan pangan yang terintegrasikan
                  antara Agrobisnis, Agroindustri & Agrowisata merupakan kekuatan
                  yang sangat strategis untuk memberikan pelayanan & kesejahteraan
                  kepada masyarakat petani Indonesia...”
                </p>

                <div className="mt-4 text-xs text-slate-500">
                  — Syamsoel Bachrie S Dipl. TM, Direktur Utama
                </div>
              </div>

              {/* MINI META */}
              <div className="mt-6 flex flex-wrap gap-2">
                {["Kepemimpinan", "Integrasi Hulu–Hilir", "Ekosistem", "Kolaborasi"].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {t}
                    </span>
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}