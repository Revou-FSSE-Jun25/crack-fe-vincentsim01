import type { Metadata } from "next";
import { Geist, Geist_Mono, Roboto, Lato } from "next/font/google";
import Header from './component/header/Header';
import Footer from './component/footer/Footer';
import {UserProvider} from './context/userContext';
import Link from "next/link";
import {ThemeProvider} from './context/themeContext';
import { LoadingProvider } from './context/loadingContext';
import {AuthProvider} from './context/authContext';


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
          <link rel="icon" type="image/png" sizes="32x32" href="/favicon.ico" />
          <link rel="icon" type="image/png" sizes="16x16" href="/favicon.ico" />
          <link rel="shortcut icon" href="/favicon.ico" />
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
            <Header />
            {children}
            <Footer />
            </AuthProvider>
          </ThemeProvider>
          </LoadingProvider>
        </UserProvider>

      </body>
    </html>
  );
}
