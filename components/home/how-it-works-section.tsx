import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const steps = [
  {
    number: "01",
    title: "Tell Us About Your Business",
    description: "Share your goals, target audience, and vision. We'll learn what makes your business unique and how you want to be perceived.",
  },
  {
    number: "02",
    title: "We Create a Custom Concept",
    description: "Our team develops a tailored video concept and script designed specifically for your brand, audience, and marketing objectives.",
  },
  {
    number: "03",
    title: "Receive Your Polished Videos",
    description: "We deliver professional, ready-to-publish promotional videos optimized for your chosen platforms and marketing goals.",
  },
]

export function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#0F766E] text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium tracking-widest uppercase text-[#14B8A6] mb-4">
            How It Works
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight">
            Simple process, stunning results
          </h2>
          <p className="mt-6 text-lg text-white/80 leading-relaxed">
            We've streamlined our process to make creating premium video content
            as easy as possible for busy business owners.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-full w-full h-px bg-[#14B8A6]/40 -translate-x-1/2" />
              )}

              <div className="text-center">
                <div className="inline-flex items-center justify-center w-24 h-24 rounded-full border-2 border-[#14B8A6] mb-8">
                  <span className="font-serif text-3xl font-semibold text-[#14B8A6]">{step.number}</span>
                </div>
                <h3 className="font-serif text-xl font-semibold mb-4">
                  {step.title}
                </h3>
                <p className="text-white/80 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <Button
            asChild
            size="lg"
            className="h-14 px-8 text-base bg-white text-[#0F766E] hover:bg-gray-100 font-medium"
          >
            <Link href="/contact">
              Start Your Project
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
