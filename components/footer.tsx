import Link from "next/link"
import Image from "next/image"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { TrackedLink } from "@/components/service-cta"
import { EMAIL, PHONE_DISPLAY } from "@/components/contact-info"

const services = [
  { title: "Borehole Drilling", href: "/borehole-drilling" },
  { title: "Pump Installation & Repairs", href: "/pump-installation-repairs" },
  { title: "Solar Borehole Pumps", href: "/solar-borehole-pumps" },
  { title: "Irrigation Systems", href: "/irrigation-systems" },
  { title: "JoJo Water Tank Installation", href: "/jojo-water-tank-installation" },
  { title: "Plumbing Services", href: "/plumbing-services" },
  { title: "Emergency Plumber & Burst Pipes", href: "/emergency-plumber-burst-pipes" },
  { title: "Geyser Installation & Repairs", href: "/geyser-installation-repairs" },
  { title: "Blocked Drains Unblocking", href: "/blocked-drains-unblocking" },
]

const serviceAreas = [
  { name: "Pretoria", href: "/service-areas/pretoria" },
  { name: "Johannesburg", href: "/service-areas/johannesburg" },
  { name: "Sandton", href: "/service-areas/sandton" },
  { name: "Midrand", href: "/service-areas/midrand" },
  { name: "Centurion", href: "/service-areas/centurion" },
  { name: "Randburg", href: "/service-areas/randburg" },
]

const quickLinks = [
  { title: "About Us", href: "/about" },
  { title: "All Services", href: "/services" },
  { title: "Gallery", href: "/gallery" },
  { title: "Service Areas", href: "/service-areas" },
  { title: "FAQ", href: "/faq" },
  { title: "Contact Us", href: "/contact" },
]

export function Footer() {
  return (
    <footer className="border-t border-border bg-primary text-primary-foreground">
      {/* Trust Badges */}
      <div className="border-b border-primary-foreground/10 bg-primary/95">
        <div className="container mx-auto px-4 py-8 lg:px-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="border-l-2 border-accent pl-4">
              <h4 className="font-semibold text-white">Licensed & Certified</h4>
              <p className="text-sm text-primary-foreground/70">Fully compliant professionals</p>
            </div>

            <div className="border-l-2 border-accent pl-4">
              <h4 className="font-semibold text-white">Insured & Guaranteed</h4>
              <p className="text-sm text-primary-foreground/70">All work fully insured</p>
            </div>

            <div className="border-l-2 border-accent pl-4">
              <h4 className="font-semibold text-white">Experienced Team</h4>
              <p className="text-sm text-primary-foreground/70">10+ years in water systems</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-6">
          {/* Company Info */}
          <div className="space-y-4 lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-lg shadow-lg">
                <Image
                  src="/logo-icon.png"
                  alt="Borehole Works Logo"
                  width={48}
                  height={48}
                  className="object-cover"
                  loading="lazy"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  Borehole <span className="text-accent">Works</span>
                </h3>
                <p className="text-xs text-primary-foreground/70">Water & Pump Specialists</p>
              </div>
            </Link>

            <p className="max-w-md text-sm leading-relaxed text-primary-foreground/80">
              Borehole Works is your trusted partner for borehole drilling, pump installation, water tanks, and
              plumbing services across Gauteng. From the first site assessment to the last drop reaching your
              tap, we deliver reliable water systems that last.
            </p>

            <div>
              <h4 className="mb-3 text-sm font-semibold text-white">Reach Us Directly</h4>
              <TrackedLink
                kind="whatsapp"
                className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-4 py-2 text-sm font-semibold text-white transition-all hover:bg-[#25D366]/90"
              >
                <WhatsAppIcon className="h-4 w-4" />
                Chat on WhatsApp
              </TrackedLink>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Quick Links</h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="inline-block text-sm text-primary-foreground/80 transition-colors hover:translate-x-1 hover:text-accent"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Our Services</h4>
            <div className="grid grid-cols-2 gap-x-6">
              <ul className="space-y-2.5">
                {services.slice(0, 5).map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="inline-block text-sm text-primary-foreground/80 transition-colors hover:translate-x-1 hover:text-accent"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-2.5">
                {services.slice(5, 9).map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="inline-block text-sm text-primary-foreground/80 transition-colors hover:translate-x-1 hover:text-accent"
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/services"
              className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-accent hover:underline"
            >
              View All Services →
            </Link>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-white">Contact Us</h4>
            <ul className="space-y-3 text-sm">
              <li>
                
                  <a
                  href="https://www.google.com/maps?q=Borehole+Works+Gauteng+South+Africa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary-foreground/80 transition-colors hover:text-accent"
                >
                  Gauteng, South Africa
                  <br />
                  Serving Pretoria &amp; Johannesburg
                </a>
              </li>

              <li>
                <TrackedLink
                  kind="call"
                  className="text-primary-foreground/80 transition-colors hover:text-accent"
                >
                  {PHONE_DISPLAY}
                </TrackedLink>
              </li>

              <li>
                <TrackedLink
                  kind="whatsapp"
                  className="text-primary-foreground/80 transition-colors hover:text-accent"
                >
                  WhatsApp: {PHONE_DISPLAY}
                </TrackedLink>
              </li>

              <li>
                <TrackedLink
                  kind="email"
                  className="text-primary-foreground/80 transition-colors hover:text-accent"
                >
                  {EMAIL}
                </TrackedLink>
              </li>

              <li className="text-primary-foreground/80">
                <div className="font-semibold text-white">Mon-Fri: 8:00 - 17:00</div>
                <div className="text-accent">24/7 Emergency Support</div>
              </li>
            </ul>
          </div>
        </div>

        {/* Service Areas Bar */}
        <div className="mt-10 border-t border-primary-foreground/10 pt-8">
          <h4 className="mb-4 text-center text-sm font-bold uppercase tracking-wider text-white">
            Proudly Serving Gauteng
          </h4>
          <div className="flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="rounded-full bg-primary-foreground/10 px-4 py-1.5 text-sm text-primary-foreground/80 transition-all hover:bg-accent hover:text-white"
              >
                {area.name}
              </Link>
            ))}
            <Link
              href="/service-areas"
              className="rounded-full bg-accent px-4 py-1.5 text-sm font-semibold text-white hover:bg-accent/90"
            >
              View All Areas →
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
          <p className="text-center text-sm text-primary-foreground/70 md:text-left">
            © {new Date().getFullYear()} Borehole Works. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <Link
              href="/privacy-policy"
              className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap.xml"
              className="text-sm text-primary-foreground/70 transition-colors hover:text-accent"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
