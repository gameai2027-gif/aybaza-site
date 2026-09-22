"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Можно ли привезти Audi / BMW / Mercedes из Китая?",
    a: "Да, мы привозим европейские и японские бренды, которые собираются в Китае или доступны на экспорт. Например: Audi Q7/Q8, BMW X5/X7, Mercedes GLE/GLS, Toyota Land Cruiser, Lexus LX.",
  },
  {
    q: "Как происходит оплата? Нужен ли валютный счёт?",
    a: "Нет, вам не нужен валютный счёт. Оплата происходит по договору в рублях на наш счёт в РФ. Мы берём на себя все валютные операции и конвертацию.",
  },
  {
    q: "Что если авто придёт с дефектами?",
    a: "Все автомобили проходят проверку выездным инспектором перед покупкой. Если дефекты обнаружатся после выдачи — вы можете вернуть авто в течение 14 дней по договору.",
  },
  {
    q: "Можно ли вернуть авто?",
    a: "Да, в течение 14 дней при обнаружении скрытых дефектов, не указанных в отчёте инспектора.",
  },
  {
    q: "Как проходит постановка на учёт?",
    a: "Мы оформляем ЭПТС, СБКТС, уплачиваем утильсбор. Вы получаете авто с готовыми документами — остаётся только приехать в ГИБДД. Можем помочь с постановкой на учёт за доп. плату.",
  },
  {
    q: "Сколько точно занимает доставка?",
    a: "3–5 недель для Китая, 4–6 недель для Кореи, 4–7 недель для ОАЭ.",
  },
  {
    q: "Какая гарантия на авто?",
    a: "Заводская гарантия (от 3 лет / 100 000 км) + наша гарантия на юридическую чистоту и соответствие комплектации.",
  },
  {
    q: "Работаете ли с юрлицами?",
    a: "Да, работаем с НДС и без. Предоставляем полный пакет документов для бухгалтерии.",
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 sm:py-24 bg-slate-900/40">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-400 mb-3">
            FAQ
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Часто задаваемые вопросы
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((item, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-slate-800 bg-slate-950/50 overflow-hidden"
            >
              <button
                type="button"
                className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                onClick={() => setOpen(open === idx ? null : idx)}
              >
                <span className="font-medium text-white text-sm sm:text-base">{item.q}</span>
                <span className={`shrink-0 text-orange-400 transition ${open === idx ? "rotate-180" : ""}`}>
                  ▾
                </span>
              </button>
              {open === idx && (
                <div className="px-6 pb-5 text-sm text-slate-400 leading-relaxed">
                  {item.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
