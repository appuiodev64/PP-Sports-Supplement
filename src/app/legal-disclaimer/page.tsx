export default function LegalDisclaimerPage() {
  return (
    <div className="space-y-3">
      <h1 className="text-3xl font-extrabold tracking-tight">
        Avertissement légal
      </h1>
      <div className="rounded-2xl border border-amber-200 bg-amber-50 p-5">
        <p className="text-sm font-semibold text-amber-900">
          Information éducative uniquement
        </p>
        <p className="mt-1 text-sm text-amber-900/90">
          Le contenu de ce site sert à des fins éducatives. En aucun cas, c'est 
          des conseils médicaux. Consulte un médecin en cas de doute.
        </p>
      </div>
    </div>
  );
}
