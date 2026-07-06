import { assetUrl } from '@shared/assetUrl'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import type { Product } from '@shared/products'
import { formatPrice } from '@shared/products'
import { useCart } from '../context/CartContext'
import { useReducedMotion } from '../hooks/useReducedMotion'
import TiltCard from './ui/TiltCard'
import CinematicButton from './ui/CinematicButton'

interface ProductCardProps {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const { addItem } = useCart()
  const reduced = useReducedMotion()

  const handleAdd = () => {
    addItem(product)
    setModalOpen(false)
  }

  return (
    <>
      <motion.div
        initial={reduced ? false : { opacity: 0, y: 40, rotateX: 10 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ delay: index * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformPerspective: 1200 }}
      >
        <TiltCard intensity={10}>
          <div
            className="group cursor-pointer"
            onClick={() => setModalOpen(true)}
            onKeyDown={e => e.key === 'Enter' && setModalOpen(true)}
            role="button"
            tabIndex={0}
          >
            <div className="relative aspect-[3/4] overflow-hidden bg-night-light mb-4 shadow-[0_16px_48px_rgba(0,0,0,0.4)] border border-gold/5">
              <img
                src={assetUrl(product.image)}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 motion-reduce:transition-none"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-night via-night/20 to-transparent opacity-70 group-hover:opacity-50 transition-opacity duration-500" />
              <div className="absolute bottom-4 left-4 right-4">
                <p className="text-gold text-[10px] uppercase tracking-[0.2em] mb-1 font-semibold">{product.category}</p>
                <p className="text-sm font-semibold text-mist">{product.name}</p>
              </div>
            </div>
            <div className="flex justify-between items-baseline">
              <p className="text-mist/40 text-xs">{product.institute}</p>
              <p className="text-gold text-sm font-semibold">{formatPrice(product.price)}</p>
            </div>
          </div>
        </TiltCard>
      </motion.div>

      <AnimatePresence>
        {modalOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/85 backdrop-blur-md z-[60]"
              onClick={() => setModalOpen(false)}
            />
            <motion.div
              initial={reduced ? false : { opacity: 0, scale: 0.9, rotateX: 8, y: 30 }}
              animate={{ opacity: 1, scale: 1, rotateX: 0, y: 0 }}
              exit={reduced ? { opacity: 0 } : { opacity: 0, scale: 0.95, rotateX: -4, y: 20 }}
              transition={{ type: 'spring', damping: 28, stiffness: 300 }}
              style={{ transformPerspective: 1400 }}
              className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl z-[70] bg-night-light border border-gold/20 grain-overlay overflow-hidden shadow-[0_32px_80px_rgba(0,0,0,0.6)]"
            >
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 z-10 p-2 text-mist/50 hover:text-gold transition-colors"
                aria-label="Close"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="grid md:grid-cols-2">
                <div className="aspect-square md:aspect-auto overflow-hidden">
                  <img src={assetUrl(product.image)} alt={product.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 md:p-10 flex flex-col justify-center">
                  <p className="text-gold text-[10px] uppercase tracking-[0.25em] mb-3 font-semibold">{product.institute}</p>
                  <h2 className="text-2xl md:text-3xl font-bold text-mist mb-4 tracking-tight">{product.name}</h2>
                  <p className="text-mist/50 text-sm leading-relaxed mb-6">{product.description}</p>

                  {product.colors && (
                    <div className="mb-6">
                      <p className="text-mist/30 text-[10px] uppercase tracking-[0.2em] mb-2">Colors</p>
                      <div className="flex flex-wrap gap-2">
                        {product.colors.map(c => (
                          <span key={c} className="px-3 py-1 border border-gold/20 text-mist/60 text-xs">
                            {c}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  <p className="text-2xl font-bold text-gold mb-8">{formatPrice(product.price)}</p>

                  <CinematicButton onClick={handleAdd} variant="primary" className="w-full">
                    Add to Cart
                  </CinematicButton>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
