import type { Metadata } from "next"
import TermsClientPage from "./TermsClientPage"

export const metadata: Metadata = {
  title: "Terms of Service & Privacy Policy | FilePay",
  description:
    "Read FilePay's terms of service, privacy policy, and legal information for selling digital files. Understand our policies and user agreements.",
  keywords: [
    "filepay terms",
    "terms of service",
    "privacy policy",
    "legal information",
    "digital file selling terms",
    "user agreement",
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
    title: "Terms of Service & Privacy Policy | FilePay",
    description: "Read FilePay's terms of service, privacy policy, and legal information for selling digital files.",
    url: "https://filepay.app/terms",
    siteName: "FilePay",
    images: [
      {
        url: "https://filepay.app/og-terms.png",
        width: 1200,
        height: 630,
        alt: "FilePay Terms of Service",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service & Privacy Policy | FilePay",
    description: "Read FilePay's terms of service, privacy policy, and legal information for selling digital files.",
    images: ["https://filepay.app/og-terms.png"],
    creator: "@filepay",
  },
  alternates: {
    canonical: "https://filepay.app/terms",
  },
}

export default function TermsPage() {
  return <TermsClientPage />
}
