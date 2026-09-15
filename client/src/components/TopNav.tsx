import { Linkedin, Github, Mail } from "lucide-react";

interface TopNavProps {
  activeSection: string;
  onNavigate: (sectionId: string) => void;
}

const navigationItems = [
  { id: "hero", label: "Home" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "resume", label: "Resume" },
];

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:shivpalla@utexas.edu",
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
    <nav className="fixed top-0 left-0 w-full bg-background/95 backdrop-blur-sm z-50 border-b border-border">
      <div className="flex justify-between items-center max-w-5xl mx-auto px-6 h-20">
        <button
          className="font-display text-xl tracking-tight"
          onClick={() => onNavigate("hero")}
        >
          Shiv Palla
        </button>

        <ul className="flex items-center gap-5 md:gap-8 overflow-x-auto">
          {navigationItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <li key={item.id} className="shrink-0">
                <button
                  className={`text-sm py-1 border-b transition-colors whitespace-nowrap ${
                    isActive
                      ? "text-foreground border-primary"
                      : "text-muted-foreground border-transparent hover:text-foreground"
                  }`}
                  onClick={() => onNavigate(item.id)}
                >
                  {item.label}
                </button>
              </li>
            );
          })}
        </ul>

        <div className="flex items-center gap-4">
          {socialLinks.map((social) => {
            const Icon = social.icon;
            return (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Icon className="h-[18px] w-[18px]" />
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
