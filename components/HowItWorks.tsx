"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

const steps = [
  {
    title: "Оставляете адрес и фото",
    description: "Проводим аудит объекта и делимся точным прогнозом за 24 часа",
    number: "01"
  },
  {
    title: "Подписываем договор",
    description: "Фиксируем SLA по сервису, показателям и коммуникации",
    number: "02"
  },
  {
    title: "Готовим объект",
    description: "Проводим съемку, упаковываем листинги и подключаем каналы",
    number: "03"
  },
  {
    title: "Запускаем за 5 дней",
    description: "Настраиваем цены, автоматизируем процессы, запускаем брони",
    number: "04"
  }
];

export function HowItWorks() {
  return (
    <section id="process" className="section">
      <div className="container-inner">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold text-white sm:text-4xl"
        >
          Как мы запускаем доверительное управление
        </motion.h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {steps.map((step, index) => (
            <Card key={step.title} delay={0.08 * index} className="flex h-full flex-col gap-4">
              <div className="flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-emerald/40 bg-emerald/10 text-lg font-semibold text-emerald">
                  {step.number}
                </span>
                <h3 className="text-2xl font-semibold text-white">{step.title}</h3>
              </div>
              <p className="text-sm text-white/70">{step.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
