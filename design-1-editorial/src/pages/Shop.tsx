import { useState } from 'react'
import { products } from '@shared/products'
import ProductCard from '../components/ProductCard'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from '../components/ui/Reveal'

const categories = ['All', ...new Set(products.map(p => p.category))]

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <div className="pt-28 pb-28 md:pb-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <Reveal className="mb-14 md:mb-20 pb-10 border-b border-charcoal/8 max-w-xl">
          <p className="text-[11px] uppercase tracking-[0.25em] text-stone mb-4 font-medium">Store</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-charcoal mb-4">
            Handmade with purpose
          </h1>
          <p className="text-charcoal/55 text-sm md:text-base leading-relaxed">
            Your purchases power education and livelihoods across Munnar&apos;s plantation communities.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-wrap gap-2 mb-12 md:mb-16">
          {categories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 text-[13px] font-semibold rounded-full transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-forest text-cream shadow-[0_3px_0_#1e3328,0_6px_20px_rgba(47,79,62,0.25)]'
                  : 'text-charcoal/45 hover:text-charcoal border border-charcoal/10 hover:border-forest/30'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </Reveal>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-0"
          >
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
