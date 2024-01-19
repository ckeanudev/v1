import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection/HeroSection";
import AboutSection from "@/components/AboutSection/AboutSection";
import ExperienceSection from "@/components/ExperienceSection/ExperienceSection";
import ProjectSection from "@/components/ProjectSection/ProjectSection";
import ContactSection from "@/components/ContactSection/ContactSection";
import Footer from "@/components/Footer";
import Image from "next/image";
import PreviewImg from "../../public/images/preview.png";

export default async function Home() {
  return (
    <main className="bg-light-2">
      <Image
        src={PreviewImg}
        width={400}
        height={400}
        alt="lk"
        className="hidden"
      />

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
