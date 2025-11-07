import type { Metadata } from "next";
import type { ReactNode } from "react";
import "./globals.css";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin", "cyrillic"],
  display: "swap",
  variable: "--font-manrope"
});

const siteUrl = "https://xn-----8kcgmfq9bcze8a5b.xn--p1ai";

export const metadata: Metadata = {
  title: "Flora Home — Доверительное управление недвижимостью в Сочи",
  description:
    "Управление апартаментами, квартирами и домами в Сочи. Премиальный сервис, запуск за 5 дней, прозрачные отчёты и гарантированный доход.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Flora Home — Доверительное управление недвижимостью в Сочи",
    description:
      "30% комиссия, но чистый доход выше благодаря динамическому прайсингу, премиальному сервису и прозрачной отчётности.",
    url: siteUrl,
    siteName: "Flora Home",
    locale: "ru_RU",
    type: "website"
  },
  alternates: {
    canonical: siteUrl
  }
};

export default function RootLayout({
  children
}: {
  children: ReactNode;
}) {
  return (
    <html lang="ru" className={manrope.variable}>
      <body>{children}</body>
    </html>
  );
}
