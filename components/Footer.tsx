"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Button } from "@/components/ui/button"

gsap.registerPlugin(ScrollTrigger)

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-stone-400 hover:text-[#d86626] transition-colors duration-300"
  >
    {children}
  </a>
)

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".footer-item", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none none",
        },
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.1,
        ease: "sine.out",
      })
    }, footerRef)

    return () => ctx.revert()
  }, [])

  return (
    <footer ref={footerRef} className="bg-[#1a1a1a] text-[#f5f1e8] py-20 lg:py-24 px-[clamp(6%,5vw,8%)]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 footer-item">
          <h2 className="font-fraunces font-light text-[clamp(2.5rem,7vw,4rem)] leading-tight mb-6">
            The Path Begins With a Single Step
          </h2>
          <p className="text-stone-300 max-w-xl mx-auto leading-relaxed mb-8">
            Your journey is waiting. Let's begin the conversation.
          </p>
          <a href="#apply">
            <Button
              variant="outline"
              className="border-[#d86626] text-[#d86626] hover:bg-[#d86626] hover:text-white transition-all duration-300 bg-transparent"
            >
              Begin Your Application
            </Button>
          </a>
        </div>

        <hr className="border-stone-200/20" />

        <div className="text-center py-16 lg:py-20 footer-item">
          <h3 className="text-[clamp(1.5rem,6vw,2.5rem)] font-montserrat tracking-[clamp(0.5em,3vw,1em)] uppercase text-white/80">
            Oster Atelier
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-center md:text-left">
          <div className="md:col-span-12 lg:col-span-5 footer-item">
            <p className="text-sm text-stone-400 leading-relaxed max-w-sm mx-auto md:mx-0">
              An expedition design studio creating limited-edition journeys for those standing at life's crossroads.
            </p>
          </div>
          <div className="md:col-span-4 lg:col-span-2 footer-item">
            <h4 className="font-montserrat text-xs font-semibold tracking-[2px] uppercase mb-4 text-stone-300">
              Explore
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#philosophy" className="text-sm text-stone-400 hover:text-[#d86626] transition-colors">
                  Philosophy
                </a>
              </li>
              <li>
                <a href="#collective" className="text-sm text-stone-400 hover:text-[#d86626] transition-colors">
                  Collective
                </a>
              </li>
              <li>
                <a href="#blueprints" className="text-sm text-stone-400 hover:text-[#d86626] transition-colors">
                  Blueprints
                </a>
              </li>
              <li>
                <a href="#process" className="text-sm text-stone-400 hover:text-[#d86626] transition-colors">
                  Process
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-4 lg:col-span-2 footer-item">
            <h4 className="font-montserrat text-xs font-semibold tracking-[2px] uppercase mb-4 text-stone-300">
              Connect
            </h4>
            <ul className="space-y-3">
              <li>
                <a href="#apply" className="text-sm text-stone-400 hover:text-[#d86626] transition-colors">
                  Apply
                </a>
              </li>
              <li>
                <a href="#promise" className="text-sm text-stone-400 hover:text-[#d86626] transition-colors">
                  Promise
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-stone-400 hover:text-[#d86626] transition-colors">
                  Stories
                </a>
              </li>
              <li>
                <a href="#" className="text-sm text-stone-400 hover:text-[#d86626] transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
          <div className="md:col-span-4 lg:col-span-3 footer-item">
            <h4 className="font-montserrat text-xs font-semibold tracking-[2px] uppercase mb-4 text-stone-300">
              Social
            </h4>
            <div className="flex space-x-5 justify-center md:justify-start">
              <SocialIcon href="#">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook</span>
              </SocialIcon>
              <SocialIcon href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.024.06 1.378.06 3.808s-.012 2.784-.06 3.808c-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.024.048-1.378.06-3.808.06s-2.784-.012-3.808-.06c-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.048-1.024-.06-1.378-.06-3.808s.012-2.784.06-3.808c.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 016.08 2.525c.636-.247 1.363-.416 2.427-.465C9.53 2.013 9.884 2 12.315 2zm-1.043 11.25a3.25 3.25 0 106.5 0 3.25 3.25 0 00-6.5 0zm6.35-4.85a1.2 1.2 0 100-2.4 1.2 1.2 0 000 2.4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Instagram</span>
              </SocialIcon>
              <SocialIcon href="#">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <span className="sr-only">Twitter</span>
              </SocialIcon>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-stone-200/20 text-center text-sm text-stone-400 footer-item">
          &copy; {new Date().getFullYear()} Oster Atelier. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
