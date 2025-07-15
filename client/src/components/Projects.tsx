import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, MessageCircle, GraduationCap, ExternalLink } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "BevoPlace",
    period: "Jan 2025 - Apr 2025",
    description: "AI-powered marketplace with personalized recommendations, NLP-enhanced filtering, and chatbot-assisted listings using Core ML and Firebase.",
    technologies: ["Swift", "Firebase", "Core ML"],
    icon: ShoppingCart,
    gradient: "from-blue-500 to-purple-500",
    borderColor: "hover:border-blue-500/50"
  },
  {
    id: 2,
    title: "ALSpeak",
    period: "Sep 2024 - Dec 2024",
    description: "Communication app for ALS patients with customizable dictionaries and environment-based phrase sets. Won \"Best Business Overall\" award.",
    technologies: ["Swift", "Firebase", "JavaScript"],
    icon: MessageCircle,
    gradient: "from-purple-500 to-cyan-500",
    borderColor: "hover:border-purple-500/50"
  },
  {
    id: 3,
    title: "ShivShares",
    period: "Dec 2024 - Jan 2025",
    description: "AI education program teaching 30+ middle school students through interactive projects using Teachable Machine, Scratch, and Python fundamentals.",
    technologies: ["Python", "Scratch", "AI/ML"],
    icon: GraduationCap,
    gradient: "from-cyan-500 to-blue-500",
    borderColor: "hover:border-cyan-500/50"
  }
];

const techColors: Record<string, string> = {
  "Swift": "bg-blue-500/20 text-blue-400",
  "Firebase": "bg-purple-500/20 text-purple-400",
  "Core ML": "bg-cyan-500/20 text-cyan-400",
  "JavaScript": "bg-yellow-500/20 text-yellow-400",
  "Python": "bg-green-500/20 text-green-400",
  "Scratch": "bg-orange-500/20 text-orange-400",
  "AI/ML": "bg-pink-500/20 text-pink-400"
};

export default function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="tech-gradient-text">Featured Projects</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className={`bg-slate-800/50 backdrop-blur-sm border-slate-700/50 ${project.borderColor} transition-all duration-300 h-full`}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-lg flex items-center justify-center mr-4`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{project.title}</h3>
                        <p className="text-sm text-slate-400">{project.period}</p>
                      </div>
                    </div>
                    
                    <p className="text-slate-300 mb-4 leading-relaxed">{project.description}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className={`px-3 py-1 rounded-full text-sm ${techColors[tech] || "bg-slate-600/20 text-slate-400"}`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      className="text-blue-400 hover:text-purple-400 transition-colors p-0 h-auto"
                    >
                      Learn More <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
