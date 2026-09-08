const usual = [
  "Скрытые платежи на таможне",
  "Непонятный утильсбор и НДС",
  "Нет возможности приехать в офис",
  "Цена «плывёт» до получения авто",
];

const ours = [
  "Смета до покупки, без сюрпризов",
  "НДС 22% и утильсбор 2026 в расчёте",
  "Офис в Уфе — можно встретиться",
  "Фиксируем стоимость в договоре",
];

export function ProblemSolution() {
  return (
    <section className="py-16 sm:py-20" aria-labelledby="risk-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-400 mb-3">
            Снижаем риск
          </p>
          <h2 id="risk-heading" className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Обычный привоз и привоз с АЙБАЗА — разница в спокойствии
          </h2>
          <p className="mt-4 text-slate-400 leading-relaxed">
            Главный страх клиента — «доплатят на финише». Мы убираем эту неопределённость
            до того, как вы вложите деньги.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-5">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/60 p-6 sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-5">
              Обычный путь
            </h3>
            <ul className="space-y-3">
              {usual.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-400">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-600" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-orange-500/30 bg-orange-500/5 p-6 sm:p-8">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-orange-400 mb-5">
              С АЙБАЗА
            </h3>
            <ul className="space-y-3">
              {ours.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-slate-200">
                  <svg className="h-5 w-5 shrink-0 text-orange-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
