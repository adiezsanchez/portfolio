import { useEffect, useState } from 'react'

const THEME_KEY = 'portfolio-theme'

export function useTheme() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false
    try {
      return window.localStorage.getItem(THEME_KEY) === 'dark'
    } catch {
      return false
    }
  })

  useEffect(() => {
    const theme = dark ? 'dark' : 'light'
    document.documentElement.dataset.theme = theme
    document.documentElement.style.colorScheme = theme
    try {
      window.localStorage.setItem(THEME_KEY, theme)
    } catch {
      /* ignore quota / private-mode failures */
    }
  }, [dark])

  return {
    dark,
    toggleTheme: () => setDark((value) => !value),
  }
}

export function useRevealOnScroll() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('[data-reveal]'))
    if (!nodes.length) return undefined

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach((node) => node.classList.add('is-in'))
      return undefined
    }

    const reveal = (node) => {
      node.classList.add('is-in')
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            reveal(entry.target)
            observer.unobserve(entry.target)
          }
        })
      },
      // Positive bottom margin so late-page items (e.g. Contact social pills) still reveal
      { threshold: 0.08, rootMargin: '0px 0px 12% 0px' },
    )

    nodes.forEach((node) => observer.observe(node))

    const revealRemainingIfNearEnd = () => {
      const doc = document.documentElement
      const remaining = doc.scrollHeight - (window.scrollY + window.innerHeight)
      if (remaining > 120) return
      nodes.forEach((node) => {
        if (!node.classList.contains('is-in')) {
          reveal(node)
          observer.unobserve(node)
        }
      })
    }

    window.addEventListener('scroll', revealRemainingIfNearEnd, { passive: true })
    window.addEventListener('resize', revealRemainingIfNearEnd)
    revealRemainingIfNearEnd()

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', revealRemainingIfNearEnd)
      window.removeEventListener('resize', revealRemainingIfNearEnd)
    }
  }, [])
}

export function useHashScroll() {
  useEffect(() => {
    const { hash } = window.location
    if (!hash) return
    const target = document.querySelector(hash)
    if (target) {
      requestAnimationFrame(() => {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
      })
    }
  }, [])
}

export function scrollToId(id) {
  const target = document.getElementById(id)
  if (target) {
    target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
  window.history.replaceState(null, '', `#${id}`)
}

export function useMobileNav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 860) setOpen(false)
    }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  return { open, setOpen }
}

export function doiHref(doi) {
  return `https://doi.org/${doi}`
}
