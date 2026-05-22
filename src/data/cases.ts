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
    headline: 'Native app growth to 5m+ users, and an AI-enabled loyalty programme.',
    blurb: '3 squads, customer retention and digital self-serve, embedded in go-to-market.',
    figures: [
      { value: '5m+',  label: 'Active app users' },
      { value: '3',    label: 'Squads led' },
      { value: 'AI',   label: 'Loyalty proposition' },
    ],
    sections: [
      { heading: 'The brief', body: 'Lead delivery across customer retention and digital self-serve — including the native app migration to 5m+ active users, bridging internal and external teams from inception to live.' },
      { heading: 'AI loyalty', body: 'Leading early-stage development of a loyalty programme combining energy demand-shift incentives with reward schemes, exploring AI for customer engagement and proposition validation.' },
    ],
    quote: null,
  },
  {
    id: 'vmo2',
    company: 'Virgin Media O2',
    role: 'Senior Delivery Lead — via Open Reply',
    dates: '2023 — 2025',
    location: 'London, UK',
    sector: 'Telecoms',
    tags: ['Telecoms', 'SAFe', 'Regulatory', 'Recovery'],
    headline: 'Recovering a stalled transformation — £8m portfolio, zero disruption, 5% conversion uplift.',
    blurb: 'Stabilised a complex multi-supplier programme, negotiated the MSA, delivered three regulatory commitments on time.',
    figures: [
      { value: '£8m', label: 'Annual portfolio' },
      { value: '5%',  label: 'Conversion uplift' },
      { value: '3',   label: 'Regulatory programmes' },
    ],
    sections: [
      { heading: 'The brief', body: 'Brought in to recover a stalled transformation — accountable for an £8m annual portfolio while delivering critical regulatory commitments, negotiating the MSA, and restoring stakeholder confidence.' },
      { heading: 'Outcome', body: 'Dual-platform migration landed with zero customer disruption. All three regulatory programmes (One Touch Switch, Ofcom Price Rise) delivered to statutory dates. 5% conversion uplift across the digital acquisition roadmap.' },
    ],
    quote: '"Brought in to recover a stalled programme — left with a clean cutover, three regulatory commitments met, and a restored commercial relationship."',
  },
  {
    id: 'river-island',
    company: 'River Island',
    role: 'Principal Delivery Manager → Head of Transformation & Delivery Practice',
    dates: '2019 — 2023',
    location: 'London, UK',
    sector: 'Retail / eCommerce',
    tags: ['Retail', 'eCommerce', 'Transformation', 'Data'],
    headline: '£32m portfolio, SAFe at scale, and £163m in eCommerce revenue protected.',
    blurb: 'MACH-based architecture shift, B2B transformation, 330+ FTEs to Scaled Agile, 100% value traceability linked to strategy.',
    figures: [
      { value: '£32m',  label: 'IT change portfolio' },
      { value: '330+',  label: 'FTEs to SAFe' },
      { value: '£163m', label: 'Revenue protected' },
    ],
    sections: [
      { heading: 'The brief', body: 'Sit on the Technology Leadership Team with direct CapEx sign-off authority — govern a £32m strategic IT portfolio and rebuild delivery practices from the ground up.' },
      { heading: 'Outcome', body: 'Transitioned 330+ people to Scaled Agile with 100% adoption. Established data pipelines and a promotions engine across all touchpoints. Protected £163m in eCommerce revenue through Covid-19 response. Team attrition fell 10%.' },
    ],
    quote: '"The transformation made delivery visible — to the board, to the teams, and to the customers we were trying to serve."',
  },
  {
    id: 'reply-ecom',
    company: 'Reply Ltd',
    role: 'Consultant → Senior → Principal eCommerce Consultant',
    dates: '2011 — 2019',
    location: 'London, UK',
    sector: 'Retail / Telecoms / Media',
    tags: ['eCommerce', 'Mobile', 'Loyalty', 'Advisory'],
    headline: 'Eight years, developer to principal — BBC Bitesize, a CEO CVA advisory, loyalty at scale.',
    blurb: 'VMO2, BBC, Tesco, John Lewis, Berry Bros. & Rudd, Monsoon Accessorize, Sky, Vodafone.',
    figures: [
      { value: '£6m',   label: 'Annual turnover' },
      { value: '20%',   label: 'EBITA' },
      { value: '5–10%', label: 'CRO uplift' },
    ],
    sections: [
      { heading: 'The journey', body: 'Joined as a software developer, progressed to full delivery ownership across major UK and international brands — web, mobile, kiosk, ePOS. Notable delivery: BBC Bitesize app (record downloads), CEO advisory for Monsoon Accessorize CVA.' },
      { heading: 'Outcomes', body: '5–10% CRO uplift across multiple brands. 19% reduction in platform downtime. 12% CSAT improvement. 6% marketing ROI uplift. Loyalty and personalisation platforms deployed at scale.' },
    ],
    quote: null,
  },
]
