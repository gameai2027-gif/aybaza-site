import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "АЙБАЗА — Автомобили из Китая, Кореи и Японии в Уфу под ключ",
    template: "%s | АЙБАЗА Уфа",
  },
  description:
    "Импорт автомобилей из Китая, Кореи и Японии с доставкой в Уфу и Башкортостан. Растаможка 2026, утильсбор, НДС 22%. Подбор, проверка и привоз «под ключ». Оставьте заявку — рассчитаем стоимость за 15 минут.",
  keywords: [
    "авто из Китая Уфа",
    "пригнать авто из Кореи Башкортостан",
    "автомобили из Японии Уфа",
    "растаможка авто 2026",
    "утильсбор Уфа",
    "импорт авто под ключ",
    "АЙБАЗА",
    "купить авто из Китая Уфа",
  ],
  authors: [{ name: "ООО АЙБАЗА" }],
  creator: "ООО АЙБАЗА",
  publisher: "ООО АЙБАЗА",
  metadataBase: new URL("https://aybaza.ru"),
  openGraph: {
    type: "website",
    locale: "ru_RU",
    url: "https://aybaza.ru",
    siteName: "АЙБАЗА",
    title: "АЙБАЗА — Авто из Китая, Кореи и Японии в Уфу",
    description:
      "Подбор и привоз автомобилей «под ключ» в Уфу и Башкортостан. Честный расчёт растаможки 2026.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://aybaza.ru",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0b1220",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${inter.variable} h-full`}>
      <body className="min-h-full flex flex-col bg-[#0b1220] text-slate-100 antialiased">
        {children}
      </body>
    </html>
  );
}
