import { Home, Code, Settings, Briefcase, GraduationCap, FileText, Linkedin, Github, Mail } from "lucide-react";

interface TopNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
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
    icon: Mail,
    label: "Gmail",
    href: "mailto:pallashivsagar@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/shivpalla/",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/pallashiv",
  },
];

export default function TopNav({ activeSection, onNavigate }: TopNavProps) {
  return (
    <nav className="fixed top-0 left-0 w-full bg-slate-800/80 backdrop-blur-lg z-50 border-b border-slate-700">
      <div className="flex justify-between items-center max-w-7xl mx-auto px-4">
        <ul className="flex space-x-6 py-3">
          {navigationItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <li key={item.id}>
                <button
                  className={`flex items-center px-4 py-2 rounded transition-all duration-200 ${
                    isActive
                      ? "bg-slate-700 text-cyan-400"
                      : "text-slate-200 hover:bg-slate-700/50"
                  }`}
                  onClick={() => onNavigate(item.id)}
                >
                  <Icon className="mr-2 h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
        <div className="flex space-x-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-slate-200 hover:text-cyan-400 transition-colors"
              >
                <Icon className="h-5 w-5" />
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
} 
