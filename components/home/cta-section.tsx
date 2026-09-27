import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

const galleryImages = [
  {
    src: "/borehole_drilling_water_gushing.webp",
    alt: "Borehole drilling rig striking water in Gauteng - Borehole Works",
  },
  {
    src: "/solar_borehole_pump_aerial_view.avif",
    alt: "Aerial view of solar borehole pump and water tank installation",
  },
  {
    src: "/Pump-and-tanks.jpg",
    alt: "Pump and water tank installation by Borehole Works",
  },
  {
    src: "/solar_borehole_tank_installation.avif",
    alt: "Solar-powered borehole tank stand installation in Gauteng",
  },
]

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 lg:py-28">
      <div className="container relative mx-auto px-4 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          {/* Text Content */}
          <div>
            <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
              Ready to Solve Your Water Problem?
            </h2>
            <p className="mb-8 text-pretty text-lg text-primary-foreground/80">
              Contact Borehole Works today for a free site assessment. Our team provides honest advice, accurate
              quotations, and reliable installation across Pretoria, Johannesburg, and greater Gauteng.
            </p>

            <div className="mb-10 flex flex-col gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl shadow-accent/25 h-14 px-8 text-base"
              >
                <Link href="/contact">
                  Get My Free Assessment
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                className="bg-[#25D366] text-white hover:bg-[#25D366]/90 shadow-xl shadow-[#25D366]/25 h-14 px-8 text-base"
              >
                <a href="https://wa.me/27724115472" target="_blank" rel="noopener noreferrer">
                  <WhatsAppIcon className="mr-2 h-5 w-5" />
                  WhatsApp Us
                </a>
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap items-center gap-8 border-t border-primary-foreground/20 pt-8">
              <div>
                <p className="text-3xl font-bold text-accent">10+</p>
                <p className="text-sm text-primary-foreground/70">Years Experience</p>
              </div>
              <div className="h-10 w-px bg-primary-foreground/20" />
              <div>
                <p className="text-3xl font-bold text-accent">6</p>
                <p className="text-sm text-primary-foreground/70">Core Services</p>
              </div>
              <div className="h-10 w-px bg-primary-foreground/20" />
              <div>
                <p className="text-3xl font-bold text-accent">24/7</p>
                <p className="text-sm text-primary-foreground/70">Emergency Support</p>
              </div>
            </div>

            <div className="mt-8">
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-sm text-primary-foreground/80 hover:text-accent transition-colors"
              >
                Learn more about our company
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          {/* Animated Photo Grid */}
          <div className="grid grid-cols-2 gap-4">
            {galleryImages.map((image, index) => (
              <div
                key={image.src}
                className="group relative aspect-square overflow-hidden rounded-2xl animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
                style={{
                  animationDelay: `${index * 150}ms`,
                  animationDuration: "700ms",
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
