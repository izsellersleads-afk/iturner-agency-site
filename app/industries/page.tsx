import { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles, Building2, UtensilsCrossed, Store, Users, Check } from "lucide-react"

export const metadata: Metadata = {
  title: "Industries We Serve | Ileana Turner Agency",
  description: "Premium video marketing for med spas, aesthetic clinics, real estate, restaurants, local businesses, and coaches. Specialized expertise with a flexible approach.",
}

const industries = [
  {
    id: "med-spas",
    icon: Sparkles,
    title: "Med Spas & Aesthetic Clinics",
    featured: true,
    summary: "Our primary specialty. We understand the unique challenges of marketing aesthetic treatments—from building trust to showcasing results while maintaining professionalism and compliance.",
    videoTypes: [
      "Treatment showcase videos (Botox, fillers, laser, skincare)",
      "Before/after transformation content",
      "Provider introduction and expertise videos",
      "Patient testimonial formats",
      "Educational content about procedures",
      "Seasonal promotion campaigns",
    ],
    benefits: [
      "Attract high-value patients ready for premium treatments",
      "Build trust and reduce consultation hesitation",
      "Differentiate from competitors with generic content",
      "Educate patients and streamline consultations",
    ],
  },
  {
    id: "real-estate",
    icon: Building2,
    title: "Real Estate",
    featured: false,
    summary: "In a visual industry, your listings and personal brand need to stand out. We create property showcase videos and agent branding content that helps you close more deals.",
    videoTypes: [
      "Property tour and walkthrough videos",
      "Agent introduction and branding content",
      "Market update and insights videos",
      "Neighborhood and lifestyle showcases",
      "Client testimonial videos",
      "Social media content for listings",
    ],
    benefits: [
      "Make listings stand out in crowded markets",
      "Build personal brand recognition",
      "Attract sellers with professional marketing capabilities",
      "Connect with buyers before showings",
    ],
  },
  {
    id: "restaurants",
    icon: UtensilsCrossed,
    title: "Restaurants",
    featured: false,
    summary: "Food is visual, and so is the decision to dine somewhere new. We create mouth-watering video content that brings your food, atmosphere, and story to life.",
    videoTypes: [
      "Menu item and food showcase videos",
      "Restaurant atmosphere and experience content",
      "Chef and team introduction videos",
      "Behind-the-scenes kitchen content",
      "Special event and promotion videos",
      "Customer experience highlights",
    ],
    benefits: [
      "Drive reservations and walk-ins",
      "Showcase your unique dining experience",
      "Build a loyal following on social media",
      "Stand out in competitive restaurant markets",
    ],
  },
  {
    id: "local-business",
    icon: Store,
    title: "Local Businesses",
    featured: false,
    summary: "From retail shops to service providers, local businesses need video content that competes with larger competitors while highlighting their unique community connection.",
    videoTypes: [
      "Business introduction and story videos",
      "Product and service showcases",
      "Team and culture content",
      "Customer testimonial videos",
      "Promotional and seasonal campaigns",
      "Community involvement highlights",
    ],
    benefits: [
      "Compete with larger competitors",
      "Build community connection and loyalty",
      "Increase foot traffic and local awareness",
      "Establish credibility and trust",
    ],
  },
  {
    id: "coaches",
    icon: Users,
    title: "Coaches & Consultants",
    featured: false,
    summary: "Your expertise is your product, but potential clients need to see it to believe it. We create personal brand videos that establish authority and attract ideal clients.",
    videoTypes: [
      "Personal brand and introduction videos",
      "Expertise showcase and thought leadership",
      "Client transformation stories",
      "Course and program promotion content",
      "Webinar and workshop trailers",
      "Social proof and testimonial compilations",
    ],
    benefits: [
      "Establish authority in your niche",
      "Attract ideal clients who resonate with your approach",
      "Increase course and program enrollment",
      "Build trust before the sales conversation",
    ],
  },
]

