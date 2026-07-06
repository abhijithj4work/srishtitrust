import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { whoWeAre, makingADifference, artisanSpotlight } from '@shared/content'
import { assetUrl } from '@shared/assetUrl'

const panels = [
  {
    label: '01 — Origins',
    title: whoWeAre.title,
    body: whoWeAre.content,
    image: "assets/plantation.jpg",
    align: 'left' as const,
  },
  {
    label: '02 — Education',
    title: makingADifference.pillars[0].title,
    body: makingADifference.pillars[0].description,
    image: "assets/institute-aranya.jpg",
    align: 'right' as const,
  },
  {
    label: '03 — Empowerment',
    title: makingADifference.pillars[1].title,
    body: makingADifference.pillars[1].description,
    image: "assets/women-empowerment.jpg",
    align: 'left' as const,
  },
  {
    label: '04 — Livelihoods',
    title: artisanSpotlight.sectionTitle,
    body: artisanSpotlight.sectionContent,
    image: "assets/artisan-james.jpg",
    align: 'right' as const,
  },
]

function StoryPanel({
  panel,
  index,
}: {
  panel: (typeof panels)[number]
  index: number
}) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })

  const imageX = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    panel.align === 'left' ? ['8%', '0%', '-8%'] : ['-8%', '0%', '8%']
  )
  const textOpacity = useTransform(scrollYProgress, [0.15, 0.35, 0.65, 0.85], [0, 1, 1, 0])
  const textY = useTransform(scrollYProgress, [0.15, 0.35, 0.65, 0.85], [40, 0, 0, -40])

  return (
    <section
      ref={ref}
      className="relative min-h-screen flex items-center py-32"
    >
      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 w-full">
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center ${
            panel.align === 'right' ? 'lg:direction-rtl' : ''
          }`}
        >
          <motion.div
            style={{ x: imageX }}
            className={`lg:col-span-7 overflow-hidden ${
              panel.align === 'right' ? 'lg:order-2' : 'lg:order-1'
            }`}
          >
            <div className="aspect-[4/5] lg:aspect-[5/6] relative overflow-hidden">
              <img
                src={assetUrl(panel.image)}
                alt={panel.title}
                className="w-full h-full object-cover ken-burns"
              />
              <div className="absolute inset-0 bg-forest/5" />
            </div>
          </motion.div>

          <motion.div
            style={{ opacity: textOpacity, y: textY }}
            className={`lg:col-span-5 ${
              panel.align === 'right' ? 'lg:order-1 lg:pr-12' : 'lg:order-2 lg:pl-12'
            }`}
          >
            <p className="text-[11px] tracking-[0.25em] uppercase text-stone mb-6">
              {panel.label}
            </p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-charcoal mb-8 leading-tight">
              {panel.title}
            </h2>
            <p className="text-ink/70 text-base leading-[1.8] font-light">
              {panel.body}
            </p>
            {index === 0 && (
              <p className="mt-10 text-[11px] tracking-[0.2em] uppercase text-forest">
                Scroll to continue →
              </p>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default function ScrollStory() {
  return (
    <div className="bg-cream">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-28 md:pt-36 pb-12 md:pb-16">
        <p className="text-[11px] tracking-[0.2em] uppercase text-stone mb-5">Our Story</p>
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-charcoal max-w-xl">
          A narrative of care, craft &amp; community
        </h2>
      </div>

      {panels.map((panel, i) => (
        <StoryPanel key={panel.label} panel={panel} index={i} />
      ))}

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-28 md:py-36 border-t border-linen">
        <blockquote className="max-w-2xl mx-auto text-center">
          <p className="text-xl md:text-2xl text-charcoal/80 italic leading-[1.7] font-light mb-8">
            &ldquo;{makingADifference.quote.text}&rdquo;
          </p>
          <cite className="text-[11px] tracking-[0.2em] uppercase text-stone not-italic">
            — {makingADifference.quote.author}
          </cite>
        </blockquote>
      </div>
    </div>
  )
}
