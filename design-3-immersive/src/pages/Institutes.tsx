import { motion } from 'framer-motion'
import { institutes, institutesIntro } from '@shared/content'
import InstituteCards from '../components/InstituteCards'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function Institutes() {
  const reduced = useReducedMotion()

  return (
    <div className="pt-28 pb-28 md:pb-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-16 md:mb-24">
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl"
        >
          <p className="text-gold/70 text-[11px] uppercase tracking-[0.25em] mb-5">Eight Welfare Institutes</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-mist mb-8">{institutesIntro.title}</h1>
          <p className="text-mist/50 leading-[1.85] text-base">{institutesIntro.description}</p>
          <p className="text-mist/60 text-sm italic mt-8 border-l-2 border-gold/30 pl-5 leading-[1.85]">
            {institutesIntro.highlight}
          </p>
        </motion.div>
      </div>

      <InstituteCards institutes={institutes} showAll />
    </div>
  )
}
