import React from "react";
import ThemeToggle from "../components/ThemeToggle";
// import StarBackground from "@/components/StarBackground";
import Navbar from "@/components/Navbar";
import IntroSection from "../components/IntroSection";
import AboutSection from "../components/AboutSection";
import SkillSection from "../components/SkillSection";
import ProjectSection from "../components/ProjectSection";
import ContactSection from "../components/ContactSection";
import { Footer } from "../components/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-backgroud text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effect */}
      {/* <StarBackground /> */}
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <main>
        <IntroSection />
        <AboutSection />
        <SkillSection />
        <ProjectSection />
        <ContactSection />
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Home;
