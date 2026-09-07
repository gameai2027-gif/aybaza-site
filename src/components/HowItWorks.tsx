const steps = [
  {
    num: "01",
    title: "Заявка и консультация",
    text: "Оставляете заявку или звоните. Уточняем бюджет, пожелания, сроки. Даём предварительный расчёт.",
  },
  {
    num: "02",
    title: "Подбор и проверка",
    text: "Ищем варианты на аукционах и у дилеров. Проверяем историю, состояние, документы.",
  },
  {
    num: "03",
    title: "Согласование и оплата",
    text: "Показываем фото/видео, отчёты. Согласовываем смету. Заключаем договор, фиксируем цену.",
  },
  {
    num: "04",
    title: "Покупка и отправка",
    text: "Выкупаем автомобиль, оформляем экспортные документы, отправляем в Россию.",
  },
  {
    num: "05",
    title: "Растаможка",
    text: "Таможня, НДС, утильсбор, СБКТС. Все этапы под нашим контролем.",
  },
  {
    num: "06",
    title: "Получение в Уфе",
    text: "Привозим авто, помогаем с постановкой на учёт. Вы забираете готовый к езде автомобиль.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 sm:py-24 bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-400 mb-3">
            Схема работы
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            6 шагов от заявки до ключей
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative rounded-2xl border border-slate-800 bg-slate-950/50 p-6 hover:border-slate-700 transition"
            >
              <span className="text-4xl font-black text-slate-800 absolute top-4 right-5 select-none">
                {step.num}
              </span>
              <div className="relative">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/20 text-xs font-bold text-orange-400 mb-4">
                  {step.num}
                </span>
                <h3 className="text-lg font-semibold text-white mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
