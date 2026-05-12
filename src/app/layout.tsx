import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileStickyBar from "@/components/layout/MobileStickyBar";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.website),
  title: {
    default: siteConfig.seo.home.title,
    template: `%s | ${siteConfig.companyName}`,
  },
  description: siteConfig.seo.home.description,
  keywords: siteConfig.seo.home.keywords,
  openGraph: {
    type: "website",
    locale: "de_DE",
    url: siteConfig.website,
    siteName: siteConfig.companyName,
    title: siteConfig.seo.home.title,
    description: siteConfig.seo.home.description,
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.seo.home.title,
    description: siteConfig.seo.home.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  alternates: {
    canonical: siteConfig.website,
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": siteConfig.website,
  name: siteConfig.companyName,
  description: siteConfig.tagline,
  url: siteConfig.website,
  telephone: siteConfig.phone,
  email: siteConfig.email,
  foundingDate: siteConfig.foundedYear,
  address: {
    "@type": "PostalAddress",
    streetAddress: siteConfig.street,
    addressLocality: siteConfig.city,
    postalCode: siteConfig.postalCode,
    addressRegion: siteConfig.state,
    addressCountry: "DE",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "50.1312",
    longitude: "8.9161",
  },
  areaServed: siteConfig.serviceAreas.map((a) => ({
    "@type": "City",
    name: a.name,
  })),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Energieleistungen",
    itemListElement: [
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Photovoltaik Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Wärmepumpe Installation" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Energieberatung" } },
      { "@type": "Offer", itemOffered: { "@type": "Service", name: "Batteriespeicher" } },
    ],
  },
  priceRange: "€€€",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "17:00",
    },
  ],
  sameAs: [siteConfig.website],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="de" className="h-full">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body className="min-h-full flex flex-col antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <MobileStickyBar />
      </body>
    </html>
  );
}
