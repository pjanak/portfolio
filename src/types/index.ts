export type Sector = 'healthcare' | 'education' | 'residential' | 'community'

export interface ProjectMeta {
  client: string
  location: string
  sector: string
  completion?: string
  value?: string
  area?: string
  services?: string
  awards?: string
  breeam?: string
}

export interface Project {
  id: string
  title: string
  client: string
  location: string
  sector: Sector
  tags: string[]
  summary: string
  body?: string
  outcome?: string
  featured: boolean
  imageAlt: string
  imageSrc: string
  imagePlaceholder: string
  gallery?: string[]
  meta?: ProjectMeta
}

export interface Service {
  id: string
  title: string
  slug: string
  summary: string
  body: string
  icon: string
}

export interface InsightPost {
  id: string
  title: string
  date: string
  category: string
  summary: string
  slug: string
}

export interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string }[]
}
