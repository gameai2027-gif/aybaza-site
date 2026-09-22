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
    <section className="relative min-h-[90vh] flex items-center overflow-hidden pt-20 pb-16">
      <div className="absolute inset-0 bg-grid opacity-40" aria-hidden />
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-[#0b1220] to-slate-900" aria-hidden />
      <div className="absolute inset-0 opacity-[0.15]" style={{ backgroundImage: "radial-gradient(ellipse 80% 50% at 70% 40%, rgba(249,115,22,0.25), transparent)" }} aria-hidden />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          <div className="lg:col-span-7 space-y-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1.5 text-sm text-orange-300">
              <span className="h-1.5 w-1.5 rounded-full bg-orange-400 animate-pulse" aria-hidden />
              Импорт авто в Уфу · Китай · Корея · ОАЭ
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-[3.1rem] font-bold tracking-tight leading-[1.12]">
              Импорт любых марок из Китая, Кореи и ОАЭ{" "}
              <span className="text-gradient">под ключ — от 21 дня</span>
            </h1>

            <p className="text-lg text-slate-300 max-w-xl leading-relaxed">
              Audi, BMW, Mercedes, Toyota, Lexus, Li Auto, Zeekr и другие бренды.
              Прямые поставки с заводов и площадок. Полное таможенное оформление.
            </p>

            <div className="flex flex-wrap gap-3">
              <Button size="lg" onClick={() => scrollTo("calculator")}>Рассчитать стоимость</Button>
              <Button size="lg" variant="outline" onClick={() => scrollTo("lead-form")}>Получить консультацию</Button>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-slate-400">
              <span className="flex items-center gap-2"><span className="text-emerald-400" aria-hidden>✓</span>Договор с ООО «АЙБАЗА»</span>
              <span className="flex items-center gap-2"><span className="text-emerald-400" aria-hidden>✓</span>Фиксированная цена</span>
              <span className="flex items-center gap-2"><span className="text-emerald-400" aria-hidden>✓</span>Таможня под ключ</span>
              <span className="flex items-center gap-2"><span className="text-emerald-400" aria-hidden>✓</span>Доставка и учёт в Уфе</span>
            </div>

            {/* Brand logos row */}
            <div className="pt-4">
              <p className="text-xs text-slate-500 mb-3 uppercase tracking-wider">Работаем со всеми брендами</p>
              <div className="flex flex-wrap gap-2">
                {brands.map((b) => (
                  <span
                    key={b}
                    className="rounded-lg border border-slate-700/80 bg-slate-800/50 px-3 py-1.5 text-xs font-medium text-slate-300"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="relative rounded-2xl border border-slate-700/80 bg-slate-900/90 backdrop-blur-sm p-6 sm:p-8 shadow-2xl shadow-black/40">
              <div className="absolute -top-3 left-6 rounded-full bg-orange-500 px-3 py-1 text-xs font-semibold text-white">
                Заявка на подбор
              </div>
              <h2 className="text-xl font-semibold text-white mb-2 mt-1">Оставьте заявку — ответим сегодня</h2>
              <p className="text-sm text-slate-400 mb-6">Рассчитаем итоговую стоимость под ключ с доставкой в Уфу.</p>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm text-slate-400 mb-1.5">Имя</label>
                  <input
                    type="text"
                    placeholder="Как к вам обращаться"
                    className="w-full rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                </div>
                <div>
                  <label className="block text-sm text-slate-400 mb-1.5">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 ___ ___-__-__"
                    className="w-full rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-3 text-white placeholder:text-slate-500 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  />
                </div>
                <Button className="w-full" size="lg" onClick={() => scrollTo("lead-form")}>
                  Получить расчёт стоимости
                </Button>
                <p className="text-xs text-slate-500 text-center">
                  Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.
                </p>
              </div>

              <div className="mt-6 pt-5 border-t border-slate-700 flex items-center justify-between text-sm">
                <a href={SITE.phoneHref} className="text-orange-400 hover:underline font-medium">{SITE.phone}</a>
                <div className="flex gap-3">
                  <a href={SITE.whatsapp} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:underline">WhatsApp</a>
                  <a href={SITE.telegram} target="_blank" rel="noopener noreferrer" className="text-sky-400 hover:underline">Telegram</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
