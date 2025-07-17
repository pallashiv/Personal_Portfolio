import { useState, useEffect } from "react";
import TopNav from "@/components/TopNav";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import Resume from "@/components/Resume";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const sections = ["hero", "projects", "skills", "experience", "education", "resume"];
    
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "0px 0px -200px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => {
      sections.forEach((section) => {
        const element = document.getElementById(section);
        if (element) observer.unobserve(element);
      });
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <TopNav activeSection={activeSection} onNavigate={scrollToSection} />
      <main className="pt-16">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Education />
        <Resume />
      </main>
    </div>
  );
}
