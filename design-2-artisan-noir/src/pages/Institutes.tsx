import { institutes, institutesIntro } from '@shared/content'
import InstituteCard from '../components/InstituteCard'
import { motion } from 'framer-motion'

export default function Institutes() {
  return (
    <div className="pt-32 pb-36 md:pb-48">
      <div className="max-w-7xl mx-auto container-pad">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-3xl mx-auto mb-20 md:mb-28"
        >
          <p className="eyebrow text-gold/70 mb-6">Eight Institutes</p>
          <h1 className="display-section font-semibold text-mist mb-8">{institutesIntro.title}</h1>
          <p className="body-lg text-mist/45">{institutesIntro.description}</p>
          <p className="text-gold font-medium mt-8 body-lg italic">{institutesIntro.highlight}</p>
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
