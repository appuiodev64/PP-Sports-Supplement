import { getSubstance } from "../../../data/substance";

type PageProps = {
  params: Promise<{ slug: string }>;
};

function Section({
  titre,
  children,
}: {
  titre: string;
  children: React.ReactNode;
}) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5">
      <h2 className="text-lg font-bold text-slate-900">{titre}</h2>
      <div className="mt-3 text-sm text-slate-700">{children}</div>
    </section>
  );
}

export default async function SubstancePage({ params }: PageProps) {
  const { slug } = await params; // ✅ IMPORTANT
  const s = getSubstance(slug);

  if (!s) {
    return (
      <div className="space-y-3">
        <a
          href="/substances"
          className="text-sm font-semibold text-slate-900 underline"
        >
          ← Retour
        </a>
        <h1 className="text-2xl font-extrabold">Introuvable</h1>
        <p className="text-slate-600">Aucune fiche pour : {slug}</p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <a href="/substances" className="text-sm font-semibold text-slate-900 underline">
        ← Retour
      </a>

      <header className="flex flex-col gap-3 rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div>
            <h1 className="text-3xl font-extrabold tracking-tight">{s.nom}</h1>
            {s.alias?.length ? (
              <p className="mt-1 text-sm text-slate-600">
                <span className="font-semibold">Alias :</span> {s.alias.join(", ")}
              </p>
            ) : null}
          </div>

          <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3">
            <p className="text-xs font-bold text-amber-900">Avertissement</p>
            <p className="mt-1 text-xs text-amber-900/90">
              Contenu éducatif uniquement. Aucune posologie et aucun conseil médical.
            </p>
          </div>
        </div>
      </header>

      <div className="grid gap-4 lg:grid-cols-3">
        {/* Colonne principale */}
        <div className="space-y-4 lg:col-span-2">
          <Section titre="Définition">
            <p>{s.definition}</p>
          </Section>

          <Section titre="Effets">
            <div className="grid gap-4 md:grid-cols-2">
              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-bold text-slate-900">Médicaux</p>
                <ul className="mt-2 list-disc pl-5 text-slate-700">
                  {s.effetsMedicaux.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
                <p className="text-sm font-bold text-slate-900">Recherchés</p>
                <ul className="mt-2 list-disc pl-5 text-slate-700">
                  {s.effetsRecherches.map((x) => (
                    <li key={x}>{x}</li>
                  ))}
                </ul>
              </div>
            </div>
          </Section>

          <Section titre="Risques">
            <div className="space-y-3">
              {s.risques.map((bloc) => (
                <div key={bloc.categorie} className="rounded-xl border border-slate-200 p-4">
                  <p className="text-sm font-bold text-slate-900">{bloc.categorie}</p>
                  <ul className="mt-2 list-disc pl-5 text-slate-700">
                    {bloc.items.map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-4">
          <Section titre="Légalité">
            <ul className="list-disc pl-5">
              {s.legalite.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </Section>

          <Section titre="Sources">
            <ul className="list-disc pl-5">
              {s.sources.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </Section>
        </aside>
      </div>
    </div>
  );
}
