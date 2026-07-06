import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { heroContent } from '@shared/content'
import { assetUrl } from '@shared/assetUrl'
import CinematicButton from './ui/CinematicButton'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.1])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '12%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section ref={ref} className="relative h-screen min-h-[640px] flex items-end overflow-hidden">
      <motion.div className="absolute inset-0 overflow-hidden" style={{ y: imageY, scale: imageScale }}>
        <img
          src={assetUrl('assets/plantation.jpg')}
          alt="Tea plantations in Munnar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent cinematic-vignette" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative w-full max-w-[1400px] mx-auto px-6 lg:px-12 pb-16 lg:pb-24"
      >
        <motion.div
          initial={{ opacity: 0, y: 48, rotateX: 10 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformPerspective: 1200 }}
          className="max-w-3xl"
        >
          <p className="text-cream/45 text-[11px] tracking-[0.3em] uppercase mb-6 font-semibold">
            Since 1991 · Munnar
          </p>

          <h1 className="text-4xl md:text-6xl lg:text-7xl text-cream leading-[1.02] mb-6 font-bold tracking-tight">
            {heroContent.lines[0]}
            <br />
            <span className="text-cream/60 font-medium">{heroContent.lines[1]}</span>
          </h1>

          <p className="text-cream/50 text-sm md:text-base max-w-md mb-10 leading-relaxed">
            {heroContent.subtitle}
          </p>

          <div className="flex flex-wrap gap-4">
            <CinematicButton to="/donate" variant="primary">
              {heroContent.ctaPrimary}
            </CinematicButton>
            <CinematicButton to="/journey" variant="secondary">
              {heroContent.ctaSecondary}
            </CinematicButton>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-cream/40 to-transparent"
        />
      </motion.div>
    </section>
  )
}
