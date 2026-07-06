import { motion } from 'framer-motion'
import { donateContent } from '@shared/content'

export default function Donate() {
  return (
    <div className="pt-28 pb-28 md:pb-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl mb-20 md:mb-28"
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-stone mb-5">Give Back</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-charcoal leading-tight mb-8">
            {donateContent.title}
          </h1>
          <p className="text-charcoal/60 text-base md:text-lg leading-[1.85]">{donateContent.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 border-t border-linen">
          {donateContent.impact.map((item, i) => (
            <motion.button
              key={item.amount}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-left p-10 md:p-14 border-b border-linen md:odd:border-r hover:bg-linen/20 transition-colors duration-300 group"
            >
              <p className="text-3xl md:text-4xl font-semibold tracking-tight text-forest mb-4 group-hover:text-charcoal transition-colors">
                {item.amount}
              </p>
              <p className="text-charcoal/60 text-sm leading-[1.85]">{item.description}</p>
            </motion.button>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-20 md:mt-28 bg-forest text-cream p-14 md:p-20"
        >
          <div className="max-w-xl">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-6">Make a Custom Donation</h2>
            <p className="text-cream/60 leading-[1.85] mb-10">
              Every contribution helps us reach more children and create sustainable livelihoods across Munnar&apos;s plantation communities.
            </p>
            <button className="text-[11px] tracking-[0.2em] uppercase text-cream border-b border-cream/40 pb-1 hover:border-cream transition-colors">
              Donate Now (POC)
            </button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
