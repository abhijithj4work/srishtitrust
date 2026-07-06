import { motion } from 'framer-motion'
import { donateContent } from '@shared/content'
import CinematicButton from '../components/ui/CinematicButton'

export default function Donate() {
  return (
    <div className="page-top page-bottom">
      <div className="max-w-4xl mx-auto container-pad text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
          <p className="eyebrow text-gold/70 mb-6">Give Back</p>
          <h1 className="display-section font-semibold text-mist mb-8">{donateContent.title}</h1>
          <p className="body-lg text-mist/45 mb-20 max-w-2xl mx-auto">{donateContent.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-20">
          {donateContent.impact.map((item, i) => (
            <motion.button
              key={item.amount}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.12 }}
              className="bg-night-light rounded-3xl p-12 md:p-16 border border-gold/15 hover:border-gold hover:shadow-lg transition-all text-left group"
            >
              <p className="text-3xl md:text-4xl font-semibold tracking-tight text-gold mb-4 group-hover:scale-105 transition-transform inline-block">
                {item.amount}
              </p>
              <p className="body-lg text-mist/45">{item.description}</p>
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="bg-night-light border border-gold/25 text-mist rounded-3xl p-12 md:p-16"
        >
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Make a Custom Donation</h2>
          <p className="body-lg text-mist/55 mb-10 max-w-md mx-auto">Every contribution helps us reach more children and create sustainable livelihoods.</p>
          <CinematicButton variant="accent" size="lg">
            Donate Now (POC)
          </CinematicButton>
        </motion.div>
      </div>
    </div>
  )
}
