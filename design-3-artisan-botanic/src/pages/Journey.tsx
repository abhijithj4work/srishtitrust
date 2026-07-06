import { journeyContent } from '@shared/content'
import Reveal from '../components/ui/Reveal'

export default function Journey() {
  return (
    <div className="page-shell page-end">
      <div className="max-w-5xl mx-auto container-pad">
        <Reveal>
          <div className="mb-20 md:mb-28 pb-12 border-b border-charcoal/8 max-w-2xl">
            <p className="eyebrow text-stone mb-6">Since 1991</p>
            <h1 className="display-section font-semibold">{journeyContent.title}</h1>
          </div>
        </Reveal>

        <div className="relative">
          <div className="absolute left-0 md:left-12 top-0 bottom-0 w-px bg-sage/30" />

          {journeyContent.sections.map((section, i) => (
            <Reveal key={section.year} delay={i * 0.12}>
              <article className="relative pl-12 md:pl-24 pb-28 last:pb-0">
                <div className="absolute left-0 md:left-12 -translate-x-1/2 w-5 h-5 bg-sage rounded-full ring-4 ring-cream shadow-[0_0_0_2px_rgba(107,143,113,0.2)]" />
                <span className="text-3xl md:text-5xl font-semibold tracking-tight text-forest">{section.year}</span>
                <h2 className="text-xl md:text-2xl font-semibold tracking-tight mt-5 mb-6">{section.title}</h2>
                <p className="body-lg text-stone max-w-2xl">{section.content}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
