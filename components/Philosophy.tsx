"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import SectionLabel from "./ui/SectionLabel"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const CoreTenet: React.FC<{ number: string; title: string; children: React.ReactNode }> = ({
  number,
  title,
  children,
}) => (
  <div className="core-tenet">
    <div className="flex items-center gap-4 mb-4">
      <span className="font-newswriter text-4xl text-stone-300">{number}</span>
      <h3 className="font-montserrat text-xs font-semibold tracking-[3px] uppercase text-[#d86626]">{title}</h3>
    </div>
    <p className="text-stone-700 leading-relaxed">{children}</p>
  </div>
)

const Philosophy: React.FC = () => {
  const figureRef = useRef<HTMLDivElement>(null)
  const architectsSectionRef = useRef<HTMLElement>(null)
  const coreTenetsSectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const figureCtx = gsap.context(() => {
      gsap.from(figureRef.current, {
        scrollTrigger: {
          trigger: figureRef.current,
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      })
    }, figureRef)

    const architectsCtx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: architectsSectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      })

      tl.from(".architects-heading", { opacity: 0, y: 50, duration: 1, ease: "power3.out" })
        .from(".decorative-ampersand", { opacity: 0, scale: 0.8, duration: 1.2, ease: "elastic.out(1, 0.5)" }, "-=0.7")
        .from(".architects-text p", { opacity: 0, y: 30, duration: 1, stagger: 0.2, ease: "power3.out" }, "-=1")
    }, architectsSectionRef)

    const tenetsCtx = gsap.context(() => {
      gsap.from(".core-tenet", {
        scrollTrigger: {
          trigger: coreTenetsSectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.3,
        ease: "power3.out",
      })
    }, coreTenetsSectionRef)

    return () => {
      figureCtx.revert()
      architectsCtx.revert()
      tenetsCtx.revert()
    }
  }, [])

  return (
    <>
      <section id="philosophy" className="py-20 lg:py-32 px-[clamp(6%,5vw,8%)]">
        <div className="max-w-4xl mx-auto text-center">
          <SectionLabel>Our Philosophy</SectionLabel>
          <h2 className="font-newswriter font-light text-[clamp(2.25rem,6vw,3rem)] leading-snug mb-6">
            The world tells us that travel is a checklist of places to see. We believe it's a collection of stories to
            experience and share.
          </h2>
          <p className="text-lg text-stone-700 leading-relaxed">
            We are not a travel agency. We are a design studio that builds trusted experiences for you to confront your
            potential. Growth is not found in comfort; it demands discomfort. We intentionally create that challenge.
          </p>
        </div>
      </section>
      <div ref={figureRef} className="px-[clamp(6%,5vw,8%)] mb-20 lg:mb-32">
        <figure>
          <div
            className="w-full h-[clamp(48vh,60vh,72vh)] shadow-2xl bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1660496852155-3ed25f82b030?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=987')",
            }}
          ></div>
          <figcaption className="text-center mt-4 text-sm text-stone-500 italic">
            The Himalayas — Where clarity begins
          </figcaption>
        </figure>
      </div>
      <section ref={architectsSectionRef} className="bg-[#ebe7dc] py-20 lg:py-32 px-[clamp(6%,5vw,8%)] overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-24 items-center relative">
          <span className="decorative-ampersand absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-newswriter text-[30rem] text-stone-300/40 select-none z-0">
            &
          </span>
          <div className="architects-heading lg:col-span-1 z-10">
            <h2 className="font-newswriter font-light text-5xl lg:text-6xl leading-tight">
              We Are Architects of Experience
            </h2>
          </div>
          <div className="architects-text lg:col-span-2 text-stone-800 text-base leading-loose space-y-6 z-10">
            <p className="first-letter:font-newswriter first-letter:text-7xl first-letter:text-[#d86626] first-letter:float-left first-letter:mr-3 first-letter:pt-2">
              We don't sell trips; we design them, piece by piece. Every journey is a work of heart, built for a
              specific purpose. We believe in the climb. The easy path leads nowhere. The best view comes after the
              hardest climb. We create the conditions for you to earn that view.
            </p>
            <p>
              The real prize isn't a stamp in your passport. It's a new understanding of who you are and what you are
              capable of. Your trust is everything. You will face challenges out there. Worrying about your safety will
              not be one of them.
            </p>
          </div>
        </div>
      </section>
      <section ref={coreTenetsSectionRef} className="py-20 lg:py-32 px-[clamp(6%,5vw,8%)]">
        <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-24">
          <SectionLabel>Our Core Tenets</SectionLabel>
          <h2 className="font-newswriter font-light text-[clamp(2.25rem,6vw,3rem)] leading-snug">
            The Principles of the Atelier
          </h2>
          <p className="mt-4 text-base text-stone-600 leading-relaxed max-w-2xl mx-auto">
            These are the foundational pillars that guide the design of every Oster experience, ensuring each journey is
            intentional, immersive, and transformative.
          </p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <CoreTenet number="01" title="Intentional Discomfort">
            We design journeys that push you beyond your perceived limits. True growth happens when you're challenged,
            not when you're comfortable. This is where resilience is forged and potential is discovered.
          </CoreTenet>
          <CoreTenet number="02" title="Radical Presence">
            All journeys are fully unplugged. By disconnecting from digital noise, you reconnect with yourself, your
            crew, and the environment. This immersion is essential for clear thinking and deep connection.
          </CoreTenet>
          <CoreTenet number="03" title="Shared Endeavor">
            Our expeditions are built around a singular, collective goal. Success is not an individual achievement but a
            shared one. You learn to lead, to trust, and to rely on the strength of your crew.
          </CoreTenet>
        </div>
      </section>
    </>
  )
}

export default Philosophy
