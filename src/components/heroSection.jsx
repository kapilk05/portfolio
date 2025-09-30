import { motion } from "framer-motion";
import { Button } from "@/components/ui/button"; 
import kapilPhoto from "@assets/Kapil photo_1753467707775.jpg";

export function HeroSection() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8"
        >
          <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-accent-cyan to-blue-500 p-1">
            <div className="w-full h-full rounded-full overflow-hidden">
              <img 
                src={kapilPhoto} 
                alt="Kapil Kashyap" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </motion.div>

        {/* Headings */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl md:text-6xl font-bold mb-6"
        >
          Hey there! I'm <span className="text-accent-cyan">Kapil</span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl md:text-3xl font-semibold text-accent-cyan mb-4"
        >
          Code • Create • Innovate
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8"
        >
          Software Developer & ML Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto"
        >
          Recent Computer Engineering graduate with strong foundation in machine learning, data analytics, and software development. Passionate about using data to solve real-world problems.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
        </motion.div>
      </div>
    </section>
  );
}
