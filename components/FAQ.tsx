"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Card } from "@/components/ui/Card";

const questions = [
  {
    question: "Почему комиссия 30 %?",
    answer:
      "В комиссию входит полная стратегия ценообразования, маркетинг, круглосуточный саппорт гостей, клининг и операционка. При этом доход владельца выше, чем при самостоятельной сдаче."
  },
  {
    question: "Как приходят отчёты и выплаты?",
    answer:
      "Вы получаете еженедельный дашборд с бронированиями, выручкой и комментариями гостей. Выплаты перечисляем раз в неделю на удобный вам счёт."
  },
  {
    question: "Что если гость повредит имущество?",
    answer:
      "Мы работаем только с гостями с депозитами и проверяем документы. Любой ущерб фиксируется, покрывается депозитом или страховкой."
  },
  {
    question: "Нужно ли ИП или самозанятость?",
    answer:
      "Поможем выбрать оптимальный формат: самозанятость, ИП или через нас. Подготовим все документы и подскажем по налогам."
  },
  {
    question: "Что входит в наши услуги?",
    answer:
      "От аналитики и ценообразования до клининга, ремонта, закупок и общения с гостями. Вы только утверждаете стратегию и получаете доход."
  },
  {
    question: "Что если доход ниже прогноза?",
    answer:
      "Мы пересматриваем стратегию, усиливаем маркетинг и снижаем комиссию до 20 % до достижения целевых показателей."
  }
];

export function FAQ() {
  const [open, setOpen] = useState(questions[0].question);

  return (
    <section id="faq" className="section">
      <div className="container-inner">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="text-sm uppercase tracking-[0.4em] text-emerald/70">FAQ</span>
          <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Частые вопросы владельцев</h2>
          <p className="mt-4 text-base text-white/70">
            Ответы, которые мы обсуждаем на первых встречах. Все процессы прозрачны и закреплены в SLA.
          </p>
        </motion.div>
        <div className="mx-auto mt-10 max-w-3xl space-y-4">
          {questions.map((item) => {
            const isOpen = open === item.question;
            return (
              <Card key={item.question} className="space-y-0 overflow-hidden p-0">
                <button
                  onClick={() => setOpen(isOpen ? "" : item.question)}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                >
                  <span className="text-base font-medium text-white">{item.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 text-white/60 transition-transform ${isOpen ? "rotate-180 text-emerald" : ""}`}
                  />
                </button>
                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden px-6 pb-6 text-sm text-white/70"
                    >
                      {item.answer}
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
