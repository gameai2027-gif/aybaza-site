"use client";

import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";

const cars = [
  { name: "Geely Coolray 2024", country: "Китай", price: 2150000, engine: "1.5 Turbo", fuel: "Бензин", year: 2024, badge: "Хит Уфы", tone: "from-orange-600/30 to-slate-900" },
  { name: "Hyundai Tucson 2023", country: "Корея", price: 2890000, engine: "2.0", fuel: "Бензин", year: 2023, badge: "Кроссовер", tone: "from-sky-600/25 to-slate-900" },
  { name: "Toyota RAV4 2022", country: "Япония", price: 3450000, engine: "2.5 Hybrid", fuel: "Гибрид", year: 2022, badge: "Надёжный", tone: "from-emerald-600/25 to-slate-900" },
  { name: "BYD Song Plus 2024", country: "Китай", price: 2680000, engine: "EV", fuel: "Электро", year: 2024, badge: "Электро", tone: "from-violet-600/25 to-slate-900" },
];

export function PopularCars() {
  return (
    <section className="py-20 sm:py-24 bg-slate-900/40" aria-labelledby="cars-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-400 mb-3">Популярные предложения</p>
            <h2 id="cars-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Что чаще всего привозят в Уфу</h2>
          </div>
          <p className="text-slate-400 text-sm max-w-xs">Цены «под ключ» ориентировочные. Актуальные варианты — после заявки.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {cars.map((car) => (
            <article key={car.name} className="card-premium group rounded-2xl overflow-hidden flex flex-col">
              <div className={`relative h-40 bg-gradient-to-br ${car.tone} flex items-end p-4`}>
                <span className="absolute top-3 left-3 rounded-md bg-slate-950/70 px-2 py-1 text-xs font-medium text-slate-200 backdrop-blur">{car.country}</span>
                <span className="absolute top-3 right-3 rounded-md bg-orange-500/90 px-2 py-1 text-[11px] font-semibold text-white">{car.badge}</span>
                <p className="text-3xl font-black text-white/20 select-none leading-none">{car.country === "Китай" ? "CN" : car.country === "Корея" ? "KR" : "JP"}</p>
              </div>
              <div className="p-5 flex flex-col flex-1">
                <h3 className="text-base font-semibold text-white mb-1">{car.name}</h3>
                <p className="text-xs text-slate-500 mb-4">{car.year} · {car.engine} · {car.fuel}</p>
                <div className="mt-auto">
                  <p className="text-xs text-slate-500 mb-0.5">от</p>
                  <p className="text-xl font-bold text-orange-400 mb-4">{formatPrice(car.price)}</p>
                  <Button variant="outline" size="sm" className="w-full" onClick={() => document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })}>Узнать точнее</Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
