import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary:
    'bg-sage text-cream hover:bg-sage/90',
  secondary:
    'bg-cream/15 backdrop-blur-md text-cream border border-cream/30 hover:bg-cream/25 hover:border-sage/50',
  accent:
    'bg-sage text-cream hover:bg-sage/90',
  outline:
    'bg-white text-charcoal border-2 border-linen hover:border-forest hover:text-forest',
  ghost:
    'bg-linen/50 text-charcoal border border-linen hover:border-forest/40 hover:bg-white',
}

const sizes: Record<Size, string> = {
  sm: 'px-6 py-3 text-sm rounded-xl',
  md: 'px-9 py-4 text-sm rounded-xl',
  lg: 'px-12 py-5 text-base rounded-xl',
}

interface Props {
  children: ReactNode
  variant?: Variant
  size?: Size
  to?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
  fullWidth?: boolean
}

export default function CinematicButton({
  children,
  variant = 'primary',
  size = 'md',
  to,
  onClick,
  type = 'button',
  className = '',
  fullWidth = false,
}: Props) {
  const base = [
    'relative inline-flex items-center justify-center gap-2 font-semibold tracking-wide overflow-hidden',
    'transition-all duration-300 select-none',
    variants[variant],
    sizes[size],
    fullWidth ? 'w-full' : '',
    className,
  ].join(' ')

  const inner = (
    <span className="relative z-10 flex items-center gap-2">{children}</span>
  )

  if (to) {
    return (
      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }} className={fullWidth ? 'w-full' : 'inline-flex'}>
        <Link to={to} className={base}>{inner}</Link>
      </motion.div>
    )
  }

  return (
    <motion.button type={type} onClick={onClick} className={base} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
      {inner}
    </motion.button>
  )
}
