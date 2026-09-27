import Link from "next/link"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

const marqueeRowTop = [
  { src: "/borehole_drilling_water_gushing.jpg", alt: "Borehole drilling rig striking water in Gauteng" },
  { src: "/solar_borehole_pump_aerial_view.jpg", alt: "Aerial view of solar borehole pump installation" },
  { src: "/eco_water_tanks_installation.jpg", alt: "Eco water tanks installation by Borehole Works" },
  { src: "/Pump-and-tanks.jpg", alt: "Pump and water tank installation by Borehole Works" },
]

const marqueeRowBottom = [
  { src: "/pump_system_installation.webp", alt: "Pump system installation with water tanks" },
  { src: "/green_water_tank_installation.jpg", alt: "Water tank installation in Gauteng" },
  { src: "/solar_borehole_tank_installation.jpg", alt: "Solar-powered borehole tank stand installation" },
  { src: "/borehole_drilling_rig_action.webp", alt: "Borehole drilling rig in action" },
]

export function CTASection() {
  return (
    <section className="relative overflow-hidden bg-primary py-20 lg:py-28">
      <style>{`
        @keyframes marquee-left {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        @keyframes marquee-right {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }
        .marquee-track-left {
          animation: marquee-left 36s linear infinite;
        }
        .marquee-track-right {
          animation: marquee-right 36s linear infinite;
        }
        .marquee-track-left:hover,
        .marquee-track-right:hover {
          animation-play-state: paused;
        }
      `}</style>

      <div className="container relative mx-auto px-4 lg:px-8">
        {/* Content - full width on top */}
        <div className="mx-auto max-w-3xl text-center mb-14">
          <h2 className="mb-6 text-balance text-3xl font-bold tracking-tight text-primary-foreground md:text-4xl lg:text-5xl">
            Ready to Solve Your Water Problem?
          </h2>
          <p className="mb-8 text-pretty text-lg text-primary-foreground/80">
            Contact Borehole Works today for a free site assessment. Our team provides honest advice, accurate
            quotations, and reliable installation across Pretoria, Johannesburg, and greater Gauteng.
          </p>

          <div className="mb-10 flex flex-col gap-4 sm:flex-row justify-center">
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
          <div className="flex flex-wrap items-center justify-center gap-8 border-t border-primary-foreground/20 pt-8">
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
              className="text-sm text-primary-foreground/80 hover:text-accent transition-colors"
            >
              Learn more about our company
            </Link>
          </div>
        </div>

        {/* Animated two-row image marquee */}
        <div className="space-y-4">
          <div className="flex w-max marquee-track-left">
            {[...marqueeRowTop, ...marqueeRowTop].map((img, i) => (
              <div key={i} className="relative mx-2 h-48 w-72 flex-shrink-0 overflow-hidden rounded-2xl">
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="288px" />
              </div>
            ))}
          </div>
          <div className="flex w-max marquee-track-right">
            {[...marqueeRowBottom, ...marqueeRowBottom].map((img, i) => (
              <div key={i} className="relative mx-2 h-48 w-72 flex-shrink-0 overflow-hidden rounded-2xl">
                <Image src={img.src} alt={img.alt} fill className="object-cover" sizes="288px" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
