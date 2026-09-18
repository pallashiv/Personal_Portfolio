import { motion } from "framer-motion";

const roles = [
  {
    id: 1,
    title: "Product Team Lead",
    organization: "Texas Product Catalyst",
    period: "August 2025 – Present",
    achievements: [
      "Led the product team in working with ConverseNow AI on a feature proposal and seamless flow"
    ]
  },
  {
    id: 2,
    title: "Product Engineering Team Lead",
    organization: "Texas Convergent",
    period: "August 2025 – December 2025",
    achievements: [
      "Led the product engineering team on a data visualization project covering oil futures and airline stock prices",
      "Led the team in building a HAR-Realized Volatility model combining the OVX oil volatility index with a text-based oil sentiment indicator (TOSI) to forecast airline stock (JETS ETF) volatility, finding that oil sentiment led oil volatility, which in turn drove airline volatility with an approximately one-month lag"
    ]
  }
];

export default function Leadership() {
  return (
    <section id="leadership" className="py-20 border-t border-border">
      <div className="max-w-5xl mx-auto px-6">
        <motion.p
          className="section-label mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          04 &mdash; Leadership
        </motion.p>
        <motion.h2
          className="font-display text-3xl md:text-4xl mb-14"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.05 }}
          viewport={{ once: true }}
        >
          Leadership
        </motion.h2>

        <div>
          {roles.map((role, index) => (
            <motion.div
              key={role.id}
              className="py-8 border-t border-border first:border-t-0 first:pt-0"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-1">
                <h3 className="font-display text-2xl">{role.title}</h3>
                <span className="text-sm text-muted-foreground shrink-0">{role.period}</span>
              </div>
              <p className="text-primary font-medium mb-4">{role.organization}</p>
              <ul className="space-y-2">
                {role.achievements.map((achievement, achIndex) => (
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
