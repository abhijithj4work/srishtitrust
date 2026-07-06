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
      className="fixed top-0 left-0 right-0 z-50 bg-night/70 backdrop-blur-2xl border-b border-gold/10"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
        <Link to="/" className="text-sm font-bold tracking-[0.15em] uppercase text-mist">Srishti</Link>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(link => (
            <Link key={link.path} to={link.path} className="relative text-[13px] font-medium transition-colors group">
              <span className={location.pathname === link.path ? 'text-mist' : 'text-mist/40 group-hover:text-mist'}>{link.label}</span>
              {location.pathname === link.path && (
                <motion.span layoutId="nav-underline" className="absolute -bottom-1 left-0 right-0 h-px bg-gold" />
              )}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <motion.button whileTap={{ scale: 0.9 }} onClick={() => setIsOpen(true)} className="relative p-2.5 text-mist/50 hover:text-mist transition-colors" aria-label="Open cart">
            <svg className="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
            <AnimatePresence>
              {itemCount > 0 && (
                <motion.span initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }} className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-gold text-night text-[10px] rounded-full flex items-center justify-center font-bold">
                  {itemCount}
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
          <CinematicButton to="/donate" variant="primary" className="hidden sm:inline-flex !px-5 !py-2 !text-xs">Donate</CinematicButton>
          <button className="md:hidden p-2 text-mist" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Toggle menu">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
          <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: 'auto' }} exit={{ opacity: 0, height: 0 }} className="md:hidden bg-night/95 backdrop-blur-xl border-t border-gold/10 overflow-hidden">
            <div className="px-6 py-5 flex flex-col gap-1">
              {navLinks.map((link, i) => (
                <motion.div key={link.path} initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}>
                  <Link to={link.path} onClick={() => setMobileOpen(false)} className={`block text-sm font-medium py-3 ${location.pathname === link.path ? 'text-gold' : 'text-mist/50'}`}>
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
