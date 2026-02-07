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
  metadataBase: new URL("https://ss-impresaedile.it"),
  title: "S&S Impresa Edile | Costruzioni e Ristrutturazioni a Treviso",
  description:
    "S&S Impresa Edile - Impresa di costruzioni e ristrutturazioni a Treviso e provincia. Lavori edili, coperture, pavimentazioni e scavi. Richiedi un preventivo gratuito.",
  keywords:
    "impresa edile, costruzioni, ristrutturazioni, Treviso, lavori edili, coperture, pavimentazioni, scavi, preventivo gratuito, impresa edile Treviso, ristrutturazione casa Treviso, costruzione Treviso, edilizia Veneto",
  authors: [{ name: "S&S Impresa Edile" }],
  openGraph: {
    title: "S&S Impresa Edile | Costruzioni e Ristrutturazioni a Treviso",
    description:
      "Impresa di costruzioni e ristrutturazioni a Treviso e provincia. Richiedi un preventivo gratuito.",
    url: "https://ss-impresaedile.it",
    siteName: "S&S Impresa Edile",
    type: "website",
    locale: "it_IT",
    images: [
      {
        url: "/images/hero.jpg",
        width: 1200,
        height: 630,
        alt: "S&S Impresa Edile - Costruzioni e Ristrutturazioni a Treviso",
      },
    ],
  },
  verification: {
    google: "BihEeHqvCVYaXc3UpjYxDlWgWv8VzJC2lTnHmkEVRSQ",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ss-impresaedile.it",
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "S&S Impresa Edile",
    description:
      "Impresa di costruzioni e ristrutturazioni a Treviso e provincia. Lavori edili, coperture, pavimentazioni e scavi.",
    url: "https://ss-impresaedile.it",
    telephone: "+393884293583",
    email: "selminshakiroski@icloud.com",
    address: {
      "@type": "PostalAddress",
      addressRegion: "Veneto",
      addressLocality: "Treviso",
      addressCountry: "IT",
    },
    areaServed: {
      "@type": "Place",
      name: "Treviso e provincia",
    },
    priceRange: "$$",
    image: "https://ss-impresaedile.it/images/hero.jpg",
    sameAs: [],
    serviceType: [
      "Costruzioni",
      "Ristrutturazioni",
      "Manutenzione edile",
      "Pavimentazioni",
      "Coperture",
      "Scavi",
    ],
  };

  return (
    <html lang="it">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
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
