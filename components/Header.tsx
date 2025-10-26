"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Link from "next/link"

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navLinks = [
    { href: "/philosophy", label: "Philosophy" },
    { href: "/collective", label: "Collective" },
    { href: "/blueprints", label: "Blueprints" },
    { href: "#process", label: "Process" },
    { href: "#promise", label: "Promise" },
    { href: "#apply", label: "Apply" },
  ]

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isMenuOpen])

  const handleLinkClick = () => {
    setIsMenuOpen(false)
  }

  return (
    <>
      <header className="sticky top-0 z-50 h-[88px] px-[clamp(6%,5vw,8%)] flex items-center justify-between bg-[#f5f1e8]/80 backdrop-blur-lg border-b border-black/10">
        <Link href="/" className="header-logo font-montserrat text-sm font-medium tracking-[4px]" data-logo="header">
          OSTER ATELIER
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex gap-9 list-none">
            {navLinks.map((link) => (
              <li key={link.href}>
                {link.href.startsWith("/") ? (
                  <Link
                    href={link.href}
                    className="font-montserrat text-xs tracking-[2px] uppercase pb-1 border-b border-transparent hover:border-[#d86626] transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="font-montserrat text-xs tracking-[2px] uppercase pb-1 border-b border-transparent hover:border-[#d86626] transition-colors duration-300"
                  >
                    {link.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden z-[60] text-[#1a1a1a]"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </header>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed top-0 left-0 h-full w-full bg-black/50 z-40 transition-opacity duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      ></div>

      {/* Mobile Slide-in Menu */}
      <aside
        className={`fixed top-0 left-0 h-full w-[80%] max-w-[320px] bg-[#f5f1e8] shadow-2xl z-50 transform transition-transform duration-300 ease-in-out lg:hidden ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <div className="p-8 pt-24">
          <h2 id="mobile-menu-title" className="sr-only">
            Main Menu
          </h2>
          <nav>
            <ul className="flex flex-col gap-8 list-none">
              {navLinks.map((link) => (
                <li key={link.href}>
                  {link.href.startsWith("/") ? (
                    <Link
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="font-montserrat text-base tracking-[2px] uppercase pb-1"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      onClick={() => setIsMenuOpen(false)}
                      className="font-montserrat text-base tracking-[2px] uppercase pb-1"
                    >
                      {link.label}
                    </a>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </aside>
    </>
  )
}

export default Header
