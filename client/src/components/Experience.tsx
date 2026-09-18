import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    title: "Technical Product Management Intern",
    company: "IBM",
    period: "May 2026 – August 2026",
    location: "Austin, Texas",
    achievements: [
      "Owned product design for \"AI Daily Brief,\" a chat-first AI homepage replacing IBM Maximo's static ops dashboard; one of two flagship prototypes presented in leadership review meetings and re-iterated based on that feedback",
      "Built an MCP server in TypeScript/Node.js exposing Maximo data as agent tools, with a conversational inspection UI where field technicians photo-capture an issue, describe it in natural language, and an AI agent autonomously creates the work order and executes downstream Maximo actions",
      "Designed a dynamic briefing model where an AI agent, pulling live Maximo data through an MCP server, surfaced only the cards a user needed that day, scaling with emergencies, resources, and role tasks",
      "Documented the product spec (30+ conversational intents, component architecture, 16-step QA verification script) that let engineering build with minimal back-and-forth, keeping the MVP on schedule for demo day"
    ]
  },
  {
    id: 2,
    title: "Technical Product Management Intern",
    company: "Tata Communications",
    period: "January 2026 – May 2026",
    location: "Remote",
    achievements: [
      "Built the evaluation logic behind an AI deal sourcing agent with engineering, translating investment criteria into a scoring framework that took the team from manually reviewing 20-25 firms a week to screening 100-150, a ~3x lift in pipeline coverage across 1,000+ firms",
      "Analyzed telecom, cloud, and digital infrastructure targets to refine that scoring criteria, lifting recommendation accuracy ~35% and cutting manual research time by ~60%"
    ]
  },
  {
    id: 3,
    title: "Data Annotator (Computer Vision / AI Training Data)",
    company: "Mercor",
    period: "September 2025 – December 2025",
    location: "Remote",
    achievements: [
      "Labeled and annotated large-scale image datasets per detailed guidelines to produce high-quality ground-truth data for computer vision and ML model training, maintaining accuracy and consistency through QA checks"
    ]
  },
  {
    id: 4,
    title: "AI Product Management Intern",
    company: "Cirrus Nexus",
    period: "January 2025 – May 2025",
    location: "Remote",
    achievements: [
      "Built a map visualizing carbon emissions across data centers by region, with alerts triggering when levels crossed a threshold, for a platform used by 22+ enterprise clients",
      "Scoped an API-driven currency exchange module for multi-currency cost reports, replacing manual conversion by the finance/ops team and cutting errors in client billing"
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
