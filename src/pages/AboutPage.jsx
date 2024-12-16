import GalleryComponent from '../components/Gallery/GalleryComponent'
import HeroSection from '../sections/HeroSection';
import VisionSection from '../sections/VisionSection';
import FeaturedProjectsSeton from '../sections/FeaturedProjectsSeton';
import ImpactSection from '../sections/ImpactSection';
import TeamSection from '../sections/TeamSection';
import FAQSection from '../sections/FAQSection';
import NewsLettersSection from '../sections/NewsLettersSection';

export default function AboutPage() {
  return (
    <>
      <HeroSection />
      <GalleryComponent />
      <VisionSection/>
      <FeaturedProjectsSeton/>
      <ImpactSection />
      <NewsLettersSection />
      <TeamSection/>
      <FAQSection/>
    </>
  )
}

