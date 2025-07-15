import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code, Brain, Laptop, Wrench, Palette } from "lucide-react";

const skillCategories = [
  {
    id: 1,
    title: "Languages",
    icon: Code,
    color: "text-blue-400",
    skills: ["Python", "Java", "TypeScript", "JavaScript", "SQL"],
    borderColor: "hover:border-blue-400/30"
  },
  {
    id: 2,
    title: "AI/ML Frameworks",
    icon: Brain,
    color: "text-purple-400",
    skills: ["TensorFlow", "PyTorch", "Pandas", "NumPy", "OpenCV"],
    borderColor: "hover:border-purple-400/30"
  },
  {
    id: 3,
    title: "Web & App Dev",
    icon: Laptop,
    color: "text-cyan-400",
    skills: ["React", "Node.js", "Spring Boot", "Flask", "Jupyter"],
    borderColor: "hover:border-cyan-400/30"
  },
  {
    id: 4,
    title: "Tools & Platforms",
    icon: Wrench,
    color: "text-blue-400",
    skills: ["AWS", "Firebase", "Docker", "Git", "Linux"],
    borderColor: "hover:border-blue-400/30"
  },
  {
    id: 5,
    title: "Design & Tools",
    icon: Palette,
    color: "text-purple-400",
    skills: ["Figma", "Tableau", "Power BI", "JIRA", "Agile"],
    borderColor: "hover:border-purple-400/30"
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="tech-gradient-text">Technical Skills</span>
        </motion.h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <Card className={`bg-slate-800/30 backdrop-blur-sm border-slate-700/50 ${category.borderColor} transition-all duration-300 h-full`}>
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <Icon className={`${category.color} text-2xl mr-3`} />
                      <h3 className="text-xl font-bold">{category.title}</h3>
                    </div>
                    
                    <div className="space-y-2">
                      {category.skills.map((skill, skillIndex) => (
                        <motion.div
                          key={skill}
                          className="p-2 bg-slate-700/30 rounded-lg text-slate-300"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: skillIndex * 0.1 }}
                          viewport={{ once: true }}
                          whileHover={{ scale: 1.02, backgroundColor: "rgba(71, 85, 105, 0.4)" }}
                        >
                          {skill}
                        </motion.div>
                      ))}
                    </div>
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
