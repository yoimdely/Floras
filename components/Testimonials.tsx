"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";

const testimonials = [
  {
    name: "Екатерина Морозова",
    property: "2-комнатные апартаменты, Сириус",
    quote:
      "За первый сезон с Flora Home доход вырос на 42 %. Команда полностью взяла на себя листинги, динамические цены и работу с гостями.",
    stats: "Чистый доход: 184 000 ₽/мес"
  },
  {
    name: "Андрей Петров",
    property: "Вилла, Красная Поляна",
    quote:
      "Мне важно было минимально участвовать. Через неделю после стартовой встречи уже были первые брони. Отчёты приходят каждую пятницу.",
    stats: "Средняя заполняемость: 87 %"
  },
  {
    name: "Мария и Алексей",
    property: "Студия, Адлер",
    quote:
      "Команда помогла оформить самозанятость, настроила цены под события и добилась 95 % заселяемости в августе.",
    stats: "Комиссия снижена до 20 % по гарантии"
  }
];

export function Testimonials() {
  return (
    <section className="section" id="testimonials">
      <div className="container-inner">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center text-3xl font-semibold text-white sm:text-4xl"
        >
          Реальные истории владельцев
        </motion.h2>
        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((item, index) => (
            <Card key={item.name} delay={0.1 * index} className="flex h-full flex-col gap-4">
              <div>
                <p className="text-lg font-semibold text-white">{item.name}</p>
                <p className="text-sm text-white/60">{item.property}</p>
              </div>
              <p className="text-sm text-white/70">“{item.quote}”</p>
              <div className="text-sm font-medium text-emerald">{item.stats}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
