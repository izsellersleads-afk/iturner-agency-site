import Image from "next/image"
import { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Languages, Music, Target, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "About | Ileana Turner Agency",
  description: "Boutique creative marketing studio led by Ileana Turner. We create premium promotional videos with bilingual capabilities and custom audio branding.",
}

const values = [
  {
    icon: Sparkles,
    title: "Premium Quality",
    description: "Every video we create meets broadcast standards. We don't cut corners because your brand deserves better.",
  },
  {
    icon: Target,
    title: "Business-First Approach",
    description: "Beautiful content is meaningless if it doesn't convert. We design every video with your business goals in mind.",
  },
  {
    icon: Languages,
    title: "Bilingual Excellence",
    description: "Native-level English and Spanish content that resonates authentically with diverse audiences.",
  },
  {
    icon: Music,
    title: "Sonic Branding",
    description: "Custom jingles and audio identities that make your business unforgettable long after the ad ends.",
  },
]

export default function AboutPage() {
  return (
    <>
      <Navigation />
      <main className="pt-[72px] md:pt-[80px] lg:pt-[96px]">
        {/* Hero */}
        <section className="py-20 lg:py-28 bg-[#E5E7EB]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              {/* Content */}
              <div>
                <p className="text-sm font-medium tracking-widest uppercase text-[#0F766E] mb-4">
                  About the Agency
                </p>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-[#1F2937] text-balance">
                  Creative vision meets business strategy
                </h1>
                <p className="mt-8 text-lg text-[#6B7280] leading-relaxed">
                  Ileana Turner Agency is a boutique creative marketing studio that
                  produces premium promotional videos for businesses ready to elevate
                  their brand presence and attract more clients.
                </p>
              </div>

              {/* Image Placeholder */}
              {/* Image */}
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                  <Image
                    src="/ileana.jpg"
                    alt="Ileana Turner"
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="absolute bottom-6 left-8 right-8">
                  <p className="font-serif text-2xl font-semibold text-white">
                    Ileana Turner
                  </p>
                  <p className="text-white mt-1">
                    Founder & Creative Director
                  </p>
                </div>

                <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#14B8A6]/40 rounded-2xl -z-10" />
              </div>
            </div>
          </div>
        </section>

        {/* Story */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold leading-tight text-center mb-12 text-[#1F2937]">
                The Story Behind the Studio
              </h2>

              <div className="prose prose-lg max-w-2xl text-[#6B7280] leading-8 space-y-6 mx-auto text-left">
                <p>
                  I founded Ileana Turner Agency with a simple belief: every business
                  deserves marketing content that matches the quality of their work. Too
                  often, I saw incredible businesses—talented aestheticians, passionate
                  restaurant owners, dedicated coaches—struggling with content that
                  didn’t reflect who they truly were.
                </p>
                <p>
                  My background combines creative storytelling with strategic marketing
                  thinking. I don't just make videos that look beautiful—I create
                  content designed to convert viewers into customers. Every frame,
                  every word, every beat of music is chosen with your business goals
                  in mind.
                </p>
                <p>
                  Growing up bilingual, I understand the power of speaking someone's
                  language—literally and figuratively. That's why bilingual content
                  creation is at the heart of what we do. In today's diverse markets,
                  connecting authentically with both English and Spanish-speaking
                  audiences isn't just nice to have—it's a competitive advantage.
                </p>
                <p>
                  And because I believe in the power of sound, we offer custom jingle
                  creation and audio branding. A catchy jingle does what visuals alone
                  can't—it stays in people's minds long after they've scrolled past.
                </p>
                <p className="text-[#1F2937] font-medium">
                  Today, Ileana Turner Agency specializes in the aesthetic industry,
                  helping med spas, aesthetic clinics, and beauty businesses stand out
                  with premium video content. But our expertise extends to any business
                  ready to invest in marketing that actually works.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-28 bg-[#0F766E] text-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold leading-tight">
                What Sets Us Apart
              </h2>
              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                {"We're"} not just another video production company. {"Here's"} what makes
                working with Ileana Turner Agency different.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value) => (
                <div key={value.title} className="text-center">
                  <div className="w-16 h-16 rounded-2xl bg-[#14B8A6]/30 flex items-center justify-center mx-auto mb-6">
                    <value.icon className="h-8 w-8 text-[#14B8A6]" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3">
                    {value.title}
                  </h3>
                  <p className="text-white/80 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold leading-tight mb-8 text-[#1F2937]">
                  A boutique studio, not a solo freelancer
                </h2>
                <div className="space-y-6 text-[#6B7280] leading-relaxed">
                  <p>
                    While Ileana Turner Agency is led by its founder, {"it's"} more than
                    a one-person operation. We work with a curated network of talented
                    professionals—videographers, editors, musicians, voiceover artists—to
                    deliver the full range of services our clients need.
                  </p>
                  <p>
                    This boutique approach means you get personalized attention and
                    creative consistency, backed by professional capabilities that
                    match larger agencies. {"You're"} not just a number—{"you're"} a valued
                    client whose success is our priority.
                  </p>
                  <p>
                    Every project is personally overseen to ensure it meets our
                    standards. {"That's"} the Ileana Turner Agency difference: premium
                    quality with a personal touch.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square rounded-2xl bg-[#E5E7EB] flex items-center justify-center p-8 border border-[#C0C7CE]/50">
                  <div className="text-center">
                    <p className="font-serif text-4xl font-semibold text-[#0F766E]">50+</p>
                    <p className="text-sm text-[#6B7280] mt-2">Projects Delivered</p>
                  </div>
                </div>
                <div className="aspect-square rounded-2xl bg-[#0F766E] text-white flex items-center justify-center p-8 mt-8">
                  <div className="text-center">
                    <p className="font-serif text-4xl font-semibold">2</p>
                    <p className="text-sm text-white/80 mt-2">Languages Fluent</p>
                  </div>
                </div>
                <div className="aspect-square rounded-2xl bg-[#0F766E] text-white flex items-center justify-center p-8">
                  <div className="text-center">
                    <p className="font-serif text-4xl font-semibold">100%</p>
                    <p className="text-sm text-white/80 mt-2">Client Satisfaction</p>
                  </div>
                </div>
                <div className="aspect-square rounded-2xl bg-[#E5E7EB] flex items-center justify-center p-8 mt-8 border border-[#C0C7CE]/50">
                  <div className="text-center">
                    <p className="font-serif text-4xl font-semibold text-[#0F766E]">TV</p>
                    <p className="text-sm text-[#6B7280] mt-2">Broadcast Quality</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-[#E5E7EB]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold leading-tight text-[#1F2937]">
                Ready to work together?
              </h2>
              <p className="mt-6 text-lg text-[#6B7280] leading-relaxed">
                {"Let's"} discuss how premium video content can help your business
                attract more attention and more clients.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-[#0F766E] text-white hover:bg-[#0F766E]/90 h-14 px-8">
                  <Link href="/contact">
                    Request a Free Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 px-8 border-[#C0C7CE] text-[#1F2937] hover:bg-white hover:text-[#1F2937]">
                  <Link href="/portfolio">
                    View Our Work
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
