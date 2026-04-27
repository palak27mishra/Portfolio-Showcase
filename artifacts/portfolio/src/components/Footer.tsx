import { Heart, ArrowUp } from "lucide-react";
import { PERSONAL_INFO } from "../utils/constants";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-border bg-background/80 backdrop-blur-md relative z-10 pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 mb-12">
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-heading font-bold text-gradient mb-2">Neelima Mishra</h2>
            <p className="text-muted-foreground max-w-sm">
              {PERSONAL_INFO.tagline}
            </p>
          </div>
          
          <div className="flex flex-col items-center md:items-end gap-4">
            <p className="font-heading font-semibold text-foreground">Quick Links</p>
            <nav className="flex flex-wrap justify-center md:justify-end gap-4">
              {["about", "skills", "projects", "certifications", "education", "contact"].map((link) => (
                <a 
                  key={link} 
                  href={`#${link}`}
                  className="text-sm text-muted-foreground hover:text-primary capitalize transition-colors"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-border/50 text-sm text-muted-foreground">
          <p className="flex items-center gap-1.5">
            Designed & Developed with care by Neelima Mishra <Heart className="w-4 h-4 text-highlight inline fill-highlight/20" />
          </p>
          <p>
            Built with React, Three.js, Tailwind CSS
          </p>
        </div>
      </div>

      <button
        onClick={scrollToTop}
        className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-card border border-border flex items-center justify-center text-foreground hover:text-primary hover:border-primary shadow-lg transition-all group"
        aria-label="Back to top"
      >
        <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
      </button>
    </footer>
  );
}
