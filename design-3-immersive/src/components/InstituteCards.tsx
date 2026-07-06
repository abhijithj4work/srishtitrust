import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import type { Institute } from '@shared/content'
import { assetUrl } from '@shared/assetUrl'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface InstituteCardsProps {
  institutes: Institute[]
  showAll?: boolean
}

export default function InstituteCards({ institutes, showAll = false }: InstituteCardsProps) {
  const reduced = useReducedMotion()
  const displayed = showAll ? institutes : institutes.slice(0, 4)

  return (
    <div className="space-y-1">
      {displayed.map((institute, i) => (
        <motion.div
          key={institute.slug}
          initial={reduced ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.8, delay: i * 0.05 }}
          className="group relative h-[50vh] min-h-[320px] overflow-hidden"
        >
          <img
            src={assetUrl(institute.image)}
            alt={institute.name}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 motion-reduce:transition-none"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-night via-night/60 to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />
          <div className="absolute inset-0 bg-gradient-to-t from-night via-transparent to-transparent" />

          <div className="relative z-10 h-full flex flex-col justify-end p-8 md:p-16 max-w-7xl mx-auto">
            <p className="text-gold text-xs uppercase tracking-[0.3em] mb-3 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 motion-reduce:opacity-100 motion-reduce:translate-y-0">
              0{i + 1} — Institute
            </p>
            <h3 className="font-display text-3xl md:text-5xl text-mist mb-3">{institute.name}</h3>
            <p className="text-mist/50 max-w-lg text-sm md:text-base leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-32 transition-all duration-500 overflow-hidden motion-reduce:opacity-100 motion-reduce:max-h-32">
              {institute.tagline}
            </p>
            <Link
              to={`/institutes/${institute.slug}`}
              className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-widest mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 motion-reduce:opacity-100"
            >
              Explore
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
