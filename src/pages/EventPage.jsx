import React from 'react'
import HeroSection from '../sections/HeroSection';
import SpecialProjectsSection from '../sections/projects/SpecialProjectsSection';
import ProjectsCategorySection from '../sections/projects/ProjectsCategorySection';
import { EducationPrograms } from '../utils/ProjectsCategory';
import NewsLettersSection from '../sections/NewsLettersSection';
import TeamSection from '../sections/TeamSection';
import FAQSection from '../sections/FAQSection';

export default function EventPage() {
    return (
        <>
            <HeroSection />
            <SpecialProjectsSection />
            <ProjectsCategorySection
                categoryTitle="Festivals"
                programs={EducationPrograms}
            />
            <ProjectsCategorySection
                categoryTitle="Get Togethers"
                programs={EducationPrograms}
            />
            <ProjectsCategorySection
                categoryTitle="Childeren & Youth Activities"
                programs={EducationPrograms}
            />
            <NewsLettersSection />
            <TeamSection />
            <FAQSection />
        </>
    )
}
