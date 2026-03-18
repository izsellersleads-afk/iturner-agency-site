import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative bg-[#0F766E] text-white rounded-3xl overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#14B8A6]/20 via-transparent to-[#0F766E]" />

          <div className="relative px-8 py-16 lg:px-16 lg:py-24">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-balance">
                Ready to create videos that convert?
              </h2>
              <p className="mt-6 text-lg text-white/80 leading-relaxed">
                Let's discuss how premium video content can help your business
                attract more attention and more clients. Request a free demo or
                book a discovery call today.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
                <Button asChild size="lg" className="bg-white text-[#0F766E] hover:bg-white/90 h-14 px-8 text-base">
                  <Link href="/contact">
                    Request a Free Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild size="lg" className="bg-white text-[#0F766E] hover:bg-white/90 h-14 px-8 text-base">
                  <Link href="/contact#call">
                    Book a Discovery Call
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="mt-12 flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm text-white/70">
                <span>Free demo available</span>
                <span>No obligation</span>
                <span>Response within 24 hours</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
