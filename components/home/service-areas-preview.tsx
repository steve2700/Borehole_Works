import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const areas = [
  {
    name: "Pretoria",
    href: "/service-areas/pretoria",
    highlight: true,
    suburbs: ["Centurion", "Montana", "Hatfield", "Silverton", "Brooklyn"],
  },
  {
    name: "Johannesburg",
    href: "/service-areas/johannesburg",
    highlight: true,
    suburbs: ["Sandton", "Rosebank", "Fourways", "Randburg", "Roodepoort"],
  },
  {
    name: "Midrand",
    href: "/service-areas/midrand",
    suburbs: ["Carlswald", "Halfway House", "Waterfall Estate"],
  },
  {
    name: "Sandton",
    href: "/service-areas/sandton",
    suburbs: ["Morningside", "Rivonia", "Bryanston"],
  },
  {
    name: "Centurion",
    href: "/service-areas/centurion",
    suburbs: ["Highveld", "Eldoraigne", "Irene"],
  },
  {
    name: "Fourways",
    href: "/service-areas/fourways",
    suburbs: ["Lonehill", "Dainfern", "Cedar Lakes"],
  },
  {
    name: "Randburg",
    href: "/service-areas/randburg",
    suburbs: ["Ferndale", "Blairgowrie", "Northcliff"],
  },
  {
    name: "Bedfordview",
    href: "/service-areas/bedfordview",
    suburbs: ["Edenvale", "Germiston", "Kensington"],
  },
  {
    name: "Rosebank",
    href: "/service-areas/rosebank",
    suburbs: ["Parktown", "Saxonwold", "Melrose"],
  },
  {
    name: "Roodepoort",
    href: "/service-areas/roodepoort",
    suburbs: ["Northgate", "Florida", "Constantia Kloof"],
  },
]

const benefits = [
  "Free on-site assessments across Gauteng",
  "Experienced with residential and commercial water systems",
  "Emergency plumbing support when you need it",
]

export function ServiceAreasPreview() {
  return (
    <section
      className="py-20 lg:py-28 bg-background"
      itemScope
      itemType="https://schema.org/Service"
      aria-labelledby="service-areas-heading"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content Side */}
          <div>
            <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
              Service Coverage
            </span>
            <h2
              id="service-areas-heading"
              className="mb-4 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
              itemProp="name"
            >
              Serving <span className="text-accent">Gauteng Province</span>
            </h2>
            <p className="mb-6 text-pretty text-lg text-muted-foreground leading-relaxed" itemProp="description">
              <strong>Borehole Works</strong> provides borehole drilling, pump installation, and water system services throughout Gauteng, including <strong>Pretoria, Johannesburg, Midrand</strong> and surrounding areas.
            </p>

            {/* Benefits List - plain text, no icons */}
            <ul className="mb-8 space-y-2">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-muted-foreground">
                  <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-accent" aria-hidden="true" />
                  {benefit}
                </li>
              ))}
            </ul>

            {/* Area Pills */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-foreground mb-3">
                Our Primary Service Areas:
              </p>
              <div className="flex flex-wrap gap-2">
                {areas.map((area) => (
                  <Link
                    key={area.name}
                    href={area.href}
                    className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
                      area.highlight
                        ? "bg-accent text-accent-foreground hover:bg-accent/90"
                        : "bg-muted text-foreground hover:bg-accent/10 hover:text-accent border border-border"
                    }`}
                    itemProp="areaServed"
                  >
                    {area.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg h-12 px-8 transition-transform hover:scale-105"
              >
                <Link href="/service-areas">View All Service Areas</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-accent/30 hover:bg-accent/10 h-12 px-8 transition-transform hover:scale-105"
              >
                <Link href="tel:+27724115472">Call: 072 411 5472</Link>
              </Button>
            </div>
          </div>

          {/* Map Side - flat, no animated dots or floating badges */}
          <div className="relative" itemProp="image" itemScope itemType="https://schema.org/ImageObject">
            <div className="overflow-hidden rounded-2xl border border-border shadow-lg">
              <Image
                src="/gauteng-service-areas-map.webp"
                alt="Borehole Works service coverage map showing Gauteng province including Pretoria, Johannesburg, Midrand, Sandton, and Centurion areas"
                width={800}
                height={600}
                className="w-full"
                loading="lazy"
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
                itemProp="contentUrl"
              />
            </div>

            {/* Caption bar - replaces floating stat/location badges */}
            <div className="mt-0 rounded-b-2xl bg-primary px-6 py-4">
              <p className="text-sm font-bold text-primary-foreground">Gauteng Province</p>
              <p className="text-xs text-primary-foreground/60">Serving 10+ major areas and surrounding suburbs</p>
            </div>
          </div>
        </div>

        {/* Bottom Suburbs Section - no icons */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-2">
              We Also Serve These Suburbs & Surrounding Areas
            </h3>
            <p className="text-muted-foreground">
              Can't find your area? Contact us — we cover the entire Gauteng province.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {areas.map((area) => (
              <Link
                key={area.name}
                href={area.href}
                className="group p-4 rounded-xl bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all hover:-translate-y-1"
              >
                <h4 className="font-semibold text-sm group-hover:text-accent transition-colors mb-1">
                  {area.name}
                </h4>
                <div className="text-xs text-muted-foreground line-clamp-2">
                  {area.suburbs.join(", ")}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
