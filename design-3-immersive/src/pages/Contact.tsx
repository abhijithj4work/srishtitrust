import { useState } from 'react'
import { motion } from 'framer-motion'
import { siteInfo } from '@shared/content'
import { useReducedMotion } from '../hooks/useReducedMotion'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)
  const reduced = useReducedMotion()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="pt-28 pb-28 md:pb-36 grain-overlay">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <motion.div
          initial={reduced ? false : { opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <p className="text-gold/70 text-[11px] uppercase tracking-[0.25em] mb-5">Get in Touch</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-mist mb-8">Contact Us</h1>
          <p className="text-mist/50 leading-[1.85] mb-14">
            We&apos;d love to hear from you. Reach out to learn more about our mission, products, or how you can support Srishti Trust.
          </p>

          <div className="space-y-10">
            <div>
              <h3 className="text-mist/30 text-[10px] uppercase tracking-[0.25em] mb-3">Address</h3>
              <p className="text-mist/60 leading-relaxed">{siteInfo.contact.address}</p>
            </div>
            <div>
              <h3 className="text-mist/30 text-[10px] uppercase tracking-[0.25em] mb-3">Phone</h3>
              <a href={`tel:${siteInfo.contact.phone}`} className="text-mist/60 hover:text-gold transition-colors">
                {siteInfo.contact.phone}
              </a>
            </div>
            <div>
              <h3 className="text-mist/30 text-[10px] uppercase tracking-[0.25em] mb-3">Email</h3>
              <a href={`mailto:${siteInfo.contact.email}`} className="text-mist/60 hover:text-gold transition-colors">
                {siteInfo.contact.email}
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={reduced ? false : { opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-night-light border border-gold/10 p-10 md:p-12"
        >
          {submitted ? (
            <div className="text-center py-20">
              <p className="text-2xl font-semibold tracking-tight text-gold mb-3">Thank you!</p>
              <p className="text-mist/40 text-sm">We&apos;ll get back to you soon. (POC — no backend)</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-7">
              <div>
                <label htmlFor="name" className="block text-[10px] uppercase tracking-[0.2em] text-mist/40 mb-2">Name</label>
                <input
                  id="name"
                  required
                  className="w-full px-4 py-3.5 bg-night border border-gold/10 text-mist focus:outline-none focus:border-gold/40 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[10px] uppercase tracking-[0.2em] text-mist/40 mb-2">Email</label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full px-4 py-3.5 bg-night border border-gold/10 text-mist focus:outline-none focus:border-gold/40 transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[10px] uppercase tracking-[0.2em] text-mist/40 mb-2">Message</label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3.5 bg-night border border-gold/10 text-mist focus:outline-none focus:border-gold/40 resize-none transition-colors"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3.5 bg-gold text-night text-sm uppercase tracking-widest font-medium hover:bg-mist transition-colors"
              >
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  )
}
