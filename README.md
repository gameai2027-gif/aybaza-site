# АЙБАЗА — сайт импорта автомобилей

Next.js 15/16 (App Router) + TypeScript + Tailwind CSS 4.

## Быстрый старт

```bash
git clone https://github.com/gameai2027-gif/aybaza-site.git
cd aybaza-site
npm install
npm run dev
```

Откройте [http://localhost:3000](http://localhost:3000).

## Структура

```
src/
  app/
    layout.tsx      # мета-теги, шрифт Inter (кириллица), viewport
    page.tsx        # главная страница
    globals.css     # тёмная тема, анимации, утилиты
  components/
    Header.tsx
    Hero.tsx
    TrustBar.tsx
    Advantages.tsx
    PopularCars.tsx
    Calculator.tsx
    HowItWorks.tsx
    Reviews.tsx
    WhyUs.tsx
    LeadForm.tsx
    Footer.tsx
    ui/button.tsx
  lib/utils.ts
```

## Что уже есть

- Mobile-first, тёмная премиальная тема (navy + orange)
- SEO + GEO: мета-теги, Open Graph, JSON-LD (AutoDealer)
- Фиксированная шапка, Hero с мини-калькулятором
- Бегущая строка, 6 преимуществ, популярные авто
- Полноценный калькулятор (моковые формулы 2026)
- Схема работы, отзывы, блок «Почему мы в Уфе»
- Финальная форма заявки (готова к интеграции с CRM/Telegram)
- Семантика и aria-атрибуты

## Дальше

1. Подключить реальные фото авто (папка `public/images`)
2. Интегрировать форму с AmoCRM / Битрикс24 / Telegram Bot
3. Добавить страницы каталога и квиз
4. Настроить аналитику (Яндекс.Метрика, цели)
5. Проверить Core Web Vitals и Lighthouse
6. Добавить реальные реквизиты и политику конфиденциальности

## Дизайн

Не «типичный ИИ-шаблон»: асимметричный Hero, sticky-калькулятор, кастомные карточки с hover-глубиной, бегущая строка доверия, локальный фокус на Уфу/Башкортостан.
