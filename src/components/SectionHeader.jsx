import React from 'react'

export default function SectionHeader({ eyebrow, title, className = '', children }) {
  return (
    <div className={className}>
      <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-500">{eyebrow}</p>
      <h2 className="mt-3 text-4xl font-extrabold text-slate-900 sm:text-5xl">{title}</h2>
      {children}
    </div>
  )
}
