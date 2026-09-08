import { SITE } from "@/lib/site";

const items = [
  { value: SITE.stats.cars, label: "авто привезено в Башкирию" },
  { value: SITE.stats.years, label: "года на рынке импорта" },
  { value: SITE.stats.cities, label: "городов в зоне доставки" },
  { value: "15 мин", label: "на предварительный расчёт" },
];

export function StatsBar() {
  return (
    <section className="border-y border-slate-800/80 bg-slate-900/40" aria-label="Ключевые показатели">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-slate-800/80">
          {items.map((item) => (
            <div key={item.label} className="px-4 py-8 sm:px-6 text-center">
              <p className="text-2xl sm:text-3xl font-bold text-orange-400 tracking-tight">
                {item.value}
              </p>
              <p className="mt-1.5 text-xs sm:text-sm text-slate-400 leading-snug">
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
