export interface CaseFigure {
  value: string
  label: string
}

export interface CaseSection {
  heading: string
  body: string
}

export interface Case {
  id: string
  company: string
  role: string
  dates: string
  location: string
  sector: string
  tags: string[]
  headline: string
  blurb: string
  figures: CaseFigure[]
  sections: CaseSection[]
  quote: string | null
}

export const CASES: Case[] = [
  {
    id: 'eon',
    company: 'E.ON Next Energy',
    role: 'Agile Delivery Lead',
    dates: '2026 — Present',
    location: 'Remote, UK',
    sector: 'Energy',
    tags: ['Energy', 'CX', 'AI', 'Mobile'],
    headline: 'Native app growth to 5m+ users, a new loyalty programme, and AI-powered customer engagement.',
    blurb: 'Leading delivery across customer retention and digital self-serve — native app migration, loyalty proposition, and go-to-market capability building.',
    figures: [
      { value: '5m+',    label: 'Active app users' },
      { value: '3',      label: 'Squads led' },
      { value: 'AI',     label: 'Loyalty proposition' },
      { value: '2026',   label: 'Started' }
    ],
    sections: [
      { heading: 'The brief', body: 'Lead delivery across three squads focused on customer retention and digital self-serve — including the native app migration targeting growth to 5m+ active users. Operate embedded within the go-to-market function, bridging internal and external product and technology teams.' },
      { heading: 'What I\'m doing', body: 'Taking programmes from inception to live across the customer retention domain — maintaining pace and accountability across suppliers and individual contributors. Leading early-stage development of a loyalty programme that combines energy demand-shift incentives with reward schemes, with options being explored to leverage AI for customer engagement and proposition validation.' },
      { heading: 'Building capability', body: 'Alongside delivery, actively building team agile maturity across the domain — improving how squads plan, prioritise, and deliver. Focus on sustainable cadence, commercial accountability, and cross-team dependency management.' }
    ],
    quote: null
  },
  {
    id: 'vmo2',
    company: 'Virgin Media O2',
    role: 'Senior Delivery Lead — via Open Reply',
    dates: '2023 — 2025',
    location: 'London, UK',
    sector: 'Telecoms',
    tags: ['Telecoms', 'SAFe', 'Regulatory', 'Recovery'],
    headline: 'Recovering a stalled transformation — £8m portfolio, zero customer disruption, 5% conversion uplift.',
    blurb: 'Brought in to stabilise a complex multi-supplier programme, negotiate the MSA, and deliver critical regulatory commitments on time.',
    figures: [
      { value: '£8m',   label: 'Annual portfolio' },
      { value: '5%',    label: 'Conversion uplift' },
      { value: '3',     label: 'Regulatory programmes' },
      { value: '0',     label: 'Customer disruption' }
    ],
    sections: [
      { heading: 'The brief', body: 'Brought in to recover a stalled transformation programme at VMO2 — accountable for an £8m annual portfolio while simultaneously delivering critical regulatory commitments (One Touch Switch, Ofcom Price Rise), negotiating a master services agreement, and restoring stakeholder confidence across a highly complex, multi-supplier environment.' },
      { heading: 'How we ran it', body: 'Stabilised ways of working across UK, near-shore and off-shore teams, then instituted SAFe across five digital squads — raising sprint throughput by 15% and creating a predictable programme cadence. Drove a 5% conversion uplift and got new channel propositions to market across the digital acquisition roadmap.' },
      { heading: 'Outcome', body: 'The dual-platform migration landed with zero customer disruption. All three regulatory programmes were delivered to their statutory dates. Stakeholder confidence in the delivery operation measurably increased, and the MSA was successfully negotiated to provide a stable commercial foundation.' }
    ],
    quote: '"Brought in to recover a stalled programme — left with a clean cutover, three regulatory commitments met, and a restored commercial relationship."'
  },
  {
    id: 'river-island',
    company: 'River Island',
    role: 'Principal Delivery Manager → Head of Transformation & Delivery Practice',
    dates: '2019 — 2023',
    location: 'London, UK',
    sector: 'Retail / eCommerce',
    tags: ['Retail', 'eCommerce', 'Transformation', 'Data'],
    headline: 'Building a £32m delivery practice — SAFe at scale, data foundations, and £163m in eCommerce revenue protected.',
    blurb: '330+ FTEs transitioned to Scaled Agile, proprietary data pipelines built, and a promotions engine deployed across every customer touchpoint.',
    figures: [
      { value: '£32m',  label: 'IT change portfolio' },
      { value: '330+',  label: 'FTEs to SAFe' },
      { value: '£163m', label: 'eCommerce revenue protected' },
      { value: '10%',   label: 'Team attrition ↓' }
    ],
    sections: [
      { heading: 'The brief', body: 'Sit on the Technology Leadership Team with direct CapEx sign-off authority. Govern a £32m strategic IT change portfolio aligned to C-level strategy — and rebuild delivery practices from the ground up to match the pace the business needed.' },
      { heading: 'How we ran it', body: 'Transitioned 330+ people to Scaled Agile with 100% adoption and a 15% performance uplift. Introduced automated governance tooling saving 200+ hours per month, directly managed 18 FTE across the delivery function, and built capability and succession across the practice. Established proprietary data pipelines — single view of customer, inventory, and transactions — laying the foundation for personalisation and customer intelligence at scale.' },
      { heading: 'Outcome', body: 'Delivered a promotions engine spanning all online and offline customer touchpoints — a foundational capability that unified promotional activity and set the groundwork for a future loyalty proposition. During Covid-19, the prioritised delivery model protected an estimated £163m in eCommerce revenue. Team attrition fell 10%.' }
    ],
    quote: '"The transformation made delivery visible — to the board, to the teams, and to the customers we were trying to serve."'
  },
  {
    id: 'reply-ecom',
    company: 'Reply Ltd',
    role: 'Consultant → Senior → Principal eCommerce Consultant',
    dates: '2011 — 2019',
    location: 'London, UK',
    sector: 'Retail / Telecoms / Media',
    tags: ['eCommerce', 'Mobile', 'Loyalty', 'Advisory'],
    headline: 'Eight years from developer to principal — BBC Bitesize, a CEO CVA advisory, and enterprise loyalty at scale.',
    blurb: 'Joined as a software developer, progressed to full delivery ownership across major UK brands — VMO2, BBC, Tesco, John Lewis, Monsoon Accessorize, Sky, Vodafone.',
    figures: [
      { value: '5–10%', label: 'CRO uplift' },
      { value: '19%',   label: 'Downtime ↓' },
      { value: '12%',   label: 'CSAT ↑ (omnichannel)' },
      { value: '6%',    label: 'Marketing ROI ↑' }
    ],
    sections: [
      { heading: 'The journey', body: 'Joined as a software developer and progressed through technical lead to full design and delivery responsibility for scalable, customer-facing digital solutions across major UK and international consumer brands — spanning web, mobile, kiosk, and ePOS. Notable delivery includes the BBC Bitesize app, which achieved record downloads.' },
      { heading: 'High-stakes advisory', body: 'Advised the CEO of Monsoon Accessorize during their CVA — identifying tactical interventions to stabilise eCommerce performance and given full authority to execute. A high-stakes engagement requiring commercial judgement, speed, and stakeholder trust. Delivered omnichannel loyalty capability for Monsoon Accessorize and personalisation platforms across multiple brands.' },
      { heading: 'Outcomes', body: 'Conversion-rate optimisation lifted KPIs 5–10% across multiple brands. Legacy eCommerce stabilisation reduced downtime by 19%. Loyalty and personalisation programmes improved marketing ROI by 6% and customer satisfaction by 12%. Acted as a trusted senior adviser to clients, translating business ambition into actionable roadmaps and scalable technical solutions.' }
    ],
    quote: null
  }
]
