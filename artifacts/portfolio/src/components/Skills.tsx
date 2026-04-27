import { motion } from "framer-motion";
import { SKILLS } from "../utils/constants";

function SkillCard({ name, Icon, delay }: { name: string, Icon: any, delay: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay * 0.05 }}
      whileHover={{ y: -5 }}
      className="glass-card p-4 rounded-xl flex items-center gap-3 hover:border-primary/50 hover:shadow-[0_0_15px_rgba(167,139,250,0.2)] transition-all group"
    >
      <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:text-accent transition-colors">
        <Icon className="w-5 h-5" />
      </div>
      <span className="font-medium text-sm md:text-base group-hover:text-primary transition-colors">{name}</span>
    </motion.div>
  );
}

function Marquee({ items, reverse = false }: { items: string[], reverse?: boolean }) {
  return (
    <div className="w-full overflow-hidden flex relative mask-edges py-2">
      <div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-background to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-background to-transparent z-10" />
      <motion.div
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="flex whitespace-nowrap gap-8 pr-8"
      >
        {[...items, ...items, ...items].map((item, i) => (
          <span key={i} className="text-xl md:text-3xl font-heading font-bold text-muted-foreground/30 hover:text-primary/50 transition-colors uppercase tracking-widest">
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function Skills() {
  const allSkillNames = Object.values(SKILLS).flatMap(cat => cat.map(s => s.name));
  const half = Math.ceil(allSkillNames.length / 2);
  const row1 = allSkillNames.slice(0, half);
  const row2 = allSkillNames.slice(half);

  return (
    <section id="skills" className="py-24 relative z-10 bg-background/50">
      <div className="container mx-auto px-6 md:px-12 mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">My Tech <span className="text-gradient">Arsenal</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-8" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Tools, technologies, and concepts I use to bring ideas to life and build intelligent systems.
          </p>
        </motion.div>

        <div className="space-y-16">
          <div>
            <h3 className="text-xl font-heading font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-primary rounded-full" />
              Frontend Web
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {SKILLS.frontend.map((skill, i) => <SkillCard key={i} name={skill.name} Icon={skill.icon} delay={i} />)}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-heading font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-accent rounded-full" />
              Data Science & AI/ML
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...SKILLS.dataScience, ...SKILLS.aiConcepts].map((skill, i) => <SkillCard key={i} name={skill.name} Icon={skill.icon} delay={i} />)}
            </div>
          </div>

          <div>
            <h3 className="text-xl font-heading font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-[2px] bg-highlight rounded-full" />
              Programming & Tools
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {[...SKILLS.programming, ...SKILLS.tools].map((skill, i) => <SkillCard key={i} name={skill.name} Icon={skill.icon} delay={i} />)}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full pt-10 pb-10 flex flex-col gap-4 overflow-hidden border-y border-border/50 bg-card/30">
        <Marquee items={row1} />
        <Marquee items={row2} reverse />
      </div>
    </section>
  );
}
