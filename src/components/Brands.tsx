"use client";

import { Button } from "@/components/ui/button";

const brands = [
  {
    name: "Audi",
    models: "Q7, Q8, e-tron",
  },
  {
    name: "BMW",
    models: "X5, X7, iX3",
  },
  {
    name: "Mercedes",
    models: "GLE, GLS, EQC",
  },
  {
    name: "Toyota",
    models: "Land Cruiser, Highlander",
  },
  {
    name: "Lexus",
    models: "LX, RX, NX",
  },
  {
    name: "Li Auto / Zeekr / Voyah / Hongqi",
    models: "L7, 001, Free, H9",
  },
];

export function Brands() {
  return (
    <section id="brands" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-400 mb-3">
            Не только китайские бренды
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Привозим не только китайские бренды
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Многие думают, что импорт из Китая — это только Li Auto и Zeekr. На самом деле через Китай идут Audi Q7/Q8, BMW X5/X7, Mercedes GLE/GLS, Toyota Land Cruiser, Lexus LX и другие премиум-модели. Мы работаем со всеми брендами, доступными на экспорт.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-10">
          {brands.map((b) => (
            <div
              key={b.name}
              className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6 hover:border-orange-500/40 transition"
            >
              <h3 className="text-lg font-semibold text-white mb-1">{b.name}</h3>
              <p className="text-sm text-slate-400">{b.models}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            size="lg"
            onClick={() =>
              document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Узнать стоимость вашей модели
          </Button>
        </div>
      </div>
    </section>
  );
}
