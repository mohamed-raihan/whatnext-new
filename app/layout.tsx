import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Montserrat, Roboto, Rubik } from "next/font/google";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-roboto',
});

const inter = Inter({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-inter',
});

const rubik = Rubik({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-rubik',
});

const montserrat = Montserrat({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-montserrat',
});


export const metadata: Metadata = {
  title: "WhatNext",
  description: "WhatNext is a platform for students to find the best study abroad options for them.",
  icons: {
    icon: "/logo.png",
    shortcut: "/logo.png",
    apple: "/logo.png",
    other: {
      rel: "icon",
      url: "/logo.png",
    },
  },
  openGraph: {
    images: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (  
    <html lang="en">
      
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${roboto.variable} ${inter.variable} ${rubik.variable} ${montserrat.variable} antialiased`}
      >
        <Header/>
        {children}
        <Footer/>
        <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
      </body>
    </html>
  );
}
