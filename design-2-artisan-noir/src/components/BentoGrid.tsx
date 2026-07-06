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
    <div className="mb-16 md:mb-20 max-w-2xl">
      <p className="eyebrow text-gold/70 mb-6">{label}</p>
      <h2 className="display-section font-semibold text-mist">{title}</h2>
      {description && <p className="body-lg text-mist/45 mt-6">{description}</p>}
    </div>
  )
}

export default function BentoGrid() {
  const { addItem } = useCart()
  const pillars = makingADifference.pillars

  return (
    <div className="bg-night">
      <section className="section-pad border-t border-gold/10">
        <div className="max-w-7xl mx-auto container-pad">
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
                <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-gold/15 shadow-[0_16px_48px_rgba(0,0,0,0.4)]">
                  <img src={assetUrl('assets/making-a-difference.jpg')} alt="Making a difference" className="w-full h-full object-cover ken-burns" />
                </div>
              </TiltCard>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad bg-night-light">
        <div className="max-w-7xl mx-auto container-pad">
          <SectionHeader label={makingADifference.subtitle} title={makingADifference.title} />
          <div className="grid md:grid-cols-12 gap-6 md:gap-8">
            <Reveal className="md:col-span-7">
              <div className="h-full min-h-[320px] p-10 md:p-14 border border-gold/15 bg-night/60 rounded-2xl shadow-[0_8px_32px_rgba(0,0,0,0.35)] hover:border-gold/30 transition-colors duration-500">
                <span className="eyebrow text-gold text-xs">01</span>
                <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-mist mt-5 mb-5">{pillars[0].title}</h3>
                <p className="body-lg text-mist/45 max-w-lg">{pillars[0].description}</p>
              </div>
            </Reveal>
            <div className="md:col-span-5 flex flex-col gap-6 md:gap-8">
              {pillars.slice(1).map((pillar, i) => (
                <Reveal key={pillar.title} delay={(i + 1) * 0.12}>
                  <div className="p-10 md:p-14 border border-gold/15 bg-night/60 rounded-2xl flex-1 hover:border-gold/30 transition-colors duration-500">
                    <span className="eyebrow text-gold text-xs">0{i + 2}</span>
                    <h3 className="text-xl font-semibold tracking-tight text-mist mt-5 mb-4">{pillar.title}</h3>
                    <p className="body-lg text-mist/45">{pillar.description}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.24}>
            <blockquote className="mt-20 md:mt-24 max-w-3xl mx-auto text-center bg-night/60 backdrop-blur-xl rounded-3xl p-12 md:p-16 shadow-[0_8px_32px_rgba(0,0,0,0.35)] border border-gold/15">
              <p className="text-xl md:text-2xl text-mist/80 leading-relaxed font-light italic">
                &ldquo;{makingADifference.quote.text}&rdquo;
              </p>
              <cite className="eyebrow text-gold/60 mt-8 block not-italic text-xs">
                — {makingADifference.quote.author}
              </cite>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <section className="section-pad">
        <div className="max-w-7xl mx-auto container-pad">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <SectionHeader label="Welfare" title={institutesIntro.title} description={institutesIntro.highlight} />
            <CinematicButton to="/institutes" variant="outline" size="sm">View all →</CinematicButton>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
            {institutes.map((inst, i) => (
              <Reveal key={inst.slug} delay={i * 0.12}>
                <TiltCard intensity={10}>
                  <Link to={`/institutes/${inst.slug}`} className="block group">
                    <div className="aspect-[3/4] overflow-hidden mb-5 rounded-2xl border border-gold/10 shadow-[0_12px_40px_rgba(0,0,0,0.35)] group-hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500">
                      <img src={assetUrl(inst.image)} alt={inst.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    </div>
                    <h3 className="text-base md:text-lg font-semibold tracking-tight text-mist group-hover:text-gold transition-colors">{inst.name}</h3>
                    <p className="text-mist/45 text-sm mt-3 leading-relaxed line-clamp-2">{inst.tagline}</p>
                  </Link>
                </TiltCard>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad bg-night-light border-y border-gold/10 grain-overlay">
        <div className="max-w-7xl mx-auto container-pad relative z-10">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <Reveal className="lg:col-span-5">
              <TiltCard intensity={8}>
                <img src={assetUrl('assets/artisan-james.jpg')} alt={artisanSpotlight.name} className="w-full aspect-[4/5] object-cover rounded-2xl border border-gold/15 shadow-[0_20px_60px_rgba(0,0,0,0.5)]" />
              </TiltCard>
            </Reveal>
            <Reveal delay={0.1} className="lg:col-span-7 lg:pl-8">
              <p className="eyebrow text-gold/70 mb-8">{artisanSpotlight.title}</p>
              <blockquote className="text-2xl md:text-3xl leading-[1.6] font-light text-mist mb-10">&ldquo;{artisanSpotlight.quote}&rdquo;</blockquote>
              <p className="text-base font-medium text-gold">{artisanSpotlight.name}</p>
              <p className="text-mist/45 body-lg mt-3">{artisanSpotlight.bio}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section-pad">
        <div className="max-w-7xl mx-auto container-pad grid lg:grid-cols-2 gap-12 lg:gap-16">
          <Reveal>
            <motion.div whileHover={{ rotateX: 2, scale: 1.01 }} style={{ transformPerspective: 1200 }} className="p-10 md:p-14 border border-gold/15 rounded-2xl bg-night-light/60 backdrop-blur-sm hover:border-gold/30 transition-colors duration-500 h-full">
              <p className="eyebrow text-gold/70 mb-6">{womenEmpowerment.title}</p>
              <p className="body-lg text-mist/55 mb-5">{womenEmpowerment.content}</p>
              <p className="body-lg text-mist/40 italic">{womenEmpowerment.story}</p>
            </motion.div>
          </Reveal>
          <Reveal delay={0.1}>
            <motion.div whileHover={{ rotateX: 2, scale: 1.01 }} style={{ transformPerspective: 1200 }} className="p-10 md:p-14 bg-night-light border border-gold/25 rounded-2xl shadow-[0_12px_40px_rgba(0,0,0,0.4)] hover:border-gold/40 transition-colors duration-500 h-full">
              <p className="eyebrow text-gold/70 mb-6">Sustainability</p>
              <p className="body-lg text-mist/55 mb-6">{sustainability.intro}</p>
              <p className="text-sm leading-[1.85] text-mist/40">{sustainability.award}</p>
            </motion.div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad border-t border-gold/10">
        <div className="max-w-7xl mx-auto container-pad">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <SectionHeader label="Store" title="Shop handmade" description="Your purchases power education and livelihoods." />
            <CinematicButton to="/shop" variant="outline" size="sm">View all products →</CinematicButton>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 md:gap-8">
            {products.slice(0, 4).map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
          <Reveal>
            <div className="relative overflow-hidden rounded-2xl mt-16 md:mt-20 border border-gold/20 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <img src={assetUrl(products[4].image)} alt="" className="absolute inset-0 w-full h-full object-cover ken-burns scale-110" aria-hidden />
              <div className="absolute inset-0 bg-night/90" />
              <motion.div
                whileHover={{ rotateX: 1, scale: 1.005 }}
                style={{ transformPerspective: 1200 }}
                className="relative z-10 p-10 md:p-14 text-mist flex flex-col md:flex-row md:items-center md:justify-between gap-8"
              >
                <div>
                  <p className="eyebrow text-gold/60 mb-2">Featured</p>
                  <h3 className="text-xl font-semibold tracking-tight">{products[4].name}</h3>
                  <p className="text-mist/45 text-sm mt-2">{products[4].institute}</p>
                </div>
                <div className="flex items-center gap-6">
                  <p className="text-2xl font-bold text-gold">Rs. 2,500</p>
                  <CinematicButton variant="accent" size="md" onClick={() => addItem(products[4])}>Quick Add</CinematicButton>
                </div>
              </motion.div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section-pad border-t border-gold/10">
        <div className="max-w-3xl mx-auto container-pad text-center">
          <Reveal>
            <p className="eyebrow text-gold/70 mb-6">Support us</p>
            <h2 className="display-section font-semibold text-mist mb-6">Help us reach more lives</h2>
            <p className="body-lg text-mist/45 mb-10">Your donations expand our programs and create more sustainable livelihoods in Munnar.</p>
            <CinematicButton to="/donate" variant="primary">Make a donation</CinematicButton>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
