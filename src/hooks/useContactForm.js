import { useMemo, useState } from 'react'

export function useContactForm() {
  const [formReady] = useState(true)
  const messageElRef = useMemo(() => ({ current: null }), [])

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    if (!form) return

    const name = form.querySelector('#name')
    const email = form.querySelector('#email')
    const message = form.querySelector('#message')
    const formMessage = form.querySelector('#formMessage')
    if (!formMessage || !name || !email || !message) return

    const setMsg = (text, ok) => {
      formMessage.textContent = text
      formMessage.classList.remove('hidden')
      formMessage.classList.remove('border-emerald-400/20', 'bg-emerald-500/10', 'text-emerald-300', 'border-red-400/20', 'bg-red-500/10', 'text-red-300')
      if (ok) {
        formMessage.classList.add('border-emerald-400/20', 'bg-emerald-500/10', 'text-emerald-300')
      } else {
        formMessage.classList.add('border-red-400/20', 'bg-red-500/10', 'text-red-300')
      }
    }

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
      setMsg('Prosím vyplňte všechna pole formuláře.', false)
      return
    }

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)
    if (!emailValid) {
      setMsg('Zadejte prosím platnou e-mailovou adresu.', false)
      return
    }

    setMsg(`Děkuji, ${name.value.trim()}! Zpráva byla připravena k odeslání.`, true)
    form.reset()
  }

  return {
    messageElRef,
    handleSubmit,
    formReady,
  }
}
