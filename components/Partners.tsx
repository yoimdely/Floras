"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export function Partners() {
  return (
    <section id="partners" className="section">
      <div className="container-inner grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <span className="text-sm uppercase tracking-[0.4em] text-emerald/70">Партнёрам</span>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Партнёрская программа Flora Home</h2>
          <p className="text-base text-white/70">
            Делитесь нашими кейсами с владельцами и получайте вознаграждение. Мы ценим партнёров, которые разделяют философию сервиса, внимания и технологий.
          </p>
          <Card className="space-y-4 bg-white/5">
            <h3 className="text-xl font-semibold text-white">Оффер для партнёров</h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li>• 10 000 ₽ или 50 % нашей комиссии за первый месяц за каждого привлечённого владельца</li>
              <li>• Персональный менеджер и совместные презентации</li>
              <li>• Статистика и кейсы для ваших клиентов</li>
            </ul>
          </Card>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="glass-panel rounded-3xl p-8"
        >
          <h3 className="text-2xl font-semibold text-white">Станьте амбассадором бренда</h3>
          <p className="mt-3 text-sm text-white/70">
            Мы подготовим презентации, подскажем, как рассказывать о сервисе, и подключим ваших клиентов к премиальному управлению.
          </p>
          <div className="mt-6 space-y-4 text-sm text-white/60">
            <p>Доступ к закрытому клубу партнёров и образовательным материалам.</p>
            <p>Совместные мероприятия в Сочи, Москве и онлайн.</p>
          </div>
          <Button className="mt-6 w-full" size="lg" variant="secondary">
            Стать партнёром
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
