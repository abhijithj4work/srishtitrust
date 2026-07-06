import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { Institute } from '@shared/content'
import { assetUrl } from '@shared/assetUrl'
import TiltCard from './ui/TiltCard'

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
      <TiltCard intensity={8}>
        <Link
          to={`/institutes/${institute.slug}`}
          className="group block relative overflow-hidden rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.12)] hover:shadow-[0_24px_60px_rgba(0,0,0,0.18)] transition-shadow duration-500"
        >
          <div className="aspect-[4/5] overflow-hidden">
            <img
              src={assetUrl(institute.image)}
              alt={institute.name}
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/30 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-cream">
            <h3 className="font-display text-xl md:text-2xl mb-2 group-hover:text-terracotta transition-colors">
              {institute.name}
            </h3>
            <p className="text-cream/70 text-sm leading-relaxed line-clamp-2">{institute.tagline}</p>
          </div>
        </Link>
      </TiltCard>
    </motion.div>
  )
}
