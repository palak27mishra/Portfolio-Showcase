import { motion } from "framer-motion";
import { CERTIFICATIONS } from "../utils/constants";
import { Trophy, Award } from "lucide-react";

export default function Certifications() {
  return (
    <section id="certifications" className="py-24 relative z-10 bg-background/50">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Certifications & <span className="text-gradient">Achievements</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, i) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="relative glass-card p-6 rounded-2xl overflow-hidden group border border-border hover:border-yellow-500/30 transition-all duration-300"
            >
              {/* Shimmer sweep effect */}
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-transparent via-yellow-500/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
              
              <div className="relative z-10 flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20 text-yellow-500 border border-yellow-500/20 shadow-[0_0_15px_rgba(234,179,8,0.2)]">
                  {i % 2 === 0 ? <Trophy className="w-6 h-6" /> : <Award className="w-6 h-6" />}
                </div>
                
                <div>
                  <h3 className="font-heading font-semibold text-lg mb-2 text-foreground group-hover:text-yellow-500/90 transition-colors">
                    {cert.title}
                  </h3>
                  <div className="text-sm font-medium text-muted-foreground mb-1">
                    {cert.issuer}
                  </div>
                  <div className="text-xs text-muted-foreground/80">
                    {cert.topic}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
