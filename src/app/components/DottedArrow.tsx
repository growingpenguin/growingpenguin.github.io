import { motion } from "motion/react";

interface DottedArrowProps {
  direction?: "down" | "right" | "left";
  className?: string;
}

export function DottedArrow({ direction = "down", className = "" }: DottedArrowProps) {
  const getPath = () => {
    switch (direction) {
      case "right":
        return "M 10 25 Q 50 25 50 25 L 45 20 M 50 25 L 45 30";
      case "left":
        return "M 50 25 Q 10 25 10 25 L 15 20 M 10 25 L 15 30";
      default: // down
        return "M 25 10 Q 25 50 25 50 L 20 45 M 25 50 L 30 45";
    }
  };

  return (
    <motion.svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <motion.path
        d={getPath()}
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeDasharray="3 3"
        strokeLinecap="round"
        animate={{
          strokeDashoffset: [0, -20],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "linear",
        }}
      />
    </motion.svg>
  );
}
