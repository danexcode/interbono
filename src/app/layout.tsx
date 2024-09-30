import type { Metadata } from "next";
import Link from "next/link"
import localFont from "next/font/local";
import "./globals.css";

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
        <nav>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/transacciones">transacciones</Link>
            </li>
            <li>
              <Link href="/clientes">clientes</Link>
            </li>
          </ul>
        </nav>
        {children}
      </body>
    </html>
  );
}
