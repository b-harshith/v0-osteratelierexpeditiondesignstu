"use client"

import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function BlueprintsPage() {
  return (
    <div className="bg-[#f5f1e8] text-[#1a1a1a] font-sans">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative w-full min-h-screen flex items-center justify-center bg-gradient-to-br from-[#f5f1e8] to-[#ede8df] overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#d86626] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#d86626] rounded-full blur-3xl"></div>
          </div>
          <div className="relative z-10 text-center px-4 md:px-8 max-w-4xl mx-auto animate-fade-in">
            <p className="font-montserrat text-xs tracking-[3px] uppercase text-[#d86626] mb-4 opacity-80">
              The Blueprint
            </p>
            <h1 className="font-newsreader text-5xl md:text-7xl text-[#1a1a1a] mb-6 leading-tight">
              Your Question. Your Journey.
            </h1>
            <p className="font-inter text-lg text-gray-700 max-w-2xl mx-auto mb-8 leading-relaxed">
              Sometimes you need more than a pre-designed expedition. You have a specific question to explore. We create
              custom-designed journeys tailored to your needs.
            </p>
            <button className="bg-[#d86626] hover:bg-[#c25520] text-white font-montserrat text-sm tracking-[2px] uppercase px-8 py-3 transition-all duration-300 hover:shadow-lg hover:scale-105">
              Explore Blueprints
            </button>
          </div>
        </section>

        {/* Couture Expedition Design Section */}
        <section className="py-20 md:py-32 px-4 md:px-8 max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="font-newsreader text-4xl md:text-5xl mb-6 text-[#1a1a1a]">Couture Expedition Design</h2>
              <p className="font-inter text-lg text-gray-700 mb-4 leading-relaxed">
                Maybe you decided between two paths. Maybe you need to be challenged in a specific way. Maybe you're
                looking for something difficult. Whatever your questions, we're here to help you find and answer
                questions you've been carrying.
              </p>
              <p className="font-inter text-lg text-gray-700 leading-relaxed">
                This is where expedition design becomes art. We work with a timeline, a geography, a challenge or goal.
                We design something difficult. Whatever your questions, we're here to help you find and answer questions
                you've been carrying.
              </p>
            </div>
            <div className="animate-slide-up-delayed">
              <div className="h-96 bg-gradient-to-br from-[#d86626]/10 to-[#d86626]/5 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl font-newsreader text-[#d86626]/30 mb-4">◆</div>
                  <p className="font-montserrat text-sm tracking-[2px] uppercase text-gray-500">Custom Design</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Questions We've Designed For Section */}
        <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-newsreader text-4xl md:text-5xl text-center mb-16 text-[#1a1a1a]">
              Questions We've Designed For
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              {[
                {
                  num: "01",
                  title: "Direction",
                  desc: "I need to find clarity on which path to take. I'm at a crossroads and need to understand what's calling me.",
                },
                {
                  num: "02",
                  title: "Capability",
                  desc: "I'm ready to discover what I'm capable of. I want to push my limits and understand my potential.",
                },
                {
                  num: "03",
                  title: "Healing",
                  desc: "I need to process something difficult. I'm interested in writing you a narrative that helps me move forward.",
                },
                {
                  num: "04",
                  title: "Mentality",
                  desc: "I want to strengthen my mental resilience. I'm interested in understanding my mindset and how to shift it.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="animate-fade-in-up text-center p-8 border border-gray-200 rounded-lg hover:shadow-lg hover:border-[#d86626] transition-all duration-300"
                  style={{ animationDelay: `${idx * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-[#d86626] text-white rounded-full flex items-center justify-center font-newsreader text-lg font-semibold mx-auto mb-4">
                    {item.num}
                  </div>
                  <h3 className="font-newsreader text-2xl mb-4 text-[#1a1a1a]">{item.title}</h3>
                  <p className="font-inter text-gray-700 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* The BluePrint Process Section */}
        <section className="py-20 md:py-32 px-4 md:px-8 bg-[#f5f1e8]">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-newsreader text-4xl md:text-5xl text-center mb-16 text-[#1a1a1a]">
              The BluePrint Process
            </h2>
            <div className="space-y-8">
              {[
                {
                  num: "01",
                  title: "Initial Consultation",
                  desc: "We start with a conversation. We listen to understand who you are, what you're looking for, and what you hope to discover. This is where we understand if we're the right fit for you.",
                },
                {
                  num: "02",
                  title: "Design Phase",
                  desc: "Our team designs a journey specifically for you. We consider terrain, timing, group dynamics, and the specific growth moments we want to create for you.",
                },
                {
                  num: "03",
                  title: "Proposal Review",
                  desc: "We present your custom expedition design. We walk through every detail and make sure it aligns with your vision and goals.",
                },
                {
                  num: "04",
                  title: "Preparation",
                  desc: "We want you challenged, not unprepared. Safety is our foundation. We prepare you mentally and physically for what's ahead.",
                },
                {
                  num: "05",
                  title: "Your Journey",
                  desc: "The expedition itself. Days of challenge, discovery, breakthrough, and transformation. This is where the transformation happens, guided by world-class expedition leaders.",
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

        {/* Investment & Commitment Section */}
        <section className="py-20 md:py-32 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-newsreader text-4xl md:text-5xl text-center mb-8 text-[#1a1a1a]">
              Investment & Commitment
            </h2>
            <p className="font-inter text-lg text-gray-700 text-center mb-12 max-w-3xl mx-auto leading-relaxed">
              BluePrints are significant investments, both financially and personally. Pricing varies based on
              destination, duration, group size, and the specific design. We typically range from $1700 to $4000+ per
              person.
            </p>
            <div className="bg-[#f5f1e8] p-8 rounded-lg animate-fade-in-up">
              <h3 className="font-newsreader text-2xl mb-6 text-[#1a1a1a]">What's Included</h3>
              <ul className="font-inter text-gray-700 space-y-3">
                <li className="flex items-start gap-3">
                  <span className="text-[#d86626] font-bold mt-1">—</span>
                  <span>Custom expedition design tailored to your goals</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d86626] font-bold mt-1">—</span>
                  <span>Pre-expedition preparation and coaching</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d86626] font-bold mt-1">—</span>
                  <span>Expert expedition leadership and guides</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d86626] font-bold mt-1">—</span>
                  <span>All logistics, meals, and accommodations</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#d86626] font-bold mt-1">—</span>
                  <span>Post-expedition integration support</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 md:py-32 px-4 md:px-8 text-center bg-[#f5f1e8]">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="font-newsreader text-4xl md:text-5xl mb-8 text-[#1a1a1a]">Ready to Design Your Journey?</h2>
            <p className="font-inter text-lg text-gray-700 mb-8 leading-relaxed">
              Let's talk about what you're looking for and whether this is the right path for you.
            </p>
            <button className="bg-[#d86626] hover:bg-[#c25520] text-white font-montserrat text-sm tracking-[2px] uppercase px-8 py-3 transition-all duration-300 hover:shadow-lg hover:scale-105">
              Schedule a Consultation
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
