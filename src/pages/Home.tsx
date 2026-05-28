import { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import { CASES, type Case } from '@/data/cases'
import { useReveal } from '@/hooks/useReveal'
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

/* ─── Eyebrow ─────────────────────────────────────────────────── */
function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow">
      <span className="dot" aria-hidden="true" />
      <span>{children}</span>
    </p>
  )
}

/* ─── TimelineItem ────────────────────────────────────────────── */
/**
 * Self-contained animated timeline entry.
 * Observes its own intersection; fades+rises on scroll, with
 * logo slide-left and bottom-line clip-path reveal on stagger.
 */
function TimelineItem({ c }: { c: Case }) {
  const ref = useRef<HTMLLIElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.unobserve(el) } },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <li ref={ref} className={`tl-item ${visible ? 'tl-in' : 'tl-out'}`}>
      <div className="tl-left">
        {LOGOS[c.id] && (
          <img src={LOGOS[c.id]} alt={c.company} className="tl-logo" />
        )}
        <span className="tl-dates">{c.dates}</span>
      </div>
      <div className="tl-right">
        <h3 className="tl-company">{c.company}</h3>
        <p className="tl-role">
          {c.employer
            ? <><span className="tl-employer">{c.employer}</span> · {c.role}</>
            : c.role}
        </p>
        <p className="tl-desc">{c.sections[0].body}</p>
        <p className="tl-bottom">
          <span className="tl-arrow" aria-hidden="true">→ </span>
          {c.figures.map(f => `${f.value} ${f.label}`).join(' · ')}
        </p>
      </div>
    </li>
  )
}

/* ─── RevealBlock ─────────────────────────────────────────────── */
/**
 * Generic fade-up reveal wrapper — use for headings, prose, pill rows.
 * Renders a plain div; style via className.
 */
function RevealBlock({
  children,
  className = '',
  delay = 0,
  style,
  as: Tag = 'div',
}: {
  children: React.ReactNode
  className?: string
  delay?: number
  style?: React.CSSProperties
  as?: keyof JSX.IntrinsicElements
}) {
  const { ref, visible } = useReveal({ threshold: 0.15 })

  const combinedStyle: React.CSSProperties = {
    ...(delay ? ({ '--reveal-delay': `${delay}ms` } as React.CSSProperties) : {}),
    ...style,
  }

  // Cast through unknown to avoid the "union too complex" error from dynamic tags
  const AnyTag = Tag as unknown as React.ElementType

  return (
    <AnyTag
      ref={ref}
      className={`${className} ${visible ? 'reveal-in' : 'reveal-out'}`}
      style={Object.keys(combinedStyle).length ? combinedStyle : undefined}
    >
      {children}
    </AnyTag>
  )
}

/* ─── Home ────────────────────────────────────────────────────── */
export default function Home() {
  const navigate = useNavigate()

  // Work section heading gets a special cursor-blink class when visible
  const { ref: workHeadingRef, visible: workHeadingVisible } =
    useReveal<HTMLHeadingElement>({ threshold: 0.2 })

  return (
    <>
      <Helmet>
        <title>Janak Patel · Portfolio</title>
        <meta name="description" content="Digital & AI Transformation, Programme Delivery, Enterprise Agile. Agile Delivery Lead at E.ON Next Energy." />
      </Helmet>

      <div className="fade-in">

        {/* ── Hero ───────────────────────────────────────────── */}
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

        {/* ── Work timeline ──────────────────────────────────── */}
        <section id="work" className="section container" aria-labelledby="work-heading">
          <Eyebrow>Selected work</Eyebrow>
          <h2
            id="work-heading"
            ref={workHeadingRef}
            className={`section-h2 ${workHeadingVisible ? 'reveal-in tl-cursor' : 'reveal-out'}`}
          >
            Fifteen years,<br />
            four <span className="em">enterprises</span>.
          </h2>

          <ol className="timeline" aria-label="Work history">
            {CASES.map((c) => (
              <TimelineItem key={c.id} c={c} />
            ))}
          </ol>
        </section>

        <hr className="divider" aria-hidden="true" />

        {/* ── How I deliver ──────────────────────────────────── */}
        <section className="section container" aria-labelledby="approach-heading">
          <Eyebrow>How I deliver</Eyebrow>
          <RevealBlock as="h2" className="section-h2" aria-label="approach-heading">
            The goal is not more change —<br />
            it's better <span className="em">outcomes</span>, faster.
          </RevealBlock>
          <RevealBlock className="prose" delay={80}>
            I work best when brought in to shape ambiguity — translating board-level aspiration into a prioritised, executable agenda. Equal weight on building the practice as delivering the programme.
          </RevealBlock>
          <ul className="pillars" aria-label="Delivery pillars">
            {[
              { em: 'Shaping', rest: ' — translating strategic ambition into a clear delivery agenda, with stakeholder buy-in and risk visibility before a line of code is written.' },
              { em: 'Execution', rest: ' — clear ownership, adaptive planning, ruthless prioritisation. Less governance theatre, more accountability.' },
              { em: 'Value', rest: ' — outcomes over outputs. Embedding change that lasts beyond programme delivery.' },
            ].map(({ em, rest }, i) => (
              <RevealBlock key={em} as="li" delay={i * 60}>
                <span className="em">{em}</span>{rest}
              </RevealBlock>
            ))}
          </ul>
        </section>

        <hr className="divider" aria-hidden="true" />

        {/* ── Outside the brief ──────────────────────────────── */}
        <section className="section-tight container" aria-labelledby="personal-heading">
          <Eyebrow>Outside the brief</Eyebrow>
          <RevealBlock as="p" className="prose" style={{ marginBottom: 0 }}>
            Based in London. Interested in the intersection of AI, behaviour change and product design. Keen runner, occasional golfer, and genuinely excited about energy demand-shifting. Ask me why most agile transformations fail — I have thoughts.
          </RevealBlock>
        </section>

        <hr className="divider" aria-hidden="true" />

        {/* ── CTA ────────────────────────────────────────────── */}
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
