import { Helmet } from 'react-helmet-async'
import { useNavigate, useParams } from 'react-router-dom'
import { CASES } from '@/data/cases'

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow">
      <span className="dot" aria-hidden="true" />
      <span>{children}</span>
    </p>
  )
}

function StatBlock({ items, ariaLabel }: { items: { value: string; label: string; em?: boolean }[]; ariaLabel?: string }) {
  return (
    <dl className="stats-row" aria-label={ariaLabel || 'Key figures'}>
      {items.map((it, i) => (
        <div className="stat-card" key={i}>
          <dt className="label">{it.label}</dt>
          <dd className={`figure${it.em ? ' em' : ''}`} style={{ margin: 0 }}>{it.value}</dd>
        </div>
      ))}
    </dl>
  )
}

export default function ProjectDetail() {
  const navigate = useNavigate()
  const { slug } = useParams<{ slug: string }>()
  const data = CASES.find(c => c.id === slug) ?? CASES[0]
  const idx = CASES.indexOf(data)
  const caseNum = String(idx + 1).padStart(2, '0')
  const next = CASES[(idx + 1) % CASES.length]

  return (
    <>
      <Helmet>
        <title>{data.company} · Janak Patel</title>
        <meta name="description" content={data.headline} />
      </Helmet>

      <div className="fade-in">
        <div className="container" style={{ paddingTop: 56 }}>
          <button className="back-link" onClick={() => navigate('/work')}>
            <span className="arr" aria-hidden="true">←</span>
            <span>All work</span>
          </button>
        </div>

        <article className="container" style={{ paddingTop: 32, paddingBottom: 64 }} aria-labelledby="case-title">
          <div className="detail-grid">
            <aside aria-label="Case study details">
              <dl className="detail-sidebar">
                <div className="block"><dt className="k">// Case</dt><dd className="v">{caseNum} / {String(CASES.length).padStart(2, '0')}</dd></div>
                <div className="block"><dt className="k">// Client</dt><dd className="v">{data.company}</dd></div>
                <div className="block"><dt className="k">// Role</dt><dd className="v">{data.role}</dd></div>
                <div className="block"><dt className="k">// Dates</dt><dd className="v">{data.dates}</dd></div>
                <div className="block"><dt className="k">// Location</dt><dd className="v">{data.location}</dd></div>
                <div className="block"><dt className="k">// Sector</dt><dd className="v em">{data.sector}</dd></div>
                <div className="block">
                  <dt className="k">// Tags</dt>
                  <dd style={{ margin: '4px 0 0' }}>
                    <ul style={{ display: 'flex', flexWrap: 'wrap', gap: 6, listStyle: 'none', padding: 0, margin: 0 }}>
                      {data.tags.map(t => <li key={t}><span className="tag-mono">{t.toUpperCase()}</span></li>)}
                    </ul>
                  </dd>
                </div>
              </dl>
            </aside>

            <div className="detail-main">
              <Eyebrow>Case {caseNum} · {data.sector}</Eyebrow>
              <h1 id="case-title">{data.headline}</h1>
              <p className="lead">{data.blurb}</p>

              <div style={{ margin: '8px 0 56px' }}>
                <StatBlock
                  ariaLabel={`Key figures for ${data.company}`}
                  items={data.figures.map((f, i) => ({ value: f.value, label: f.label, em: i === 0 }))}
                />
              </div>

              {data.sections.map((s, i) => (
                <section key={i}>
                  <h2>{s.heading}</h2>
                  <p>{s.body}</p>
                </section>
              ))}

              {data.quote && <blockquote className="pull">{data.quote}</blockquote>}

              <nav aria-label="Case navigation" style={{
                marginTop: 80, paddingTop: 32, borderTop: '1px solid var(--border-2)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', gap: 24
              }}>
                <div>
                  <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 500, color: 'var(--fg-3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 10, marginTop: 0 }}>
                    // NEXT CASE
                  </p>
                  <button
                    type="button"
                    onClick={() => navigate(`/case/${next.id}`)}
                    aria-label={`Next case study: ${next.company}`}
                    style={{
                      fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 32,
                      color: 'var(--fg)', cursor: 'pointer', background: 'none', border: 'none',
                      padding: '4px 2px', letterSpacing: '-0.03em', textAlign: 'left',
                      textDecoration: 'underline', textDecorationColor: 'var(--fg-4)',
                      textUnderlineOffset: '6px', transition: 'color 140ms'
                    }}
                    onMouseEnter={e => {
                      (e.currentTarget as HTMLElement).style.color = 'var(--accent)'
                      ;(e.currentTarget as HTMLElement).style.textDecorationColor = 'var(--accent)'
                    }}
                    onMouseLeave={e => {
                      (e.currentTarget as HTMLElement).style.color = 'var(--fg)'
                      ;(e.currentTarget as HTMLElement).style.textDecorationColor = 'var(--fg-4)'
                    }}
                  >
                    {next.company} <span aria-hidden="true">→</span>
                  </button>
                </div>
                <button className="link-arrow" onClick={() => navigate('/work')}>
                  <span>All work</span>
                  <span className="arr" aria-hidden="true">→</span>
                </button>
              </nav>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}
