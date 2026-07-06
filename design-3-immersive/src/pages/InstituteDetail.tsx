import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { institutes } from '@shared/content'
import { assetUrl } from '@shared/assetUrl'
import { products } from '@shared/products'
import ProductCard from '../components/ProductCard'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function InstituteDetail() {
  const { slug } = useParams()
  const institute = institutes.find(i => i.slug === slug)
  const reduced = useReducedMotion()

  if (!institute) {
    return (
      <div className="pt-32 pb-20 text-center">
        <h1 className="font-display text-3xl text-mist mb-4">Institute not found</h1>
        <Link to="/institutes" className="text-gold text-sm uppercase tracking-widest">← Back to Institutes</Link>
      </div>
    )
  }

  const relatedProducts = products.filter(p =>
    p.institute.toLowerCase().includes(institute.name.split(' ')[0].toLowerCase()) ||
    institute.name.toLowerCase().includes(p.institute.split(' ')[0].toLowerCase())
  )

  return (
    <div className="pb-20">
      <div className="relative h-[60vh] min-h-[450px] grain-overlay">
        <img src={assetUrl(institute.image)} alt={institute.name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-night via-night/50 to-night/20" />
        <div className="absolute inset-0 cinematic-vignette" />
        <div className="absolute bottom-0 left-0 right-0 p-8 md:p-16 max-w-7xl mx-auto">
          <Link to="/institutes" className="text-mist/40 text-xs uppercase tracking-widest hover:text-gold mb-6 inline-block transition-colors">
            ← All Institutes
          </Link>
          <motion.h1
            initial={reduced ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl text-mist"
          >
            {institute.name}
          </motion.h1>
          <p className="text-mist/50 text-lg mt-4 max-w-2xl">{institute.tagline}</p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-6 py-16 md:py-24">
        <p className="text-mist/60 text-lg leading-relaxed">{institute.description}</p>
      </div>

      {relatedProducts.length > 0 && (
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="font-display text-3xl text-mist mb-10 text-center">
            Products from {institute.name}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {relatedProducts.map((p, i) => (
              <ProductCard key={p.id} product={p} index={i} />
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
