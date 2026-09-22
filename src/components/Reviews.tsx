"use client";

import { Button } from "@/components/ui/button";
import { formatPrice } from "@/lib/utils";

const cases = [
  {
    model: "Audi Q7 2024, 3.0 TDI",
    from: "Китай → Уфа",
    priceChina: "¥650 000",
    total: 9200000,
    days: 28,
    comment: "Клиент искал альтернативу официальному дилеру, сэкономил 1 500 000 ₽.",
    client: "Артём, Уфа",
  },
  {
    model: "BMW X5 2024, xDrive40i",
    from: "Китай → Уфа",
    priceChina: "¥600 000",
    total: 8500000,
    days: 25,
    comment: "Привезли в цвете, который недоступен у официалов в РФ.",
    client: "Марат, Уфа",
  },
  {
    model: "Li Auto L7 Pro 2024",
    from: "Китай → Уфа",
    priceChina: "¥350 000",
    total: 4850000,
    days: 21,
    comment: "Популярная модель, привозим ежемесячно по 5–7 штук.",
    client: "Артур, Уфа",
  },
  {
    model: "Genesis GV80",
    from: "Корея → Стерлитамак",
    priceChina: "—",
    total: 5600000,
    days: 38,
    comment: "Нашли идеальный вариант с корейского рынка и полностью растаможили.",
    client: "Динар, Стерлитамак",
  },
  {
    model: "Toyota Land Cruiser 300",
    from: "ОАЭ → Уфа",
    priceChina: "—",
    total: 9200000,
    days: 45,
    comment: "Внедорожник из Эмиратов в максимальной версии. Расчёт совпал до рубля.",
    client: "Рустем, Уфа",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-400 mb-3">
            Наши кейсы
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Уже привезли в Башкортостан
          </h2>
          <p className="mt-4 text-slate-400">
            Реальные примеры автомобилей, доставленных клиентам под ключ, с итоговой ценой и сроком.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((c, idx) => (
            <article
              key={idx}
              className="card-premium rounded-2xl p-6 sm:p-7 flex flex-col"
            >
              <div className="flex items-start justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-base font-semibold text-white">{c.model}</h3>
                  <p className="text-xs text-slate-500 mt-1">{c.from}</p>
                </div>
                <span className="shrink-0 rounded-md bg-orange-500/15 px-2 py-1 text-[11px] font-medium text-orange-300">
                  {c.days} дн.
                </span>
              </div>

              <p className="text-sm text-slate-400 leading-relaxed flex-1 mb-5">
                «{c.comment}»
              </p>

              <div className="border-t border-slate-800 pt-4 space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-slate-500">Итого под ключ</span>
                  <span className="font-semibold text-orange-400">{formatPrice(c.total)}</span>
                </div>
                <p className="text-xs text-slate-500">{c.client}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-10 text-center">
          <Button
            variant="outline"
            size="lg"
            onClick={() =>
              document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Хочу такой же расчёт
          </Button>
        </div>
      </div>
    </section>
  );
}
