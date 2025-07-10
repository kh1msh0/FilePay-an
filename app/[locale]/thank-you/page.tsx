import type { Metadata } from "next"
import ThankYouClientPage from "./ThankYouClientPage"

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const isSpanish = locale === "es"

  return {
    title: isSpanish ? "Descarga tu archivo | FilePay" : "Download your file | FilePay",
    description: isSpanish
      ? "¡Gracias por tu compra! Tu archivo digital está listo para descargar. Acceso instantáneo garantizado."
      : "Thank you for your purchase! Your digital file is ready to download. Instant access guaranteed.",
    keywords: isSpanish
      ? ["descargar archivo", "compra completada", "archivo digital", "descarga instantánea"]
      : ["download file", "purchase complete", "digital file", "instant download"],
    robots: {
      index: false,
      follow: true,
      googleBot: {
        index: false,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    openGraph: {
      title: isSpanish ? "Descarga tu archivo | FilePay" : "Download your file | FilePay",
      description: isSpanish
        ? "¡Gracias por tu compra! Tu archivo digital está listo para descargar."
        : "Thank you for your purchase! Your digital file is ready to download.",
      url: `https://filepay.app/${locale}/thank-you`,
      siteName: "FilePay",
      images: [
        {
          url: "https://filepay.app/og-download.png",
          width: 1200,
          height: 630,
          alt: isSpanish ? "FilePay - Descarga completada" : "FilePay - Download complete",
        },
      ],
      locale: locale === "es" ? "es_ES" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isSpanish ? "Descarga tu archivo | FilePay" : "Download your file | FilePay",
      description: isSpanish
        ? "¡Gracias por tu compra! Tu archivo digital está listo para descargar."
        : "Thank you for your purchase! Your digital file is ready to download.",
      images: ["https://filepay.app/og-download.png"],
      creator: "@filepay",
    },
    alternates: {
      canonical: `https://filepay.app/${locale}/thank-you`,
      languages: {
        en: "https://filepay.app/en/thank-you",
        es: "https://filepay.app/es/thank-you",
      },
    },
  }
}

export default function ThankYouPage({ params: { locale } }: { params: { locale: string } }) {
  return <ThankYouClientPage params={{ locale }} />
}
