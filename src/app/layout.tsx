import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Lato } from "next/font/google";
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import {UserProvider} from './context/userContext';
import Link from "next/link";
import {ThemeProvider} from './context/themeContext';
import { LoadingProvider } from './context/loadingContext';
import {AuthProvider} from './context/authContext';
import { CartProvider } from "./context/cartContext";


import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});


const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"], // optional: specify weights
  display: "swap",        // recommended
});


const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"], // optional: specify weights
  display: "swap",        // recommended
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Unik Loh!",
  description: "Unique Lifestyle Apparel with Unmatched Comfort and Style",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Welcome to Unik Loh!. Let's escape the mundane and enter the world of fantasy." />
        <meta name="robots" content="index, follow" />
        <meta property="og:title" content="Unik Loh! | Unique Lifestyle Apparel" />
        <meta property="og:description" content="Start your cosplay journey with Unik Loh! Explore complete unique lifestyle apparel from purchase to photoshoot." />
        <meta property="og:image" content="/favicon_io/apple-touch-icon.png" />
        <meta property="og:type" content="website" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
        <link rel="icon" href="../assets/icons8-star-48.png" type="image/x-icon" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon_io/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon_io" />
        <title>Unik Loh!</title>
      </head>
      {/* ${geistSans.variable} ${geistMono.variable} */}
      <body
        className={` ${roboto.className} antialiased `}
      >

        <UserProvider>
          <LoadingProvider>
            <ThemeProvider>
              <AuthProvider>
                <CartProvider>
                  <Header />
                    {children}
                  <Footer />
                </CartProvider>
              </AuthProvider>
            </ThemeProvider>
          </LoadingProvider>
        </UserProvider>

      </body>
    </html>
  );
}
