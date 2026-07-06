import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { useTilt } from '../../hooks/useTilt'

interface Props {
  children: ReactNode
  className?: string
  intensity?: number
}

export default function TiltCard({ children, className = '', intensity = 12 }: Props) {
  const { ref, rotateX, rotateY, onMouseMove, onMouseLeave } = useTilt(intensity)

  return (
    <div style={{ perspective: '1200px' }}>
      <motion.div
        ref={ref}
        onMouseMove={onMouseMove}
        onMouseLeave={onMouseLeave}
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className={`will-change-transform ${className}`}
      >
        {children}
      </motion.div>
    </div>
  )
}
