import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Video, Tv, Languages, Music } from "lucide-react"

const services = [
  {
    icon: Video,
    title: "Social Media Video Ads",
    description: "Scroll-stopping Instagram Reels, TikTok content, and short-form videos optimized for engagement and conversions.",
    href: "/services#social-media",
    image: "/images/services/social-media.jpg",
  },
  {
    icon: Tv,
    title: "TV-Ready Commercials",
    description: "Professional broadcast-quality commercials for local TV stations that establish credibility and reach wider audiences.",
    href: "/services#tv-commercials",
    image: "/images/services/tv-commercial.jpg",
  },
  {
    icon: Languages,
    title: "Bilingual Video Ads",
    description: "Reach both English and Spanish-speaking audiences with culturally relevant content that resonates and converts.",
    href: "/services#bilingual",
    image: "/images/services/bilingual.jpg",
  },
  {
    icon: Music,
    title: "Sonic Branding & Custom Composition",
    description: "Original music including brand jingles, promotional music, cinematic instrumentals, and custom commissioned songs.",
    href: "/services#sonic-branding",
    image: "/images/services/sonic-branding.jpg",
  },
]

export function ServicesSection() {
  return (
    <>
      <section className="py-20 lg:py-28 bg-white">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-2xl">
            <p className="text-sm font-medium tracking-widest uppercase text-[#0F766E] mb-4">
              Our Services
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[#1F2937]">
              Everything you need to get noticed
            </h2>
            <p className="mt-6 text-lg text-[#6B7280] leading-relaxed">
              From social media content to TV commercials, we create premium video
              ads that help your business stand out and attract more clients.
            </p>
          </div>

          {/* Services Grid */}
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service) => (
              <div
                key={service.title}
                className="group relative bg-[#E5E7EB] rounded-2xl overflow-hidden hover:shadow-lg transition-all border border-[#C0C7CE]/50"
              >
                {/* Image */}
                <div className="aspect-[4/3] relative overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 w-10 h-10 rounded-xl bg-white/90 flex items-center justify-center">
                    <service.icon className="h-5 w-5 text-[#0F766E]" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-serif text-xl font-semibold mb-3 text-[#1F2937]">
                    {service.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="inline-flex items-center gap-2 text-sm font-medium text-[#0F766E] group-hover:gap-3 transition-all"
                  >
                    Learn more
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-[#0F766E] font-medium hover:gap-3 transition-all"
            >
              View all services
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <section className="mt-24 bg-[#F9FAFB] rounded-2xl p-10 text-center">

        <p className="text-sm font-medium tracking-wide uppercase text-[#0F766E] mb-4">
          UNIQUE CREATIVE ADVANTAGE
        </p>

        <h2 className="text-3xl sm:text-4xl font-serif font-semibold mb-6 text-[#1F2937]">
          Video campaigns with custom original music
        </h2>

        <p className="max-w-2xl mx-auto text-gray-600 mb-10">
          Most promotional videos rely on generic stock music. At Ileana Turner Agency,
          campaigns can include original custom music created specifically for your
          brand, helping your ads stand out and stay memorable.
        </p>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">

          <div>
            <h3 className="text-lg font-semibold mb-2">Custom Brand Sound</h3>
            <p className="text-sm text-gray-500">
              Unique music composed to match your brand identity and visual style.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Memorable Campaigns</h3>
            <p className="text-sm text-gray-500">
              Music helps audiences remember your brand long after they see the ad.
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">Commercial Ready</h3>
            <p className="text-sm text-gray-500">
              Audio designed specifically for social media ads, commercials, and brand campaigns.
            </p>
          </div>

        </div>

      </section>
    </>
  )
}
