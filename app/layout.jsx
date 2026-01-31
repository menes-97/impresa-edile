import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "S&S Impresa Edile | Costruzioni e Ristrutturazioni a Treviso",
  description: "S&S Impresa Edile - Impresa di costruzioni e ristrutturazioni a Treviso e provincia. Lavori edili, coperture, pavimentazioni e scavi. Richiedi un preventivo gratuito.",
  keywords: "impresa edile, costruzioni, ristrutturazioni, Treviso, lavori edili, coperture, pavimentazioni, scavi, preventivo gratuito",
  openGraph: {
    title: "S&S Impresa Edile | Costruzioni e Ristrutturazioni a Treviso",
    description: "Impresa di costruzioni e ristrutturazioni a Treviso e provincia. Richiedi un preventivo gratuito.",
    type: "website",
    locale: "it_IT",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
