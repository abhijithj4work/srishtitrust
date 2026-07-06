import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { Institute } from '@shared/content'
import { assetUrl } from '@shared/assetUrl'

interface Props {
  institute: Institute
  index?: number
}

export default function InstituteCard({ institute, index = 0 }: Props) {
  const isReversed = index % 2 === 1

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08 }}
    >
      <Link
        to={`/institutes/${institute.slug}`}
        className={`group flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch gap-0 border border-gold/15 hover:border-gold/35 transition-colors duration-500 overflow-hidden`}
      >
        <div className="w-full lg:w-[60%] aspect-[16/10] lg:aspect-auto lg:min-h-[280px] overflow-hidden">
          <img
            src={assetUrl(institute.image)}
            alt={institute.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
        </div>
        <div className="w-full lg:w-[40%] flex flex-col justify-center p-8 lg:p-12 bg-night-light/40">
          <h3 className="font-display text-2xl md:text-3xl mb-4 group-hover:text-gold transition-colors">
            {institute.name}
          </h3>
          <p className="text-mist/55 text-sm md:text-base leading-relaxed mb-4">{institute.tagline}</p>
          <p className="text-mist/35 text-sm leading-relaxed line-clamp-3">{institute.description}</p>
          <span className="eyebrow text-gold/60 text-xs mt-6 group-hover:text-gold transition-colors">
            Learn more →
          </span>
        </div>
      </Link>
    </motion.div>
  )
}
