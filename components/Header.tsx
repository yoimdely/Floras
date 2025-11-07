"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Menu, X } from "lucide-react";

const navItems = [
  { href: "#calculator", label: "Калькулятор" },
  { href: "#benefits", label: "Преимущества" },
  { href: "#process", label: "Как работаем" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacts", label: "Контакты" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mx-auto mt-6 w-[92%] max-w-6xl rounded-full border border-white/10 bg-night/60 px-6 py-4 backdrop-blur-2xl"
      >
        <nav className="flex items-center justify-between gap-6">
          <Link href="#top" className="flex items-center gap-3 font-semibold text-white">
            <Image src="/logo.svg" alt="Flora Home" width={36} height={36} className="h-9 w-9" />
            <span className="text-lg md:text-xl">Flora Home</span>
          </Link>
          <div className="hidden items-center gap-8 text-sm text-white/70 md:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
          <div className="hidden md:block">
            <Button size="md">Оставить заявку</Button>
          </div>
          <button
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white md:hidden"
            onClick={() => setOpen((prev) => !prev)}
            aria-label="Toggle navigation"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
        <AnimatePresence>
          {open ? (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="mt-4 space-y-4 text-sm text-white/80 md:hidden"
            >
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="rounded-xl bg-white/5 px-4 py-3" onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                ))}
              </div>
              <Button className="w-full" size="md">
                Оставить заявку
              </Button>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
