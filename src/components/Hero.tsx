"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";
import { SITE } from "@/lib/site";

export function Hero() {
  const [budget, setBudget] = useState(2500000);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 pb-16">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0b1220] to-slate-900" aria-hidden />
      <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: "radial-gradient(ellipse 80% 50% at 70% 40%, rgba(249,115,22,0.25), transparent)" }} aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm text-orange-300">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" aria-hidden />
              Уфа и Башкортостан · расчёт 2026
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-bold tracking-tight leading-[1.12]">
              Авто из Китая, Кореи и Японии{" "}
              <span className="text-gradient">в Уфу под ключ</span>
            </h1>

            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
              Подберём, проверим, привезём и растаможим. Вы заранее видите смету
              с НДС 22% и утильсбором — без «доплат на финише».
            </p>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" onClick={() => scrollTo("lead-form")}>Получить расчёт за 15 минут</Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo("calculator")}>Считать самому</Button>
            </div>

            <p className="text-xs text-slate-500 max-w-md">
              Без обязательств. Перезвоним, уточним бюджет и пришлём варианты. Можно написать в{" "}
              <a href={SITE.whatsapp} className="text-emerald-400 hover:underline" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              {" "}или{" "}
              <a href={SITE.telegram} className="text-sky-400 hover:underline" target="_blank" rel="noopener noreferrer">Telegram</a>.
            </p>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
              <span className="flex items-center gap-2"><span className="text-emerald-400" aria-hidden>✓</span>{SITE.stats.cars} авто привезено</span>
              <span className="flex items-center gap-2"><span className="text-emerald-400" aria-hidden>✓</span>Офис в Уфе</span>
              <span className="flex items-center gap-2"><span className="text-emerald-400" aria-hidden>✓</span>Цена в договоре</span>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-700/80 bg-slate-900/90 backdrop-blur-sm p-6 sm:p-8 shadow-2xl shadow-black/40">
              <div className="absolute -top-3 left-6 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">Быстрый ориентир</div>
              <h2 className="text-xl font-semibold text-white mb-6 mt-1">Сколько выйдет «под ключ»?</h2>
              <div className="space-y-5">
                <div>
                  <label htmlFor="hero-budget" className="block text-sm text-slate-400 mb-2">Бюджет на покупку за рубежом</label>
                  <input id="hero-budget" type="range" min={800000} max={6000000} step={50000} value={budget} onChange={(e) => setBudget(Number(e.target.value))} className="w-full accent-orange-500 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer" />
                  <div className="mt-2 flex justify-between text-xs text-slate-500">
                    <span>800 тыс</span>
                    <span className="text-orange-400 font-semibold text-base">{formatPrice(budget)}</span>
                    <span>6 млн</span>
                  </div>
                </div>
                <div className="rounded-xl bg-slate-800/60 p-4 space-y-2.5 text-sm">
                  <div className="flex justify-between"><span className="text-slate-400">Ориентир по растаможке</span><span className="font-medium text-white">{formatPrice(Math.round(budget * 0.28))}</span></div>
                  <div className="flex justify-between"><span className="text-slate-400">Доставка + услуги</span><span className="font-medium text-white">{formatPrice(185000)}</span></div>
                  <div className="border-t border-slate-700 pt-2.5 flex justify-between items-center">
                    <span className="text-slate-300 font-medium">Итого ориентир</span>
                    <span className="text-xl font-bold text-orange-400">{formatPrice(budget + Math.round(budget * 0.28) + 185000)}</span>
                  </div>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed">Это оценка, не оферта. Точная сумма — после подбора конкретного авто.</p>
                <Button className="w-full" size="lg" onClick={() => scrollTo("lead-form")}>Получить точный расчёт</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
