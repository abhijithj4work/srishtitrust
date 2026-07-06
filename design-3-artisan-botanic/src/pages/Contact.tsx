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
      <div className="max-w-4xl mx-auto container-pad">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} className="mb-16 text-center">
          <p className="eyebrow text-stone mb-6">Get in Touch</p>
          <h1 className="display-section font-semibold mb-6">Contact Us</h1>
          <p className="body-lg text-stone max-w-xl mx-auto">
            We&apos;d love to hear from you. Reach out to learn more about our mission, products, or how you can support Srishti Trust.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-3xl p-14 md:p-20 shadow-sm border border-linen/50 mb-16"
        >
          {submitted ? (
            <div className="text-center py-16">
              <p className="text-2xl font-semibold tracking-tight text-moss mb-4">Thank you!</p>
              <p className="body-lg text-stone">We&apos;ll get back to you soon. (POC — no backend)</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="field-stack">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-3">Name</label>
                <input id="name" required className="input-lg border border-linen bg-cream focus:outline-none focus:border-sage" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-3">Email</label>
                <input id="email" type="email" required className="input-lg border border-linen bg-cream focus:outline-none focus:border-sage" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-3">Message</label>
                <textarea id="message" required rows={5} className="input-lg border border-linen bg-cream focus:outline-none focus:border-sage resize-none" />
              </div>
              <CinematicButton type="submit" variant="accent" size="md" fullWidth>
                Send Message
              </CinematicButton>
            </form>
          )}
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-linen/40 rounded-2xl p-8 border border-linen/60">
            <h3 className="eyebrow text-sage mb-4 text-xs">Address</h3>
            <p className="body-lg text-charcoal/80">{siteInfo.contact.address}</p>
          </div>
          <div className="bg-linen/40 rounded-2xl p-8 border border-linen/60">
            <h3 className="eyebrow text-sage mb-4 text-xs">Phone</h3>
            <a href={`tel:${siteInfo.contact.phone}`} className="body-lg text-charcoal/80 hover:text-forest transition-colors">
              {siteInfo.contact.phone}
            </a>
          </div>
          <div className="bg-linen/40 rounded-2xl p-8 border border-linen/60">
            <h3 className="eyebrow text-sage mb-4 text-xs">Email</h3>
            <a href={`mailto:${siteInfo.contact.email}`} className="body-lg text-charcoal/80 hover:text-forest transition-colors">
              {siteInfo.contact.email}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
