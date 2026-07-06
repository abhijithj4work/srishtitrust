import { motion } from 'framer-motion'
import { journeyContent } from '@shared/content'

export default function Journey() {
  return (
    <div className="pt-28 pb-28 md:pb-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20 md:mb-28 pb-10 border-b border-linen max-w-2xl"
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-stone mb-5">Since 1991</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-charcoal leading-tight">
            {journeyContent.title}
          </h1>
        </motion.div>

        <div>
          {journeyContent.sections.map((section, i) => (
            <motion.article
              key={section.year}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ delay: i * 0.06 }}
              className="grid lg:grid-cols-12 gap-8 py-14 md:py-20 border-t border-linen"
            >
              <div className="lg:col-span-3">
                <span className="text-2xl md:text-4xl font-semibold tracking-tight text-forest">{section.year}</span>
              </div>
              <div className="lg:col-span-9 lg:pl-6">
                <h2 className="text-lg md:text-xl font-semibold tracking-tight text-charcoal mb-4">{section.title}</h2>
                <p className="text-charcoal/60 text-sm md:text-base leading-[1.85] max-w-2xl">{section.content}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}
