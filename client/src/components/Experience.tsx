import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    id: 1,
    title: "Software Engineer Intern",
    company: "@Bridge Health",
    period: "March 2025 – August 2025",
    location: "",
    color: "bg-blue-500",
    achievements: [
    ]
  },
  {
    id: 2,
    title: "Software Engineer Intern",
    company: "@Texas Convergent",
    period: "August 2024 – December 2024",
    location: "",
    color: "bg-purple-500",
    achievements: [
    ]
  },
  {
    id: 3,
    title: "AI/ML Intern",
    company: "@Cirrus Nexus",
    period: "May 2024 – August 2024",
    location: "",
    color: "bg-cyan-500",
    achievements: [
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-800/30">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="tech-gradient-text">Work Experience</span>
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-gradient-to-b from-blue-500 to-purple-500" />
            
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                className={`relative flex items-center mb-12 ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <div className={`flex-1 ${index % 2 === 0 ? "pr-8 text-right" : "pl-8"}`}>
                  <Card className="bg-slate-800/50 backdrop-blur-sm border-slate-700/50 hover:border-blue-500/50 transition-colors">
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{experience.title}</h3>
                      <h4 className="text-blue-400 font-semibold mb-2">{experience.company}</h4>
                      <p className="text-slate-400 text-sm mb-3">
                        {experience.period} | {experience.location}
                      </p>
                      <ul className="text-slate-300 text-sm space-y-1">
                        {experience.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>• {achievement}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Timeline Dot */}
                <motion.div 
                  className={`absolute left-1/2 transform -translate-x-1/2 w-4 h-4 ${experience.color} rounded-full border-4 border-slate-900`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.2 + 0.3 }}
                  viewport={{ once: true }}
                />
                
                <div className="flex-1" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
