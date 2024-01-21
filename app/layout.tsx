import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";
import Logo from "@/components/ui/Logo";
import Footer from "@/components/ui/Footer";
import { Card, CardHeader, CardBody, CardFooter, Divider } from "@nextui-org/react";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';


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
        <Card shadow="lg" className="max-w-[400px] mx-2 antialiased">
      <CardHeader className="flex justify-center text-center">
      <Logo />
      </CardHeader>
      <Divider />
      <CardBody >
        
          {children}
      </CardBody>
      <Divider />
      <CardFooter className="flex justify-center">
        <Footer />
      </CardFooter>
    </Card>
        </div>

        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
