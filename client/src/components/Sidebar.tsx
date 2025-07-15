import { motion } from "framer-motion";
import { Home, Code, Settings, Briefcase, GraduationCap, FileText, Linkedin, Github, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  activeSection: string;
}

const navigationItems = [
  { id: "hero", label: "Home", icon: Home },
  { id: "projects", label: "Projects", icon: Code },
  { id: "skills", label: "Skills", icon: Settings },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "education", label: "Education", icon: GraduationCap },
  { id: "resume", label: "Resume", icon: FileText },
];

const socialLinks = [
  { 
    icon: Linkedin, 
    label: "LinkedIn", 
    href: "https://linkedin.com", 
    gradient: "from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800" 
  },
  { 
    icon: Github, 
    label: "GitHub", 
    href: "https://github.com", 
    gradient: "from-gray-700 to-gray-800 hover:from-gray-800 hover:to-gray-900" 
  },
  { 
    icon: Mail, 
    label: "Email", 
    href: "mailto:example@email.com", 
    gradient: "from-red-600 to-red-700 hover:from-red-700 hover:to-red-800" 
  },
];

export default function Sidebar({ isOpen, onClose, activeSection }: SidebarProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    onClose();
  };

  return (
    <>
      <motion.nav
        initial={{ x: -256 }}
        animate={{ x: isOpen ? 0 : -256 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
        className="fixed left-0 top-0 h-full w-64 bg-slate-800/50 backdrop-blur-lg border-r border-slate-700/50 z-50 lg:translate-x-0"
      >
        <div className="p-6">
          <div className="mb-8">
            <h2 className="text-xl font-bold tech-gradient-text">Portfolio</h2>
          </div>
          
          <ul className="space-y-4">
            {navigationItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              
              return (
                <li key={item.id}>
                  <Button
                    variant="ghost"
                    className={`w-full justify-start p-3 rounded-lg transition-all duration-300 group ${
                      isActive 
                        ? "bg-slate-700/50 text-white" 
                        : "text-slate-300 hover:bg-slate-700/30 hover:text-white"
                    }`}
                    onClick={() => scrollToSection(item.id)}
                  >
                    <Icon 
                      className={`mr-3 h-5 w-5 transition-all duration-300 ${
                        isActive ? "text-cyan-400" : "text-cyan-400 group-hover:scale-110"
                      }`} 
                    />
                    <span>{item.label}</span>
                  </Button>
                </li>
              );
            })}
          </ul>
          
          {/* Social Links */}
          <div className="mt-8 pt-8 border-t border-slate-700/50">
            <h3 className="text-sm font-semibold text-slate-400 mb-4">Connect</h3>
            <div className="flex space-x-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 bg-gradient-to-r ${social.gradient} rounded-full transition-all duration-300`}
                    whileHover={{ scale: 1.1, rotate: 12 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Icon className="h-4 w-4 text-white" />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </motion.nav>
    </>
  );
}
