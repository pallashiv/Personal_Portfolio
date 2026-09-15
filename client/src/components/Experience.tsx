import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "Product Management Intern",
    company: "IBM",
    period: "May 2026 – August 2026",
    location: "Austin, Texas",
    achievements: [
      "Owned end-to-end requirements for \"AI Daily Brief,\" a chat-first AI system replacing IBM Maximo's static dashboard, partnering directly with engineering on architecture and API design for an MVP touching millions of industrial maintenance decisions",
      "Drove a proactive, iteration-first approach to scope, establishing a strict 3-item attention cap that cut on-screen decision load versus the legacy 15+ widget dashboard under a tight delivery timeline",
      "Authored a technical/product spec (30+ conversational intents, component architecture, 16-step verification script) that engineering built directly against, keeping design and engineering aligned through a fast-moving MVP cycle"
    ]
  },
  {
    id: 2,
    title: "AI Venture Agent Developer",
    company: "Tata Communications",
    period: "January 2026 – May 2026",
    location: "Remote",
    achievements: [
      "Partnered with engineering to build and ship an AI-driven deal-sourcing agent, translating business criteria into evaluation logic against a data pipeline covering 1,000+ firms and increasing pipeline coverage ~3x",
      "Designed and iterated on a strategic-fit evaluation framework across telecom, cloud, and digital infrastructure sectors, improving recommendation accuracy ~35% and cutting evaluation time from hours to minutes",
      "Presented findings to cross-functional venture and corporate strategy stakeholders, directly informing go/no-go calls on infrastructure and cloud partnership targets"
    ]
  },
  {
    id: 3,
    title: "Product Intern",
    company: "Thrive Education",
    period: "January 2025 – May 2025",
    location: "Remote",
    achievements: [
      "Owned the product roadmap for an AI-powered platform serving 1,000+ users, working closely with engineering and clinical stakeholders to prioritize features against a recurring revenue model",
      "Led design of provider-facing dashboards supporting a new recurring billing stream, working directly with engineers on data flows between provider and patient-facing systems",
      "Analyzed adoption and engagement data to iterate on features quickly, increasing retention by ~20% while maintaining strict data compliance standards"
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          className="section-label mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          03 &mdash; Experience
        </motion.p>
        <motion.h2
          className="font-display text-3xl md:text-4xl mb-14"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          viewport={{ once: true }}
        >
          Work experience
        </motion.h2>

        <div>
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              className="py-8 border-t border-border first:border-t-0 first:pt-0"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h3 className="font-display text-2xl">{experience.title}</h3>
                <span className="text-sm text-muted-foreground shrink-0">{experience.period}</span>
              </div>
              <p className="text-primary font-medium mb-4">
                {experience.company}
                <span className="text-muted-foreground font-normal"> &middot; {experience.location}</span>
              </p>
              <ul className="space-y-2">
                {experience.achievements.map((achievement, achIndex) => (
                  <li key={achIndex} className="text-muted-foreground leading-relaxed flex gap-3 max-w-3xl">
                    <span className="text-primary shrink-0">&middot;</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
