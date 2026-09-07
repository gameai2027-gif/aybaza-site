"use client";

import { useState, FormEvent } from "react";
import { Button } from "@/components/ui/button";

export function LeadForm() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [budget, setBudget] = useState("");
  const [comment, setComment] = useState("");
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!phone.trim()) return;

    setLoading(true);
    // Здесь будет интеграция с AmoCRM / Битрикс24 / Telegram
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSent(true);
  };

  return (
    <section id="lead-form" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-700/80 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 px-6 py-12 sm:px-12 sm:py-16">
          <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-orange-500/10 blur-3xl" />
          <div className="absolute bottom-0 left-0 h-48 w-48 rounded-full bg-blue-600/10 blur-3xl" />

          <div className="relative grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-4">
                Получите точный расчёт за 15 минут
              </h2>
              <p className="text-slate-300 leading-relaxed mb-6">
                Оставьте контакты — перезвоним, уточним пожелания и пришлём
                варианты с полной сметой «под ключ» (включая НДС 22% и
                утильсбор 2026).
              </p>
              <ul className="space-y-2.5 text-sm text-slate-400">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                  Без обязательств и навязчивых звонков
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                  Ответ в течение рабочего дня
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-orange-400" />
                  Можно написать в WhatsApp или Telegram
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-slate-700 bg-slate-950/80 p-6 sm:p-8">
              {sent ? (
                <div className="text-center py-8">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400">
                    <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">Заявка отправлена</h3>
                  <p className="text-slate-400 text-sm">Мы свяжемся с вами в ближайшее время.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div>
                    <label htmlFor="name" className="sr-only">Имя</label>
                    <input
                      id="name"
                      type="text"
                      placeholder="Ваше имя"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3.5 text-white placeholder:text-slate-500 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                      autoComplete="name"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="sr-only">Телефон</label>
                    <input
                      id="phone"
                      type="tel"
                      placeholder="Телефон *"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3.5 text-white placeholder:text-slate-500 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                      autoComplete="tel"
                    />
                  </div>
                  <div>
                    <label htmlFor="budget" className="sr-only">Бюджет</label>
                    <select
                      id="budget"
                      value={budget}
                      onChange={(e) => setBudget(e.target.value)}
                      className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3.5 text-white focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                    >
                      <option value="">Бюджет (необязательно)</option>
                      <option value="1.5">до 1,5 млн ₽</option>
                      <option value="2.5">1,5 – 2,5 млн ₽</option>
                      <option value="3.5">2,5 – 3,5 млн ₽</option>
                      <option value="5">3,5 – 5 млн ₽</option>
                      <option value="5+">свыше 5 млн ₽</option>
                    </select>
                  </div>
                  <div>
                    <label htmlFor="comment" className="sr-only">Комментарий</label>
                    <textarea
                      id="comment"
                      placeholder="Какой авто интересует? (марка, год, комплектация)"
                      rows={3}
                      value={comment}
                      onChange={(e) => setComment(e.target.value)}
                      className="w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3.5 text-white placeholder:text-slate-500 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500 resize-none"
                    />
                  </div>
                  <Button type="submit" className="w-full" size="lg" disabled={loading}>
                    {loading ? "Отправляем..." : "Получить расчёт"}
                  </Button>
                  <p className="text-[11px] text-slate-500 text-center leading-relaxed">
                    Нажимая кнопку, вы соглашаетесь с обработкой персональных
                    данных. Мы не передаём данные третьим лицам.
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
