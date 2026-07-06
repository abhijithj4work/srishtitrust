import { products } from '@shared/products'
import ProductCard from '../components/ProductCard'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Reveal from '../components/ui/Reveal'

const categories = ['All', ...new Set(products.map(p => p.category))]

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('All')
  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <div className="page-shell page-end">
      <div className="max-w-7xl mx-auto container-pad">
        <Reveal className="mb-20 pb-12 border-b border-charcoal/8">
          <p className="eyebrow text-stone mb-6">Store</p>
          <h1 className="display-section font-bold text-charcoal mb-6">Shop handmade</h1>
          <p className="body-lg text-stone max-w-lg">
            Every purchase supports education and sustainable livelihoods in Munnar.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="flex flex-wrap gap-3 mb-16 md:mb-20">
          {categories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 text-sm font-semibold rounded-xl tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-forest text-cream'
                  : 'text-charcoal/45 hover:text-forest border border-charcoal/10 hover:border-sage/40 hover:bg-white'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </Reveal>

        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-20"
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
