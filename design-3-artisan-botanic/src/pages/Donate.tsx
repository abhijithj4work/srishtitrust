import { motion } from 'framer-motion'
import { donateContent } from '@shared/content'
import CinematicButton from '../components/ui/CinematicButton'

export default function Donate() {
  return (
    <div className="page-shell page-end">
      <div className="max-w-2xl mx-auto container-pad text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
          <p className="eyebrow text-stone mb-6">Give Back</p>
          <h1 className="display-section font-semibold mb-8">{donateContent.title}</h1>
          <p className="body-lg text-stone mb-16 max-w-2xl mx-auto">{donateContent.subtitle}</p>
        </motion.div>

        <div className="space-y-12">
          {donateContent.impact.map((item, i) => (
            <motion.button
              key={item.amount}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              className="w-full bg-linen/60 rounded-3xl card-pad border border-linen hover:border-sage/50 hover:shadow-lg transition-all text-left group"
            >
              <p className="text-3xl md:text-4xl font-semibold tracking-tight text-forest mb-4 group-hover:scale-105 transition-transform inline-block">
                {item.amount}
              </p>
              <p className="body-lg text-stone">{item.description}</p>
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-moss text-cream rounded-3xl card-pad mt-12 mb-24"
        >
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Make a Custom Donation</h2>
          <p className="body-lg text-cream/70 mb-10 max-w-md mx-auto">Every contribution helps us reach more children and create sustainable livelihoods.</p>
          <CinematicButton variant="accent" size="lg">
            Donate Now (POC)
          </CinematicButton>
        </motion.div>
      </div>
    </div>
  )
}
