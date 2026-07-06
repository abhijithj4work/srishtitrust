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
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.7 }}
    >
      <Link
        to={`/institutes/${institute.slug}`}
        className="group block relative overflow-hidden rounded-3xl shadow-[0_16px_48px_rgba(47,79,62,0.1)] hover:shadow-[0_24px_60px_rgba(47,79,62,0.16)] transition-shadow duration-500 border border-linen/40"
      >
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={assetUrl(institute.image)}
            alt={institute.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 text-cream">
          <h3 className="font-display text-2xl md:text-3xl mb-3 group-hover:text-sage transition-colors">
            {institute.name}
          </h3>
          <p className="text-cream/70 text-base leading-relaxed line-clamp-2">{institute.tagline}</p>
        </div>
      </Link>
    </motion.div>
  )
}
