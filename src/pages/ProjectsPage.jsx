import React from 'react'
import HeroSection from '../sections/HeroSection';
import FeaturedProjectsSeton from '../sections/FeaturedProjectsSeton';
import ProjectsCategorySection from '../sections/projects/ProjectsCategorySection';
import VolunteerSection from '../sections/VolunteerSection';
import AmbassadorSection from '../sections/AmbassadorSection';
import SpecialProjectsSection from '../sections/projects/SpecialProjectsSection';
import GrantsSection from '../sections/projects/GrantsSection';
import NewsLettersSection from '../sections/NewsLettersSection';
import TeamSection from '../sections/TeamSection';
import FAQSection from '../sections/FAQSection';
import { EducationPrograms } from '../utils/ProjectsCategory';

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-cream">
      <HeroSection />
      <FeaturedProjectsSeton title="Our Projects" />
      <ProjectsCategorySection
        categoryTitle="Education"
        programs={EducationPrograms}
      />
      <VolunteerSection />
      <ProjectsCategorySection
        categoryTitle="Women Empowerment"
        programs={EducationPrograms}
      />
      <AmbassadorSection />
      <ProjectsCategorySection
        categoryTitle="Heritage Preservation"
        programs={EducationPrograms}
      />
      <SpecialProjectsSection />
      <GrantsSection />
      <NewsLettersSection />
      <TeamSection />
      <FAQSection />
    </div>)
}
