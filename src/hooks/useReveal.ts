import { useEffect, useRef, useState } from 'react'

interface RevealOptions {
  /** Fraction of element visible before triggering (default 0.1) */
  threshold?: number
  /** Shrink bottom viewport edge inward so reveal fires earlier (default '-48px') */
  margin?: string
  /** Trigger every intersection, not just the first (default false) */
  repeat?: boolean
}

/**
 * Intersection-Observer based scroll reveal hook.
 * Returns a ref to attach to the element and a `visible` boolean.
 *
 * Usage:
 *   const { ref, visible } = useReveal<HTMLHeadingElement>()
 *   <h2 ref={ref} className={visible ? 'reveal-in' : 'reveal-out'}>…</h2>
 */
export function useReveal<T extends HTMLElement = HTMLElement>(opts?: RevealOptions) {
  const ref = useRef<T>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          if (!opts?.repeat) io.unobserve(el)
        } else if (opts?.repeat) {
          setVisible(false)
        }
      },
      {
        threshold: opts?.threshold ?? 0.1,
        rootMargin: opts?.margin ?? '0px 0px -48px 0px',
      }
    )

    io.observe(el)
    return () => io.disconnect()
  }, [])

  return { ref, visible }
}
