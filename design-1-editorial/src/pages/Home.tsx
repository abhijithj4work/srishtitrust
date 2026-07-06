import Hero from '../components/Hero'
import ScrollStory from '../components/ScrollStory'
import ImpactStats from '../components/ImpactStats'
import HorizontalInstitutes from '../components/HorizontalInstitutes'
import ProductCard from '../components/ProductCard'
import { products } from '@shared/products'
import { Link } from 'react-router-dom'
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

      {/* Shop */}
      <section className="py-28 md:py-36 bg-cream">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16 md:mb-20">
            <div className="max-w-xl">
              <p className="text-[11px] tracking-[0.2em] uppercase text-stone mb-4">The Collection</p>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-charcoal">Handmade with purpose</h2>
            </div>
            <Link to="/shop" className="text-sm font-medium text-forest shrink-0 border-b border-forest/30 pb-1 hover:border-forest">
              View all products →
            </Link>
          </div>
          <div className="space-y-0">
            {featured.map((product, i) => (
              <ProductCard key={product.id} product={product} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Artisan */}
      <section className="py-28 md:py-36 bg-linen/40">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-5">
              <img src={assetUrl('assets/artisan-james.jpg')} alt={artisanSpotlight.name} className="w-full aspect-[4/5] object-cover" />
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="lg:col-span-7 lg:pl-8">
              <p className="text-[11px] tracking-[0.2em] uppercase text-stone mb-6">{artisanSpotlight.title}</p>
              <blockquote className="text-xl md:text-2xl text-charcoal leading-[1.6] font-light mb-8">
                &ldquo;{artisanSpotlight.quote}&rdquo;
              </blockquote>
              <p className="text-sm font-medium">{artisanSpotlight.name}</p>
              <p className="text-stone text-sm mt-2 leading-relaxed">{artisanSpotlight.bio}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Women + Sustainability */}
      <section className="py-28 md:py-36">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 lg:gap-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-10 md:p-14 border border-linen">
            <p className="text-[11px] tracking-[0.2em] uppercase text-stone mb-5">{womenEmpowerment.title}</p>
            <p className="text-charcoal/65 text-sm leading-[1.85] mb-4">{womenEmpowerment.content}</p>
            <p className="text-charcoal/50 text-sm leading-[1.85] italic">{womenEmpowerment.story}</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="p-10 md:p-14 bg-forest text-cream">
            <p className="text-[11px] tracking-[0.2em] uppercase text-cream/50 mb-5">Sustainability</p>
            <p className="text-sm leading-[1.85] text-cream/80 mb-6">{sustainability.intro}</p>
            <p className="text-xs leading-[1.85] text-cream/55">{sustainability.award}</p>
          </motion.div>
        </div>
      </section>

      {/* Donate */}
      <section className="py-24 md:py-32 bg-charcoal text-cream text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-[11px] tracking-[0.2em] uppercase text-cream/40 mb-5">Support</p>
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">{donateContent.title}</h2>
          <p className="text-cream/55 text-sm leading-relaxed mb-10">{donateContent.subtitle}</p>
          <Link to="/donate" className="inline-flex px-8 py-3 bg-cream text-charcoal text-sm font-medium hover:bg-cream/90 transition-colors">
            Make a donation
          </Link>
        </div>
      </section>
    </>
  )
}
