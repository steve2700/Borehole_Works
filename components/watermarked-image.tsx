import Image from "next/image"

export function WatermarkedImage({
  src,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw",
  priority = false,
}: {
  src: string
  alt: string
  className?: string
  sizes?: string
  priority?: boolean
}) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      <div className="absolute bottom-2 right-2 flex items-center gap-1.5 rounded-md bg-black/60 px-2 py-1 backdrop-blur-sm">
        <div className="relative h-4 w-4 overflow-hidden rounded-sm">
          <Image src="/logo-icon.png" alt="" fill sizes="16px" className="object-cover" />
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-wide text-white">Borehole Works</span>
      </div>
    </div>
  )
}
