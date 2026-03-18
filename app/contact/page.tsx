import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact/contact-form"
import { Mail, Phone, Instagram, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact | Ileana Turner Agency",
  description: "Request a free demo or book a discovery call. Get premium video marketing for your med spa, aesthetic clinic, or business.",
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "iturneragency@gmail.com",
    href: "mailto:iturneragency@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(910) 442-8281",
    href: "tel:(910) 442-8281",
  },
  {
    icon: Instagram,
    label: "Instagram",
    value: "@iturneragency",
    href: "https://www.instagram.com/iturneragency/",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24 hours",
    href: null,
  },
]

export default function ContactPage() {
  return (
    <>
      <Navigation />
      <main className="pt-[72px] md:pt-[80px] lg:pt-[96px]">
        {/* Hero */}
        <section className="py-20 lg:py-28 bg-[#E5E7EB]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-widest uppercase text-[#0F766E] mb-4">
                Contact Us
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-[#1F2937] text-balance">
                {"Let's"} create something amazing together
              </h1>
              <p className="mt-8 text-lg text-[#6B7280] leading-relaxed max-w-2xl">
                Ready to elevate your video marketing? Request a free demo to see
                what we can create for your business, or book a discovery call to
                discuss your goals.
                <p className="mt-4 text-sm text-[#0F766E] font-medium">
                  No commitment. Just a quick look at what’s possible for your business.
                </p>
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
              {/* Form */}
              <div className="lg:col-span-3">
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div className="lg:col-span-2">
                <div className="bg-[#0F766E] text-white rounded-2xl p-8 lg:p-10 sticky top-28">
                  <h2 className="font-serif text-2xl font-semibold mb-8">
                    Get in Touch
                  </h2>

                  <div className="space-y-6">
                    {contactInfo.map((item) => (
                      <div key={item.label} className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#14B8A6]/30 flex items-center justify-center flex-shrink-0">
                          <item.icon className="h-5 w-5 text-[#14B8A6]" />
                        </div>
                        <div>
                          <p className="text-sm text-white/60 mb-1">{item.label}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              target={item.href.startsWith("http") ? "_blank" : undefined}
                              rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                              className="text-white hover:text-[#14B8A6] transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-white">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-10 pt-8 border-t border-white/20">
                    <h3 className="font-serif text-lg font-semibold mb-4" id="call">
                      Prefer to Talk?
                    </h3>
                    <p className="text-white/80 leading-relaxed mb-6">
                      Book a free 15-minute discovery call to discuss your video
                      marketing goals and see if {"we're"} a good fit.
                    </p>
                    <a
                      href="#"
                      className="inline-flex items-center justify-center w-full h-12 bg-white text-[#0F766E] rounded-lg font-medium hover:bg-white/90 transition-colors"
                    >
                      Schedule a Call
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
