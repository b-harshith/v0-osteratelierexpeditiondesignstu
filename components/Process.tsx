"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import SectionLabel from "./ui/SectionLabel"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Process: React.FC = () => {
  const processContainerRef = useRef<HTMLDivElement>(null)

  const processSteps = [
    {
      title: "The Challenge",
      description:
        "Every journey is intentionally designed to be physically and mentally demanding, pushing you beyond your perceived limits. This is not a vacation. This is where growth begins—in the space between who you are and who you can become.",
    },
    {
      title: "The Collective Goal",
      description:
        "Success is shared. The program is built around a singular objective that can only be achieved together. You will learn that the summit is not a place one person reaches—it is a moment the entire crew achieves. The bonds formed here last a lifetime.",
    },
    {
      title: "The Immersion",
      description:
        "We require total disconnection from the everyday world. By unplugging, you can fully engage with the present challenge and your cohort. Out here, stripped of distraction, you discover what truly matters and who you truly are.",
    },
  ]

  useEffect(() => {
    const ctx = gsap.context(() => {
      const steps = gsap.utils.toArray(".process-step")
      steps.forEach((step: any) => {
        gsap.from(step.querySelector(".process-step-number"), {
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          x: -50,
          duration: 1,
          ease: "power3.out",
        })
        gsap.from(step.querySelector(".process-step-content"), {
          scrollTrigger: {
            trigger: step,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 30,
          duration: 1,
          delay: 0.2,
          ease: "power3.out",
        })
      })
    }, processContainerRef)
    return () => ctx.revert()
  }, [])

  return (
    <section id="process" className="py-20 lg:py-32 px-[clamp(6%,5vw,8%)]">
      <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-24">
        <SectionLabel>Our Process</SectionLabel>
        <h2 className="font-newswriter font-light text-[clamp(2.25rem,6vw,3rem)] leading-snug">
          How We Build Your Story
        </h2>
        <p className="mt-6 text-lg text-stone-700 leading-relaxed">
          Every Oster journey is designed around three fundamental principles that create the conditions for
          transformation.
        </p>
      </div>
      <div ref={processContainerRef} className="max-w-5xl mx-auto">
        {processSteps.map((step, index) => (
          <div
            key={step.title}
            className="process-step grid grid-cols-1 md:grid-cols-[120px_1fr] gap-x-12 gap-y-4 py-10 border-b border-stone-200 last:border-b-0"
          >
            <div className="process-step-number font-newswriter text-7xl font-light text-stone-200 leading-none">
              0{index + 1}
            </div>
            <div className="process-step-content">
              <h3 className="font-newswriter text-2xl lg:text-3xl font-medium mb-3">{step.title}</h3>
              <p className="text-stone-700 leading-loose">{step.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Process
