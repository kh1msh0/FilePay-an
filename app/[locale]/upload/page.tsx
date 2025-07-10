import type { Metadata } from "next"
import UploadPageClient from "./UploadPageClient"

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const isSpanish = locale === "es"

  return {
    title: isSpanish ? "Sube tu archivo digital | FilePay" : "Upload your digital file | FilePay",
    description: isSpanish
      ? "Sube tu archivo, establece un precio y genera tu enlace de pago en segundos. Comienza a vender ahora."
      : "Upload your file, set a price, and generate your payment link in seconds. Start selling now.",
    keywords: isSpanish
      ? ["subir archivo", "generar enlace pago", "vender archivo digital", "crear producto digital"]
      : ["upload file", "generate payment link", "sell digital file", "create digital product"],
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
      title: isSpanish ? "Sube tu archivo digital | FilePay" : "Upload your digital file | FilePay",
      description: isSpanish
        ? "Sube tu archivo, establece un precio y genera tu enlace de pago en segundos. Comienza a vender ahora."
        : "Upload your file, set a price, and generate your payment link in seconds. Start selling now.",
      url: `https://filepay.app/${locale}/upload`,
      siteName: "FilePay",
      images: [
        {
          url: "https://filepay.app/og-upload.png",
          width: 1200,
          height: 630,
          alt: isSpanish ? "FilePay - Sube tu archivo" : "FilePay - Upload your file",
        },
      ],
      locale: locale === "es" ? "es_ES" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isSpanish ? "Sube tu archivo digital | FilePay" : "Upload your digital file | FilePay",
      description: isSpanish
        ? "Sube tu archivo, establece un precio y genera tu enlace de pago en segundos."
        : "Upload your file, set a price, and generate your payment link in seconds.",
      images: ["https://filepay.app/og-upload.png"],
      creator: "@filepay",
    },
    alternates: {
      canonical: `https://filepay.app/${locale}/upload`,
      languages: {
        en: "https://filepay.app/en/upload",
        es: "https://filepay.app/es/upload",
      },
    },
  }
}

export default function UploadPage({ params }: { params: { locale: string } }) {
  return <UploadPageClient params={params} />
}
