import { SITE } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500 font-black text-white text-lg">
                А
              </div>
              <span className="text-lg font-bold text-white">{SITE.shortName}</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Импорт автомобилей из Китая, Кореи и Японии с доставкой в Уфу и
              Башкортостан. Полный цикл «под ключ».
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Навигация</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="#advantages" className="hover:text-orange-400 transition">Преимущества</a></li>
              <li><a href="#calculator" className="hover:text-orange-400 transition">Калькулятор</a></li>
              <li><a href="#how-it-works" className="hover:text-orange-400 transition">Как работаем</a></li>
              <li><a href="#reviews" className="hover:text-orange-400 transition">Отзывы</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Контакты</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href={SITE.phoneHref} className="hover:text-orange-400 transition">{SITE.phone}</a></li>
              <li><a href={`mailto:${SITE.email}`} className="hover:text-orange-400 transition">{SITE.email}</a></li>
              <li>{SITE.address.full}</li>
              <li>{SITE.hours}</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-white mb-4">Документы</h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><a href="#" className="hover:text-orange-400 transition">Политика конфиденциальности</a></li>
              <li><a href="#" className="hover:text-orange-400 transition">Пользовательское соглашение</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col sm:flex-row justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} {SITE.name}. Все права защищены.</p>
          <p>{SITE.address.city}, {SITE.address.region}</p>
        </div>
      </div>
    </footer>
  );
}
