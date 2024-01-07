import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["600"],
  style: ["normal"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "French Words",
  description:
    "French to English word matching game, made by Mehmet Erim Gökhan",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <div className="min-h-screen min-w-full flex justify-center items-center">
          {children}
        </div>
      </body>
    </html>
  );
}
