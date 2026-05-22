import type { InsightPost } from '@/types'

export const insights: InsightPost[] = [
  {
    id: '1',
    slug: 'iso-45001-certification',
    title: 'AD Architects Achieves ISO 45001 Certification',
    date: '2026-03-18',
    category: 'News',
    summary:
      'We are proud to announce the successful completion of ISO 45001 occupational health and safety certification — reflecting our commitment to the wellbeing of everyone who works with us.',
  },
  {
    id: '2',
    slug: 'international-womens-day-2026',
    title: 'Celebrating International Women\'s Day 2026',
    date: '2026-03-09',
    category: 'Culture',
    summary:
      'This year we participated in the "Give To Gain" campaign, celebrating the contribution of women across the practice and in the wider built environment.',
  },
  {
    id: '3',
    slug: 'national-apprenticeship-week-2026',
    title: 'Celebrating National Apprenticeship Week 2026',
    date: '2026-02-16',
    category: 'Culture',
    summary:
      'Apprenticeships are central to the future of the architecture profession. We reflect on the value our apprentices bring to the practice and to the sector.',
  },
  {
    id: '4',
    slug: 'knowledge-sharing-2026',
    title: 'A 2026 Commitment to Knowledge Sharing',
    date: '2026-02-13',
    category: 'Practice',
    summary:
      'We are introducing monthly staff presentations alongside an enhanced external CPD programme, ensuring our team stays at the forefront of design thinking and technical practice.',
  },
  {
    id: '5',
    slug: 'ad-leadership',
    title: 'New Leadership at AD Architects',
    date: '2025-04-28',
    category: 'News',
    summary:
      'We are delighted to introduce John Wiggett and Ashley Hughes as the newly appointed leadership team, bringing fresh energy and deep sector experience to guide the practice forward.',
  },
  {
    id: '6',
    slug: 'jim-haigh-retirement',
    title: 'Jim Haigh\'s End of an Era Lunch',
    date: '2025-04-10',
    category: 'Culture',
    summary:
      'After more than two decades as managing director, Jim Haigh has retired. We celebrated his extraordinary contribution to AD Architects and the lives of all who worked with him.',
  },
]

export const formatDate = (iso: string) => {
  return new Date(iso).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })
}
