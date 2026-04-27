import { useEffect, useRef, useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";
import { PERSONAL_INFO } from "../utils/constants";
import { Download, ChevronDown } from "lucide-react";

function ParticleNetwork() {
  const ref = useRef<THREE.Points>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia("(max-width: 768px)").matches);
  }, []);

  const particleCount = isMobile ? 800 : 1500;

  const positions = useMemo(() => {
    const p = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      p[i * 3] = (Math.random() - 0.5) * 10;
      p[i * 3 + 1] = (Math.random() - 0.5) * 10;
      p[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return p;
  }, [particleCount]);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.05;
    ref.current.rotation.y = state.clock.elapsedTime * 0.05;
    
    if (!isMobile) {
      ref.current.position.x = THREE.MathUtils.lerp(ref.current.position.x, (state.mouse.x * 0.5), 0.05);
      ref.current.position.y = THREE.MathUtils.lerp(ref.current.position.y, (state.mouse.y * 0.5), 0.05);
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#A78BFA"
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
}

function MagneticButton({ children, className, href, download }: { children: React.ReactNode, className?: string, href: string, download?: boolean }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => setPosition({ x: 0, y: 0 });

  return (
    <motion.a
      ref={ref}
      href={href}
      download={download}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

function TypewriterEffect({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !reverse) {
      setTimeout(() => setReverse(true), 2000);
      return;
    }
    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => (prev + 1) % words.length);
      return;
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 50 : 100, Math.random() * 150));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words]);

  return (
    <span className="inline-block min-w-[20px]">
      {words[index].substring(0, subIndex)}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export default function Hero() {
  const nameVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.05, duration: 0.5, ease: "easeOut" }
    })
  };

  const [webglOk, setWebglOk] = useState(true);
  useEffect(() => {
    try {
      const c = document.createElement("canvas");
      const gl = c.getContext("webgl2") || c.getContext("webgl");
      setWebglOk(!!gl);
    } catch {
      setWebglOk(false);
    }
  }, []);

  return (
    <section id="hero" className="relative w-full h-[100dvh] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0 pointer-events-none">
        {webglOk ? (
          <Canvas
            camera={{ position: [0, 0, 5] }}
            onCreated={({ gl }) => {
              gl.domElement.addEventListener("webglcontextlost", (e) => e.preventDefault());
            }}
          >
            <ParticleNetwork />
          </Canvas>
        ) : (
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(167,139,250,0.25),transparent_60%),radial-gradient(circle_at_70%_60%,rgba(34,211,238,0.18),transparent_60%)]" />
        )}
      </div>

      <div className="container relative z-10 mx-auto px-6 md:px-12 flex flex-col items-start justify-center pt-20">
        <motion.span 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-accent font-mono mb-4 inline-block tracking-wider"
        >
          Hi, I'm
        </motion.span>
        
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-heading font-bold mb-4 flex flex-wrap">
          {PERSONAL_INFO.name.split("").map((char, i) => (
            <motion.span
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={nameVariants}
              className={char === " " ? "mr-4" : "text-gradient"}
            >
              {char}
            </motion.span>
          ))}
        </h1>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
          className="text-2xl md:text-3xl lg:text-4xl text-muted-foreground font-medium mb-6 h-12"
        >
          <TypewriterEffect words={PERSONAL_INFO.roles} />
        </motion.div>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="max-w-2xl text-lg text-muted-foreground mb-10 leading-relaxed"
        >
          {PERSONAL_INFO.tagline} {PERSONAL_INFO.bio.split(". ")[1]}.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="flex flex-wrap gap-4"
        >
          <MagneticButton 
            href="#projects" 
            className="px-8 py-4 rounded-full bg-primary text-primary-foreground font-semibold text-lg hover:bg-primary/90 transition-colors shadow-[0_0_20px_rgba(167,139,250,0.4)]"
          >
            View My Work
          </MagneticButton>
          
          <MagneticButton 
            href={`${import.meta.env.BASE_URL}resume.pdf`}
            download
            className="px-8 py-4 rounded-full glass-card text-foreground font-semibold text-lg flex items-center gap-2 hover:border-primary hover:text-primary transition-all glow-hover"
          >
            <Download className="w-5 h-5" />
            Download Resume
          </MagneticButton>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 pointer-events-none"
      >
        <span className="text-xs text-muted-foreground tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-5 h-5 text-accent" />
        </motion.div>
      </motion.div>
    </section>
  );
}
