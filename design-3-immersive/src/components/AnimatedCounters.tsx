import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { impactStats } from '@shared/content'
import { useReducedMotion } from '../hooks/useReducedMotion'

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-50px' })
  const reduced = useReducedMotion()
  const [count, setCount] = useState(reduced ? value : 0)

  useEffect(() => {
    if (!inView || reduced) {
      setCount(value)
      return
    }

    let start = 0
    const duration = 2000
    const startTime = performance.now()

    const tick = (now: number) => {
      const elapsed = now - startTime
      const progress = Math.min(elapsed / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      start = Math.round(eased * value)
      setCount(start)
      if (progress < 1) requestAnimationFrame(tick)
    }

    requestAnimationFrame(tick)
  }, [inView, value, reduced])

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  )
}

export default function AnimatedCounters() {
  const reduced = useReducedMotion()

  return (
    <section className="py-24 md:py-32 border-y border-gold/10 grain-overlay">
      <div className="max-w-7xl mx-auto px-6">
        <motion.p
          initial={reduced ? false : { opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-gold text-xs uppercase tracking-[0.4em] text-center mb-16"
        >
          Our Impact
        </motion.p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12">
          {impactStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={reduced ? false : { opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="text-center lg:text-left border-l border-gold/15 pl-6 first:border-0 first:pl-0"
            >
              <p className="font-display text-5xl md:text-6xl text-gold-gradient mb-3">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-mist/50 text-xs uppercase tracking-[0.2em]">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
