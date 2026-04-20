import React from 'react'

function SocialIcon({ label, children }) {
  return (
    <a
      href="#"
      aria-label={label}
      className="rounded-full border border-white/10 bg-slate-900/80 p-3 text-slate-300 transition hover:scale-105 hover:border-violet-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-violet-500"
      onClick={(e) => e.preventDefault()}
    >
      {children}
    </a>
  )
}

export default function Sidebar({ activeId }) {
  return (
    <aside className="hidden lg:fixed lg:inset-y-0 lg:left-0 lg:flex lg:w-80 lg:flex-col lg:justify-between lg:border-r lg:border-white/10 lg:bg-slate-950/80 lg:p-8 lg:glass">
      <div>
        <div className="mb-8">
          <div className="relative inline-block">
            <img
              src="https://picsum.photos/240/240?grayscale"
              alt="Profilová fotografie vývojáře Jana Nováka"
              className="h-24 w-24 rounded-2xl object-cover ring-2 ring-violet-500 shadow-glow"
            />
            <span className="absolute -bottom-2 -right-2 rounded-full border-4 border-slate-950 bg-emerald-400 px-2 py-1 text-xs font-semibold text-slate-950">
              Open to work
            </span>
          </div>
          <h1 className="mt-6 text-3xl font-extrabold text-white">Jan Novák</h1>
          <p className="mt-2 text-slate-400">Frontend Developer & UI Designer</p>
          <p className="mt-4 max-w-xs text-sm leading-6 text-slate-400">
            Tvořím rychlé, čisté a vizuálně výrazné weby, které dávají smysl uživatelům i byznysu.
          </p>
        </div>

        <nav aria-label="Hlavní navigace" className="space-y-3">
          {[
            { id: 'about', icon: '👋', label: 'O mně' },
            { id: 'skills', icon: '⚡', label: 'Dovednosti' },
            { id: 'projects', icon: '🧩', label: 'Projekty' },
            { id: 'contact', icon: '✉️', label: 'Kontakt' },
          ].map((l) => {
            const isActive = activeId === l.id
            return (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={`sidebar-link flex items-center gap-3 rounded-xl border border-white/10 px-4 py-3 text-slate-300 transition hover:translate-x-1 hover:border-violet-400/40 hover:bg-violet-500/10 hover:text-white focus:outline-none focus:ring-2 focus:ring-violet-500 ${
                  isActive ? 'active' : ''
                }`}
              >
                <span>{l.icon}</span>
                <span>{l.label}</span>
              </a>
            )
          })}
        </nav>

        <div className="mt-10 rounded-2xl border border-white/10 bg-slate-900/70 p-5 shadow-glow">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">Dostupnost</p>
          <p className="mt-3 text-sm leading-6 text-slate-400">
            Aktuálně přijímám nové freelance i produktové projekty zaměřené na web, UX a frontend architekturu.
          </p>
          <a
            href="#contact"
            className="mt-4 inline-flex items-center rounded-xl bg-gradient-to-r from-violet-500 to-pink-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            Domluvit spolupráci
          </a>
        </div>
      </div>

      <div className="pt-8">
        <div className="flex items-center gap-3">
          <SocialIcon label="GitHub profil">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 .5C5.65.5.5 5.66.5 12.03c0 5.1 3.3 9.43 7.88 10.95.58.11.79-.25.79-.56 0-.27-.01-1.17-.02-2.12-3.2.7-3.87-1.37-3.87-1.37-.52-1.34-1.27-1.69-1.27-1.69-1.04-.72.08-.71.08-.71 1.15.08 1.75 1.2 1.75 1.2 1.02 1.77 2.68 1.26 3.34.97.1-.75.4-1.26.72-1.55-2.55-.29-5.23-1.29-5.23-5.74 0-1.27.45-2.3 1.19-3.11-.12-.29-.52-1.47.11-3.06 0 0 .97-.32 3.19 1.19a10.93 10.93 0 0 1 5.8 0c2.21-1.51 3.18-1.19 3.18-1.19.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.11 0 4.46-2.69 5.45-5.26 5.73.41.36.78 1.08.78 2.18 0 1.58-.01 2.85-.01 3.24 0 .31.21.68.8.56A11.54 11.54 0 0 0 23.5 12.03C23.5 5.66 18.35.5 12 .5Z" />
            </svg>
          </SocialIcon>
          <SocialIcon label="LinkedIn profil">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M4.98 3.5a2.5 2.5 0 1 0 0 5.001 2.5 2.5 0 0 0 0-5ZM3 9h4v12H3zm7 0h3.83v1.64h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.09V21h-4v-5.57c0-1.33-.02-3.03-1.85-3.03-1.85 0-2.13 1.44-2.13 2.94V21h-4z" />
            </svg>
          </SocialIcon>
          <SocialIcon label="Twitter profil">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.25l-4.89-6.4L6.45 22H3.34l7.24-8.28L1 2h6.4l4.42 5.84L18.9 2Zm-1.1 18h1.73L6.46 3.9H4.6L17.8 20Z" />
            </svg>
          </SocialIcon>
          <SocialIcon label="Dribbble profil">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.5A9.5 9.5 0 1 0 21.5 12 9.51 9.51 0 0 0 12 2.5Zm6.85 4.38a8.08 8.08 0 0 1 1.67 4.74 20.04 20.04 0 0 0-5.88-.08 24.94 24.94 0 0 0-1.12-2.42 17.51 17.51 0 0 0 5.33-2.24ZM12 3.95a8 8 0 0 1 5.02 1.77 15.87 15.87 0 0 1-4.83 1.99 41.4 41.4 0 0 0-2.32-3.32A7.72 7.72 0 0 1 12 3.95ZM8.22 4.93c.87 1.1 1.73 2.38 2.52 3.84a33.54 33.54 0 0 1-6.83.88A8.08 8.08 0 0 1 8.22 4.93ZM3.56 12v-.18a35.09 35.09 0 0 0 7.91-1.06c.25.52.49 1.06.71 1.59l-.35.1C7.75 13.68 5.47 17 4.83 18.05A8.01 8.01 0 0 1 3.56 12Zm2.31 7.1c.46-.77 2.4-3.79 6.88-5.35l.17-.06c.74 2.06 1.24 4.28 1.46 6.58A8.07 8.07 0 0 1 5.87 19.1Zm9.95.36a28.65 28.65 0 0 0-1.39-5.95 18.51 18.51 0 0 1 5.78.2 8.06 8.06 0 0 1-4.39 5.75Zm4.76-7.14a20.01 20.01 0 0 0-6.65-.1c-.2-.46-.41-.92-.64-1.38l-.05-.1a18.85 18.85 0 0 1 5.99-.02 8.21 8.21 0 0 1 1.35 1.6Z" />
            </svg>
          </SocialIcon>
        </div>

        <p className="mt-4 text-xs leading-5 text-slate-500">
          © 2025 Jan Novák
          <br />
          Navrženo a postaveno s důrazem na detail.
        </p>
      </div>
    </aside>
  )
}
