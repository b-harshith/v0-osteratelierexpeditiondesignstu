"use client"

import type React from "react"
import { useState, useEffect, useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"
import SectionLabel from "./ui/SectionLabel"

const Partners: React.FC = () => {
  const componentRef = useRef<HTMLElement>(null)
  const textRef = useRef<HTMLSpanElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)

  const partners = ["Indiahikes", "Patagonia", "Mahindra University", "Tourism Ministry of India"]

  useEffect(() => {
    if (isHovering) return

    const timer = setInterval(() => {
      gsap.to(textRef.current, {
        opacity: 0,
        y: -15,
        duration: 0.5,
        ease: "power2.in",
        onComplete: () => {
          setCurrentIndex((prev) => (prev + 1) % partners.length)
        },
      })
    }, 3000)

    return () => clearInterval(timer)
  }, [isHovering, partners.length])

  useLayoutEffect(() => {
    gsap.fromTo(textRef.current, { y: 15, opacity: 0 }, { y: 0, opacity: 1, duration: 0.5, ease: "power2.out" })
  }, [currentIndex])

  return (
    <section
      ref={componentRef}
      className="bg-[#ebe7dc] py-12 lg:py-16 px-[clamp(6%,5vw,8%)]"
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="max-w-5xl mx-auto text-center">
        <div className="partners-heading">
          <SectionLabel>Trusted Partners</SectionLabel>
        </div>

        <div className="mt-8 min-h-[80px] flex items-center justify-center group cursor-pointer">
          <span
            ref={textRef}
            className="font-montserrat text-xl md:text-2xl font-medium text-stone-900/40 group-hover:text-stone-900/90 transition-colors duration-300 ease-in-out"
          >
            {partners[currentIndex]}
          </span>
        </div>
      </div>
    </section>
  )
}

export default Partners
