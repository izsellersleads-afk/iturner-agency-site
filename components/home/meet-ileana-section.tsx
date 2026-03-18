"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function MeetIleanaSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#E5E7EB]">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="lg:order-2">
            <p className="text-sm font-medium tracking-widest uppercase text-[#0F766E] mb-4">
              The Creative Behind the Studio
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[#1F2937] text-balance">
              Meet Ileana
            </h2>
            <div className="mt-8 space-y-6 text-[#6B7280] leading-relaxed">
              <p>
                Ileana Turner is a bilingual creative producer specializing in promotional
                videos, compelling storytelling, and sonic branding. With a unique background
                that bridges marketing strategy and artistic expression, she brings a rare
                combination of business acumen and creative vision to every project.
              </p>
              <p>
                Her approach blends cinematic quality with conversion-focused strategy,
                ensuring every video not only looks stunning but delivers measurable results
                for your business. Whether {"it's"} a 15-second social ad or a full TV commercial,
                Ileana personally oversees every detail.
              </p>
            </div>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-[#0F766E] text-white hover:bg-[#0F766E]/90">
                <Link href="/about">
                  Learn More About Ileana
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-[#C0C7CE] text-[#1F2937] hover:bg-white hover:text-[#1F2937]">
                <Link href="/contact">
                  Book a Discovery Call
                </Link>
              </Button>
            </div>
          </div>

          {/* Video */}
          <div className="lg:order-1">
            <div className="relative">
              <div className="aspect-[9/16] sm:aspect-[4/5] max-w-md mx-auto rounded-2xl overflow-hidden shadow-2xl border border-[#C0C7CE]/30">
                <iframe
                  src="https://player.vimeo.com/video/1174145832?title=0&byline=0&portrait=0&controls=1"
                  style={{ width: "100%", height: "100%", border: "0", borderRadius: "16px" }}
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                ></iframe>

              </div>
              {/* Decorative Frame */}
              <div className="absolute -bottom-6 -left-6 w-full h-full border-2 border-[#14B8A6]/40 rounded-2xl -z-10 max-w-md mx-auto" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
