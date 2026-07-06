import { motion } from 'framer-motion'
import { journeyContent } from '@shared/content'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function Journey() {
  const reduced = useReducedMotion()

  return (
    <div className="pt-28 pb-28 md:pb-36 grain-overlay">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 md:mb-28 pb-10 border-b border-gold/10"
        >
          <p className="text-gold/70 text-[11px] uppercase tracking-[0.25em] mb-5">Since 1991</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-mist">{journeyContent.title}</h1>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-gold/20" />

          {journeyContent.sections.map((section, i) => (
            <motion.div
              key={section.year}
              initial={reduced ? false : { opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.08, duration: 0.7 }}
              className="relative pl-10 md:pl-20 pb-16 md:pb-24 last:pb-0"
            >
              <div className="absolute left-0 md:left-8 -translate-x-1/2 w-3 h-3 bg-gold rounded-full ring-4 ring-night" />
              <span className="text-3xl md:text-4xl font-semibold tracking-tight text-gold">{section.year}</span>
              <h3 className="text-lg md:text-xl font-semibold tracking-tight text-mist mt-4 mb-5">{section.title}</h3>
              <p className="text-mist/50 leading-[1.85] max-w-xl">{section.content}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
