import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartDrawer, { Toast } from './components/CartDrawer'
import PageTransition from './components/PageTransition'
import Home from './pages/Home'
import Journey from './pages/Journey'
import Institutes from './pages/Institutes'
import InstituteDetail from './pages/InstituteDetail'
import Shop from './pages/Shop'
import Contact from './pages/Contact'
import Donate from './pages/Donate'

export default function App() {
  const location = useLocation()

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <CartDrawer />
      <Toast />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageTransition><Home /></PageTransition>} />
            <Route path="/journey" element={<PageTransition><Journey /></PageTransition>} />
            <Route path="/institutes" element={<PageTransition><Institutes /></PageTransition>} />
            <Route path="/institutes/:slug" element={<PageTransition><InstituteDetail /></PageTransition>} />
            <Route path="/shop" element={<PageTransition><Shop /></PageTransition>} />
            <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
            <Route path="/donate" element={<PageTransition><Donate /></PageTransition>} />
          </Routes>
        </AnimatePresence>
      </main>
      <Footer />
    </div>
  )
}
