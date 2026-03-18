import { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Check, Play, Sparkles, Users, TrendingUp, Languages } from "lucide-react"

export const metadata: Metadata = {
  title: "Video Marketing for Med Spas & Aesthetic Clinics | Ileana Turner Agency",
  description: "Premium promotional videos for med spas, aesthetic clinics, and beauty businesses. Botox, fillers, laser treatments, skincare - we showcase your work beautifully.",
  keywords: "med spa video ads, aesthetic clinic marketing, Botox video marketing, filler promotion videos, med spa Instagram content, aesthetic clinic TikTok ads, bilingual med spa marketing",
}

const benefits = [
  {
    icon: Sparkles,
    title: "Showcase Treatments Beautifully",
    description: "From Botox to laser treatments, we create visuals that highlight your expertise while maintaining professionalism.",
  },
  {
    icon: Users,
    title: "Build Patient Trust",
    description: "Educational content and provider introductions that establish credibility before patients walk through your door.",
  },
  {
    icon: TrendingUp,
    title: "Drive More Consultations",
    description: "Conversion-focused content designed to turn viewers into booked appointments.",
  },
  {
    icon: Languages,
    title: "Reach Bilingual Markets",
    description: "English and Spanish content that connects authentically with diverse patient populations.",
  },
]

const videoTypes = [
  "Botox & Filler Treatment Showcases",
  "Laser & Skincare Procedure Videos",
  "Before/After Transformation Content",
  "Provider Introduction Videos",
  "Patient Testimonial Formats",
  "Treatment Education Content",
  "Seasonal Promotion Campaigns",
  "Instagram Reels & TikTok Content",
]

const adConcepts = [
  {
    title: "\"Your Glow, Our Expertise\"",
    description: "A 15-second Reel showing a quick treatment montage with elegant transitions and a clear call-to-action.",
    platform: "Instagram Reels",
  },
  {
    title: "\"The Botox Experience\"",
    description: "A 30-second behind-the-scenes look at the patient experience, building trust through transparency.",
    platform: "TikTok",
  },
  {
    title: "\"Meet Dr. [Name]\"",
    description: "A 60-second provider introduction establishing expertise and approachability.",
    platform: "Website / YouTube",
  },
]

