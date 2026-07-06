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
}

export default function ProductCard({ product, index = 0 }: Props) {
  const { addItem } = useCart()

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, rotateX: 8 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.06, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformPerspective: 1200 }}
    >
      <TiltCard intensity={8}>
        <article className="group relative">
          <div className="relative aspect-[4/5] overflow-hidden bg-sand/30 mb-4 shadow-[0_12px_40px_rgba(0,0,0,0.08)]">
            <img
              src={assetUrl(product.image)}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
              <CinematicButton
                variant="accent"
                onClick={() => addItem(product)}
                className="w-full !py-2.5 !text-xs"
              >
                Quick Add
              </CinematicButton>
            </div>
          </div>

          <p className="text-[10px] text-warm-gray uppercase tracking-[0.2em] mb-1.5 font-medium">{product.institute}</p>
          <h3 className="text-sm font-semibold text-charcoal mb-1 tracking-tight leading-snug">{product.name}</h3>
          <p className="text-sm font-medium text-gold">{formatPrice(product.price)}</p>

          {product.colors && (
            <div className="flex gap-2 mt-3">
              {product.colors.map(color => (
                <span
                  key={color}
                  className="w-3.5 h-3.5 rounded-full border border-charcoal/10 bg-sand shadow-inner"
                  title={color}
                />
              ))}
            </div>
          )}
        </article>
      </TiltCard>
    </motion.div>
  )
}
