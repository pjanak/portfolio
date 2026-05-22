interface Props {
  children: React.ReactNode
  variant?: 'default' | 'blue' | 'green'
}

const variants = {
  default: 'bg-surface-alt text-ink-muted border border-border',
  blue: 'bg-brand-blue text-ink border border-brand-blue',
  green: 'bg-green-50 text-green-700 border border-green-200',
}

export default function Badge({ children, variant = 'default' }: Props) {
  return (
    <span className={`inline-block text-xs font-medium px-2.5 py-1 rounded ${variants[variant]}`}>
      {children}
    </span>
  )
}
