"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* LEFT SIDE */}
          <div>
            <h1 className="text-4xl lg:text-5xl font-semibold leading-tight text-[#1F2937]">
            Stop blending in. Get premium video ads that actually bring you paying clients.
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl">
              We help aesthetic clinics and local businesses turn attention into real clients with scroll-stopping video ads, bilingual content, and TV-quality production—without the agency headaches.
            </p>
            <p className="mt-3 text-sm text-[#0F766E] font-medium">
              Perfect for med spas, beauty professionals, and local businesses ready to grow.
            </p>
            {/* CTA */}
            <div className="mt-10">
              <div className="flex flex-col sm:flex-row gap-4">
                <Button asChild size="lg" className="bg-[#0F766E] text-white hover:bg-[#0F766E]/90 h-14 px-8 text-base">
                  <Link href="/contact">Get Your Free Demo</Link>
                </Button>

                <Button asChild variant="outline" size="lg" className="h-14 px-8 text-base border-[#0F766E] text-[#0F766E] hover:bg-[#0F766E] hover:text-white">
                  <Link href="/contact#call">Book a Discovery Call</Link>
                </Button>
              </div>

              <p className="mt-4 text-sm text-gray-500">
                No obligation · Delivered in 48–72 hours · Tailored to your business
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                <span className="px-3 py-1 text-xs rounded-full bg-[#0F766E]/10 text-[#0F766E]">English + Spanish</span>
                <span className="px-3 py-1 text-xs rounded-full bg-[#0F766E]/10 text-[#0F766E]">TV-Ready Quality</span>
                <span className="px-3 py-1 text-xs rounded-full bg-[#0F766E]/10 text-[#0F766E]">Custom Music Included</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="relative">
            <p className="text-xs font-medium tracking-widest uppercase text-[#6B7280] mb-4 text-center lg:text-left">
              Real example for aesthetic clinics
            </p>

            <div className="aspect-[9/16] sm:aspect-[4/5] rounded-2xl overflow-hidden shadow-xl border border-[#E5E7EB]">
              <iframe
                src="https://player.vimeo.com/video/1174144993?title=0&byline=0&portrait=0&controls=1"
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
              />
            </div>

            <div className="absolute top-2 right-2 bg-[#14B8A6] text-white px-4 py-2 rounded-full text-sm shadow-lg">
              Free Demo — Delivered in 48h
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
