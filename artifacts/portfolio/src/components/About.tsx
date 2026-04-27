import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Code2, BrainCircuit, Sparkles, Quote } from "lucide-react";
import { PERSONAL_INFO, STATS } from "../utils/constants";

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const dur = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setN(Math.round(value * ease));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value]);
  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
}

export default function About() {
  return (
    <section id="about" className="relative px-4 md:px-8 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12 flex-wrap gap-4"
        >
          <div>
            <span className="label text-primary mb-3 block">02 / About</span>
            <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tight leading-[0.95]">
              A bit about <br />
              <span className="text-gradient-warm">me.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-base leading-relaxed">
            Curious by nature, methodical in code, and always chasing the next interesting problem.
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-5">
          {/* Pull quote card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="col-span-12 md:col-span-8 bento-card bento-card-lift p-8 md:p-10 relative overflow-hidden min-h-[300px]"
          >
            <Quote className="absolute top-6 right-6 w-10 h-10 text-primary/20" />
            <span className="label text-muted-foreground">Manifesto</span>
            <p className="font-display text-3xl md:text-5xl leading-[1.1] mt-6 font-medium tracking-tight">
              I believe in <span className="text-primary">clean code</span>, creative <span className="text-accent">UI</span>, and the quiet thrill of getting a model to <span className="text-highlight">make sense</span> of messy data.
            </p>
            <p className="text-base text-muted-foreground mt-6 max-w-2xl leading-relaxed">
              {PERSONAL_INFO.bio}
            </p>
          </motion.div>

          {/* Avatar/initial card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="col-span-12 md:col-span-4 bento-card bento-card-lift relative overflow-hidden min-h-[300px] p-6"
          >
            <div className="absolute inset-0 mesh-bg" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="label text-muted-foreground">Avatar</span>
                <span className="text-xs mono text-muted-foreground">v1.0</span>
              </div>
              <div className="grid place-items-center my-4">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary via-accent to-highlight grid place-items-center text-5xl font-display font-extrabold text-background shadow-2xl">
                  NM
                </div>
              </div>
              <div className="text-center">
                <p className="font-display text-xl font-semibold">Neelima Mishra</p>
                <p className="text-xs text-muted-foreground mt-1 mono">she/her · she codes</p>
              </div>
            </div>
          </motion.div>

          {/* Highlight cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="col-span-6 md:col-span-3 bento-card bento-card-lift p-6 flex flex-col justify-between min-h-[180px]"
          >
            <Code2 className="w-6 h-6 text-primary" />
            <div>
              <p className="font-display text-2xl font-bold leading-tight">Frontend craft</p>
              <p className="text-xs text-muted-foreground mt-1">React · TS · Tailwind</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="col-span-6 md:col-span-3 bento-card bento-card-lift p-6 flex flex-col justify-between min-h-[180px]"
          >
            <BrainCircuit className="w-6 h-6 text-accent" />
            <div>
              <p className="font-display text-2xl font-bold leading-tight">ML & data</p>
              <p className="text-xs text-muted-foreground mt-1">Python · sklearn · pandas</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="col-span-12 md:col-span-6 bento-card bento-card-lift p-6 min-h-[180px] flex flex-col justify-between"
          >
            <div className="flex items-center justify-between">
              <Sparkles className="w-6 h-6 text-highlight" />
              <span className="label text-muted-foreground">By the numbers</span>
            </div>
            <div className="grid grid-cols-4 gap-3">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="font-display text-2xl md:text-3xl font-bold text-primary leading-none">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-[10px] text-muted-foreground mt-1.5 leading-tight">{s.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
