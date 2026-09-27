"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetTitle, SheetDescription } from "@/components/ui/sheet"
import { Menu, Phone, ChevronDown, ChevronRight, X, MapPin, Mail, Home } from "lucide-react"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { cn } from "@/lib/utils"

const services = [
  {
    title: "Borehole Drilling",
    href: "/borehole-drilling",
    description: "Site assessment, drilling and yield testing for new boreholes",
  },
  {
    title: "Pump Installation & Repairs",
    href: "/pump-installation-repairs",
    description: "Borehole, pressure & submersible pump installs and repairs",
  },
  {
    title: "Solar Borehole Pumps",
    href: "/solar-borehole-pumps",
    description: "Solar-powered pump systems for off-grid water supply",
  },
  {
    title: "Irrigation Systems",
    href: "/irrigation-systems",
    description: "Garden, farm and agricultural irrigation design & install",
  },
  {
    title: "JoJo Water Tank Installation",
    href: "/jojo-water-tank-installation",
    description: "Tank stands, plumbing, pumps & pressure systems",
  },
  {
    title: "Plumbing Services",
    href: "/plumbing-services",
    description: "Installations, repairs, leak detection & geysers",
  },
  {
    title: "Emergency Plumber & Burst Pipes",
    href: "/emergency-plumber-burst-pipes",
    description: "24/7 emergency response for burst pipes & leaks",
  },
  {
    title: "Geyser Installation & Repairs",
    href: "/geyser-installation-repairs",
    description: "Electric, solar & Kwikot geyser installs & repairs",
  },
  {
    title: "Blocked Drains Unblocking",
    href: "/blocked-drains-unblocking",
    description: "Fast drain cleaning with jetting & CCTV inspection",
  },
]

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setServicesOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        scrolled
          ? "border-border bg-background/95 backdrop-blur-lg shadow-sm supports-[backdrop-filter]:bg-background/80"
          : "border-transparent bg-background",
      )}
    >
      {/* Top Bar with Contact Info */}
      <div className="hidden border-b border-border/50 bg-primary text-primary-foreground lg:block">
        <div className="container mx-auto flex h-10 items-center justify-between px-4 lg:px-8">
          <div className="flex items-center gap-6 text-sm">
            
              <a
              href="tel:+27724115472"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Phone className="h-3.5 w-3.5" />
              072 411 5472
            </a>
            
              <a
              href="https://wa.me/27724115472"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <WhatsAppIcon className="h-3.5 w-3.5" />
              WhatsApp Us
            </a>
            
              <a
              href="mailto:info@boreholeworks.co.za"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <Mail className="h-3.5 w-3.5" />
              info@boreholeworks.co.za
            </a>
            
              <a
              href="https://www.google.com/maps?q=Borehole+Works+Gauteng+South+Africa"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 hover:text-accent transition-colors"
            >
              <MapPin className="h-3.5 w-3.5" />
              Gauteng, South Africa
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="container mx-auto flex h-16 lg:h-20 items-center justify-between px-4 lg:px-8">
        {/* Logo - real image file */}
        <Link href="/" className="flex items-center gap-3">
          <div className="relative flex h-11 w-11 items-center justify-center overflow-hidden rounded-xl shadow-lg">
            <Image
              src="/logo-icon.png"
              alt="Borehole Works Logo"
              width={44}
              height={44}
              className="object-cover"
              priority
              quality={90}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-xl font-bold text-primary leading-tight tracking-tight">
              Borehole <span className="text-accent">Works</span>
            </span>
            <span className="hidden text-xs text-muted-foreground sm:block">
              Water & Pump Specialists
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          <Link
            href="/"
            className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent"
          >
            About Us
          </Link>

          {/* Services Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent"
              aria-expanded={servicesOpen}
              aria-haspopup="true"
            >
              Services
              <ChevronDown
                className={cn(
                  "ml-1 h-4 w-4 transition-transform duration-200",
                  servicesOpen && "rotate-180"
                )}
              />
            </button>

            {servicesOpen && (
              <div className="absolute left-0 top-full mt-2 w-[640px] rounded-lg border border-border bg-white shadow-xl z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="grid grid-cols-2 gap-1 p-4 max-h-[70vh] overflow-y-auto">
                  {services.map((service) => (
                    <Link
                      key={service.href}
                      href={service.href}
                      onClick={() => setServicesOpen(false)}
                      className="group block select-none rounded-md border-l-2 border-transparent p-3 transition-all hover:border-accent hover:bg-muted"
                    >
                      <div className="text-sm font-semibold leading-tight mb-1 text-foreground group-hover:text-accent transition-colors">
                        {service.title}
                      </div>
                      <p className="text-xs leading-snug text-muted-foreground line-clamp-2">
                        {service.description}
                      </p>
                    </Link>
                  ))}
                  <div className="col-span-2 mt-2 border-t border-border pt-3">
                    <Link
                      href="/services"
                      onClick={() => setServicesOpen(false)}
                      className="flex items-center justify-center gap-2 rounded-md bg-accent/10 p-3 text-sm font-semibold text-accent hover:bg-accent hover:text-accent-foreground transition-all"
                    >
                      View All Services <ChevronRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Link
            href="/gallery"
            className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent"
          >
            Gallery
          </Link>

          <Link
            href="/service-areas"
            className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent"
          >
            Service Areas
          </Link>

          <Link
            href="/contact"
            className="inline-flex h-10 items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent"
          >
            Contact
          </Link>
        </nav>

        {/* CTA Button & Mobile Menu */}
        <div className="flex items-center gap-3">
          <Button
            asChild
            className="hidden bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg shadow-accent/25 sm:inline-flex"
          >
            <Link href="/contact">
              <Phone className="mr-2 h-4 w-4" />
              Get Free Quote
            </Link>
          </Button>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="lg:hidden border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all bg-transparent"
                aria-label="Toggle menu"
              >
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-full max-w-md p-0 border-l-0 overflow-hidden [&>button]:hidden">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <SheetDescription className="sr-only">Site navigation and contact options</SheetDescription>

              {/* Mobile Menu Header */}
              <div className="bg-primary p-6 text-primary-foreground">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-10 w-10 items-center justify-center overflow-hidden rounded-lg">
                      <Image
                        src="/logo-icon.png"
                        alt="Borehole Works"
                        width={40}
                        height={40}
                        className="object-cover"
                        priority
                      />
                    </div>
                    <div>
                      <p className="font-bold text-sm">Borehole Works</p>
                      <p className="text-xs text-white/70">Water & Pump Specialists</p>
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setIsOpen(false)}
                    className="text-white hover:bg-white/10"
                    aria-label="Close menu"
                  >
                    <X className="h-5 w-5" />
                  </Button>
                </div>
                <div className="space-y-2 text-sm text-white/90">
                  
                    <a
                    href="tel:+27724115472"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Phone className="h-4 w-4" />
                    072 411 5472
                  </a>
                  
                    <a
                    href="https://wa.me/27724115472"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <WhatsAppIcon className="h-4 w-4" />
                    WhatsApp: 072 411 5472
                  </a>
                  
                    <a
                    href="mailto:info@boreholeworks.co.za"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Mail className="h-4 w-4" />
                    info@boreholeworks.co.za
                  </a>
                  
                    <a
                    href="https://www.google.com/maps?q=Borehole+Works+Gauteng+South+Africa"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <MapPin className="h-4 w-4" />
                    Gauteng, South Africa
                  </a>
                </div>
              </div>

              {/* Mobile Menu Navigation */}
              <nav className="flex-1 overflow-y-auto p-6">
                <div className="flex flex-col gap-1">
                  <Link
                    href="/"
                    className="flex items-center gap-3 rounded-xl p-4 text-lg font-medium hover:bg-muted transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <Home className="h-5 w-5 text-accent" />
                    Home
                  </Link>

                  <Link
                    href="/about"
                    className="flex items-center gap-3 rounded-xl p-4 text-lg font-medium hover:bg-muted transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    About Us
                  </Link>

                  {/* Services Accordion */}
                  <div className="rounded-xl overflow-hidden">
                    <button
                      className="flex w-full items-center justify-between gap-3 p-4 text-lg font-medium hover:bg-muted transition-colors"
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      aria-expanded={mobileServicesOpen}
                    >
                      Services
                      <ChevronDown
                        className={cn(
                          "h-5 w-5 text-muted-foreground transition-transform duration-300",
                          mobileServicesOpen && "rotate-180",
                        )}
                      />
                    </button>

                    <div
                      className={cn(
                        "overflow-hidden transition-all duration-300",
                        mobileServicesOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0",
                      )}
                    >
                      <div className="flex flex-col gap-1 px-4 pb-4">
                        {services.map((service) => (
                          <Link
                            key={service.href}
                            href={service.href}
                            className="rounded-lg border-l-2 border-transparent p-3 text-sm font-medium hover:border-accent hover:bg-muted hover:text-accent transition-colors"
                            onClick={() => setIsOpen(false)}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </div>
                      <Link
                        href="/services"
                        className="mx-4 mb-4 flex items-center justify-center gap-2 rounded-xl border-2 border-dashed border-accent/30 p-3 text-sm font-medium text-accent hover:bg-accent/5 transition-colors"
                        onClick={() => setIsOpen(false)}
                      >
                        View All Services
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>

                  <Link
                    href="/gallery"
                    className="flex items-center gap-3 rounded-xl p-4 text-lg font-medium hover:bg-muted transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Gallery
                  </Link>

                  <Link
                    href="/service-areas"
                    className="flex items-center gap-3 rounded-xl p-4 text-lg font-medium hover:bg-muted transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Service Areas
                  </Link>

                  <Link
                    href="/contact"
                    className="flex items-center gap-3 rounded-xl p-4 text-lg font-medium hover:bg-muted transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    Contact
                  </Link>
                </div>
              </nav>

              {/* Mobile Menu Footer CTA */}
              <div className="border-t border-border bg-muted/50 p-6">
                <Button
                  asChild
                  size="lg"
                  className="w-full bg-accent text-accent-foreground hover:bg-accent/90 shadow-lg"
                >
                  <Link href="/contact" onClick={() => setIsOpen(false)}>
                    <Phone className="mr-2 h-5 w-5" />
                    Get Your Free Quote
                  </Link>
                </Button>
                <p className="mt-3 text-center text-xs text-muted-foreground">
                  Free assessments • Licensed & Insured • Gauteng
                </p>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
