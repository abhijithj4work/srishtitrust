import { useEffect, useRef } from 'react'
import { motion, useInView, useSpring, useTransform } from 'framer-motion'
import { impactStats } from '@shared/content'

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const spring = useSpring(0, { stiffness: 60, damping: 18, mass: 1.2 })

  useEffect(() => {
    if (isInView) spring.set(value)
  }, [isInView, value, spring])

  const display = useTransform(spring, v => `${Math.round(v)}${suffix}`)

  return <motion.span ref={ref}>{display}</motion.span>
}

export default function ImpactStats() {
  return (
    <section className="section-pad bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto container-pad">
        <p className="eyebrow text-cream/40 text-center mb-16 md:mb-20">
          Impact at a glance
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {impactStats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 24, scale: 0.92 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, type: 'spring', stiffness: 80, damping: 18 }}
              className="text-center lg:text-left border-l border-cream/10 pl-8 first:border-0 first:pl-0"
            >
              <p className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight mb-3">
                <Counter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="eyebrow text-cream/45 text-xs">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