export default function IndustriesPage() {
  return (
    <>
      <Navigation />
      <main className="pt-[72px] md:pt-[80px] lg:pt-[96px]">
        {/* Hero */}
        <section className="py-20 lg:py-28 bg-[#E5E7EB]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-widest uppercase text-[#0F766E] mb-4">
                Industries We Serve
              </p>
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-[#1F2937] text-balance">
                Specialized expertise with room to grow
              </h1>
              <p className="mt-8 text-lg text-[#6B7280] leading-relaxed max-w-2xl">
                While we specialize in the aesthetic industry, our creative expertise 
                and strategic approach translates across businesses. We bring the same 
                premium quality and conversion focus to every industry we serve.
              </p>
            </div>
          </div>
        </section>

        {/* Industries */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="space-y-24 lg:space-y-32">
              {industries.map((industry, index) => (
                <div key={industry.id} id={industry.id} className="scroll-mt-24">
                  {industry.featured && (
                    <div className="mb-4">
                      <span className="inline-block bg-[#14B8A6] text-white text-xs uppercase tracking-widest px-4 py-2 rounded-full">
                        Our Primary Specialty
                      </span>
                    </div>
                  )}
                  
                  <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ${index % 2 === 0 ? "" : ""}`}>
                    {/* Content */}
                    <div className={index % 2 === 0 ? "" : "lg:order-2"}>
                      <div className="flex items-center gap-4 mb-6">
                        <div className={`w-14 h-14 rounded-xl flex items-center justify-center ${
                          industry.featured ? "bg-[#0F766E]" : "bg-[#14B8A6]/20"
                        }`}>
                          <industry.icon className={`h-7 w-7 ${
                            industry.featured ? "text-white" : "text-[#0F766E]"
                          }`} />
                        </div>
                        <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1F2937]">
                          {industry.title}
                        </h2>
                      </div>
                      
                      <p className="text-lg text-[#6B7280] leading-relaxed mb-8">
                        {industry.summary}
                      </p>

                      {/* Business Benefits */}
                      <div className="p-6 bg-[#E5E7EB] rounded-xl mb-8 border border-[#C0C7CE]/50">
                        <h4 className="text-sm uppercase tracking-widest text-[#6B7280] mb-4">
                          Business Benefits
                        </h4>
                        <ul className="space-y-3">
                          {industry.benefits.map((benefit) => (
                            <li key={benefit} className="flex items-start gap-3">
                              <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[#14B8A6]/20 flex items-center justify-center mt-0.5">
                                <Check className="h-3 w-3 text-[#0F766E]" />
                              </div>
                              <span className="text-[#1F2937] text-sm">{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button asChild size="lg" className="bg-[#0F766E] text-white hover:bg-[#0F766E]/90">
                        <Link href={`/contact?industry=${industry.id}`}>
                          Work With Us
                          <ArrowRight className="ml-2 h-5 w-5" />
                        </Link>
                      </Button>
                    </div>

                    {/* Video Types */}
                    <div className={index % 2 === 0 ? "" : "lg:order-1"}>
                      <div className={`rounded-2xl p-8 ${
                        industry.featured ? "bg-[#0F766E] text-white" : "bg-[#E5E7EB] border border-[#C0C7CE]/50"
                      }`}>
                        <h4 className={`font-serif text-xl font-semibold mb-6 ${
                          industry.featured ? "text-white" : "text-[#1F2937]"
                        }`}>
                          Video Content We Create
                        </h4>
                        <ul className="space-y-4">
                          {industry.videoTypes.map((type) => (
                            <li key={type} className="flex items-start gap-3">
                              <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center mt-0.5 ${
                                industry.featured ? "bg-[#14B8A6]/30" : "bg-[#14B8A6]/20"
                              }`}>
                                <Check className={`h-3.5 w-3.5 ${
                                  industry.featured ? "text-[#14B8A6]" : "text-[#0F766E]"
                                }`} />
                              </div>
                              <span className={industry.featured ? "text-white/90" : "text-[#1F2937]"}>
                                {type}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-[#E5E7EB]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="font-serif text-3xl sm:text-4xl font-semibold leading-tight text-[#1F2937]">
                {"Don't see your industry?"}
              </h2>
              <p className="mt-6 text-lg text-[#6B7280] leading-relaxed">
                {"Our creative expertise translates across businesses. If you're "}
                looking for premium video content that converts, we'd love to hear 
                about your project.
              </p>
              <div className="mt-10">
                <Button asChild size="lg" className="bg-[#0F766E] text-white hover:bg-[#0F766E]/90 h-14 px-8">
                  <Link href="/contact">
                    {"Let's Talk"}
                    <ArrowRight className="ml-2 h-5 w-5" />
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
