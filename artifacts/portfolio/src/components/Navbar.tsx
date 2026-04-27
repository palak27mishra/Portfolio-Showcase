import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Work", href: "#projects" },
  { name: "Certs", href: "#certifications" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    [...LINKS, { href: "#hero" }].forEach(({ href }) => {
      const el = document.querySelector(href);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 md:px-8 pt-4">
      <div
        className={`mx-auto max-w-6xl flex items-center justify-between gap-4 px-4 md:px-6 py-3 rounded-2xl transition-all duration-300 ${
          isScrolled
            ? "bg-surface/80 backdrop-blur-xl border border-border"
            : "bg-transparent"
        }`}
      >
        <a href="#hero" className="flex items-center gap-2 font-display font-bold text-xl tracking-tight">
          <span className="w-7 h-7 rounded-lg bg-primary text-primary-foreground grid place-items-center text-sm font-extrabold">
            n
          </span>
          <span>
            neelima<span className="text-primary">.</span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-1 bg-surface-2/40 border border-border rounded-full p-1">
          {LINKS.map((link) => {
            const active = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`relative px-4 py-1.5 text-sm font-medium rounded-full transition-colors ${
                  active ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    transition={{ type: "spring", damping: 30, stiffness: 350 }}
                    className="absolute inset-0 bg-primary rounded-full"
                  />
                )}
                <span className="relative z-10">{link.name}</span>
              </a>
            );
          })}
        </nav>

        <a
          href="#contact"
          className="hidden lg:inline-flex items-center gap-2 bg-foreground text-background px-4 py-2 rounded-full text-sm font-semibold hover:bg-primary transition-colors"
          data-cursor="hover"
        >
          Let's talk
          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
        </a>

        <button
          className="lg:hidden p-2 -mr-2"
          onClick={() => setIsOpen(true)}
          aria-label="Open menu"
        >
          <Menu className="w-5 h-5" />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-background/80 backdrop-blur-md z-50 lg:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 28, stiffness: 220 }}
              className="fixed top-0 right-0 bottom-0 w-[300px] bg-surface border-l border-border z-50 flex flex-col p-6 lg:hidden"
            >
              <div className="flex items-center justify-between mb-10">
                <span className="label text-muted-foreground">Menu</span>
                <button onClick={() => setIsOpen(false)} className="p-2 -mr-2" aria-label="Close menu">
                  <X className="w-5 h-5" />
                </button>
              </div>
              <nav className="flex flex-col gap-1">
                {LINKS.map((link) => {
                  const active = activeSection === link.href.substring(1);
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={`flex items-center justify-between py-3 px-4 rounded-xl transition-colors ${
                        active ? "bg-primary text-primary-foreground" : "text-foreground hover:bg-surface-2"
                      }`}
                    >
                      <span className="font-display text-xl font-medium">{link.name}</span>
                      <span className="text-xs opacity-60">↗</span>
                    </a>
                  );
                })}
              </nav>
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-auto inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-xl text-sm font-semibold"
              >
                Let's talk →
              </a>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
