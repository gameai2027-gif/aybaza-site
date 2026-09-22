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
    default: "АЙБАЗА — Импорт авто из Китая, Кореи и ОАЭ в Уфу под ключ",
    template: "%s | АЙБАЗА Уфа",
  },
  description:
    "Импорт автомобилей из Китая, Кореи и ОАЭ с доставкой в Уфу и Башкортостан. Audi, BMW, Mercedes, Toyota, Lexus, Li Auto, Zeekr. Растаможка 2026, утильсбор, НДС. Подбор, проверка и привоз «под ключ».",
  keywords: [
    "авто из Китая Уфа",
    "пригнать авто из Кореи Башкортостан",
    "автомобили из ОАЭ Уфа",
    "Audi BMW Mercedes из Китая Уфа",
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
    title: "АЙБАЗА — Авто из Китая, Кореи и ОАЭ в Уфу под ключ",
    description:
      "Подбор и привоз автомобилей «под ключ» в Уфу и Башкортостан. Audi, BMW, Mercedes, Toyota, Lexus и китайские бренды. Честный расчёт растаможки 2026.",
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
