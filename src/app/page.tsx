import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection/HeroSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import Footer from "@/components/Footer";

export default async function Home() {
  return (
    <main className="bg-light-2">
      <Navbar />

      <HeroSection />

      <AboutSection />

      <ExperienceSection />

      <ProjectSection />

      <ContactSection />

      <Footer />
    </main>
  );
}
