import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Check, ArrowRight, LucideIcon } from "lucide-react"

interface ServiceBlockProps {
  service: {
    id: string
    icon: LucideIcon
    title: string
    tagline: string
    description: string
    included: string[]
    forWho: string
    benefits: string[]
    featured?: boolean
  }
  index: number
}

export function ServiceBlock({ service, index }: ServiceBlockProps) {
  const isEven = index % 2 === 0

  return (
    <div id={service.id} className="scroll-mt-24">
      {service.featured && (
        <div className="mb-4">
          <span className="inline-block bg-[#14B8A6] text-white text-xs uppercase tracking-widest px-4 py-2 rounded-full">
            Our Specialty
          </span>
        </div>
      )}
      
      <div className={`grid lg:grid-cols-2 gap-12 lg:gap-16 items-start ${isEven ? "" : "lg:flex-row-reverse"}`}>
        {/* Content */}
        <div className={isEven ? "" : "lg:order-2"}>
          <div className="flex items-center gap-4 mb-6">
            <div className="w-14 h-14 rounded-xl bg-[#14B8A6]/20 flex items-center justify-center">
              <service.icon className="h-7 w-7 text-[#0F766E]" />
            </div>
            <div>
              <h2 className="font-serif text-2xl sm:text-3xl font-semibold text-[#1F2937]">
                {service.title}
              </h2>
            </div>
          </div>
          
          <p className="text-lg font-medium text-[#1F2937] mb-4">
            {service.tagline}
          </p>
          
          <p className="text-[#6B7280] leading-relaxed mb-8">
            {service.description}
          </p>

          {/* Who It's For */}
          <div className="p-6 bg-[#E5E7EB] rounded-xl mb-8 border border-[#C0C7CE]/50">
            <h4 className="text-sm uppercase tracking-widest text-[#6B7280] mb-3">
              Who This Is For
            </h4>
            <p className="text-[#1F2937] leading-relaxed">
              {service.forWho}
            </p>
          </div>

          {/* CTA */}
          <Button asChild size="lg" className="bg-[#0F766E] text-white hover:bg-[#0F766E]/90">
            <Link href={`/contact?service=${service.id}`}>
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>

        {/* Details */}
        <div className={isEven ? "" : "lg:order-1"}>
          {/* What's Included */}
          <div className="bg-[#E5E7EB] rounded-2xl p-8 mb-6 border border-[#C0C7CE]/50">
            <h4 className="font-serif text-xl font-semibold mb-6 text-[#1F2937]">
              {"What's Included"}
            </h4>
            <ul className="space-y-4">
              {service.included.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#14B8A6]/20 flex items-center justify-center mt-0.5">
                    <Check className="h-3.5 w-3.5 text-[#0F766E]" />
                  </div>
                  <span className="text-[#1F2937]">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Benefits */}
          <div className="bg-[#0F766E] text-white rounded-2xl p-8">
            <h4 className="font-serif text-xl font-semibold mb-6">
              Key Benefits
            </h4>
            <ul className="space-y-4">
              {service.benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#14B8A6]/30 flex items-center justify-center mt-0.5">
                    <Check className="h-3.5 w-3.5 text-[#14B8A6]" />
                  </div>
                  <span className="text-white/90">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
