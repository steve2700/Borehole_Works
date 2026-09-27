"use client"

import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_NUMBER } from "@/components/contact-info"
import { WhatsAppIcon } from "@/components/icons/whatsapp-icon"
import { trackCallClick, trackWhatsAppClick } from "@/lib/analytics"

const sizeClasses = {
  md: "h-12 px-6 text-sm",
  lg: "h-14 px-8 text-base",
}

export function CallButton({ size = "md" }: { size?: "md" | "lg" }) {
  return (
    
      <a
      href={`tel:${PHONE_TEL}`}
      onClick={trackCallClick}
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-primary font-semibold text-primary-foreground transition hover:bg-primary/90 ${sizeClasses[size]}`}
    >
      Call {PHONE_DISPLAY}
    </a>
  )
}

export function WhatsAppCta({ size = "md", label = "WhatsApp Us" }: { size?: "md" | "lg"; label?: string }) {
  return (
    
      <a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      onClick={trackWhatsAppClick}
      className={`inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] font-semibold text-white transition hover:bg-[#25D366]/90 ${sizeClasses[size]}`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {label}
    </a>
  )
}

export function StickyCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex border-t border-border bg-background md:hidden">
      
        <a
        href={`tel:${PHONE_TEL}`}
        onClick={trackCallClick}
        className="flex flex-1 items-center justify-center gap-2 bg-primary py-4 text-sm font-semibold text-primary-foreground"
      >
        Call Now
      </a>
      
        <a
        href={`https://wa.me/${WHATSAPP_NUMBER}`}
        target="_blank"
        rel="noopener noreferrer"
        onClick={trackWhatsAppClick}
        className="flex flex-1 items-center justify-center gap-2 bg-[#25D366] py-4 text-sm font-semibold text-white"
      >
        <WhatsAppIcon className="h-4 w-4" />
        WhatsApp
      </a>
    </div>
  )
}

export function HeroPhoneLink({ label }: { label: string }) {
  return (
    
      <a
      href={`tel:${PHONE_TEL}`}
      onClick={trackCallClick}
      className="group mt-8 flex items-center gap-4 text-white"
      aria-label={`Call Borehole Works on ${PHONE_DISPLAY}`}
    >
      <span>
        <span className="block text-sm uppercase tracking-wide text-white/70">{label}</span>
        <span className="block text-3xl font-bold tabular-nums group-hover:underline sm:text-4xl">
          {PHONE_DISPLAY}
        </span>
      </span>
    </a>
  )
}

export function BigPhoneLink() {
  return (
    
      <a
      href={`tel:${PHONE_TEL}`}
      onClick={trackCallClick}
      className="mt-6 inline-block text-4xl font-bold tabular-nums hover:underline sm:text-5xl"
    >
      {PHONE_DISPLAY}
    </a>
  )
}

export function RequestQuoteLink() {
  return (
    
      <a
      href={`tel:${PHONE_TEL}`}
      onClick={trackCallClick}
      className="inline-flex items-center justify-center rounded-xl border border-white/40 px-7 py-4 text-base font-semibold text-white transition hover:bg-white/10 md:text-lg"
    >
      Request a Quote — Call {PHONE_DISPLAY}
    </a>
  )
}
