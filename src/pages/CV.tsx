import { useEffect, useRef, useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { useNavigate } from 'react-router-dom'
import vmo2Logo from '@/assets/logos/vmo2-dark.svg'
import bbcLogo from '@/assets/logos/bbc.svg'
import tescoLogo from '@/assets/logos/tesco.svg'
import johnLewisLogo from '@/assets/logos/john-lewis.svg'
import skyLogo from '@/assets/logos/sky.svg'
import vodafoneLogo from '@/assets/logos/vodafone.svg'
import theBodyShopLogo from '@/assets/logos/the-body-shop.svg'
import monsoonLogo from '@/assets/logos/monsoon.svg'
import berryBrosLogo from '@/assets/logos/berry-bros.svg'
import batLogo from '@/assets/logos/bat.svg'
import costcoLogo from '@/assets/logos/costco.svg'

const CLIENT_GROUPS = [
  {
    label: 'Telecoms & Media',
    clients: [
      { name: 'Virgin Media O2', src: vmo2Logo },
      { name: 'Sky',             src: skyLogo },
      { name: 'Vodafone',        src: vodafoneLogo },
      { name: 'BBC',             src: bbcLogo },
    ],
  },
  {
    label: 'Retail & eCommerce',
    clients: [
      { name: 'Tesco',      src: tescoLogo },
      { name: 'John Lewis', src: johnLewisLogo },
      { name: 'Costco',     src: costcoLogo },
      { name: 'Monsoon',    src: monsoonLogo },
    ],
  },
  {
    label: 'Consumer & Lifestyle',
    clients: [
      { name: 'The Body Shop', src: theBodyShopLogo },
      { name: 'Berry Bros.',   src: berryBrosLogo },
      { name: 'BAT',           src: batLogo },
    ],
  },
]

function ClientLogo({ name, src, index }: { name: string; src: string; index: number }) {
  const ref = useRef<HTMLLIElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); io.unobserve(el) } },
      { threshold: 0.1, rootMargin: '0px 0px -32px 0px' }
    )
    io.observe(el)
    return () => io.disconnect()
  }, [])

  return (
    <li
      ref={ref}
      className={`client-logo-item ${visible ? 'client-logo-in' : 'client-logo-out'}`}
      style={{ '--logo-delay': `${index * 55}ms` } as React.CSSProperties}
    >
      <img src={src} alt={name} />
    </li>
  )
}

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <p className="eyebrow">
      <span className="dot" aria-hidden="true" />
      <span>{children}</span>
    </p>
  )
}

const SKILLS = [
  { label: 'Delivery', items: 'SAFe, Scaled Agile, Scrum, Kanban, portfolio & programme management, Jira, Confluence, Asana, Roadmunk, Miro' },
  { label: 'Digital Platforms', items: 'Web delivery, native mobile apps, loyalty programmes, customer data platforms, CMS, omnichannel journeys, eCommerce, PIM, Promotions Engine, Reward, Payments' },
  { label: 'AI', items: 'Roadmap shaping, governance & council facilitation, partner coordination, practical AI adoption and organisational change' },
  { label: 'Commercial & Leadership', items: 'CapEx/OpEx governance, P&L accountability, supplier negotiation & management, C-suite engagement, team building, mentorship, capability development, ways of working improvement' },
]

const ROLES = [
  {
    dates: 'Feb 2026 — Present',
    company: 'E.ON Next Energy',
    location: 'Remote, UK',
    title: 'Agile Delivery Lead',
    bullets: [
      'Leading delivery across 3 squads on customer retention and digital self-serve — overseeing the native app migration to 5m+ active users and early-stage development of an AI-enabled loyalty programme.',
      'Bridging internal and external product and technology teams from inception to live, embedded within the go-to-market function.',
    ],
  },
  {
    dates: 'May 2023 — Nov 2025',
    company: 'Reply Ltd (Open Reply UK)',
    location: 'London, UK',
    title: 'Senior Manager — Business Unit Manager & Delivery Leader',
    bullets: [
      "Built and led the digital experience practice — 14 FTE, £4m+ CapEx budget, strategic partnerships with Google, AWS and Apple (UK's first Vision Pro consultancy partner), and delivery of adaptive AI digital humans in a live customer environment.",
      'Recovered a stalled VMO2 transformation: £8m annual portfolio, 5% conversion uplift, zero-disruption dual-platform migration, three regulatory programmes landed on time.',
    ],
  },
  {
    dates: 'Jul 2019 — Mar 2023',
    company: 'River Island Clothing Ltd',
    location: 'London, UK',
    title: 'Principal Delivery Manager → Head of Transformation & Delivery Practice',
    bullets: [
      'Governed a £32m strategic IT portfolio on the Technology Leadership Team — transitioned 330+ people to Scaled Agile, protected £163m in eCommerce revenue through Covid-19 response, and cut team attrition by 10%.',
      'Built foundational data capabilities (single view of customer, inventory, transactions) and a promotions engine across all customer touchpoints.',
    ],
  },
  {
    dates: 'Nov 2011 — Jul 2019',
    company: 'Reply Ltd',
    location: 'London, UK',
    title: 'Consultant → Senior Consultant → Principal eCommerce Consultant',
    bullets: [
      'Progressed from software developer to full delivery ownership across major brands — VMO2, BBC, Tesco, John Lewis, Monsoon Accessorize, Sky. Notable work includes the BBC Bitesize app (record downloads) and advising the CEO of Monsoon Accessorize through their CVA.',
      'Consistent delivery outcomes: 5–10% conversion uplift, 19% reduction in platform downtime, 12% CSAT improvement, 6% marketing ROI uplift.',
    ],
  },
]

