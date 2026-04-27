import { useState, useRef } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { PROJECTS } from "../utils/constants";
import { ExternalLink, Github } from "lucide-react";

function ProjectCard({ project }: { project: any }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 150, damping: 15 });
  const mouseYSpring = useSpring(y, { stiffness: 150, damping: 15 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7.5deg", "-7.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7.5deg", "7.5deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;
    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;
    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3 }}
      className="perspective-1000 h-full"
    >
      <motion.div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        className="relative w-full h-full glass-card rounded-2xl overflow-hidden group hover:border-[var(--hover-color)] transition-colors duration-500 flex flex-col"
        style={{ "--hover-color": project.color } as any}
      >
        {/* Top Accent Bar */}
        <div className="h-1 w-full" style={{ backgroundColor: project.color }} />
        
        <div className="p-8 flex-grow flex flex-col" style={{ transform: "translateZ(30px)" }}>
          <div className="flex justify-between items-start mb-4">
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-background/50 border border-border" style={{ color: project.color }}>
              {project.category}
            </span>
            {project.badge && (
              <span className="text-xs font-semibold px-3 py-1 rounded-full bg-background/80 border border-border text-foreground">
                {project.badge}
              </span>
            )}
          </div>

          <h3 className="text-2xl font-heading font-bold mb-3 group-hover:text-[var(--hover-color)] transition-colors">
            {project.title}
          </h3>
          
          <p className="text-muted-foreground mb-6 flex-grow">
            {project.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-8">
            {project.tags.map((tag: string, i: number) => (
              <span key={i} className="text-xs font-medium px-2 py-1 bg-muted/50 rounded-md text-muted-foreground">
                {tag}
              </span>
            ))}
          </div>

          <div className="flex items-center gap-4 mt-auto">
            {project.links.github && (
              <a 
                href={project.links.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium hover:text-[var(--hover-color)] transition-colors"
              >
                <Github className="w-4 h-4" /> Code
              </a>
            )}
            {project.links.live && (
              <a 
                href={project.links.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium hover:text-[var(--hover-color)] transition-colors"
              >
                <ExternalLink className="w-4 h-4" /> Live Demo
              </a>
            )}
          </div>
        </div>

        {/* Hover Glow Effect */}
        <div 
          className="absolute inset-0 z-[-1] opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
          style={{ background: `radial-gradient(circle at 50% 0%, ${project.color}, transparent 70%)` }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function Projects() {
  const [filter, setFilter] = useState("All");
  const filters = ["All", "Frontend", "ML/AI", "Tools"];

  const filteredProjects = PROJECTS.filter(project => {
    if (filter === "All") return true;
    if (project.category.includes("&")) {
      return project.category.includes(filter);
    }
    return project.category === filter;
  });

  return (
    <section id="projects" className="py-24 relative z-10">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">Things I've <span className="text-gradient">Built</span></h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-10" />
          
          <div className="flex flex-wrap justify-center gap-2 md:gap-4">
            {filters.map(f => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  filter === f 
                    ? "bg-primary text-primary-foreground shadow-[0_0_15px_rgba(167,139,250,0.4)]" 
                    : "glass-card text-muted-foreground hover:text-foreground hover:border-primary/50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map(project => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
