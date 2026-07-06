import { Link } from 'react-router-dom'
import { siteInfo } from '@shared/content'

export default function Footer() {
  const institutes = [
    'DARE School', 'Aranya Natural', 'Athulya Paper', 'Nisarga',
    'The Deli Bakery', 'Disha', 'Shakti', 'Vatika',
  ]

  return (
    <footer className="bg-charcoal text-cream/70 mt-0">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        <div className="md:col-span-4">
          <p className="text-sm font-semibold tracking-[0.12em] uppercase text-cream mb-5">Srishti</p>
          <p className="text-sm leading-[1.8] text-cream/50 max-w-xs">
            {siteInfo.tagline} for specially-abled individuals in Munnar, Kerala.
          </p>
          <div className="flex gap-3 mt-8">
            {['facebook', 'instagram', 'youtube', 'tiktok'].map(social => (
              <a
                key={social}
                href={siteInfo.social[social as keyof typeof siteInfo.social]}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 border border-cream/15 flex items-center justify-center hover:border-cream/40 transition-colors text-[10px] uppercase"
                aria-label={social}
              >
                {social[0]}
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-2 md:col-start-6">
          <p className="text-[11px] uppercase tracking-[0.15em] text-cream/40 mb-5">Institutes</p>
          <ul className="space-y-3">
            {institutes.map(name => (
              <li key={name}>
                <Link to="/institutes" className="text-sm hover:text-cream transition-colors">{name}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2">
          <p className="text-[11px] uppercase tracking-[0.15em] text-cream/40 mb-5">Links</p>
          <ul className="space-y-3">
            {[['Our Journey', '/journey'], ['Shop', '/shop'], ['Donate', '/donate'], ['Contact', '/contact']].map(([label, path]) => (
              <li key={path}><Link to={path} className="text-sm hover:text-cream transition-colors">{label}</Link></li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <p className="text-[11px] uppercase tracking-[0.15em] text-cream/40 mb-5">Contact</p>
          <address className="not-italic text-sm space-y-3 leading-relaxed">
            <p>{siteInfo.contact.address}</p>
            <p><a href={`tel:${siteInfo.contact.phone}`} className="hover:text-cream transition-colors">{siteInfo.contact.phone}</a></p>
            <p><a href={`mailto:${siteInfo.contact.email}`} className="hover:text-cream transition-colors">{siteInfo.contact.email}</a></p>
          </address>
        </div>
      </div>

      <div className="border-t border-cream/8 py-6 text-center text-xs text-cream/30">
        &copy; {new Date().getFullYear()} Srishti Trust
      </div>
    </footer>
  )
}
