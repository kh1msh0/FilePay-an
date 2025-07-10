import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export const metadata: Metadata = {
  title: "About Us - FilePay",
  description: "Learn about FilePay's mission to empower creators with secure file selling solutions.",
  keywords: "about filepay, digital marketplace, creator platform, file selling",
  openGraph: {
    title: "About Us - FilePay",
    description: "Learn about FilePay's mission to empower creators with secure file selling solutions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - FilePay",
    description: "Learn about FilePay's mission to empower creators with secure file selling solutions.",
  },
}

export default function AboutPage() {
  return <AboutPageClient />
}
