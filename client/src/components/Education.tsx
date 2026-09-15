import { motion } from "framer-motion";

const coursework = [
  "Data Structures",
  "Algorithms",
  "Statistics",
  "Elements of Data Science",
  "Data Visualization",
  "Mobile Computing",
  "Risk Management",
  "Economic Statistics",
  "Macroeconomics"
];

export default function Education() {
  return (
    <section id="education" className="py-20 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          className="section-label mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          04 &mdash; Education
        </motion.p>
        <motion.h2
          className="font-display text-3xl md:text-4xl mb-14"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          viewport={{ once: true }}
        >
          Education
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-6">
            <h3 className="font-display text-2xl">The University of Texas at Austin</h3>
            <span className="text-sm text-muted-foreground shrink-0">Expected May 2028</span>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h4 className="text-sm font-medium uppercase tracking-wide text-foreground mb-2 pb-2 border-b border-border">Major</h4>
              <p className="text-muted-foreground mb-6">Computer Science & Data Science, B.S.</p>
              <h4 className="text-sm font-medium uppercase tracking-wide text-foreground mb-2 pb-2 border-b border-border">Minor</h4>
              <p className="text-muted-foreground">Informatics - UX</p>
            </div>

            <div>
              <h4 className="text-sm font-medium uppercase tracking-wide text-foreground mb-2 pb-2 border-b border-border">Relevant Coursework</h4>
              <p className="text-muted-foreground leading-relaxed">
                {coursework.join(" · ")}
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
