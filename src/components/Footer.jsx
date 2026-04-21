import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white px-6 py-8 lg:px-12">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">
        <div className="flex items-center gap-3">
          <img src="/images/footer-1.png" alt="Logo" className="h-7 w-auto" />
          <p className="text-sm text-slate-600">
            Built with ❤️ by Lukáš Klimeš · © 2025 Všechna práva vyhrazena.
          </p>
        </div>
        <div className="flex items-center gap-4">
          {[
            { id: 'about', label: 'O mně' },
            { id: 'projects', label: 'Projekty' },
            { id: 'contact', label: 'Kontakt' },
          ].map((l) => (
            <a key={l.id} href={`#${l.id}`} className="text-sm text-slate-500 transition hover:text-violet-600">
              {l.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
