"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import SectionLabel from "./ui/SectionLabel"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const PromiseIcon: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="mb-4 text-[#d86626]">{children}</div>
)

const PromiseItem: React.FC<{ icon: React.ReactNode; title: string; children: React.ReactNode }> = ({
  icon,
  title,
  children,
}) => (
  <div className="promise-item">
    <PromiseIcon>{icon}</PromiseIcon>
    <h3 className="font-montserrat text-sm font-semibold tracking-[3px] uppercase text-stone-800 mb-3">{title}</h3>
    <p className="text-stone-600 leading-relaxed text-sm">{children}</p>
  </div>
)

const OsterPromise: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".promise-item", {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 50,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      })
    }, sectionRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} id="promise" className="bg-[#ebe7dc] py-20 lg:py-32 px-[clamp(6%,5vw,8%)]">
      <div className="max-w-4xl mx-auto text-center mb-16 lg:mb-20">
        <SectionLabel>The Oster Promise</SectionLabel>
        <h2 className="font-newswriter font-light text-[clamp(2.25rem,6vw,3rem)] leading-snug">
          Freedom, Built on a Foundation of Trust
        </h2>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-10">
        <PromiseItem
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 18h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z"
              />
            </svg>
          }
          title="Designed Experiences"
        >
          Every moment of your journey is intentional. We don't sell tours; we design experiences piece by piece,
          ensuring each challenge and every vista serves the expedition's greater purpose.
        </PromiseItem>
        <PromiseItem
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
              />
            </svg>
          }
          title="Invisible Logistics"
        >
          We manage the entire logistical chain from home to home, but our hand is invisible. This means you have the
          freedom to explore. If you have 8 hours in Delhi before a bus, we don't book a room; we trust you to write
          your own story and be at the terminal on time.
        </PromiseItem>
        <PromiseItem
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          }
          title="Atelier Kit & Manager"
        >
          Upon acceptance, you receive a physical kit with documents, gear, and a few surprises. You're assigned an
          Atelier Manager who is your single point of contact, providing key updates via WhatsApp and ensuring you are
          always prepared, never pampered.
        </PromiseItem>
        <PromiseItem
          icon={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.286zm0 13.036h.008v.008h-.008v-.008z"
              />
            </svg>
          }
          title="Uncompromising Safety"
        >
          Our partnership with Indiahikes ensures that your freedom is built upon a bedrock of world-class safety
          protocols and logistics. We create challenges, but your safety is one area where there is never any
          compromise.
        </PromiseItem>
      </div>
    </section>
  )
}

export default OsterPromise
