import { motion } from "framer-motion";
import { Award, ArrowUpRight } from "lucide-react";
import { CERTIFICATIONS } from "../utils/constants";

const ACCENTS: { glow: string; bg: string; text: string; hoverText: string }[] = [
  { glow: "bg-primary/40", bg: "bg-primary/15", text: "text-primary", hoverText: "group-hover:text-primary" },
  { glow: "bg-accent/40", bg: "bg-accent/15", text: "text-accent", hoverText: "group-hover:text-accent" },
  { glow: "bg-highlight/40", bg: "bg-highlight/15", text: "text-highlight", hoverText: "group-hover:text-highlight" },
  { glow: "bg-secondary/40", bg: "bg-secondary/15", text: "text-secondary", hoverText: "group-hover:text-secondary" },
  { glow: "bg-warm/40", bg: "bg-warm/15", text: "text-warm", hoverText: "group-hover:text-warm" },
];

export default function Certifications() {
  return (
    <section id="certifications" className="relative px-4 md:px-8 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12 flex-wrap gap-4"
        >
          <div>
            <span className="label text-primary mb-3 block">05 / Credentials</span>
            <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tight leading-[0.95]">
              Industry <br />
              <span className="text-gradient-warm">simulations.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-base leading-relaxed">
            Hands-on virtual experience programs from Forage — practicing real workflows in cloud, security, analytics, software & design.
          </p>
        </motion.div>

        <div className="grid grid-cols-12 gap-4 md:gap-5">
          {CERTIFICATIONS.map((c, i) => {
            const accent = ACCENTS[i % ACCENTS.length];
            return (
              <motion.div
                key={c.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="col-span-12 md:col-span-6 lg:col-span-4 bento-card bento-card-lift p-6 group relative overflow-hidden min-h-[220px]"
              >
                <div className={`absolute -top-10 -right-10 w-28 h-28 rounded-full blur-2xl opacity-40 group-hover:opacity-70 transition-opacity ${accent.glow}`} />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="flex items-start justify-between">
                    <div className={`w-11 h-11 rounded-xl ${accent.bg} grid place-items-center ${accent.text}`}>
                      <Award className="w-5 h-5" />
                    </div>
                    <span className="mono text-xs text-muted-foreground tabular-nums">
                      {String(i + 1).padStart(2, "0")} / {CERTIFICATIONS.length}
                    </span>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold leading-snug mb-2">
                      {c.title}
                    </h3>
                    <div className="flex items-center justify-between mt-3">
                      <p className={`text-sm font-medium ${accent.text}`}>{c.issuer}</p>
                      <ArrowUpRight className={`w-4 h-4 text-muted-foreground ${accent.hoverText} group-hover:rotate-45 transition-all`} />
                    </div>
                    <p className="text-xs text-muted-foreground mt-3 leading-relaxed">{c.topic}</p>
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
