const steps = [
  {
    num: "01",
    title: "Заявка и подбор",
    text: "Оставляете заявку на сайте или звоните нам. Подбираем варианты на проверенных площадках в Китае, Корее и ОАЭ. Согласовываем модель, комплектацию и бюджет.",
  },
  {
    num: "02",
    title: "Проверка и оплата",
    text: "Проверяем через выездного инспектора: VIN, комплектация, состояние. Присылаем фото/видеоотчёт с рекомендацией. Оплата по договору через защищённые каналы (вам не нужно разбираться с валютными переводами).",
  },
  {
    num: "03",
    title: "Доставка",
    text: "Доставляем ж/д, автотранспортом или морем — в зависимости от модели и срочности. Средний срок: 3–5 недель от оплаты до выдачи.",
  },
  {
    num: "04",
    title: "Таможенное оформление",
    text: "Берём на себя всю таможню: пошлина, утильсбор, НДС. Оформляем ЭПТС, СБКТС, устанавливаем ЭВАК.",
  },
  {
    num: "05",
    title: "Выдача в Уфе",
    text: "Выдаём автомобиль с готовыми документами. Помогаем с постановкой на учёт в ГИБДД. Предоставляем гарантию и постпродажное обслуживание.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-400 mb-3">
            Как это работает
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Пять шагов до автомобиля в Уфе
          </h2>
          <p className="mt-4 text-slate-400">
            Понятный процесс с сопровождением на каждом этапе и отчётностью по расходам.
          </p>
        </div>

        <div className="relative">
          {/* Timeline line for desktop */}
          <div className="hidden lg:block absolute left-0 right-0 top-8 h-0.5 bg-slate-800" aria-hidden />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl border border-slate-800 bg-slate-950/50 p-6 hover:border-slate-700 transition"
              >
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-orange-500 text-sm font-bold text-white mb-4 relative z-10">
                  {step.num}
                </span>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
