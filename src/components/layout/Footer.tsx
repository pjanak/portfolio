import { NavLink } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <div>
          <span className="wordmark" style={{ fontSize: 32 }}>
            Janak Patel<span className="dot" aria-hidden="true">.</span>
          </span>
          <p style={{
            fontFamily: 'var(--font-mono)', fontSize: 15, lineHeight: 1.7,
            color: 'var(--fg-2)', margin: '24px 0 0', maxWidth: '36ch'
          }}>
            // Available for permanent leadership, interim engagements, and advisory work in telecoms, retail and energy.
          </p>
        </div>

        <address style={{ fontStyle: 'normal' }}>
          <h4>Direct</h4>
          <p className="contact-line">
            <a className="link-quiet" href="mailto:p.janak@gmail.com">p.janak@gmail.com</a>
          </p>
          <p className="contact-line muted">
            <a className="link-quiet" href="tel:+447896861822">+44 (0) 789 686 1822</a>
          </p>
        </address>

        <div>
          <h4>Navigate</h4>
          <p className="contact-line muted">
            <NavLink className="link-quiet" to="/work">Selected work</NavLink>
          </p>
          <p className="contact-line muted">
            <NavLink className="link-quiet" to="/cv">Curriculum Vitae</NavLink>
          </p>
          <p className="contact-line muted">
            <NavLink className="link-quiet" to="/contact">Contact</NavLink>
          </p>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2026 · Janak Patel · London</span>
        <span>// All client work shown with prior approval</span>
      </div>
    </footer>
  )
}
