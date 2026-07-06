import { institutes, institutesIntro } from '@shared/content'
import InstituteCard from '../components/InstituteCard'
import { motion } from 'framer-motion'

export default function Institutes() {
  return (
    <div className="page-top pb-36 md:pb-48">
      <div className="max-w-7xl mx-auto container-pad">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20 md:mb-28"
        >
          <p className="eyebrow text-warm-gray mb-6">Eight Institutes</p>
          <h1 className="display-section font-semibold mb-8">{institutesIntro.title}</h1>
          <p className="body-lg text-warm-gray">{institutesIntro.description}</p>
          <p className="text-charcoal font-medium mt-8 body-lg italic">{institutesIntro.highlight}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {institutes.map((inst, i) => (
            <InstituteCard key={inst.slug} institute={inst} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
