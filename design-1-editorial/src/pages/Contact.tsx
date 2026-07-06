import { useState } from 'react'
import { motion } from 'framer-motion'
import { siteInfo } from '@shared/content'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="pt-28 pb-28 md:pb-36">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:col-span-5"
        >
          <p className="text-[11px] tracking-[0.2em] uppercase text-stone mb-5">Get in Touch</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight text-charcoal mb-8 leading-tight">
            Contact Us
          </h1>
          <p className="text-charcoal/60 leading-[1.85] mb-16">
            We&apos;d love to hear from you. Reach out to learn more about our mission, products, or how you can support Srishti Trust.
          </p>

          <div className="space-y-10">
            <div>
              <h3 className="text-[10px] tracking-[0.25em] uppercase text-stone mb-3">Address</h3>
              <p className="leading-relaxed text-charcoal/70">{siteInfo.contact.address}</p>
            </div>
            <div>
              <h3 className="text-[10px] tracking-[0.25em] uppercase text-stone mb-3">Phone</h3>
              <a href={`tel:${siteInfo.contact.phone}`} className="hover:text-forest transition-colors">
                {siteInfo.contact.phone}
              </a>
            </div>
            <div>
              <h3 className="text-[10px] tracking-[0.25em] uppercase text-stone mb-3">Email</h3>
              <a href={`mailto:${siteInfo.contact.email}`} className="hover:text-forest transition-colors">
                {siteInfo.contact.email}
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="lg:col-span-7"
        >
          {submitted ? (
            <div className="border border-linen p-16 md:p-20 text-center">
              <p className="text-2xl font-semibold tracking-tight text-forest mb-4">Thank you</p>
              <p className="text-stone">We&apos;ll get back to you soon. (POC — no backend)</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-10">
              <div>
                <label htmlFor="name" className="block text-[10px] tracking-[0.25em] uppercase text-stone mb-3">
                  Name
                </label>
                <input
                  id="name"
                  required
                  className="w-full px-0 py-3 border-b border-linen bg-transparent focus:outline-none focus:border-forest transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-[10px] tracking-[0.25em] uppercase text-stone mb-3">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full px-0 py-3 border-b border-linen bg-transparent focus:outline-none focus:border-forest transition-colors"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-[10px] tracking-[0.25em] uppercase text-stone mb-3">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={6}
                  className="w-full px-0 py-3 border-b border-linen bg-transparent focus:outline-none focus:border-forest transition-colors resize-none"
                />
              </div>
              <button
                type="submit"
                className="text-[11px] tracking-[0.2em] uppercase text-forest border-b border-forest pb-1 hover:text-charcoal hover:border-charcoal transition-colors"
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
