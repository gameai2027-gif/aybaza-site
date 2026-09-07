const items = [
  "Geely · Chery · BYD · Haval · Changan",
  "Hyundai · Kia · Genesis",
  "Toyota · Honda · Nissan · Mazda",
  "Официальная растаможка 2026",
  "Доставка в Уфу и по Башкортостану",
  "Проверка на аукционах и у дилеров",
  "Полный пакет документов",
];

export function TrustBar() {
  const doubled = [...items, ...items];

  return (
    <div className="relative border-y border-slate-800/80 bg-slate-900/50 overflow-hidden py-3.5">
      <div className="flex animate-marquee whitespace-nowrap">
        {doubled.map((item, i) => (
          <span
            key={i}
            className="mx-8 inline-flex items-center gap-3 text-sm font-medium text-slate-400"
          >
            <span className="h-1 w-1 rounded-full bg-orange-500/70" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
