import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProfilPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="relative overflow-hidden">
        {/* soft background glow */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_15%,rgba(16,185,129,0.10),transparent_35%),radial-gradient(circle_at_85%_30%,rgba(132,204,22,0.08),transparent_40%),radial-gradient(circle_at_50%_90%,rgba(2,132,199,0.06),transparent_45%)]" />

        <div className="mx-auto max-w-6xl px-4 py-10 md:py-14">
          <div className="rounded-3xl border border-slate-100 bg-white/80 p-6 shadow-sm backdrop-blur md:p-10">
            <div className="grid gap-10 md:grid-cols-[320px,1fr] md:items-start">
              {/* LEFT: PHOTO */}
              <div className="md:sticky md:top-24">
                <div className="flex justify-center md:justify-start">
                  <div className="relative w-[260px]">
                    {/* premium frame */}
                    <div className="absolute -inset-[2px] rounded-[28px] bg-gradient-to-br from-emerald-200 via-slate-200 to-lime-200 opacity-70 blur-[0.2px]" />
                    <div className="relative overflow-hidden rounded-[26px] bg-white p-[3px] shadow-md">
                      <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[22px]">
                        <Image
                          src="/direktur.jpg"
                          alt="Syamsoel Bachrie - Direktur Utama"
                          fill
                          className="object-cover"
                          priority
                          sizes="(max-width: 768px) 260px, 320px"
                        />
                        {/* subtle overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/10 via-transparent to-transparent" />
                      </div>
                    </div>

                    {/* small info card */}
                    <div className="mt-4 rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
                      <div className="text-xs font-medium text-slate-500">
                        Jabatan
                      </div>
                      <div className="mt-1 text-sm font-semibold text-slate-900">
                        Direktur Utama
                      </div>
                      <div className="mt-1 text-xs text-slate-500">
                        PT Hamparan Hijau Internusa
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT: TEXT */}
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200/70 bg-white/70 px-3 py-1 text-xs font-medium text-emerald-700 shadow-sm backdrop-blur">
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

                {/* Divider */}
                <div className="mt-6 h-px w-full bg-gradient-to-r from-slate-200 via-slate-100 to-transparent" />

                {/* Quote premium */}
                <div className="mt-6 rounded-3xl border border-slate-100 bg-gradient-to-br from-slate-50 to-white p-6 shadow-sm md:p-7">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 h-10 w-1 rounded-full bg-emerald-600" />
                    <div>
                      <p className="text-sm leading-relaxed text-slate-700 md:text-[15px]">
                        “Dengan konsep program ketahanan pangan yang
                        terintegrasikan antara Agrobisnis, Agroindustri &
                        Agrowisata merupakan kekuatan yang sangat strategis untuk
                        memberikan pelayanan & kesejahteraan kepada masyarakat
                        petani Indonesia...”
                      </p>

                      <div className="mt-4 text-xs text-slate-500">
                        — Syamsoel Bachrie S Dipl. TM, Direktur Utama
                      </div>
                    </div>
                  </div>
                </div>

                {/* Optional: highlight bullets */}
                <div className="mt-8 grid gap-3 md:grid-cols-3">
                  {[
                    { t: "Integrasi", d: "Hulu–hilir dalam satu ekosistem" },
                    { t: "Kualitas", d: "Standarisasi & peningkatan nilai" },
                    { t: "Kolaborasi", d: "Kemitraan lintas pihak" },
                  ].map((x) => (
                    <div
                      key={x.t}
                      className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
                    >
                      <div className="text-sm font-semibold text-slate-900">
                        {x.t}
                      </div>
                      <div className="mt-1 text-xs leading-relaxed text-slate-600">
                        {x.d}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* next section spacer */}
          <div className="mt-10" />
        </div>
      </section>

      <Footer />
    </main>
  );
}
