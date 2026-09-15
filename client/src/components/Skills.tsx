import { motion } from "framer-motion";

const skillCategories = [
  {
    id: 1,
    title: "Languages",
    skills: ["Python", "Java", "JavaScript/TypeScript"]
  },
  {
    id: 2,
    title: "Product Skills",
    skills: ["Roadmapping", "Prioritization Frameworks (RICE, MoSCoW)", "Technical Requirements Definition", "Sprint Planning", "PRD/Spec Writing", "Competitive Analysis", "A/B Testing"]
  },
  {
    id: 3,
    title: "User Research & Analytics",
    skills: ["User Research", "Stakeholder Management", "Data Analysis", "KPI/OKR Tracking", "Amplitude", "Mixpanel"]
  },
  {
    id: 4,
    title: "Technical Fluency",
    skills: ["REST APIs", "Microservices", "Distributed Systems", "Cloud Platforms", "Agile/Scrum", "CAP Theorem", "Load Balancing"]
  }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          className="section-label mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          02 &mdash; Skills
        </motion.p>
        <motion.h2
          className="font-display text-3xl md:text-4xl mb-14"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          viewport={{ once: true }}
        >
          Skills & certifications
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-x-10 gap-y-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <h3 className="text-sm font-medium uppercase tracking-wide text-foreground mb-4 pb-2 border-b border-border">
                {category.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {category.skills.join(" · ")}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
