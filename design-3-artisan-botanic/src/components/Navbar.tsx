import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { useState } from 'react'
import { navLinks } from '@shared/content'
import { useCart } from '../context/CartContext'
import { useScrollNav } from '../hooks/useScrollNav'
import CinematicButton from './ui/CinematicButton'

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { itemCount, setIsOpen } = useCart()
  const location = useLocation()
  const scrolled = useScrollNav()

  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/90 backdrop-blur-2xl border-b border-charcoal/8 shadow-[0_8px_32px_rgba(0,0,0,0.06)]'
          : 'bg-cream/5 backdrop-blur-xl border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto container-pad h-20 flex items-center justify-between">
        <Link to="/" className="text-base md:text-lg font-bold tracking-[0.12em] uppercase text-charcoal">
          Srishti
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map(link => (
            <Link key={link.path} to={link.path} className="relative text-sm font-medium transition-colors group">
              <span className={location.pathname === link.path ? 'text-charcoal' : 'text-charcoal/45 group-hover:text-charcoal'}>
                {link.label}
              </span>
              {location.pathname === link.path && (
                <motion.span layoutId="nav-underline" className="absolute -bottom-1.5 left-0 right-0 h-px bg-forest" />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <motion.button whileTap={{ scale: 0.9 }} onClick={() => setIsOpen(true)} className="relative p-3 text-charcoal/50 hover:text-charcoal transition-colors" aria-label="Open cart">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <AnimatePresence>
              {itemCount > 0 && (
                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-forest text-cream text-[10px] rounded-full flex items-center justify-center font-bold">
                  {itemCount}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
          <CinematicButton to="/donate" variant="primary" size="md" className="hidden sm:inline-flex">Donate</CinematicButton>
          <button className="md:hidden p-2 text-charcoal" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-cream/95 backdrop-blur-xl border-t border-charcoal/8 overflow-hidden">
            <div className="container-pad py-6 flex flex-col gap-2">
              {navLinks.map((link, i) => (
                <motion.div key={link.path} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                  <Link to={link.path} onClick={() => setMobileOpen(false)} className={`block text-base font-medium py-4 ${location.pathname === link.path ? 'text-forest' : 'text-charcoal/50'}`}>
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
