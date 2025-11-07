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
      <body className="relative bg-night text-white antialiased">
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-24 top-[-10%] h-[420px] w-[420px] rounded-full bg-gradient-to-br from-emerald/40 via-teal-400/20 to-transparent blur-[160px]" />
          <div className="absolute bottom-[-20%] right-[-10%] h-[360px] w-[360px] rounded-full bg-gradient-to-br from-emerald/35 via-sky-400/15 to-transparent blur-[180px]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(13,32,54,0.6),_transparent_60%)]" />
        </div>
        <div className="relative">{children}</div>
      </body>
    </html>
  );
}
