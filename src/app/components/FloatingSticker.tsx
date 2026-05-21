import { motion } from "motion/react";
import { useState } from "react";

interface FloatingStickerProps {
  emoji: string;
  initialX: string;
  initialY: string;
  duration?: number;
  canWink?: boolean;
}

export function FloatingSticker({
  emoji,
  initialX,
  initialY,
  duration = 4,
  canWink = false,
}: FloatingStickerProps) {
  const [isWinking, setIsWinking] = useState(false);

  const handleClick = () => {
    if (canWink) {
      setIsWinking(true);
      setTimeout(() => setIsWinking(false), 800);
    }
  };

  return (
    <motion.div
      className={`absolute text-5xl z-0 pointer-events-none ${canWink ? "cursor-pointer pointer-events-auto" : ""}`}
      style={{ left: initialX, top: initialY }}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 5, -5, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      onClick={handleClick}
      whileHover={canWink ? { scale: 1.2 } : {}}
    >
      {isWinking && canWink ? "😉" : emoji}
    </motion.div>
  );
}
