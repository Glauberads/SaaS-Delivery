import { Navbar } from "../components/Navbar"
import { Hero } from "../components/Hero"
import { Pain } from "../components/Pain"
import { Opportunity } from "../components/Opportunity"
import { Features } from "../components/Features"
import { BusinessModel } from "../components/BusinessModel"
import { SocialProof } from "../components/SocialProof"
import { Pricing } from "../components/Pricing"
import { CTA } from "../components/CTA"
import { Footer } from "../components/Footer"

export function LandingPage() {
  return (
    <div className="min-h-screen bg-background text-text-main selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <Pain />
        <Opportunity />
        <Features />
        <BusinessModel />
        <SocialProof />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  )
}
