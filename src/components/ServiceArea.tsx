import { SITE } from "@/lib/site";

export function ServiceArea() {
  return (
    <section className="py-12 sm:py-16" aria-labelledby="area-heading">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8">
          <h2 id="area-heading" className="text-lg font-semibold text-white mb-2">
            Привозим авто по всей Республике Башкортостан
          </h2>
          <p className="text-sm text-slate-400 mb-5 max-w-2xl">
            Офис и выдача в Уфе. Доставка и сопровождение для клиентов из городов
            и районов республики — без необходимости ехать в Москву или портовый город.
          </p>
          <ul className="flex flex-wrap gap-2" role="list">
            {SITE.serviceArea.map((city) => (
              <li
                key={city}
                className="rounded-full border border-slate-700 bg-slate-950/60 px-3.5 py-1.5 text-sm text-slate-300"
              >
                {city}
              </li>
            ))}
            <li className="rounded-full border border-orange-500/30 bg-orange-500/10 px-3.5 py-1.5 text-sm text-orange-300">
              и другие населённые пункты РБ
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
