import React from 'react'

export default function ExperienceSection() {
  return (
    <div className="timeline-line relative space-y-10">
      <div className="reveal grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="lg:text-right">
          <div className="lg:ml-auto lg:max-w-md rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-violet-500/10">
            <p className="text-sm text-violet-300">2023 — současnost</p>
            <h3 className="mt-2 text-2xl font-bold text-white">Senior Frontend Developer</h3>
            <p className="mt-1 font-medium text-slate-400">Pixel Forge Studio</p>
            <p className="mt-4 leading-7 text-slate-400">
              Vedu vývoj klíčových frontend částí pro klientské i interní produkty, navrhuji komponentové knihovny a zrychluji delivery mezi designem a developmentem.
            </p>
          </div>
        </div>
        <div className="relative pl-10 lg:pl-0">
          <span className="absolute left-3 top-8 h-6 w-6 rounded-full border-4 border-slate-950 bg-gradient-to-r from-violet-500 to-pink-500 lg:left-1/2 lg:-translate-x-1/2" />
        </div>
      </div>

      <div className="reveal grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="relative order-2 pl-10 lg:order-1 lg:pl-0">
          <span className="absolute left-3 top-8 h-6 w-6 rounded-full border-4 border-slate-950 bg-gradient-to-r from-violet-500 to-pink-500 lg:left-1/2 lg:-translate-x-1/2" />
        </div>
        <div className="order-1 lg:order-2">
          <div className="lg:max-w-md rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-violet-500/10">
            <p className="text-sm text-violet-300">2021 — 2023</p>
            <h3 className="mt-2 text-2xl font-bold text-white">Frontend Engineer</h3>
            <p className="mt-1 font-medium text-slate-400">FlowCommerce</p>
            <p className="mt-4 leading-7 text-slate-400">
              Pracoval jsem na e-commerce platformě, checkout flow, zákaznickém účtu a výkonnostní optimalizaci. Výsledkem bylo rychlejší načítání a lepší konverzní poměry.
            </p>
          </div>
        </div>
      </div>

      <div className="reveal grid gap-6 lg:grid-cols-2 lg:gap-12">
        <div className="lg:text-right">
          <div className="lg:ml-auto lg:max-w-md rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-violet-500/10">
            <p className="text-sm text-violet-300">2019 — 2021</p>
            <h3 className="mt-2 text-2xl font-bold text-white">UI Developer</h3>
            <p className="mt-1 font-medium text-slate-400">Creative Spark Agency</p>
            <p className="mt-4 leading-7 text-slate-400">
              Převáděl jsem designy do responzivních webů, landing pages a promo microsites. Hodně jsem řešil animace, pixel-perfect implementaci a spolupráci s designéry.
            </p>
          </div>
        </div>
        <div className="relative pl-10 lg:pl-0">
          <span className="absolute left-3 top-8 h-6 w-6 rounded-full border-4 border-slate-950 bg-gradient-to-r from-violet-500 to-pink-500 lg:left-1/2 lg:-translate-x-1/2" />
        </div>
      </div>
    </div>
  )
}
