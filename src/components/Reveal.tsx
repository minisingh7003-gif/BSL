import { motion, type HTMLMotionProps, useInView } from "framer-motion";
import { useRef } from "react";

interface RevealProps extends HTMLMotionProps<"div"> {
  delay?: number;
  duration?: number;
  direction?: "up" | "left" | "right" | "scale";
}

export default function Reveal({ children, delay = 0, duration = 0.75, direction = "up", className, ...props }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const offsets = {
    up: { y: 36, x: 0 },
    left: { y: 0, x: -36 },
    right: { y: 0, x: 36 },
    scale: { y: 0, x: 0 },
  };
  const offset = offsets[direction];

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: offset.x, y: offset.y, scale: direction === "scale" ? 0.94 : 1 }}
      animate={isInView ? { opacity: 1, x: 0, y: 0, scale: 1 } : undefined}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
