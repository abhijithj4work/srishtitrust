import { useState, useCallback } from 'react'
import Hero from '../components/Hero'
import ImpactStats from '../components/ImpactStats'
import BentoGrid from '../components/BentoGrid'
import IntroSplash from '../components/IntroSplash'

export default function Home() {
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === 'undefined') return true
    return !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  })
  const handleIntroComplete = useCallback(() => setShowIntro(false), [])

  return (
    <>
      {showIntro && <IntroSplash onComplete={handleIntroComplete} />}
      <Hero />
      <ImpactStats />
      <BentoGrid />
    </>
  )
}
