import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary:
    'bg-forest text-cream shadow-[0_4px_0_#1e3328,0_10px_30px_rgba(47,79,62,0.35)] hover:shadow-[0_2px_0_#1e3328,0_6px_20px_rgba(47,79,62,0.25)] hover:translate-y-[2px] active:translate-y-[3px]',
  secondary:
    'bg-charcoal text-cream shadow-[0_4px_0_#0a0a0a,0_10px_30px_rgba(0,0,0,0.2)] hover:shadow-[0_2px_0_#0a0a0a,0_6px_20px_rgba(0,0,0,0.15)] hover:translate-y-[2px] active:translate-y-[3px]',
  accent:
    'bg-cream text-charcoal shadow-[0_4px_0_#d4d0c8,0_10px_30px_rgba(0,0,0,0.12)] hover:shadow-[0_2px_0_#d4d0c8,0_6px_20px_rgba(0,0,0,0.1)] hover:translate-y-[2px] active:translate-y-[3px]',
  outline:
    'bg-transparent text-forest border-2 border-forest/40 hover:bg-forest hover:text-cream hover:border-forest shadow-[0_4px_0_rgba(47,79,62,0.15)] hover:shadow-[0_2px_0_rgba(47,79,62,0.2)] hover:translate-y-[1px]',
  ghost:
    'bg-charcoal/5 text-charcoal border border-charcoal/15 hover:bg-charcoal/10 hover:border-charcoal/30',
}

const sizes: Record<Size, string> = {
  sm: 'px-4 py-2 text-xs rounded-full',
  md: 'px-7 py-3 text-[13px] rounded-full',
  lg: 'px-9 py-3.5 text-sm rounded-full',
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

  const shine = (
    <motion.span
      className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent skew-x-12"
      initial={false}
      whileHover={{ translateX: '200%' }}
      transition={{ duration: 0.55, ease: 'easeInOut' }}
    />
  )

  const inner = (
    <>
      {shine}
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </>
  )

  if (to) {
    return (
      <Link to={to} className={base}>
        {inner}
      </Link>
    )
  }

  return (
    <motion.button type={type} onClick={onClick} className={base} whileTap={{ scale: 0.97 }}>
      {inner}
    </motion.button>
  )
}
