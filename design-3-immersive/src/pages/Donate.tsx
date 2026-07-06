import { motion } from 'framer-motion'
import { donateContent } from '@shared/content'
import { useReducedMotion } from '../hooks/useReducedMotion'
import CinematicButton from '../components/ui/CinematicButton'

export default function Donate() {
  const reduced = useReducedMotion()

  return (
    <div className="pt-28 pb-28 md:pb-36">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <p className="text-gold/70 text-[11px] uppercase tracking-[0.25em] mb-5">Make a Difference</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-mist mb-8">{donateContent.title}</h1>
          <p className="text-mist/50 text-base md:text-lg leading-[1.85] mb-16 md:mb-24 max-w-2xl mx-auto">{donateContent.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gold/10 mb-16 md:mb-24">
          {donateContent.impact.map((item, i) => (
            <motion.button
              key={item.amount}
              initial={reduced ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-night p-10 md:p-14 text-left group hover:bg-night-light transition-colors"
            >
              <p className="text-3xl md:text-4xl font-semibold tracking-tight text-gold mb-4 group-hover:scale-105 transition-transform inline-block motion-reduce:transform-none">
                {item.amount}
              </p>
              <p className="text-mist/40 text-sm leading-[1.85]">{item.description}</p>
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={reduced ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="border border-gold/20 p-12 md:p-16 grain-overlay relative"
        >
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-mist mb-5">Make a Custom Donation</h2>
          <p className="text-mist/40 text-sm leading-[1.85] mb-10 max-w-md mx-auto">
            Every contribution helps us reach more children and create sustainable livelihoods.
          </p>
          <CinematicButton variant="primary" size="lg">
            Donate Now (POC)
          </CinematicButton>
        </motion.div>
      </div>
    </div>
  )
}
