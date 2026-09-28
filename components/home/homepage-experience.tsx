"use client"

import { useEffect, useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ScrollReveal } from "@/components/scroll-reveal"
import { PHONE_TEL } from "@/components/contact-info"

const work = [
  { number: "01", title: "Water where you need it", copy: "Borehole drilling, pump systems and tanks designed around the way your property actually uses water.", image: "/borehole_drilling_water_gushing.jpg", href: "/borehole-drilling" },
  { number: "02", title: "The pressure, sorted", copy: "From a weak shower to a dry JoJo tank, we diagnose the system and install the right fix without guesswork.", image: "/pressure_pumps_installations.jpg", href: "/pump-installation-repairs" },
  { number: "03", title: "A team that leaves it better", copy: "Clean workmanship, clear communication and practical advice from the first call to the final test.", image: "/professional-plumber-working-on-pipes-in-a-gauteng-.jpg", href: "/plumbing-services" },
]

const gallery = [
  "/pump_system_installation.webp",
  "/jojo_tank_installation.jpg",
  "/solar_borehole_tank_installation.jpg",
  "/blocked_drains.jpg",
  "/geyser-installation.jpg",
]

const heroImages = [
  { src: "/borehole_drilling_rig_action.webp", alt: "Borehole drilling rig working in Gauteng" },
  { src: "/pump_installation_hero.jpg", alt: "Borehole pump installation in Gauteng" },
  { src: "/jojo_tank_installation.jpg", alt: "JoJo water tank installation in Gauteng" },
  { src: "/borehole_pump_water_tank_installation.jpg", alt: "Borehole pump and water tank system" },
]

