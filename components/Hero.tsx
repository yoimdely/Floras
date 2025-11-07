"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-32" id="top">
      <div className="pointer-events-none absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-40"
          autoPlay
          loop
          muted
          playsInline
          poster="https://images.unsplash.com/photo-1505739885996-2c89bb5d2383?auto=format&fit=crop&w=1920&q=80"
        >
          <source src="https://cdn.coverr.co/videos/coverr-dancing-waves-5850/1080p.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-night/80 via-night/85 to-night" />
        <motion.div
          className="absolute left-[10%] top-1/4 h-64 w-64 rounded-full bg-emerald/25 blur-[120px]"
          animate={{ opacity: [0.45, 0.7, 0.45], scale: [1, 1.1, 1] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.div
          className="absolute right-[12%] top-[15%] h-72 w-72 rounded-full bg-cyan-400/25 blur-[140px]"
          animate={{ opacity: [0.35, 0.6, 0.35], scale: [1, 1.05, 1] }}
          transition={{ duration: 9, repeat: Infinity, repeatType: "mirror", delay: 1 }}
        />
      </div>
      <div className="container-inner relative z-10 grid gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/10 px-5 py-2 text-sm text-white/80"
          >
            <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-emerald to-cyan-300" />
            Доверительное управление недвижимостью в Сочи
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="max-w-3xl text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Сдадим вашу квартиру в Сочи за 5 дней — под ключ
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="max-w-2xl text-lg text-white/70"
          >
            Комиссия 30 %, но чистый доход выше за счёт динамического прайсинга и премиального сервиса.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3 }}
            className="flex flex-wrap items-center gap-4"
          >
            <Button size="lg" onClick={() => document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" })}>
              Рассчитать доход
            </Button>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => document.getElementById("process")?.scrollIntoView({ behavior: "smooth" })}
            >
              Как мы работаем
            </Button>
          </motion.div>
          <motion.dl
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4 }}
            className="grid max-w-2xl grid-cols-2 gap-6 text-sm text-white/70 sm:text-base"
          >
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <dt className="text-sm uppercase tracking-[0.25em] text-white/50">Комиссия</dt>
              <dd className="mt-2 text-2xl font-semibold text-white">30 %</dd>
            </div>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <dt className="text-sm uppercase tracking-[0.25em] text-white/50">Запуск</dt>
              <dd className="mt-2 text-2xl font-semibold text-white">5 дней</dd>
            </div>
          </motion.dl>
        </div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="glass-panel hidden h-full flex-col gap-6 rounded-3xl p-8 text-white/80 lg:flex"
        >
          <div className="text-sm uppercase tracking-[0.3em] text-emerald">Flora Home</div>
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold text-white">«Доверительное управление недвижимостью в Сочи»</h3>
            <p>
              Премиальный сервис для апартаментов, квартир и домов под ключ. Мы отвечаем за стратегию, гостей и операционку, вы —
              получаете прозрачный доход.
            </p>
          </div>
          <ul className="grid gap-3 text-sm text-white/70">
            <li>• Динамическое ценообразование по событиям города</li>
            <li>• Фото, листинги, клининг, техническая команда</li>
            <li>• Инвест-аналитика и регулярные апдейты</li>
          </ul>
          <div className="rounded-2xl border border-emerald/30 bg-emerald/10 p-4 text-sm text-emerald/90">
            24/7 команда в Сочи, Адлере и Красной Поляне
          </div>
        </motion.div>
      </div>
    </section>
  );
}
