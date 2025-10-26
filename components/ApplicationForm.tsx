"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import SectionLabel from "./ui/SectionLabel"
import Button from "./ui/Button"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const FormInput: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { label: string }> = ({
  label,
  id,
  ...props
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-stone-600 mb-1">
      {label}
    </label>
    <input
      id={id}
      {...props}
      className="w-full p-3 border border-stone-300 rounded-lg bg-white focus:ring-2 focus:ring-[#d86626] focus:border-[#d86626] transition"
    />
  </div>
)

const FormTextarea: React.FC<React.TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string }> = ({
  label,
  id,
  ...props
}) => (
  <div>
    <label htmlFor={id} className="block text-sm font-medium text-stone-600 mb-1">
      {label}
    </label>
    <textarea
      id={id}
      {...props}
      rows={4}
      className="w-full p-3 border border-stone-300 rounded-lg bg-white focus:ring-2 focus:ring-[#d86626] focus:border-[#d86626] transition"
    />
  </div>
)

const ApplicationForm: React.FC = () => {
  const [applicationType, setApplicationType] = useState("collective")
  const [isSubmitted, setIsSubmitted] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (!isSubmitted && formRef.current) {
      const ctx = gsap.context(() => {
        gsap.from(formRef.current, {
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 50,
          duration: 1.2,
          ease: "power3.out",
        })
      }, formRef)
      return () => ctx.revert()
    }
  }, [isSubmitted])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    window.scrollTo({ top: document.getElementById("apply")?.offsetTop, behavior: "smooth" })
  }

  if (isSubmitted) {
    return (
      <section id="apply" className="bg-[#ebe7dc] py-20 lg:py-32 px-[clamp(6%,5vw,8%)]">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-newswriter font-light text-4xl lg:text-5xl leading-tight mb-4">Thank You</h2>
          <p className="text-lg text-stone-700 leading-relaxed">
            Your application has been received. We have sent a confirmation to your email address. The path is now open.
            We will be in touch shortly to discuss the next steps of your journey.
          </p>
        </div>
      </section>
    )
  }

  return (
    <section id="apply" className="bg-[#ebe7dc] py-20 lg:py-32 px-[clamp(6%,5vw,8%)]">
      <div className="max-w-4xl mx-auto text-center mb-12">
        <SectionLabel>Application</SectionLabel>
        <h2 className="font-newswriter font-light text-[clamp(2.25rem,6vw,3rem)] leading-snug mb-4">
          Begin Your Journey
        </h2>
        <p className="text-lg text-stone-700 leading-relaxed">
          This is not a booking form. This is the start of a conversation. Please provide us with the details below so
          we can understand your ambitions.
        </p>
      </div>

      <div className="max-w-3xl mx-auto">
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="space-y-8 bg-white/60 p-6 sm:p-10 rounded-2xl shadow-lg border border-stone-200"
        >
          <fieldset>
            <legend className="block text-lg font-semibold text-stone-800 mb-4">
              What journey are you applying for?
            </legend>
            <div className="flex flex-col sm:flex-row gap-4">
              <label
                className={`flex-1 p-4 border rounded-lg cursor-pointer transition ${applicationType === "collective" ? "bg-orange-100 border-[#d86626] ring-2 ring-[#d86626]" : "bg-white border-stone-300"}`}
              >
                <input
                  type="radio"
                  name="application_type"
                  value="collective"
                  checked={applicationType === "collective"}
                  onChange={() => setApplicationType("collective")}
                  className="sr-only"
                />
                <span className="font-semibold">A Collective Journey</span>
                <span className="block text-sm text-stone-600">
                  Apply for a waitlist spot on one of our signature expeditions.
                </span>
              </label>
              <label
                className={`flex-1 p-4 border rounded-lg cursor-pointer transition ${applicationType === "blueprint" ? "bg-orange-100 border-[#d86626] ring-2 ring-[#d86626]" : "bg-white border-stone-300"}`}
              >
                <input
                  type="radio"
                  name="application_type"
                  value="blueprint"
                  checked={applicationType === "blueprint"}
                  onChange={() => setApplicationType("blueprint")}
                  className="sr-only"
                />
                <span className="font-semibold">A Custom Blueprint</span>
                <span className="block text-sm text-stone-600">
                  Begin the design process for a bespoke, private journey.
                </span>
              </label>
            </div>
            {applicationType === "collective" && (
              <div className="mt-4">
                <label htmlFor="collective-choice" className="block text-sm font-medium text-stone-600 mb-1">
                  Which Collective journey?
                </label>
                <select
                  id="collective-choice"
                  className="w-full p-3 border border-stone-300 rounded-lg bg-white focus:ring-2 focus:ring-[#d86626] focus:border-[#d86626]"
                >
                  <option>The Navigator's Void (Waitlist)</option>
                  <option>The Barterer's Burden (Waitlist)</option>
                </select>
              </div>
            )}
          </fieldset>

          <fieldset className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <legend className="text-lg font-semibold text-stone-800 mb-2 col-span-full">Your Personal Details</legend>
            <FormInput label="Full Name" id="full_name" type="text" required />
            <FormInput label="Email Address" id="email" type="email" required />
            <FormInput label="Phone Number (Optional)" id="phone" type="tel" />
            <FormInput label="Country of Residence" id="country" type="text" required />
          </fieldset>

          <fieldset className="space-y-6">
            <legend className="text-lg font-semibold text-stone-800 mb-2 col-span-full">
              Your Motivation & Experience
            </legend>
            <FormTextarea
              label="Briefly describe your current physical fitness level."
              id="fitness"
              placeholder="e.g., I run 10k twice a week, I do weekly strength training, etc."
              required
            />
            <FormTextarea
              label="Tell us about your experience with multi-day trekking or expeditions."
              id="experience"
              placeholder="Beginner or seasoned explorer? All are welcome."
              required
            />
            {applicationType === "blueprint" ? (
              <FormTextarea
                label="What is the central question or transition in your life you're looking to address?"
                id="motivation-blueprint"
                required
              />
            ) : (
              <FormTextarea
                label="What are you hoping to discover or overcome on this journey?"
                id="motivation-collective"
                required
              />
            )}
          </fieldset>

          <div className="text-center pt-4">
            <Button type="submit" className="w-full sm:w-auto">
              Submit Application
            </Button>
            <p className="text-xs text-stone-500 mt-4">
              By submitting, you agree to our terms and to be contacted about your journey.
            </p>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ApplicationForm
