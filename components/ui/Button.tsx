"use client";

import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import type { ButtonHTMLAttributes, PropsWithChildren } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
}

const variants = {
  primary:
    "relative overflow-hidden bg-gradient-to-r from-emerald via-emerald/80 to-cyan-300 text-night font-semibold transition-[filter,transform] shadow-[0_20px_45px_-20px_rgba(48,208,134,0.7)] hover:brightness-110",
  secondary:
    "border border-white/20 bg-white/10 text-white font-semibold hover:bg-white/15 hover:border-white/30",
  ghost: "text-white/80 hover:text-white"
};

const sizes = {
  md: "px-5 py-2.5 text-sm md:text-base rounded-xl",
  lg: "px-6 py-3 text-base md:text-lg rounded-2xl"
};

export function Button({
  className,
  children,
  variant = "primary",
  size = "md",
  ...props
}: PropsWithChildren<ButtonProps>) {
  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn("inline-flex items-center justify-center gap-2", variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </motion.button>
  );
}
