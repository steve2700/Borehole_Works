import Image from "next/image"

interface MarqueeImage {
  src: string
  alt: string
}

export function ImageMarquee({
  images,
  direction = "left",
  speed = 36,
  name,
}: {
  images: MarqueeImage[]
  direction?: "left" | "right"
  speed?: number
  name: string
}) {
  const cls = `marquee-${name}`
  return (
    <div className="overflow-hidden">
      <style>{`
        @keyframes ${cls}-kf-left { from { transform: translateX(0); } to { transform: translateX(-50%); } }
        @keyframes ${cls}-kf-right { from { transform: translateX(-50%); } to { transform: translateX(0); } }
        .${cls} { animation: ${cls}-kf-${direction} ${speed}s linear infinite; }
        .${cls}:hover { animation-play-state: paused; }
      `}</style>
      <div className={`flex w-max ${cls}`}>
        {[...images, ...images].map((img, i) => (
          <div key={i} className="relative mx-2 h-48 w-72 flex-shrink-0 overflow-hidden rounded-2xl">
            <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="288px" />
            <div className="absolute bottom-2 right-2 flex items-center gap-1 rounded-md bg-black/60 px-1.5 py-0.5 backdrop-blur-sm">
              <div className="relative h-3 w-3 overflow-hidden rounded-sm">
                <Image src="/logo-icon.png" alt="" fill sizes="12px" className="object-cover" />
              </div>
              <span className="text-[8px] font-semibold uppercase tracking-wide text-white">Borehole Works</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
