import { useRef, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, useMotionValue, animate } from 'framer-motion'
import { institutes, institutesIntro } from '@shared/content'
import { assetUrl } from '@shared/assetUrl'
import CinematicButton from './ui/CinematicButton'

export default function HorizontalInstitutes({ showHeader = true }: { showHeader?: boolean }) {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const trackRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const [constraints, setConstraints] = useState({ left: 0, right: 0 })

  useEffect(() => {
    const updateConstraints = () => {
      if (!wrapperRef.current || !trackRef.current) return
      const diff = trackRef.current.scrollWidth - wrapperRef.current.offsetWidth
      setConstraints({ left: -Math.max(diff, 0), right: 0 })
    }
    updateConstraints()
    window.addEventListener('resize', updateConstraints)
    return () => window.removeEventListener('resize', updateConstraints)
  }, [])

  const handleDragEnd = () => {
    const cardWidth = 396
    const currentX = x.get()
    const snapIndex = Math.round(-currentX / cardWidth)
    const targetX = Math.max(constraints.left, Math.min(0, -snapIndex * cardWidth))
    animate(x, targetX, { type: 'spring', stiffness: 300, damping: 30 })
  }

  return (
    <section className="py-28 md:py-36 bg-linen/30 overflow-hidden">
      {showHeader && (
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mb-16 md:mb-20">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8">
            <div>
              <p className="text-[11px] tracking-[0.2em] uppercase text-stone mb-4">
                Welfare Institutes
              </p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-charcoal max-w-lg">
                {institutesIntro.title}
              </h2>
            </div>
            <p className="text-ink/60 text-sm max-w-md leading-relaxed font-light lg:text-right">
              {institutesIntro.highlight}
            </p>
          </div>
        </div>
      )}

      <div ref={wrapperRef} className="overflow-hidden">
        <motion.div
          ref={trackRef}
          className="flex gap-6 px-8 lg:px-16 cursor-grab active:cursor-grabbing snap-x-mandatory"
          style={{ x }}
          drag="x"
          dragConstraints={constraints}
          dragElastic={0.05}
          onDragEnd={handleDragEnd}
        >
          {institutes.map((institute, i) => (
            <Link
              key={institute.slug}
              to={`/institutes/${institute.slug}`}
              className="flex-shrink-0 w-[340px] md:w-[380px] snap-start group"
              draggable={false}
            >
              <article className="bg-cream border border-linen/80 hover:border-forest/20 transition-all duration-500">
                <div className="aspect-[3/4] overflow-hidden">
                  <img
                    src={assetUrl(institute.image)}
                    alt={institute.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
                <div className="p-8">
                  <p className="text-[10px] tracking-[0.25em] uppercase text-stone mb-3">
                    {String(i + 1).padStart(2, '0')}
                  </p>
                  <h3 className="text-xl font-semibold tracking-tight text-charcoal mb-3 group-hover:text-forest transition-colors">
                    {institute.name}
                  </h3>
                  <p className="text-ink/50 text-sm leading-relaxed font-light line-clamp-2">
                    {institute.tagline}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </motion.div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 mt-12">
        <CinematicButton to="/institutes" variant="outline" size="sm">
          View all institutes →
        </CinematicButton>
      </div>
    </section>
  )
}
