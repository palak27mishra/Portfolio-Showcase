import { motion } from "framer-motion";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0 bg-background">
      <div className="absolute inset-0 dot-grid opacity-50" />
      <motion.div
        animate={{
          x: ["-10%", "20%", "-10%"],
          y: ["-10%", "10%", "-10%"],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] w-[55%] h-[55%] rounded-full bg-primary/15 blur-[140px]"
      />
      <motion.div
        animate={{
          x: ["10%", "-15%", "10%"],
          y: ["5%", "-10%", "5%"],
          scale: [1, 1.2, 1],
        }}
        transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[20%] -right-[15%] w-[55%] h-[55%] rounded-full bg-accent/15 blur-[140px]"
      />
      <motion.div
        animate={{
          x: ["-5%", "15%", "-5%"],
          y: ["0%", "10%", "0%"],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-[-20%] left-[15%] w-[60%] h-[50%] rounded-full bg-highlight/12 blur-[140px]"
      />
    </div>
  );
}
