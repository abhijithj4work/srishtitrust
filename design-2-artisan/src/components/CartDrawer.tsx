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
            className="fixed inset-0 bg-black/40 z-50"
            onClick={() => setIsOpen(false)}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-cream z-50 shadow-2xl flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-sand">
              <h2 className="font-display text-xl">Your Cart</h2>
              <button onClick={() => setIsOpen(false)} aria-label="Close cart" className="p-2 hover:text-terracotta">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <p className="text-warm-gray text-center py-12">Your cart is empty</p>
              ) : (
                <div className="space-y-6">
                  {items.map(item => (
                    <div key={item.product.id} className="flex gap-4">
                      <img
                        src={assetUrl(item.product.image)}
                        alt={item.product.name}
                        className="w-20 h-20 object-cover rounded-lg"
                      />
                      <div className="flex-1">
                        <h3 className="font-medium text-sm">{item.product.name}</h3>
                        <p className="text-xs text-warm-gray mt-1">{item.product.institute}</p>
                        <p className="text-sm font-medium mt-2">{formatPrice(item.product.price)}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                            className="w-7 h-7 rounded-full border border-sand flex items-center justify-center text-sm hover:border-terracotta"
                          >
                            −
                          </button>
                          <span className="text-sm">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                            className="w-7 h-7 rounded-full border border-sand flex items-center justify-center text-sm hover:border-terracotta"
                          >
                            +
                          </button>
                          <button
                            onClick={() => removeItem(item.product.id)}
                            className="ml-auto text-xs text-warm-gray hover:text-terracotta"
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
              <div className="p-6 border-t border-sand">
                <div className="flex justify-between mb-4">
                  <span className="font-medium">Subtotal</span>
                  <span className="font-display text-lg">{formatPrice(total)}</span>
                </div>
                <button
                  onClick={handleCheckout}
                  className="w-full py-3 bg-terracotta text-white rounded-full font-medium hover:bg-terracotta/90 transition-colors"
                >
                  Checkout
                </button>
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
  return (
    <AnimatePresence>
      {toast && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[60] px-6 py-3 bg-charcoal text-cream rounded-full text-sm shadow-lg"
        >
          {toast}
        </motion.div>
      )}
    </AnimatePresence>
  )
}
