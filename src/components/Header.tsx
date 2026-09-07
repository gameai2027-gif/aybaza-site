"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Преимущества", href: "#advantages" },
  { label: "Калькулятор", href: "#calculator" },
  { label: "Как работаем", href: "#how-it-works" },
  { label: "Отзывы", href: "#reviews" },
  { label: "Контакты", href: "#contacts" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-slate-950/90 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-black/20"
          : "bg-transparent"
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-18">
          <a href="/" className="flex items-center gap-2.5 group">
            <div className="relative flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500 font-black text-white text-lg shadow-lg shadow-orange-500/30 transition group-hover:scale-105">
              А
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold tracking-tight text-white">АЙБАЗА</span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">авто под ключ</span>
            </div>
          </a>

          <nav className="hidden lg:flex items-center gap-1" aria-label="Основная навигация">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors rounded-md hover:bg-slate-800/50"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <a href="tel:+73472000000" className="flex flex-col items-end leading-tight group">
              <span className="text-sm font-semibold text-white group-hover:text-orange-400 transition">
                +7 (347) 200-00-00
              </span>
              <span className="text-[11px] text-slate-400">ежедневно 9:00–21:00</span>
            </a>
            <a
              href="https://wa.me/79370000000"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-600/20 text-emerald-400 hover:bg-emerald-600/30 transition"
              aria-label="Написать в WhatsApp"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.85 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </a>
            <Button
              size="default"
              onClick={() =>
                document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Оставить заявку
            </Button>
          </div>

          <button
            className="lg:hidden flex h-10 w-10 items-center justify-center rounded-lg text-slate-300 hover:bg-slate-800"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={mobileOpen}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur-xl">
          <nav className="flex flex-col px-4 py-4 gap-1" aria-label="Мобильная навигация">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-3 text-base font-medium text-slate-200 hover:bg-slate-800 rounded-lg"
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="mt-3 flex flex-col gap-3 border-t border-slate-800 pt-4">
              <a href="tel:+73472000000" className="text-center text-lg font-semibold text-white">
                +7 (347) 200-00-00
              </a>
              <Button
                className="w-full"
                onClick={() => {
                  setMobileOpen(false);
                  document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Оставить заявку
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
