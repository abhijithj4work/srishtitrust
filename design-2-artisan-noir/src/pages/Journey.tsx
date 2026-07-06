import { journeyContent } from '@shared/content'
import Reveal from '../components/ui/Reveal'

export default function Journey() {
  return (
    <div className="page-shell page-end">
      <div className="max-w-5xl mx-auto container-pad">
        <Reveal>
          <div className="mb-20 md:mb-28 pb-12 border-b border-gold/10 max-w-2xl mx-auto text-center">
            <p className="eyebrow text-gold/70 mb-6">Since 1991</p>
            <h1 className="display-section font-semibold text-mist">{journeyContent.title}</h1>
          </div>
        </Reveal>

        <div className="space-y-0">
          {journeyContent.sections.map((section, i) => (
            <Reveal key={section.year} delay={i * 0.12}>
              <article className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 py-16 border-b border-gold/10 last:border-0">
                <span className="text-6xl md:text-8xl lg:text-9xl font-semibold tracking-tight gold-gradient mb-8">
                  {section.year}
                </span>
                <h2 className="text-xl md:text-2xl font-semibold tracking-tight text-mist mb-6 max-w-xl">
                  {section.title}
                </h2>
                <p className="body-lg text-mist/45 max-w-2xl">{section.content}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  )
}
