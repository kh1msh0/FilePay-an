import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact FilePay Support - Get Help & Connect",
  description:
    "Need help with FilePay? Contact our support team for assistance with selling digital files, payments, or technical questions. We're here to help.",
  keywords: [
    "contact filepay",
    "customer support",
    "help center",
    "digital file selling support",
    "payment help",
    "technical support",
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
    title: "Contact FilePay Support - Get Help & Connect",
    description:
      "Need help with FilePay? Contact our support team for assistance with selling digital files, payments, or technical questions.",
    url: "https://filepay.app/contact",
    siteName: "FilePay",
    images: [
      {
        url: "https://filepay.app/og-contact.png",
        width: 1200,
        height: 630,
        alt: "Contact FilePay Support",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact FilePay Support - Get Help & Connect",
    description:
      "Need help with FilePay? Contact our support team for assistance with selling digital files, payments, or technical questions.",
    images: ["https://filepay.app/og-contact.png"],
    creator: "@filepay",
  },
  alternates: {
    canonical: "https://filepay.app/contact",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
