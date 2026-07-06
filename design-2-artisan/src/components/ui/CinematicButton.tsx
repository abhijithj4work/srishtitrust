import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary:
    'bg-charcoal text-cream shadow-[0_4px_0_#0a0a0a,0_10px_30px_rgba(0,0,0,0.25)] hover:shadow-[0_2px_0_#0a0a0a,0_6px_20px_rgba(0,0,0,0.18)] hover:translate-y-[2px] active:translate-y-[3px]',
  secondary:
    'bg-cream/15 backdrop-blur-md text-cream border border-cream/30 shadow-[0_4px_24px_rgba(0,0,0,0.2)] hover:bg-cream/25 hover:border-cream/50',
  accent:
    'bg-terracotta text-white shadow-[0_4px_0_#8a4528,0_10px_30px_rgba(184,92,56,0.4)] hover:shadow-[0_2px_0_#8a4528,0_6px_20px_rgba(184,92,56,0.3)] hover:translate-y-[2px] active:translate-y-[3px]',
  outline:
    'bg-white text-charcoal border-2 border-charcoal/15 hover:border-terracotta hover:text-terracotta shadow-[0_4px_0_rgba(0,0,0,0.06)] hover:shadow-[0_2px_0_rgba(0,0,0,0.08)] hover:translate-y-[1px]',
  ghost:
    'bg-sand/50 text-charcoal border border-charcoal/10 hover:border-terracotta/40 hover:bg-white',
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
