import type { Metadata } from "next";
import { Inter, Poppins, Rubik } from "next/font/google";
import "./globals.css";
import NavBar from "./NavBar";
import AuthProvider from "../../auth/Provider";

const inter = Inter({ subsets: ["latin"] });

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500']
})

const rubik = Rubik({
  subsets: ['latin'],
})
export const metadata: Metadata = {
  title: "VagaNet",
  description: "Etec TCC",
  icons: {
    icon: './icon.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">
      <body className={`${rubik.className} `} >
        <AuthProvider>
          <NavBar />
          <main className="w-screen h-full">{children}</main>
        </AuthProvider>
      </body>
    </html>
  );
}
