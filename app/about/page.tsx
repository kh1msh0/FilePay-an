import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "About FilePay - Empowering Digital Creators",
  description:
    "Learn about FilePay's mission to make selling digital files simple, secure, and profitable for creators worldwide. Join thousands of successful creators.",
  keywords: [
    "about filepay",
    "digital creator platform",
    "file selling mission",
    "creator economy",
    "digital marketplace story",
    "secure file sharing",
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
    title: "About FilePay - Empowering Digital Creators",
    description:
      "Learn about FilePay's mission to make selling digital files simple, secure, and profitable for creators worldwide.",
    url: "https://filepay.app/about",
    siteName: "FilePay",
    images: [
      {
        url: "https://filepay.app/og-about.png",
        width: 1200,
        height: 630,
        alt: "About FilePay - Our Story",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About FilePay - Empowering Digital Creators",
    description:
      "Learn about FilePay's mission to make selling digital files simple, secure, and profitable for creators worldwide.",
    images: ["https://filepay.app/og-about.png"],
    creator: "@filepay",
  },
  alternates: {
    canonical: "https://filepay.app/about",
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
