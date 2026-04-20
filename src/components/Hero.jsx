import React from 'react'

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-6 py-20 lg:px-12 lg:py-24">
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute right-10 top-20 hidden h-72 w-72 rounded-full bg-violet-500/20 blur-3xl lg:block" />
      <div className="absolute bottom-10 left-10 hidden h-64 w-64 rounded-full bg-pink-500/20 blur-3xl lg:block" />

      <div className="relative mx-auto flex min-h-[85vh] max-w-7xl items-center">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="reveal">
            <p className="mb-4 inline-flex items-center rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-200">
              ✨ Tvořím moderní weby, design systémy a produktová rozhraní
            </p>
            <h2 className="max-w-4xl text-5xl font-extrabold leading-tight text-white sm:text-6xl xl:text-8xl">
              Designuju a kóduju
              <span className="bg-gradient-to-r from-violet-400 to-pink-400 bg-clip-text text-transparent">
                digitální zážitky
              </span>{' '}
              s důrazem na výkon.
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Jsem frontend developer se silným přesahem do UI/UX. Pomáhám startupům, agenturám i značkám převádět nápady do přehledných, rychlých a škálovatelných webových produktů.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-2xl bg-gradient-to-r from-violet-500 to-pink-500 px-6 py-4 font-semibold text-white shadow-glow transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-violet-500"
              >
                Zobrazit projekty
              </a>
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-2xl border border-white/15 bg-white/5 px-6 py-4 font-semibold text-white transition hover:border-violet-400/50 hover:bg-violet-500/10 focus:outline-none focus:ring-2 focus:ring-violet-500"
              >
                Napsat mi
              </a>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              {['GitHub', 'LinkedIn', 'Twitter', 'Dribbble'].map((t) => (
                <a
                  key={t}
                  href="#"
                  className="rounded-full border border-white/10 bg-slate-900/70 px-4 py-2 text-sm text-slate-300 transition hover:scale-105 hover:text-white"
                  onClick={(e) => e.preventDefault()}
                >
                  {t}
                </a>
              ))}
            </div>
          </div>

          <div className="reveal">
            <div className="relative mx-auto max-w-md animate-float">
              <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-violet-500 to-pink-500 opacity-60 blur-xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900/80 p-4 shadow-2xl">
                <img
                  src="https://picsum.photos/720/920"
                  alt="Ukázka kreativního dashboardu a UI práce"
                  className="h-[28rem] w-full rounded-[1.5rem] object-cover"
                />
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-slate-400">Zaměření</p>
                    <p className="mt-1 font-semibold text-white">Frontend • UX • Motion</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-sm text-slate-400">Stack</p>
                    <p className="mt-1 font-semibold text-white">React • Next.js • Tailwind</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
