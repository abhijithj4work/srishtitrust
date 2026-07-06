import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { Institute } from '@shared/content'
import { assetUrl } from '@shared/assetUrl'

interface Props {
  institute: Institute
  index?: number
}

export default function InstituteCard({ institute, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <Link
        to={`/institutes/${institute.slug}`}
        className="group block bg-white rounded-2xl overflow-hidden shadow-sm border border-sand/50 hover:shadow-lg transition-shadow"
      >
        <div className="aspect-[4/3] overflow-hidden">
          <img
            src={assetUrl(institute.image)}
            alt={institute.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-6">
          <h3 className="font-display text-xl mb-2 group-hover:text-terracotta transition-colors">
            {institute.name}
          </h3>
          <p className="text-warm-gray text-sm leading-relaxed">{institute.tagline}</p>
        </div>
      </Link>
    </motion.div>
  )
}
