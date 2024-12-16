import React from 'react'
import HeroSection from '../sections/HeroSection'
import VisionSection from '../sections/VisionSection';
import ProgramsSection from '../sections/ProgramsSection';
import FeaturedProjectsSeton from '../sections/FeaturedProjectsSeton';
import ImpactSection from '../sections/ImpactSection';
import VolunteerSection from '../sections/VolunteerSection';
import TeamSection from '../sections/TeamSection';
import FAQSection from '../sections/FAQSection';
export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream">
      <HeroSection />
      <VisionSection />
      <ProgramsSection />
      <FeaturedProjectsSeton />
      <ImpactSection />
      <VolunteerSection />
      <TeamSection />
      <FAQSection />
    </main>
  )
}
