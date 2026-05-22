import { useParams, Link } from 'react-router-dom'
import { Helmet } from 'react-helmet-async'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import ProjectCard from '@/components/ui/ProjectCard'
import Button from '@/components/ui/Button'
import { getProjectsBySector } from '@/data/projects'
import { sectorMeta } from '@/data/navigation'
import NotFound from './NotFound'

const validSectors = ['healthcare', 'education', 'residential', 'community']

export default function WorkSector() {
  const { sector = '' } = useParams()

  if (!validSectors.includes(sector)) return <NotFound />

  const projects = getProjectsBySector(sector)
  const meta = sectorMeta[sector]

  return (
    <>
      <Helmet>
        <title>{meta.label} Architecture — AD Architects</title>
        <meta name="description" content={meta.description} />
      </Helmet>

      {/* Sector hero */}
      <section
        className={`${meta.color} border-b border-border section-pad`}
        aria-label={`${meta.label} sector overview`}
      >
        <div className="container-site">
          <Link
            to="/work"
            className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-ink mb-8 transition-colors"
            aria-label="Back to all work"
          >
            <ArrowLeft size={14} /> All work
          </Link>

          <p className="label-upper mb-4">{meta.label}</p>
          <h1 className="heading-xl text-balance max-w-3xl mb-6">{meta.headline}</h1>
          <p className="body-lg max-w-2xl">{meta.description}</p>
        </div>
      </section>

      {/* Sibling sector nav */}
      <nav
        aria-label="Other sectors"
        className="bg-surface border-b border-border sticky top-[73px] z-30"
      >
        <div className="container-site">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-none">
            <span className="label-upper text-ink-muted mr-3 shrink-0">Also</span>
            {Object.entries(sectorMeta)
              .filter(([key]) => key !== sector)
              .map(([key, m]) => (
                <Link
                  key={key}
                  to={`/work/${key}`}
                  className="shrink-0 px-4 py-2 text-sm font-medium rounded text-ink-body hover:text-ink hover:bg-brand-blue-light transition-colors whitespace-nowrap"
                >
                  {m.label}
                </Link>
              ))}
          </div>
        </div>
      </nav>

      {/* Projects grid */}
      <section aria-label={`${meta.label} projects`} className="section-pad">
        <div className="container-site">
          {projects.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project) => (
                <Link key={project.id} to={`/projects/${project.id}`} className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-blue rounded-sm" aria-label={`View project: ${project.title}`}>
                  <ProjectCard project={project} />
                </Link>
              ))}
            </div>
          ) : (
            <p className="body-lg text-ink-muted">
              No projects listed in this sector yet. Please{' '}
              <Link to="/consult" className="text-ink font-semibold underline decoration-brand-blue underline-offset-2">
                get in touch
              </Link>{' '}
              to discuss your requirements.
            </p>
          )}
        </div>
      </section>

      {/* CTA */}
      <section aria-label="Project enquiry" className="section-pad bg-surface-alt border-t border-border">
        <div className="container-site">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div>
              <p className="label-upper mb-2">Working on a {meta.label.toLowerCase()} project?</p>
              <p className="body-lg max-w-xl">
                We offer a free initial consultation — an honest conversation about your project with
                no commitment required.
              </p>
            </div>
            <Button href="/consult" size="lg" className="shrink-0">
              Let's talk <ArrowRight size={16} />
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
