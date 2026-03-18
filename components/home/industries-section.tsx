import Link from "next/link"
import { ArrowRight, Sparkles, Building2, UtensilsCrossed, Store, Users } from "lucide-react"

const industries = [
  {
    icon: Sparkles,
    title: "Med Spas & Aesthetic Clinics",
    description: "Our specialty. We understand the aesthetic industry and create videos that showcase treatments beautifully while building trust.",
    featured: true,
    href: "/industries#med-spas",
  },
  {
    icon: Building2,
    title: "Real Estate",
    description: "Property tours, agent introductions, and market updates that help you stand out in a competitive market.",
    featured: false,
    href: "/industries#real-estate",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurants",
    description: "Mouth-watering food videos and atmosphere showcases that bring new diners through your doors.",
    featured: false,
    href: "/industries#restaurants",
  },
  {
    icon: Store,
    title: "Local Businesses",
    description: "From retail shops to service providers, we help local businesses compete with larger competitors.",
    featured: false,
    href: "/industries#local-business",
  },
  {
    icon: Users,
    title: "Coaches & Consultants",
    description: "Personal brand videos that establish authority and attract your ideal clients.",
    featured: false,
    href: "/industries#coaches",
  },
]

export function IndustriesSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#E5E7EB]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium tracking-widest uppercase text-[#0F766E] mb-4">
            Industries We Serve
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[#1F2937]">
            Specialized expertise, flexible approach
          </h2>
          <p className="mt-6 text-lg text-[#6B7280] leading-relaxed">
            While we specialize in the aesthetic industry, our creative expertise 
            extends to a variety of businesses looking to elevate their video marketing.
          </p>
        </div>

        {/* Industries Grid */}
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {industries.map((industry) => (
            <Link
              key={industry.title}
              href={industry.href}
              className={`group relative p-8 rounded-2xl transition-all ${
                industry.featured 
                  ? "bg-[#0F766E] text-white col-span-full lg:col-span-1 lg:row-span-2" 
                  : "bg-white hover:shadow-lg border border-[#C0C7CE]/50"
              }`}
            >
              {industry.featured && (
                <span className="absolute top-6 right-6 text-xs uppercase tracking-widest text-[#14B8A6]">
                  Our Specialty
                </span>
              )}
              
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                industry.featured ? "bg-[#14B8A6]/20" : "bg-[#14B8A6]/20"
              }`}>
                <industry.icon className={`h-6 w-6 ${industry.featured ? "text-[#14B8A6]" : "text-[#0F766E]"}`} />
              </div>
              
              <h3 className={`font-serif text-xl font-semibold mb-3 ${
                industry.featured ? "text-white" : "text-[#1F2937]"
              }`}>
                {industry.title}
              </h3>
              
              <p className={`text-sm leading-relaxed mb-6 ${
                industry.featured ? "text-white/80" : "text-[#6B7280]"
              }`}>
                {industry.description}
              </p>
              
              <span className={`inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all ${
                industry.featured ? "text-[#14B8A6]" : "text-[#0F766E]"
              }`}>
                Learn more
                <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-[#0F766E] font-medium hover:gap-3 transition-all"
          >
            Explore all industries
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
