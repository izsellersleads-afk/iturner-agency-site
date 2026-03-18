import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { AboutSection } from "@/components/home/about-section"
import { ServicesSection } from "@/components/home/services-section"
import { MeetIleanaSection } from "@/components/home/meet-ileana-section"
import { HowItWorksSection } from "@/components/home/how-it-works-section"
import { BilingualSection } from "@/components/home/bilingual-section"
import { MusicSection } from "@/components/home/music-section"
import { IndustriesSection } from "@/components/home/industries-section"
import { TestimonialsSection } from "@/components/home/testimonials-section"
import { FAQSection } from "@/components/home/faq-section"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <Navigation />
      <main className="pt-[72px] md:pt-[80px] lg:pt-[96px]">
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <MeetIleanaSection />
        <HowItWorksSection />
        <BilingualSection />
        <MusicSection />
        <IndustriesSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </>
  )
}
