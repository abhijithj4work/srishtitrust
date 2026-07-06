import { Link } from 'react-router-dom'
import { siteInfo } from '@shared/content'

export default function Footer() {
  return (
    <footer className="bg-charcoal text-cream/60">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 py-20 md:py-28 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-16">
        <div className="md:col-span-5">
          <h3 className="text-2xl font-semibold tracking-tight text-cream mb-6">
            Srishti Trust
          </h3>
          <p className="text-sm leading-[1.85] max-w-sm text-cream/55">
            {siteInfo.tagline} for specially-abled individuals in Munnar, Kerala.
          </p>
          <p className="text-[10px] tracking-[0.2em] uppercase text-cream/30 mt-10">
            Est. {siteInfo.since} · {siteInfo.location}
          </p>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-[10px] tracking-[0.25em] uppercase text-cream/40 mb-6">Navigate</h4>
          <ul className="space-y-4">
            {['Our Journey', 'Institutes', 'Shop', 'Donate', 'Contact'].map(label => (
              <li key={label}>
                <Link
                  to={
                    label === 'Our Journey' ? '/journey'
                    : label === 'Institutes' ? '/institutes'
                    : label === 'Shop' ? '/shop'
                    : label === 'Donate' ? '/donate'
                    : '/contact'
                  }
                  className="text-sm hover:text-cream transition-colors"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <h4 className="text-[10px] tracking-[0.25em] uppercase text-cream/40 mb-6">Connect</h4>
          <div className="flex flex-col gap-4">
            {(['facebook', 'instagram', 'youtube', 'tiktok'] as const).map(social => (
              <a
                key={social}
                href={siteInfo.social[social]}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm capitalize hover:text-cream transition-colors"
              >
                {social}
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <h4 className="text-[10px] tracking-[0.25em] uppercase text-cream/40 mb-6">Contact</h4>
          <address className="not-italic text-sm space-y-4 leading-relaxed">
            <p>{siteInfo.contact.address}</p>
            <p>
              <a href={`tel:${siteInfo.contact.phone}`} className="hover:text-cream transition-colors">
                {siteInfo.contact.phone}
              </a>
            </p>
            <p>
              <a href={`mailto:${siteInfo.contact.email}`} className="hover:text-cream transition-colors">
                {siteInfo.contact.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-cream/10 py-8 text-center">
        <p className="text-[10px] tracking-[0.2em] uppercase text-cream/30">
          &copy; {new Date().getFullYear()} Srishti Trust. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
