import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "We had content before, but it wasn’t bringing in new clients. After using Ileana’s videos, we started getting actual inquiries within the first couple of weeks. That was the difference for us.",
    author: "Sarah M.",
    role: "Med Spa Owner",
    location: "Florida",
  },
  {
    quote: "What stood out was how easy the process was. I didn’t have to figure anything out — they just understood what we needed and delivered something that finally looked professional.",
    author: "Maria R.",
    role: "Clinic Manager",
    location: "Texas",
  },
  {
    quote: "The videos made our brand look more premium instantly. We started getting better quality clients — people who were ready to book, not just ask questions.",
    author: "James C.",
    role: "Aesthetic Practice Owner",
    location: "California",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-medium tracking-widest uppercase text-[#0F766E] mb-4">
            Client Testimonials
          </p>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold leading-tight text-[#1F2937]">
            Trusted by businesses like yours
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="relative p-8 bg-[#E5E7EB] rounded-2xl border border-[#C0C7CE]/50"
            >
              <Quote className="h-10 w-10 text-[#14B8A6]/40 mb-6" />
              <blockquote className="text-[#1F2937] leading-relaxed mb-8">
                {testimonial.quote}
              </blockquote>
              <div className="pt-6 border-t border-[#C0C7CE]">
                <p className="font-serif font-semibold text-[#1F2937]">
                  {testimonial.author}
                </p>
                <p className="text-sm text-[#6B7280] mt-1">
                  {testimonial.role}
                </p>
                <p className="text-sm text-[#6B7280]">
                  {testimonial.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
