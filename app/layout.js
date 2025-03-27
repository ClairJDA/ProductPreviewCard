import { Montserrat, Fraunces } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["500", "700"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["700"],
});

export const metadata = {
  title: "Product preview card component",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon/icon.png" type="image/png" sizes="32x32" />
      </head>
      <body
        className={`${montserrat.variable} ${fraunces.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
