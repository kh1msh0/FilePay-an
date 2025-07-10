import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact FilePay - Get Support & Connect With Us",
  description:
    "Need help with FilePay? Contact our support team or reach out with questions about selling digital files.",
  keywords: ["contact filepay", "customer support", "help", "digital file selling support"],
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
    title: "Contact FilePay - Get Support & Connect With Us",
    description:
      "Need help with FilePay? Contact our support team or reach out with questions about selling digital files.",
    url: "https://filepay.app/contact",
    siteName: "FilePay",
    images: [
      {
        url: "https://filepay.app/og-contact.png",
        width: 1200,
        height: 630,
        alt: "Contact FilePay",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact FilePay - Get Support & Connect With Us",
    description:
      "Need help with FilePay? Contact our support team or reach out with questions about selling digital files.",
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
