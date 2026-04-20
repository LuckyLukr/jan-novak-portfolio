import React from 'react'
import SectionHeader from './SectionHeader.jsx'

function ProjectCard({ img, badgeBg, badgeText, title, desc, tags, links }) {
  return (
    <article className="group reveal overflow-hidden rounded-3xl bg-slate-900 shadow-xl shadow-violet-500/10 transition hover:-translate-y-2">
      <div className="relative overflow-hidden">
        <img src={img} alt={title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent opacity-80" />
        <div className="absolute bottom-4 left-4 right-4">
          <span className={`inline-block rounded-full ${badgeBg} px-3 py-1 text-xs font-semibold ${badgeText}`}>
            {badgeText.replace(/^.*? /, '')}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">{title}</h3>
        <p className="mt-3 leading-7 text-slate-400">{desc}</p>
        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((t) => (
            <span key={t} className="rounded-full bg-white/5 px-3 py-1 text-xs text-slate-300">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-6 flex gap-4">
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={l.className}
              onClick={(e) => (l.preventDefault ? e.preventDefault() : undefined)}
            >
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function ProjectsSection({ id, refEl }) {
  return (
    <section id={id} className="px-6 py-20 lg:px-12" ref={refEl}>
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 reveal">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-500">Projekty</p>
          <h2 className="mt-3 text-4xl font-extrabold text-slate-900 sm:text-5xl">
            Vybrané práce a digitální produkty
          </h2>
          <p className="mt-4 max-w-3xl text-lg text-slate-600">
            Ukázky projektů, na kterých jsem řešil návrh rozhraní, frontend implementaci, optimalizaci výkonu a propojení s backendem.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          <ProjectCard
            img="https://picsum.photos/600/400?random=1"
            badgeBg="bg-violet-500/20"
            badgeText="text-violet-200"
            title="Pulse Analytics"
            desc="Analytická platforma pro marketingové týmy s custom widgety, dark mode UI a živými datovými přehledy."
            tags={['React', 'TypeScript', 'Chart UI']}
            links={[
              { label: 'Live demo', href: '#', className: 'font-semibold text-violet-300 transition hover:text-pink-300', preventDefault: true },
              { label: 'GitHub', href: '#', className: 'font-semibold text-slate-300 transition hover:text-white', preventDefault: true },
            ]}
          />

          <ProjectCard
            img="https://picsum.photos/600/400?random=2"
            badgeBg="bg-pink-500/20"
            badgeText="text-pink-200"
            title="Nordic Storefront"
            desc="Redesign prémiového e-shopu s důrazem na UX, rychlost načítání a přehlednou mobilní nákupní cestu."
            tags={['Next.js', 'Tailwind', 'Stripe']}
            links={[
              { label: 'Live demo', href: '#', className: 'font-semibold text-violet-300 transition hover:text-pink-300', preventDefault: true },
              { label: 'Case study', href: '#', className: 'font-semibold text-slate-300 transition hover:text-white', preventDefault: true },
            ]}
          />

          <ProjectCard
            img="https://picsum.photos/600/400?random=3"
            badgeBg="bg-violet-500/20"
            badgeText="text-violet-200"
            title="Motion Portfolio"
            desc="Osobní web pro kreativní studio s mikroanimacemi, video sekcemi a výraznou vizuální identitou."
            tags={['HTML', 'GSAP', 'Responsive']}
            links={[
              { label: 'Live demo', href: '#', className: 'font-semibold text-violet-300 transition hover:text-pink-300', preventDefault: true },
              { label: 'GitHub', href: '#', className: 'font-semibold text-slate-300 transition hover:text-white', preventDefault: true },
            ]}
          />

          <ProjectCard
            img="https://picsum.photos/600/400?random=4"
            badgeBg="bg-pink-500/20"
            badgeText="text-pink-200"
            title="Ops Control Center"
            desc="Webová aplikace pro interní týmy se správou ticketů, přístupových rolí a automatizovanými reporty."
            tags={['Vue', 'API', 'Auth']}
            links={[
              { label: 'Detail projektu', href: '#', className: 'font-semibold text-violet-300 transition hover:text-pink-300', preventDefault: true },
              { label: 'Dokumentace', href: '#', className: 'font-semibold text-slate-300 transition hover:text-white', preventDefault: true },
            ]}
          />

          <ProjectCard
            img="https://picsum.photos/600/400?random=5"
            badgeBg="bg-violet-500/20"
            badgeText="text-violet-200"
            title="Launch Conference"
            desc="Promo microsite pro technologickou konferenci s agendou, speakery, registrací a bohatou vizuální prezentací."
            tags={['Astro', 'Tailwind', 'SEO']}
            links={[
              { label: 'Live demo', href: '#', className: 'font-semibold text-violet-300 transition hover:text-pink-300', preventDefault: true },
              { label: 'Case study', href: '#', className: 'font-semibold text-slate-300 transition hover:text-white', preventDefault: true },
            ]}
          />

          <ProjectCard
            img="https://picsum.photos/600/400?random=6"
            badgeBg="bg-pink-500/20"
            badgeText="text-pink-200"
            title="FitFlow Platform"
            desc="Produktové rozhraní pro fitness platformu s onboardingem, správou plánů a přehledným datovým dashboardem."
            tags={['React Native UI', 'Figma', 'UX']}
            links={[
              { label: 'Náhled', href: '#', className: 'font-semibold text-violet-300 transition hover:text-pink-300', preventDefault: true },
              { label: 'Proces', href: '#', className: 'font-semibold text-slate-300 transition hover:text-white', preventDefault: true },
            ]}
          />
        </div>
      </div>
    </section>
  )
}
