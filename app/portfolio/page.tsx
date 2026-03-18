"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const categories = [
  { id: "all", label: "All Work" },
  { id: "med-spa", label: "Med Spa Ads" },
  { id: "social-ads", label: "Social Media Ads" },
  { id: "tv-ads", label: "TV Commercials" },
  { id: "bilingual", label: "Bilingual Campaigns" },
]

const portfolioItems = [
  {
    id: 1,
    title: "Custom Branded Music Ad",
    category: "tv-ads",
    description:
      "High-impact ad featuring custom-composed music designed to elevate brand perception and memorability.",
    tags: ["TV Commercials", "Custom Music"],
    thumbnail: "/images/portfolio/aesthetic-treatment.jpg",
    vimeoId: "1174572294",
    active: true,
    featured: true,
  },
  {
    id: 2,
    title: "Client Attraction Ad (Med Spa)",
    category: "med-spa",
    description:
      "Designed to capture attention and bring in new clients through short-form video.",
    tags: ["Med Spa Ads", "Social Media Ads"],
    thumbnail: "/images/portfolio/medspa-treatment.jpg",
    vimeoId: "1174562210",
    active: true,
  },
  {
    id: 3,
    title: "Conversion-Focused Ad",
    category: "social-ads",
    description:
      "Built to address client concerns and move viewers toward booking.",
    tags: ["Social Media Ads"],
    thumbnail: "/images/portfolio/social-media-content.jpg",
    vimeoId: "1174562517",
    active: true,
  },
  {
    id: 4,
    title: "Testimonial-Style Ad",
    category: "bilingual",
    description:
      "Trust-driven format designed to increase conversions and confidence.",
    tags: ["Bilingual Campaigns"],
    thumbnail: "/images/portfolio/skincare-consultation.jpg",
    vimeoId: "1174562757",
    active: true,
  },
  {
    id: 5,
    title: "Branding & Tone Direction",
    category: "med-spa",
    description:
      "Focus on visual identity, tone, and emotional positioning.",
    tags: ["Med Spa Ads"],
    thumbnail: "/images/portfolio/beauty-clinic.jpg",
    active: false,
  },
  {
    id: 6,
    title: "Premium TV Style Spot",
    category: "tv-ads",
    description:
      "High-end commercial format designed for broadcast and authority positioning.",
    tags: ["TV Commercials"],
    thumbnail: "/images/portfolio/aesthetic-treatment.jpg",
    active: false,
  },
]

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedVideo, setSelectedVideo] = useState<null | any>(null)

  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter(
        (item) =>
          item.category === activeCategory ||
          item.tags.some(
            (tag) =>
              tag.toLowerCase().replace(/ /g, "-") === activeCategory
          )
      )

  return (
    <>
      <Navigation />
      <main className="pt-[72px] md:pt-[80px] lg:pt-[96px]">

        {/* Hero */}
        <section className="py-20 lg:py-28 bg-[#E5E7EB]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="max-w-3xl">
              <p className="text-sm font-medium tracking-widest uppercase text-[#0F766E] mb-4">
                PORTFOLIO
              </p>

              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight text-[#1F2937]">
                See what premium video content looks like
              </h1>

              <p className="mt-8 text-lg text-[#6B7280] leading-relaxed max-w-2xl">
                Browse creative directions and campaign styles designed to attract,
                engage, and convert.
              </p>
            </div>
          </div>
        </section>

        {/* Featured Demo */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">

            <p className="text-sm font-medium tracking-widest uppercase text-[#0F766E] mb-4">
              Featured Demo
            </p>

            <h2 className="font-serif text-3xl sm:text-4xl font-semibold mb-6 text-[#1F2937]">
              Med Spa Video Campaign Showcase
            </h2>

            <div className="max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://player.vimeo.com/video/1174144993"
                className="w-full aspect-video"
                allow="autoplay; fullscreen; picture-in-picture"
              />
            </div>

            <div className="mt-10">
              <Button asChild size="lg" className="bg-[#0F766E] text-white hover:bg-[#0F766E]/90">
                <Link href="/contact">
                  Request Your Free Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>

          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-20 lg:py-28 bg-white">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">

            <p className="text-sm text-gray-500 text-center max-w-2xl mx-auto mb-10">
              These are sample campaign styles and creative directions. Full client case studies are currently being finalized.
            </p>

            <div className="flex flex-wrap gap-3 mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-5 py-2.5 rounded-full text-sm font-medium ${activeCategory === category.id
                      ? "bg-[#0F766E] text-white"
                      : "bg-[#E5E7EB] text-[#1F2937]"
                    }`}
                >
                  {category.label}
                </button>
              ))}
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredItems.map((item) => (
                <div
                  key={item.id}
                  className={`group bg-[#E5E7EB] rounded-2xl overflow-hidden border border-[#C0C7CE]/50 ${item.active ? "cursor-pointer hover:shadow-lg" : "opacity-80"
                    }`}
                  onClick={() => item.active && setSelectedVideo(item)}
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src={item.thumbnail}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="font-serif text-xl font-semibold mb-2 text-[#1F2937]">
                      {item.title}
                    </h3>

                    {item.featured && (
                      <p className="text-xs text-[#0F766E] mb-1">
                        Signature creative
                      </p>
                    )}

                    {item.active ? (
                      <p className="text-xs text-[#0F766E] mb-2">
                        Featured work
                      </p>
                    ) : (
                      <p className="text-xs text-gray-400 mb-2">
                        Example concept · Case study coming soon
                      </p>
                    )}

                    <p className="text-sm text-[#6B7280] mb-4">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-white px-3 py-1 rounded-full text-[#6B7280] border border-[#C0C7CE]/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

      </main>

      <Footer />

      {/* VIDEO MODAL */}
      {selectedVideo && (
        <div
          className="fixed inset-0 z-50 bg-[#1F2937]/90 flex items-center justify-center p-4"
          onClick={() => setSelectedVideo(null)}
        >
          <div
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute -top-12 right-0 text-white text-2xl"
            >
              ✕
            </button>

            <div className="aspect-video rounded-2xl overflow-hidden bg-black">
              <iframe
                src={`https://player.vimeo.com/video/${selectedVideo.vimeoId}?autoplay=1&title=0&byline=0&portrait=0`}
                className="w-full h-full"
                allow="autoplay; fullscreen; picture-in-picture"
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}