import React, { useEffect, useState } from 'react'

export default function MobileHeader() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onHash = () => setOpen(false)
    window.addEventListener('hashchange', onHash)
    return () => window.removeEventListener('hashchange', onHash)
  }, [])

  return (
    <header className="lg:hidden sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 glass">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src="https://picsum.photos/80/80?grayscale"
            alt="Avatar vývojáře Jana Nováka"
            className="h-11 w-11 rounded-full object-cover ring-2 ring-violet-500/60"
          />
          <div>
            <p className="font-heading text-base font-bold text-white">Jan Novák</p>
            <p className="text-sm text-slate-400">Frontend Developer</p>
          </div>
        </div>
        <button
          id="menuToggle"
          aria-label="Otevřít navigaci"
          aria-expanded={open}
          aria-controls="mobileMenu"
          className="rounded-xl border border-white/10 bg-slate-900/80 p-3 text-white transition hover:scale-105 hover:border-violet-400/60 focus:outline-none focus:ring-2 focus:ring-violet-500"
          onClick={() => setOpen((v) => !v)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <nav
        id="mobileMenu"
        className={`border-t border-white/10 bg-slate-950/95 px-4 pb-4 pt-3 ${open ? '' : 'hidden'}`}
        aria-label="Mobilní navigace"
      >
        <div className="grid gap-2">
          {[
            { id: 'about', label: 'O mně' },
            { id: 'skills', label: 'Dovednosti' },
            { id: 'projects', label: 'Projekty' },
            { id: 'experience', label: 'Zkušenosti' },
            { id: 'contact', label: 'Kontakt' },
          ].map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="rounded-lg px-4 py-3 text-slate-300 transition hover:bg-violet-500/10 hover:text-white"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
