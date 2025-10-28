import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ConditionalLayout from "@/components/ConditionalLayout";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Dorgham - DJ/Producer | dorgham.me",
  description: "Dorgham, DJ/Producer from Egypt. Based in Hurghada, specializing in melodic techno and indie dance.",
  keywords: "Dorgham, Egyptian DJ, melodic techno, indie dance, Hurghada, Alexandria",
  authors: [{ name: "Dorgham" }],
  robots: "index, follow",
  openGraph: {
    title: "Dorgham - DJ/Producer",
    description: "DJ/Producer from Egypt. Melodic techno and indie dance.",
    url: "https://dorgham.me",
    type: "website",
    images: [
      {
        url: "https://dorgham.me/images/dorgham-og.jpg",
        width: 1200,
        height: 630,
        alt: "Dorgham - DJ/Producer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dorgham - DJ/Producer",
    description: "DJ/Producer from Egypt. Melodic techno and indie dance.",
    images: ["https://dorgham.me/images/dorgham-twitter.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${poppins.variable} antialiased`}
        suppressHydrationWarning
      >
        <ConditionalLayout>
          {children}
        </ConditionalLayout>
      </body>
    </html>
  );
}
