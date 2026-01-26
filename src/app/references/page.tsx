import { MEDIAGRAPHIE, type MediaRef } from "@/data/references";

function byAuteurThenTitre(a: MediaRef, b: MediaRef) {
  const aa = a.auteur.toLocaleLowerCase();
  const bb = b.auteur.toLocaleLowerCase();
  if (aa < bb) return -1;
  if (aa > bb) return 1;

  const ta = a.titreSite.toLocaleLowerCase();
  const tb = b.titreSite.toLocaleLowerCase();
  if (ta < tb) return -1;
  if (ta > tb) return 1;
  return 0;
}

function RefLine({ r }: { r: MediaRef }) {
  // Format CSL de ton PDF :
  // AUTEUR/ORGANISME. Titre du site (italique), [En ligne], URL (Page consultée le ...)
  // + si date de publication connue, on la met après le titre (style “, 7 février 2023,”), sans casser la règle URL.
  return (
    <li className="leading-relaxed text-slate-800">
      <span className="font-semibold">{r.auteur}</span>.{" "}
      <em>{r.titreSite}</em>
      {r.datePublication ? `, ${r.datePublication}` : ""},{" "}
      {r.support},{" "}
      <a
        className="text-blue-700 underline break-all"
        href={r.url}
        target="_blank"
        rel="noreferrer"
      >
        {r.url}
      </a>{" "}
      (Page consultée le {r.consulteLe})
      {/* IMPORTANT: pas de point final ici, ni après l'URL */}
    </li>
  );
}

export default function MediagraphiePage() {
  const refs = [...MEDIAGRAPHIE].sort(byAuteurThenTitre);

  return (
    <div className="mx-auto max-w-4xl px-4 py-10">
      <header className="rounded-2xl border border-slate-200 bg-gradient-to-b from-slate-50 to-white p-6">
        <h1 className="text-3xl text-center font-extrabold tracking-tight text-slate-900">
          Médiagraphie
        </h1>
      </header>

      <div className="mt-6 rounded-2xl border border-slate-200 bg-white p-6">
        <ol className="list-decimal space-y-3 pl-6">
          {refs.map((r) => (
            <RefLine key={`${r.auteur}__${r.url}`} r={r} />
          ))}
        </ol>
      </div>
    </div>
  );
}
