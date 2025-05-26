"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ExperienceSection } from "@/components/experience-section"
import { PortfolioSection } from "@/components/portfolio-section"
import { EducationSection } from "@/components/education-section"
import { ContactSection } from "@/components/contact-section"
import { Navigation } from "@/components/navigation"
import { BackgroundAnimation } from "@/components/background-animation"

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Fixed Background Canvas */}
      <div className="fixed inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <Suspense fallback={null}>
            <BackgroundAnimation />
          </Suspense>
        </Canvas>
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <PortfolioSection />
        <EducationSection />
        <ContactSection />
      </main>
    </div>
  )
}
