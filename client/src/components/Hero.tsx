import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="py-20 md:py-28">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col-reverse md:flex-row md:items-end gap-10 md:gap-16">
          <motion.div
            className="flex-1"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="section-label mb-4">Product Manager &middot; Builder</p>

            <h1 className="font-display text-5xl md:text-6xl leading-[1.05] mb-6">
              Shiv Palla
            </h1>

            <p className="text-lg text-muted-foreground leading-relaxed max-w-xl mb-8">
              Product-minded builder studying Computer Science & Data Science
              (UX minor) at UT Austin. I turn ambiguous problems into shipped
              features, partnering with engineering on requirements, specs,
              and architecture for AI-driven products used by millions.
            </p>

            <div className="flex flex-wrap items-center gap-6 mb-10">
              <button
                onClick={() => scrollToSection("projects")}
                className="inline-flex items-center gap-2 text-sm font-medium border-b border-foreground pb-0.5 hover:border-primary hover:text-primary transition-colors"
              >
                View my work
                <ArrowRight className="h-4 w-4" />
              </button>
              <a
                href="/Shivsagar_Palla_PM_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-muted-foreground border-b border-transparent pb-0.5 hover:text-primary hover:border-primary transition-colors"
              >
                Resume
              </a>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <a href="mailto:shivpalla@utexas.edu" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Mail className="h-3.5 w-3.5" />
                shivpalla@utexas.edu
              </a>
              <a href="tel:+13462338378" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Phone className="h-3.5 w-3.5" />
                (346) 233-8378
              </a>
              <a href="https://www.linkedin.com/in/shivpalla/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-colors">
                <Linkedin className="h-3.5 w-3.5" />
                linkedin.com/in/shivpalla
              </a>
            </div>
          </motion.div>

          <motion.div
            className="w-40 h-52 md:w-52 md:h-64 shrink-0 self-center md:self-end"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-full h-full border border-border overflow-hidden">
              <img
                src="/shiv-palla-headshot.jpg"
                alt="Shiv Palla"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
