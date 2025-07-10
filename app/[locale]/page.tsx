import type { Metadata } from "next"
import ClientHomePage from "./ClientPage"

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const isSpanish = locale === "es"

  return {
    title: isSpanish ? "Vende archivos digitales al instante con FilePay" : "Sell digital files instantly with FilePay",
    description: isSpanish
      ? "Gana dinero compartiendo tus archivos — seguro, rápido, sin necesidad de tienda online."
      : "Get paid to share your files — secure, fast, no storefront needed.",
    keywords: isSpanish
      ? [
          "vender archivos digitales",
          "enlace de pago",
          "monetizar contenido",
          "plataforma de ventas",
          "archivos seguros",
        ]
      : ["sell digital files", "payment link", "monetize content", "sales platform", "secure files"],
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
      title: isSpanish
        ? "Vende archivos digitales al instante con FilePay"
        : "Sell digital files instantly with FilePay",
      description: isSpanish
        ? "Gana dinero compartiendo tus archivos — seguro, rápido, sin necesidad de tienda online."
        : "Get paid to share your files — secure, fast, no storefront needed.",
      url: `https://filepay.app/${locale}`,
      siteName: "FilePay",
      images: [
        {
          url: "https://filepay.app/og-image.png",
          width: 1200,
          height: 630,
          alt: isSpanish ? "FilePay - Vende archivos digitales" : "FilePay - Sell digital files",
        },
      ],
      locale: locale === "es" ? "es_ES" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isSpanish
        ? "Vende archivos digitales al instante con FilePay"
        : "Sell digital files instantly with FilePay",
      description: isSpanish
        ? "Gana dinero compartiendo tus archivos — seguro, rápido, sin necesidad de tienda online."
        : "Get paid to share your files — secure, fast, no storefront needed.",
      images: ["https://filepay.app/og-image.png"],
      creator: "@filepay",
    },
    alternates: {
      canonical: `https://filepay.app/${locale}`,
      languages: {
        en: "https://filepay.app/en",
        es: "https://filepay.app/es",
      },
    },
  }
}

export default function HomePage({ params: { locale } }: { params: { locale: string } }) {
  return <ClientHomePage params={{ locale }} />
}
