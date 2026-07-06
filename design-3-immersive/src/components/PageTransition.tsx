import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function PageTransition({ children }: { children: ReactNode }) {
  const reduced = useReducedMotion()

  if (reduced) {
    return <>{children}</>
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, rotateX: 4, filter: 'blur(10px)' }}
      animate={{ opacity: 1, scale: 1, rotateX: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 1.03, rotateX: -3, filter: 'blur(8px)' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformPerspective: 1400, transformOrigin: 'top center' }}
    >
      {children}
    </motion.div>
  )
}
