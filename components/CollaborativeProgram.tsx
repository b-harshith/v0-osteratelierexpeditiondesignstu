"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import SectionLabel from "./ui/SectionLabel"
import Button from "./ui/Button"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

// Icon components for visual emphasis
const LeadershipIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-[#d86626]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
    />
  </svg>
)
const TrustIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-[#d86626]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
    />
  </svg>
)
const PresenceIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-8 w-8 text-[#d86626]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={1.5}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
    />
  </svg>
)

const Pillar: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({
  icon,
  title,
  children,
}) => (
  <div className="text-center pillar-item">
    <div className="flex items-center justify-center mb-4">{icon}</div>
    <h3 className="font-montserrat text-xs font-semibold tracking-[3px] uppercase text-stone-800 mb-3">{title}</h3>
    <p className="text-stone-600 leading-relaxed">{children}</p>
  </div>
)

const JourneyDay: React.FC<{ day: string; title: string; children: React.ReactNode; isLast?: boolean }> = ({
  day,
  title,
  children,
  isLast,
}) => (
  <div className={`journey-day relative pl-12 pb-10 ${!isLast ? "border-l-2 border-dashed border-stone-300" : ""}`}>
    <div className="absolute -left-[10px] top-0 w-5 h-5 bg-[#d86626] rounded-full border-4 border-[#ebe7dc]"></div>
    <p className="font-montserrat text-xs tracking-widest uppercase text-[#d86626] font-semibold">{day}</p>
    <h4 className="font-newswriter text-2xl font-medium mt-1 mb-2">{title}</h4>
    <p className="text-stone-700 leading-loose">{children}</p>
  </div>
)

const CollaborativeProgram: React.FC = () => {
  const componentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".hero-content", {
        opacity: 0,
        y: 40,
        duration: 1.2,
        ease: "power3.out",
      })

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".intro-section",
          start: "top 80%",
          toggleActions: "play none none none",
        },
      })
      tl.from(".intro-section h2", { opacity: 0, y: 40, duration: 1 }).from(
        ".intro-section p",
        { opacity: 0, y: 30, duration: 1 },
        "-=0.7",
      )

      gsap.from(".pillar-item", {
        scrollTrigger: {
          trigger: ".pillars-section",
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      })

      gsap.utils.toArray<HTMLElement>(".journey-day").forEach((day) => {
        gsap.from(day, {
          scrollTrigger: {
            trigger: day,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          x: -50,
          duration: 1,
          ease: "power3.out",
        })
      })

      gsap.from(".final-cta", {
        scrollTrigger: {
          trigger: ".final-cta",
          start: "top 85%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        duration: 1.2,
        ease: "power3.out",
      })
    }, componentRef)
    return () => ctx.revert()
  }, [])

  return (
    <div ref={componentRef}>
      <section
        id="collaborative-program"
        className="relative h-[60vh] bg-cover bg-center flex items-center justify-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1594488540021-53a97d8dab06?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2073')",
        }}
      >
        <div className="hero-content text-center text-white p-4">
          <div className="font-montserrat text-xs font-semibold tracking-[4px] uppercase mb-4">Private Commission</div>
          <h1 className="font-newswriter font-light text-[clamp(2.5rem,8vw,4rem)] leading-tight">The Collaborative</h1>
        </div>
      </section>

      <div className="bg-[#ebe7dc] py-20 lg:py-32">
        <section className="intro-section px-[clamp(6%,5vw,8%)] max-w-4xl mx-auto text-center">
          <h2 className="font-newswriter font-light text-[clamp(2rem,6vw,2.75rem)] leading-snug mb-6">
            Built for Teams Who Want More Than a Summit
          </h2>
          <p className="text-lg text-stone-700 leading-relaxed">
            The Collaborative is a six-day Himalayan trek designed to forge a group into a crew. It's an arena for
            real-world leadership, where trust is the currency and the summit is a shared achievement, not an individual
            prize.
          </p>
        </section>

        <section className="pillars-section mt-20 lg:mt-24 px-[clamp(6%,5vw,8%)] max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          <Pillar icon={<LeadershipIcon />} title="Applied Leadership">
            Face real-time challenges that require decisive action. Leadership isn't theoretical here—it's forged in the
            crucible of shared effort and consequence.
          </Pillar>
          <Pillar icon={<TrustIcon />} title="Engineered Trust">
            The journey is designed to make you rely on one another. Through collaborative planning and shared
            challenges, you build the trust that high-performing teams are made of.
          </Pillar>
          <Pillar icon={<PresenceIcon />} title="Radical Presence">
            This is a fully unplugged immersion. No devices, no distractions. Just the mountain, the mission, and your
            crew. This is where clarity and connection happen.
          </Pillar>
        </section>

        <section className="mt-20 lg:mt-32 px-[clamp(6%,5vw,8%)] max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <SectionLabel>The 6-Day Journey</SectionLabel>
            <h2 className="font-newswriter font-light text-[clamp(2.25rem,6vw,3rem)] leading-snug">
              From Plan to Peak
            </h2>
          </div>
          <div>
            <JourneyDay day="Day 01" title="Arrival & The Brief">
              Your team arrives at basecamp. The objective is presented, along with the resources available. The first
              leadership test begins: collaborative route planning and role delegation.
            </JourneyDay>
            <JourneyDay day="Days 02-04" title="The Ascent">
              The core of the expedition. Each day presents new navigational and logistical challenges. Teams must
              manage their energy, supplies, and morale as they push through demanding terrain.
            </JourneyDay>
            <JourneyDay day="Day 05" title="The Summit Objective">
              A focused push to achieve the collective goal. This day tests the team's cohesion, resilience, and
              decision-making under the pressures of altitude and fatigue.
            </JourneyDay>
            <JourneyDay day="Day 06" title="Descent & Debrief" isLast>
              The journey down is a time for reflection. Back at basecamp, a facilitated debrief helps translate the
              on-mountain lessons into actionable insights for the workplace.
            </JourneyDay>
          </div>
        </section>

        <section className="final-cta mt-20 lg:mt-32 text-center px-4">
          <h2 className="font-newswriter font-light text-[clamp(2.25rem,6vw,3rem)] leading-snug max-w-3xl mx-auto mb-8">
            Contact to know more.
          </h2>
          <a href="#apply">
            <Button>Enquire Now</Button>
          </a>
        </section>
      </div>
    </div>
  )
}

export default CollaborativeProgram
