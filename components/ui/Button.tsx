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
    "bg-emerald text-night font-semibold hover:bg-emerald/90 transition-colors shadow-lg shadow-emerald/30",
  secondary:
    "bg-white/10 text-white font-semibold border border-white/20 hover:bg-white/15",
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
