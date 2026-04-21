import React from 'react'

export default function ContactSection({ messageElRef, onSubmit, formReady }) {
  return (
    <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div className="reveal">
        <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-500">Kontakt</p>
        <h2 className="mt-3 text-4xl font-extrabold text-slate-900 sm:text-5xl">
          Máte projekt nebo nápad? Pojďme to probrat.
        </h2>
        <p className="mt-5 max-w-xl text-lg leading-8 text-slate-600">
          Ozvěte se mi s novým webem, redesignem, landing page, aplikací nebo dlouhodobou frontend spoluprací. Odpovídám rychle a rád navrhnu vhodný postup.
        </p>

        <div className="mt-8 space-y-4">
          <div className="rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-200">
            <p className="text-sm text-slate-500">Email</p>
            <a href="mailto:jan@portfolio.dev" className="mt-1 inline-block font-semibold text-slate-900 hover:text-violet-600">
              jan@portfolio.dev
            </a>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-200">
            <p className="text-sm text-slate-500">Lokalita</p>
            <p className="mt-1 font-semibold text-slate-900">Valtice, Česká republika · Remote friendly</p>
          </div>
          <div className="rounded-2xl bg-white p-5 shadow-md ring-1 ring-slate-200">
            <p className="text-sm text-slate-500">Sociální sítě</p>
            <div className="mt-3 flex flex-wrap gap-3">
              {['GitHub', 'LinkedIn', 'Dribbble'].map((t) => (
                <a
                  key={t}
                  href="#"
                  className="rounded-full bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-violet-100 hover:text-violet-700"
                  onClick={(e) => e.preventDefault()}
                >
                  {t}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="reveal rounded-3xl bg-slate-950 p-8 shadow-xl shadow-violet-500/10">
        <form id="contactForm" className="space-y-6" noValidate onSubmit={onSubmit} aria-disabled={!formReady}>
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-300">
              Jméno
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              aria-required="true"
              className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="Vaše jméno"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-300">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              aria-required="true"
              className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="vas@email.cz"
            />
          </div>

          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-300">
              Zpráva
            </label>
            <textarea
              id="message"
              name="message"
              rows="6"
              required
              aria-required="true"
              className="w-full rounded-2xl border border-white/10 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-violet-500"
              placeholder="Napište pár vět o projektu, cíli a termínu…"
            />
          </div>

          <button
            type="submit"
            className="inline-flex w-full items-center justify-center rounded-2xl bg-gradient-to-r from-violet-500 to-pink-500 px-6 py-4 font-semibold text-white transition hover:scale-[1.02] focus:outline-none focus:ring-2 focus:ring-violet-500"
          >
            Send Message
          </button>

          <p
            ref={messageElRef}
            id="formMessage"
            className="hidden rounded-2xl border border-emerald-400/20 bg-emerald-500/10 px-4 py-3 text-sm text-emerald-300"
            role="status"
            aria-live="polite"
          />
        </form>
      </div>
    </div>
  )
}
