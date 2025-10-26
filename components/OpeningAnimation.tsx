"use client"

import type React from "react"
import { useState, useLayoutEffect, useRef } from "react"
import { gsap } from "gsap"

const IntroAnimation: React.FC = () => {
  const [isAnimationFinished, setIsAnimationFinished] = useState(false)
  const overlayRef = useRef<HTMLDivElement>(null)

  const splitTextIntoSpans = (text: string) => {
    return text.split(" ").map((word, index) => (
      <span key={index} className="inline-block overflow-hidden">
        <span className="inline-block translate-y-full will-change-transform filter blur-[1px]">{word}&nbsp;</span>
      </span>
    ))
  }

  useLayoutEffect(() => {
    document.body.style.overflow = "hidden"

    const mainContent = document.getElementById("main-content")
    const pulsingDot = overlayRef.current?.querySelector(".pulsing-dot")

    if (!mainContent || !pulsingDot) return

    const tl = gsap.timeline({
      onComplete: () => {
        setIsAnimationFinished(true)
        document.body.style.overflow = ""
        if (overlayRef.current) {
          overlayRef.current.style.display = "none"
        }
      },
    })

    const animateLine = (lineSelector: string) => {
      const words = gsap.utils.toArray(`${lineSelector} span span`)
      return {
        from: { yPercent: 100, opacity: 0, filter: "blur(4px)" },
        to: {
          yPercent: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        },
      }
    }

    // Start pulsing dot
    tl.to(pulsingDot, { opacity: 0.75, duration: 1 }, 0)
    tl.to(
      pulsingDot,
      {
        scale: 2.4,
        opacity: 0.4,
        yoyo: true,
        repeat: -1,
        duration: 1.2,
        ease: "power1.inOut",
      },
      0,
    )

    // Animate text sequence
    tl.fromTo(".intro-line-1 span span", animateLine(".intro-line-1").from, animateLine(".intro-line-1").to, 0.5)
      .to(".intro-line-1 span span", {
        yPercent: -100,
        opacity: 0,
        stagger: 0.05,
        ease: "power3.in",
        delay: 1.5,
      })

      .fromTo(".intro-line-2 span span", animateLine(".intro-line-2").from, animateLine(".intro-line-2").to)
      .to(".intro-line-2 span span", {
        yPercent: -100,
        opacity: 0,
        stagger: 0.05,
        ease: "power3.in",
        delay: 1.5,
      })

      .fromTo(
        ".intro-line-3 span span",
        { yPercent: 100, opacity: 0, filter: "blur(4px)" },
        {
          yPercent: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
        },
      )
      .to(".intro-line-3 span span", { delay: 2 })

      .add("exit")
      .to(
        ".intro-line-3 span span",
        {
          filter: "blur(10px)",
          opacity: 0,
          scale: 1.05,
          duration: 1.5,
          ease: "power2.in",
        },
        "exit",
      )
      .to(
        pulsingDot,
        {
          opacity: 0,
          duration: 1,
        },
        "exit",
      )
      .to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 2.5,
          ease: "power3.inOut",
        },
        "exit+=0.5",
      )
      .to(
        mainContent,
        {
          opacity: 1,
          duration: 2.5,
          ease: "power3.out",
        },
        "exit+=0.5",
      )

    return () => {
      gsap.killTweensOf([
        pulsingDot,
        ".intro-line-1 span span",
        ".intro-line-2 span span",
        ".intro-line-3 span span",
        mainContent,
        overlayRef.current,
      ])
      document.body.style.overflow = ""
    }
  }, [])

  if (isAnimationFinished) {
    return null
  }

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#f5f1e8] text-[#1a1a1a] will-change-opacity"
    >
      <div className="relative text-center w-full h-48 flex items-center justify-center">
        <p className="intro-line intro-line-1 absolute inset-0 flex items-center justify-center font-montserrat text-lg md:text-xl tracking-[5px] uppercase">
          {splitTextIntoSpans("We do not sell trips.")}
        </p>
        <p className="intro-line intro-line-2 absolute inset-0 flex items-center justify-center font-montserrat text-lg md:text-xl tracking-[5px] uppercase">
          {splitTextIntoSpans("We design journeys where;")}
        </p>
        <p className="intro-line intro-line-3 absolute inset-0 flex items-center justify-center font-fraunces font-light text-[clamp(2rem,6vw,3rem)] leading-none">
          {splitTextIntoSpans("The Destination is You")}
        </p>
      </div>

      <div className="pulsing-dot absolute bottom-12 h-2 w-2 rounded-full bg-[#1a1a1a] opacity-0"></div>
    </div>
  )
}

export default IntroAnimation
