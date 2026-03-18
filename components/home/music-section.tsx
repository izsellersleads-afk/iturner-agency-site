import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Heart, Gift, Music2, Sparkles, Film } from "lucide-react"

const musicServices = [
  {
    icon: Heart,
    title: "Memorial Tribute Songs",
    description: "Honor a loved one with a beautifully crafted original song that captures their essence and legacy.",
  },
  {
    icon: Gift,
    title: "Anniversary & Wedding Songs",
    description: "Celebrate your love story with a custom composition for your special day or milestone.",
  },
  {
    icon: Music2,
    title: "Legacy Recordings",
    description: "Preserve family stories and memories through professionally produced musical recordings.",
  },
  {
    icon: Sparkles,
    title: "Cinematic Storytelling Music",
    description: "Original scores and instrumentals that bring visual stories to life with emotional depth.",
  },
  {
    icon: Film,
    title: "Brand Jingles & Promotional Music",
    description: "Catchy, memorable audio branding that makes your business unforgettable.",
  },
]

export function MusicSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-[#0F766E] mb-4">
              Beyond Video Production
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[#1F2937] text-balance">
              Music That Tells a Story
            </h2>
            <p className="mt-6 text-lg text-[#6B7280] leading-relaxed">
              The studio also offers commissioned songwriting based on personal stories 
              and life events. Whether {"it's"} a tribute to a loved one, a celebration of 
              a milestone, or a cinematic piece for your brand, we create original music 
              that resonates on a deeply personal level.
            </p>

            {/* Music Services */}
            <div className="mt-10 space-y-4">
              {musicServices.map((service) => (
                <div key={service.title} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-xl bg-[#14B8A6]/20 flex items-center justify-center shrink-0">
                    <service.icon className="h-5 w-5 text-[#0F766E]" />
                  </div>
                  <div>
                    <h3 className="font-medium text-[#1F2937] mb-1">{service.title}</h3>
                    <p className="text-sm text-[#6B7280]">{service.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button asChild size="lg" className="bg-[#0F766E] text-white hover:bg-[#0F766E]/90 h-14 px-8">
                <Link href="/contact?service=custom-song">
                  Request a Custom Song
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="aspect-square rounded-2xl overflow-hidden shadow-2xl border border-[#C0C7CE]/30">
              <Image
                src="/images/music/songwriting-studio.jpg"
                alt="Music production and songwriting studio"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1F2937]/40 to-transparent" />
            </div>
            {/* Floating Card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-6 shadow-xl max-w-xs border border-[#C0C7CE]/30">
              <p className="text-xs uppercase tracking-widest text-[#6B7280] mb-2">Available Services</p>
              <p className="font-serif text-lg font-semibold text-[#1F2937]">
                Original compositions, jingles, tribute songs, and cinematic scores
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
