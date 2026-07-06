import { institutes, institutesIntro } from '@shared/content'
import InstituteCard from '../components/InstituteCard'
import Reveal from '../components/ui/Reveal'

export default function Institutes() {
  return (
    <div className="pt-28 pb-28 md:pb-36">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <Reveal className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <p className="text-[11px] tracking-[0.2em] uppercase text-stone mb-5">Eight Institutes</p>
          <h1 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">{institutesIntro.title}</h1>
          <p className="text-stone leading-[1.85] text-base">{institutesIntro.description}</p>
          <p className="text-charcoal font-medium mt-6 text-sm italic">{institutesIntro.highlight}</p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {institutes.map((inst, i) => (
            <InstituteCard key={inst.slug} institute={inst} index={i} />
          ))}
        </div>
      </div>
    </div>
  )
}
