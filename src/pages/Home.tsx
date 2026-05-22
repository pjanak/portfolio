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

function StatBlock({ items, ariaLabel }: {
  items: { value: string; label: string; ctx?: string; em?: boolean }[]
  ariaLabel?: string
}) {
  return (
    <dl className="stats-row" aria-label={ariaLabel || 'Key figures'}>
      {items.map((it, i) => (
        <div className="stat-card" key={i}>
          <dt className="label">{it.label}</dt>
          <dd className={`figure${it.em ? ' em' : ''}`} style={{ margin: 0 }}>{it.value}</dd>
          {it.ctx && <dd className="ctx" style={{ margin: 0 }}>{it.ctx}</dd>}
        </div>
      ))}
    </dl>
  )
}

export default function Home() {
  const navigate = useNavigate()
  const featured = CASES.slice(0, 4)

  return (
    <>
      <Helmet>
        <title>Janak Patel · Portfolio</title>
        <meta name="description" content="Digital & AI Transformation, Programme Delivery, Enterprise Agile. Agile Delivery Lead at E.ON Next Energy." />
      </Helmet>

      <div className="fade-in">
        {/* Hero */}
        <section className="hero container" aria-labelledby="hero-title">
          <div>
            <Eyebrow>Portfolio · 2026</Eyebrow>
            <h1 id="hero-title">
              Delivery,<br />
              by <span className="em">design</span>.
            </h1>
            <p className="lead">
              Digital and AI transformation, enterprise programme delivery — fifteen years across telecoms, retail, eCommerce and energy.
            </p>
            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button className="btn btn-primary" onClick={() => navigate('/work')}>
                Selected work <span aria-hidden="true">→</span>
              </button>
              <button className="btn btn-secondary" onClick={() => navigate('/contact')}>
                Get in touch
              </button>
            </div>
          </div>
          <dl className="hero-meta" aria-label="Current role and context">
            <li><span className="key">Currently</span><span className="val em"><span aria-hidden="true">→ </span>E.ON Next Energy</span></li>
            <li><span className="key">Role</span><span className="val">Agile Delivery Lead</span></li>
            <li><span className="key">Based</span><span className="val">London / Remote</span></li>
            <li><span className="key">Focus</span><span className="val">AI · SAFe · Programme Delivery</span></li>
            <li><span className="key">Sectors</span><span className="val">Energy · Telecoms · Retail · eCom</span></li>
            <li><span className="key">Trusted by</span><span className="val">VMO2 · River Island · BBC · Tesco</span></li>
          </dl>
        </section>

        <hr className="divider" aria-hidden="true" />

        {/* Stats */}
        <section className="section container" aria-labelledby="figures-heading">
          <div className="section-head">
            <div>
              <Eyebrow>At a glance</Eyebrow>
              <h2 id="figures-heading">Numbers from <span className="em">live</span> engagements.</h2>
            </div>
          </div>
          <StatBlock ariaLabel="Career figures at a glance" items={[
            { value: '£163m', label: 'Revenue protected',  ctx: '// eCommerce, Covid-19 response.', em: true },
            { value: '330+',  label: 'FTEs to SAFe',       ctx: '// 100% adoption, IT-wide.' },
            { value: '£32m',  label: 'Strategic portfolio', ctx: '// Governed over four years.' },
            { value: '14+',   label: 'Years in delivery',  ctx: '// Across four enterprises.' },
          ]} />
        </section>

        <hr className="divider" aria-hidden="true" />

        {/* Selected work */}
        <section className="section container" aria-labelledby="work-heading">
          <div className="section-head">
            <div>
              <Eyebrow>Selected work</Eyebrow>
              <h2 id="work-heading">
                Four engagements that<br />
                shaped the <span className="em">practice</span>.
              </h2>
            </div>
            <button className="link-arrow" onClick={() => navigate('/work')}>
              <span>All work</span>
              <span className="arr" aria-hidden="true">→</span>
            </button>
          </div>
          <ul className="case-grid-2col" aria-label="Case studies">
            {featured.map((c, i) => {
              const num = String(i + 1).padStart(2, '0')
              return (
                <li key={c.id}>
                  <button
                    className="case-card"
                    onClick={() => navigate(`/case/${c.id}`)}
                    aria-label={`Open case study ${num}: ${c.company} — ${c.headline}`}
                  >
                    <p className="meta">
                      <span className="em"><span aria-hidden="true">→ </span>CASE_{num} · {c.company.toUpperCase()}</span>
                      <span>{c.dates.replace(' — ', '—')}</span>
                    </p>
                    <h3 className="title">{c.headline}</h3>
                    <p className="blurb">{c.blurb}</p>
                    <ul className="tags" aria-label="Topic tags">
                      {c.tags.slice(0, 3).map(t => <li key={t}><span className="tag-mono">{t.toUpperCase()}</span></li>)}
                    </ul>
                    <dl className="figures" aria-label="Key figures">
                      {c.figures.slice(0, 3).map((f, fi) => (
                        <div className="fig" key={fi}>
                          <dt className="lbl" style={{ order: 2 }}>{f.label}</dt>
                          <dd className={`num${fi === 0 ? '' : ' muted'}`} style={{ order: 1, margin: 0 }}>{f.value}</dd>
                        </div>
                      ))}
                    </dl>
                  </button>
                </li>
              )
            })}
          </ul>
        </section>

        <hr className="divider" aria-hidden="true" />

        {/* Capabilities */}
        <section className="section container" aria-labelledby="cap-heading">
          <div className="section-head">
            <div>
              <Eyebrow>Capabilities</Eyebrow>
              <h2 id="cap-heading">
                Built for complex,<br />
                multi-supplier <span className="em">programmes</span>.
              </h2>
            </div>
          </div>
          <div className="cap-grid" role="list">
            {[
              { meta: '01', title: 'Delivery & Agile', items: ['SAFe / Scaled Agile rollouts', 'Programme & portfolio management', 'End-to-end planning & execution', 'Jira · Asana · Confluence governance'] },
              { meta: '02', title: 'AI & Digital Platforms', items: ['AI roadmap shaping & governance', 'Native mobile & web delivery', 'Loyalty & customer data platforms', 'Omnichannel & eCommerce programmes'] },
              { meta: '03', title: 'Strategy & Leadership', items: ['C-suite & board engagement', 'CapEx / P&L accountability', 'Commercial negotiation & MSA', 'Team building & capability development'] },
            ].map(c => (
              <article className="cap" key={c.title} role="listitem">
                <p className="cap-meta"><span aria-hidden="true">// </span>{c.meta}</p>
                <h3>{c.title}</h3>
                <ul>{c.items.map(it => <li key={it}>{it}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <hr className="divider" aria-hidden="true" />

        {/* CTA */}
        <section className="section container" style={{ paddingBottom: 32 }} aria-labelledby="cta-heading">
          <div className="cta-grid">
            <div>
              <Eyebrow>Working with Janak</Eyebrow>
              <h2 id="cta-heading" style={{
                fontFamily: 'var(--font-display)', fontWeight: 600,
                fontSize: 'clamp(40px, 5.5vw, 72px)', lineHeight: 0.98,
                letterSpacing: '-0.045em', color: 'var(--fg)', margin: '24px 0 28px', maxWidth: '18ch'
              }}>
                Delivering for E.ON Next, taking on selective{' '}
                <span style={{ color: 'var(--accent)' }}>advisory</span>.
              </h2>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 17, lineHeight: 1.7, color: 'var(--fg-2)', margin: '0 0 36px', maxWidth: '52ch' }}>
                // Open to non-executive, board, and short-engagement advisory roles in retail, telecoms, energy, and AI-enabled businesses.
              </p>
              <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button className="btn btn-primary" onClick={() => navigate('/contact')}>
                  Get in touch <span aria-hidden="true">→</span>
                </button>
                <button className="btn btn-secondary" onClick={() => navigate('/cv')}>
                  View full CV
                </button>
              </div>
            </div>
            <dl style={{
              background: 'var(--bg-soft)', border: '1px solid var(--border-2)',
              borderRadius: 4, padding: 28, fontFamily: 'var(--font-mono)',
              fontSize: 13, color: 'var(--fg-2)', lineHeight: 1.7, margin: 0
            }} aria-label="Contact details">
              <dt style={{ color: 'var(--fg-4)', fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>// DIRECT</dt>
              <dd style={{ margin: 0, color: 'var(--fg)', fontSize: 15 }}>
                <a className="link-quiet" href="mailto:p.janak@gmail.com">p.janak@gmail.com</a>
              </dd>
              <dd style={{ margin: '4px 0 0' }}>+44 (0) 789 686 1822</dd>
              <hr style={{ border: 'none', borderTop: '1px solid var(--border-2)', margin: '20px 0' }} aria-hidden="true" />
              <dt style={{ color: 'var(--fg-4)', fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>// BASED</dt>
              <dd style={{ margin: 0 }}>London, United Kingdom</dd>
              <hr style={{ border: 'none', borderTop: '1px solid var(--border-2)', margin: '20px 0' }} aria-hidden="true" />
              <dt style={{ color: 'var(--fg-4)', fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 8 }}>// RESPONSE</dt>
              <dd style={{ margin: 0 }}>Within two working days</dd>
            </dl>
          </div>
        </section>
      </div>
    </>
  )
}
