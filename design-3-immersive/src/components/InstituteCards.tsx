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
            <motion.p
              initial={reduced ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: 0.1 + i * 0.05, duration: 0.6 }}
              className="text-gold text-xs uppercase tracking-[0.3em] mb-3"
            >
              0{i + 1} — Institute
            </motion.p>
            <motion.h3
              initial={reduced ? false : { opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: 0.15 + i * 0.05, duration: 0.7 }}
              className="font-display text-3xl md:text-5xl text-mist mb-3"
            >
              {institute.name}
            </motion.h3>
            <motion.p
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: 0.2 + i * 0.05, duration: 0.7 }}
              className="text-mist/50 max-w-lg text-sm md:text-base leading-relaxed"
            >
              {institute.tagline}
            </motion.p>
            <motion.div
              initial={reduced ? false : { opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: 0.25 + i * 0.05, duration: 0.6 }}
            >
              <Link
                to={`/institutes/${institute.slug}`}
                className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-widest mt-6 hover:gap-3 transition-all duration-300"
              >
                Explore
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
