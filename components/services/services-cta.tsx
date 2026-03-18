import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function ServicesCTA() {
  return (
    <section className="py-20 lg:py-28 bg-[#E5E7EB]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl font-semibold leading-tight text-[#1F2937]">
            Not sure which service is right for you?
          </h2>
          <p className="mt-6 text-lg text-[#6B7280] leading-relaxed">
            {"Let's have a conversation about your goals. We'll help you identify "}
            the best approach to elevate your video marketing and attract more clients.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" className="bg-[#0F766E] text-white hover:bg-[#0F766E]/90 h-14 px-8">
              <Link href="/contact">
                Request a Free Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-14 px-8 border-[#C0C7CE] text-[#1F2937] hover:bg-white hover:text-[#1F2937]">
              <Link href="/contact#call">
                Book a Discovery Call
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
