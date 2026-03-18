import Link from "next/link"
import Image from "next/image"
import { Instagram, Mail, Phone } from "lucide-react"

const footerLinks = {
  services: [
    { href: "/services#social-media", label: "Social Media Video Ads" },
    { href: "/services#med-spa", label: "Med Spa Campaigns" },
    { href: "/services#tv-commercials", label: "TV-Ready Commercials" },
    { href: "/services#bilingual", label: "Bilingual Video Ads" },
    { href: "/services#jingles", label: "Custom Jingles" },
  ],
  industries: [
    { href: "/industries#med-spas", label: "Med Spas & Aesthetic Clinics" },
    { href: "/industries#real-estate", label: "Real Estate" },
    { href: "/industries#restaurants", label: "Restaurants" },
    { href: "/industries#local-business", label: "Local Businesses" },
    { href: "/industries#coaches", label: "Coaches & Consultants" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/contact", label: "Contact" },
    { href: "/med-spa", label: "For Med Spas" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <Image
                src="/images/logo.svg"
                alt="Ileana Turner Agency"
                width={56}
                height={56}
                className="h-16 w-16 object-contain brightness-110"
              />
            </Link>
            <p className="mt-6 text-sm text-white/70 leading-relaxed max-w-xs">
              Boutique creative marketing studio specializing in premium promotional videos for businesses that want to be seen, remembered, and chosen.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="https://www.instagram.com/iturneragency"
                target="@iturneragency"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#14B8A6] transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="mailto:iturneragency@gmail.com"
                className="text-white/70 hover:text-[#14B8A6] transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="tel:(910) 442-8281"
                className="text-white/70 hover:text-[#14B8A6] transition-colors"
                aria-label="Phone"
              >
                <Phone className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[#14B8A6] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries Column */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-6">Industries</h3>
            <ul className="space-y-3">
              {footerLinks.industries.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[#14B8A6] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="font-serif text-lg font-medium mb-6">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-[#14B8A6] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/20">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-white/60">
              {new Date().getFullYear()} Ileana Turner Agency. All rights reserved.
            </p>
            <p className="text-sm text-white/60">
              English + Spanish | Premium Video Marketing
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
