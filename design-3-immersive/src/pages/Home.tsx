import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import CinematicButton from '../components/ui/CinematicButton'
import Reveal from '../components/ui/Reveal'
import TiltCard from '../components/ui/TiltCard'
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
import { useCart } from '../context/CartContext'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function Home() {
  const reduced = useReducedMotion()
  const { addItem } = useCart()
  const [showOpening, setShowOpening] = useState(!reduced)
  const handleOpeningComplete = useCallback(() => setShowOpening(false), [])

  return (
    <>
      {showOpening && <OpeningSequence onComplete={handleOpeningComplete} />}

      <Hero />
      <AnimatedCounters />

      <ScrollScrubbedSection backgroundImage={assetUrl('assets/plantation.jpg')}>
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-28 md:py-40">
          <Reveal>
            <div className="max-w-2xl">
              <p className="text-gold/80 text-[11px] uppercase tracking-[0.25em] mb-6">{whoWeAre.title}</p>
              <p className="text-2xl md:text-3xl text-mist leading-[1.4] font-semibold tracking-tight mb-6">
                {whoWeAre.content.split('.')[0]}.
              </p>
              <p className="text-mist/50 text-sm md:text-base leading-[1.85] mb-10">{whoWeAre.content}</p>
              <CinematicButton to="/journey" variant="outline" size="sm">
                {whoWeAre.cta} →
              </CinematicButton>
            </div>
          </Reveal>
        </div>
      </ScrollScrubbedSection>

      <section className="py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-16 md:mb-20">
          <Reveal>
            <p className="text-gold/70 text-[11px] uppercase tracking-[0.25em] mb-4">{makingADifference.subtitle}</p>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-mist">{makingADifference.title}</h2>
          </Reveal>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid md:grid-cols-3 gap-5 md:gap-6">
          {makingADifference.pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 0.08}>
              <div className="bg-night-light/80 backdrop-blur-xl border border-gold/15 rounded-xl p-8 md:p-10 hover:border-gold/30 transition-colors duration-500">
                <span className="text-gold/40 text-sm font-medium">0{i + 1}</span>
                <h3 className="text-lg font-semibold tracking-tight text-mist mt-5 mb-4">{pillar.title}</h3>
                <p className="text-mist/45 text-sm leading-[1.8]">{pillar.description}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="max-w-3xl mx-auto px-6 mt-20 md:mt-28 text-center">
          <Reveal>
            <blockquote className="text-lg md:text-xl text-mist/70 leading-[1.7] font-light italic">
              &ldquo;{makingADifference.quote.text}&rdquo;
            </blockquote>
            <cite className="text-gold/70 text-[11px] uppercase tracking-[0.15em] mt-8 block not-italic">
              — {makingADifference.quote.author}
            </cite>
          </Reveal>
        </div>
      </section>

      <section className="py-28 md:py-36 border-y border-gold/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 mb-14 md:mb-16">
          <Reveal>
            <p className="text-gold/70 text-[11px] uppercase tracking-[0.25em] mb-4">{institutesIntro.title}</p>
            <p className="text-mist/45 text-sm md:text-base max-w-2xl leading-[1.85]">{institutesIntro.description}</p>
          </Reveal>
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
          <Reveal>
            <p className="text-gold/70 text-[11px] uppercase tracking-[0.25em] mb-8">{artisanSpotlight.title}</p>
            <blockquote className="text-xl md:text-2xl text-mist leading-[1.6] font-light mb-10">
              &ldquo;{artisanSpotlight.quote}&rdquo;
            </blockquote>
            <p className="text-gold text-sm font-medium">{artisanSpotlight.name}</p>
            <p className="text-mist/40 text-sm mt-2">{artisanSpotlight.bio}</p>
          </Reveal>
        </div>
      </ScrollScrubbedSection>

      <section className="py-28 md:py-36">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-8 md:gap-12">
          <Reveal>
            <TiltCard intensity={6}>
              <div className="p-10 md:p-14 border border-gold/15 rounded-2xl bg-night-light/60 backdrop-blur-sm hover:border-gold/30 transition-colors duration-500">
                <p className="text-gold/70 text-[11px] uppercase tracking-[0.2em] mb-5">{womenEmpowerment.title}</p>
                <p className="text-mist/55 text-sm leading-[1.85] mb-4">{womenEmpowerment.content}</p>
                <p className="text-mist/40 text-sm leading-[1.85] italic">{womenEmpowerment.story}</p>
              </div>
            </TiltCard>
          </Reveal>
          <Reveal delay={0.1}>
            <TiltCard intensity={6}>
              <div className="p-10 md:p-14 bg-night-light border border-gold/20 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.3)] hover:border-gold/35 transition-colors duration-500">
                <p className="text-gold/70 text-[11px] uppercase tracking-[0.2em] mb-5">Sustainability</p>
                <p className="text-mist/55 text-sm leading-[1.85] mb-6">{sustainability.intro}</p>
                <p className="text-mist/40 text-xs leading-[1.85]">{sustainability.award}</p>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      <section className="py-28 md:py-36 border-t border-gold/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
            <Reveal>
              <p className="text-gold/70 text-[11px] uppercase tracking-[0.25em] mb-4">Store</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-mist">Shop handmade</h2>
            </Reveal>
            <CinematicButton to="/shop" variant="outline" size="sm">
              View all →
            </CinematicButton>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {products.slice(0, 4).map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>

          <Reveal>
            <motion.div
              whileHover={reduced ? {} : { rotateX: 2, scale: 1.01 }}
              style={{ transformPerspective: 1200 }}
              className="mt-16 md:mt-20 p-10 md:p-14 bg-night-light border border-gold/20 rounded-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-8 shadow-[0_20px_60px_rgba(0,0,0,0.35)] grain-overlay relative"
            >
              <div>
                <p className="text-gold/60 text-[11px] uppercase tracking-[0.2em] mb-2">Featured</p>
                <h3 className="text-xl font-semibold tracking-tight text-mist">{products[4].name}</h3>
                <p className="text-mist/45 text-sm mt-2">{products[4].institute}</p>
              </div>
              <div className="flex items-center gap-6">
                <p className="text-2xl font-bold text-gold">Rs. 2,500</p>
                <CinematicButton variant="primary" size="md" onClick={() => addItem(products[4])}>
                  Quick Add
                </CinematicButton>
              </div>
            </motion.div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32 border-t border-gold/8">
        <div className="max-w-3xl mx-auto px-6">
          <Reveal>
            <div className="text-center p-12 md:p-16 rounded-2xl bg-night-light border border-gold/20 shadow-[0_20px_60px_rgba(0,0,0,0.4)] grain-overlay relative">
              <p className="text-gold/70 text-[11px] uppercase tracking-[0.2em] mb-5">Support</p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-mist mb-4">{donateContent.title}</h2>
              <p className="text-mist/45 text-sm leading-relaxed mb-10">{donateContent.subtitle}</p>
              <CinematicButton to="/donate" variant="primary" size="lg">
                Donate now
              </CinematicButton>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
