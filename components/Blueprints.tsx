"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import SectionLabel from "./ui/SectionLabel"
import Button from "./ui/Button"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Blueprints: React.FC = () => {
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

      tl.from(".blueprint-content", { opacity: 0, y: 50, duration: 1, ease: "power3.out" }).from(
        ".blueprint-image",
        { opacity: 0, scale: 0.95, duration: 1, ease: "power3.out" },
        "-=0.7",
      )
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="blueprints" className="py-20 lg:py-32 px-[clamp(6%,5vw,8%)]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        <div className="blueprint-content">
          <SectionLabel>The Blueprint</SectionLabel>
          <h2 className="font-newswriter font-light text-4xl lg:text-5xl leading-tight mb-6">
            A Journey Designed for One
          </h2>
          <p className="text-stone-700 leading-loose mb-4">
            Come to us with a question, a transition, a turning point in your life. A Blueprint is our answer—a
            completely bespoke expedition designed and built from the ground up, just for you.
          </p>
          <p className="text-stone-700 leading-loose mb-8">
            This is couture expedition design. We begin with a deep conversation to understand your story and your
            objective. From there, our architects curate every element: the location, the challenges, the pace. It's a
            collaborative process to create a journey that will meet you where you are and take you where you need to
            go.
          </p>

          <a href="#apply">
            <Button>Begin the Conversation</Button>
          </a>
        </div>
        <div
          className="blueprint-image w-full aspect-[4/3] shadow-2xl bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1642516355641-5bede7c2d026?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2070')",
          }}
        ></div>
      </div>
    </section>
  )
}

export default Blueprints
