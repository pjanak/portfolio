import { Helmet } from 'react-helmet-async'
import { Award, Users, MapPin, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import SectionHeader from '@/components/ui/SectionHeader'
import Badge from '@/components/ui/Badge'

const accreditations = [
  'RIBA Chartered Practice',
  'ISO 14001:2015 (UKAS Accredited)',
  'ISO 45001:2018',
  'Constructionline',
  'RIBA Mentoring',
  'P23 Framework',
  'Part of Sweco',
]

const leadership = [
  {
    name: 'John Wiggett',
    role: 'Director',
    bio: 'John brings deep expertise in healthcare and education architecture, with a track record of delivering complex projects for NHS trusts and higher education institutions across England.',
  },
  {
    name: 'Ashley Hughes',
    role: 'Director',
    bio: 'Ashley leads on design quality and client relationships, ensuring that every project benefits from hands-on director involvement at every stage — from first brief to post-completion review.',
  },
]

const values = [
  {
    icon: Users,
    title: 'Hands-on leadership',
    body: 'Directors are involved in every project. You speak to the person who made the design decision — not a project manager relaying messages.',
  },
  {
    icon: Award,
    title: 'Proven track record',
    body: 'Over 50 years delivering buildings across healthcare, education, residential and community sectors — with BREEAM Outstanding and Excellent ratings to show for it.',
  },
  {
    icon: MapPin,
    title: 'Two offices, one practice',
    body: 'Hertford and London offices mean we can serve clients across the South East and beyond, with the agility of a specialist practice.',
  },
]

export default function About() {
  return (
    <>
      <Helmet>
        <title>About — AD Architects</title>
        <meta
          name="description"
          content="AD Architects — a RIBA chartered practice with over 50 years of experience. Part of Sweco. Offices in Hertford and London."
        />
      </Helmet>

      {/* Page header */}
      <section className="section-pad bg-surface-alt border-b border-border">
        <div className="container-site">
          <p className="label-upper mb-4">Who we are</p>
          <h1 className="heading-xl text-balance max-w-3xl mb-6">
            A practice built on trust, delivered through expertise.
          </h1>
          <p className="body-lg max-w-2xl">
            AD Architects is a RIBA chartered practice with over 50 years of experience designing
            buildings that work — across NHS trusts, universities, schools, housing associations and
            local authorities. We are part of Sweco, one of Europe's leading architecture and
            engineering consultancies.
          </p>
        </div>
      </section>

      {/* Core values */}
      <section aria-labelledby="values-heading" className="section-pad">
        <div className="container-site">
          <SectionHeader
            label="Why clients choose us"
            heading="We don't just design buildings. We advise on them."
          />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map(({ icon: Icon, title, body }) => (
              <div key={title} className="flex flex-col gap-4">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded bg-brand-blue-light">
                  <Icon size={18} className="text-brand-blue" />
                </div>
                <h3 className="text-lg font-semibold text-ink">{title}</h3>
                <p className="text-sm leading-relaxed text-ink-body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section aria-labelledby="leadership-heading" className="section-pad bg-surface-alt">
        <div className="container-site">
          <SectionHeader
            label="Leadership"
            heading="The people leading the practice."
            body="Our directors set the culture, the standards and the expectations — and stay involved in every project."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
            {leadership.map((person) => (
              <div key={person.name} className="bg-surface border border-border rounded-sm p-8">
                {/* Avatar placeholder */}
                <div
                  className="w-16 h-16 rounded-full bg-brand-blue-light flex items-center justify-center mb-5"
                  aria-hidden="true"
                >
                  <span className="text-ink font-semibold text-lg">
                    {person.name
                      .split(' ')
                      .map((n) => n[0])
                      .join('')}
                  </span>
                </div>
                <p className="font-semibold text-ink text-lg">{person.name}</p>
                <p className="text-sm font-semibold text-ink-muted mb-4">{person.role}</p>
                <p className="text-sm leading-relaxed text-ink-body">{person.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section aria-labelledby="accreditations-heading" className="section-pad">
        <div className="container-site">
          <SectionHeader
            label="Accreditations"
            heading="Credentials that matter to your project."
            body="We maintain the accreditations and framework memberships that public-sector clients require — so you don't have to ask."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {accreditations.map((a) => (
              <Badge key={a} variant="blue">
                {a}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Careers */}
      <section
        id="careers"
        aria-labelledby="careers-heading"
        className="section-pad bg-surface-alt border-t border-border"
      >
        <div className="container-site">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <SectionHeader
              label="Careers"
              heading="Join a practice that takes design seriously."
              body="We are not always actively recruiting, but we welcome speculative applications from architects and architectural technologists who share our values. No agencies, please."
            />
            <div className="space-y-4">
              <p className="body-md">
                To send a speculative application, email your CV and portfolio to{' '}
                <a
                  href="mailto:info@adarchitects.co.uk"
                  className="text-ink font-semibold underline decoration-brand-blue underline-offset-2"
                >
                  info@adarchitects.co.uk
                </a>{' '}
                marked for the attention of the HR Team.
              </p>
              <p className="text-sm text-ink-muted">No agencies please.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section aria-label="Contact" className="bg-brand-blue">
        <div className="container-site py-16 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <p className="label-upper text-ink/60 mb-2">Ready to start?</p>
            <p className="text-2xl font-light text-ink">Tell us about your project.</p>
          </div>
          <Button
            href="/consult"
            size="lg"
            className="bg-ink text-white hover:bg-ink/90 shrink-0"
          >
            Free Consultation <ArrowRight size={16} />
          </Button>
        </div>
      </section>
    </>
  )
}
