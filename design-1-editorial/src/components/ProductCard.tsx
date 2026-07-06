import { assetUrl } from '@shared/assetUrl'
import { motion } from 'framer-motion'
import type { Product } from '@shared/products'
import { formatPrice } from '@shared/products'
import { useCart } from '../context/CartContext'
import TiltCard from './ui/TiltCard'
import CinematicButton from './ui/CinematicButton'

interface Props {
  product: Product
  index?: number
  layout?: 'horizontal' | 'vertical'
}

export default function ProductCard({ product, index = 0, layout = 'horizontal' }: Props) {
  const { addItem } = useCart()

  if (layout === 'vertical') {
    return (
      <motion.div
        initial={{ opacity: 0, y: 40, rotateX: 8 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ delay: index * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{ transformPerspective: 1200 }}
      >
        <TiltCard intensity={8}>
          <article className="group">
            <div className="aspect-[4/5] overflow-hidden bg-linen/40 mb-4 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
              <img
                src={assetUrl(product.image)}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <p className="text-[10px] uppercase tracking-[0.2em] text-stone mb-1.5 font-medium">{product.institute}</p>
            <h3 className="text-sm font-semibold text-charcoal mb-1 tracking-tight">{product.name}</h3>
            <p className="text-sm font-semibold text-forest mb-4">{formatPrice(product.price)}</p>
            <CinematicButton variant="primary" size="sm" onClick={() => addItem(product)} fullWidth>
              Add to cart
            </CinematicButton>
          </article>
        </TiltCard>
      </motion.div>
    )
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 40, rotateX: 6 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ delay: index * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformPerspective: 1200 }}
      className="group grid grid-cols-1 md:grid-cols-12 gap-10 items-center py-14 border-b border-linen/80 last:border-0"
    >
      <div className="md:col-span-5">
        <TiltCard intensity={6}>
          <div className="aspect-[4/5] bg-linen/30 overflow-hidden shadow-[0_16px_48px_rgba(0,0,0,0.1)]">
            <img
              src={assetUrl(product.image)}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
          </div>
        </TiltCard>
      </div>

      <div className="md:col-span-7 md:pl-8">
        <p className="text-[11px] uppercase tracking-[0.2em] text-stone mb-4 font-medium">
          {product.category} · {product.institute}
        </p>
        <h3 className="text-2xl md:text-3xl font-bold text-charcoal mb-4 tracking-tight leading-tight">
          {product.name}
        </h3>
        <p className="text-charcoal/55 text-sm leading-relaxed mb-6 max-w-md">
          {product.description}
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <p className="text-xl font-bold text-charcoal">{formatPrice(product.price)}</p>
          <CinematicButton variant="primary" size="md" onClick={() => addItem(product)}>
            Add to cart
          </CinematicButton>
        </div>
      </div>
    </motion.article>
  )
}
