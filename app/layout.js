import { Inter } from "next/font/google";
import "./globals.css";
import Lenis1 from "./components/lenis1";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Lenis1>{children}</Lenis1>
      </body>
    </html>
  );
}
