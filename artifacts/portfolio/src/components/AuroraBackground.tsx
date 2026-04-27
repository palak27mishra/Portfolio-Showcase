import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1] bg-background">
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.4, 0.3],
          x: ["0%", "5%", "0%"],
          y: ["0%", "5%", "0%"]
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] rounded-full bg-primary/20 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.3, 0.2],
          x: ["0%", "-5%", "0%"],
          y: ["0%", "-5%", "0%"]
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute top-[40%] -right-[10%] w-[50%] h-[50%] rounded-full bg-accent/20 blur-[120px]"
      />
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.1, 0.2, 0.1],
          x: ["0%", "2%", "0%"],
          y: ["0%", "-2%", "0%"]
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute -bottom-[20%] left-[20%] w-[70%] h-[50%] rounded-full bg-highlight/10 blur-[120px]"
      />
    </div>
  );
}
