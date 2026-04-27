import { useEffect, useState } from "react";
import { motion, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isTouch, setIsTouch] = useState(false);

  const springConfig = { damping: 25, stiffness: 280, mass: 0.4 };
  const springX = useSpring(-100, springConfig);
  const springY = useSpring(-100, springConfig);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) {
      setIsTouch(true);
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (!isVisible) setIsVisible(true);
      springX.set(e.clientX);
      springY.set(e.clientY);
    };
    const handleOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      setIsHover(!!t.closest("a, button, input, textarea, [data-cursor='hover']"));
    };
    const handleLeave = () => setIsVisible(false);
    const handleEnter = () => setIsVisible(true);

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseleave", handleLeave);
    document.addEventListener("mouseenter", handleEnter);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseleave", handleLeave);
      document.removeEventListener("mouseenter", handleEnter);
    };
  }, [springX, springY, isVisible]);

  if (isTouch) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[999] rounded-full"
      animate={{
        width: isHover ? 44 : 14,
        height: isHover ? 44 : 14,
        opacity: isVisible ? 1 : 0,
      }}
      transition={{ duration: 0.2 }}
      style={{
        x: springX,
        y: springY,
        translateX: "-50%",
        translateY: "-50%",
        backgroundColor: isHover ? "transparent" : "hsl(var(--primary))",
        border: isHover ? "1.5px solid hsl(var(--primary))" : "none",
        boxShadow: "0 0 20px hsl(var(--primary) / 0.5)",
        mixBlendMode: "difference",
      }}
    />
  );
}
