import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export const metadata: Metadata = {
  title: "Contact Us - FilePay",
  description: "Get in touch with the FilePay team. We're here to help with any questions about our platform.",
  keywords: "contact filepay, support, help, customer service",
  openGraph: {
    title: "Contact Us - FilePay",
    description: "Get in touch with the FilePay team. We're here to help with any questions about our platform.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us - FilePay",
    description: "Get in touch with the FilePay team. We're here to help with any questions about our platform.",
  },
}

export default function ContactPage() {
  return <ContactPageClient />
}
