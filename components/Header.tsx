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
  { href: "#partners", label: "Партнёрам" },
  { href: "#contacts", label: "Контакты" }
];

export function Header() {
  const [open, setOpen] = useState(false);

  const handleCtaClick = () => {
    document.getElementById("contacts")?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center">
      <motion.div
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="pointer-events-auto mx-auto mt-6 w-[92%] max-w-6xl rounded-full border border-white/10 bg-night/70 px-6 py-4 backdrop-blur-2xl shadow-[0_20px_60px_-30px_rgba(15,24,45,0.8)]"
      >
        <nav className="flex items-center justify-between gap-6">
          <Link href="#top" className="flex items-center gap-3 font-semibold text-white">
            <Image src="/logo.svg" alt="Flora Home" width={36} height={36} className="h-9 w-9" />
            <span className="text-lg md:text-xl">Flora Home</span>
          </Link>
          <div className="hidden items-center gap-8 text-sm text-white/70 lg:flex">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} className="transition hover:text-white">
                {item.label}
              </a>
            ))}
          </div>
          <div className="hidden lg:block">
            <Button size="md" onClick={handleCtaClick}>
              Оставить заявку
            </Button>
          </div>
          <button
            className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 p-2 text-white lg:hidden"
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
              className="mt-4 space-y-4 text-sm text-white/80 lg:hidden"
            >
              <div className="flex flex-col gap-3">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} className="rounded-xl bg-white/5 px-4 py-3" onClick={() => setOpen(false)}>
                    {item.label}
                  </a>
                ))}
              </div>
              <Button className="w-full" size="md" onClick={handleCtaClick}>
                Оставить заявку
              </Button>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </motion.div>
    </header>
  );
}
