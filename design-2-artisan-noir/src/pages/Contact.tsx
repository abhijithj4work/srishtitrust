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
    <div className="page-top page-bottom">
      <div className="max-w-7xl mx-auto container-pad grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }}>
          <p className="eyebrow text-gold/70 mb-6">Get in Touch</p>
          <h1 className="display-section font-semibold text-mist mb-8">Contact Us</h1>
          <p className="body-lg text-mist/45 mb-12">
            We&apos;d love to hear from you. Reach out to learn more about our mission, products, or how you can support Srishti Trust.
          </p>

          <div className="space-y-10">
            <div>
              <h3 className="eyebrow text-gold/70 mb-4 text-xs">Address</h3>
              <p className="body-lg text-mist">{siteInfo.contact.address}</p>
            </div>
            <div>
              <h3 className="eyebrow text-gold/70 mb-4 text-xs">Phone</h3>
              <a href={`tel:${siteInfo.contact.phone}`} className="body-lg text-mist hover:text-gold transition-colors">
                {siteInfo.contact.phone}
              </a>
            </div>
            <div>
              <h3 className="eyebrow text-gold/70 mb-4 text-xs">Email</h3>
              <a href={`mailto:${siteInfo.contact.email}`} className="body-lg text-mist hover:text-gold transition-colors">
                {siteInfo.contact.email}
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-night-light rounded-3xl p-12 md:p-16 shadow-sm border border-gold/15"
        >
          {submitted ? (
            <div className="text-center py-16">
              <p className="text-2xl font-semibold tracking-tight text-gold mb-4">Thank you!</p>
              <p className="body-lg text-mist/45">We&apos;ll get back to you soon. (POC — no backend)</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-mist mb-3">Name</label>
                <input id="name" required className="w-full px-5 py-4 rounded-xl border border-gold/15 bg-night text-mist focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-mist mb-3">Email</label>
                <input id="email" type="email" required className="w-full px-5 py-4 rounded-xl border border-gold/15 bg-night text-mist focus:outline-none focus:border-gold" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-mist mb-3">Message</label>
                <textarea id="message" required rows={5} className="w-full px-5 py-4 rounded-xl border border-gold/15 bg-night text-mist focus:outline-none focus:border-gold resize-none" />
              </div>
              <CinematicButton type="submit" variant="accent" size="md" fullWidth>
                Send Message
              </CinematicButton>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  )
}
