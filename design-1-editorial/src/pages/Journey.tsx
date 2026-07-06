import { motion } from 'framer-motion'
import { journeyContent } from '@shared/content'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function Journey() {
  const reduced = useReducedMotion()

  return (
    <div className="pt-28 pb-28 md:pb-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 md:mb-28 pb-10 border-b border-linen max-w-2xl"
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-stone mb-5">Since 1991</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-charcoal leading-tight">
            {journeyContent.title}
          </h1>
        </motion.div>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-forest/20" />

          {journeyContent.sections.map((section, i) => (
            <motion.article
              key={section.year}
              initial={reduced ? false : { opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ delay: i * 0.08, duration: 0.7 }}
              className="relative pl-10 md:pl-20 pb-16 md:pb-24 last:pb-0"
            >
              <div className="absolute left-0 md:left-8 -translate-x-1/2 w-3 h-3 bg-forest rounded-full ring-4 ring-cream" />
              <span className="text-2xl md:text-4xl font-bold tracking-tight text-forest">{section.year}</span>
              <h2 className="text-lg md:text-xl font-semibold tracking-tight text-charcoal mt-4 mb-5">{section.title}</h2>
              <p className="text-charcoal/60 text-sm md:text-base leading-[1.85] max-w-2xl">{section.content}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}
