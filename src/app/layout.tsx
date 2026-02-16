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
    default: "Klatka - Repertuar seansów specjalnych i klasyki filmowej",
    template: "%s - Klatka",
  },
  description:
    "Ogólnopolski przewodnik po seansach specjalnych, klasyce i retrospektywach w kinach studyjnych. Sprawdź co grają.",
  openGraph: {
    type: "website",
    locale: "pl_PL",
    siteName: "Klatka",
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
