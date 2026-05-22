import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

type Variant = 'primary' | 'secondary' | 'ghost' | 'outline'
type Size = 'sm' | 'md' | 'lg'

const variantClasses: Record<Variant, string> = {
  primary:
    'bg-brand-blue text-ink font-semibold hover:bg-brand-blue-dark focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2',
  secondary:
    'bg-surface text-ink border border-brand-blue hover:bg-brand-blue-light focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2',
  ghost:
    'text-ink hover:text-ink hover:bg-surface-alt focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2',
  outline:
    'border border-border text-ink hover:border-brand-blue hover:bg-brand-blue-light focus-visible:ring-2 focus-visible:ring-brand-blue focus-visible:ring-offset-2',
}

const sizeClasses: Record<Size, string> = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-sm',
  lg: 'px-8 py-4 text-base',
}

const base =
  'inline-flex items-center justify-center gap-2 rounded font-medium transition-colors duration-150 whitespace-nowrap disabled:opacity-50 disabled:cursor-not-allowed'

interface SharedProps {
  variant?: Variant
  size?: Size
  className?: string
  children: React.ReactNode
}

type ButtonProps = SharedProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof SharedProps>

type AnchorProps = SharedProps & {
  href: string
  external?: boolean
}

type Props = ButtonProps | AnchorProps

const isAnchor = (props: Props): props is AnchorProps =>
  'href' in props && typeof (props as AnchorProps).href === 'string'

const Button = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const { variant = 'primary', size = 'md', className = '', children } = props
  const classes = [base, variantClasses[variant], sizeClasses[size], className].join(' ')

  if (isAnchor(props)) {
    const { href, external, variant: _v, size: _s, className: _c, children: _ch, ...rest } = props
    if (external) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...(rest as React.AnchorHTMLAttributes<HTMLAnchorElement>)}>
          {children}
        </a>
      )
    }
    return (
      <Link to={href} className={classes}>
        {children}
      </Link>
    )
  }

  const { variant: _v, size: _s, className: _c, children: _ch, ...buttonRest } = props
  return (
    <button ref={ref} className={classes} {...buttonRest}>
      {children}
    </button>
  )
})

Button.displayName = 'Button'
export default Button
