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
  const contentOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0])

  return (
    <section ref={ref} className="relative min-h-screen flex flex-col overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
        <img src={assetUrl('assets/hero.jpg')} alt="Munnar tea plantations" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-night/80 via-night/60 to-night/90 cinematic-vignette" />
      </motion.div>

      <motion.div
        style={{ opacity: contentOpacity }}
        className="relative z-10 flex-1 flex items-center justify-center hero-offset px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 48, filter: 'blur(8px)' }}
          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl text-center"
        >
          <p className="eyebrow text-gold/70 mb-8">{heroContent.eyebrow}</p>
          <h1 className="display-hero text-mist font-bold mb-8">
            Craft with purpose.
            <br />
            <span className="text-mist/55 font-medium">Lives with dignity.</span>
          </h1>
          <p className="body-lg text-mist/55 mb-12 max-w-2xl mx-auto">{heroContent.subtitle}</p>
          <div className="flex flex-wrap items-center justify-center gap-6">
            <CinematicButton to="/shop" variant="accent" size="lg">Shop collection</CinematicButton>
            <CinematicButton to="/journey" variant="secondary" size="lg">Our story</CinematicButton>
          </div>
        </motion.div>
      </motion.div>

      <motion.div style={{ opacity: contentOpacity }} className="relative z-10 max-w-7xl mx-auto container-pad w-full pb-16">
        <div className="grid grid-cols-3 gap-4 md:gap-6">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={0.3 + i * 0.12}>
              <div className="bg-night/50 backdrop-blur-xl border border-gold/20 p-6 md:p-8 text-center hover:border-gold/40 transition-colors duration-500">
                <span className="text-gold text-xs font-bold tracking-[0.2em]">0{i + 1}</span>
                <h3 className="text-mist text-sm md:text-base font-semibold mt-3 tracking-tight">{pillar.title}</h3>
                <p className="text-mist/50 text-xs md:text-sm mt-1 leading-relaxed hidden sm:block">{pillar.subtitle}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
      >
        <span className="text-mist/35 text-xs uppercase tracking-[0.35em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          className="w-px h-12 bg-gradient-to-b from-gold/50 to-transparent"
        />
      </motion.div>
    </section>
  )
}
