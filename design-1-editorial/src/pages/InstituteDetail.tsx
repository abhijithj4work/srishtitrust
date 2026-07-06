import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { institutes } from '@shared/content'
import { assetUrl } from '@shared/assetUrl'
import { products } from '@shared/products'
import ProductCard from '../components/ProductCard'

export default function InstituteDetail() {
  const { slug } = useParams()
  const institute = institutes.find(i => i.slug === slug)

  if (!institute) {
    return (
      <div className="pt-36 pb-32 text-center">
        <h1 className="font-display text-3xl mb-6">Institute not found</h1>
        <Link to="/institutes" className="text-[11px] tracking-[0.2em] uppercase text-forest">
          ← All Institutes
        </Link>
      </div>
    )
  }

  const relatedProducts = products.filter(p =>
    p.institute.toLowerCase().includes(institute.name.split(' ')[0].toLowerCase()) ||
    institute.name.toLowerCase().includes(p.institute.split(' ')[0].toLowerCase())
  )

  return (
    <div className="pb-32">
      <div className="relative h-[60vh] min-h-[480px]">
        <img src={assetUrl(institute.image)} alt={institute.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-charcoal/10" />
        <div className="absolute bottom-0 left-0 right-0 max-w-[1400px] mx-auto px-8 lg:px-16 pb-16">
          <Link
            to="/institutes"
            className="text-[11px] tracking-[0.2em] uppercase text-cream/50 hover:text-cream mb-8 inline-block transition-colors"
          >
            ← All Institutes
          </Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-5xl md:text-7xl text-cream leading-tight"
          >
            {institute.name}
          </motion.h1>
          <p className="text-cream/60 text-lg mt-4 max-w-xl font-light">{institute.tagline}</p>
        </div>
      </div>

      <div className="max-w-[1400px] mx-auto px-8 lg:px-16 pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          <div className="lg:col-span-4">
            <p className="text-[11px] tracking-[0.25em] uppercase text-stone mb-4">About</p>
          </div>
          <div className="lg:col-span-8">
            <p className="text-ink/70 text-lg leading-[1.8] font-light">{institute.description}</p>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <div className="max-w-[1400px] mx-auto px-8 lg:px-16 mt-32">
          <p className="text-[11px] tracking-[0.25em] uppercase text-stone mb-12">
            Products from {institute.name}
          </p>
          <div className="space-y-0">
            {relatedProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
