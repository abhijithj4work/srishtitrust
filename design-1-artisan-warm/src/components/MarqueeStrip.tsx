const items = ['HANDMADE', 'MUNNAR', 'SINCE 1991', 'NATURALLY DYED', 'CRAFT WITH PURPOSE', 'EMPOWERING LIVES']

export default function MarqueeStrip() {
  const track = [...items, ...items]

  return (
    <div className="overflow-hidden border-y border-charcoal/8 bg-charcoal py-4">
      <div className="marquee-track flex w-max gap-12">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="text-cream/70 text-[11px] font-semibold tracking-[0.35em] uppercase whitespace-nowrap flex items-center gap-12"
          >
            {item}
            <span className="text-terracotta text-[8px]">◆</span>
          </span>
        ))}
      </div>
    </div>
  )
}
