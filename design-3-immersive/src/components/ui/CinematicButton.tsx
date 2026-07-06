import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { ReactNode } from 'react'

type Variant = 'primary' | 'secondary' | 'ghost'

const styles: Record<Variant, string> = {
  primary: 'bg-gold text-night shadow-[0_4px_0_#a68a42,0_8px_32px_rgba(212,175,90,0.3)] hover:shadow-[0_2px_0_#a68a42,0_4px_20px_rgba(212,175,90,0.2)] hover:translate-y-[2px] active:translate-y-[3px]',
  secondary: 'text-mist border border-mist/20 backdrop-blur-sm hover:border-gold/50 hover:text-gold',
  ghost: 'text-gold border-b border-gold/30 hover:border-gold pb-1',
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
  const base = `relative inline-flex items-center justify-center gap-2 px-7 py-3 text-[13px] font-semibold tracking-wider uppercase overflow-hidden transition-all duration-300 ${styles[variant]} ${className}`

  const shine = (
    <motion.span
      className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12"
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
    <motion.button type={type} onClick={onClick} className={base} whileTap={{ scale: 0.97 }}>
      {shine}
      <span className="relative z-10">{children}</span>
    </motion.button>
  )
}
