import { getDefaultMetadata } from "@/utils/getDefaultMetadata";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";
import Header from "@/components/shared/header/Header";
import Footer from "@/components/shared/footer/Footer";
import { getLocale } from "next-intl/server";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
});

const actay = localFont({
  src: "../../../public/fonts/ActayWide-Bold.otf",
  variable: "--font-actay",
});

const guanoApes = localFont({
  src: "../../../public/fonts/GuanoApes.otf",
  variable: "--font-guano-apes",
});

const parkia = localFont({
  src: "../../../public/fonts/Parkia-Bold.otf",
  variable: "--font-parkia",
});

export async function generateMetadata() {
  const locale = await getLocale();
  return await getDefaultMetadata(locale);
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body
        className={`${montserrat.variable} ${actay.variable} ${guanoApes.variable} ${parkia.variable} flex min-h-screen flex-col antialiased`}
      >
        <NextIntlClientProvider>
          <Header />
          <main className="flex-1 overflow-hidden">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
