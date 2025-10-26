"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { EXPEDITIONS_DATA } from "../constants"
import type { Expedition } from "../types"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 mr-1.5 text-stone-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
    />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
)
const DurationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 mr-1.5 text-stone-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)
const GroupIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-4 w-4 mr-1.5 text-stone-500"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
    />
  </svg>
)

const ExpeditionCard: React.FC<{ expedition: Expedition }> = ({ expedition }) => {
  const {
    tag,
    title,
    description,
    imageUrl,
    link,
    linkText,
    status,
    location,
    duration,
    groupSize,
    difficulty,
    experience,
  } = expedition

  return (
    <div
      id={expedition.id}
      className="expedition-card bg-white rounded-2xl shadow-lg shadow-stone-200/60 p-6 md:p-10 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center border border-stone-100/80 transition-all duration-500 hover:shadow-xl hover:shadow-stone-300/40"
    >
      {/* Image Column */}
      <div className="relative aspect-[4/3] lg:aspect-auto lg:h-full rounded-xl overflow-hidden shadow-xl group">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
          style={{ backgroundImage: `url('${imageUrl}')` }}
        ></div>
        <div className="absolute top-4 left-4 bg-[#d86626] text-white font-montserrat text-xs tracking-widest uppercase px-3 py-1.5 rounded-full shadow-lg">
          {status}
        </div>
      </div>

      {/* Content Column */}
      <div className="flex flex-col">
        <div className="font-montserrat text-xs tracking-widest uppercase text-stone-500 mb-4 font-medium">{tag}</div>
        <h3 className="font-fraunces text-4xl md:text-5xl font-light leading-tight mb-6 text-[#1a1a1a]">{title}</h3>

        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-stone-600 mb-6">
          <span className="flex items-center">
            <LocationIcon /> {location}
          </span>
          <span className="flex items-center">
            <DurationIcon /> {duration}
          </span>
          <span className="flex items-center">
            <GroupIcon /> {groupSize}
          </span>
        </div>

        <div className="mb-6">
          <span className="inline-block bg-stone-100 text-stone-700 text-xs font-semibold px-3 py-1.5 rounded-full border border-stone-200">
            {difficulty}
          </span>
        </div>

        <p className="text-stone-700 leading-relaxed mb-8 text-base">{description}</p>

        <div className="bg-stone-50 p-6 rounded-lg border border-stone-200/80 mb-8">
          <h4 className="font-fraunces text-lg font-light mb-4 text-[#1a1a1a]">What You'll Experience:</h4>
          <ul className="space-y-3">
            {experience.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-[#d86626] mr-3 mt-1 flex-shrink-0 font-bold">•</span>
                <span className="text-stone-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <a
          href={link}
          className="font-montserrat text-xs tracking-[2px] uppercase text-[#1a1a1a] pb-2 border-b-2 border-[#d86626] transition-all duration-300 hover:opacity-70 hover:translate-x-1 self-start"
        >
          {linkText} &rarr;
        </a>
      </div>
    </div>
  )
}

const Collective: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".expedition-card")
      cards.forEach((card: any) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: "top 85%",
            toggleActions: "play none none none",
          },
          opacity: 0,
          y: 80,
          duration: 1.2,
          ease: "sine.out",
        })
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef}>
      <div className="max-w-7xl mx-auto space-y-20 lg:space-y-28 px-[clamp(6%,5vw,8%)] py-20 lg:py-28">
        {EXPEDITIONS_DATA.map((expedition) => (
          <ExpeditionCard key={expedition.id} expedition={expedition} />
        ))}
      </div>
    </section>
  )
}

export default Collective