export default function CV() {
  const navigate = useNavigate()

  return (
    <>
      <Helmet>
        <title>CV · Janak Patel</title>
        <meta name="description" content="Janak Patel — Digital & AI Transformation, Programme Delivery, Enterprise Agile. Full curriculum vitae." />
      </Helmet>

      <div className="fade-in">
        {/* Header */}
        <section className="container" style={{ paddingTop: 88, paddingBottom: 0 }} aria-labelledby="cv-heading">
          <Eyebrow>Curriculum Vitae</Eyebrow>
          <h1 id="cv-heading" style={{
            fontFamily: 'var(--font-display)', fontWeight: 600,
            fontSize: 'clamp(56px, 7vw, 96px)', lineHeight: 0.96,
            letterSpacing: '-0.05em', color: 'var(--fg)',
            margin: '28px 0', maxWidth: '20ch'
          }}>
            Janak<br />
            <span style={{ color: 'var(--accent)' }}>Patel</span>.
          </h1>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 17, lineHeight: 1.7, color: 'var(--fg-2)', margin: '0 0 12px', maxWidth: '60ch' }}>
            // Digital & AI Transformation | Programme Delivery | Enterprise Agile
          </p>
          <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap', marginBottom: 16, fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--fg-3)' }}>
            <a className="link-quiet" href="mailto:p.janak@gmail.com">p.janak@gmail.com</a>
            <a className="link-quiet" href="tel:+447896861822">+44 (0) 789 686 1822</a>
            <span>London, UK</span>
            <span>British</span>
          </div>
        </section>

        {/* Core Skills */}
        <section className="container" style={{ paddingTop: 64 }} aria-labelledby="skills-heading">
          <h2 id="skills-heading" style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 32px' }}>
            <span style={{ color: 'var(--fg-4)' }}>// </span>Core Skills
          </h2>
          <div className="skills-grid">
            {SKILLS.map(s => (
              <div key={s.label} style={{ background: 'var(--bg-soft)', border: '1px solid var(--border-2)', borderRadius: 4, padding: '20px 24px' }}>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 8px' }}>
                  {s.label}
                </p>
                <p style={{ fontFamily: 'var(--font-mono)', fontSize: 13, lineHeight: 1.65, color: 'var(--fg-2)', margin: 0 }}>
                  {s.items}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="container" style={{ paddingTop: 64 }} aria-labelledby="exp-heading">
          <h2 id="exp-heading" style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 32px' }}>
            <span style={{ color: 'var(--fg-4)' }}>// </span>Business Experience
          </h2>
          {ROLES.map(r => (
            <div className="cv-role" key={r.title}>
              <div>
                <p className="dates">{r.dates}</p>
                <p className="org">{r.company}</p>
                <p className="loc">{r.location}</p>
              </div>
              <div>
                <h3 className="role-title">{r.title}</h3>
                <ul>{r.bullets.map((b, i) => <li key={i}>{b}</li>)}</ul>
              </div>
            </div>
          ))}
        </section>

        {/* Education */}
        <section className="container" style={{ paddingTop: 64, paddingBottom: 96 }} aria-labelledby="edu-heading">
          <h2 id="edu-heading" style={{ fontFamily: 'var(--font-mono)', fontWeight: 600, fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--accent)', margin: '0 0 32px' }}>
            <span style={{ color: 'var(--fg-4)' }}>// </span>Education
          </h2>
          <div className="cv-role">
            <div>
              <p className="dates">2008 — 2011</p>
              <p className="org">University of Hertfordshire</p>
            </div>
            <div>
              <h3 className="role-title">BSc (Hons) Multimedia Technology</h3>
              <p style={{ fontFamily: 'var(--font-mono)', fontSize: 14, lineHeight: 1.65, color: 'var(--fg-2)', margin: 0 }}>
                First Class Honours with Industrial Placement
              </p>
            </div>
          </div>

          {/* Client logos */}
          <div style={{ marginTop: 64, padding: '32px 36px', background: 'var(--bg-soft)', border: '1px solid var(--border-2)', borderRadius: 4 }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 32px' }}>
              // Client engagements
            </p>
            <div className="client-groups">
              {CLIENT_GROUPS.map((group, gi) => {
                const offset = CLIENT_GROUPS.slice(0, gi).reduce((n, g) => n + g.clients.length, 0)
                return (
                  <div key={group.label} className="client-group">
                    <p className="client-group-label">{group.label}</p>
                    <ul className="client-logo-grid">
                      {group.clients.map((c, ci) => (
                        <ClientLogo key={c.name} name={c.name} src={c.src} index={offset + ci} />
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>

          <div style={{ marginTop: 48, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
            <button className="btn btn-primary" onClick={() => navigate('/work')}>
              View case studies <span aria-hidden="true">→</span>
            </button>
            <button className="btn btn-secondary" onClick={() => navigate('/contact')}>
              Get in touch
            </button>
          </div>
        </section>
      </div>
    </>
  )
}
