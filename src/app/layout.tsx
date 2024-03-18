import type { Metadata } from "next";
import { Inter, Poppins, Rubik } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import Head from 'next/head'

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500']
})

const rubik = Rubik({
  subsets: ['latin'],
  weight: ['400','500','600']
})
export const metadata: Metadata = {
  title: "TCC",
  description: "Etec TCC",
  icons: {
    icon: './favicon.ico'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${rubik.className} max-h-screen`} >
        <NavBar />
        <main className="w-screen h-screen">{children}</main>
      </body>
    </html>
  );
}
