import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary:
    'bg-gold text-night shadow-[0_4px_0_#8a7030,0_10px_30px_rgba(201,168,76,0.35)] hover:shadow-[0_2px_0_#8a7030,0_6px_20px_rgba(201,168,76,0.25)] hover:translate-y-[2px] active:translate-y-[3px]',
  secondary:
    'bg-mist/10 backdrop-blur-md text-mist border border-mist/25 shadow-[0_4px_24px_rgba(0,0,0,0.3)] hover:bg-mist/15 hover:border-gold/40',
  accent:
    'bg-gold text-night shadow-[0_4px_0_#8a7030,0_10px_30px_rgba(201,168,76,0.4)] hover:shadow-[0_2px_0_#8a7030,0_6px_20px_rgba(201,168,76,0.3)] hover:translate-y-[2px] active:translate-y-[3px]',
  outline:
    'bg-transparent text-mist border-2 border-gold/30 hover:border-gold hover:text-gold shadow-[0_4px_0_rgba(201,168,76,0.08)] hover:shadow-[0_2px_0_rgba(201,168,76,0.12)] hover:translate-y-[1px]',
  ghost:
    'bg-night-light/50 text-mist border border-gold/15 hover:border-gold/40 hover:bg-night-light',
}

const sizes: Record<Size, string> = {
  sm: 'px-6 py-3 text-sm rounded-full',
  md: 'px-9 py-4 text-sm rounded-full',
  lg: 'px-12 py-5 text-base rounded-full',
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
      className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
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
