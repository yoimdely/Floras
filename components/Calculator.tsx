"use client";

import { useEffect, useMemo, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Calculator as CalculatorIcon, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import {
  calculateRevenue,
  formatCurrency,
  formatPercentage,
  type CalculatorInputs,
  type District,
  type RentalMode
} from "@/lib/calc";

const districts: District[] = ["Центр", "Адлер", "Сириус", "Красная Поляна", "Дагомыс"];
const rentalModes: RentalMode[] = ["Посуточно", "Долгосрок", "Сезон"];

function AnimatedNumber({ value, formatter }: { value: number; formatter: (value: number) => string }) {
  const motionValue = useMotionValue(value);
  const spring = useSpring(motionValue, { stiffness: 120, damping: 30 });
  const display = useTransform(spring, (latest) => formatter(latest));

  useEffect(() => {
    motionValue.set(value);
  }, [motionValue, value]);

  return <motion.span>{display}</motion.span>;
}

export function Calculator() {
  const [form, setForm] = useState<CalculatorInputs>({
    district: "Центр",
    rentalMode: "Посуточно",
    area: 52,
    beds: 3
  });

  const result = useMemo(() => calculateRevenue(form), [form]);

  return (
    <section id="calculator" className="section">
      <div className="absolute inset-x-0 top-12 -z-10 h-[520px] bg-[radial-gradient(circle_at_center,_rgba(37,81,113,0.4),_transparent_70%)]" />
      <div className="container-inner grid gap-10 lg:grid-cols-[minmax(0,1fr)_420px] lg:items-start">
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-3 rounded-full border border-emerald/30 bg-emerald/10 px-5 py-2 text-sm text-emerald/80"
          >
            <CalculatorIcon className="h-4 w-4" />
            Интерактивный калькулятор дохода
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="text-3xl font-semibold text-white sm:text-4xl"
          >
            Калькулятор дохода
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="max-w-2xl text-base text-white/70"
          >
            Узнайте ориентировочный доход вашей недвижимости с учётом динамического прайсинга, заполняемости и нашей комиссии.
          </motion.p>
          <Card className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <label className="flex flex-col gap-3">
                <span className="text-sm font-medium text-white/80">Район</span>
                <div className="input-field">
                  <MapPin className="h-5 w-5 text-emerald" />
                  <select
                    className="w-full"
                    value={form.district}
                    onChange={(event) =>
                      setForm((prev) => ({
                        ...prev,
                        district: event.target.value as District
                      }))
                    }
                  >
                    {districts.map((district) => (
                      <option key={district} value={district} className="bg-night text-white">
                        {district}
                      </option>
                    ))}
                  </select>
                </div>
              </label>
              <label className="flex flex-col gap-3">
                <span className="text-sm font-medium text-white/80">Формат сдачи</span>
                <div className="input-field">
                  <CalculatorIcon className="h-5 w-5 text-emerald" />
                  <select
                    className="w-full"
                    value={form.rentalMode}
                    onChange={(event) =>
                      setForm((prev) => ({
                        ...prev,
                        rentalMode: event.target.value as RentalMode
                      }))
                    }
                  >
                    {rentalModes.map((mode) => (
                      <option key={mode} value={mode} className="bg-night text-white">
                        {mode}
                      </option>
                    ))}
                  </select>
                </div>
              </label>
              <label className="flex flex-col gap-3">
                <span className="text-sm font-medium text-white/80">Площадь, м²</span>
                <div className="glass-panel rounded-2xl border border-white/10 bg-white/5 px-4 py-4">
                  <input
                    type="range"
                    min={18}
                    max={120}
                    value={form.area}
                    onChange={(event) =>
                      setForm((prev) => ({
                        ...prev,
                        area: Number(event.target.value)
                      }))
                    }
                    className="w-full accent-emerald"
                  />
                  <div className="mt-3 flex justify-between text-xs text-white/60">
                    <span>18</span>
                    <span>{form.area} м²</span>
                    <span>120</span>
                  </div>
                </div>
              </label>
              <label className="flex flex-col gap-3">
                <span className="text-sm font-medium text-white/80">Спальных мест</span>
                <div className="input-field">
                  <Users className="h-5 w-5 text-emerald" />
                  <input
                    type="number"
                    min={1}
                    max={6}
                    value={form.beds}
                    onChange={(event) =>
                      setForm((prev) => ({
                        ...prev,
                        beds: Number(event.target.value)
                      }))
                    }
                    className="w-full"
                  />
                </div>
              </label>
            </div>
            <Button className="w-full" size="lg">
              Получить персональную стратегию
            </Button>
          </Card>
        </div>
        <div className="space-y-6">
          <Card className="space-y-6 bg-gradient-to-br from-white/10 via-white/5 to-transparent">
            <div>
              <h3 className="text-xl font-semibold text-white">Ваш прогноз дохода</h3>
              <p className="text-sm text-white/60">Обновляется в реальном времени при изменении параметров.</p>
            </div>
            <dl className="grid gap-5">
              <div className="flex items-center justify-between">
                <dt className="text-sm text-white/70">Средняя цена за ночь (ADR)</dt>
                <dd className="text-lg font-semibold text-white">
                  <AnimatedNumber value={result.adr} formatter={formatCurrency} />
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-sm text-white/70">Заполняемость</dt>
                <dd className="text-lg font-semibold text-white">
                  <AnimatedNumber value={result.occupancy} formatter={formatPercentage} />
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-sm text-white/70">Валовый доход</dt>
                <dd className="text-lg font-semibold text-white">
                  <AnimatedNumber value={result.gross} formatter={formatCurrency} />
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-sm text-white/70">Комиссия Flora Home</dt>
                <dd className="text-lg font-semibold text-emerald">
                  <AnimatedNumber value={result.fee} formatter={formatCurrency} />
                </dd>
              </div>
              <div className="flex items-center justify-between">
                <dt className="text-sm text-white/70">Операционные расходы</dt>
                <dd className="text-lg font-semibold text-white">
                  <AnimatedNumber value={result.ops} formatter={formatCurrency} />
                </dd>
              </div>
              <div className="flex items-center justify-between border-t border-white/10 pt-4">
                <dt className="text-base font-medium text-white">Чистый доход</dt>
                <dd className="text-2xl font-semibold text-white">
                  <AnimatedNumber value={result.net} formatter={formatCurrency} />
                </dd>
              </div>
            </dl>
          </Card>
          <Card className="space-y-4 text-sm text-white/70">
            <h3 className="text-lg font-semibold text-white">Как увеличить доход</h3>
            <p>Персональная стратегия включает анализ конкурентов, событий и оптимальную модель размещения.</p>
            <p>После заявки менеджер свяжется с вами в течение 2 часов и пришлёт расширенный финансовый прогноз.</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
