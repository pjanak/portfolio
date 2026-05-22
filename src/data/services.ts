import type { Service } from '@/types'

export const services: Service[] = [
  {
    id: 'architecture',
    slug: 'architecture',
    title: 'Architecture & Design',
    icon: 'building',
    summary:
      'Full architectural services from feasibility through to completion, across all RIBA stages. We act as your trusted adviser — not just your designer.',
    body: `We deliver architecture across the full project lifecycle. From initial feasibility and site appraisal through planning, detailed design, procurement and construction to post-completion review — we provide a single, coherent voice throughout.

Our directors are hands-on at every stage. That means you speak to the person who made the design decision, not a project manager relaying messages. We believe that continuity of leadership produces better buildings.

We work across healthcare, education, residential and community sectors, and have the sector depth to understand the specific regulatory, technical and procurement environments each one requires.`,
  },
  {
    id: 'bim',
    slug: 'bim-digital-delivery',
    title: 'BIM & Digital Delivery',
    icon: 'layers',
    summary:
      'Digital tools that reduce cost overruns, improve coordination and keep your project on programme — delivered at the level of sophistication your project demands.',
    body: `Building Information Modelling (BIM) is not a technology trend — it is the way we manage project information to protect your investment and reduce risk.

We deliver projects at BIM Level 2, producing coordinated 3D models that allow structural, mechanical and electrical engineers to resolve clashes before they become costly on-site problems. Clients benefit from clearer cost forecasting, fewer change orders and more predictable programmes.

Our BIM capability is particularly valued by NHS clients and public-sector bodies who require compliance with government BIM mandates. We can also advise clients who are new to BIM-enabled procurement on what to ask for and what to expect.`,
  },
  {
    id: 'sustainability',
    slug: 'sustainability',
    title: 'Sustainability Consulting',
    icon: 'leaf',
    summary:
      'Sustainable design that lasts — rooted in durability and adaptability, not fashion. ISO 14001:2015 certified, with a track record of BREEAM Outstanding and Excellent ratings.',
    body: `We don't add solar panels to a poorly conceived building and call it green. Our approach to sustainability starts with how a building is conceived — its orientation, its structure, its adaptability over time.

The science block we designed for Highbury Fields School in 1967 is still in active daily use. That longevity is sustainability: buildings that don't need to be demolished and replaced.

For projects that require formal environmental assessment, we have achieved BREEAM 'Outstanding' and 'Excellent' ratings across healthcare and education schemes. We are ISO 14001:2015 certified (UKAS accredited) and track our own carbon consumption through GreenFeet, with publicly available performance data.`,
  },
]
