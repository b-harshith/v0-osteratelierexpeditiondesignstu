import Header from "@/components/Header"
import Hero from "@/components/Hero"
import Philosophy from "@/components/Philosophy"
import CollectiveGrid from "@/components/CollectiveGrid"
import Collective from "@/components/Collective"
import Blueprints from "@/components/Blueprints"
import Process from "@/components/Process"
import OsterPromise from "@/components/OsterPromise"
import CollaborativeProgram from "@/components/CollaborativeProgram"
import ApplicationForm from "@/components/ApplicationForm"
import Footer from "@/components/Footer"
import OpeningAnimation from "@/components/OpeningAnimation"
import Partners from "@/components/Partners"

export default function Home() {
  return (
    <div className="bg-[#f5f1e8] text-[#1a1a1a] font-sans">
      <OpeningAnimation />

      <div id="main-content" className="page-content" style={{ opacity: 0 }}>
        <Header />
        <main>
          <Hero />
          <Philosophy />
          <Partners />
          <CollectiveGrid />
          <Collective />
          <Blueprints />
          <Process />
          <OsterPromise />
          <CollaborativeProgram />
          <ApplicationForm />
        </main>
        <Footer />
      </div>
    </div>
  )
}
