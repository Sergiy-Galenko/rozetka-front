import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Інтернет-магазин ROZETKA™: офіційний сайт онлайн",
  description: "Офіційний сайт інтернет-магазину ROZETKA™. Купуйте онлайн з доставкою по Україні.",
  icons: {
    icon: "/images/image.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <head>
        <title>Інтернет-магазин ROZETKA™: офіційний сайт онлайн</title>
        <link rel="icon" href="https://content1.rozetka.com.ua/mb_logo/image_site_mini_logo/original/555588633.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
