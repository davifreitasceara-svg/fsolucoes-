import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ServicesSection } from "@/components/ServicesSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { SegmentsSection } from "@/components/SegmentsSection";
import { AuthoritySection } from "@/components/AuthoritySection";
import { VideoSection } from "@/components/VideoSection";
import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <AuthoritySection />
      <VideoSection />
      <ProjectsSection />
      <WhyUsSection />
      <SegmentsSection />
      <CTASection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
