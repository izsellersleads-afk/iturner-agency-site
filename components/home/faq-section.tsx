"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "Do you work only with med spas?",
    answer: "While med spas and aesthetic clinics are our specialty and current focus, we work with a variety of businesses including real estate professionals, restaurants, local businesses, and coaches. Our creative expertise translates across industries—we simply have deep knowledge of the aesthetic space.",
  },
  {
    question: "Can you make videos in Spanish?",
    answer: "Absolutely! Bilingual content creation is one of our core strengths. We create professional videos in both English and Spanish, ensuring culturally relevant messaging that resonates authentically with each audience. This isn't just translation—it's true localization.",
  },
  {
    question: "Can these videos be used for Instagram and TikTok?",
    answer: "Yes! We create content optimized for all major social platforms including Instagram Reels, TikTok, Facebook, and YouTube Shorts. Each video is formatted and optimized for the specific platform requirements and best practices.",
  },
  {
    question: "Can you create TV-ready commercials?",
    answer: "Yes, we produce broadcast-quality commercials that meet local TV station standards. Our TV-ready commercials help establish credibility and reach audiences beyond social media, perfect for businesses looking to expand their presence.",
  },
  {
    question: "Do you offer custom jingles or branded music?",
    answer: "We do! Custom sonic branding including jingles and branded music is one of our unique offerings. A memorable jingle can make your business unforgettable and create instant brand recognition across all your marketing materials.",
  },
  {
    question: "How does the free demo work?",
    answer: "When you request a free demo, we'll have a brief discovery call to learn about your business and goals. Based on our conversation, we'll create a sample concept or short demo video to show you what's possible. This gives you a risk-free way to see our quality and approach before committing.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-20 lg:py-28 bg-[#E5E7EB]">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-[#0F766E] mb-4">
            Frequently Asked Questions
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[#1F2937]">
            Common questions answered
          </h2>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-[#C0C7CE]/50"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left"
              >
                <span className="font-serif text-lg font-medium text-[#1F2937] pr-4">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 text-[#0F766E] transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="text-[#6B7280] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
