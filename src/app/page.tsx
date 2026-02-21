import HeroSlider from '@/components/home/HeroSlider/HeroSlider';
import BrandPhilosophy from '@/components/home/BrandPhilosophy/BrandPhilosophy';
import CoreServices from '@/components/home/CoreServices/CoreServices';
import USPSection from '@/components/home/USPSection/USPSection';
import DoctorIntro from '@/components/home/DoctorIntro/DoctorIntro';
import TreatmentCarousel from '@/components/home/TreatmentCarousel/TreatmentCarousel';

export default function Home() {
  return (
    <>
      {/* ① Hero Section */}
      <HeroSlider />

      {/* ② Brand Philosophy */}
      <BrandPhilosophy />

      {/* ③ Core Services */}
      <CoreServices />

      {/* ④ USP Section */}
      <USPSection />

      {/* ⑤ Doctor Introduction */}
      <DoctorIntro />

      {/* ⑥ Treatment Carousel */}
      <TreatmentCarousel />

      {/* ⑦ CTA + Footer is in layout */}
    </>
  );
}
