import { assetUrl } from '@shared/assetUrl'
import { motion, AnimatePresence } from 'framer-motion'
import { useCart } from '../context/CartContext'
import { formatPrice } from '@shared/products'

export default function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, total, clearCart, showToast } = useCart()

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
            transition={{ duration: 0.4 }}
            className="fixed inset-0 bg-charcoal/30 z-50"
            onClick={() => setIsOpen(false)}
          />
          <motion.aside
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-cream z-50 border-l border-linen flex flex-col"
            data-lenis-prevent
          >
            <div className="flex items-center justify-between px-8 py-8 border-b border-linen">
              <h2 className="font-display text-2xl text-charcoal">Your Selection</h2>
              <button
                onClick={() => setIsOpen(false)}
                aria-label="Close cart"
                className="text-[11px] tracking-[0.2em] uppercase text-stone hover:text-charcoal transition-colors"
              >
                Close
              </button>
            </div>

            <div className="flex-1 overflow-y-auto px-8 py-8">
              {items.length === 0 ? (
                <p className="text-stone text-sm text-center py-16 font-light">
                  Your cart is empty
                </p>
              ) : (
                <div className="space-y-10">
                  {items.map(item => (
                    <div key={item.product.id} className="flex gap-6">
                      <div className="w-20 h-24 flex-shrink-0 overflow-hidden bg-linen/50">
                        <img
                          src={assetUrl(item.product.image)}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-display text-lg text-charcoal">{item.product.name}</h3>
                        <p className="text-[10px] tracking-[0.15em] uppercase text-stone mt-1">
                          {item.product.institute}
                        </p>
                        <p className="text-sm mt-3">{formatPrice(item.product.price)}</p>
                        <div className="flex items-center gap-4 mt-4">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="w-8 h-8 border border-linen text-sm hover:border-charcoal transition-colors"
                          >
                            −
                          </button>
                          <span className="text-sm w-4 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="w-8 h-8 border border-linen text-sm hover:border-charcoal transition-colors"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="ml-auto text-[10px] tracking-[0.15em] uppercase text-stone hover:text-charcoal transition-colors"
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
              <div className="px-8 py-8 border-t border-linen">
                <div className="flex justify-between items-baseline mb-8">
                  <span className="text-[11px] tracking-[0.2em] uppercase text-stone">Subtotal</span>
                  <span className="font-display text-2xl">{formatPrice(total)}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full py-4 bg-forest text-cream text-[11px] tracking-[0.2em] uppercase hover:bg-charcoal transition-colors duration-300"
                >
                  Proceed to Checkout
                </button>
              </div>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  )
}

export function Toast() {
  const { toast } = useCart()
  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.4 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[60] px-8 py-3 bg-charcoal text-cream text-[11px] tracking-[0.15em] uppercase"
        >
          {toast}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
