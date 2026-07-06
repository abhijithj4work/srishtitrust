import { Link } from 'react-router-dom'
import { siteInfo } from '@shared/content'

const footerLinks = [
  { label: 'Journey', path: '/journey' },
  { label: 'Institutes', path: '/institutes' },
  { label: 'Shop', path: '/shop' },
  { label: 'Donate', path: '/donate' },
  { label: 'Contact', path: '/contact' },
]

export default function Footer() {
  return (
    <footer className="relative z-10 bg-night border-t border-gold/20 py-12">
      <div className="max-w-7xl mx-auto container-pad flex flex-col md:flex-row items-center justify-between gap-8 md:gap-6">
        <p className="text-sm font-semibold tracking-[0.12em] uppercase text-mist/70">
          Srishti
        </p>

        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
          {footerLinks.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className="text-sm text-mist/45 hover:text-gold transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="text-sm text-mist/45 text-center md:text-right">
          <a href={`tel:${siteInfo.contact.phone}`} className="hover:text-gold transition-colors">
            {siteInfo.contact.phone}
          </a>
          <span className="mx-2 text-mist/20">·</span>
          <a href={`mailto:${siteInfo.contact.email}`} className="hover:text-gold transition-colors">
            {siteInfo.contact.email}
          </a>
        </div>
      </div>
    </footer>
  )
}
