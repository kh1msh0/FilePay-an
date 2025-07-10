import type { Metadata } from "next"
import TermsClientPage from "./TermsClientPage"

export const metadata: Metadata = {
  title: "Terms of Service - FilePay",
  description:
    "Read FilePay's terms of service and understand our policies for using our digital file selling platform.",
  keywords: "terms of service, filepay terms, legal, policies, user agreement",
  openGraph: {
    title: "Terms of Service - FilePay",
    description:
      "Read FilePay's terms of service and understand our policies for using our digital file selling platform.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Terms of Service - FilePay",
    description:
      "Read FilePay's terms of service and understand our policies for using our digital file selling platform.",
  },
}

export default function TermsPage() {
  return <TermsClientPage />
}
