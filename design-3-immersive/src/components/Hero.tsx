import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { heroContent } from '@shared/content'
import { assetUrl } from '@shared/assetUrl'
import { useReducedMotion } from '../hooks/useReducedMotion'
import CinematicButton from './ui/CinematicButton'

export default function Hero() {
  const reduced = useReducedMotion()
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-end overflow-hidden">
      <motion.div className="absolute inset-0" style={reduced ? {} : { y: imageY, scale: imageScale }}>
        <img
          src={assetUrl('assets/hero.jpg')}
          alt="Munnar tea plantations"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/65 to-night/20 cinematic-vignette" />
      </motion.div>

      <motion.div
        style={reduced ? {} : { opacity: contentOpacity }}
        className="relative z-10 w-full max-w-7xl mx-auto px-6 lg:px-10 pb-20 md:pb-28 pt-28"
      >
        <motion.p
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.7 }}
          className="text-gold/70 text-[11px] uppercase tracking-[0.35em] mb-6 font-semibold"
        >
          {heroContent.eyebrow}
        </motion.p>

        <div className="space-y-1 md:space-y-2 mb-8">
          {heroContent.lines.map((line, i) => (
            <motion.h1
              key={line}
              initial={reduced ? false : { opacity: 0, y: 40, rotateX: 12 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{
                delay: 0.25 + i * 0.12,
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1],
              }}
              style={{ transformPerspective: 1200 }}
              className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl text-mist leading-[1.02] font-bold tracking-tight"
            >
              {line}
            </motion.h1>
          ))}
        </div>

        <motion.p
          initial={reduced ? false : { opacity: 0, filter: 'blur(4px)' }}
          animate={{ opacity: 1, filter: 'blur(0px)' }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="text-mist/50 text-base max-w-lg mb-10 leading-relaxed"
        >
          {heroContent.subtitle}
        </motion.p>

        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="flex flex-wrap gap-4"
        >
          <CinematicButton to="/donate" variant="primary">
            {heroContent.ctaPrimary}
          </CinematicButton>
          <CinematicButton to="/journey" variant="secondary">
            {heroContent.ctaSecondary}
          </CinematicButton>
        </motion.div>
      </motion.div>

      {!reduced && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-mist/25 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
            className="w-px h-10 bg-gradient-to-b from-gold/50 to-transparent"
          />
        </motion.div>
      )}
    </section>
  )
}
