import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { navLinks } from '@shared/content'
import { useCart } from '../context/CartContext'
import CinematicButton from './ui/CinematicButton'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount, setIsOpen } = useCart()
  const location = useLocation()

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 bg-cream/70 backdrop-blur-2xl border-b border-charcoal/5"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
        <Link to="/" className="text-sm font-bold tracking-[0.15em] uppercase text-charcoal">
          Srishti
        </Link>

        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map(link => (
            <Link key={link.path} to={link.path} className="relative text-[13px] font-medium group">
              <span className={location.pathname === link.path ? 'text-forest' : 'text-charcoal/40 group-hover:text-charcoal'}>
                {link.label}
              </span>
              {location.pathname === link.path && (
                <motion.span layoutId="nav-line-d1" className="absolute -bottom-1 left-0 right-0 h-px bg-forest" />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(true)}
            className="text-[13px] font-medium text-charcoal/50 hover:text-charcoal transition-colors"
            aria-label="Open cart"
          >
            Cart
            <AnimatePresence>
              {itemCount > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="ml-1 text-forest font-bold"
                >
                  ({itemCount})
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>

          <CinematicButton to="/donate" variant="primary" size="sm">
            Donate
          </CinematicButton>

          <button
            className="lg:hidden text-[13px] font-medium text-charcoal"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? 'Close' : 'Menu'}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-cream/95 backdrop-blur-xl border-t border-charcoal/5 overflow-hidden"
          >
            <div className="px-6 py-5 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setMobileOpen(false)}
                    className={`block text-sm font-medium py-3 ${
                      location.pathname === link.path ? 'text-forest' : 'text-charcoal/50'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
