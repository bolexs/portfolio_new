import type { Metadata } from "next"
import { Outfit } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"
import type React from "react" // Import React
import { ThemeProvider } from "@/components/theme-provider"

// Use Outfit as our primary font - modern, clean and highly readable
const outfit = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
})

const siteUrl = "https://bobas.tech"

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Boluwatife Ade-ojo — Infrastructure & Backend Engineer",
    template: "%s — Boluwatife Ade-ojo",
  },
  description:
    "Infrastructure engineer and backend developer based in Nigeria. I design, automate, and scale the cloud platforms that power great products.",
  keywords: [
    "Boluwatife Ade-ojo",
    "Infrastructure Engineer",
    "Backend Engineer",
    "DevOps Engineer",
    "Cloud Architect",
    "Software Engineer Nigeria",
    "Kubernetes",
    "Terraform",
    "AWS",
  ],
  authors: [{ name: "Boluwatife Ade-ojo" }],
  creator: "Boluwatife Ade-ojo",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Boluwatife Ade-ojo",
    title: "Boluwatife Ade-ojo — Infrastructure & Backend Engineer",
    description:
      "Infrastructure engineer and backend developer. I design, automate, and scale the cloud platforms that power great products.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Boluwatife Ade-ojo — Infrastructure & Backend Engineer",
    description:
      "Infrastructure engineer and backend developer. I design, automate, and scale the cloud platforms that power great products.",
    creator: "@bolex396",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Boluwatife Ade-ojo",
  url: siteUrl,
  image: `${siteUrl}/opengraph-image`,
  jobTitle: "Infrastructure & Backend Engineer",
  description:
    "Infrastructure engineer and backend developer based in Nigeria, focused on cloud architecture, DevOps, and scalable backend systems.",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NG",
  },
  email: "mailto:boluwatifeadeojo9@gmail.com",
  sameAs: [
    "https://linkedin.com/in/boluwatife-ade-ojo",
    "https://github.com/bolexs",
    "https://twitter.com/bolex396",
  ],
  knowsAbout: [
    "Cloud Infrastructure",
    "Kubernetes",
    "Terraform",
    "AWS",
    "DevOps",
    "Backend Development",
    "System Architecture",
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${outfit.variable}`} suppressHydrationWarning>
      <body className="font-outfit">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}