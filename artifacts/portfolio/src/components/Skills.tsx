import { motion } from "framer-motion";
import { SKILLS } from "../utils/constants";

const GROUPS: {
  key: keyof typeof SKILLS;
  title: string;
  tag: string;
  glow: string;
  text: string;
  dot: string;
}[] = [
  { key: "frontend", title: "Frontend", tag: "interface", glow: "bg-primary/30", text: "text-primary", dot: "bg-primary" },
  { key: "programming", title: "Languages", tag: "syntax", glow: "bg-accent/30", text: "text-accent", dot: "bg-accent" },
  { key: "dataScience", title: "Data Science", tag: "numbers", glow: "bg-highlight/30", text: "text-highlight", dot: "bg-highlight" },
  { key: "aiConcepts", title: "AI / ML", tag: "models", glow: "bg-secondary/30", text: "text-secondary", dot: "bg-secondary" },
  { key: "tools", title: "Tools", tag: "daily kit", glow: "bg-warm/30", text: "text-warm", dot: "bg-warm" },
];

export default function Skills() {
  return (
    <section id="skills" className="relative px-4 md:px-8 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12 flex-wrap gap-4"
        >
          <div>
            <span className="label text-primary mb-3 block">03 / Skills</span>
            <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tight leading-[0.95]">
              The <span className="text-gradient">tool kit.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-base leading-relaxed">
            What I reach for when shipping interfaces and exploring data.
          </p>
        </motion.div>

        {/* Bento — varying sizes */}
        <div className="grid grid-cols-12 gap-4 md:gap-5">
          {GROUPS.map((g, gi) => {
            const sizeMap = ["md:col-span-7", "md:col-span-5", "md:col-span-4", "md:col-span-4", "md:col-span-4"];
            return (
              <motion.div
                key={g.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: gi * 0.06 }}
                className={`col-span-12 ${sizeMap[gi]} bento-card bento-card-lift p-7 group relative overflow-hidden min-h-[200px]`}
              >
                <div
                  className={`absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-50 group-hover:opacity-80 transition-opacity ${g.glow}`}
                />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-5">
                    <h3 className="font-display text-2xl md:text-3xl font-bold">
                      {g.title}
                      <span className={g.text}>.</span>
                    </h3>
                    <span className="label text-muted-foreground">{g.tag}</span>
                  </div>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {SKILLS[g.key].map((s) => {
                      const Icon = s.icon;
                      return (
                        <span
                          key={s.name}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-2 border border-border text-sm hover:border-foreground/30 transition-colors"
                          data-cursor="hover"
                        >
                          <Icon className={`w-3.5 h-3.5 ${g.text}`} />
                          {s.name}
                        </span>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Marquee */}
        <div className="mt-10 overflow-hidden border-y border-border py-5">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
            className="flex gap-10 whitespace-nowrap font-display text-3xl md:text-4xl font-bold text-foreground/30"
          >
            {Array.from({ length: 2 }).map((_, k) => (
              <div key={k} className="flex gap-10 items-center">
                <span>typescript</span><span className="text-primary">●</span>
                <span>react</span><span className="text-accent">●</span>
                <span>python</span><span className="text-highlight">●</span>
                <span>scikit-learn</span><span className="text-secondary">●</span>
                <span>tailwind</span><span className="text-warm">●</span>
                <span>numpy</span><span className="text-primary">●</span>
                <span>pandas</span><span className="text-accent">●</span>
                <span>git</span><span className="text-highlight">●</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
