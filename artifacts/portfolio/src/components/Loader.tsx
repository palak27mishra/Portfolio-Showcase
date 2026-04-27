import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Loader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="relative">
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative z-10 flex items-center justify-center w-24 h-24 rounded-full border-2 border-primary/30 bg-background/50 backdrop-blur-md"
            >
              <span className="text-4xl font-heading font-bold text-transparent bg-clip-text bg-gradient-to-br from-primary to-accent">
                NM
              </span>
            </motion.div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 z-0 rounded-full border-t-2 border-r-2 border-accent opacity-50 blur-sm"
              style={{ width: "120%", height: "120%", top: "-10%", left: "-10%" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
