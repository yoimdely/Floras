"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function CTA() {
  return (
    <section id="contacts" className="section">
      <div className="container-inner">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-3xl px-8 py-16 text-center"
        >
          <div className="text-sm uppercase tracking-[0.3em] text-emerald">Flora Home</div>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
            Готовы узнать, сколько зарабатывает ваша квартира?
          </h2>
          <p className="mt-3 text-base text-white/70">Получите прогноз дохода за 24 часа — команда подготовит аналитику и стратегию.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button size="lg">Получить прогноз</Button>
            <Button size="lg" variant="secondary">
              Связаться с экспертами
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
