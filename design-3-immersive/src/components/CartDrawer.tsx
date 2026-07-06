import { assetUrl } from '@shared/assetUrl'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { formatPrice } from '@shared/products'
import { useReducedMotion } from '../hooks/useReducedMotion'
import CinematicButton from './ui/CinematicButton'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total, clearCart, showToast } = useCart()
  const reduced = useReducedMotion()

  const handleCheckout = () => {
    showToast('Thank you! Checkout is a POC feature.')
    clearCart()
    setIsOpen(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={reduced ? false : { x: '100%' }}
            animate={{ x: 0 }}
            exit={reduced ? { opacity: 0 } : { x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-night-light border-l border-gold/10 z-50 flex flex-col grain-overlay"
          >
            <div className="flex items-center justify-between p-6 border-b border-gold/10">
              <h2 className="font-display text-xl text-mist">Your Cart</h2>
              <button onClick={() => setIsOpen(false)} aria-label="Close cart" className="p-2 text-mist/50 hover:text-gold transition-colors">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <p className="text-mist/40 text-center py-12 text-sm">Your cart is empty</p>
              ) : (
                <div className="space-y-6">
                  {items.map(item => (
                    <div key={item.product.id} className="flex gap-4">
                      <img
                        src={assetUrl(item.product.image)}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover"
                      />
                      <div className="flex-1">
                        <h3 className="font-display text-sm text-mist">{item.product.name}</h3>
                        <p className="text-xs text-mist/40 mt-1">{item.product.institute}</p>
                        <p className="text-sm text-gold mt-2">{formatPrice(item.product.price)}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="w-7 h-7 border border-gold/20 flex items-center justify-center text-sm text-mist/60 hover:border-gold hover:text-gold transition-colors"
                          >
                            −
                          </button>
                          <span className="text-sm text-mist">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="w-7 h-7 border border-gold/20 flex items-center justify-center text-sm text-mist/60 hover:border-gold hover:text-gold transition-colors"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="ml-auto text-xs text-mist/30 hover:text-gold transition-colors"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 border-t border-gold/10">
                <div className="flex justify-between mb-4">
                  <span className="text-mist/50 text-sm uppercase tracking-widest">Subtotal</span>
                  <span className="font-display text-lg text-gold">{formatPrice(total)}</span>
                </div>
                <CinematicButton variant="primary" size="md" fullWidth onClick={handleCheckout}>
                  Checkout
                </CinematicButton>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}

export function Toast() {
  const { toast } = useCart()
  const reduced = useReducedMotion()

  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={reduced ? false : { opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduced ? { opacity: 0 } : { opacity: 0, y: 50 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[80] px-6 py-3 bg-night-light border border-gold/20 text-mist text-sm"
        >
          {toast}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