export default function MedSpaPage() {
  return (
    <>
      <Navigation />
      <main className="pt-[72px] md:pt-[80px] lg:pt-[96px]">
        {/* Hero */}
        <section className="relative py-20 lg:py-32 bg-[#0F766E] text-white overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/20 via-transparent to-[#0F766E]" />
          
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="inline-block bg-[#14B8A6]/30 text-[#14B8A6] text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                  For Med Spas & Aesthetic Clinics
                </span>
                <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-balance">
                  Premium video marketing for aesthetic practices
                </h1>
                <p className="mt-8 text-lg text-white/80 leading-relaxed">
                  We specialize in creating promotional videos that showcase Botox, 
                  fillers, laser treatments, and skincare services—helping you attract 
                  more high-value patients ready for premium treatments.
                </p>
                
                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-white text-[#0F766E] hover:bg-white/90 h-14 px-8 text-base">
                    <Link href="/contact?industry=med-spa">
                      Request a Free Demo
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base border-white/30 text-white hover:bg-white/10 hover:text-white">
                    <Link href="#examples">
                      See Examples
                    </Link>
                  </Button>
                </div>

                <div className="mt-10 flex items-center gap-6 text-sm text-white/70">
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#14B8A6]" />
                    <span>English + Spanish</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-[#14B8A6]" />
                    <span>TV-Ready Quality</span>
                  </div>
                </div>
              </div>

              {/* Video Preview */}
              <div className="relative">
                <div className="aspect-[4/5] rounded-2xl bg-[#14B8A6]/20 overflow-hidden flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/20 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#14B8A6] text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg">
                  Free Demo Available
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold leading-tight text-[#1F2937]">
                Why med spas choose us
              </h2>
              <p className="mt-6 text-lg text-[#6B7280] leading-relaxed">
                We understand the unique challenges of marketing aesthetic treatments. 
                Our videos balance showcasing results with building trust and maintaining professionalism.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit) => (
                <div key={benefit.title} className="text-center p-8 bg-[#E5E7EB] rounded-2xl border border-[#C0C7CE]/50">
                  <div className="w-14 h-14 rounded-xl bg-[#14B8A6]/20 flex items-center justify-center mx-auto mb-6">
                    <benefit.icon className="h-7 w-7 text-[#0F766E]" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3 text-[#1F2937]">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-[#6B7280] leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Types */}
        <section className="py-20 lg:py-28 bg-[#E5E7EB]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
              <div>
                <h2 className="font-serif text-3xl sm:text-4xl font-semibold leading-tight mb-8 text-[#1F2937]">
                  Video content tailored for aesthetic practices
                </h2>
                <p className="text-lg text-[#6B7280] leading-relaxed mb-8">
                  From treatment showcases to patient testimonials, we create the 
                  full range of video content your practice needs to stand out and 
                  attract ideal patients.
                </p>
                <ul className="space-y-4">
                  {videoTypes.map((type) => (
                    <li key={type} className="flex items-center gap-3">
                      <div className="w-6 h-6 rounded-full bg-[#14B8A6]/20 flex items-center justify-center flex-shrink-0">
                        <Check className="h-3.5 w-3.5 text-[#0F766E]" />
                      </div>
                      <span className="text-[#1F2937]">{type}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-[3/4] rounded-2xl bg-gradient-to-br from-[#C0C7CE] to-[#E5E7EB] border border-[#C0C7CE]" />
                <div className="aspect-[3/4] rounded-2xl bg-[#0F766E] mt-8" />
              </div>
            </div>
          </div>
        </section>

        {/* Bilingual Advantage */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="bg-[#0F766E] text-white rounded-3xl p-8 lg:p-16">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div>
                  <span className="inline-block bg-[#14B8A6]/30 text-[#14B8A6] text-xs uppercase tracking-widest px-4 py-2 rounded-full mb-6">
                    Bilingual Advantage
                  </span>
                  <h2 className="font-serif text-3xl sm:text-4xl font-semibold leading-tight mb-6">
                    Reach English + Spanish speaking patients
                  </h2>
                  <p className="text-white/80 leading-relaxed mb-8">
                    In diverse markets, speaking only one language means missing half 
                    your potential patients. Our bilingual content creation helps you 
                    connect authentically with both English and Spanish-speaking audiences.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Native-level English and Spanish content",
                      "Culturally relevant messaging",
                      "Expand your patient base",
                      "Stand out from monolingual competitors",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <Check className="h-4 w-4 text-[#14B8A6]" />
                        <span className="text-white/90">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="text-center">
                  <div className="inline-block p-8">
                    <p className="font-serif text-6xl font-semibold mb-2 text-[#14B8A6]">2x</p>
                    <p className="text-white/80">Market Reach</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ad Concepts */}
        <section id="examples" className="py-20 lg:py-28 bg-[#E5E7EB] scroll-mt-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold leading-tight text-[#1F2937]">
                Sample ad concepts for your practice
              </h2>
              <p className="mt-6 text-lg text-[#6B7280] leading-relaxed">
                Here are examples of the types of videos we create for med spas and 
                aesthetic clinics. Request a demo to see a concept tailored to your practice.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {adConcepts.map((concept) => (
                <div key={concept.title} className="bg-white rounded-2xl p-8 border border-[#C0C7CE]/50">
                  <span className="inline-block text-xs uppercase tracking-widest text-[#0F766E] mb-4">
                    {concept.platform}
                  </span>
                  <h3 className="font-serif text-xl font-semibold mb-3 text-[#1F2937]">
                    {concept.title}
                  </h3>
                  <p className="text-[#6B7280] leading-relaxed">
                    {concept.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold leading-tight text-[#1F2937]">
                Ready to elevate your {"practice's"} video marketing?
              </h2>
              <p className="mt-6 text-lg text-[#6B7280] leading-relaxed">
                Request a free demo and {"we'll"} create a sample concept tailored 
                specifically to your med spa or aesthetic clinic.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-[#0F766E] text-white hover:bg-[#0F766E]/90 h-14 px-8">
                  <Link href="/contact?industry=med-spa">
                    Request a Free Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="h-14 px-8 border-[#C0C7CE] text-[#1F2937] hover:bg-[#E5E7EB] hover:text-[#1F2937]">
                  <Link href="/contact#call">
                    Book a Discovery Call
                  </Link>
                </Button>
              </div>
              <p className="mt-8 text-sm text-[#6B7280]">
                No obligation. Response within 24 hours.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
