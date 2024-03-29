import type { Metadata } from "next";
import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://ckeanu.vercel.app/"),
  alternates: {
    canonical: "/",
  },
  title: "Ckeanu Richer Locson",
  description: "This is my personal website",
  keywords: [
    "Ckeanu Richer Locson",
    "Ckeanu Portfolio",
    "Ckeanu",
    "Richer",
    "Locson",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={montserrat.className} suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
}
