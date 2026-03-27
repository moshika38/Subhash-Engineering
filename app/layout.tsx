import type { Metadata } from "next";
import { Geist, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Subhash Engineering | Precision Metal Works Sri Lanka",
  description:
    "Subhash Engineering - Sri Lanka's trusted metal fabrication company. Iron works, welding, steel structures, custom fabrication. Located in Hali-Ela. Call 076 7705 308.",
  keywords: [
    "Subhash Engineering",
    "Subash Engineering",
    "metal fabrication Sri Lanka",
    "welding Sri Lanka",
    "steel structures Sri Lanka",
    "iron works Hali-Ela",
    "engineering company Sri Lanka",
  ],
  authors: [{ name: "Subhash Engineering" }],
  metadataBase: new URL("https://www.subhashengineering.lk"),
  alternates: {
    canonical: "https://www.subhashengineering.lk",
  },
  openGraph: {
    title: "Subhash Engineering | Precision Metal Works",
    description:
      "Sri Lanka's trusted metal fabrication & welding company since 2007.",
    url: "https://www.subhashengineering.lk",
    siteName: "Subhash Engineering",
    locale: "en_LK",
    type: "website",
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Subhash Engineering",
  alternateName: "Subash Engineering",
  url: "https://www.subhashengineering.lk",
  telephone: "+94767705308",
  email: "manojprabhath17@gmail.com",
  foundingDate: "2007",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No.22, Keeriyagolla, Hali-Ela",
    addressCountry: "LK",
  },
  description:
    "Precision metal engineering, fabrication and welding services in Sri Lanka since 2007",
  openingHours: "Mo-Su 08:00-17:00",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${inter.variable} h-full font-sans antialiased scroll-smooth`}
      suppressHydrationWarning
    >
      <body
        className="font-sans min-h-full flex flex-col"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
        />
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}