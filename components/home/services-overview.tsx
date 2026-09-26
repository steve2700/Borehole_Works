import Link from "next/link"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "Pump Installation & Repairs",
    description:
      "Borehole, pressure and submersible pump installation and repairs — wired and plumbed into your existing water system, done right the first time.",
    href: "/pump-installation-repairs",
    image: "/pump_installation_hero.jpg",
    keywords: "pump installation, borehole pump, pressure pump repairs",
  },
  {
    title: "JoJo Water Tank Installation",
    description:
      "Stand, plumbing, pump and pressure system — all installed properly. Trusted JoJo tank installers across Pretoria, Johannesburg and Midrand.",
    href: "/jojo-water-tank-installation",
    image: "/jojo_installation.jpg",
    keywords: "jojo tank installation, water tank installer, tank pump",
  },
  {
    title: "Plumbing Services",
    description:
      "Complete plumbing installations and repairs, leak detection, drain cleaning, and geyser maintenance across Gauteng.",
    href: "/plumbing-services",
    image: "/professional-plumber-working-on-pipes-installation.jpg",
    keywords: "plumbing, leak detection, geyser repairs",
  },
  {
    title: "Emergency Plumber & Burst Pipes",
    description:
      "24/7 emergency plumbing response for burst pipes, major leaks, and flood control across Gauteng — help when you need it most.",
    href: "/emergency-plumber-burst-pipes",
    image: "/burst_pipe_centurion.jpg",
    keywords: "emergency plumber, burst pipe repairs",
  },
  {
    title: "Geyser Installation & Repairs",
    description:
      "Electric, solar & Kwikot geyser installation, replacement, and repairs with full compliance certification.",
    href: "/geyser-installation-repairs",
    image: "/kwikot_geyser_installation.jpg",
    keywords: "geyser installation, Kwikot geyser, solar geyser",
  },
  {
    title: "Blocked Drains Unblocking",
    description:
      "Fast blocked drain clearing with high-pressure jetting and CCTV inspection across Gauteng.",
    href: "/blocked-drains-unblocking",
    image: "/blocked_drains.jpg",
    keywords: "blocked drains, drain unblocking, drain cleaning",
  },
]

export function ServicesOverview() {
  return (
    <section
      className="py-20 lg:py-28 bg-gradient-to-b from-background to-muted/30"
      itemScope
      itemType="https://schema.org/ItemList"
      aria-labelledby="services-heading"
    >
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header - SEO Optimized */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
            Our Services
          </span>
          <h2
            id="services-heading"
            className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
            itemProp="name"
          >
            Borehole Drilling, Pumps & Water Systems in Gauteng
          </h2>
          <p className="text-pretty text-lg text-muted-foreground leading-relaxed" itemProp="description">
            From drilling to the last drop reaching your tap, <strong>Borehole Works</strong> handles every part of your water system across <strong>Pretoria, Johannesburg, and Gauteng</strong>. One trusted team, no handoffs.
          </p>
        </div>

        {/* Services Grid - Flat images, no gradient overlay, accent bar instead */}
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Card
              key={service.href}
              className="group overflow-hidden border-border transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 pt-0 pb-6 gap-0"
              itemScope
              itemType="https://schema.org/Service"
              itemProp="itemListElement"
            >
              <meta itemProp="position" content={String(index + 1)} />

              {/* Service Image - flat, no overlay */}
              <div className="relative h-48 overflow-hidden bg-muted">
                <Image
                  src={service.image}
                  alt={`${service.title} in Gauteng - Professional ${service.keywords} services by Borehole Works`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  loading={index < 3 ? "eager" : "lazy"}
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  itemProp="image"
                />
              </div>

              {/* Accent bar - replaces the gradient fade */}
              <div className="h-1 w-full bg-accent" aria-hidden="true" />

              <CardContent className="p-6 pb-0">
                <h3
                  className="mb-2 text-lg font-bold group-hover:text-accent transition-colors"
                  itemProp="name"
                >
                  {service.title}
                </h3>
                <p
                  className="mb-4 text-sm text-muted-foreground leading-relaxed line-clamp-3"
                  itemProp="description"
                >
                  {service.description}
                </p>
                <Link
                  href={service.href}
                  className="inline-flex items-center text-sm font-semibold text-accent hover:text-accent/80 transition-colors"
                  itemProp="url"
                >
                  Learn More
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section with Stats */}
        <div className="mt-16 rounded-2xl bg-gradient-to-br from-primary to-primary/90 p-8 lg:p-12 text-center relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10" aria-hidden="true">
            <div className="absolute top-0 left-0 w-32 h-32 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-secondary rounded-full blur-3xl" />
          </div>

          <div className="relative z-10">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Not Sure If a Borehole Will Work on Your Property?
            </h3>
            <p className="text-white/90 mb-8 max-w-2xl mx-auto">
              Get a free site assessment from Gauteng's trusted borehole and water systems team. Licensed, experienced, and committed to getting it right the first time.
            </p>

            {/* Stats */}
            <div className="flex flex-wrap justify-center gap-8 mb-8 text-white">
              <div>
                <div className="text-3xl font-bold text-accent">6</div>
                <div className="text-sm text-white/80">Core Services</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">10+</div>
                <div className="text-sm text-white/80">Years Experience</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-white/80">Emergency Support</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl h-14 px-8 font-semibold transition-transform hover:scale-105"
              >
                <Link href="/contact">
                  Get My Free Site Assessment
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/30 bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm h-14 px-8 font-semibold transition-transform hover:scale-105"
              >
                <Link href="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
