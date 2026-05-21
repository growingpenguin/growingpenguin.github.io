import { motion } from "motion/react";

interface DecorativeShapeProps {
  type: "circle" | "square" | "star" | "heart";
  color?: string;
  size?: number;
  className?: string;
}

export function DecorativeShape({
  type,
  color = "var(--accent)",
  size = 40,
  className = "",
}: DecorativeShapeProps) {
  const renderShape = () => {
    switch (type) {
      case "circle":
        return (
          <circle
            cx={size / 2}
            cy={size / 2}
            r={size / 3}
            fill="none"
            stroke={color}
            strokeWidth="2"
          />
        );

      case "square":
        return (
          <rect
            x={size / 6}
            y={size / 6}
            width={size * 0.66}
            height={size * 0.66}
            fill="none"
            stroke={color}
            strokeWidth="2"
            rx="4"
          />
        );

      case "star":
        return (
          <path
            d={`M ${size / 2} ${size / 6} L ${size * 0.6} ${size * 0.4} L ${
              size * 0.8
            } ${size * 0.45} L ${size * 0.65} ${size * 0.65} L ${size * 0.7} ${
              size * 0.85
            } L ${size / 2} ${size * 0.75} L ${size * 0.3} ${size * 0.85} L ${
              size * 0.35
            } ${size * 0.65} L ${size * 0.2} ${size * 0.45} L ${size * 0.4} ${
              size * 0.4
            } Z`}
            fill={color}
            opacity="0.2"
          />
        );

      case "heart":
        return (
          <path
            d={`M ${size / 2} ${size * 0.8} C ${size / 2} ${size * 0.8} ${
              size * 0.2
            } ${size * 0.5} ${size * 0.2} ${size * 0.3} C ${size * 0.2} ${
              size * 0.15
            } ${size * 0.35} ${size * 0.1} ${size / 2} ${size * 0.25} C ${
              size * 0.65
            } ${size * 0.1} ${size * 0.8} ${size * 0.15} ${size * 0.8} ${
              size * 0.3
            } C ${size * 0.8} ${size * 0.5} ${size / 2} ${size * 0.8} ${
              size / 2
            } ${size * 0.8} Z`}
            fill={color}
            opacity="0.3"
          />
        );
    }
  };

  return (
    <motion.svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      className={className}
      animate={{
        rotate: [0, 360],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {renderShape()}
    </motion.svg>
  );
}
