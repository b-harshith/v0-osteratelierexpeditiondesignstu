"use client"

// FIX: Replaced placeholder content with a valid component.
import type React from "react"
import { useEffect, useRef } from "react"
import SectionLabel from "./ui/SectionLabel"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const CollectiveGrid: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "play none none none",
        },
      })
      tl.from(".collective-grid-heading", { opacity: 0, y: 50, duration: 1, ease: "power3.out" }).from(
        ".collective-grid-text",
        { opacity: 0, y: 30, duration: 1, ease: "power3.out" },
        "-=0.7",
      )
    }, sectionRef)

    return () => {
      ctx.revert()
    }
  }, [])

  return (
    <section id="collective" ref={sectionRef} className="py-20 lg:py-32 px-[clamp(6%,5vw,8%)]">
      <div className="max-w-4xl mx-auto text-center">
        <div className="collective-grid-heading">
          <SectionLabel>The Collective</SectionLabel>
          <h2 className="font-newswriter font-light text-[clamp(2.25rem,6vw,3rem)] leading-snug mb-6">
            Limited-Edition Journeys with a Shared Purpose
          </h2>
        </div>
        <p className="collective-grid-text text-lg text-stone-700 leading-relaxed">
          The Collective is a series of our signature, small-group expeditions. Each is built around a singular
          objective and designed for those who seek growth through shared endeavor. Below are our current and upcoming
          journeys.
        </p>
      </div>
    </section>
  )
}

export default CollectiveGrid
