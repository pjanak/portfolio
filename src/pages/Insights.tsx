import { Helmet } from 'react-helmet-async'
import { ArrowRight } from 'lucide-react'
import { insights, formatDate } from '@/data/insights'

const categories = Array.from(new Set(insights.map((i) => i.category)))

export default function Insights() {
  return (
    <>
      <Helmet>
        <title>Insights — AD Architects</title>
        <meta
          name="description"
          content="News, culture and practice updates from AD Architects."
        />
      </Helmet>

      {/* Page header */}
      <section className="section-pad bg-surface-alt border-b border-border">
        <div className="container-site">
          <p className="label-upper mb-4">From the practice</p>
          <h1 className="heading-xl text-balance max-w-2xl mb-6">Insights.</h1>
          <p className="body-lg max-w-xl">
            News, culture, and thinking from the team at AD Architects.
          </p>
        </div>
      </section>

      {/* Category filter — static display, would be interactive in production */}
      <nav aria-label="Filter by category" className="bg-surface border-b border-border">
        <div className="container-site">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-none">
            <span className="label-upper text-ink-muted mr-3 shrink-0">Category</span>
            <button className="shrink-0 px-4 py-2 text-sm font-medium rounded bg-brand-blue text-ink whitespace-nowrap">
              All
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                className="shrink-0 px-4 py-2 text-sm font-medium rounded text-ink-body hover:text-ink hover:bg-brand-blue-light transition-colors whitespace-nowrap"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Posts grid */}
      <section aria-label="Insight posts" className="section-pad">
        <div className="container-site">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insights.map((post) => (
              <article
                key={post.id}
                className="flex flex-col border border-border rounded-sm p-6 hover:shadow-sm transition-shadow group cursor-pointer"
                tabIndex={0}
                aria-label={post.title}
              >
                <div className="flex items-center justify-between gap-3 mb-4">
                  <span className="label-upper text-ink font-semibold">{post.category}</span>
                  <time
                    dateTime={post.date}
                    className="text-xs text-ink-subtle"
                  >
                    {formatDate(post.date)}
                  </time>
                </div>
                <h2 className="text-base font-semibold text-ink mb-3 group-hover:underline decoration-brand-blue underline-offset-2 leading-snug flex-1">
                  {post.title}
                </h2>
                <p className="text-sm text-ink-body leading-relaxed line-clamp-3 mb-4">
                  {post.summary}
                </p>
                <div className="mt-auto flex items-center gap-1 text-sm font-semibold text-ink opacity-0 group-hover:opacity-100 transition-opacity">
                  Read more <ArrowRight size={13} />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
