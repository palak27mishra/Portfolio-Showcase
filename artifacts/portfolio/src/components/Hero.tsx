import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Download, Sparkles, MapPin } from "lucide-react";
import { PERSONAL_INFO } from "../utils/constants";

function Typewriter({ words, interval = 2200 }: { words: string[]; interval?: number }) {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % words.length), interval);
    return () => clearInterval(t);
  }, [words.length, interval]);
  return (
    <span className="relative inline-flex h-[1.2em] overflow-hidden align-middle">
      {words.map((w, idx) => (
        <motion.span
          key={w}
          initial={false}
          animate={{ y: idx === i ? "0%" : idx < i ? "-110%" : "110%", opacity: idx === i ? 1 : 0 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className={`${idx === i ? "relative" : "absolute inset-0"} text-primary whitespace-nowrap`}
        >
          {w}
        </motion.span>
      ))}
    </span>
  );
}

export default function Hero() {
  return (
    <section id="hero" className="relative pt-28 md:pt-32 pb-16 px-4 md:px-8">
      <div className="mx-auto max-w-6xl">
        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 pill mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            <span className="mono text-xs">Available for opportunities · 2026</span>
          </div>

          <h1 className="font-display font-bold tracking-[-0.04em] leading-[0.92] text-[14vw] md:text-[7.5rem] lg:text-[9rem]">
            Neelima
            <br />
            <span className="text-gradient">Mishra.</span>
          </h1>

          <p className="font-display text-2xl md:text-4xl mt-6 text-foreground/90 max-w-3xl leading-tight">
            I build <Typewriter words={["beautiful interfaces", "intelligent systems", "delightful products", "data stories"]} />
          </p>
        </motion.div>

        {/* Bento grid */}
        <div className="grid grid-cols-12 gap-4 md:gap-5 mt-10">
          {/* Intro card — large */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="col-span-12 md:col-span-7 bento-card bento-card-lift p-7 md:p-9 flex flex-col justify-between min-h-[280px]"
          >
            <div className="flex items-center justify-between mb-6">
              <span className="label text-muted-foreground">About</span>
              <Sparkles className="w-4 h-4 text-primary" />
            </div>
            <p className="font-display text-xl md:text-3xl leading-tight text-foreground/90">
              Frontend developer & AI/ML enthusiast pursuing a <span className="text-primary">BCA</span> at Graphic Era University. I love crafting <span className="text-accent">responsive interfaces</span> and building <span className="text-highlight">intelligent ML models</span>.
            </p>
            <div className="flex flex-wrap gap-3 mt-8">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors"
                data-cursor="hover"
              >
                <span>See my work</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
              </a>
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold border border-border hover:border-foreground/40 transition-colors"
                data-cursor="hover"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>

          {/* Avatar / vibe card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="col-span-6 md:col-span-5 bento-card bento-card-lift relative overflow-hidden p-7 min-h-[280px]"
          >
            <div className="absolute inset-0 mesh-bg opacity-90" />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="label text-muted-foreground">Greeting</span>
                <span className="mono text-xs text-muted-foreground">/ 01</span>
              </div>
              <div>
                <p className="font-display text-7xl md:text-8xl font-bold leading-none">
                  Hi<span className="text-primary">.</span>
                </p>
                <p className="font-display text-xl mt-3 text-foreground/80">
                  I'm <span className="font-bold">Neelima</span> — based in Dehradun, IN.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats: projects + ML score */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="col-span-6 md:col-span-3 bento-card bento-card-lift p-6 flex flex-col justify-between min-h-[180px]"
          >
            <span className="label text-muted-foreground">Projects shipped</span>
            <p className="font-display text-7xl md:text-8xl font-bold leading-none text-primary">
              5<span className="text-foreground">+</span>
            </p>
            <span className="text-sm text-muted-foreground">across web & ML</span>
          </motion.div>

          {/* Featured ML stat */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="col-span-6 md:col-span-4 bento-card bento-card-lift p-6 flex flex-col justify-between min-h-[180px] relative overflow-hidden"
          >
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-full bg-accent/10 blur-2xl" />
            <span className="label text-muted-foreground">House Price ML model</span>
            <p className="font-display text-5xl md:text-6xl font-bold leading-none">
              R² <span className="text-accent">0.87</span>
            </p>
            <span className="text-sm text-muted-foreground">Linear · Ridge · Random Forest</span>
          </motion.div>

          {/* Location card */}
          <motion.a
            href="#contact"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
            className="col-span-12 md:col-span-5 bento-card bento-card-lift p-6 flex items-center justify-between gap-4 min-h-[180px] group"
            data-cursor="hover"
          >
            <div>
              <div className="flex items-center gap-2 mb-2">
                <MapPin className="w-3.5 h-3.5 text-highlight" />
                <span className="label text-muted-foreground">Currently</span>
              </div>
              <p className="font-display text-2xl md:text-3xl font-semibold leading-tight">
                Open to internships, freelance & full-time roles.
              </p>
              <p className="text-sm text-muted-foreground mt-2">{PERSONAL_INFO.email}</p>
            </div>
            <div className="w-12 h-12 rounded-full bg-foreground text-background grid place-items-center flex-shrink-0 group-hover:bg-primary transition-colors">
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:rotate-45" />
            </div>
          </motion.a>
        </div>
      </div>
    </section>
  );
}
