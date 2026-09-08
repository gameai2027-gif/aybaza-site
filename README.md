# АЙБАЗА — импорт авто в Уфу и Башкортостан

Next.js (App Router) + TypeScript + Tailwind CSS.

**Репозиторий:** https://github.com/gameai2027-gif/aybaza-site  
**Статус:** лендинг под заявки «под ключ» (Китай / Корея / Япония), SEO/GEO Уфа + РБ, калькулятор 2026.

## Локально

```bash
git clone https://github.com/gameai2027-gif/aybaza-site.git
cd aybaza-site
npm install
npm run dev
```

http://localhost:3000

## Vercel (рекомендуется)

1. https://vercel.com → Login with GitHub  
2. Import `aybaza-site` → Deploy  
3. Ссылка вида `https://….vercel.app`

На Vercel `GITHUB_PAGES` не задаётся → сайт в корне домена.

## GitHub Pages

Settings → Pages → Source: **GitHub Actions**.  
Сборка с `GITHUB_PAGES=true` → https://gameai2027-gif.github.io/aybaza-site/

## Структура

- `src/lib/site.ts` — единый NAP и зона обслуживания  
- Блоки: Hero, Stats, Problem/Solution, калькулятор, форма, контакты  
- JSON-LD AutoDealer  

Перед продом: реальные телефон/ИНН/фото, CRM, политика ПДн.
