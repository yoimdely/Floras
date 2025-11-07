"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Sparkles, Timer, TrendingUp, ScrollText, Layers } from "lucide-react";
import { Card } from "@/components/ui/Card";

const benefits = [
  {
    title: "Больше дохода",
    description: "Динамическое ценообразование с учётом событий и спроса",
    icon: TrendingUp
  },
  {
    title: "Премиальный сервис",
    description: "Профессиональная фотосессия, листинги и клининг",
    icon: Sparkles
  },
  {
    title: "Запуск за 5 дней",
    description: "Формируем стратегию, подключаем каналы и первые брони",
    icon: Timer
  },
  {
    title: "Безопасность",
    description: "Депозиты, правила проживания и фотофиксация",
    icon: ShieldCheck
  },
  {
    title: "Прозрачность",
    description: "Еженедельные отчёты и выплаты в один клик",
    icon: ScrollText
  },
  {
    title: "Гарантия дохода",
    description: "Если ниже прогноза — комиссия всего 20 %",
    icon: Layers
  }
];

export function Benefits() {
  return (
    <section id="benefits" className="section">
      <div className="container-inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm uppercase tracking-[0.4em] text-emerald/70">Премиальная экспертиза</span>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Почему владельцы выбирают <span className="gradient-text">Flora Home</span>
          </h2>
          <p className="mt-4 text-base text-white/70">
            Соединяем аналитику, сервис и тёплую коммуникацию. Владельцы получают максимальный доход и полный покой.
          </p>
        </motion.div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card
              key={benefit.title}
              delay={0.05 * index}
              className="h-full space-y-4 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-emerald/40 to-cyan-400/30 text-white">
                <benefit.icon className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-white">{benefit.title}</h3>
              <p className="text-sm text-white/70">{benefit.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
