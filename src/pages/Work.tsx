import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import { CASES } from '@/data/cases'

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow">
      <span className="dot" aria-hidden="true" />
      <span>{children}</span>
    </p>
  )
}

export default function Work() {
  const navigate = useNavigate()
  const [filter, setFilter] = useState('All')
  const tags = ['All', 'Energy', 'Telecoms', 'Retail', 'eCommerce']

  const filtered = filter === 'All'
    ? CASES
    : CASES.filter(c => c.tags.some(t => t.toLowerCase().includes(filter.toLowerCase())))

  return (
    <>
      <Helmet>
        <title>Selected Work · Janak Patel</title>
        <meta name="description" content="Four enterprise engagements across energy, telecoms, retail and eCommerce. Fourteen years of delivery leadership." />
      </Helmet>

      <div className="fade-in">
        <section className="container" style={{ paddingTop: 88, paddingBottom: 32 }} aria-labelledby="index-heading">
          <Eyebrow>Selected work · 2011 — present</Eyebrow>
          <h1 id="index-heading" style={{
            fontFamily: 'var(--font-display)', fontWeight: 600,
            fontSize: 'clamp(56px, 7vw, 104px)', lineHeight: 0.96,
            letterSpacing: '-0.05em', color: 'var(--fg)',
            margin: '28px 0', maxWidth: '20ch'
          }}>
            Four engagements,<br />
            <span style={{ color: 'var(--accent)', fontWeight: 700 }}>fourteen</span> years.
          </h1>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 17, lineHeight: 1.7, color: 'var(--fg-2)', margin: 0, maxWidth: '60ch' }}>
            // Each case below is a real engagement — outcomes are credited to the wider teams that delivered them.
          </p>

          <div role="toolbar" aria-label="Filter case studies by sector"
            style={{ display: 'flex', gap: 8, flexWrap: 'wrap', alignItems: 'center', margin: '24px 0 48px' }}>
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, fontWeight: 500, color: 'var(--fg-3)', letterSpacing: '0.1em', textTransform: 'uppercase', marginRight: 8 }}>
              // FILTER:
            </span>
            {tags.map(t => (
              <button key={t} type="button"
                className={`pill${filter === t ? ' active' : ''}`}
                aria-pressed={filter === t}
                onClick={() => setFilter(t)}>{t}</button>
            ))}
            <span className="sr-only" aria-live="polite" aria-atomic="true">
              Showing {filtered.length} {filtered.length === 1 ? 'case' : 'cases'}{filter === 'All' ? '' : ` filtered by ${filter}`}.
            </span>
          </div>
        </section>

        <hr className="divider" aria-hidden="true" />

        <section className="container section-tight" aria-label="All case studies">
          <ol style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column' }}>
            {filtered.map((c, i) => {
              const idx = CASES.indexOf(c)
              const num = String(idx + 1).padStart(2, '0')
              const isLast = i === filtered.length - 1
              return (
                <li key={c.id}>
                  <button
                    type="button"
                    onClick={() => navigate(`/case/${c.id}`)}
                    aria-label={`Open case study ${num}: ${c.company} — ${c.headline}`}
                    className={`work-row${isLast ? '' : ' work-row-border'}`}
                  >
                    <span className="work-row-num" aria-hidden="true">{num} /</span>
                    <span>
                      <span className="work-row-company">{c.company.toUpperCase()} · {c.dates}</span>
                      <span className="work-row-title row-title">{c.headline}</span>
                    </span>
                    <span className="work-row-blurb" aria-hidden="true">// {c.blurb}</span>
                    <span className="work-row-meta" aria-hidden="true">
                      {c.tags.slice(0, 3).map(t => <span key={t} className="tag-mono">{t.toUpperCase()}</span>)}
                      <span className="work-row-arr row-arr">→</span>
                    </span>
                  </button>
                </li>
              )
            })}
          </ol>
          {filtered.length === 0 && (
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 16, color: 'var(--fg-2)' }} role="status">
              // No engagements match that filter — yet.
            </p>
          )}
        </section>
      </div>
    </>
  )
}
