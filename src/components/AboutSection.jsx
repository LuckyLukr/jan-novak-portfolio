import React from 'react'

export default function AboutSection() {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="reveal">
        <div className="overflow-hidden rounded-3xl bg-slate-900 p-3 shadow-xl shadow-violet-500/10">
          <img
            src="https://picsum.photos/700/900?blur=1"
            alt="Portrétní fotografie vývojáře v kreativním prostředí"
            className="h-full w-full rounded-[1.4rem] object-cover ring-2 ring-violet-500/70"
          />
        </div>
      </div>

      <div className="reveal">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-xl shadow-slate-200/80">
          <h3 className="text-2xl font-bold text-slate-900">Frontend, který vypadá skvěle a funguje bez kompromisů</h3>
          <p className="mt-5 leading-8 text-slate-600">
            Za posledních několik let jsem pracoval na firemních webech, SaaS aplikacích, design systémech i landing pages pro kampaně. Baví mě stavět rozhraní, která jsou rychlá, přístupná a snadno rozšiřitelná.
          </p>
          <p className="mt-4 leading-8 text-slate-600">
            Nejčastěji řeším návrh komponent, responzivní layouty, animace, integraci API a spolupráci mezi designem a vývojem. Umím převzít projekt od wireframu až po nasazení do produkce.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {[
              { big: '5+', small: 'let zkušeností s web developmentem' },
              { big: '50+', small: 'dokončených projektů od MVP po redesigny' },
              { big: '30+', small: 'klientů z agentur, startupů i e-commerce' },
            ].map((c) => (
              <div key={c.big} className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200 transition hover:-translate-y-1 hover:shadow-md">
                <p className="text-3xl font-extrabold text-slate-900">{c.big}</p>
                <p className="mt-2 text-sm text-slate-600">{c.small}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            <div className="rounded-2xl bg-gradient-to-br from-violet-50 to-pink-50 p-5 ring-1 ring-violet-100">
              <h4 className="font-semibold text-slate-900">Co přináším</h4>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                <li>• Přehledné komponentové UI</li>
                <li>• Optimalizaci výkonu a Core Web Vitals</li>
                <li>• Čitelný, udržitelný frontend kód</li>
              </ul>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-slate-50 to-white p-5 ring-1 ring-slate-200">
              <h4 className="font-semibold text-slate-900">Spolupráce</h4>
              <ul className="mt-3 space-y-2 text-sm leading-6 text-slate-600">
                <li>• Freelance spolupráce na míru</li>
                <li>• Dlouhodobá produktová podpora</li>
                <li>• Design-to-code workflow s týmem</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
