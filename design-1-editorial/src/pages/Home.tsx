import Hero from '../components/Hero'
import ScrollStory from '../components/ScrollStory'
import ImpactStats from '../components/ImpactStats'
import HorizontalInstitutes from '../components/HorizontalInstitutes'
import ProductCard from '../components/ProductCard'
import CinematicButton from '../components/ui/CinematicButton'
import Reveal from '../components/ui/Reveal'
import TiltCard from '../components/ui/TiltCard'
import { products } from '@shared/products'
import { motion } from 'framer-motion'
import { womenEmpowerment, sustainability, artisanSpotlight, donateContent } from '@shared/content'
import { assetUrl } from '@shared/assetUrl'

export default function Home() {
  const featured = products.slice(0, 3)

  return (
    <>
      <Hero />
      <ScrollStory />
      <ImpactStats />
      <HorizontalInstitutes />

      <section className="py-28 md:py-36 bg-cream">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <Reveal className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 md:mb-20">
            <div className="max-w-xl">
              <p className="text-[11px] tracking-[0.2em] uppercase text-stone mb-4">The Collection</p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-charcoal">Handmade with purpose</h2>
            </div>
            <CinematicButton to="/shop" variant="outline" size="sm">
              View all products →
            </CinematicButton>
          </Reveal>
          <div className="space-y-0">
            {featured.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36 bg-linen/40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <Reveal className="lg:col-span-5">
              <TiltCard intensity={6}>
                <img src={assetUrl('assets/artisan-james.jpg')} alt={artisanSpotlight.name} className="w-full aspect-[4/5] object-cover shadow-[0_20px_60px_rgba(0,0,0,0.12)]" />
              </TiltCard>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-7 lg:pl-8">
              <p className="text-[11px] tracking-[0.2em] uppercase text-stone mb-6">{artisanSpotlight.title}</p>
              <blockquote className="text-xl md:text-2xl text-charcoal leading-[1.6] font-light mb-8">
                &ldquo;{artisanSpotlight.quote}&rdquo;
              </blockquote>
              <p className="text-sm font-semibold">{artisanSpotlight.name}</p>
              <p className="text-stone text-sm mt-2 leading-relaxed">{artisanSpotlight.bio}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-28 md:py-36">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-8 lg:gap-12">
          <Reveal>
            <motion.div whileHover={{ rotateX: 2, rotateY: -2 }} style={{ transformPerspective: 1000 }} className="p-10 md:p-14 border border-linen bg-white shadow-[0_12px_40px_rgba(0,0,0,0.04)]">
              <p className="text-[11px] tracking-[0.2em] uppercase text-stone mb-5">{womenEmpowerment.title}</p>
              <p className="text-charcoal/65 text-sm leading-[1.85] mb-4">{womenEmpowerment.content}</p>
              <p className="text-charcoal/50 text-sm leading-[1.85] italic">{womenEmpowerment.story}</p>
            </motion.div>
          </Reveal>
          <Reveal delay={0.1}>
            <motion.div whileHover={{ rotateX: 2, rotateY: 2 }} style={{ transformPerspective: 1000 }} className="p-10 md:p-14 bg-forest text-cream shadow-[0_16px_48px_rgba(47,79,62,0.25)]">
              <p className="text-[11px] tracking-[0.2em] uppercase text-cream/50 mb-5">Sustainability</p>
              <p className="text-sm leading-[1.85] text-cream/80 mb-6">{sustainability.intro}</p>
              <p className="text-xs leading-[1.85] text-cream/55">{sustainability.award}</p>
            </motion.div>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-charcoal text-cream text-center grain-overlay">
        <Reveal className="max-w-2xl mx-auto px-6">
          <p className="text-[11px] tracking-[0.2em] uppercase text-cream/40 mb-5">Support</p>
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight mb-4">{donateContent.title}</h2>
          <p className="text-cream/55 text-sm leading-relaxed mb-10">{donateContent.subtitle}</p>
          <CinematicButton to="/donate" variant="accent" size="lg">
            Make a donation
          </CinematicButton>
        </Reveal>
      </section>
    </>
  )
}
