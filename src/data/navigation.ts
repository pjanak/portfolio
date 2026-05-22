import type { NavItem } from '@/types'

export const navItems: NavItem[] = [
  {
    label: 'Work',
    href: '/work',
    children: [
      { label: 'Healthcare', href: '/work/healthcare' },
      { label: 'Education', href: '/work/education' },
      { label: 'Residential', href: '/work/residential' },
      { label: 'Community', href: '/work/community' },
    ],
  },
  {
    label: 'Services',
    href: '/services',
  },
  {
    label: 'About',
    href: '/about',
  },
  {
    label: 'Insights',
    href: '/insights',
  },
]

export const sectorMeta: Record<
  string,
  { label: string; headline: string; description: string; color: string }
> = {
  healthcare: {
    label: 'Healthcare',
    headline: 'Architecture that heals.',
    description:
      'Over decades of NHS and private healthcare work, we have developed the sector knowledge to deliver complex clinical environments on time and within budget — from operating theatres to research centres.',
    color: 'bg-teal-50',
  },
  education: {
    label: 'Education',
    headline: 'Spaces that inspire learning.',
    description:
      'From nurseries to universities, SEN schools to further education colleges — we design learning environments that serve students, staff and the communities around them.',
    color: 'bg-amber-50',
  },
  residential: {
    label: 'Residential',
    headline: 'Homes built to last.',
    description:
      'We design homes and housing developments with the same rigour we bring to our public-sector work — durable, beautifully considered, and responsive to place.',
    color: 'bg-rose-50',
  },
  community: {
    label: 'Community',
    headline: 'Buildings that bring people together.',
    description:
      'Sports centres, care homes, community hubs — places that serve entire neighbourhoods. We design them with the people who will use them, not just the clients who commission them.',
    color: 'bg-purple-50',
  },
}
