import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'accent' | 'outline' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const variants: Record<Variant, string> = {
  primary:
    'bg-gold text-night shadow-[0_4px_0_#a68a42,0_10px_30px_rgba(212,175,90,0.35)] hover:shadow-[0_2px_0_#a68a42,0_6px_20px_rgba(212,175,90,0.25)] hover:translate-y-[2px] active:translate-y-[3px]',
  secondary:
    'bg-night-light text-mist border border-gold/30 hover:border-gold/60 hover:text-gold shadow-[0_4px_24px_rgba(0,0,0,0.3)]',
  accent:
    'bg-mist text-night shadow-[0_4px_0_#c8c4bc,0_10px_30px_rgba(240,237,230,0.15)] hover:shadow-[0_2px_0_#c8c4bc,0_6px_20px_rgba(240,237,230,0.1)] hover:translate-y-[2px]',
  outline:
    'bg-transparent text-gold border-2 border-gold/40 hover:bg-gold hover:text-night hover:border-gold shadow-[0_4px_0_rgba(212,175,90,0.15)] hover:translate-y-[1px]',
  ghost:
    'bg-night-muted text-mist/70 border border-gold/10 hover:border-gold/30 hover:text-gold',
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
    'relative inline-flex items-center justify-center gap-2 font-semibold overflow-hidden',
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
