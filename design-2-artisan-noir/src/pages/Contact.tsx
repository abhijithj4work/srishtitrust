import { useState } from 'react'
import { motion } from 'framer-motion'
import { siteInfo } from '@shared/content'
import CinematicButton from '../components/ui/CinematicButton'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="page-shell page-end">
      <div className="max-w-xl mx-auto container-pad">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <p className="eyebrow text-gold/70 mb-6">Get in Touch</p>
          <h1 className="display-section font-semibold text-mist mb-6">Contact Us</h1>
          <p className="body-lg text-mist/45">
            We&apos;d love to hear from you about our mission, products, or how you can support Srishti Trust.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-night-light/60 backdrop-blur-xl border border-gold/15 card-pad"
        >
          {submitted ? (
            <div className="text-center py-12">
              <p className="text-2xl font-semibold tracking-tight text-gold mb-4">Thank you!</p>
              <p className="body-lg text-mist/45">We&apos;ll get back to you soon. (POC — no backend)</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="field-stack">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-mist mb-3">Name</label>
                <input id="name" required className="input-lg border border-gold/15 bg-night text-mist focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-mist mb-3">Email</label>
                <input id="email" type="email" required className="input-lg border border-gold/15 bg-night text-mist focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-mist mb-3">Message</label>
                <textarea id="message" required rows={5} className="input-lg border border-gold/15 bg-night text-mist focus:outline-none focus:border-gold resize-none" />
              </div>
              <CinematicButton type="submit" variant="accent" size="md" fullWidth>
                Send Message
              </CinematicButton>
            </form>
          )}
        </motion.div>

        <div className="mt-12 space-y-4 text-center text-sm text-mist/45">
          <p>{siteInfo.contact.address}</p>
          <p>
            <a href={`tel:${siteInfo.contact.phone}`} className="hover:text-gold transition-colors">
              {siteInfo.contact.phone}
            </a>
          </p>
          <p>
            <a href={`mailto:${siteInfo.contact.email}`} className="hover:text-gold transition-colors">
              {siteInfo.contact.email}
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
