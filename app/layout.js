import { Inter } from 'next/font/google'
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: "EduSync",
  description: "EduSync offers seamless operations, smarter decisions, and better outcomes for modern school management.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased`}
      >
        <Navbar/>
        <main>{children}</main>
      </body>
    </html>
  );
}
