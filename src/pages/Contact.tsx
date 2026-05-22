import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow">
      <span className="dot" aria-hidden="true" />
      <span>{children}</span>
    </p>
  )
}

export default function Contact() {
  const navigate = useNavigate()

  return (
    <>
      <Helmet>
        <title>Contact · Janak Patel</title>
        <meta name="description" content="Get in touch with Janak Patel. Open to advisory, non-executive, and short-term engagements in retail, telecoms, energy, and AI-enabled businesses." />
      </Helmet>

      <div className="fade-in">
        <section className="section container" aria-labelledby="contact-heading">
          <Eyebrow>Contact</Eyebrow>
          <h1 id="contact-heading" style={{
            fontFamily: 'var(--font-display)', fontWeight: 600,
            fontSize: 'clamp(56px, 7vw, 96px)', lineHeight: 0.96,
            letterSpacing: '-0.05em', color: 'var(--fg)',
            margin: '24px 0 28px', maxWidth: '20ch'
          }}>
            Let's talk <span style={{ color: 'var(--accent)' }}>delivery</span>.
          </h1>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 17, lineHeight: 1.7, color: 'var(--fg-2)', margin: '0 0 56px', maxWidth: '52ch' }}>
            // Open to advisory roles, non-executive work, and short-term engagements in retail, telecoms, energy, and AI-enabled businesses.
          </p>

          <div className="contact-cards">
            {[
              { key: '// EMAIL', val: 'p.janak@gmail.com', href: 'mailto:p.janak@gmail.com' },
              { key: '// PHONE', val: '+44 (0) 789 686 1822', href: 'tel:+447896861822' },
              { key: '// BASED', val: 'London, UK', href: null },
            ].map(item => (
              <div key={item.key} style={{ background: 'var(--bg-soft)', border: '1px solid var(--border-2)', borderRadius: 4, padding: 24 }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500, color: 'var(--fg-4)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 10px' }}>
                  {item.key}
                </p>
                {item.href
                  ? <a className="link-quiet" href={item.href} style={{ fontFamily: 'var(--font-mono)', fontSize: 15, color: 'var(--fg)', display: 'block' }}>{item.val}</a>
                  : <p style={{ fontFamily: 'var(--font-mono)', fontSize: 15, color: 'var(--fg)', margin: 0 }}>{item.val}</p>
                }
              </div>
            ))}
          </div>

          <div style={{ marginTop: 64 }}>
            <Eyebrow>Availability</Eyebrow>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 17, lineHeight: 1.7, color: 'var(--fg-2)', margin: '16px 0 32px', maxWidth: '52ch' }}>
              // Currently engaged full-time at E.ON Next Energy. Available for advisory, non-executive, and board-level work alongside current role. Response within two working days.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button className="btn btn-secondary" onClick={() => navigate('/cv')}>
                View full CV
              </button>
              <button className="btn btn-secondary" onClick={() => navigate('/work')}>
                Selected work
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
