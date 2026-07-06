import { motion } from 'framer-motion'
import { journeyContent } from '@shared/content'

export default function Journey() {
  return (
    <div className="pt-28 pb-24 md:pb-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 md:mb-24 pb-10 border-b border-charcoal/8 max-w-2xl"
        >
          <p className="text-[11px] uppercase tracking-[0.2em] text-warm-gray mb-4">Since 1991</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">{journeyContent.title}</h1>
        </motion.div>

        <div className="space-y-0">
          {journeyContent.sections.map((section, i) => (
            <motion.article
              key={section.year}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ delay: i * 0.06 }}
              className="grid md:grid-cols-12 gap-6 md:gap-10 py-12 md:py-16 border-t border-charcoal/6"
            >
              <div className="md:col-span-3">
                <span className="text-2xl md:text-3xl font-semibold tracking-tight text-terracotta">{section.year}</span>
              </div>
              <div className="md:col-span-9 md:pl-4">
                <h2 className="text-lg md:text-xl font-semibold tracking-tight mb-3">{section.title}</h2>
                <p className="text-warm-gray text-sm md:text-base leading-[1.8] max-w-2xl">{section.content}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  )
}
