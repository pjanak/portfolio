import { Helmet } from 'react-helmet-async'
import { useState } from 'react'
import { CheckCircle, Phone, Mail, MapPin } from 'lucide-react'
import Button from '@/components/ui/Button'
import SectionHeader from '@/components/ui/SectionHeader'

const projectTypes = [
  'Healthcare / NHS',
  'Education',
  'Residential',
  'Community / Leisure',
  'Mixed use',
  'Other',
]

const budgetRanges = [
  'Under £500k',
  '£500k – £2m',
  '£2m – £10m',
  '£10m – £50m',
  'Over £50m',
  'TBD / Not yet defined',
]

interface FormState {
  name: string
  organisation: string
  email: string
  phone: string
  projectType: string
  budget: string
  timeline: string
  message: string
}

const emptyForm: FormState = {
  name: '',
  organisation: '',
  email: '',
  phone: '',
  projectType: '',
  budget: '',
  timeline: '',
  message: '',
}

export default function Consult() {
  const [form, setForm] = useState<FormState>(emptyForm)
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState<Partial<FormState>>({})

  const validate = (): boolean => {
    const newErrors: Partial<FormState> = {}
    if (!form.name.trim()) newErrors.name = 'Your name is required'
    if (!form.email.trim()) newErrors.email = 'Email address is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      newErrors.email = 'Please enter a valid email address'
    if (!form.message.trim()) newErrors.message = 'Please tell us about your project'
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
    if (errors[name as keyof FormState]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (validate()) setSubmitted(true)
  }

  const inputClass = (field: keyof FormState) =>
    `w-full px-4 py-3 text-sm border rounded bg-surface text-ink placeholder:text-ink-subtle focus:outline-none focus:ring-2 focus:ring-brand-blue transition-shadow ${
      errors[field] ? 'border-red-400 focus:ring-red-400' : 'border-border focus:border-brand-blue'
    }`

  const labelClass = 'block text-sm font-medium text-ink mb-1.5'

  if (submitted) {
    return (
      <>
        <Helmet>
          <title>Consultation Request Sent — AD Architects</title>
        </Helmet>
        <section className="section-pad" aria-live="polite">
          <div className="container-site max-w-xl text-center mx-auto">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-8">
              <CheckCircle size={32} className="text-green-600" />
            </div>
            <h1 className="heading-lg mb-4">Thank you, {form.name.split(' ')[0]}.</h1>
            <p className="body-lg mb-8">
              We've received your project brief and will be in touch within two working days to
              arrange your free consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button href="/work" variant="secondary">
                Explore our work
              </Button>
              <Button href="/" variant="ghost">
                Back to home
              </Button>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <Helmet>
        <title>Book a Free Consultation — AD Architects</title>
        <meta
          name="description"
          content="Tell us about your project. We offer a free initial consultation — an honest conversation about your building, with no commitment required."
        />
      </Helmet>

      {/* Page header */}
      <section className="section-pad bg-surface-alt border-b border-border">
        <div className="container-site">
          <p className="label-upper mb-4">Free consultation</p>
          <h1 className="heading-xl text-balance max-w-3xl mb-6">
            Tell us about your project.
          </h1>
          <p className="body-lg max-w-2xl">
            No commitment, no jargon — just an honest first conversation about what you're trying to
            achieve. We'll come back to you within two working days.
          </p>
        </div>
      </section>

      <section className="section-pad">
        <div className="container-site">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Consultation request form"
              >
                <div className="space-y-8">
                  {/* Contact details */}
                  <fieldset>
                    <legend className="heading-md mb-6">Your details</legend>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className={labelClass}>
                          Full name <span className="text-red-500" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          autoComplete="name"
                          required
                          aria-required="true"
                          aria-describedby={errors.name ? 'name-error' : undefined}
                          value={form.name}
                          onChange={handleChange}
                          className={inputClass('name')}
                          placeholder="Jane Smith"
                        />
                        {errors.name && (
                          <p id="name-error" role="alert" className="mt-1.5 text-xs text-red-600">
                            {errors.name}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="organisation" className={labelClass}>
                          Organisation
                        </label>
                        <input
                          id="organisation"
                          name="organisation"
                          type="text"
                          autoComplete="organization"
                          value={form.organisation}
                          onChange={handleChange}
                          className={inputClass('organisation')}
                          placeholder="NHS Trust / University / etc."
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className={labelClass}>
                          Email address <span className="text-red-500" aria-hidden="true">*</span>
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          autoComplete="email"
                          required
                          aria-required="true"
                          aria-describedby={errors.email ? 'email-error' : undefined}
                          value={form.email}
                          onChange={handleChange}
                          className={inputClass('email')}
                          placeholder="jane@example.com"
                        />
                        {errors.email && (
                          <p id="email-error" role="alert" className="mt-1.5 text-xs text-red-600">
                            {errors.email}
                          </p>
                        )}
                      </div>
                      <div>
                        <label htmlFor="phone" className={labelClass}>
                          Phone number
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          autoComplete="tel"
                          value={form.phone}
                          onChange={handleChange}
                          className={inputClass('phone')}
                          placeholder="+44 (0)..."
                        />
                      </div>
                    </div>
                  </fieldset>

                  {/* Project details */}
                  <fieldset>
                    <legend className="heading-md mb-6">About your project</legend>
                    <div className="grid sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="projectType" className={labelClass}>
                          Project type
                        </label>
                        <select
                          id="projectType"
                          name="projectType"
                          value={form.projectType}
                          onChange={handleChange}
                          className={inputClass('projectType')}
                        >
                          <option value="">Select a type</option>
                          {projectTypes.map((t) => (
                            <option key={t} value={t}>
                              {t}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label htmlFor="budget" className={labelClass}>
                          Approximate budget
                        </label>
                        <select
                          id="budget"
                          name="budget"
                          value={form.budget}
                          onChange={handleChange}
                          className={inputClass('budget')}
                        >
                          <option value="">Select a range</option>
                          {budgetRanges.map((r) => (
                            <option key={r} value={r}>
                              {r}
                            </option>
                          ))}
                        </select>
                      </div>
                      <div className="sm:col-span-2">
                        <label htmlFor="timeline" className={labelClass}>
                          Desired timeline / target date
                        </label>
                        <input
                          id="timeline"
                          name="timeline"
                          type="text"
                          value={form.timeline}
                          onChange={handleChange}
                          className={inputClass('timeline')}
                          placeholder="e.g. Planning submission by Q3 2027"
                        />
                      </div>
                    </div>
                  </fieldset>

                  {/* Message */}
                  <div>
                    <label htmlFor="message" className={labelClass}>
                      Tell us about your project{' '}
                      <span className="text-red-500" aria-hidden="true">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      required
                      aria-required="true"
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      value={form.message}
                      onChange={handleChange}
                      className={`${inputClass('message')} resize-none`}
                      placeholder="What are you trying to achieve? Where is the site? What stage are you at? Any particular constraints or requirements?"
                    />
                    {errors.message && (
                      <p id="message-error" role="alert" className="mt-1.5 text-xs text-red-600">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <Button type="submit" size="lg">
                      Send project brief
                    </Button>
                    <p className="mt-3 text-xs text-ink-muted">
                      We'll respond within two working days. Your information will only be used to
                      discuss your enquiry.
                    </p>
                  </div>
                </div>
              </form>
            </div>

            {/* Sidebar */}
            <aside aria-label="Contact information">
              <div className="sticky top-28 space-y-8">
                <div>
                  <SectionHeader
                    label="Prefer to call?"
                    heading="Speak directly with the team."
                  />
                  <ul className="mt-6 space-y-5">
                    <li>
                      <p className="label-upper mb-2">Hertford</p>
                      <a
                        href="tel:+441992554983"
                        className="flex items-center gap-2 text-sm text-ink font-medium hover:underline decoration-brand-blue underline-offset-2"
                      >
                        <Phone size={14} />
                        +44 (0)1992 554 983
                      </a>
                      <address className="not-italic flex items-start gap-2 text-sm text-ink-muted mt-1">
                        <MapPin size={14} className="mt-0.5 shrink-0" />
                        63–65 Fore Street, SG14 1AL
                      </address>
                    </li>
                    <li>
                      <p className="label-upper mb-2">London</p>
                      <a
                        href="tel:+442035823292"
                        className="flex items-center gap-2 text-sm text-ink font-medium hover:underline decoration-brand-blue underline-offset-2"
                      >
                        <Phone size={14} />
                        +44 (0)20 3582 3292
                      </a>
                      <address className="not-italic flex items-start gap-2 text-sm text-ink-muted mt-1">
                        <MapPin size={14} className="mt-0.5 shrink-0" />
                        2–3 Eldon Street, EC2M 7LS
                      </address>
                    </li>
                    <li>
                      <a
                        href="mailto:info@adarchitects.co.uk"
                        className="flex items-center gap-2 text-sm text-ink font-medium hover:underline decoration-brand-blue underline-offset-2"
                      >
                        <Mail size={14} />
                        info@adarchitects.co.uk
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="bg-surface-alt border border-border rounded-sm p-6">
                  <p className="text-sm font-semibold text-ink mb-3">What to expect</p>
                  <ul className="space-y-2">
                    {[
                      'Response within 2 working days',
                      'A 30–60 minute call with a director',
                      'Honest advice, no sales pressure',
                      'No commitment required',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-ink-body">
                        <CheckCircle size={14} className="text-ink shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}
