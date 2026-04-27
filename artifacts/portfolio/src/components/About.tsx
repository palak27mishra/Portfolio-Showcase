import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { PERSONAL_INFO, STATS } from "../utils/constants";
import { Map, Feather, Music, PawPrint, Blocks } from "lucide-react";

function Counter({ from, to, suffix, duration = 2 }: { from: number, to: number, suffix: string, duration?: number }) {
  const [count, setCount] = useState(from);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.5 });

  useEffect(() => {
    if (inView) {
      let start = from;
      const increment = (to - from) / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= to) {
          setCount(to);
          clearInterval(timer);
        } else {
          setCount(Math.ceil(start));
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [inView, from, to, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
  const INTERESTS = [
    { label: "Trekking", icon: Map },
    { label: "Poetry & Journaling", icon: Feather },
    { label: "Music", icon: Music },
    { label: "Pets", icon: PawPrint },
    { label: "Building Projects", icon: Blocks },
  ];

  return (
    <section id="about" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">About <span className="text-gradient">Me</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5 relative"
          >
            <div className="relative w-full aspect-square max-w-[400px] mx-auto rounded-full p-2 bg-gradient-to-tr from-primary/50 via-accent/30 to-highlight/50">
              <div className="absolute inset-0 rounded-full animate-spin-slow bg-gradient-to-tr from-primary via-transparent to-accent opacity-50 blur-xl" />
              <img 
                src={`${import.meta.env.BASE_URL}avatar.png`} 
                alt="Neelima Mishra Avatar" 
                className="w-full h-full object-cover rounded-full border-4 border-background relative z-10"
              />
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-4 top-10 z-20 glass-card px-4 py-2 rounded-full shadow-lg shadow-primary/20 border-primary/30 flex items-center gap-2"
              >
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse shadow-[0_0_10px_#22D3EE]" />
                <span className="text-sm font-medium whitespace-nowrap">Open to Opportunities</span>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              {PERSONAL_INFO.bio}
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {["Frontend Dev", "AI/ML", "Data Science", "Python", "Open Source"].map((chip, i) => (
                <span key={i} className="px-4 py-2 rounded-full text-sm font-medium glass-card border-primary/20 text-primary hover:bg-primary/10 transition-colors">
                  {chip}
                </span>
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-10">
              {STATS.map((stat, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <span className="text-3xl md:text-4xl font-heading font-bold text-accent">
                    <Counter from={0} to={stat.value} suffix={stat.suffix} />
                  </span>
                  <span className="text-sm text-muted-foreground font-medium uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>

            <div>
              <h3 className="text-lg font-heading font-semibold mb-4 text-foreground/90">Interests & Hobbies</h3>
              <div className="flex flex-wrap gap-4">
                {INTERESTS.map((interest, i) => (
                  <div key={i} className="flex items-center gap-2 text-muted-foreground hover:text-highlight transition-colors">
                    <interest.icon className="w-5 h-5" />
                    <span>{interest.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
