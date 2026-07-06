import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { impactStats } from '@shared/content'

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (!isInView) return
    const duration = 2000
    const steps = 60
    const increment = value / steps
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= value) { setCount(value); clearInterval(timer) }
      else setCount(Math.floor(current))
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isInView, value])

  return <span ref={ref}>{count}{suffix}</span>
}

export default function ImpactStats() {
  return (
    <section className="py-20 md:py-28 bg-forest text-cream grain-overlay">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
        <p className="text-[11px] uppercase tracking-[0.2em] text-sage/80 text-center mb-12 md:mb-16">Impact at a glance</p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 md:gap-16">
          {impactStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="text-center lg:text-left border-l border-cream/15 pl-6 lg:first:border-0 lg:first:pl-0"
            >
              <p className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="text-[11px] uppercase tracking-[0.15em] text-cream/50">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
