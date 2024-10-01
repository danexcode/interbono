import type { Metadata } from "next";

import { PrimeReactProvider } from "primereact/api"

import Header from "../components/Header/Header"

import "./globals.css"
import "primereact/resources/themes/bootstrap4-light-blue/theme.css"
import localFont from "next/font/local";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Gestor de Pagos",
  description: "Un gestor para registrar pagos a clientes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  console.log("LAyoit")
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <PrimeReactProvider>
          <Header/>
          {children}
        </PrimeReactProvider>
      </body>
    </html>
  );
}
