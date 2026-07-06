import { motion, AnimatePresence } from 'framer-motion'
import { useEffect, useState } from 'react'
import { useReducedMotion } from '../hooks/useReducedMotion'

interface OpeningSequenceProps {
  onComplete: () => void
}

export default function OpeningSequence({ onComplete }: OpeningSequenceProps) {
  const [phase, setPhase] = useState<'black' | 'logo' | 'lines' | 'done'>('black')
  const reduced = useReducedMotion()

  useEffect(() => {
    if (reduced) {
      onComplete()
      return
    }

    const timers = [
      setTimeout(() => setPhase('logo'), 600),
      setTimeout(() => setPhase('lines'), 1800),
      setTimeout(() => setPhase('done'), 4200),
      setTimeout(() => onComplete(), 4800),
    ]
    return () => timers.forEach(clearTimeout)
  }, [onComplete, reduced])

  if (reduced) return null

  return (
    <AnimatePresence>
      {phase !== 'done' && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center grain-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          <AnimatePresence mode="wait">
            {phase === 'logo' && (
              <motion.div
                key="logo"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="text-center"
              >
                <p className="font-display text-5xl md:text-7xl text-mist tracking-tight">
                  <span className="text-gold-gradient">Srishti</span>
                </p>
                <p className="text-mist/40 text-xs uppercase tracking-[0.5em] mt-4">Trust</p>
              </motion.div>
            )}

            {phase === 'lines' && (
              <motion.div
                key="lines"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-center px-8 max-w-3xl"
              >
                {['We Nurture Education', 'Foster Empowerment', 'Create Sustainable Livelihoods'].map((line, i) => (
                  <motion.p
                    key={line}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.5, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    className="font-display text-2xl md:text-4xl text-mist/90 mb-3"
                  >
                    {line}
                  </motion.p>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
