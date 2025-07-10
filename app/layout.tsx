import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "FilePay - Sell Digital Files with Paywall Links",
    template: "%s | FilePay",
  },
  description:
    "Upload your PDF, video, or file. Set a price. Share the link. Get paid instantly with FilePay's secure digital file selling platform.",
  keywords: [
    "sell digital files",
    "paywall links",
    "digital marketplace",
    "file monetization",
    "secure payments",
    "instant downloads",
  ],
  authors: [{ name: "FilePay Team" }],
  creator: "FilePay",
  publisher: "FilePay",
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
    type: "website",
    locale: "en_US",
    url: "https://filepay.app",
    siteName: "FilePay",
    title: "FilePay - Sell Digital Files with Paywall Links",
    description: "Upload your PDF, video, or file. Set a price. Share the link. Get paid instantly.",
    images: [
      {
        url: "https://filepay.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "FilePay - Sell Digital Files Instantly",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "FilePay - Sell Digital Files with Paywall Links",
    description: "Upload your PDF, video, or file. Set a price. Share the link. Get paid instantly.",
    images: ["https://filepay.app/og-image.png"],
    creator: "@filepay",
  },
  metadataBase: new URL("https://filepay.app"),
  alternates: {
    canonical: "https://filepay.app",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
  },
  generator: "Next.js",
  applicationName: "FilePay",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
