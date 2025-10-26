"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function PhilosophyPage() {
  return (
    <div className="bg-[#f5f1e8] text-[#1a1a1a] font-sans">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f5f1e8] to-[#ede8df] overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#d86626] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#d86626] rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto animate-fade-in">
            <p className="font-montserrat text-xs tracking-[3px] uppercase text-[#d86626] mb-4 opacity-80">
              Our Philosophy
            </p>
            <h1 className="font-newsreader text-5xl md:text-7xl text-[#1a1a1a] mb-6 leading-tight">
              We Are Architects of Experience
            </h1>
            <p className="font-inter text-lg text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
              Oster Atelier exists at the intersection of adventure, design, and personal transformation. We create the
              conditions for growth through carefully curated experiences that challenge and inspire.
            </p>
            <button className="bg-[#d86626] hover:bg-[#c25520] text-white font-montserrat text-sm tracking-[2px] uppercase px-8 py-3 transition-all duration-300 hover:shadow-lg hover:scale-105">
              Start a Journey
            </button>
          </div>
        </section>

        {/* Travel as Transformation Section */}
        <section className="py-20 md:py-32 px-4 md:px-8 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="font-newsreader text-4xl md:text-5xl mb-6 text-[#1a1a1a]">
                Travel as Transformation, Not Tourism
              </h2>
              <p className="font-inter text-lg text-gray-700 mb-4 leading-relaxed">
                The world tells us that a checklist of places to visit is what we want to make it a collection of
                stories to experience and share. Stories that change who you are.
              </p>
              <p className="font-inter text-lg text-gray-700 leading-relaxed">
                We're interested in writing you a narrative. We're interested in offering you a coordinate as a
                launching point for something difficult. Whatever your questions, we're here to help you find and answer
                questions you've been carrying.
              </p>
            </div>
            <div className="animate-slide-up-delayed">
              <div className="h-96 bg-gradient-to-br from-[#d86626]/10 to-[#d86626]/5 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-newsreader text-[#d86626]/30 mb-4">∞</div>
                  <p className="font-montserrat text-sm tracking-[2px] uppercase text-gray-500">Transformation</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What We Believe Section */}
        <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-newsreader text-4xl md:text-5xl text-center mb-16 text-[#1a1a1a]">What We Believe</h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="animate-fade-in-up p-8 border-l-4 border-[#d86626] hover:shadow-lg transition-all duration-300">
                <h3 className="font-newsreader text-2xl mb-4 text-[#1a1a1a]">We Are Architects</h3>
                <p className="font-inter text-gray-700 leading-relaxed">
                  We don't just plan trips. We architect experiences. We look for a specific purpose, but we also look
                  for the right people, group dynamics, and create the optimal conditions for your growth.
                </p>
              </div>
              <div
                className="animate-fade-in-up p-8 border-l-4 border-[#d86626] hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: "0.1s" }}
              >
                <h3 className="font-newsreader text-2xl mb-4 text-[#1a1a1a]">We Believe in the Climb</h3>
                <p className="font-inter text-gray-700 leading-relaxed">
                  The summit is not the goal. We create the conditions for you to be in the right place at the right
                  time. Our expeditions are designed to challenge and transform. Growth is not found in comfort. It
                  manifests when you're challenged.
                </p>
              </div>
              <div
                className="animate-fade-in-up p-8 border-l-4 border-[#d86626] hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: "0.2s" }}
              >
                <h3 className="font-newsreader text-2xl mb-4 text-[#1a1a1a]">The Goal is Clarity</h3>
                <p className="font-inter text-gray-700 leading-relaxed">
                  You will have a sense of your own clarity. We want to help you understand who you are and what you're
                  capable of. We want to help you find the answers to the questions you've been carrying.
                </p>
              </div>
              <div
                className="animate-fade-in-up p-8 border-l-4 border-[#d86626] hover:shadow-lg transition-all duration-300"
                style={{ animationDelay: "0.3s" }}
              >
                <h3 className="font-newsreader text-2xl mb-4 text-[#1a1a1a]">Your Trust is Everything</h3>
                <p className="font-inter text-gray-700 leading-relaxed">
                  You will have challenges on the journey. We are here to support you. Our philosophy is to create a
                  safe space for you to be challenged, not undermined. Safety is our foundation.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* The Oster Process Section */}
        <section className="py-20 md:py-32 px-4 md:px-8 bg-[#f5f1e8]">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-newsreader text-4xl md:text-5xl text-center mb-16 text-[#1a1a1a]">The Oster Process</h2>
            <div className="space-y-8">
              {[
                {
                  num: "01",
                  title: "Discovery",
                  desc: "We begin by understanding who you are, what questions you're asking, and what you're hoping to take away from the journey. This is where we make sure we're the right fit for you.",
                },
                {
                  num: "02",
                  title: "Design",
                  desc: "Every expedition is carefully crafted with intention. We consider terrain, timing, group dynamics, and the specific growth moments we want to create for you.",
                },
                {
                  num: "03",
                  title: "Preparation",
                  desc: "We want you challenged, not unprepared. Safety is our foundation. We prepare you mentally and physically for what's ahead.",
                },
                {
                  num: "04",
                  title: "Expedition",
                  desc: "The journey itself. Days of challenge, discovery, breakthrough, and transformation. This is where the transformation happens, guided by world-class expedition leaders.",
                },
                {
                  num: "05",
                  title: "Integration",
                  desc: "Coming home is part of the journey. We help you process what you learned and integrate it into your life. The climb becomes your compass.",
                },
              ].map((step, idx) => (
                <div
                  key={idx}
                  className="animate-fade-in-up flex gap-8 pb-8 border-b border-gray-200 last:border-b-0 hover:translate-x-2 transition-transform duration-300"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-[#d86626] text-white rounded-full flex items-center justify-center font-newsreader text-2xl font-semibold">
                      {step.num}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-newsreader text-2xl mb-3 text-[#1a1a1a]">{step.title}</h3>
                    <p className="font-inter text-gray-700 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 px-4 md:px-8 text-center bg-white">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="font-newsreader text-4xl md:text-5xl mb-8 text-[#1a1a1a]">Ready to Begin?</h2>
            <p className="font-inter text-lg text-gray-700 mb-8 leading-relaxed">
              Every journey starts with a single question. Are you ready to grow?
            </p>
            <button className="bg-[#d86626] hover:bg-[#c25520] text-white font-montserrat text-sm tracking-[2px] uppercase px-8 py-3 transition-all duration-300 hover:shadow-lg hover:scale-105">
              Start a Journey
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
