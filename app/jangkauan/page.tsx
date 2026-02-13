"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import IndonesiaMiniMap from "../components/IndonesiaMiniMap";
import { PROVINCES_38 } from "../data/provinces";

type IslandKey =
  | "sumatera"
  | "jawa"
  | "kalimantan"
  | "sulawesi"
  | "bali_nt"
  | "maluku_papua"
  | undefined;

export default function JangkauanPage() {
  const [activeIsland, setActiveIsland] = useState<IslandKey>("jawa");

  return (
    <main className="min-h-screen bg-white text-slate-900">
      <Navbar />

      {/* ... HERO jangkauan lo di atas sini ... */}

      <section className="mx-auto max-w-6xl px-4 pb-16">
        <div className="grid gap-6 md:grid-cols-2">
          {/* kiri */}
          <div className="rounded-3xl border border-slate-100 bg-white p-6 shadow-sm">
            <div className="text-sm font-semibold">Coverage Framework</div>
            <p className="mt-2 text-sm text-slate-600">
              Dari kawasan ke pasar, terukur per wilayah.
            </p>

            <div className="mt-6">
              <div className="text-xs font-semibold text-slate-500">
                Provinsi (38)
              </div>

              {/* Biar enak dibaca: jadi “chip list” scrollable */}
              <div className="mt-3 max-h-[320px] overflow-auto pr-1">
                <div className="flex flex-wrap gap-2">
                  {PROVINCES_38.map((p) => (
                    <span
                      key={p}
                      className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700"
                    >
                      {p}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* kanan */}
          <div className="rounded-3xl border border-slate-100 bg-white p-4 shadow-sm">
            {/* wrapper gelap biar premium */}
            <IndonesiaMiniMap
              active={activeIsland}
              onSelect={(k) => setActiveIsland(k)}
            />

            {/* label active */}
            <div className="mt-3 text-xs text-slate-500">
              Active region:{" "}
              <span className="font-semibold text-slate-900">
                {activeIsland ?? "-"}
              </span>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}