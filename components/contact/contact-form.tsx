"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Check } from "lucide-react"

const businessTypes = [
  "Med Spa / Aesthetic Clinic",
  "Real Estate",
  "Restaurant",
  "Local Business",
  "Coach / Consultant",
  "Other",
]

const services = [
  "Social Media Video Ads",
  "Med Spa Video Campaign",
  "TV-Ready Commercial",
  "Bilingual Video Content",
  "Custom Jingle / Audio Branding",
  "Not Sure Yet",
]

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    businessType: "",
    service: "",
    website: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="bg-[#E5E7EB] rounded-2xl p-8 lg:p-12 text-center border border-[#C0C7CE]/50">
        <div className="w-16 h-16 rounded-full bg-[#14B8A6]/20 flex items-center justify-center mx-auto mb-6">
          <Check className="h-8 w-8 text-[#0F766E]" />
        </div>
        <h2 className="font-serif text-2xl font-semibold mb-4 text-[#1F2937]">
          Thank you for reaching out!
        </h2>
        <p className="text-[#6B7280] leading-relaxed max-w-md mx-auto">
          {"We've"} received your message and will get back to you within 24 hours. 
          {"We're"} excited to learn more about your project!
        </p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <h2 className="font-serif text-2xl font-semibold mb-2 text-[#1F2937]">
          Request a Free Demo
        </h2>
        <p className="text-[#6B7280]">
          Tell us about your business and {"we'll"} create a sample concept tailored to your needs.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-2 text-[#1F2937]">
            Your Name <span className="text-red-500">*</span>
          </label>
          <Input
            id="name"
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Jane Smith"
            className="h-12 border-[#C0C7CE] focus:border-[#14B8A6] focus:ring-[#14B8A6]"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-2 text-[#1F2937]">
            Email Address <span className="text-red-500">*</span>
          </label>
          <Input
            id="email"
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="jane@business.com"
            className="h-12 border-[#C0C7CE] focus:border-[#14B8A6] focus:ring-[#14B8A6]"
          />
        </div>
      </div>

      {/* Business Type */}
      <div>
        <label htmlFor="businessType" className="block text-sm font-medium mb-2 text-[#1F2937]">
          What type of business are you? <span className="text-red-500">*</span>
        </label>
        <select
          id="businessType"
          required
          value={formData.businessType}
          onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
          className="w-full h-12 px-4 rounded-lg border border-[#C0C7CE] bg-white text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6]"
        >
          <option value="">Select your business type</option>
          {businessTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </div>

      {/* Service Interest */}
      <div>
        <label htmlFor="service" className="block text-sm font-medium mb-2 text-[#1F2937]">
          What service are you interested in? <span className="text-red-500">*</span>
        </label>
        <select
          id="service"
          required
          value={formData.service}
          onChange={(e) => setFormData({ ...formData, service: e.target.value })}
          className="w-full h-12 px-4 rounded-lg border border-[#C0C7CE] bg-white text-[#1F2937] focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6]"
        >
          <option value="">Select a service</option>
          {services.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </select>
      </div>

      {/* Website / Social */}
      <div>
        <label htmlFor="website" className="block text-sm font-medium mb-2 text-[#1F2937]">
          Website or Social Media Handle
        </label>
        <Input
          id="website"
          type="text"
          value={formData.website}
          onChange={(e) => setFormData({ ...formData, website: e.target.value })}
          placeholder="www.yourbusiness.com or @yourbusiness"
          className="h-12 border-[#C0C7CE] focus:border-[#14B8A6] focus:ring-[#14B8A6]"
        />
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-2 text-[#1F2937]">
          Tell us about your project
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="What are your goals? What kind of content are you looking for?"
          className="w-full px-4 py-3 rounded-lg border border-[#C0C7CE] bg-white text-[#1F2937] placeholder:text-[#6B7280] focus:outline-none focus:ring-2 focus:ring-[#14B8A6] focus:border-[#14B8A6] resize-none"
        />
      </div>

      <Button
        type="submit"
        size="lg"
        disabled={isSubmitting}
        className="w-full sm:w-auto bg-[#0F766E] text-white hover:bg-[#0F766E]/90 h-14 px-8"
      >
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            Request My Free Demo
            <ArrowRight className="ml-2 h-5 w-5" />
          </>
        )}
      </Button>

      <p className="text-sm text-[#6B7280]">
        By submitting this form, you agree to be contacted about our services. 
        We respect your privacy and will never share your information.
      </p>
    </form>
  )
}
