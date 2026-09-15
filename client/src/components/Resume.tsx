import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export default function Resume() {
  return (
    <section id="resume" className="py-20 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          className="section-label mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          05 &mdash; Resume
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          viewport={{ once: true }}
        >
          <div>
            <h2 className="font-display text-3xl md:text-4xl mb-2">Want the full picture?</h2>
            <p className="text-muted-foreground max-w-xl">
              A comprehensive overview of my experience, skills, and achievements.
            </p>
          </div>

          <a
            href="/Shivsagar_Palla_PM_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-0.5 hover:border-primary hover:text-primary transition-colors shrink-0"
          >
            View my resume
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
