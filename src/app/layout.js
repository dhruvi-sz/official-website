import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./footer";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "SignalZero",
  description: "Assess. Detect. Investigate. Remediate.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="z-10 w-full">
          <div className="absolute top-4 right-0">
            <a className="" rel="noopener noreferrer">
              <Image
                src="/sz_logo.png"
                alt="Signal Zero Logo"
                width={300}
                height={287}
                priority
                className="md:w-[20rem] w-[12rem]"
              />
            </a>
          </div>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
