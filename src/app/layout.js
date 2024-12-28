import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: { default: "Next App", template: "%s | Next Apps" },
  description: "Mainpage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="w-[1400px] mx-auto px-10 min-h-screen flex flex-col justify-between b-container">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
