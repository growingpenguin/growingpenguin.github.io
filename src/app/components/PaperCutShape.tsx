import { motion } from "motion/react";

interface PaperCutShapeProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  color?: string;
}

export function PaperCutShape({ position, color = "#FF6B6B" }: PaperCutShapeProps) {
  const getPosition = () => {
    switch (position) {
      case "top-left":
        return "top-0 left-0";
      case "top-right":
        return "top-0 right-0";
      case "bottom-left":
        return "bottom-0 left-0";
      case "bottom-right":
        return "bottom-0 right-0";
    }
  };

  const getRotation = () => {
    switch (position) {
      case "top-left":
        return 0;
      case "top-right":
        return 90;
      case "bottom-left":
        return 270;
      case "bottom-right":
        return 180;
    }
  };

  return (
    <motion.div
      className={`absolute ${getPosition()} pointer-events-none`}
      style={{ transform: `rotate(${getRotation()}deg)` }}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.15, scale: 1 }}
      transition={{ duration: 1 }}
    >
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none">
        <path
          d="M0 0 Q30 0 30 30 T0 60 Q0 30 0 0"
          fill={color}
          opacity="0.4"
        />
        <circle cx="15" cy="15" r="8" fill={color} opacity="0.3" />
        <circle cx="8" cy="35" r="5" fill={color} opacity="0.3" />
        <circle cx="20" cy="48" r="6" fill={color} opacity="0.3" />
      </svg>
    </motion.div>
  );
}
