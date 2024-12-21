import GalleryComponent from '../components/Gallery/GalleryComponent'
import HeroSection from '../sections/HeroSection';
import VisionSection from '../sections/VisionSection';
import FeaturedProjectsSeton from '../sections/FeaturedProjectsSeton';
import ImpactSection from '../sections/ImpactSection';
import TeamSection from '../sections/TeamSection';
import FAQSection from '../sections/FAQSection';
import NewsLettersSection from '../sections/NewsLettersSection';
import VantigaSection from '../sections/VantigaSection';
import VisionMissionCarousalSection from '../sections/about/VisionMissionCarousalSection';
import AmbassadorSection from '../sections/AmbassadorSection';
import OurTeamAboutSection from '../sections/about/OurTeamAboutSection';

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <VantigaSection/>
      <VisionMissionCarousalSection/>
      <FeaturedProjectsSeton title="Our Projects" />
      <ImpactSection/>
      <AmbassadorSection/>
      <GalleryComponent />
      <NewsLettersSection />
      <OurTeamAboutSection/>
      <FAQSection/>
    </>
  )
}

