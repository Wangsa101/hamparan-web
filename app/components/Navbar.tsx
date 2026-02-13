"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { label: "Home", href: "/" },
  { label: "Profil", href: "/profil" },
  { label: "Ekosistem", href: "/ekosistem" },
  { label: "Program", href: "/program" },
  { label: "Jangkauan", href: "/jangkauan" },
  { label: "Kontak", href: "/kontak" },
];

function isActivePath(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(href + "/");
}

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const activeHref = useMemo(() => {
    const found = links.find((l) => isActivePath(pathname, l.href));
    return found?.href ?? "/";
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-100 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-2xl bg-white ring-1 ring-slate-200 shadow-sm">
            <Image
              src="/logo.png"
              alt="PT Hamparan Hijau Internusa"
              fill
              className="object-contain p-1.5"
              priority
            />
          </div>

          {/* IMPORTANT: jangan disembunyiin di mobile */}
          <div className="leading-tight">
            <div className="text-[13px] font-semibold tracking-tight text-slate-900 sm:text-sm">
              PT Hamparan Hijau Internusa
            </div>
            <div className="text-[11px] font-medium text-slate-500">
              Integrated Agro Ecosystem
            </div>
          </div>
        </Link>

        {/* Desktop menu */}
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((i) => {
            const active = isActivePath(pathname, i.href);
            return (
              <Link
                key={i.href}
                href={i.href}
                className={[
                  "relative rounded-full px-3.5 py-2 text-sm transition",
                  active
                    ? "text-emerald-700"
                    : "text-slate-600 hover:text-slate-900",
                ].join(" ")}
              >
                {i.label}
                <span
                  className={[
                    "absolute left-3 right-3 -bottom-[2px] h-[2px] rounded-full transition-all",
                    active ? "bg-emerald-600" : "bg-transparent",
                  ].join(" ")}
                />
              </Link>
            );
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Link
            href="/kontak"
            className="rounded-full bg-emerald-700 px-4 py-2.5 text-sm font-semibold text-white shadow-sm shadow-emerald-900/10 transition hover:bg-emerald-800"
          >
            Kemitraan
          </Link>
        </div>

        {/* Mobile */}
        <button
          className="md:hidden rounded-full border border-slate-200 px-3 py-2 text-sm text-slate-700 hover:bg-slate-50"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pb-4">
          <div className="flex flex-col gap-1 pt-3">
            {links.map((i) => {
              const active = isActivePath(pathname, i.href);
              return (
                <Link
                  key={i.href}
                  href={i.href}
                  onClick={() => setOpen(false)}
                  className={[
                    "rounded-xl px-3 py-2 text-sm transition",
                    active
                      ? "bg-emerald-50 text-emerald-800 ring-1 ring-emerald-100"
                      : "text-slate-700 hover:bg-slate-50",
                  ].join(" ")}
                >
                  {i.label}
                </Link>
              );
            })}

            <Link
              href="/kontak"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-emerald-700 px-4 py-2.5 text-center text-sm font-semibold text-white hover:bg-emerald-800"
            >
              Kemitraan
            </Link>
          </div>

          <div className="mt-3 text-xs text-slate-500">
            Active: <span className="font-medium text-slate-700">{activeHref}</span>
          </div>
        </div>
      )}
    </header>
  );
}