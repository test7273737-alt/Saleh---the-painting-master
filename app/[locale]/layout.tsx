import React from "react";
import type { Metadata } from "next";
import { Almarai, Open_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { NextIntlClientProvider } from "next-intl";
import "../globals.css";
import { notFound } from "next/navigation";

const almarai = Almarai({
  subsets: ["arabic"],
  weight: ["300", "400", "700", "800"],
});

const openSans = Open_Sans({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "مقاول دهانات ومصمم ديكورات | اتصل الآن",
  keywords: [
    "مقاول دهانات",
    "دهانات",
    "دهانات داخلية",
    "دهانات خارجية",
    "دهان منازل",
    "دهان فلل",
    "دهان شقق",
    "ديكورات",
    "تصميم ديكور",
    "ورق جدران",
    "جبس بورد",
    "تشطيبات",
    "صبغ منازل",
    "صباغ",
    "مقاول تشطيبات",
  ],
  description: "حوّل منزلك أو منشأتك إلى تحفة فنية مع خدمات دهانات احترافية.",
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = (await params).locale;

  if (!["ar", "en"].includes(locale)) {
    notFound();
  }

  return (
    <html
      lang={locale}
      dir={locale === "ar" ? "rtl" : "ltr"}
      suppressHydrationWarning
      className={`${
        locale === "ar" ? almarai.className : openSans.className
      } antialiased`}
    >
      <body className="bg-zinc-50 dark:bg-zinc-950">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NextIntlClientProvider>{children}</NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
