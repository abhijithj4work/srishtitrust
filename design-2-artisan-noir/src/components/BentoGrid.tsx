import { Link } from 'react-router-dom'
import {
  whoWeAre, makingADifference, institutes, artisanSpotlight,
  womenEmpowerment, sustainability, institutesIntro,
} from '@shared/content'
import { assetUrl } from '@shared/assetUrl'
import { products } from '@shared/products'
import ProductCard from './ProductCard'
import CinematicButton from './ui/CinematicButton'
import Reveal from './ui/Reveal'

function SectionHeader({ label, title, description }: { label: string; title: string; description?: string }) {
  return (
    <div className="mb-12 md:mb-16 max-w-2xl">
      <p className="eyebrow text-gold/70 mb-6">{label}</p>
      <h2 className="display-section font-semibold text-mist">{title}</h2>
      {description && <p className="body-lg text-mist/45 mt-6">{description}</p>}
    </div>
  )
}

const pillarImages = [
  'assets/making-a-difference.jpg',
  'assets/institute-dare.jpg',
  'assets/institute-aranya.jpg',
]

export default function BentoGrid() {
  const pillars = makingADifference.pillars

  return (
    <div className="bg-night">
      {/* About — alternating row */}
      <section className="section-pad border-t border-gold/10">
        <div className="max-w-7xl mx-auto container-pad">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <Reveal className="lg:w-1/2">
              <SectionHeader label="About" title={whoWeAre.title} />
              <p className="text-mist/55 text-base leading-[1.8] mb-8">{whoWeAre.content}</p>
              <CinematicButton to="/journey" variant="outline" size="sm">
                {whoWeAre.cta} →
              </CinematicButton>
            </Reveal>
            <Reveal delay={0.1} className="lg:w-1/2 w-full">
              <div className="aspect-[4/3] overflow-hidden border border-gold/15 shadow-[0_16px_48px_rgba(0,0,0,0.4)]">
                <img src={assetUrl('assets/making-a-difference.jpg')} alt="Making a difference" className="w-full h-full object-cover ken-burns" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pillars — vertical chapter stack */}
      <section className="section-pad bg-night-light border-y border-gold/10">
        <div className="max-w-7xl mx-auto container-pad">
          <SectionHeader label={makingADifference.subtitle} title={makingADifference.title} />

          <div className="space-y-20 md:space-y-28">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.1}>
                <div className={`flex flex-col ${i % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-10 lg:gap-16`}>
                  <div className="lg:w-1/2 w-full">
                    <div className="aspect-[16/10] overflow-hidden border border-gold/15">
                      <img src={assetUrl(pillarImages[i])} alt={pillar.title} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="lg:w-1/2">
                    <span className="eyebrow text-gold text-xs">0{i + 1}</span>
                    <h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-mist mt-5 mb-5">{pillar.title}</h3>
                    <p className="body-lg text-mist/45">{pillar.description}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.24}>
            <blockquote className="mt-20 md:mt-28 max-w-3xl mx-auto text-center border border-gold/20 p-12 md:p-16">
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

      {/* Institutes preview */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto container-pad">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <SectionHeader label="Welfare" title={institutesIntro.title} description={institutesIntro.highlight} />
            <CinematicButton to="/institutes" variant="outline" size="sm">View all →</CinematicButton>
          </div>
          <div className="space-y-12">
            {institutes.slice(0, 3).map((inst, i) => (
              <Reveal key={inst.slug} delay={i * 0.1}>
                <Link to={`/institutes/${inst.slug}`} className="group flex flex-col lg:flex-row items-center gap-8 lg:gap-12 border border-gold/10 hover:border-gold/30 transition-colors duration-500">
                  <div className="lg:w-3/5 w-full aspect-[16/9] lg:aspect-auto lg:h-64 overflow-hidden">
                    <img src={assetUrl(inst.image)} alt={inst.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <div className="lg:w-2/5 p-8 lg:p-0 lg:pr-8">
                    <h3 className="text-xl md:text-2xl font-semibold tracking-tight text-mist group-hover:text-gold transition-colors">{inst.name}</h3>
                    <p className="text-mist/45 text-sm mt-3 leading-relaxed">{inst.tagline}</p>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Artisan spotlight — alternating row */}
      <section className="section-pad bg-night-light border-y border-gold/10 grain-overlay">
        <div className="max-w-7xl mx-auto container-pad relative z-10">
          <div className="flex flex-col lg:flex-row-reverse items-center gap-12 lg:gap-20">
            <Reveal className="lg:w-2/5 w-full">
              <img src={assetUrl('assets/artisan-james.jpg')} alt={artisanSpotlight.name} className="w-full aspect-[4/5] object-cover border border-gold/15 shadow-[0_20px_60px_rgba(0,0,0,0.5)]" />
            </Reveal>
            <Reveal delay={0.1} className="lg:w-3/5">
              <p className="eyebrow text-gold/70 mb-8">{artisanSpotlight.title}</p>
              <blockquote className="text-2xl md:text-3xl leading-[1.6] font-light text-mist mb-10">&ldquo;{artisanSpotlight.quote}&rdquo;</blockquote>
              <p className="text-base font-medium text-gold">{artisanSpotlight.name}</p>
              <p className="text-mist/45 body-lg mt-3">{artisanSpotlight.bio}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Women empowerment & sustainability — stacked chapters */}
      <section className="section-pad">
        <div className="max-w-7xl mx-auto container-pad space-y-20">
          <Reveal>
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 border border-gold/15 card-pad">
              <div className="lg:w-1/2">
                <p className="eyebrow text-gold/70 mb-6">{womenEmpowerment.title}</p>
                <p className="body-lg text-mist/55 mb-5">{womenEmpowerment.content}</p>
                <p className="body-lg text-mist/40 italic">{womenEmpowerment.story}</p>
              </div>
              <div className="lg:w-1/2 w-full aspect-[16/10] overflow-hidden border border-gold/10">
                <img src={assetUrl('assets/institute-disha.jpg')} alt="Women empowerment" className="w-full h-full object-cover" />
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16 border border-gold/15 card-pad">
              <div className="lg:w-1/2">
                <p className="eyebrow text-gold/70 mb-6">Sustainability</p>
                <p className="body-lg text-mist/55 mb-6">{sustainability.intro}</p>
                <p className="text-sm leading-[1.85] text-mist/40">{sustainability.award}</p>
              </div>
              <div className="lg:w-1/2 w-full aspect-[16/10] overflow-hidden border border-gold/10">
                <img src={assetUrl('assets/institute-aranya.jpg')} alt="Sustainability" className="w-full h-full object-cover" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Shop preview — 2 large featured rows */}
      <section className="section-pad border-t border-gold/10 bg-night-light">
        <div className="max-w-7xl mx-auto container-pad">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-16">
            <SectionHeader label="Store" title="Shop handmade" description="Your purchases power education and livelihoods." />
            <CinematicButton to="/shop" variant="outline" size="sm">View all products →</CinematicButton>
          </div>
          <div className="space-y-16">
            {products.slice(0, 2).map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} variant="row" />
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — gold-bordered panel */}
      <section className="section-pad border-t border-gold/10">
        <div className="max-w-3xl mx-auto container-pad">
          <Reveal>
            <div className="border border-gold/30 card-pad text-center">
              <p className="eyebrow text-gold/70 mb-6">Support us</p>
              <h2 className="display-section font-semibold text-mist mb-6">Help us reach more lives</h2>
              <p className="body-lg text-mist/45 mb-10">Your donations expand our programs and create more sustainable livelihoods in Munnar.</p>
              <CinematicButton to="/donate" variant="primary">Make a donation</CinematicButton>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
