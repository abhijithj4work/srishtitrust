import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import {
  whoWeAre, makingADifference, institutes, artisanSpotlight,
  womenEmpowerment, sustainability, institutesIntro,
} from '@shared/content'
import { assetUrl } from '@shared/assetUrl'
import { products } from '@shared/products'
import { useCart } from '../context/CartContext'
import ProductCard from './ProductCard'
import CinematicButton from './ui/CinematicButton'
import TiltCard from './ui/TiltCard'
import Reveal from './ui/Reveal'

function SectionHeader({ label, title, description }: { label: string; title: string; description?: string }) {
  return (
    <div className="mb-12 md:mb-16 max-w-2xl">
      <p className="text-[11px] uppercase tracking-[0.2em] text-gold/70 mb-3">{label}</p>
      <h2 className="text-2xl md:text-4xl font-semibold tracking-tight text-mist leading-tight">{title}</h2>
      {description && <p className="text-mist/45 text-sm md:text-base mt-4 leading-relaxed">{description}</p>}
    </div>
  )
}

export default function BentoGrid() {
  const { addItem } = useCart()

  return (
    <div className="bg-night">
      <section className="py-24 md:py-32 border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <Reveal>
              <SectionHeader label="About" title={whoWeAre.title} />
              <p className="text-mist/55 text-base leading-[1.8] mb-8">{whoWeAre.content}</p>
              <CinematicButton to="/journey" variant="outline" size="sm">
                {whoWeAre.cta} →
              </CinematicButton>
            </Reveal>
            <Reveal delay={0.1}>
              <TiltCard intensity={6}>
                <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-[0_16px_48px_rgba(0,0,0,0.4)] border border-gold/10">
                  <img src={assetUrl('assets/making-a-difference.jpg')} alt="Making a difference" className="w-full h-full object-cover" />
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-night-light">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <SectionHeader label={makingADifference.subtitle} title={makingADifference.title} />
          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {makingADifference.pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <div className="p-8 md:p-10 bg-night/60 backdrop-blur-xl border border-gold/15 rounded-xl hover:border-gold/30 transition-colors duration-500">
                  <span className="text-gold/50 text-sm font-medium">0{i + 1}</span>
                  <h3 className="text-lg font-semibold tracking-tight text-mist mt-4 mb-3">{pillar.title}</h3>
                  <p className="text-mist/45 text-sm leading-[1.75]">{pillar.description}</p>
                </div>
              </Reveal>
            ))}
          </div>
          <blockquote className="mt-16 md:mt-20 pt-12 border-t border-gold/10 max-w-3xl mx-auto text-center">
            <p className="text-lg md:text-xl text-mist/70 leading-relaxed font-light italic">
              &ldquo;{makingADifference.quote.text}&rdquo;
            </p>
            <cite className="text-[11px] uppercase tracking-[0.15em] text-gold/60 mt-6 block not-italic">
              — {makingADifference.quote.author}
            </cite>
          </blockquote>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <SectionHeader label="Welfare" title={institutesIntro.title} description={institutesIntro.highlight} />
            <CinematicButton to="/institutes" variant="outline" size="sm">
              View all →
            </CinematicButton>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {institutes.map((inst, i) => (
              <Reveal key={inst.slug} delay={i * 0.05}>
                <TiltCard intensity={7}>
                  <Link to={`/institutes/${inst.slug}`} className="block group">
                    <div className="aspect-[3/4] overflow-hidden mb-4 rounded-xl border border-gold/10 shadow-[0_12px_40px_rgba(0,0,0,0.3)] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.45)] transition-all duration-500">
                      <img src={assetUrl(inst.image)} alt={inst.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <h3 className="text-sm font-semibold tracking-tight text-mist group-hover:text-gold transition-colors">{inst.name}</h3>
                    <p className="text-mist/40 text-xs mt-1.5 leading-relaxed line-clamp-2">{inst.tagline}</p>
                  </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32 bg-night-light border-y border-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <Reveal className="lg:col-span-5">
              <TiltCard intensity={8}>
                <img src={assetUrl('assets/artisan-james.jpg')} alt={artisanSpotlight.name} className="w-full aspect-[4/5] object-cover rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.5)] border border-gold/10" />
              </TiltCard>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-7 lg:pl-8">
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold/70 mb-6">{artisanSpotlight.title}</p>
              <blockquote className="text-xl md:text-2xl text-mist leading-[1.6] font-light mb-8">
                &ldquo;{artisanSpotlight.quote}&rdquo;
              </blockquote>
              <p className="text-sm font-medium text-gold">{artisanSpotlight.name}</p>
              <p className="text-mist/40 text-sm mt-2 leading-relaxed">{artisanSpotlight.bio}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-12 lg:gap-16">
          <Reveal>
            <TiltCard intensity={6}>
              <div className="p-10 md:p-12 border border-gold/15 rounded-2xl bg-night-light/60 backdrop-blur-sm hover:border-gold/30 transition-colors duration-500 h-full">
                <p className="text-[11px] uppercase tracking-[0.2em] text-gold/70 mb-4">{womenEmpowerment.title}</p>
                <p className="text-mist/55 text-sm leading-[1.8] mb-4">{womenEmpowerment.content}</p>
                <p className="text-mist/40 text-sm leading-[1.8] italic">{womenEmpowerment.story}</p>
              </div>
            </TiltCard>
          </Reveal>
          <Reveal delay={0.1}>
            <TiltCard intensity={6}>
              <div className="p-10 md:p-12 bg-night-light border border-gold/20 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.35)] hover:border-gold/35 transition-colors duration-500 h-full">
                <p className="text-[11px] uppercase tracking-[0.2em] text-gold/70 mb-4">Sustainability</p>
                <p className="text-mist/55 text-sm leading-[1.8] mb-6">{sustainability.intro}</p>
                <p className="text-mist/40 text-xs leading-[1.8]">{sustainability.award}</p>
              </div>
            </TiltCard>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32 border-t border-gold/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <SectionHeader label="Store" title="Shop handmade" description="Your purchases power education and livelihoods." />
            <CinematicButton to="/shop" variant="outline" size="sm">
              View all products →
            </CinematicButton>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {products.slice(0, 4).map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
          <Reveal>
            <motion.div
              whileHover={{ rotateX: 2, scale: 1.01 }}
              style={{ transformPerspective: 1200 }}
              className="mt-16 md:mt-20 p-10 md:p-14 bg-night-light border border-gold/20 rounded-2xl flex flex-col md:flex-row md:items-center md:justify-between gap-8 shadow-[0_20px_60px_rgba(0,0,0,0.4)] grain-overlay relative"
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

      <section className="py-20 md:py-24 border-t border-gold/10">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <Reveal>
            <div className="p-12 md:p-16 rounded-2xl bg-night-light border border-gold/20 shadow-[0_20px_60px_rgba(0,0,0,0.4)] grain-overlay relative">
              <p className="text-gold/70 text-[11px] uppercase tracking-[0.2em] mb-4">Support us</p>
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-mist mb-4">Help us reach more lives</h2>
              <p className="text-mist/45 text-sm mb-8 leading-relaxed">Your donations expand our programs and create more sustainable livelihoods in Munnar.</p>
              <CinematicButton to="/donate" variant="primary">
                Make a donation
              </CinematicButton>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
