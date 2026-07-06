import { assetUrl } from '@shared/assetUrl'
import { useRef, type ReactNode } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface ScrollScrubbedSectionProps {
  children: ReactNode
  backgroundImage?: string
  className?: string
  minHeight?: string
}

export default function ScrollScrubbedSection({
  children,
  backgroundImage,
  className = '',
  minHeight = 'min-h-[80vh]',
}: ScrollScrubbedSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const reduced = useReducedMotion()

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.3, 1, 1, 0.3])
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.15, 1, 1.05])
  const contentY = useTransform(scrollYProgress, [0, 1], [60, -60])

  return (
    <section ref={ref} className={`relative overflow-hidden ${minHeight} ${className}`}>
      {backgroundImage && (
        <motion.div
          className="absolute inset-0"
          style={reduced ? {} : { opacity, scale }}
        >
          <img
            src={assetUrl(backgroundImage)}
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-night/80" />
        </motion.div>
      )}

      <motion.div
        className="relative z-10 h-full flex items-center"
        style={reduced ? {} : { y: contentY }}
      >
        {children}
      </motion.div>
    </section>
  )
}
