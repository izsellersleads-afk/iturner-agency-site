import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"

export function AboutSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#E5E7EB]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/about/creative-workspace.jpg"
                alt="Modern video production workspace"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F766E]/10 to-[#14B8A6]/15" />
            </div>
            {/* Decorative Frame */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-[#14B8A6]/40 rounded-2xl -z-10" />
          </div>

          {/* Content */}
          <div className="lg:pl-8">
            <p className="text-sm font-medium tracking-widest uppercase text-[#0F766E] mb-4">
              About the Agency
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[#1F2937] text-balance">
              A boutique creative studio with a business mindset
            </h2>
            <div className="mt-8 space-y-6 text-[#6B7280] leading-relaxed">
              <p>
                Ileana Turner Agency is a boutique creative marketing studio that produces
                premium promotional videos for businesses ready to elevate their brand presence.
                We combine creative storytelling with strategic marketing to create content
                that not only looks beautiful but actually converts.
              </p>
              <p>
                Currently specializing in the aesthetic and wellness industry, we help med spas,
                aesthetic clinics, and beauty businesses stand out in a crowded market. Our
                bilingual capabilities in English and Spanish allow us to reach diverse audiences
                and expand your market reach.
              </p>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-14 text-center">
              <div>
                <h3 className="text-4xl font-bold">10+</h3>
                <p className="text-sm text-gray-500">Years in sales & marketing</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">Bilingual</h3>
                <p className="text-sm text-gray-500">English & Spanish campaigns</p>
              </div>

              <div>
                <h3 className="text-4xl font-bold">AI + Human</h3>
                <p className="text-sm text-gray-500">Creative production workflow</p>
              </div>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 mt-8 text-[#0F766E] font-medium hover:gap-3 transition-all"
            >
              Learn more about us
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
