import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const coursework = [
  "Data Structures",
  "Algorithms", 
  "Statistics",
  "Risk Management",
  "Elements of Computers and Programming",
  "Elements of Data Science"
];

export default function Education() {
  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl font-bold text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="tech-gradient-text">Education</span>
        </motion.h2>
        
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="bg-slate-800/30 backdrop-blur-sm border-slate-700/50">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-orange-600 rounded-xl flex items-center justify-center mr-6">
                    <GraduationCap className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">The University of Texas at Austin</h3>
                    <p className="text-slate-400">Bachelor of Science</p>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-lg font-semibold text-blue-400 mb-2">Major</h4>
                    <p className="text-slate-300 mb-4">Computer Science & Economics</p>
                    <h4 className="text-lg font-semibold text-purple-400 mb-2">Minor</h4>
                    <p className="text-slate-300">Statistics and Data Science</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <h4 className="text-lg font-semibold text-cyan-400 mb-2">Relevant Coursework</h4>
                    <ul className="text-slate-300 space-y-1">
                      {coursework.map((course, index) => (
                        <motion.li
                          key={course}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          • {course}
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