export function HomepageExperience() {
  const [activeHero, setActiveHero] = useState(0)
  const [name, setName] = useState("")
  useEffect(() => {
    const interval = setInterval(() => setActiveHero((current) => (current + 1) % heroImages.length), 5000)
    return () => clearInterval(interval)
  }, [])
  const [suburb, setSuburb] = useState("")
  const [need, setNeed] = useState("")

  const whatsappUrl = useMemo(() => {
    const message = `Hi Borehole Works, I'm ${name || "a customer"} in ${suburb || "Gauteng"}. I need help with: ${need || "a water or plumbing job"}. Please get back to me.`
    return `https://wa.me/27724115472?text=${encodeURIComponent(message)}`
  }, [name, suburb, need])

  return (
    <main className="overflow-hidden">
      <section className="relative isolate min-h-[680px] bg-primary text-primary-foreground lg:min-h-[760px]">
        {heroImages.map((image, index) => (
          <div key={image.src} className="absolute inset-0 transition-opacity duration-1000 ease-in-out" style={{ opacity: activeHero === index ? 1 : 0 }}>
            <Image src={image.src} alt={image.alt} fill priority={index === 0} className="object-cover object-center" sizes="100vw" />
          </div>
        ))}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(26,31,37,.96)_0%,rgba(26,31,37,.82)_44%,rgba(26,31,37,.28)_100%)]" />
        <div className="absolute right-5 top-6 z-10 flex gap-2 sm:right-8 lg:right-12 lg:top-8" aria-label="Hero image selection">
          {heroImages.map((image, index) => (
            <button key={image.src} type="button" onClick={() => setActiveHero(index)} aria-label={`Show hero image ${index + 1}`} aria-pressed={activeHero === index} className={`h-1.5 rounded-full transition-all ${activeHero === index ? "w-8 bg-accent" : "w-2 bg-primary-foreground/45 hover:bg-primary-foreground/75"}`} />
          ))}
        </div>
        <div className="container relative mx-auto flex min-h-[680px] items-end px-4 pb-16 pt-28 sm:px-8 lg:min-h-[760px] lg:px-12 lg:pb-24">
          <div className="max-w-3xl">
            <p className="area-rise text-xs font-semibold uppercase tracking-[0.24em] text-accent">Borehole Works / Gauteng</p>
            <h1 className="area-rise mt-5 max-w-3xl text-balance text-5xl font-bold leading-[.98] tracking-[-.04em] sm:text-7xl lg:text-8xl" style={{ animationDelay: "100ms" }}>
              Water systems that work as hard as you do.
            </h1>
            <p className="area-rise mt-7 max-w-xl text-pretty text-lg leading-relaxed text-primary-foreground/75 sm:text-xl" style={{ animationDelay: "180ms" }}>
              Boreholes, pumps, tanks and plumbing, planned properly, installed cleanly and supported by a team that knows Gauteng.
            </p>
            <div className="area-rise mt-9 flex flex-wrap gap-4" style={{ animationDelay: "280ms" }}>
              <Link href={`tel:${PHONE_TEL}`} className="rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground transition-transform hover:-translate-y-1">Call for a free quote</Link>
              <Link href="#job-card" className="rounded-full border border-primary-foreground/30 px-7 py-3.5 text-sm font-semibold transition-colors hover:border-primary-foreground hover:bg-primary-foreground/10">Send a job card</Link>
            </div>
            <div className="area-rise mt-16 flex flex-wrap gap-x-8 gap-y-3 border-t border-primary-foreground/15 pt-5 text-xs font-semibold uppercase tracking-[0.14em] text-primary-foreground/55" style={{ animationDelay: "380ms" }}>
              <span>Residential</span><span>Commercial</span><span>Emergency callouts</span>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-background">
        <div className="container mx-auto grid gap-12 px-4 py-20 sm:px-8 lg:grid-cols-12 lg:items-center lg:gap-16 lg:px-12 lg:py-28">
          <ScrollReveal variant="wipe" className="lg:col-span-5">
            <div className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted">
              <Image src="/pump_system_installation.webp" alt="Borehole pump and water system installation" fill sizes="(min-width: 1024px) 42vw, 100vw" className="object-cover transition-transform duration-1000 group-hover:scale-105" />
              <div className="absolute inset-x-5 bottom-5 rounded-xl border border-white/20 bg-primary/80 p-4 text-primary-foreground backdrop-blur-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">One team. One plan.</p>
                <p className="mt-1 text-sm text-primary-foreground/75">From the ground to the tap.</p>
              </div>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={120} className="lg:col-span-6 lg:col-start-7">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground"><span className="text-accent">01</span><span className="h-px w-8 bg-border" />The difference</p>
            <h2 className="mt-5 text-balance text-4xl font-bold leading-tight tracking-tight">Not just a callout. A better way to use water.</h2>
            <p className="mt-7 text-pretty text-2xl font-semibold leading-snug tracking-tight md:text-4xl">Good water infrastructure should feel invisible: reliable in the background, ready when your home or business needs it.</p>
            <p className="mt-7 max-w-2xl leading-relaxed text-muted-foreground">We bring drilling, pumping, storage and plumbing together so you are not left coordinating five different contractors. One experienced team, one clear plan, one finished job.</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-muted">
        <div className="container mx-auto px-4 py-20 sm:px-8 lg:px-12 lg:py-28">
          <ScrollReveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground"><span className="text-accent">02</span><span className="h-px w-8 bg-border" />What we get called for</p>
            <h2 className="mt-5 max-w-2xl text-balance text-4xl font-bold tracking-tight md:text-5xl">From first drop to final connection.</h2>
          </ScrollReveal>
          <div className="mt-14 flex flex-col gap-16 lg:gap-24">
            {work.map((item, index) => (
              <div key={item.number} className="grid items-center gap-8 md:grid-cols-12 md:gap-14">
                <ScrollReveal variant="wipe" className={`md:col-span-6 ${index % 2 ? "md:order-2" : ""}`}>
                  <Link href={item.href} className="group block overflow-hidden rounded-2xl">
                    <div className="relative aspect-[16/11] overflow-hidden"><Image src={item.image} alt={item.title} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover transition-transform duration-1000 group-hover:scale-105" /></div>
                  </Link>
                </ScrollReveal>
                <ScrollReveal delay={140} className={`md:col-span-5 ${index % 2 ? "md:order-1" : "md:col-start-8"}`}>
                  <p className="text-6xl font-bold tracking-tight text-foreground/15">{item.number}</p>
                  <h3 className="mt-3 text-3xl font-bold tracking-tight">{item.title}</h3>
                  <p className="mt-4 leading-relaxed text-muted-foreground">{item.copy}</p>
                  <Link href={item.href} className="mt-6 inline-block border-b-2 border-accent pb-1 text-sm font-semibold">Explore the service</Link>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-primary py-5 text-primary-foreground" aria-label="Recent work gallery">
        <div className="flex w-max gap-5 area-marquee">
          {[...gallery, ...gallery].map((src, index) => <div key={`${src}-${index}`} className="relative h-48 w-72 overflow-hidden rounded-xl sm:h-64 sm:w-96"><Image src={src} alt="Borehole Works installation" fill sizes="384px" className="object-cover" /></div>)}
        </div>
      </section>

      <section id="job-card" className="bg-background">
        <div className="container mx-auto grid gap-12 px-4 py-20 sm:px-8 lg:grid-cols-12 lg:gap-16 lg:px-12 lg:py-28">
          <ScrollReveal className="lg:col-span-5">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.22em] text-muted-foreground"><span className="text-accent">03</span><span className="h-px w-8 bg-border" />Start the conversation</p>
            <h2 className="mt-5 text-balance text-4xl font-bold tracking-tight md:text-5xl">Tell us what needs doing.</h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">Send a few details on WhatsApp. Photos are welcome. We will ask the right questions before we recommend the next step.</p>
          </ScrollReveal>
          <ScrollReveal delay={140} className="lg:col-span-6 lg:col-start-7">
            <div className="job-card-lines rounded-2xl border border-border bg-card p-7 shadow-sm sm:p-9">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">New job card</p>
              <div className="mt-8 grid gap-6">
                <label className="grid gap-2 text-sm font-semibold">Your name<input value={name} onChange={(event) => setName(event.target.value)} placeholder="e.g. Thabo Mokoena" className="border-0 border-b border-border bg-transparent px-0 py-2 text-base font-normal outline-none placeholder:text-muted-foreground/60 focus:border-accent" /></label>
                <label className="grid gap-2 text-sm font-semibold">Suburb or area<input value={suburb} onChange={(event) => setSuburb(event.target.value)} placeholder="e.g. Midrand" className="border-0 border-b border-border bg-transparent px-0 py-2 text-base font-normal outline-none placeholder:text-muted-foreground/60 focus:border-accent" /></label>
                <label className="grid gap-2 text-sm font-semibold">What do you need help with?<textarea value={need} onChange={(event) => setNeed(event.target.value)} placeholder="Tell us about the job..." rows={3} className="resize-none border-0 border-b border-border bg-transparent px-0 py-2 text-base font-normal outline-none placeholder:text-muted-foreground/60 focus:border-accent" /></label>
              </div>
              <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" className="mt-9 block rounded-full bg-[#25D366] px-6 py-4 text-center text-sm font-bold text-white transition-transform hover:-translate-y-1">Send this job card on WhatsApp</a>
              <p className="mt-4 text-center text-xs text-muted-foreground">No forms disappearing into a black hole. You will speak to a real person.</p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section className="bg-accent text-accent-foreground">
        <div className="container mx-auto flex flex-col gap-8 px-4 py-16 sm:px-8 lg:flex-row lg:items-end lg:justify-between lg:px-12 lg:py-20">
          <div><p className="text-xs font-semibold uppercase tracking-[0.22em] opacity-70">Coverage across Gauteng</p><h2 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight md:text-5xl">A proper team is already closer than you think.</h2></div>
          <Link href="/service-areas" className="shrink-0 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-1">View service areas</Link>
        </div>
      </section>
    </main>
  )
}

