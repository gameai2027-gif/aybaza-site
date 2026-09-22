"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { SITE } from "@/lib/site";

const navItems = [
  { label: "Бренды", href: "#brands" },
  { label: "Как работаем", href: "#how-it-works" },
  { label: "Калькулятор", href: "#calculator" },
  { label: "Кейсы", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
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

  const goLead = () => {
    setMobileOpen(false);
    document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
  };

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
        <div className="flex h-16 items-center justify-between">
          <a href="./" className="flex items-center gap-2.5 group">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500 font-black text-white text-lg shadow-lg shadow-orange-500/30 transition group-hover:scale-105">
              А
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg font-bold tracking-tight text-white">
                {SITE.shortName}
              </span>
              <span className="text-[10px] font-medium uppercase tracking-wider text-slate-400">
                авто под ключ · Уфа
              </span>
            </div>
          </a>

          <nav
            className="hidden lg:flex items-center gap-1"
            aria-label="Основная навигация"
          >
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
            <a
              href={SITE.phoneHref}
              className="flex flex-col items-end leading-tight group"
            >
              <span className="text-sm font-semibold text-white group-hover:text-orange-400 transition">
                {SITE.phone}
              </span>
              <span className="text-[11px] text-slate-400">{SITE.hours}</span>
            </a>
            <Button size="default" variant="outline" onClick={goLead}>
              Связаться
            </Button>
          </div>

          <button
            type="button"
            className="lg:hidden flex h-11 w-11 items-center justify-center rounded-lg text-slate-300 hover:bg-slate-800"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Закрыть меню" : "Открыть меню"}
            aria-expanded={mobileOpen}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden>
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
              <a href={SITE.phoneHref} className="text-center text-lg font-semibold text-white">
                {SITE.phone}
              </a>
              <Button className="w-full h-12" variant="outline" onClick={goLead}>
                Связаться
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
