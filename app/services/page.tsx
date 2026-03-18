import { Metadata } from "next"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ServiceHero } from "@/components/services/service-hero"
import { ServiceBlock } from "@/components/services/service-block"
import { ServicesCTA } from "@/components/services/services-cta"
import { Video, Sparkles, Tv, Languages, Music, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Services | Ileana Turner Agency",
  description: "Premium video marketing services including social media ads, med spa campaigns, TV-ready commercials, bilingual content, and custom jingles.",
}

const services = [
  {
    id: "social-media",
    icon: Video,
    title: "Social Media Video Ads",
    tagline: "Scroll-stopping content for the digital age",
    description: "In a world where attention spans are measured in seconds, your content needs to captivate instantly. We create thumb-stopping video ads optimized for Instagram Reels, TikTok, Facebook, and YouTube Shorts that not only grab attention but drive action.",
    included: [
      "Concept development and scripting",
      "Professional video production",
      "Platform-specific formatting and optimization",
      "Caption and text overlay design",
      "Multiple aspect ratios (9:16, 1:1, 16:9)",
      "Revisions and final delivery",
    ],
    forWho: "Perfect for businesses looking to build brand awareness, drive engagement, and convert followers into customers on social platforms.",
    benefits: [
      "Increase social media engagement by up to 300%",
      "Build authentic connections with your audience",
      "Stay relevant with trending content formats",
      "Convert viewers into booked appointments",
    ],
  },
  {
    id: "med-spa",
    icon: Sparkles,
    title: "Med Spa & Aesthetic Clinic Video Campaigns",
    tagline: "Showcase your artistry, build trust, book more consultations",
    description: "The aesthetic industry requires a delicate balance of showcasing results while building trust and maintaining professionalism. We understand the nuances of marketing Botox, fillers, laser treatments, and skincare services—creating content that educates, inspires, and converts.",
    included: [
      "Treatment-specific video concepts",
      "Before/after showcase videos",
      "Provider introduction videos",
      "Procedure education content",
      "Patient testimonial formats",
      "Seasonal campaign content",
    ],
    forWho: "Designed specifically for med spas, aesthetic clinics, dermatology practices, and beauty professionals who want to attract high-value patients.",
    benefits: [
      "Position your practice as a premium destination",
      "Educate patients and reduce consultation time",
      "Build trust before they walk through your door",
      "Stand out from competitors with generic content",
    ],
    featured: true,
  },
  {
    id: "tv-commercials",
    icon: Tv,
    title: "TV-Ready Commercials",
    tagline: "Broadcast quality that establishes credibility",
    description: "While digital dominates, local TV advertising still reaches audiences that social media can't. We create broadcast-quality commercials that meet local TV station standards and establish your business as a credible, professional presence in your community.",
    included: [
      "Broadcast-quality production",
      "Professional voiceover options",
      "Station-compliant formatting",
      "Multiple length options (15s, 30s, 60s)",
      "Matching social media cutdowns",
      "Delivery to your local stations",
    ],
    forWho: "Ideal for established businesses ready to expand their reach beyond digital and establish authority through traditional media presence.",
    benefits: [
      "Reach audiences not active on social media",
      "Establish credibility and trust",
      "Create a multi-channel marketing presence",
      "Leverage TV's proven effectiveness",
    ],
  },
  {
    id: "bilingual",
    icon: Languages,
    title: "Bilingual Video Ads",
    tagline: "Double your market without doubling your budget",
    description: "The Hispanic market represents tremendous opportunity for businesses willing to speak their language. We create culturally authentic video content in both English and Spanish—not just translated, but truly localized to resonate with each audience.",
    included: [
      "Native English and Spanish content creation",
      "Cultural adaptation and localization",
      "Bilingual voiceover talent",
      "Subtitle and caption options",
      "Market-specific messaging",
      "Dual-language campaign strategies",
    ],
    forWho: "Essential for businesses in diverse markets looking to connect authentically with both English and Spanish-speaking customers.",
    benefits: [
      "Tap into the growing Hispanic market",
      "Build loyalty through cultural connection",
      "Expand reach without separate campaigns",
      "Stand out from monolingual competitors",
    ],
  },
  {
    id: "sonic-branding",
    icon: Music,
    title: "Sonic Branding & Custom Composition",
    tagline: "Original music that makes your brand unforgettable",
    description: "Sound has the power to stay with people long after the visual has faded. We create original music—from catchy brand jingles and promotional music to cinematic instrumentals and fully commissioned songs—that makes your brand instantly recognizable and emotionally resonant.",
    included: [
      "Brand jingles and audio logos",
      "Promotional music and soundtracks",
      "Cinematic instrumentals",
      "Custom commissioned songs",
      "Professional studio recording and production",
      "Licensing for all marketing and personal use",
    ],
    forWho: "Perfect for businesses wanting memorable brand recognition through audio, creators needing original soundtracks, and individuals seeking custom compositions for special occasions.",
    benefits: [
      "Create instant brand recognition",
      "Stand out with original music (no stock audio)",
      "Build emotional connection through sound",
      "Receive full licensing rights for all uses",
    ],
  },
]

export default function ServicesPage() {
  return (
    <>
      <Navigation />
      <main className="pt-[72px] md:pt-[80px] lg:pt-[96px]">
        <ServiceHero />
        
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="space-y-24 lg:space-y-32">
              {services.map((service, index) => (
                <ServiceBlock key={service.id} service={service} index={index} />
              ))}
            </div>
          </div>
        </section>

        <ServicesCTA />
      </main>
      <Footer />
    </>
  )
}
