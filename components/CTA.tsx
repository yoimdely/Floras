"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function CTA() {
  const [district, setDistrict] = useState("Центр");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="contacts" className="section">
      <div className="container-inner">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass-panel rounded-3xl px-8 py-16"
        >
          <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-center">
            <div>
              <div className="text-sm uppercase tracking-[0.3em] text-emerald">Flora Home</div>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">
                Готовы узнать, сколько зарабатывает ваша квартира?
              </h2>
              <p className="mt-3 max-w-xl text-base text-white/70">
                Получите прогноз дохода за 24 часа — команда подготовит аналитику, стратегию и план запуска.
              </p>
              <div className="mt-6 grid gap-3 text-sm text-white/70">
                <p>• Персональная команда в Сочи, Адлере и Красной Поляне</p>
                <p>• Подготовим договор, листинги и динамические цены</p>
              </div>
            </div>
            <form
              className="space-y-5"
              onSubmit={(event) => {
                event.preventDefault();
                event.currentTarget.reset();
                setDistrict("Центр");
                setSubmitted(true);
              }}
            >
              <div className="input-field">
                <label htmlFor="name" className="sr-only">
                  Имя
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Имя"
                  onChange={() => setSubmitted(false)}
                  required
                />
              </div>
              <div className="input-field">
                <label htmlFor="phone" className="sr-only">
                  Телефон
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="Телефон"
                  onChange={() => setSubmitted(false)}
                  required
                />
              </div>
              <div className="input-field">
                <label htmlFor="district" className="sr-only">
                  Район
                </label>
                <select
                  id="district"
                  name="district"
                  value={district}
                  onChange={(event) => {
                    setDistrict(event.target.value);
                    setSubmitted(false);
                  }}
                  required
                >
                  <option value="Центр" className="bg-night text-white">
                    Центр
                  </option>
                  <option value="Адлер" className="bg-night text-white">
                    Адлер
                  </option>
                  <option value="Сириус" className="bg-night text-white">
                    Сириус
                  </option>
                  <option value="Красная Поляна" className="bg-night text-white">
                    Красная Поляна
                  </option>
                  <option value="Дагомыс" className="bg-night text-white">
                    Дагомыс
                  </option>
                </select>
              </div>
              <Button type="submit" className="w-full" size="lg">
                Получить прогноз дохода
              </Button>
              <p className="text-xs text-white/50">
                Отправляя форму, вы соглашаетесь с обработкой персональных данных и политикой конфиденциальности.
              </p>
              {submitted ? (
                <p className="rounded-2xl border border-emerald/40 bg-emerald/10 px-4 py-3 text-xs text-emerald">
                  Спасибо! Команда свяжется с вами в течение 2 часов, чтобы обсудить стратегию.
                </p>
              ) : null}
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
