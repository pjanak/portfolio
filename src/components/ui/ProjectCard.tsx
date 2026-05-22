import { ArrowRight } from 'lucide-react'
import type { Project } from '@/types'

interface Props {
  project: Project
  size?: 'default' | 'large'
}

const sectorLabel: Record<string, string> = {
  healthcare: 'Healthcare',
  education: 'Education',
  residential: 'Residential',
  community: 'Community',
}

export default function ProjectCard({ project, size = 'default' }: Props) {
  const imageHeight = size === 'large' ? 'h-72 lg:h-96' : 'h-56 lg:h-64'

  return (
    <article className="group flex flex-col bg-surface border border-border rounded-sm overflow-hidden hover:shadow-md transition-shadow duration-200">
      <div className={`${imageHeight} relative overflow-hidden bg-surface-alt`}>
        <img
          src={project.imageSrc}
          alt={project.imageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
        <span className="absolute top-4 left-4 text-2xs font-semibold uppercase tracking-widest bg-white/90 text-ink px-3 py-1 rounded-full">
          {sectorLabel[project.sector]}
        </span>
      </div>

      <div className="flex flex-col flex-1 p-6 lg:p-8">
        <div className="mb-1">
          <p className="text-xs text-ink-muted font-medium">{project.client}</p>
          <p className="text-xs text-ink-subtle">{project.location}</p>
        </div>

        <h3 className="text-lg font-semibold text-ink mt-2 mb-3 group-hover:text-ink transition-colors leading-snug">
          {project.title}
        </h3>

        <p className="text-sm leading-relaxed text-ink-muted line-clamp-3 flex-1">
          {project.summary}
        </p>

        {project.outcome && (
          <p className="mt-4 text-xs font-semibold text-ink border-t border-border pt-4 border-l-2 border-l-brand-blue pl-3">
            {project.outcome}
          </p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-2xs font-medium text-ink-muted bg-surface-alt px-2 py-1 rounded border border-border"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-5 flex items-center gap-1 text-sm font-semibold text-ink opacity-0 group-hover:opacity-100 transition-opacity">
          View project <ArrowRight size={14} />
        </div>
      </div>
    </article>
  )
}
