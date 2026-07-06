import { Link } from 'react-router-dom'
import { siteInfo, navLinks } from '@shared/content'

export default function Footer() {
  return (
    <footer className="relative bg-night border-t border-gold/10 grain-overlay-strong">
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-10 py-20 md:py-28">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16 mb-16 md:mb-20">
          <div>
            <p className="text-xl font-semibold tracking-tight text-mist mb-5">
              <span className="text-gold">Srishti</span> Trust
            </p>
            <p className="text-mist/40 text-sm leading-[1.85] max-w-xs">
              {siteInfo.tagline}
            </p>
            <p className="text-gold/60 text-[10px] uppercase tracking-[0.2em] mt-8">
              {siteInfo.location} · Since {siteInfo.since}
            </p>
          </div>

          <div>
            <p className="text-mist/30 text-[10px] uppercase tracking-[0.25em] mb-5">Navigate</p>
            <div className="flex flex-col gap-3">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="text-mist/50 text-sm hover:text-gold transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-mist/30 text-[10px] uppercase tracking-[0.25em] mb-5">Contact</p>
            <div className="space-y-4 text-sm text-mist/50 leading-relaxed">
              <p>{siteInfo.contact.address}</p>
              <a href={`tel:${siteInfo.contact.phone}`} className="block hover:text-gold transition-colors">
                {siteInfo.contact.phone}
              </a>
              <a href={`mailto:${siteInfo.contact.email}`} className="block hover:text-gold transition-colors">
                {siteInfo.contact.email}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-10 border-t border-gold/5">
          <p className="text-mist/20 text-xs">
            © {new Date().getFullYear()} Srishti Trust. All rights reserved.
          </p>
          <div className="flex gap-6">
            {Object.entries(siteInfo.social).map(([name, url]) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-mist/30 text-xs uppercase tracking-widest hover:text-gold transition-colors"
              >
                {name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
