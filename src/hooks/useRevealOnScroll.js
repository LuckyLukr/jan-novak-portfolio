import { useEffect } from 'react'

export function useRevealOnScroll() {
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible')
        })
      },
      { threshold: 0.14 },
    )

    reveals.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
