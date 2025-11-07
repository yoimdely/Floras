"use client";

import { cn } from "@/lib/cn";
import { motion } from "framer-motion";
import type { PropsWithChildren } from "react";

interface CardProps {
  className?: string;
  delay?: number;
}

export function Card({ className, children, delay = 0 }: PropsWithChildren<CardProps>) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={cn(
        "glass-panel group relative overflow-hidden rounded-3xl p-6 md:p-8",
        "before:absolute before:inset-[-1px] before:-z-10 before:rounded-[inherit] before:bg-[radial-gradient(circle_at_top,_rgba(88,209,170,0.35),_transparent_65%)]",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
