"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";

export function Hero() {
  const [budget, setBudget] = useState(2500000);

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden pt-20 pb-16">
      <div className="absolute inset-0 bg-grid opacity-40" />
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-transparent to-[#0b1220]" />
      <div className="absolute top-1/4 -right-32 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl" />
      <div className="absolute bottom-1/4 -left-32 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm text-orange-300">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" />
              Работаем по всей Башкирии · 2026 год
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight leading-[1.15]">
              Автомобили из Китая, Кореи и Японии{" "}
              <span className="text-gradient">в Уфу под ключ</span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-300 max-w-xl leading-relaxed">
              Полный цикл: подбор, проверка, покупка, доставка, растаможка и
              постановка на учёт. Честный расчёт с НДС 22% и актуальным
              утильсбором 2026.
            </p>

            <div className="flex flex-wrap gap-4">
              <Button
                size="lg"
                onClick={() =>
                  document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Получить расчёт за 15 минут
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() =>
                  document.getElementById("calculator")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Калькулятор стоимости
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-8 gap-y-3 pt-2 text-sm text-slate-400">
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Более 340 авто привезено</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Гарантия на проверку</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Офис в Уфе</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-700/80 bg-slate-900/80 backdrop-blur-sm p-6 sm:p-8 shadow-2xl shadow-black/40">
              <div className="absolute -top-3 left-6 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                Быстрый расчёт
              </div>

              <h2 className="text-xl font-semibold text-white mb-6 mt-2">
                Сколько будет стоить авто «под ключ»?
              </h2>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm text-slate-400 mb-2">
                    Бюджет на покупку за рубежом
                  </label>
                  <div className="relative">
                    <input
                      type="range"
                      min={800000}
                      max={6000000}
                      step={50000}
                      value={budget}
                      onChange={(e) => setBudget(Number(e.target.value))}
                      className="w-full accent-orange-500 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
                    />
                    <div className="mt-2 flex justify-between text-xs text-slate-500">
                      <span>800 тыс</span>
                      <span className="text-orange-400 font-semibold text-base">
                        {formatPrice(budget)}
                      </span>
                      <span>6 млн</span>
                    </div>
                  </div>
                </div>

                <div className="rounded-xl bg-slate-800/60 p-4 space-y-2.5 text-sm">
                  <div className="flex justify-between">
                    <span className="text-slate-400">Примерная растаможка</span>
                    <span className="font-medium text-white">
                      {formatPrice(Math.round(budget * 0.28))}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-slate-400">Доставка + услуги</span>
                    <span className="font-medium text-white">{formatPrice(185000)}</span>
                  </div>
                  <div className="border-t border-slate-700 pt-2.5 flex justify-between items-center">
                    <span className="text-slate-300 font-medium">Итого «под ключ»</span>
                    <span className="text-xl font-bold text-orange-400">
                      {formatPrice(budget + Math.round(budget * 0.28) + 185000)}
                    </span>
                  </div>
                </div>

                <p className="text-xs text-slate-500 leading-relaxed">
                  * Ориентировочный расчёт. Точная стоимость зависит от года, объёма
                  двигателя, типа топлива и курса валют. Оставьте заявку — сделаем
                  точный расчёт.
                </p>

                <Button
                  className="w-full"
                  size="lg"
                  onClick={() =>
                    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  Получить точный расчёт
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
