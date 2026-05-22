import { Helmet } from 'react-helmet-async'
import { Building2, Layers, Leaf, ArrowRight } from 'lucide-react'
import Button from '@/components/ui/Button'
import SectionHeader from '@/components/ui/SectionHeader'
import { services } from '@/data/services'

const iconMap: Record<string, React.ElementType> = {
  building: Building2,
  layers: Layers,
  leaf: Leaf,
}

export default function Services() {
  return (
    <>
      <Helmet>
        <title>Services — AD Architects</title>
        <meta
          name="description"
          content="Architecture & Design, BIM & Digital Delivery, and Sustainability Consulting — delivered across healthcare, education, residential and community sectors."
        />
      </Helmet>

      {/* Page header */}
      <section className="section-pad bg-surface-alt border-b border-border">
        <div className="container-site">
          <p className="label-upper mb-4">What we do</p>
          <h1 className="heading-xl text-balance max-w-3xl mb-6">
            Architecture delivered with care, from concept to completion.
          </h1>
          <p className="body-lg max-w-2xl">
            We provide a full architectural service — not just drawings. From the earliest
            feasibility conversations through to post-completion, we're your trusted adviser, not
            just your designer.
          </p>
        </div>
      </section>

      {/* Services detail */}
      <section aria-label="Services list" className="section-pad">
        <div className="container-site">
          <div className="space-y-20">
            {services.map((service, idx) => {
              const Icon = iconMap[service.icon] ?? Building2
              const reversed = idx % 2 !== 0
              return (
                <div
                  key={service.id}
                  className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-start ${reversed ? 'lg:flex-row-reverse' : ''}`}
                >
                  {/* Icon & title side */}
                  <div className={reversed ? 'lg:order-2' : ''}>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded bg-brand-blue-light mb-6">
                      <Icon size={22} className="text-ink" />
                    </div>
                    <p className="label-upper mb-2">Service 0{idx + 1}</p>
                    <h2 className="heading-md mb-4">{service.title}</h2>
                    <p className="body-lg mb-8 text-ink-body">{service.summary}</p>
                    <Button href="/consult" variant="secondary">
                      Discuss your project <ArrowRight size={14} />
                    </Button>
                  </div>

                  {/* Body text side */}
                  <div className={`bg-surface-alt rounded-sm p-8 lg:p-10 border border-border ${reversed ? 'lg:order-1' : ''}`}>
                    {service.body.split('\n\n').map((para, i) => (
                      <p key={i} className={`text-base leading-relaxed text-ink-body ${i > 0 ? 'mt-4' : ''}`}>
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* RIBA stages callout */}
      <section aria-label="RIBA stages" className="section-pad bg-surface-dark text-white">
        <div className="container-site">
          <SectionHeader
            label="Full project lifecycle"
            heading="We're with you at every RIBA stage."
            body="From Stage 0 (Strategic Definition) through to Stage 7 (In Use), AD Architects can provide a single, coherent architectural voice — or support at the specific stages your project requires."
            headingClassName="text-white"
          />

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2">
            {[
              { stage: '0', label: 'Strategic Definition' },
              { stage: '1', label: 'Preparation & Briefing' },
              { stage: '2', label: 'Concept Design' },
              { stage: '3', label: 'Spatial Coordination' },
              { stage: '4', label: 'Technical Design' },
              { stage: '5', label: 'Construction' },
              { stage: '6', label: 'Handover' },
              { stage: '7', label: 'In Use' },
            ].map(({ stage, label }) => (
              <div
                key={stage}
                className="bg-white/5 border border-white/10 rounded-sm p-4 text-center"
              >
                <p className="text-2xl font-light text-ink mb-1">{stage}</p>
                <p className="text-2xs text-white/50 leading-snug">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section aria-label="Service enquiry" className="section-pad">
        <div className="container-site text-center">
          <SectionHeader
            label="Get started"
            heading="Not sure which services you need?"
            body="That's what the first conversation is for. Tell us about your project and we'll advise on the right scope of engagement — honestly and without obligation."
            align="center"
          />
          <div className="mt-8">
            <Button href="/consult" size="lg">
              Book a Free Consultation
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
