interface ButtonProps {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export default function Button({
  children,
  onClick,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
}: ButtonProps) {
  const baseStyles = 'font-bold rounded-md transition-all duration-300'

  const variants = {
    primary: 'bg-golden text-white hover:bg-golden-dark',
    secondary: 'bg-primary text-white hover:bg-primary-dark',
    outline: 'border-2 border-golden text-golden hover:bg-golden hover:text-white',
  }

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  )
}
