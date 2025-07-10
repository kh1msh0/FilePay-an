import type { Metadata } from "next"
import TermsPageClient from "./TermsPageClient"

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const isSpanish = locale === "es"

  return {
    title: isSpanish ? "Términos y Condiciones | FilePay" : "Terms & Conditions | FilePay",
    description: isSpanish
      ? "Lee los términos y condiciones de FilePay. Información sobre el uso del servicio, responsabilidades del usuario, pagos y políticas de privacidad."
      : "Read FilePay's terms and conditions. Information about service usage, user responsibilities, payments, and privacy policies.",
    keywords: isSpanish
      ? ["términos condiciones", "política privacidad", "términos uso", "condiciones servicio", "legal"]
      : ["terms conditions", "privacy policy", "terms of use", "service conditions", "legal"],
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
      title: isSpanish ? "Términos y Condiciones | FilePay" : "Terms & Conditions | FilePay",
      description: isSpanish
        ? "Lee los términos y condiciones de FilePay. Información sobre el uso del servicio y políticas."
        : "Read FilePay's terms and conditions. Information about service usage and policies.",
      url: `https://filepay.app/${locale}/terms`,
      siteName: "FilePay",
      images: [
        {
          url: "https://filepay.app/og-terms.png",
          width: 1200,
          height: 630,
          alt: isSpanish ? "FilePay - Términos y Condiciones" : "FilePay - Terms & Conditions",
        },
      ],
      locale: locale === "es" ? "es_ES" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isSpanish ? "Términos y Condiciones | FilePay" : "Terms & Conditions | FilePay",
      description: isSpanish ? "Lee los términos y condiciones de FilePay." : "Read FilePay's terms and conditions.",
      images: ["https://filepay.app/og-terms.png"],
      creator: "@filepay",
    },
    alternates: {
      canonical: `https://filepay.app/${locale}/terms`,
      languages: {
        en: "https://filepay.app/en/terms",
        es: "https://filepay.app/es/terms",
      },
    },
  }
}

export default function TermsPage({ params: { locale } }: { params: { locale: string } }) {
  return <TermsPageClient params={{ locale }} />
}
