import { useEffect } from "react";
import { useParams, Navigate, Link } from "react-router-dom";
import { projects } from "@/data/projects";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import GallerySection from "@/components/GallerySection";
import VideoSection from "@/components/VideoSection";
import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";

export default function ProjectDetail() {
  const { projectId } = useParams<{ projectId: string }>();

  // Scroll to top when project changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const projectData = projects.find((p) => p.id === projectId);

  // If the project doesn't exist, redirect to homepage
  if (!projectData) {
    return <Navigate to="/" replace />;
  }

  const themeClass =
    projectData.id === "erkancelik-insaat"
      ? "theme-erbay-sitesi"
      : projectData.id === "durak-mahallesi"
      ? "theme-durak-mahallesi"
      : projectData.id === "golden-odris-home"
      ? "theme-golden-odris-home"
      : "";

  return (
    <main className={`min-h-screen bg-background text-foreground animate-fade-in ${themeClass}`}>
      <Navbar />
      <HeroSection projectData={projectData} isComingSoon={projectData.isComingSoon} />
      {!projectData.isComingSoon && (
        <>
          <FeaturesSection projectData={projectData} />
          <GallerySection projectData={projectData} />
          <VideoSection projectData={projectData} />
        </>
      )}
      <ContactSection projectData={projectData} isComingSoon={projectData.isComingSoon} />
      <FooterSection />
    </main>
  );
}
