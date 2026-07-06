import { useState, useCallback } from 'react'
import Hero from '../components/Hero'
import OpeningSequence from '../components/OpeningSequence'
import AnimatedCounters from '../components/AnimatedCounters'
import BentoGrid from '../components/BentoGrid'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function Home() {
  const reduced = useReducedMotion()
  const [showOpening, setShowOpening] = useState(!reduced)
  const handleOpeningComplete = useCallback(() => setShowOpening(false), [])

  return (
    <>
      {showOpening && <OpeningSequence onComplete={handleOpeningComplete} />}
      <Hero />
      <AnimatedCounters />
      <BentoGrid />
    </>
  )
}
