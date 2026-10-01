import { motion } from "framer-motion";

type Project = {
  id: number;
  title: string;
  period: string;
  description: string;
  technologies: string[];
  links?: { label: string; url: string }[];
};

const projects: Project[] = [
  {
    id: 1,
    title: "Mcpscan",
    period: "Sep 2026",
    description: "Open-source static security scanner for MCP (Model Context Protocol) servers — the connectors that let AI assistants call external tools. Built 17 detection rules for tool poisoning, hardcoded secrets, and \"rug-pull\" attacks where a trusted server rewrites a tool's behavior after approval, tuning them against 8 real, published servers to cut false positives from 49 down to a handful. Ships as a zero-dependency CLI, an interactive HTML report, and a GitHub Action with code-scanning integration.",
    technologies: ["Python", "Security Tooling", "CI/CD"],
    links: [
      { label: "Live demo", url: "https://pallashiv.github.io/mcpscan/" },
      { label: "GitHub", url: "https://github.com/pallashiv/mcpscan" }
    ]
  },
  {
    id: 2,
    title: "ALSpeak",
    period: "Sep 2025 – Dec 2025",
    description: "Assistive communication app for ALS patients. Led caregiver user research to scope a low-latency, phrase-based MVP with contextual dictionaries and real-time text-to-speech, and drove cross-functional delivery — awarded Best Overall Business at Convergent Demo Day. Then built the native iOS app end to end in SwiftUI: two-tap speech organized by place, a tremor-safe SOS button, hold and dwell selection for limited motor control, and fully offline voices including Personal Voice, verified by 145 automated tests with Apple accessibility audits.",
    technologies: ["Product Strategy", "User Research", "SwiftUI", "Accessibility"],
    links: [
      { label: "Live demo", url: "https://alspeak.vercel.app" },
      { label: "GitHub", url: "https://github.com/pallashiv/ALSpeak" }
    ]
  },
  {
    id: 3,
    title: "Ethereum Blockchain – Crypto Wallet",
    period: "Sep 2026",
    description: "Beginner-friendly, non-custodial Ethereum wallet on the Sepolia testnet, so new users can connect, receive, send, and verify a payment with no real money at risk. Wrote the PRD, user flows, and 6 architecture decision records, then built it end to end: one-click MetaMask connect with Sign-In with Ethereum and signed sessions, a send flow that catches bad addresses, ENS names, and insufficient funds before the wallet ever opens, and live transaction history that shows new sends instantly. Every error says in plain language whether any money moved.",
    technologies: ["TypeScript", "Next.js", "Web3"],
    links: [
      { label: "Live demo", url: "https://ethereum-blockchain.vercel.app" },
      { label: "GitHub", url: "https://github.com/pallashiv/EthereumBlockchain" }
    ]
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

              <div className="flex flex-wrap items-center gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs text-muted-foreground border border-border px-2.5 py-1"
                  >
                    {tech}
                  </span>
                ))}
                {project.links?.map((link) => (
                  <a
                    key={link.label}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-medium text-primary hover:underline underline-offset-4 px-2.5 py-1"
                  >
                    {link.label} &rarr;
                  </a>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
