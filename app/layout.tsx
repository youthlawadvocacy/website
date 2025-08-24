import type React from "react"
import type { Metadata } from "next"
import { EB_Garamond } from "next/font/google"
import "./globals.css"

const ebGaramond = EB_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-eb-garamond",
})

export const metadata: Metadata = {
  title: "Youth Law Advocacy - Helping Youth Access Law",
  description:
    "YLA is a youth-led non-profit organization based in the GTA, Canada. We help youth gain insight into the world of Law through panels, competitions, and educational events.",
  keywords:
    "youth law advocacy, legal education, law competitions, youth non-profit, legal panels, GTA legal education, law students, legal careers",
  authors: [{ name: "Youth Law Advocacy" }],
  creator: "Youth Law Advocacy",
  publisher: "Youth Law Advocacy",
  generator: "Adil Mukhi",
  metadataBase: new URL("https://youthlaw.ca"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://youthlaw.ca",
    siteName: "Youth Law Advocacy",
    title: "Youth Law Advocacy - Helping Youth Access Law",
    description:
      "YLA is a youth-led non-profit organization based in the GTA, Canada. We help youth gain insight into the world of Law through panels, competitions, and educational events.",
    images: [
      {
        url: "/yla-social-preview.png",
        width: 1200,
        height: 630,
        alt: "Youth Law Advocacy - Helping Youth Access Law",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Youth Law Advocacy - Helping Youth Access Law",
    description:
      "YLA is a youth-led non-profit organization helping youth gain insight into the world of Law through panels, competitions, and educational events.",
    images: ["/yla-social-preview.png"],
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
  verification: {
    google: "your-google-verification-code",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${ebGaramond.variable} antialiased`}>
      <head>
        <link rel="icon" href="/yla-logo.png" />
        <link rel="apple-touch-icon" href="/yla-logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Youth Law Advocacy",
              alternateName: "YLA",
              url: "https://youthlaw.ca",
              logo: "https://youthlaw.ca/yla-logo.png",
              description:
                "YLA is a youth-led non-profit organization based in the GTA, Canada. We help youth gain insight into the world of Law through panels, competitions, and educational events.",
              foundingDate: "2024",
              address: {
                "@type": "PostalAddress",
                addressLocality: "Toronto",
                addressRegion: "ON",
                addressCountry: "CA",
              },
              contactPoint: {
                "@type": "ContactPoint",
                email: "youthlawadvocacy@gmail.com",
                contactType: "General Inquiries",
              },
              sameAs: ["https://www.instagram.com/theyla.ca/", "https://www.linkedin.com/company/youth-law-advocacy"],
            }),
          }}
        />
      </head>
      <body className="font-serif">{children}</body>
    </html>
  )
}
