"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"

const heroImages = [
  {
    src: "/pump_installation_hero.jpg",
    alt: "Borehole pump installation in Gauteng by Borehole Works",
  },
  {
    src: "/jojo_tank_installation.jpg",
    alt: "JoJo water tank installation in Gauteng by Borehole Works",
  },
  {
    src: "/borehole_pump_water_tank_installation.jpg",
    alt: "Borehole and water tank system installation in Gauteng",
  },
  {
    src: "/kwikot_geyser_installation.jpg",
    alt: "Geyser installation in Gauteng by Borehole Works",
  },
]

export function HeroSection() {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % heroImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section
      className="relative overflow-hidden bg-primary min-h-[600px] lg:min-h-[720px] flex items-center"
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* Full-bleed background image carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={image.src}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{ opacity: index === activeIndex ? 1 : 0 }}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
              quality={85}
              sizes="100vw"
              itemProp="image"
            />
          </div>
        ))}
        {/* Dark gradient overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary/95" />
      </div>

      {/* Dot indicators */}
      <div className="absolute right-6 top-6 z-10 flex gap-2 lg:right-10 lg:top-8">
        {heroImages.map((image, index) => (
          <button
            key={image.src}
            onClick={() => setActiveIndex(index)}
            aria-label={`Show image ${index + 1}`}
            className={`h-2 rounded-full transition-all ${
              index === activeIndex ? "w-6 bg-white" : "w-2 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>

      {/* Text content overlaid on top of the image */}
      <div className="container relative z-10 mx-auto px-6 py-20 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Gauteng Borehole & Water Specialists
          </p>

          <h1
            className="mb-5 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-primary-foreground sm:text-5xl"
            itemProp="name"
          >
            Water, drilled and
            <br />
            <span className="text-accent">delivered properly.</span>
          </h1>

          <p
            className="mb-8 text-pretty text-base leading-relaxed text-primary-foreground/80 sm:text-lg"
            itemProp="description"
          >
            <strong className="text-white">Borehole Works</strong> handles borehole drilling,
            pump installation, JoJo tank systems, geysers and plumbing for homes and businesses
            across <strong className="text-white">Pretoria, Johannesburg, Midrand</strong> and
            the rest of Gauteng.
          </p>

          <div className="mb-10 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Button
              asChild
              size="lg"
              className="h-12 bg-accent px-7 text-base font-semibold text-accent-foreground hover:bg-accent/90"
            >
              <Link href="/contact" itemProp="url">
                Get a Free Quote
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              className="group h-12 bg-[#25D366] px-7 text-base font-semibold text-white hover:bg-[#25D366]/90 shadow-xl shadow-[#25D366]/25 transition-all"
            >
              
                <a
                href="https://wa.me/27724115472"
                target="_blank"
                rel="noopener noreferrer"
              >
                <WhatsAppIcon className="mr-2 h-5 w-5" aria-hidden="true" />
                Chat on WhatsApp
              </a>
            </Button>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 border-t border-primary-foreground/10 pt-6 text-sm text-primary-foreground/60 lg:justify-start">
            <span>Licensed & Compliant</span>
            <span className="hidden h-1 w-1 rounded-full bg-primary-foreground/30 sm:block" />
            <span>Quality Guaranteed</span>
            <span className="hidden h-1 w-1 rounded-full bg-primary-foreground/30 sm:block" />
            <span>24/7 Emergency Callouts</span>
          </div>
        </div>
      </div>

      {/* Hidden Structured Data for SEO */}
      <meta itemProp="provider" content="Borehole Works" />
      <meta
        itemProp="areaServed"
        content="Gauteng, Pretoria, Johannesburg, Midrand, Sandton, Centurion, Randburg"
      />
      <meta
        itemProp="serviceType"
        content="Borehole Drilling, Pump Installation, Water Tanks, Plumbing"
      />
    </section>
  )
}
