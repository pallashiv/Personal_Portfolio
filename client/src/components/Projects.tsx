import { motion } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "AI-Driven Heatwave Alert & Resilience Optimization",
    period: "May 2025 – Dec 2025",
    description: "Research project defining requirements for a real-time decision-support system that optimizes heatwave alert routing and response latency, turning stochastic modeling and distributed data pipeline outputs into actionable interventions for 100,000+ at-risk Texas residents. Prioritized 5+ resilience strategies projected to cut response latency 20-30% versus legacy alert infrastructure.",
    technologies: ["Stochastic Modeling", "Data Pipelines", "Product Strategy"]
  },
  {
    id: 2,
    title: "ALSpeak",
    period: "Sep 2025 – Dec 2025",
    description: "Assistive communication app for ALS patients. Led caregiver user research to scope a low-latency, phrase-based MVP with contextual dictionaries and real-time text-to-speech, and drove cross-functional delivery — awarded Best Overall Business at Convergent Demo Day.",
    technologies: ["Product Strategy", "User Research", "Text-to-Speech"]
  },
  {
    id: 3,
    title: "Ethereum Blockchain – Crypto Wallet",
    period: "Jun 2025 – Aug 2025",
    description: "Defined requirements for a decentralized wallet app, scoping core flows like sending/receiving ETH and transaction history against distributed-systems trust and security constraints. Partnered with engineering on MetaMask/Web3 authentication to cut onboarding to a single click, and evaluated smart contract risks to inform security requirements.",
    technologies: ["Ethereum", "Web3", "MetaMask"]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          className="section-label mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          01 &mdash; Projects
        </motion.p>
        <motion.h2
          className="font-display text-3xl md:text-4xl mb-14"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          viewport={{ once: true }}
        >
          Selected work
        </motion.h2>

        <div>
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="py-8 border-t border-border first:border-t-0 first:pt-0"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-3">
                <h3 className="font-display text-2xl">{project.title}</h3>
                <span className="text-sm text-muted-foreground shrink-0">{project.period}</span>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-4 max-w-3xl">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-muted-foreground border border-border px-2.5 py-1"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
