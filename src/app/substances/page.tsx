"use client";

import { useMemo, useState } from "react";
import { SUBSTANCES } from "../../data/substance";

export default function SubstancesPage() {
  const [q, setQ] = useState("");

  const filtered = useMemo(() => {
    const query = q.trim().toLowerCase();
    if (!query) return SUBSTANCES;

    return SUBSTANCES.filter((s) => {
      const hay = [
        s.nom,
        ...(s.alias ?? []),
        s.definition,
        ...s.effetsMedicaux,
        ...s.effetsRecherches,
      ]
        .join(" ")
        .toLowerCase();

      return hay.includes(query);
    });
  }, [q]);

  return (
    <div className="space-y-6">
      <header className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
        <div>
          <h1 className="text-3xl font-extrabold tracking-tight">
            Types de suppléments
          </h1>
          <p className="mt-1 text-slate-600">
          </p>
        </div>

        <div className="w-full md:w-[360px]">
          <label className="text-sm font-semibold text-slate-700">
            Rechercher
          </label>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Ex : testostérone, Deca, effets..."
            className="mt-1 w-full rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm outline-none ring-0 focus:border-slate-400"
          />
        </div>
      </header>

      <section className="rounded-2xl border border-amber-200 bg-amber-50 p-4">
        <p className="text-sm font-semibold text-amber-900">Avertissement</p>
        <p className="mt-1 text-sm text-amber-900/90">
          Contenu éducatif uniquement.
          En cas de doute, consulte un professionnel de santé.
        </p>
      </section>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {filtered.map((s) => (
          <a
            key={s.slug}
            href={`/substances/${s.slug}`}
            className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <h2 className="text-lg font-bold text-slate-900 group-hover:underline">
                  {s.nom}
                </h2>
                {s.alias?.length ? (
                  <p className="mt-1 text-xs text-slate-500">
                    Alias : {s.alias.join(", ")}
                  </p>
                ) : null}
              </div>
              <span className="rounded-full bg-slate-900 px-2.5 py-1 text-xs font-semibold text-white">
                Fiche
              </span>
            </div>

            <p className="mt-3 line-clamp-3 text-sm text-slate-600">
              {s.definition}
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                Risques
              </span>
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                Légalité
              </span>
              <span className="rounded-full bg-slate-100 px-2.5 py-1 text-xs font-semibold text-slate-700">
                Sources
              </span>
            </div>
          </a>
        ))}
      </div>

      {filtered.length === 0 ? (
        <p className="text-sm text-slate-600">
          Aucun résultat. Essaie un autre mot-clé.
        </p>
      ) : null}
    </div>
  );
}
