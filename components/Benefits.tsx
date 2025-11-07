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
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold text-white sm:text-4xl"
        >
          Почему владельцы выбирают Flora Home
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mx-auto mt-4 max-w-3xl text-center text-base text-white/70"
        >
          Соединяем премиальный сервис, точную аналитику и тёплую коммуникацию. Владельцы получают максимальный доход и полный покой.
        </motion.p>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {benefits.map((benefit, index) => (
            <Card key={benefit.title} delay={0.1 * index} className="h-full space-y-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald/10 text-emerald">
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
