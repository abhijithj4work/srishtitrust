import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import { heroContent } from '@shared/content'
import { assetUrl } from '@shared/assetUrl'
import CinematicButton from './ui/CinematicButton'
import Reveal from './ui/Reveal'

const pillars = [
  { title: 'Naturally dyed', subtitle: 'Roots, barks & leaves' },
  { title: 'Handcrafted', subtitle: 'By skilled artisans' },
  { title: 'Empowering', subtitle: 'Since 1991, Munnar' },
]

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.12])
  const contentY = useTransform(scrollYProgress, [0, 1], ['0%', '15%'])
  const contentOpacity = useTransform(scrollYProgress, [0, 0.7], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
        <img
          src={assetUrl('assets/plantation.jpg')}
          alt="Tea plantations in Munnar"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/55 to-charcoal/25 cinematic-vignette" />
      </motion.div>

      <motion.div
        style={{ y: contentY, opacity: contentOpacity }}
        className="relative max-w-7xl mx-auto px-6 lg:px-10 pt-28 pb-20 w-full"
      >
        <motion.div
          initial={{ opacity: 0, y: 40, rotateX: 12 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformPerspective: 1200 }}
          className="max-w-2xl"
        >
          <p className="text-cream/50 text-[11px] font-semibold tracking-[0.3em] uppercase mb-6">
            {heroContent.eyebrow}
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-cream leading-[1.02] mb-6 font-bold tracking-tight">
            Craft with purpose.
            <br />
            <span className="text-cream/60 font-medium">Lives with dignity.</span>
          </h1>
          <p className="text-cream/55 text-base md:text-lg mb-10 max-w-md leading-relaxed">
            {heroContent.subtitle}
          </p>
          <div className="flex flex-wrap gap-4">
            <CinematicButton to="/shop" variant="primary" className="!bg-cream !text-charcoal !shadow-[0_4px_0_#d4d0c8,0_8px_32px_rgba(0,0,0,0.2)]">
              Shop collection
            </CinematicButton>
            <CinematicButton to="/journey" variant="secondary">
              Our story
            </CinematicButton>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-20 max-w-3xl">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={0.3 + i * 0.1}>
              <div className="bg-charcoal/40 backdrop-blur-xl border border-cream/10 p-6 hover:border-cream/25 transition-colors duration-500">
                <span className="text-terracotta text-[10px] font-bold tracking-[0.2em]">0{i + 1}</span>
                <h3 className="text-cream text-sm font-semibold mt-3 tracking-tight">{pillar.title}</h3>
                <p className="text-cream/45 text-xs mt-1.5 leading-relaxed">{pillar.subtitle}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-cream/30 text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-10 bg-gradient-to-b from-cream/50 to-transparent"
        />
      </motion.div>
    </section>
  )
}
