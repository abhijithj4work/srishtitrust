import { journeyContent } from '@shared/content'
import Reveal from '../components/ui/Reveal'

export default function Journey() {
  return (
    <div className="pt-28 pb-24 md:pb-32">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="mb-16 md:mb-24 pb-10 border-b border-charcoal/8 max-w-2xl">
            <p className="text-[11px] uppercase tracking-[0.2em] text-warm-gray mb-4">Since 1991</p>
            <h1 className="text-3xl md:text-5xl font-semibold tracking-tight leading-tight">{journeyContent.title}</h1>
          </div>
        </Reveal>

        <div className="relative">
          <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-terracotta/25" />

          {journeyContent.sections.map((section, i) => (
            <Reveal key={section.year} delay={i * 0.08}>
              <article className="relative pl-10 md:pl-20 pb-16 md:pb-24 last:pb-0">
                <div className="absolute left-0 md:left-8 -translate-x-1/2 w-3 h-3 bg-terracotta rounded-full ring-4 ring-cream" />
                <span className="text-2xl md:text-4xl font-semibold tracking-tight text-terracotta">{section.year}</span>
                <h2 className="text-lg md:text-xl font-semibold tracking-tight mt-4 mb-5">{section.title}</h2>
                <p className="text-warm-gray text-sm md:text-base leading-[1.85] max-w-2xl">{section.content}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
