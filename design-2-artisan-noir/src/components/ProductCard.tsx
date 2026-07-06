import { assetUrl } from '@shared/assetUrl'
import { motion } from 'framer-motion'
import type { Product } from '@shared/products'
import { formatPrice } from '@shared/products'
import { useCart } from '../context/CartContext'
import CinematicButton from './ui/CinematicButton'

interface Props {
  product: Product
  index?: number
  variant?: 'grid' | 'row'
  reverse?: boolean
}

export default function ProductCard({ product, index = 0, variant = 'grid', reverse = false }: Props) {
  const { addItem } = useCart()

  if (variant === 'row') {
    const isReversed = reverse || index % 2 === 1

    return (
      <motion.article
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ delay: index * 0.08, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className={`group flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center w-full`}
      >
        <div className="w-full lg:w-1/2 aspect-[16/10] overflow-hidden border border-gold/15 bg-night-light">
          <img
            src={assetUrl(product.image)}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
        </div>

        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <p className="eyebrow text-warm-gray text-xs mb-3">{product.institute}</p>
          <h3 className="text-2xl md:text-3xl font-semibold text-mist mb-4 tracking-tight">{product.name}</h3>
          <p className="body-lg text-mist/45 mb-6 line-clamp-3">{product.description}</p>
          <p className="text-2xl font-semibold text-gold mb-8">{formatPrice(product.price)}</p>
          <div className="flex items-center gap-4">
            <CinematicButton variant="accent" size="md" onClick={() => addItem(product)}>
              Add to cart
            </CinematicButton>
            {product.colors && (
              <div className="flex gap-2">
                {product.colors.map(color => (
                  <span
                    key={color}
                    className="w-4 h-4 rounded-full border border-gold/15 bg-night-light"
                    title={color}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </motion.article>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ delay: index * 0.12, duration: 1.0, ease: [0.22, 1, 0.36, 1] }}
    >
      <article className="group relative">
        <div className="relative aspect-[4/5] overflow-hidden bg-night-light mb-5 border border-gold/10">
          <img
            src={assetUrl(product.image)}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-night/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
            <CinematicButton variant="accent" size="sm" onClick={() => addItem(product)} fullWidth>
              Quick Add
            </CinematicButton>
          </div>
        </div>

        <p className="eyebrow text-warm-gray text-xs mb-2">{product.institute}</p>
        <h3 className="text-base font-semibold text-mist mb-2 tracking-tight leading-snug">{product.name}</h3>
        <p className="text-base font-medium text-gold">{formatPrice(product.price)}</p>

        {product.colors && (
          <div className="flex gap-2 mt-4">
            {product.colors.map(color => (
              <span
                key={color}
                className="w-4 h-4 rounded-full border border-gold/15 bg-night-light shadow-inner"
                title={color}
              />
            ))}
          </div>
        )}
      </article>
    </motion.div>
  )
}
