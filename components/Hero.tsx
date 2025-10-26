import type React from "react"
import Button from "./ui/Button"

const Hero: React.FC = () => {
  return (
    <section
      className="relative min-h-[calc(100vh-88px)] grid place-items-center bg-cover bg-center text-white p-4 sm:p-8"
      style={{
        backgroundImage:
          "linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1645877409345-0389b63d382d?ixlib=rb-4.1.0&auto=format&fit=crop&q=80&w=2071')",
      }}
    >
      <div className="text-center max-w-4xl">
        <div className="font-montserrat text-xs font-medium tracking-[6px] uppercase mb-6 opacity-90">
          Expedition Design Studio
        </div>
        <h1 className="font-newswriter font-light text-[clamp(3.5rem,10vw,6rem)] leading-tight mb-6">
          Destination is You
        </h1>
        <p className="text-lg sm:text-xl font-light leading-relaxed max-w-2xl mx-auto opacity-95">
          We believe every life is a book. Our dream is to help you write a chapter you will never forget. A chapter
          that defines everything that comes after.
        </p>
        <div className="mt-10">
          <a href="#apply">
            <Button variant="primary">Begin Your Chapter</Button>
          </a>
        </div>
      </div>
      <div className="absolute bottom-8 sm:bottom-12 font-montserrat text-xs tracking-[3px] uppercase opacity-90 animate-pulse">
        Scroll to Explore
      </div>
    </section>
  )
}

export default Hero
