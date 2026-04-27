import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { EDUCATION } from "../utils/constants";

export default function Education() {
  return (
    <section id="education" className="relative px-4 md:px-8 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12 flex-wrap gap-4"
        >
          <div>
            <span className="label text-primary mb-3 block">06 / Education</span>
            <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tight leading-[0.95]">
              Academic <br />
              <span className="text-gradient">journey.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-base leading-relaxed">
            Currently in the final year of my Bachelor's at Graphic Era University, Dehradun.
          </p>
        </motion.div>

        <div className="relative">
          {/* Vertical accent line — desktop only */}
          <div className="hidden md:block absolute left-[88px] top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-highlight opacity-30" />

          <div className="space-y-4 md:space-y-5">
            {EDUCATION.map((e, i) => (
              <motion.div
                key={e.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="md:grid md:grid-cols-[180px_1fr] md:gap-8 items-start relative"
              >
                {/* Year */}
                <div className="flex md:flex-col items-center md:items-end gap-3 md:gap-1 mb-3 md:mb-0">
                  <span className="font-display text-xl md:text-2xl font-bold text-primary mono">
                    {e.period.split("–")[0].trim().split(" ")[0]}
                  </span>
                  <span className="label text-muted-foreground hidden md:block text-right">
                    {e.period.includes("Ongoing") ? "Present" : e.period.split("–")[1]?.trim() || ""}
                  </span>
                  {/* Dot marker */}
                  <span className="hidden md:block absolute left-[81px] top-3 w-4 h-4 rounded-full bg-background border-2 border-primary" style={{ boxShadow: "0 0 12px hsl(var(--primary) / 0.6)" }} />
                </div>

                {/* Card */}
                <div className="bento-card p-6 md:p-7 ml-0 md:ml-6 group hover:bg-surface-2 transition-colors">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="font-display text-2xl md:text-3xl font-bold leading-tight mb-2">
                        {e.degree}
                      </h3>
                      <p className="font-medium text-foreground/80 mb-1">{e.institution}</p>
                      <p className="mono text-xs text-muted-foreground md:hidden">{e.period}</p>
                      {e.relevant && (
                        <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                          <span className="label text-primary mr-2">Coursework</span>
                          {e.relevant}
                        </p>
                      )}
                    </div>
                    <div className="w-11 h-11 rounded-xl bg-primary/10 grid place-items-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                      <GraduationCap className="w-5 h-5" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
