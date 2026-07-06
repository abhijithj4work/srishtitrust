import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost' | 'accent'

const styles: Record<Variant, string> = {
  primary: 'bg-charcoal text-cream shadow-[0_4px_0_#0a0a0a,0_8px_24px_rgba(0,0,0,0.2)] hover:shadow-[0_2px_0_#0a0a0a,0_4px_16px_rgba(0,0,0,0.15)] active:shadow-[0_1px_0_#0a0a0a] hover:translate-y-[2px] active:translate-y-[3px]',
  secondary: 'bg-cream/10 backdrop-blur-md text-cream border border-cream/25 shadow-[0_4px_24px_rgba(0,0,0,0.15)] hover:bg-cream/20 hover:border-cream/40',
  ghost: 'text-charcoal border border-charcoal/15 hover:border-charcoal/40 hover:bg-charcoal/5',
  accent: 'bg-terracotta text-white shadow-[0_4px_0_#8a4528,0_8px_24px_rgba(184,92,56,0.35)] hover:shadow-[0_2px_0_#8a4528,0_4px_16px_rgba(184,92,56,0.25)] hover:translate-y-[2px] active:translate-y-[3px]',
}

interface Props {
  children: ReactNode
  variant?: Variant
  to?: string
  onClick?: () => void
  type?: 'button' | 'submit'
  className?: string
}

export default function CinematicButton({
  children,
  variant = 'primary',
  to,
  onClick,
  type = 'button',
  className = '',
}: Props) {
  const base = `relative inline-flex items-center justify-center gap-2 px-7 py-3 text-[13px] font-semibold tracking-wide overflow-hidden transition-all duration-300 ${styles[variant]} ${className}`

  const shine = (
    <motion.span
      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
      initial={false}
      whileHover={{ translateX: '200%' }}
      transition={{ duration: 0.6, ease: 'easeInOut' }}
    />
  )

  if (to) {
    return (
      <Link to={to} className={base}>
        {shine}
        <span className="relative z-10">{children}</span>
      </Link>
    )
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={base}
      whileTap={{ scale: 0.97 }}
    >
      {shine}
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}
