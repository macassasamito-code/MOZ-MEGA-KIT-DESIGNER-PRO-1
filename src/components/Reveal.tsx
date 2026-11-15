import React from "react";
import { motion } from "motion/react";

const EASE_OUT_EXPO: [number, number, number, number] = [0.16, 1, 0.3, 1];

interface RevealProps {
  children: React.ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  immediate?: boolean;
}

/**
 * Componente reutilizável de revelação de entrada com Motion.
 * Anima apenas propriedades compositor-only (opacity e transform/y)
 * e garante activação fiável em ecrãs mobile altos (amount: 0.08).
 */
export const Reveal: React.FC<RevealProps> = ({
  children,
  delay = 0,
  y = 10,
  className = "",
  immediate = false,
}) => {
  if (immediate) {
    return (
      <motion.div
        initial={{ opacity: 0, y }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45, delay, ease: EASE_OUT_EXPO }}
        className={className}
      >
        {children}
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.08 }}
      transition={{ duration: 0.48, delay, ease: EASE_OUT_EXPO }}
      className={className}
    >
      {children}
    </motion.div>
  );
};
