import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { products } from '@shared/products'
import ProductCard from '../components/ProductCard'
import { useReducedMotion } from '../hooks/useReducedMotion'
import Reveal from '../components/ui/Reveal'

const categories = ['All', ...new Set(products.map(p => p.category))]

export default function Shop() {
  const [activeCategory, setActiveCategory] = useState('All')
  const reduced = useReducedMotion()
  const filtered = activeCategory === 'All'
    ? products
    : products.filter(p => p.category === activeCategory)

  return (
    <div className="pt-28 pb-28 md:pb-36 grain-overlay">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="mb-14 md:mb-20 pb-10 border-b border-gold/10 max-w-xl">
          <p className="text-gold/70 text-[11px] uppercase tracking-[0.25em] mb-4 font-semibold">Store</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-mist mb-4">Shop handmade</h1>
          <p className="text-mist/45 text-sm md:text-base leading-relaxed">
            Every purchase supports education and sustainable livelihoods.
          </p>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-wrap gap-2 mb-12 md:mb-16">
          {categories.map(cat => (
            <motion.button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              whileTap={reduced ? {} : { scale: 0.95 }}
              className={`px-5 py-2 text-[13px] font-semibold tracking-wide transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-gold text-night shadow-[0_3px_0_#a68a42,0_6px_20px_rgba(212,175,90,0.25)]'
                  : 'text-mist/40 hover:text-mist border border-mist/10 hover:border-gold/30'
              }`}
            >
              {cat}
            </motion.button>
          ))}
        </Reveal>

        <AnimatePresence mode="popLayout">
          <motion.div
            key={activeCategory}
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={reduced ? {} : { opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12"
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
