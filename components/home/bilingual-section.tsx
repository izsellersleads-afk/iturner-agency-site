import { Check } from "lucide-react"

const benefits = [
  "Reach both English and Spanish-speaking audiences",
  "Culturally relevant messaging that resonates",
  "Expand your market without doubling your budget",
  "Professional native-level translations",
  "Tap into the growing Hispanic market",
  "Stand out from competitors stuck in one language",
]

export function BilingualSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-[#0F766E] mb-4">
              Bilingual Advantage
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[#1F2937] text-balance">
              Double your reach with English + Spanish content
            </h2>
            <p className="mt-6 text-lg text-[#6B7280] leading-relaxed">
              In today's diverse market, speaking only one language means missing 
              half your potential clients. We create bilingual video content that 
              connects authentically with both English and Spanish-speaking audiences.
            </p>

            {/* Benefits List */}
            <ul className="mt-10 space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#14B8A6]/20 flex items-center justify-center mt-0.5">
                    <Check className="h-3.5 w-3.5 text-[#0F766E]" />
                  </div>
                  <span className="text-[#1F2937]">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="aspect-[3/4] rounded-2xl bg-[#E5E7EB] overflow-hidden border border-[#C0C7CE]">
                <div className="h-full flex flex-col justify-end p-6">
                  <p className="text-xs uppercase tracking-widest text-[#6B7280] mb-2">English</p>
                  <p className="font-serif text-lg font-medium text-[#1F2937]">{"\"Your beauty, our passion\""}</p>
                </div>
              </div>
              <div className="aspect-[3/4] rounded-2xl bg-[#0F766E] text-white overflow-hidden mt-8">
                <div className="h-full flex flex-col justify-end p-6">
                  <p className="text-xs uppercase tracking-widest text-white/60 mb-2">Español</p>
                  <p className="font-serif text-lg font-medium">{"\"Tu belleza, nuestra pasión\""}</p>
                </div>
              </div>
            </div>
            
            {/* Decorative */}
            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-[#14B8A6] text-white px-6 py-3 rounded-full text-sm font-medium shadow-lg">
              2x Market Reach
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
