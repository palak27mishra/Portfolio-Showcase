import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { PROJECTS } from "../utils/constants";

const FILTERS = ["All", "Frontend", "ML/AI", "Tools"];

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filtered = PROJECTS.filter((p) =>
    filter === "All" ? true : p.category.includes(filter)
  );

  return (
    <section id="projects" className="relative px-4 md:px-8 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12 flex-wrap gap-6"
        >
          <div>
            <span className="label text-primary mb-3 block">04 / Selected work</span>
            <h2 className="font-display font-bold text-5xl md:text-7xl tracking-tight leading-[0.95]">
              Things I've <br />
              <span className="text-gradient">built.</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 bg-surface/60 border border-border rounded-full p-1.5">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  filter === f
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
                data-cursor="hover"
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-12 gap-4 md:gap-5"
          >
            {filtered.map((p, i) => {
              const isFeatured = i === 0;
              return (
                <motion.article
                  key={p.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className={`group bento-card bento-card-lift relative overflow-hidden ${
                    isFeatured
                      ? "col-span-12 md:col-span-8 min-h-[440px]"
                      : "col-span-12 sm:col-span-6 md:col-span-4 min-h-[340px]"
                  }`}
                >
                  {/* Color wash */}
                  <div
                    className="absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity"
                    style={{
                      background: `radial-gradient(circle at 30% 20%, ${p.color}55, transparent 55%), radial-gradient(circle at 80% 90%, ${p.color}30, transparent 50%)`,
                    }}
                  />
                  <div className="absolute inset-0 dot-grid opacity-30" />

                  <div className="relative z-10 p-7 md:p-8 h-full flex flex-col">
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <span
                          className="w-2 h-2 rounded-full"
                          style={{ backgroundColor: p.color, boxShadow: `0 0 12px ${p.color}` }}
                        />
                        <span className="label text-muted-foreground">{p.category}</span>
                      </div>
                      {p.badge && (
                        <span
                          className="mono text-[11px] px-2.5 py-1 rounded-full border"
                          style={{ color: p.color, borderColor: `${p.color}55`, backgroundColor: `${p.color}15` }}
                        >
                          {p.badge}
                        </span>
                      )}
                    </div>

                    <div className="mt-auto">
                      <h3
                        className={`font-display font-bold tracking-tight leading-tight mb-3 ${
                          isFeatured ? "text-3xl md:text-5xl" : "text-2xl md:text-3xl"
                        }`}
                      >
                        {p.title}
                      </h3>
                      <p className={`text-muted-foreground leading-relaxed ${isFeatured ? "text-base" : "text-sm"} ${isFeatured ? "" : "line-clamp-2"} mb-5 max-w-prose`}>
                        {p.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {p.tags.slice(0, isFeatured ? 5 : 3).map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-full bg-background/40 border border-border mono text-[10px] text-muted-foreground"
                          >
                            {t}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex gap-4">
                          {p.links.live && (
                            <a
                              href={p.links.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm font-medium hover:text-primary transition-colors"
                              data-cursor="hover"
                            >
                              Live <ArrowUpRight className="w-3.5 h-3.5" />
                            </a>
                          )}
                          {p.links.github && (
                            <a
                              href={p.links.github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                              data-cursor="hover"
                            >
                              <Github className="w-3.5 h-3.5" /> Code
                            </a>
                          )}
                        </div>
                        <div className="w-9 h-9 rounded-full bg-foreground/10 grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                          <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
