import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 md:flex-row md:items-center md:justify-between">
        <div className="text-sm">
          <div className="font-semibold text-slate-900">
            Hamparan Hijau Internusa
          </div>
          <div className="mt-1 text-xs text-slate-500">
            Agrobisnis • Agroindustri • Agrowisata
          </div>
        </div>

        <div className="flex flex-col gap-2 text-xs text-slate-500 md:items-end">
          <div className="flex flex-wrap items-center gap-x-4 gap-y-1">
            <Link href="/profil" className="hover:text-slate-900 transition">
              Profil
            </Link>
            <Link href="/kontak" className="hover:text-slate-900 transition">
              Kontak
            </Link>

            {/* opsional untuk enterprise */}
            <span className="text-slate-300">|</span>
            <Link href="/privacy" className="hover:text-slate-900 transition">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-900 transition">
              Terms
            </Link>
          </div>

          <div>
            © {new Date().getFullYear()} Hamparan Hijau Internusa.
            <span className="hidden sm:inline"> All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
