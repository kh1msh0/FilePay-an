import type { Metadata } from "next"
import PricingPageClient from "./PricingPageClient"

export const metadata: Metadata = {
  title: "Pricing Plans - Simple & Transparent | FilePay",
  description:
    "FilePay pricing is simple: pay only when you sell. 5% + $0.30 per transaction. No monthly fees, no setup costs. Start selling digital files for free.",
  keywords: [
    "filepay pricing",
    "digital file selling cost",
    "transaction fees",
    "no monthly fees",
    "pay per sale",
    "creator pricing",
  ],
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
  openGraph: {
    title: "Pricing Plans - Simple & Transparent | FilePay",
    description:
      "FilePay pricing is simple: pay only when you sell. 5% + $0.30 per transaction. No monthly fees, no setup costs.",
    url: "https://filepay.app/pricing",
    siteName: "FilePay",
    images: [
      {
        url: "https://filepay.app/og-pricing.png",
        width: 1200,
        height: 630,
        alt: "FilePay Pricing Plans",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pricing Plans - Simple & Transparent | FilePay",
    description:
      "FilePay pricing is simple: pay only when you sell. 5% + $0.30 per transaction. No monthly fees, no setup costs.",
    images: ["https://filepay.app/og-pricing.png"],
    creator: "@filepay",
  },
  alternates: {
    canonical: "https://filepay.app/pricing",
  },
}

export default function PricingPage() {
  return <PricingPageClient />
}
