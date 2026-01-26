"use client";

import { useMemo, useState } from "react";
import { SUBSTANCES } from "../data/substance";

const navLink =
  "text-sm font-semibold text-white/80 hover:text-white transition-colors";

export default function Header() {
  const [openMobile, setOpenMobile] = useState(false);
  const [openSub, setOpenSub] = useState(false);
  const [q, setQ] = useState("");

  const items = useMemo(
    () => [...SUBSTANCES].sort((a, b) => a.nom.localeCompare(b.nom, "fr")),
    []
  );

  function goSearch() {
    const query = q.trim();
    if (!query) return;
    window.location.href = `/substances?q=${encodeURIComponent(query)}`;
  }

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/70 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-2xl bg-white text-slate-950">
            <span className="text-sm font-extrabold">PP</span>
          </div>
          <div className="leading-tight">
            <div className="text-sm font-extrabold text-white">Les suppléments sportifs</div>
            <div className="text-[11px] text-white/55">
              Carlos Vazquez
            </div>
          </div>
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-3 md:flex">
          <a className={navLink} href="/">
            Accueil
          </a>

          {/* Dropdown substances */}
          <div className="relative">
            <button
              type="button"
              onClick={() => setOpenSub((v) => !v)}
              className="flex items-center gap-1 rounded-2xl px-3 py-2 text-sm font-semibold text-white/80 hover:bg-white/10 hover:text-white"
            >
              Substances <span className="text-white/50">▾</span>
            </button>

            {openSub ? (
              <div
                className="absolute left-0 mt-2 w-[340px] overflow-hidden rounded-3xl border border-white/10 bg-slate-950 shadow-2xl"
                onMouseLeave={() => setOpenSub(false)}
              >
                <div className="border-b border-white/10 px-4 py-3">
                  <p className="text-xs font-bold text-white/70">
                    Types de suppléments
                  </p>
                  <p className="mt-0.5 text-xs text-white/50">
                    Choisis une fiche
                  </p>
                </div>

                <div className="max-h-80 overflow-auto p-2">
                  {items.map((s) => (
                    <a
                      key={s.slug}
                      href={`/substances/${s.slug}`}
                      className="block rounded-2xl px-3 py-2 text-sm text-white/85 hover:bg-white/10 hover:text-white"
                    >
                      <div className="font-semibold">{s.nom}</div>
                      {s.alias?.length ? (
                        <div className="text-xs text-white/55">
                          Alias : {s.alias.join(", ")}
                        </div>
                      ) : null}
                    </a>
                  ))}
                </div>

                <div className="border-t border-white/10 p-2">
                  <a
                    href="/substances"
                    className="block rounded-2xl bg-white px-3 py-2 text-center text-sm font-bold text-slate-950 hover:bg-white/90"
                  >
                    Voir la liste
                  </a>
                </div>
              </div>
            ) : null}
          </div>

          <a className={navLink} href="/glossary">
            Glossaire
          </a>
          <a className={navLink} href="/references">
            Médiagraphie
          </a>
          <a className={navLink} href="/legal-disclaimer">
            Avertissement Légal
          </a>

          {/* Search */}
          <div className="hidden items-center gap-2 lg:flex">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onKeyDown={(e) => (e.key === "Enter" ? goSearch() : null)}
              placeholder="Rechercher…"
              className="w-56 rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/20"
            />
            <button
              onClick={goSearch}
              className="rounded-2xl bg-white px-3 py-2 text-sm font-bold text-slate-950 hover:bg-white/90"
            >
              Go
            </button>
          </div>

          {/* CTA */}
          <a
            href="/substances"
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-2 text-sm font-bold text-white hover:bg-white/10"
          >
            Explorer
          </a>
        </div>

        {/* Mobile */}
        <button
          className="rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm font-bold text-white md:hidden"
          onClick={() => setOpenMobile((v) => !v)}
        >
          Menu
        </button>
      </div>

      {/* Mobile panel */}
      {openMobile ? (
        <div className="border-t border-white/10 bg-slate-950/90 backdrop-blur md:hidden">
          <div className="mx-auto max-w-6xl space-y-3 px-4 py-4">
            <div className="flex gap-2">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={(e) => (e.key === "Enter" ? goSearch() : null)}
                placeholder="Rechercher…"
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-3 py-2 text-sm text-white placeholder:text-white/40 outline-none"
              />
              <button
                onClick={goSearch}
                className="rounded-2xl bg-white px-4 py-2 text-sm font-bold text-slate-950"
              >
                Go
              </button>
            </div>

            <div className="grid gap-2">
              <a className="rounded-2xl px-3 py-2 text-white/85 hover:bg-white/10" href="/">
                Accueil
              </a>
              <a className="rounded-2xl px-3 py-2 text-white/85 hover:bg-white/10" href="/substances">
                Substances
              </a>
              <a className="rounded-2xl px-3 py-2 text-white/85 hover:bg-white/10" href="/glossary">
                Glossaire
              </a>
              <a className="rounded-2xl px-3 py-2 text-white/85 hover:bg-white/10" href="/references">
                Médiagraphie
              </a>
              <a className="rounded-2xl px-3 py-2 text-white/85 hover:bg-white/10" href="/legal-disclaimer">
                Avertissement légal
              </a>
            </div>

            <button
              onClick={() => setOpenMobile(false)}
              className="w-full rounded-2xl bg-white px-4 py-2 text-sm font-bold text-slate-950"
            >
              Fermer
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
