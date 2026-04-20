import React, { useEffect, useMemo, useRef, useState } from 'react'
import Hero from './components/Hero.jsx'
import SectionHeader from './components/SectionHeader.jsx'
import AboutSection from './components/AboutSection.jsx'
import SkillsSection from './components/SkillsSection.jsx'
import ProjectsSection from './components/ProjectsSection.jsx'
import ExperienceSection from './components/ExperienceSection.jsx'
import ContactSection from './components/ContactSection.jsx'
import Footer from './components/Footer.jsx'
import Sidebar from './components/Sidebar.jsx'
import MobileHeader from './components/MobileHeader.jsx'
import { useScrollSpy } from './hooks/useScrollSpy.js'
import { useRevealOnScroll } from './hooks/useRevealOnScroll.js'
import { useContactForm } from './hooks/useContactForm.js'

export default function App() {
  const aboutRef = useRef(null)
  const skillsRef = useRef(null)
  const projectsRef = useRef(null)
  const experienceRef = useRef(null)
  const contactRef = useRef(null)

  const sections = useMemo(
    () => [
      { id: 'about', label: 'O mně', ref: aboutRef },
      { id: 'skills', label: 'Dovednosti', ref: skillsRef },
      { id: 'projects', label: 'Projekty', ref: projectsRef },
      { id: 'experience', label: 'Zkušenosti', ref: experienceRef },
      { id: 'contact', label: 'Kontakt', ref: contactRef },
    ],
    [],
  )

  const activeId = useScrollSpy(sections.map((s) => s.id))
  useRevealOnScroll()

  const { messageElRef, handleSubmit, formReady } = useContactForm()

  useEffect(() => {
    const onClick = (e) => {
      const target = e.target?.closest?.('a[href^="#"]')
      if (!target) return
      const href = target.getAttribute('href')
      if (!href || href === '#') return
      const el = document.querySelector(href)
      if (!el) return
      e.preventDefault()
      el.scrollIntoView({ behavior: 'smooth', block: 'start' })
      history.replaceState(null, '', href)
    }
    document.addEventListener('click', onClick)
    return () => document.removeEventListener('click', onClick)
  }, [])

  return (
    <div className="min-h-screen lg:flex">
      <Sidebar activeId={activeId} />
      <div className="w-full lg:ml-80">
        <MobileHeader />

        <main id="main">
          <Hero />

          <section id="about" className="px-6 py-20 lg:px-12" ref={aboutRef}>
            <div className="mx-auto max-w-7xl">
              <div className="mb-12 reveal">
                <p className="text-sm font-semibold uppercase tracking-[0.25em] text-violet-500">O mně</p>
                <h2 className="mt-3 text-4xl font-extrabold text-slate-900 sm:text-5xl">
                  Kombinuji estetiku, použitelnost a čistý kód
                </h2>
              </div>
              <AboutSection />
            </div>
          </section>

          <SkillsSection id="skills" refEl={skillsRef} />

          <ProjectsSection id="projects" refEl={projectsRef} />

          <section id="experience" className="bg-slate-950 px-6 py-20 lg:px-12" ref={experienceRef}>
            <div className="mx-auto max-w-7xl">
              <SectionHeader
                eyebrow="Zkušenosti"
                title="Cesta přes agentury, startupy i produktové týmy"
                className="mb-12 reveal text-white"
              />
              <ExperienceSection />
            </div>
          </section>

          <section id="contact" className="px-6 py-20 lg:px-12" ref={contactRef}>
            <div className="mx-auto max-w-7xl">
              <ContactSection
                messageElRef={messageElRef}
                onSubmit={handleSubmit}
                formReady={formReady}
              />
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}
