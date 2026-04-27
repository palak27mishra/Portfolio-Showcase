import { ArrowUp, Github, Linkedin, Mail } from "lucide-react";
import { PERSONAL_INFO } from "../utils/constants";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="px-4 md:px-8 pt-12 pb-8">
      <div className="mx-auto max-w-6xl">
        <div className="bento-card p-8 md:p-12 relative overflow-hidden">
          <div className="absolute inset-0 mesh-bg opacity-50" />
          <div className="relative z-10">
            {/* Big sign-off */}
            <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
              <div>
                <p className="label text-muted-foreground mb-3">/ end</p>
                <h3 className="font-display font-bold tracking-tight leading-[0.95] text-4xl md:text-6xl">
                  Thanks for <br />
                  <span className="text-gradient">scrolling.</span>
                </h3>
              </div>
              <a
                href="#hero"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-surface/50 text-sm font-medium hover:border-foreground/30 transition-colors"
                data-cursor="hover"
              >
                <ArrowUp className="w-4 h-4" />
                Back to top
              </a>
            </div>

            {/* Columns */}
            <div className="grid grid-cols-12 gap-6 py-8 border-y border-border">
              <div className="col-span-12 md:col-span-5">
                <p className="font-display text-xl font-bold flex items-center gap-2 mb-2">
                  <span className="w-7 h-7 rounded-lg bg-primary text-primary-foreground grid place-items-center text-sm font-extrabold">
                    n
                  </span>
                  neelima<span className="text-primary">.</span>
                </p>
                <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
                  Frontend developer & AI/ML enthusiast — based in Dehradun, India. Always open to a good conversation.
                </p>
              </div>

              <div className="col-span-6 md:col-span-3">
                <p className="label text-muted-foreground mb-3">Sitemap</p>
                <ul className="space-y-1.5 text-sm">
                  <li><a href="#about" className="hover:text-primary transition-colors">About</a></li>
                  <li><a href="#skills" className="hover:text-primary transition-colors">Skills</a></li>
                  <li><a href="#projects" className="hover:text-primary transition-colors">Work</a></li>
                  <li><a href="#certifications" className="hover:text-primary transition-colors">Certs</a></li>
                  <li><a href="#contact" className="hover:text-primary transition-colors">Contact</a></li>
                </ul>
              </div>

              <div className="col-span-6 md:col-span-4">
                <p className="label text-muted-foreground mb-3">Find me</p>
                <ul className="space-y-1.5 text-sm">
                  <li>
                    <a href={PERSONAL_INFO.socials.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                      <Github className="w-3.5 h-3.5" /> GitHub
                    </a>
                  </li>
                  <li>
                    <a href={PERSONAL_INFO.socials.linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                      <Linkedin className="w-3.5 h-3.5" /> LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href={`mailto:${PERSONAL_INFO.email}`} className="inline-flex items-center gap-2 hover:text-primary transition-colors">
                      <Mail className="w-3.5 h-3.5" /> {PERSONAL_INFO.email}
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom strip */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-6 label text-muted-foreground">
              <span>© {year} Neelima Mishra · Built with React, Vite & Tailwind</span>
              <span>v2.0 · 2026</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
