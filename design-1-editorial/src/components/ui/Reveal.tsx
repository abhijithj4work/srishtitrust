import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
  delay?: number
}

export default function Reveal({ children, className = '', delay = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48, rotateX: 8, filter: 'blur(4px)' }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      style={{ transformPerspective: 1200 }}
    >
      {children}
    </motion.div>
  )
}
