import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import PageHeader from "../components/PageHeader";

const phone = "+62 812 1394 6680";
const email = "hamparanhijau2024@gmail.com";

export default function KontakPage() {
  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      <section className="mx-auto max-w-6xl px-4 py-10 md:py-14">
        <PageHeader
          kicker="Let’s Connect"
          title="Kontak"
          desc="Hubungi kami untuk kemitraan, kolaborasi program, atau informasi lebih lanjut."
        />

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold">Telepon / WhatsApp</div>
            <div className="mt-2 text-slate-600">{phone}</div>
            <a
              className="mt-4 inline-flex rounded-full bg-emerald-700 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-800"
              href="https://wa.me/6281213946680"
              target="_blank"
              rel="noreferrer"
            >
              Chat WhatsApp
            </a>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold">Email</div>
            <div className="mt-2 text-slate-600">{email}</div>
            <a
              className="mt-4 inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50"
              href={`mailto:${email}`}
            >
              Kirim Email
            </a>
          </div>

          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold">Alamat Kantor</div>
            <div className="mt-2 text-sm leading-relaxed text-slate-600">
              Gedung Menara BRI Bandung Lt.11 Suite 1103, Jl. Asia Afrika No 57–59, Bandung.
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-3xl border border-slate-100 bg-slate-950 p-8 text-white">
          <div className="text-sm font-semibold text-white/80">Kemitraan</div>
          <div className="mt-2 text-2xl font-semibold tracking-tight">
            Siap kolaborasi untuk penguatan ketahanan pangan.
          </div>
          <p className="mt-3 max-w-2xl text-white/70">
            Tinggalkan pesan singkat (nama, institusi, kebutuhan) lewat WhatsApp atau email—tim kami akan merespons secepatnya.
          </p>
        </div>
      </section>

      <Footer />

      {/* Floating WhatsApp */}
      <a
        href="https://wa.me/6281213946680"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 rounded-full bg-emerald-700 px-4 py-3 text-sm font-semibold text-white shadow-lg hover:bg-emerald-800"
        aria-label="Chat WhatsApp"
      >
        WhatsApp
      </a>
    </main>
  );
}
