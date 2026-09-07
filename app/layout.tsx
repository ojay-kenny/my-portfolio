import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

// Importing Lato font with the weights we might need
const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"]
});

export const metadata: Metadata = {
  title: "My Portfolio | Design, Marketing, Logistics",
  description: "Multi-disciplinary portfolio showcasing Graphic Design, Digital Marketing, and Logistics Management.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} bg-primary-black text-secondary-white antialiased`}>
        {children}
      </body>
    </html>
  );
}