import Image from "next/image";
import { SUBSTANCES } from "../data/substance";

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold text-white/85">
      {children}
    </span>
  );
}

export default function Home() {
  const featured = [...SUBSTANCES].slice(0, 6);

  return (
    <div className="space-y-10">
      {/* HERO plein */}
      <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-950 text-white">
        {/* Background glow */}
        <div className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full bg-indigo-500/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-40 -bottom-40 h-[520px] w-[520px] rounded-full bg-cyan-500/20 blur-3xl" />

        <div className="relative grid gap-8 p-6 md:grid-cols-2 md:p-10">
          {/* Texte */}
          <div className="space-y-5">
           

            <h1 className="text-3xl font-extrabol   d tracking-tight md:text-5xl">
              Les suppléments sportifs 
            </h1>

            <p className="max-w-xl text-base text-white/80 md:text-lg">
              Voici ma plateforme d’information éducative sur les stéroïdes anabolisants
              et sur les substances. Tu apprendras les définitions, les effets rapportés, les risques,
              et le statut légal.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="/substances"
                className="rounded-2xl bg-white px-5 py-3 text-sm font-bold text-slate-950 hover:bg-white/90"
              >
                Explorer les substances
              </a>
              <a
                href="/legal-disclaimer"
                className="rounded-2xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:bg-white/10"
              >
                Avertissement légal
              </a>
            </div>

            <div className="rounded-2xl border border-amber-300/25 bg-amber-200/10 p-4">
              <p className="text-xs font-bold text-amber-200">Avertissement</p>
              <p className="mt-1 text-sm text-amber-100/90">
                Ce site ne fournit pas de conseils médicaux. Consulte un professionnel de
                santé en cas de doute.
              </p>
            </div>
          </div>

          {/* Image hero */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-white/10">
              <Image
                src="/dopage_interdit.avif"
                alt="Illustration scientifique (éducatif)"
                width={1200}
                height={900}
                className="h-[320px] w-full object-cover md:h-[420px]"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-950/0 to-slate-950/20" />
            </div>

           
          </div>
        </div>
      </section>
      
    </div>
  );
}
