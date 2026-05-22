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
      'Leading delivery across 3 squads on customer retention and digital self-serve — overseeing the native app migration and growth to 5m+ active users alongside broader strategic initiatives.',
      'Bridging internal and external product and technology teams to take programmes from inception to live, maintaining pace and accountability across suppliers and individual contributors.',
      'Leading early-stage development of a loyalty programme combining energy demand-shift incentives with reward schemes — with options being explored to leverage AI for customer engagement and proposition validation.',
      'Embedded within the go-to-market function, with a parallel focus on building team agile maturity — improving how squads plan, prioritise, and deliver.',
    ],
  },
  {
    dates: 'May 2023 — Nov 2025',
    company: 'Reply Ltd (Open Reply UK)',
    location: 'London, UK',
    title: 'Senior Manager — Business Unit Manager & Delivery Leader',
    bullets: [
      'Built and led the digital experience practice at Open Reply — directly managing 14 FTE, accountable for a £4m+ CapEx budget, and positioning the practice as a market leader in AI-native delivery and AI-powered customer experiences.',
      'Forged strategic partnerships with Google and AWS to build and deliver AI solutions for clients — ahead of peers in the market and underpinning a differentiated proposition around next-generation digital experiences.',
      'Led the practice as the first UK consultancy to partner with Apple on Vision Pro, developing business-focused spatial computing applications.',
      'Delivery owner of an AI initiative resulting in hyper-realistic, adaptive digital humans deployed in a live customer-facing environment — improving end-user engagement, driving service upsell, and measurably reducing customer complaints.',
      'Brought in to recover a stalled transformation at VMO2 — accountable for an £8m annual portfolio, drove 5% conversion uplift, negotiated the MSA, and delivered a zero-disruption dual-platform migration alongside three regulatory programmes.',
    ],
  },
  {
    dates: 'Jul 2019 — Mar 2023',
    company: 'River Island Clothing Ltd',
    location: 'London, UK',
    title: 'Principal Delivery Manager → Head of Transformation & Delivery Practice',
    bullets: [
      'Accountable for a £32m IT change portfolio on the Technology Leadership Team — holding direct CapEx sign-off authority and balancing investment priorities across web, mobile, and in-store digital programmes at C-suite level.',
      'Directly managed 18 FTE across the delivery function, building capability, closing skills gaps, and growing the practice in line with business demand.',
      'Rebuilt IT delivery practices from the ground up: transitioned 330+ people to Scaled Agile (100% adoption, 15% performance uplift), introduced automated governance tooling saving 200+ hours per month, and protected £163m in eCommerce revenue through rapid Covid-19 response.',
      'Established proprietary data pipelines — single view of customer, inventory, and transactions — laying the foundation for personalisation and customer intelligence at scale.',
      'Delivered a promotions engine spanning online and offline channels across all customer touchpoints — a foundational capability that unified promotional activity and set the groundwork for a future loyalty proposition.',
      'Introduced event-based architecture and a structured capability programme — reducing team attrition by 10%.',
    ],
  },
  {
    dates: 'Nov 2011 — Jul 2019',
    company: 'Reply Ltd',
    location: 'London, UK',
    title: 'Consultant → Senior Consultant → Principal eCommerce Consultant',
    bullets: [
      'Joined as a software developer, progressed through technical lead to full design and delivery responsibility for scalable, customer-facing digital solutions across major UK and international consumer brands — spanning web, mobile, kiosk, and ePOS. Notable delivery includes the BBC Bitesize app, which achieved record downloads.',
      'Advised the CEO of Monsoon Accessorize during their CVA — identifying tactical interventions to stabilise eCommerce performance and given full authority to execute; a high-stakes engagement requiring commercial judgement, speed, and stakeholder trust.',
      'Delivered omnichannel loyalty capability for Monsoon Accessorize and personalisation platforms across multiple brands — outcomes included 12% improvement in CSAT, 6% uplift in marketing ROI, 19% reduction in platform downtime, and 5–10% conversion gains.',
      'Acted as a trusted senior adviser to clients — forging long-term partnership models, translating business ambition into actionable roadmaps, and managing cross-functional delivery teams across CX, technical, and business workstreams.',
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

          {/* Client list */}
          <div style={{ marginTop: 64, padding: '28px 32px', background: 'var(--bg-soft)', border: '1px solid var(--border-2)', borderRadius: 4 }}>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, fontWeight: 600, color: 'var(--accent)', letterSpacing: '0.1em', textTransform: 'uppercase', margin: '0 0 12px' }}>
              // Client engagements
            </p>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 14, lineHeight: 1.7, color: 'var(--fg-2)', margin: 0 }}>
              Virgin Media O2 · BBC · Tesco · John Lewis · Sky · The Body Shop · Vodafone · Monsoon Accessorize · Berry Bros. &amp; Rudd · British American Tobacco · Costco Wholesale
            </p>
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
