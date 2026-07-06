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
      <div className="page-top pb-20 text-center">
        <h1 className="font-display text-3xl mb-4">Institute not found</h1>
        <Link to="/institutes" className="text-terracotta">← Back to Institutes</Link>
      </div>
    )
  }

  const relatedProducts = products.filter(p =>
    p.institute.toLowerCase().includes(institute.name.split(' ')[0].toLowerCase()) ||
    institute.name.toLowerCase().includes(p.institute.split(' ')[0].toLowerCase())
  )

  return (
    <div className="page-top pb-20">
      <div className="relative h-[50vh] min-h-[400px]">
        <img src={assetUrl(institute.image)} alt={institute.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-7xl mx-auto">
          <Link to="/institutes" className="text-cream/60 text-sm hover:text-cream mb-4 inline-block">← All Institutes</Link>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl text-cream"
          >
            {institute.name}
          </motion.h1>
          <p className="text-cream/70 text-lg mt-3 max-w-2xl">{institute.tagline}</p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <p className="text-warm-gray text-lg leading-relaxed">{institute.description}</p>
      </div>

      {relatedProducts.length > 0 && (
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl mb-8 text-center">Products from {institute.name}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {relatedProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
