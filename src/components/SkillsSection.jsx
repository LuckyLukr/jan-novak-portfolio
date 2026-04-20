import React from 'react'
import SectionHeader from './SectionHeader.jsx'

export default function SkillsSection({ id, refEl }) {
  return (
    <section id={id} className="bg-slate-950 px-6 py-20 text-slate-300 lg:px-12" ref={refEl}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 reveal">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-300">Dovednosti</p>
          <h2 className="mt-3 text-4xl font-extrabold text-white sm:text-5xl">
            Technologie, se kterými pracuji každý den
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-400">
            Od rychlého prototypování až po produkční aplikace — stavím frontend s důrazem na škálovatelnost, přístupnost a kvalitní uživatelský zážitek.
          </p>
        </div>

        <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
          <div className="reveal rounded-3xl border border-white/10 bg-slate-900/70 p-8 shadow-xl shadow-violet-500/10">
            <h3 className="text-2xl font-bold text-white">Skill snapshot</h3>

            <div className="mt-8 space-y-6">
              {[
                { label: 'Frontend development', pct: 95 },
                { label: 'UI/UX implementation', pct: 90 },
                { label: 'Backend integration', pct: 78 },
                { label: 'Design systems', pct: 88 },
              ].map((s) => (
                <div key={s.label}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-medium text-slate-200">{s.label}</span>
                    <span className="text-sm text-violet-300">{s.pct}%</span>
                  </div>
                  <div className="progress-bar h-3 rounded-full bg-slate-800">
                    <span style={{ width: `${s.pct}%` }} />
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-white/5 p-5">
              <p className="text-sm uppercase tracking-[0.2em] text-pink-300">Workflow</p>
              <p className="mt-3 leading-7 text-slate-400">
                Discovery → wireframy → UI návrh → komponenty → implementace → testování → nasazení. Díky tomu držím konzistentní kvalitu od prvního nápadu po finální release.
              </p>
            </div>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 reveal">
            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-violet-500/10">
              <h3 className="text-xl font-bold text-white">Frontend</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {['⚛️ React', '▲ Next.js', '🟦 TypeScript', '🎨 Tailwind CSS', '🧩 HTML5', '✨ Framer Motion'].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm text-white transition hover:scale-105 hover:shadow-glow"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-violet-500/10">
              <h3 className="text-xl font-bold text-white">Backend</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {['🟢 Node.js', '🔌 REST API', '🔥 Firebase', '🗄️ Supabase', '🛠️ Express'].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-pink-400/30 bg-pink-500/10 px-4 py-2 text-sm text-white transition hover:scale-105 hover:shadow-glow"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-violet-500/10">
              <h3 className="text-xl font-bold text-white">Design</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {['🖌️ Figma', '📐 Design Systems', '📱 Responsive UI', '♿ Accessibility'].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-violet-400/30 bg-violet-500/10 px-4 py-2 text-sm text-white transition hover:scale-105 hover:shadow-glow"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-6 shadow-xl shadow-violet-500/10">
              <h3 className="text-xl font-bold text-white">Tools</h3>
              <div className="mt-5 flex flex-wrap gap-3">
                {['🐙 Git', '🚀 Vercel', '📊 Lighthouse', '🧪 Playwright', '📦 npm'].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-pink-400/30 bg-pink-500/10 px-4 py-2 text-sm text-white transition hover:scale-105 hover:shadow-glow"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
