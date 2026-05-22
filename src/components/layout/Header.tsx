import { useState, useEffect } from 'react'
import { NavLink, useLocation } from 'react-router-dom'

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const items = [
    { label: 'Work',    to: '/work'    },
    { label: 'CV',      to: '/cv'      },
    { label: 'Contact', to: '/contact' },
  ]

  const isWork = location.pathname.startsWith('/work') || location.pathname.startsWith('/case')

  return (
    <nav className={`nav${scrolled ? ' scrolled' : ''}`} aria-label="Primary">
      <div className="nav-inner">
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <NavLink to="/" aria-label="Janak Patel — home">
            {({ isActive }) => (
              <span className="wordmark" style={{ fontSize: 20 }}
                aria-current={isActive ? 'page' : undefined}>
                Janak Patel<span className="dot" aria-hidden="true">.</span>
              </span>
            )}
          </NavLink>
          <p className="nav-status" role="status" aria-live="polite"
            aria-label="Currently engaged at E.ON Next Energy. Advisory work is open.">
            <span aria-hidden="true">Available · Advisory</span>
          </p>
        </div>

        <ul className="nav-links" role="list">
          {items.map((item) => (
            <li key={item.to} role="listitem">
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  (item.to === '/work' ? (isWork ? 'active' : '') : isActive ? 'active' : '')
                }
              >
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
