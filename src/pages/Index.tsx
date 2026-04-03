import Navbar         from "@/components/Navbar";
import HeroSection    from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import GallerySection  from "@/components/GallerySection";
import VideoSection    from "@/components/VideoSection";
import ContactSection  from "@/components/ContactSection";
import FooterSection   from "@/components/FooterSection";

export default function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <GallerySection />
      <VideoSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
