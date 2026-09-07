const reviews = [
  {
    name: "Айрат М.",
    city: "Уфа",
    text: "Привезли Geely Monjaro. Всё прозрачно, по срокам уложились. Особенно понравилось, что можно было приехать в офис и всё обсудить лично.",
    rating: 5,
  },
  {
    name: "Елена К.",
    city: "Стерлитамак",
    text: "Долго выбирала между Кореей и Китаем. Ребята показали несколько вариантов с отчётами. В итоге взяли Tucson — довольна.",
    rating: 5,
  },
  {
    name: "Руслан И.",
    city: "Нефтекамск",
    text: "Растаможка без сюрпризов — цифры совпали с предварительным расчётом. Рекомендую тем, кто не хочет разбираться сам.",
    rating: 5,
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-14">
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-400 mb-3">
            Отзывы клиентов
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Что говорят те, кто уже привёз авто
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, idx) => (
            <blockquote
              key={idx}
              className="card-premium rounded-2xl p-6 sm:p-7 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <svg
                    key={i}
                    className="h-4 w-4 text-orange-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <p className="text-slate-300 text-sm leading-relaxed flex-1 mb-6">
                «{r.text}»
              </p>
              <footer className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-800 text-sm font-semibold text-orange-400">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <cite className="not-italic font-medium text-white text-sm">
                    {r.name}
                  </cite>
                  <p className="text-xs text-slate-500">{r.city}</p>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
