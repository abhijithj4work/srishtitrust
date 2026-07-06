import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import CinematicButton from '../components/ui/CinematicButton'
import Hero from '../components/Hero'
import OpeningSequence from '../components/OpeningSequence'
import AnimatedCounters from '../components/AnimatedCounters'
import ScrollScrubbedSection from '../components/ScrollScrubbedSection'
import InstituteCards from '../components/InstituteCards'
import ProductCard from '../components/ProductCard'
import {
  institutes, whoWeAre, makingADifference, artisanSpotlight,
  institutesIntro, womenEmpowerment, sustainability, donateContent,
} from '@shared/content'
import { products } from '@shared/products'
import { assetUrl } from '@shared/assetUrl'
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

      <ScrollScrubbedSection backgroundImage={assetUrl('assets/plantation.jpg')}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-28 md:py-40">
          <motion.div
            initial={reduced ? false : { opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="text-gold/80 text-[11px] uppercase tracking-[0.25em] mb-6">{whoWeAre.title}</p>
            <p className="text-2xl md:text-3xl text-mist leading-[1.4] font-semibold tracking-tight mb-6">
              {whoWeAre.content.split('.')[0]}.
            </p>
            <p className="text-mist/50 text-sm md:text-base leading-[1.85] mb-10">{whoWeAre.content}</p>
            <CinematicButton to="/journey" variant="outline" size="sm">
              {whoWeAre.cta} →
            </CinematicButton>
          </motion.div>
        </div>
      </ScrollScrubbedSection>

      <section className="py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-16 md:mb-20">
          <p className="text-gold/70 text-[11px] uppercase tracking-[0.25em] mb-4">{makingADifference.subtitle}</p>
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-mist">{makingADifference.title}</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-px bg-gold/10 max-w-7xl mx-auto">
          {makingADifference.pillars.map((pillar, i) => (
            <motion.div
              key={pillar.title}
              initial={reduced ? false : { opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-night px-8 py-12 md:px-12 md:py-16"
            >
              <span className="text-gold/30 text-sm font-medium">0{i + 1}</span>
              <h3 className="text-lg font-semibold tracking-tight text-mist mt-5 mb-4">{pillar.title}</h3>
              <p className="text-mist/45 text-sm leading-[1.8]">{pillar.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="max-w-3xl mx-auto px-6 mt-20 md:mt-28 text-center">
          <blockquote className="text-lg md:text-xl text-mist/70 leading-[1.7] font-light italic">
            &ldquo;{makingADifference.quote.text}&rdquo;
          </blockquote>
          <cite className="text-gold/70 text-[11px] uppercase tracking-[0.15em] mt-8 block not-italic">
            — {makingADifference.quote.author}
          </cite>
        </div>
      </section>

      <section className="py-28 md:py-36 border-y border-gold/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-14 md:mb-16">
          <p className="text-gold/70 text-[11px] uppercase tracking-[0.25em] mb-4">{institutesIntro.title}</p>
          <p className="text-mist/45 text-sm md:text-base max-w-2xl leading-[1.85]">{institutesIntro.description}</p>
        </div>
        <InstituteCards institutes={institutes} />
        <div className="text-center mt-14">
          <CinematicButton to="/institutes" variant="outline" size="md">
            View all institutes
          </CinematicButton>
        </div>
      </section>

      <ScrollScrubbedSection backgroundImage={assetUrl('assets/institute-aranya.jpg')} minHeight="min-h-[70vh]">
        <div className="max-w-3xl mx-auto px-6 py-24 md:py-32 text-center">
          <p className="text-gold/70 text-[11px] uppercase tracking-[0.25em] mb-8">{artisanSpotlight.title}</p>
          <blockquote className="text-xl md:text-2xl text-mist leading-[1.6] font-light mb-10">
            &ldquo;{artisanSpotlight.quote}&rdquo;
          </blockquote>
          <p className="text-gold text-sm font-medium">{artisanSpotlight.name}</p>
          <p className="text-mist/40 text-sm mt-2">{artisanSpotlight.bio}</p>
        </div>
      </ScrollScrubbedSection>

      <section className="py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-8 md:gap-12">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-10 md:p-14 border border-gold/10">
            <p className="text-gold/70 text-[11px] uppercase tracking-[0.2em] mb-5">{womenEmpowerment.title}</p>
            <p className="text-mist/55 text-sm leading-[1.85] mb-4">{womenEmpowerment.content}</p>
            <p className="text-mist/40 text-sm leading-[1.85] italic">{womenEmpowerment.story}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-10 md:p-14 bg-night-light border border-gold/10">
            <p className="text-gold/70 text-[11px] uppercase tracking-[0.2em] mb-5">Sustainability</p>
            <p className="text-mist/55 text-sm leading-[1.85] mb-6">{sustainability.intro}</p>
            <p className="text-mist/40 text-xs leading-[1.85]">{sustainability.award}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-28 md:py-36 border-t border-gold/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
            <div>
              <p className="text-gold/70 text-[11px] uppercase tracking-[0.25em] mb-4">Store</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-mist">Shop handmade</h2>
            </div>
            <CinematicButton to="/shop" variant="outline" size="sm">
              View all →
            </CinematicButton>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {products.slice(0, 4).map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-gold text-night text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-[11px] uppercase tracking-[0.2em] text-night/50 mb-5">Support</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">{donateContent.title}</h2>
          <p className="text-night/60 text-sm leading-relaxed mb-10">{donateContent.subtitle}</p>
          <CinematicButton to="/donate" variant="secondary" size="lg">
            Donate now
          </CinematicButton>
        </div>
      </section>
    </>
  )
}
