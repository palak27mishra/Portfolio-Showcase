import { motion } from "framer-motion";
import { EDUCATION } from "../utils/constants";
import { GraduationCap, BookOpen } from "lucide-react";

export default function Education() {
  return (
    <section id="education" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Education <span className="text-gradient">Journey</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="relative border-l-2 border-primary/30 ml-4 md:ml-1/2 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2 lg:border-l-0">
          {/* Center line for desktop */}
          <div className="hidden lg:block absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-gradient-to-b from-primary via-accent to-highlight/20" />

          {EDUCATION.map((edu, i) => {
            const isLeft = i % 2 === 0;
            return (
              <motion.div
                key={edu.id}
                initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
                className={`relative mb-12 flex flex-col lg:flex-row items-center ${isLeft ? "lg:flex-row-reverse" : ""} w-full pl-8 lg:pl-0`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-[-5px] lg:left-1/2 lg:-translate-x-1/2 w-4 h-4 rounded-full bg-background border-2 border-primary shadow-[0_0_10px_rgba(167,139,250,0.8)] z-10" />

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${isLeft ? "lg:text-right lg:pr-12" : "lg:pl-12"}`}>
                  <div className="glass-card p-6 rounded-2xl border-primary/20 hover:border-primary/50 transition-colors group">
                    <div className={`flex items-center gap-3 mb-3 ${isLeft ? "lg:justify-end" : ""}`}>
                      <div className="p-2 rounded-lg bg-accent/10 text-accent group-hover:bg-accent/20 transition-colors">
                        {i === 0 ? <GraduationCap className="w-5 h-5" /> : <BookOpen className="w-5 h-5" />}
                      </div>
                      <span className="text-sm font-mono text-primary bg-primary/10 px-3 py-1 rounded-full">
                        {edu.period}
                      </span>
                    </div>
                    
                    <h3 className="text-xl font-heading font-bold mb-1 text-foreground">
                      {edu.degree}
                    </h3>
                    <h4 className="text-muted-foreground font-medium mb-3">
                      {edu.institution}
                    </h4>
                    
                    {edu.relevant && (
                      <p className="text-sm text-muted-foreground/80 mt-4 border-t border-border pt-4">
                        <span className="text-accent/80 font-medium">Relevant: </span>
                        {edu.relevant}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
