interface Props {
  label?: string
  heading: string
  body?: string
  align?: 'left' | 'center'
  headingClassName?: string
}

export default function SectionHeader({
  label,
  heading,
  body,
  align = 'left',
  headingClassName = '',
}: Props) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : ''

  return (
    <div className={`max-w-2xl ${alignClass}`}>
      {label && (
        <p className="label-upper mb-4" aria-hidden="true">
          {label}
        </p>
      )}
      <h2 className={`heading-lg text-balance mb-4 ${headingClassName}`}>{heading}</h2>
      {body && <p className="body-lg">{body}</p>}
    </div>
  )
}
