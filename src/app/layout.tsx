import type { Metadata } from "next";

export const dynamic = "force-dynamic";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import ScrollToTop from "@/components/common/scroll-to-top";
import { CityProvider } from "@/contexts/city-context";
import { getCities } from "@/lib/cities";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Klaps - Repertuar seansów specjalnych i klasyki filmowej",
    template: "%s - Klaps",
  },
  description:
    "Ogólnopolski przewodnik po seansach specjalnych, klasyce i retrospektywach w kinach studyjnych. Sprawdź co grają.",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: "Klaps",
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cities = await getCities();

  return (
    <html lang="pl">
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Klaps" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CityProvider cities={cities}>
          <Header cities={cities} />

          {children}

          <Footer />
          <ScrollToTop />
        </CityProvider>
      </body>
    </html>
  );
}
