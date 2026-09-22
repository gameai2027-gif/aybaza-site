"use client";

import { useState, useMemo, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";

const popularModels = [
  { id: "", label: "Выберите модель или введите вручную", price: 0, delivery: 0, customs: 0, util: 0, services: 0 },
  { id: "l7", label: "Li Auto L7 Pro — 4 850 000 ₽", price: 3500000, delivery: 220000, customs: 780000, util: 200000, services: 150000 },
  { id: "zeekr", label: "Zeekr 001 — 4 200 000 ₽", price: 3100000, delivery: 210000, customs: 650000, util: 90000, services: 150000 },
  { id: "bmw-x5", label: "BMW X5 (китайская сборка) — 8 500 000 ₽", price: 6000000, delivery: 280000, customs: 1600000, util: 320000, services: 300000 },
  { id: "audi-q7", label: "Audi Q7 — 9 200 000 ₽", price: 6500000, delivery: 300000, customs: 1750000, util: 350000, services: 300000 },
  { id: "mercedes-gle", label: "Mercedes GLE — 8 800 000 ₽", price: 6200000, delivery: 290000, customs: 1680000, util: 330000, services: 300000 },
  { id: "lc300", label: "Toyota Land Cruiser — 7 500 000 ₽", price: 5200000, delivery: 350000, customs: 1400000, util: 250000, services: 300000 },
];

export function Calculator() {
  const [modelId, setModelId] = useState("");
  const [price, setPrice] = useState(3500000);
  const [delivery, setDelivery] = useState(220000);
  const [customs, setCustoms] = useState(780000);
  const [util, setUtil] = useState(200000);
  const [services, setServices] = useState(150000);

  useEffect(() => {
    const model = popularModels.find((m) => m.id === modelId);
    if (model && model.id) {
      setPrice(model.price);
      setDelivery(model.delivery);
      setCustoms(model.customs);
      setUtil(model.util);
      setServices(model.services);
    }
  }, [modelId]);

  const total = useMemo(
    () => price + delivery + customs + util + services,
    [price, delivery, customs, util, services]
  );

  return (
    <section id="calculator" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-400 mb-3">
            Калькулятор стоимости
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Рассчитайте стоимость авто под ключ
          </h2>
          <p className="mt-4 text-slate-400">
            Выберите популярную модель — поля заполнятся автоматически. Можно скорректировать вручную.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          <div className="lg:col-span-3 rounded-2xl border border-slate-700/80 bg-slate-900/60 p-6 sm:p-8 space-y-6">
            <div>
              <label className="block text-sm font-medium text-slate-300 mb-2">Популярные модели</label>
              <select
                value={modelId}
                onChange={(e) => setModelId(e.target.value)}
                className="w-full rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-3 text-white focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
              >
                {popularModels.map((m) => (
                  <option key={m.id} value={m.id}>{m.label}</option>
                ))}
              </select>
            </div>

            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Стоимость авто</label>
                <input
                  type="number"
                  value={price}
                  onChange={(e) => setPrice(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-3 text-white focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Доставка</label>
                <input
                  type="number"
                  value={delivery}
                  onChange={(e) => setDelivery(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-3 text-white focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Таможенная пошлина + НДС</label>
                <input
                  type="number"
                  value={customs}
                  onChange={(e) => setCustoms(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-3 text-white focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-2">Утильсбор</label>
                <input
                  type="number"
                  value={util}
                  onChange={(e) => setUtil(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-3 text-white focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-slate-300 mb-2">Наши услуги</label>
                <input
                  type="number"
                  value={services}
                  onChange={(e) => setServices(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-3 text-white focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500"
                />
              </div>
            </div>
          </div>

          <div className="lg:col-span-2">
            <div className="sticky top-24 rounded-2xl border border-orange-500/30 bg-gradient-to-b from-slate-900 to-slate-950 p-6 sm:p-7 shadow-xl shadow-orange-500/5">
              <h3 className="text-lg font-semibold text-white mb-6">Итоговый расчёт</h3>

              <div className="space-y-3 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-400">Стоимость авто</span>
                  <span className="text-white font-medium">{formatPrice(price)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Доставка</span>
                  <span className="text-white font-medium">{formatPrice(delivery)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Таможня + НДС</span>
                  <span className="text-white font-medium">{formatPrice(customs)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Утильсбор</span>
                  <span className="text-white font-medium">{formatPrice(util)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Услуги АЙБАЗА</span>
                  <span className="text-white font-medium">{formatPrice(services)}</span>
                </div>
              </div>

              <div className="my-5 border-t border-slate-700" />

              <div className="flex justify-between items-end mb-6">
                <span className="text-slate-300 font-medium">Итого «под ключ»</span>
                <span className="text-2xl sm:text-3xl font-bold text-orange-400">
                  {formatPrice(total)}
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
                Расчёт предварительный. Итоговые таможенные платежи зависят от возраста, объёма двигателя, типа и таможенной стоимости автомобиля.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
