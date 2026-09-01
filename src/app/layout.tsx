import type { Metadata } from "next";
import { Libre_Caslon_Text, Inter } from "next/font/google";
import "./globals.css";

const libreCaslon = Libre_Caslon_Text({
  variable: "--font-libre-caslon",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Adede & Co Advocates",
  description:
    "Boutique Nairobi law firm breaking down the law for everyday use. Corporate, commercial, conveyancing, tax, employment, insurance, immigration and intellectual property law.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${libreCaslon.variable} ${inter.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
