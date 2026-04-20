import { useEffect, useState } from 'react'

export function useScrollSpy(ids) {
  const [activeId, setActiveId] = useState('')

  useEffect(() => {
    const onScroll = () => {
      let current = ''
      ids.forEach((id) => {
        const section = document.getElementById(id)
        if (!section) return
        const sectionTop = section.offsetTop - 140
        if (window.scrollY >= sectionTop) current = id
      })
      setActiveId(current)
    }

    window.addEventListener('scroll', onScroll)
    window.addEventListener('load', onScroll)
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('load', onScroll)
    }
  }, [ids])

  return activeId
}
