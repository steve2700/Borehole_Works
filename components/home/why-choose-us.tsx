import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const reasons = [
  {
    title: "Skilled & Experienced Team",
    description:
      "Our technicians and drillers bring over 10 years of hands-on experience with borehole systems, pumps, and water infrastructure across Gauteng.",
  },
  {
    title: "Full Compliance & Certification",
    description:
      "We follow South African water regulations and SABS compliance standards, ensuring every installation meets legal and safety requirements.",
  },
  {
    title: "Transparent Pricing & Quotes",
    description:
      "No hidden costs or surprises. We provide clear, detailed quotations and honest advice from the first site visit through to completion.",
  },
  {
    title: "Uncompromising Quality Standards",
    description:
      "We use proven equipment and correct installation methods to deliver systems that last, not quick fixes that fail in a year.",
  },
  {
    title: "On-Time Project Delivery",
    description:
      "We understand water problems can't wait. Our scheduling and project execution ensure your system is up and running without unnecessary delays.",
  },
  {
    title: "Honest, Practical Advice",
    description:
      "We'll tell you straight if a borehole is right for your property, what yield to expect, and the most cost-effective system for your needs.",
  },
]

const stats = [
  { value: "10+", label: "Years Experience", sublabel: "In Water Systems" },
  { value: "6", label: "Core Services", sublabel: "Under One Team" },
  { value: "98%", label: "Client Satisfaction", sublabel: "5-Star Reviews" },
  { value: "24/7", label: "Emergency Support", sublabel: "Always Available" },
]

export function WhyChooseUs() {
  return (
    <section
      className="bg-muted py-20 lg:py-28 overflow-hidden relative"
      itemScope
      itemType="https://schema.org/Organization"
      aria-labelledby="why-choose-heading"
    >
      <div className="container mx-auto px-4 lg:px-8 relative">
        {/* Header Section with Image */}
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center mb-20">
          {/* Text Content */}
          <div>
            <span className="mb-4 inline-block rounded-full bg-secondary/10 px-4 py-1.5 text-sm font-semibold text-secondary uppercase tracking-wide">
              Why Choose Us
            </span>
            <h2
              id="why-choose-heading"
              className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl"
              itemProp="name"
            >
              Why <span className="text-accent">Borehole Works</span> is Gauteng's Trusted Choice
            </h2>
            <p className="mb-8 text-pretty text-lg text-muted-foreground leading-relaxed" itemProp="description">
              We bring together technical expertise, honest advice, and reliable workmanship for borehole drilling, pump systems, and water infrastructure across <strong>Pretoria, Johannesburg, Midrand, and greater Gauteng</strong>.
            </p>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="text-center sm:text-left bg-card border-l-4 border-accent rounded-r-xl p-4 transition-all hover:shadow-lg"
                  itemProp="award"
                >
                  <p className="text-4xl font-bold text-accent mb-1">
                    {stat.value}
                  </p>
                  <p className="text-sm font-semibold text-foreground">{stat.label}</p>
                  <p className="text-xs text-muted-foreground">{stat.sublabel}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg h-12 px-8 transition-transform hover:scale-105"
              >
                <Link href="/about">
                  Learn More About Us
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-accent/30 hover:bg-accent/5 h-12 px-8 transition-transform hover:scale-105"
              >
                <Link href="/contact">
                  Get a Free Assessment
                  <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Image Section - single flat image, caption bar instead of floating badges */}
          <div className="relative" itemProp="image" itemScope itemType="https://schema.org/ImageObject">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-xl ring-1 ring-border">
              <Image
                src="/pump_systems_boreholes.jpg"
                alt="Borehole Works team installing a pump and water system in Gauteng"
                fill
                className="object-cover"
                loading="lazy"
                quality={85}
                sizes="(max-width: 768px) 100vw, 50vw"
                itemProp="contentUrl"
              />
            </div>

            {/* Caption bar - replaces ZECO's floating quality/trust badges */}
            <div className="mt-0 flex items-center justify-between gap-4 rounded-b-2xl bg-primary px-6 py-4">
              <div>
                <p className="text-sm font-bold text-primary-foreground">Fully Licensed & Insured</p>
                <p className="text-xs text-primary-foreground/60">Quality assured on every job</p>
              </div>
              <div className="h-8 w-px bg-primary-foreground/20" />
              <div className="text-right">
                <p className="text-sm font-bold text-primary-foreground">10+ Years</p>
                <p className="text-xs text-primary-foreground/60">In the field</p>
              </div>
            </div>
          </div>
        </div>

        {/* Reasons Grid - no icons, numbered accent bar instead */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-3">
              What Sets Us Apart in Gauteng's Water Industry
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our commitment to honest advice, correct installation, and lasting results makes us the go-to choice for residential, commercial, and agricultural water needs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="group relative overflow-hidden rounded-2xl bg-card p-6 shadow-sm border border-border transition-all hover:shadow-xl hover:-translate-y-1"
              >
                <div className="absolute left-0 top-0 h-full w-1 bg-accent" aria-hidden="true" />

                <p className="mb-3 text-sm font-bold text-accent">
                  {String(index + 1).padStart(2, "0")}
                </p>

                <h3 className="mb-3 text-lg font-bold transition-colors">
                  {reason.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-br from-accent/5 to-secondary/10 rounded-2xl p-8 lg:p-12 border border-border">
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            Ready to Experience the Borehole Works Difference?
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Join our satisfied clients across Gauteng who trust us for borehole drilling, pump systems, and water infrastructure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-accent text-accent-foreground hover:bg-accent/90 shadow-xl h-14 px-8 font-semibold transition-transform hover:scale-105"
            >
              <Link href="/contact">
                Request Your Free Assessment
                <ArrowRight className="ml-2 h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-accent/30 hover:bg-accent/10 h-14 px-8 font-semibold transition-transform hover:scale-105"
            >
              <Link href="tel:+27724115472">
                Call Us: 072 411 5472
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
