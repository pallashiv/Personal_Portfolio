import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-cyan-500/20 animate-gradient bg-[length:400%_400%]" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <motion.div 
            className="flex-1 text-center lg:text-left"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1 
              className="text-5xl lg:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <span className="tech-gradient-text">Hi there, I'm Shivsagar Palla!</span>

            </motion.h1>
            
            
            <motion.p 
              className="text-xl text-slate-300 mb-8 leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Passionate about building innovative solutions that bridge technology and user experience. 
              Curious about full-stack development, AI/ML integration, and creating impactful applications that change the world!
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <Button
                size="lg"
                className="px-8 py-4 tech-gradient rounded-full font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105"
                onClick={() => scrollToSection("projects")}
              >
                View My Work
              </Button>
              <Button
  asChild
  variant="outline"
  size="lg"
  className="px-8 py-4 border-slate-600 rounded-full font-semibold hover:bg-slate-800 transition-all duration-300"
>
  <a href="/shivpalla.resume.pdf" target="_blank" rel="noopener noreferrer">
    Check out my CV!
  </a>
</Button>

            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center animate-float"
                animate={{ 
                  y: [0, -10, 0],
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-72 h-72 rounded-full bg-slate-700/50 backdrop-blur-sm border-2 border-blue-500/30 flex items-center justify-center overflow-hidden">
                  <img
                    src="/_MG_9654.jpeg"
                    alt="Shivsagar Palla"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>
              <motion.div 
                className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                animate={{ 
                  scale: [1, 1.05, 1],
                  opacity: [0.5, 0.3, 0.5]
                }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
