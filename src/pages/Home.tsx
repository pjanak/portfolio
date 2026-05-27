import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import { CASES } from '@/data/cases'
import eonLogo from '@/assets/logos/eon.svg'
import vmo2Logo from '@/assets/logos/vmo2-dark.svg'
import riverIslandLogo from '@/assets/logos/river-island-dark.svg'
import replyLogo from '@/assets/logos/reply-dark.svg'

const LOGOS: Record<string, string> = {
  eon: eonLogo,
  vmo2: vmo2Logo,
  'river-island': riverIslandLogo,
  'reply-ecom': replyLogo,
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow">
      <span className="dot" aria-hidden="true" />
      <span>{children}</span>
    </p>
  )
}

export default function Home() {
  const navigate = useNavigate()

  return (
    <>
      <Helmet>
        <title>Janak Patel · Portfolio</title>
        <meta name="description" content="Digital & AI Transformation, Programme Delivery, Enterprise Agile. Agile Delivery Lead at E.ON Next Energy." />
      </Helmet>

      <div className="fade-in">

        {/* Hero */}
        <section className="hero-simple container" aria-labelledby="hero-title">
          <Eyebrow>Portfolio · 2026</Eyebrow>
          <h1 id="hero-title">
            Delivery,<br />
            by <span className="em">design</span>.
          </h1>
          <p className="hero-bio">
            I shape delivery, build high-performing teams, and turn complex programmes into measurable outcomes. Fifteen years across energy, telecoms, retail and eCommerce.
          </p>
          <div className="hero-ctas">
            <button className="btn btn-primary" onClick={() => navigate('/contact')}>
              Get in touch <span aria-hidden="true">→</span>
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('/cv')}>
              View full CV
            </button>
          </div>
          <p className="hero-status">
            <span className="dot" aria-hidden="true" />
            Currently at E.ON Next Energy · Available for selective advisory
          </p>
        </section>

        <hr className="divider" aria-hidden="true" />

        {/* Work timeline */}
        <section id="work" className="section container" aria-labelledby="work-heading">
          <Eyebrow>Selected work</Eyebrow>
          <h2 id="work-heading" className="section-h2">
            Fifteen years,<br />four <span className="em">enterprises</span>.
          </h2>
          <ol className="timeline" aria-label="Work history">
            {CASES.map((c) => (
              <li className="tl-item" key={c.id}>
                <div className="tl-left">
                  {LOGOS[c.id] && (
                    <img
                      src={LOGOS[c.id]}
                      alt={c.company}
                      className="tl-logo"
                    />
                  )}
                  <span className="tl-dates">{c.dates}</span>
                </div>
                <div className="tl-right">
                  <h3 className="tl-company">{c.company}</h3>
                  <p className="tl-role">{c.role}</p>
                  <p className="tl-desc">{c.sections[0].body}</p>
                  <p className="tl-bottom">
                    <span className="tl-arrow" aria-hidden="true">→ </span>
                    {c.figures.map(f => `${f.value} ${f.label}`).join(' · ')}
                  </p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <hr className="divider" aria-hidden="true" />

        {/* How I deliver */}
        <section className="section container" aria-labelledby="approach-heading">
          <Eyebrow>How I deliver</Eyebrow>
          <h2 id="approach-heading" className="section-h2">
            The goal is not more change —<br />
            it's better <span className="em">outcomes</span>, faster.
          </h2>
          <p className="prose">
            I work best when brought in to shape ambiguity — translating board-level aspiration into a prioritised, executable agenda. Equal weight on building the practice as delivering the programme.
          </p>
          <ul className="pillars" aria-label="Delivery pillars">
            <li><span className="em">Shaping</span> — translating strategic ambition into a clear delivery agenda, with stakeholder buy-in and risk visibility before a line of code is written.</li>
            <li><span className="em">Execution</span> — clear ownership, adaptive planning, ruthless prioritisation. Less governance theatre, more accountability.</li>
            <li><span className="em">Value</span> — outcomes over outputs. Embedding change that lasts beyond programme delivery.</li>
          </ul>
        </section>

        <hr className="divider" aria-hidden="true" />

        {/* Outside the brief */}
        <section className="section-tight container" aria-labelledby="personal-heading">
          <Eyebrow>Outside the brief</Eyebrow>
          <p id="personal-heading" className="prose" style={{ marginBottom: 0 }}>
            Based in London. Interested in the intersection of AI, behaviour change and product design. Keen runner, occasional golfer, and genuinely excited about energy demand-shifting. Ask me why most agile transformations fail — I have thoughts.
          </p>
        </section>

        <hr className="divider" aria-hidden="true" />

        {/* CTA */}
        <section className="section-tight container" style={{ paddingBottom: 64 }} aria-labelledby="cta-heading">
          <h2 id="cta-heading" className="cta-h">
            Delivering for E.ON Next,<br />
            taking on selective <span className="em">advisory</span>.
          </h2>
          <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => navigate('/contact')}>
              Get in touch <span aria-hidden="true">→</span>
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('/cv')}>
              View full CV
            </button>
          </div>
        </section>

      </div>
    </>
  )
}
