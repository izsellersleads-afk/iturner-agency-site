import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "The videos Ileana created for our med spa completely transformed our social media presence. We've seen a 40% increase in consultation bookings since launching the campaign.",
    author: "Dr. Sarah Mitchell",
    role: "Owner, Glow Aesthetics Med Spa",
    location: "Miami, FL",
  },
  {
    quote: "Working with Ileana Turner Agency was seamless. They understood our brand immediately and delivered content that resonated with both our English and Spanish-speaking clients.",
    author: "Maria Rodriguez",
    role: "Marketing Director, Bella Skin Clinic",
    location: "Houston, TX",
  },
  {
    quote: "The custom jingle they created for our TV commercial is so catchy our patients hum it in the waiting room. That's the kind of memorable branding you can't buy anywhere else.",
    author: "Dr. James Chen",
    role: "Founder, Rejuvenate Medical Spa",
    location: "Los Angeles, CA",
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
