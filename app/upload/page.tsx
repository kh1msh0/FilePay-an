import type { Metadata } from "next"
import UploadPageClient from "./UploadPageClient"

export const metadata: Metadata = {
  title: "Upload your digital file | FilePay",
  description:
    "Upload your PDF, video, or digital file to FilePay. Set your price and generate a secure payment link in minutes.",
  keywords: [
    "upload digital file",
    "sell pdf",
    "sell video files",
    "digital file upload",
    "create payment link",
    "monetize content",
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
    title: "Upload your digital file | FilePay",
    description:
      "Upload your PDF, video, or digital file to FilePay. Set your price and generate a secure payment link in minutes.",
    url: "https://filepay.app/upload",
    siteName: "FilePay",
    images: [
      {
        url: "https://filepay.app/og-upload.png",
        width: 1200,
        height: 630,
        alt: "Upload your digital file to FilePay",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Upload your digital file | FilePay",
    description:
      "Upload your PDF, video, or digital file to FilePay. Set your price and generate a secure payment link in minutes.",
    images: ["https://filepay.app/og-upload.png"],
    creator: "@filepay",
  },
  alternates: {
    canonical: "https://filepay.app/upload",
  },
}

export default function UploadPage() {
  return <UploadPageClient />
}
