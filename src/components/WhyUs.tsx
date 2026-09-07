export function WhyUs() {
  return (
    <section id="contacts" className="py-20 sm:py-24 bg-slate-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-orange-400 mb-3">
              Почему выбирают нас в Уфе
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6">
              Локальная команда, а не «удалённый брокер»
            </h2>
            <div className="space-y-4 text-slate-300 leading-relaxed">
              <p>
                Мы работаем в Уфе и понимаем, что нужно жителям Башкортостана:
                прозрачность, возможность приехать и поговорить лично, понятные
                сроки и отсутствие скрытых платежей.
              </p>
              <p>
                Офис открыт для встреч. Можно посмотреть примеры привезённых
                автомобилей, обсудить детали договора и задать любые вопросы
                без давления.
              </p>
            </div>

            <ul className="mt-8 space-y-3">
              {[
                "Офис в центре Уфы — можно приехать без записи",
                "Договор с фиксированной стоимостью услуг",
                "Поддержка на русском и башкирском",
                "Работаем с клиентами из Стерлитамака, Салавата, Нефтекамска и других городов",
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <svg className="h-5 w-5 text-orange-400 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-950/70 p-7 sm:p-8">
            <h3 className="text-xl font-semibold text-white mb-6">Контакты</h3>
            <div className="space-y-5">
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">Адрес</p>
                <p className="text-white">г. Уфа, ул. Ленина, 45, офис 312</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">Телефон</p>
                <a href="tel:+73472000000" className="text-lg font-semibold text-orange-400 hover:text-orange-300 transition">
                  +7 (347) 200-00-00
                </a>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">Мессенджеры</p>
                <div className="flex gap-3">
                  <a href="https://wa.me/79370000000" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-emerald-600/20 px-4 py-2 text-sm font-medium text-emerald-400 hover:bg-emerald-600/30 transition">
                    WhatsApp
                  </a>
                  <a href="https://t.me/aybaza_ufa" target="_blank" rel="noopener noreferrer" className="rounded-lg bg-sky-600/20 px-4 py-2 text-sm font-medium text-sky-400 hover:bg-sky-600/30 transition">
                    Telegram
                  </a>
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wider text-slate-500 mb-1">Режим работы</p>
                <p className="text-white">Пн–Вс 9:00–21:00</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
