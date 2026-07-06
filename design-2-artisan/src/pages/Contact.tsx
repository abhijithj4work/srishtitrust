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
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <p className="text-[11px] tracking-[0.2em] uppercase text-warm-gray mb-5">Get in Touch</p>
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight mb-8">Contact Us</h1>
          <p className="text-warm-gray leading-[1.85] mb-12">
            We&apos;d love to hear from you. Reach out to learn more about our mission, products, or how you can support Srishti Trust.
          </p>

          <div className="space-y-8">
            <div>
              <h3 className="font-medium text-[10px] uppercase tracking-[0.2em] text-warm-gray mb-3">Address</h3>
              <p className="leading-relaxed">{siteInfo.contact.address}</p>
            </div>
            <div>
              <h3 className="font-medium text-[10px] uppercase tracking-[0.2em] text-warm-gray mb-3">Phone</h3>
              <a href={`tel:${siteInfo.contact.phone}`} className="hover:text-terracotta transition-colors">
                {siteInfo.contact.phone}
              </a>
            </div>
            <div>
              <h3 className="font-medium text-[10px] uppercase tracking-[0.2em] text-warm-gray mb-3">Email</h3>
              <a href={`mailto:${siteInfo.contact.email}`} className="hover:text-terracotta transition-colors">
                {siteInfo.contact.email}
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-white rounded-3xl p-10 md:p-12 shadow-sm border border-sand/50"
        >
          {submitted ? (
            <div className="text-center py-16">
              <p className="text-2xl font-semibold tracking-tight text-olive mb-3">Thank you!</p>
              <p className="text-warm-gray">We&apos;ll get back to you soon. (POC — no backend)</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Name</label>
                <input id="name" required className="w-full px-4 py-3.5 rounded-xl border border-sand bg-cream focus:outline-none focus:border-terracotta" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Email</label>
                <input id="email" type="email" required className="w-full px-4 py-3.5 rounded-xl border border-sand bg-cream focus:outline-none focus:border-terracotta" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">Message</label>
                <textarea id="message" required rows={5} className="w-full px-4 py-3.5 rounded-xl border border-sand bg-cream focus:outline-none focus:border-terracotta resize-none" />
              </div>
              <button type="submit" className="w-full py-3.5 bg-terracotta text-white rounded-full font-medium hover:bg-terracotta/90 transition-colors">
                Send Message
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  )
}
