"use client";

import { Button } from "@/components/ui/button";
import { SITE } from "@/lib/site";

const brands = [
  "Audi", "BMW", "Mercedes", "Toyota", "Lexus",
  "Li Auto", "Zeekr", "Voyah", "Hongqi", "Genesis",
];

export function Hero() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden pt-24 pb-20">
      <div className="absolute inset-0 bg-grid opacity-30" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0b1220] to-slate-900" aria-hidden />
      <div
        className="absolute inset-0 opacity-[0.12]"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 70% 45% at 60% 35%, rgba(249,115,22,0.2), transparent)",
        }}
        aria-hidden
      />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 w-full text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-4 py-1.5 text-sm text-slate-300 mb-8">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" aria-hidden />
          Офис в Уфе · импорт из Китая, Кореи и ОАЭ
        </div>

        <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-bold tracking-tight leading-[1.15] text-white">
          Привозим автомобили под ключ —{" "}
          <span className="text-gradient">с фиксированной сметой до старта</span>
        </h1>

        <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Audi, BMW, Mercedes, Toyota, Lexus и китайские бренды.
          Вы заранее видите полную стоимость: авто, доставка, таможня, утильсбор.
          Без доплат «на финише».
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button size="lg" onClick={() => scrollTo("how-it-works")}>
            Как это работает
          </Button>
          <Button size="lg" variant="outline" onClick={() => scrollTo("calculator")}>
            Посмотреть расчёт
          </Button>
        </div>

        <p className="mt-6 text-sm text-slate-500">
          Можно просто посмотреть процесс и примеры — заявка не обязательна.
        </p>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-slate-400">
          <span className="flex items-center gap-2">
            <span className="text-emerald-400" aria-hidden>✓</span>
            Договор с ООО «АЙБАЗА»
          </span>
          <span className="flex items-center gap-2">
            <span className="text-emerald-400" aria-hidden>✓</span>
            Цена в договоре не меняется
          </span>
          <span className="flex items-center gap-2">
            <span className="text-emerald-400" aria-hidden>✓</span>
            Выдача и учёт в Уфе
          </span>
        </div>

        <div className="mt-10 pt-8 border-t border-slate-800/80">
          <p className="text-xs uppercase tracking-wider text-slate-500 mb-4">
            Работаем с брендами
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {brands.map((b) => (
              <span
                key={b}
                className="rounded-lg border border-slate-700/70 bg-slate-900/40 px-3 py-1.5 text-xs font-medium text-slate-400"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
