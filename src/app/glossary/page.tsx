"use client";

import { useMemo, useState } from "react";
import { GLOSSARY } from "@/data/glossary";

export default function GlossaryPage() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const s = q.trim().toLowerCase();
    const base = [...GLOSSARY].sort((a, b) =>
      a.terme.localeCompare(b.terme, "fr")
    );
    if (!s) return base;

    return base.filter((t) => {
      const hay = `${t.terme} ${t.definition} ${(t.tags || []).join(" ")}`.toLowerCase();
      return hay.includes(s);
    });
  }, [q]);

  return (
    <div className="mx-auto max-w-4xl space-y-6 px-4 py-10">
      <header className="rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6">
        <h1 className="text-3xl text-center font-extrabold tracking-tight text-slate-900">
          Glossaire
        </h1>

        <div className="mt-4">
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Rechercher un terme…"
            className="w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm outline-none focus:border-slate-400"
          />
        </div>
      </header>

      <div className="grid gap-4">
        {filtered.map((t) => (
          <article
            key={t.slug}
            className="rounded-2xl border border-slate-200 bg-white p-6"
          >
            <h2 className="text-lg font-extrabold text-slate-900">{t.terme}</h2>
            <p className="mt-2 text-sm text-slate-700">{t.definition}</p>

            {t.tags?.length ? (
              <div className="mt-3 flex flex-wrap gap-2">
                {t.tags.map((x) => (
                  <span
                    key={x}
                    className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700"
                  >
                    {x}
                  </span>
                ))}
              </div>
            ) : null}

            <div className="mt-4">
              <p className="text-xs font-bold text-slate-900">Sources</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-700">
                {t.sources.map((u) => (
                  <li key={u}>
                    <a
                      href={u}
                      target="_blank"
                      rel="noreferrer"
                      className="underline break-all"
                    >
                      {u}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}

        {filtered.length === 0 ? (
          <div className="rounded-2xl border border-slate-200 bg-white p-6 text-sm text-slate-700">
            Aucun résultat pour “{q}”.
          </div>
        ) : null}
      </div>
    </div>
  );
}
