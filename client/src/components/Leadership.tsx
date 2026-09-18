import { motion } from "framer-motion";

const roles = [
  {
    id: 1,
    title: "Product Team Lead",
    organization: "Texas Product Catalyst",
    location: "Austin, Texas",
    period: "August 2025 – Present",
    achievements: [
      "Lead a product team on a client engagement with ConverseNow AI, whose voice-ordering technology powers drive-thrus and food trucks around Austin (Pinch, Bussin' Buns, and others), identifying the business problem behind gaps in its guest-crew-AI observability",
      "Wrote the business case and feature proposal for \"Signal Observatory,\" a self-improving observability platform, grooming it against 3-5 opportunity areas on impact, feasibility, and roadmap alignment",
      "Directed requirements gathering, prototyping, and validation across a 12-week engagement, delivering a final product strategy deck to the client"
    ]
  },
  {
    id: 2,
    title: "Product Engineering Team Lead",
    organization: "Texas Convergent",
    location: "Austin, Texas",
    period: "August 2025 – December 2025",
    achievements: [
      "Led a team analyzing whether crude oil volatility (OVX) and oil-news sentiment (TOSI) predict airline stock volatility (AAL, DAL, UAL, LUV, JETS), identifying which signals mattered most to the business question",
      "Directed a lag-analysis framework and model comparison (linear regression, Ridge/Lasso, Random Forest) evaluated on out-of-sample RMSE and directional accuracy",
      "Built interactive visualizations (time series, heatmaps, lag charts) in Plotly, Altair, and Matplotlib to communicate cross-market spillovers"
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
              <p className="text-primary font-medium mb-4">
                {role.organization}
                <span className="text-muted-foreground font-normal"> &middot; {role.location}</span>
              </p>
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
