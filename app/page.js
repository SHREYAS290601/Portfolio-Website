import Image from "next/image";
import Link from "next/link";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectSection from "./components/ProjectSection";
import EmailSection from "./components/EmailSection";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-{#121212} container mx-auto py-4 px-12">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <EmailSection />
    </main>
  );
}
