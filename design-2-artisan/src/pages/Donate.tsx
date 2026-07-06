import { motion } from 'framer-motion'
import { donateContent } from '@shared/content'
import CinematicButton from '../components/ui/CinematicButton'

export default function Donate() {
  return (
    <div className="pt-28 pb-28 md:pb-36">
      <div className="max-w-4xl mx-auto px-6 lg:px-10 text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
          <p className="text-[11px] tracking-[0.2em] uppercase text-warm-gray mb-5">Give Back</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8">{donateContent.title}</h1>
          <p className="text-warm-gray text-base md:text-lg leading-[1.85] mb-16 md:mb-20 max-w-2xl mx-auto">{donateContent.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-20">
          {donateContent.impact.map((item, i) => (
            <motion.button
              key={item.amount}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl p-10 md:p-12 border border-sand/50 hover:border-terracotta hover:shadow-lg transition-all text-left group"
            >
              <p className="text-2xl md:text-3xl font-semibold tracking-tight text-terracotta mb-3 group-hover:scale-105 transition-transform inline-block">
                {item.amount}
              </p>
              <p className="text-warm-gray text-sm leading-[1.85]">{item.description}</p>
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-olive text-cream rounded-3xl p-12 md:p-16"
        >
          <h2 className="text-2xl font-semibold tracking-tight mb-5">Make a Custom Donation</h2>
          <p className="text-cream/70 text-sm leading-[1.85] mb-8 max-w-md mx-auto">Every contribution helps us reach more children and create sustainable livelihoods.</p>
          <CinematicButton variant="accent" size="lg">
            Donate Now (POC)
          </CinematicButton>
        </motion.div>
      </div>
    </div>
  )
}
