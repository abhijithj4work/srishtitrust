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
        <Reveal className="mb-20 pb-12 border-b border-gold/10">
          <p className="eyebrow text-gold/70 mb-6">Store</p>
          <h1 className="display-section font-bold text-mist mb-6">Shop handmade</h1>
          <p className="body-lg text-mist/45 max-w-lg">
            Every purchase supports education and sustainable livelihoods in Munnar.
          </p>
        </Reveal>

        <Reveal delay={0.12} className="flex flex-wrap gap-3 mb-16 md:mb-20">
          {categories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 text-sm font-semibold rounded-full tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold text-night shadow-[0_3px_0_#8a7030,0_6px_20px_rgba(201,168,76,0.25)]'
                  : 'text-mist/45 hover:text-mist border border-gold/15 hover:border-gold/30 hover:bg-night-light'
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
            className="flex flex-col gap-16"
          >
            {filtered.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} variant="row" />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
