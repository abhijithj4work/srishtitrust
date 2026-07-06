import { institutes, institutesIntro } from '@shared/content'
import HorizontalInstitutes from '../components/HorizontalInstitutes'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

export default function Institutes() {
  return (
    <div className="pt-28 pb-28 md:pb-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-20 md:mb-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-stone mb-5">Eight Institutes</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-charcoal mb-8 leading-tight">
            {institutesIntro.title}
          </h1>
          <p className="text-charcoal/60 leading-[1.85] text-base md:text-lg">{institutesIntro.description}</p>
        </motion.div>
      </div>

      <HorizontalInstitutes showHeader={false} />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-28 md:mt-36">
        <p className="text-[11px] tracking-[0.2em] uppercase text-stone mb-12">Full Index</p>
        <div className="grid grid-cols-1 md:grid-cols-2">
          {institutes.map((inst, i) => (
            <motion.div
              key={inst.slug}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link
                to={`/institutes/${inst.slug}`}
                className="group flex items-baseline justify-between py-7 border-t border-linen hover:pl-4 transition-all duration-300"
              >
                <div>
                  <span className="text-[10px] tracking-[0.2em] uppercase text-stone mr-6">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-lg font-medium text-charcoal group-hover:text-forest transition-colors">
                    {inst.name}
                  </span>
                </div>
                <span className="text-stone text-sm opacity-0 group-hover:opacity-100 transition-opacity">
                  →
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
