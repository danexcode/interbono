import type { Metadata } from "next";

import { PrimeReactProvider } from "primereact/api"
import { Button } from 'primereact/button';

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
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <PrimeReactProvider>
          <Button label="Submit" />
          {children}
        </PrimeReactProvider>
      </body>
    </html>
  );
}
