import { useEffect, useCallback } from 'react'
import { motion } from 'framer-motion'

interface Props {
  onComplete: () => void
}

export default function IntroSplash({ onComplete }: Props) {
  const finish = useCallback(() => onComplete(), [onComplete])

  useEffect(() => {
    const timer = setTimeout(finish, 2200)
    return () => clearTimeout(timer)
  }, [finish])

  return (
    <motion.div
      className="fixed inset-0 z-[100] bg-night flex items-center justify-center cursor-pointer grain-overlay"
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      transition={{ delay: 1.6, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      onClick={finish}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.92, filter: 'blur(8px)' }}
        animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="text-center relative z-10"
      >
        <p className="text-gold text-[11px] uppercase tracking-[0.5em] mb-6">Srishti Trust</p>
        <h1 className="text-4xl md:text-5xl font-bold text-mist tracking-tight">Craft with purpose</h1>
        <p className="text-mist/30 text-[10px] uppercase tracking-[0.3em] mt-8">Tap to enter</p>
      </motion.div>
    </motion.div>
  )
}
