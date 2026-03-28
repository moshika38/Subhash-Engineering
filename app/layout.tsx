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
  title: {
    default: "Subhash Engineering | Precision Metal Works Sri Lanka",
    template: "%s | Subhash Engineering",
  },
  description:
    "Subhash Engineering – Sri Lanka's #1 precision metal fabrication company in Hali-Ela. Expert iron works, welding, steel structures & custom fabrication since 2007. Call 076 7705 308 for a free quote.",
  keywords: [
    "Subhash",
    "Subhash Engineering",
    "Subhash Engineering Sri Lanka",
    "Subash Engineering",
    "metal fabrication Sri Lanka",
    "welding Sri Lanka",
    "steel structures Sri Lanka",
    "iron works Hali-Ela",
    "engineering company Sri Lanka",
    "custom metal fabrication",
    "gates and grills Sri Lanka",
    "structural steel Sri Lanka",
    "Hali-Ela engineering",
    "Badulla engineering company",
  ],
  authors: [{ name: "Subhash Engineering" }],
  creator: "Subhash Engineering",
  publisher: "Subhash Engineering",
  metadataBase: new URL("https://www.subhashengineering.lk"),
  alternates: {
    canonical: "https://www.subhashengineering.lk",
  },
  openGraph: {
    title: "Subhash Engineering | Precision Metal Works Sri Lanka",
    description:
      "Sri Lanka's trusted metal fabrication & welding company since 2007. Iron works, steel structures, custom fabrication in Hali-Ela.",
    url: "https://www.subhashengineering.lk",
    siteName: "Subhash Engineering",
    locale: "en_LK",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Subhash Engineering – Precision Metal Works Sri Lanka",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Subhash Engineering | Precision Metal Works Sri Lanka",
    description:
      "Sri Lanka's trusted metal fabrication & welding company since 2007.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const schemaData = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "EngineeringFirm"],
  name: "Subhash Engineering",
  alternateName: ["Subash Engineering", "Subhash Engineering Sri Lanka"],
  url: "https://www.subhashengineering.lk",
  logo: "https://www.subhashengineering.lk/images/logo.png",
  image: "https://www.subhashengineering.lk/images/og-image.jpg",
  telephone: "+94767705308",
  email: "manojprabhath17@gmail.com",
  foundingDate: "2007",
  priceRange: "$$",
  currenciesAccepted: "LKR",
  paymentAccepted: "Cash, Bank Transfer",
  address: {
    "@type": "PostalAddress",
    streetAddress: "No.22, Keeriyagolla, Hali-Ela",
    addressLocality: "Hali-Ela",
    addressRegion: "Uva",
    postalCode: "90100",
    addressCountry: "LK",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 6.9271,
    longitude: 81.0622,
  },
  areaServed: [
    { "@type": "Country", name: "Sri Lanka" },
    { "@type": "City", name: "Hali-Ela" },
    { "@type": "City", name: "Badulla" },
    { "@type": "City", name: "Kandy" },
    { "@type": "City", name: "Colombo" },
  ],
  description:
    "Subhash Engineering is Sri Lanka's leading precision metal fabrication and welding company based in Hali-Ela since 2007. Services include iron works, custom fabrication, steel structures, gates & grills.",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Metal Fabrication Services",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Iron Works" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Welding Solutions" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Custom Fabrication" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Steel Structures" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Gates & Grills" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Maintenance & Anti-Rust" } },
    ],
  },
  sameAs: [
    "https://www.facebook.com/subhashengineering",
  ],
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