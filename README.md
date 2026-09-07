# АЙБАЗА — сайт импорта автомобилей

Next.js (App Router) + TypeScript + Tailwind CSS.

## Локальный запуск

```bash
git clone https://github.com/gameai2027-gif/aybaza-site.git
cd aybaza-site
npm install
npm run dev
```

Откройте http://localhost:3000

## Деплой на Vercel (рекомендуется)

1. Зайдите на https://vercel.com → Login with GitHub
2. **Add New → Project** → выберите `aybaza-site` → **Import**
3. **Deploy** (настройки по умолчанию)
4. Откройте выданную ссылку `https://….vercel.app`

На Vercel сайт работает в корне домена (без `/aybaza-site`).

## GitHub Pages

Ссылка: https://gameai2027-gif.github.io/aybaza-site/

После push в `main` GitHub Actions собирает статику и публикует Pages.

В настройках репозитория:
**Settings → Pages → Build and deployment → Source: GitHub Actions**
