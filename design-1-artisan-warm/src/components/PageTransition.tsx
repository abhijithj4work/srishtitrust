import { motion } from 'framer-motion'
import type { ReactNode } from 'react'

export default function PageTransition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.97, y: 12, rotateX: 3, filter: 'blur(8px)' }}
      animate={{ opacity: 1, scale: 1, y: 0, rotateX: 0, filter: 'blur(0px)' }}
      exit={{ opacity: 0, scale: 1.02, y: -8, rotateX: -2, filter: 'blur(6px)' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformPerspective: 1400, transformOrigin: 'top center' }}
    >
      {children}
    </motion.div>
  )
}
