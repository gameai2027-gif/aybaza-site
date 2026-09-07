"use client";

import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";

const countries = [
  { id: "cn", label: "Китай", rate: 0.26 },
  { id: "kr", label: "Корея", rate: 0.29 },
  { id: "jp", label: "Япония", rate: 0.31 },
];

const engineTypes = [
  { id: "petrol", label: "Бензин", factor: 1 },
  { id: "diesel", label: "Дизель", factor: 1.08 },
  { id: "hybrid", label: "Гибрид", factor: 0.95 },
  { id: "ev", label: "Электро", factor: 0.82 },
];

export function Calculator() {
  const [country, setCountry] = useState("cn");
  const [engine, setEngine] = useState("petrol");
  const [price, setPrice] = useState(2200000);
  const [year, setYear] = useState(2023);
  const [volume, setVolume] = useState(1.5);

  const result = useMemo(() => {
    const countryRate = countries.find((c) => c.id === country)?.rate ?? 0.28;
    const engineFactor = engineTypes.find((e) => e.id === engine)?.factor ?? 1;
    const ageFactor = year >= 2023 ? 1 : year >= 2020 ? 1.05 : 1.12;
    const volumeFactor = volume <= 1.6 ? 0.95 : volume <= 2.0 ? 1 : 1.15;

    const customs = Math.round(price * countryRate * engineFactor * ageFactor * volumeFactor);
    const utilSbor = engine === "ev" ? 32000 : Math.round(35000 + volume * 18000);
    const delivery = 165000;
    const services = 95000;
    const total = price + customs + utilSbor + delivery + services;

    return { customs, utilSbor, delivery, services, total };
  }, [country, engine, price, year, volume]);

  return (
    <section id="calculator" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-400 mb-3">
            Калькулятор 2026
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Стоимость «под ключ» с учётом НДС 22% и утильсбора
          </h2>
          <p className="mt-4 text-slate-400">
            Моковый расчёт для ориентира. Реальные цифры зависят от конкретного
            автомобиля и курса валют на момент покупки.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 rounded-2xl border border-slate-700/80 bg-slate-900/60 p-6 sm:p-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-3">Страна происхождения</label>
              <div className="grid grid-cols-3 gap-3">
                {countries.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => setCountry(c.id)}
                    className={`rounded-xl border py-3 text-sm font-medium transition ${
                      country === c.id
                        ? "border-orange-500 bg-orange-500/15 text-orange-300"
                        : "border-slate-700 bg-slate-800/40 text-slate-400 hover:border-slate-600"
                    }`}
                  >
                    {c.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-3">Тип двигателя</label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {engineTypes.map((e) => (
                  <button
                    key={e.id}
                    type="button"
                    onClick={() => setEngine(e.id)}
                    className={`rounded-xl border py-3 text-sm font-medium transition ${
                      engine === e.id
                        ? "border-orange-500 bg-orange-500/15 text-orange-300"
                        : "border-slate-700 bg-slate-800/40 text-slate-400 hover:border-slate-600"
                    }`}
                  >
                    {e.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Цена автомобиля за рубежом</label>
              <input
                type="range"
                min={700000}
                max={7000000}
                step={50000}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
                className="w-full accent-orange-500 h-2 bg-slate-700 rounded-lg appearance-none cursor-pointer"
              />
              <div className="mt-2 flex justify-between text-sm">
                <span className="text-slate-500">700 тыс</span>
                <span className="font-semibold text-orange-400">{formatPrice(price)}</span>
                <span className="text-slate-500">7 млн</span>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Год выпуска</label>
                <select
                  value={year}
                  onChange={(e) => setYear(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-3 text-white focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                >
                  {[2025, 2024, 2023, 2022, 2021, 2020, 2019].map((y) => (
                    <option key={y} value={y}>{y}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Объём двигателя, л</label>
                <select
                  value={volume}
                  onChange={(e) => setVolume(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-3 text-white focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                  disabled={engine === "ev"}
                >
                  {[1.0, 1.2, 1.4, 1.5, 1.6, 1.8, 2.0, 2.4, 2.5, 3.0, 3.5].map((v) => (
                    <option key={v} value={v}>{v.toFixed(1)}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-24 rounded-2xl border border-orange-500/30 bg-gradient-to-b from-slate-900 to-slate-950 p-6 sm:p-7 shadow-xl shadow-orange-500/5">
              <h3 className="text-lg font-semibold text-white mb-6">Примерный расчёт</h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Цена авто</span>
                  <span className="text-white font-medium">{formatPrice(price)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Растаможка + НДС</span>
                  <span className="text-white font-medium">{formatPrice(result.customs)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Утильсбор</span>
                  <span className="text-white font-medium">{formatPrice(result.utilSbor)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Доставка</span>
                  <span className="text-white font-medium">{formatPrice(result.delivery)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Услуги и оформление</span>
                  <span className="text-white font-medium">{formatPrice(result.services)}</span>
                </div>
              </div>

              <div className="my-5 border-t border-slate-700" />

              <div className="flex justify-between items-end mb-6">
                <span className="text-slate-300 font-medium">Итого «под ключ»</span>
                <span className="text-2xl sm:text-3xl font-bold text-orange-400">
                  {formatPrice(result.total)}
                </span>
              </div>

              <Button
                className="w-full"
                size="lg"
                onClick={() =>
                  document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
                }
              >
                Получить точный расчёт
              </Button>

              <p className="mt-4 text-xs text-slate-500 leading-relaxed">
                Расчёт носит ознакомительный характер. Точные цифры предоставим
                после подбора конкретного автомобиля.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
