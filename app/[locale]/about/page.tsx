import type { Metadata } from "next"
import AboutPageClient from "./AboutPageClient"

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const isSpanish = locale === "es"

  return {
    title: isSpanish ? "Acerca de FilePay | Nuestra Historia" : "About FilePay | Our Story",
    description: isSpanish
      ? "Conoce la historia detrás de FilePay. Construido por un desarrollador independiente para hacer que vender archivos digitales sea simple y accesible para todos."
      : "Learn the story behind FilePay. Built by a solo developer to make selling digital files simple and accessible for everyone.",
    keywords: isSpanish
      ? ["acerca de filepay", "historia empresa", "desarrollador independiente", "misión", "valores"]
      : ["about filepay", "company story", "solo developer", "mission", "values"],
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
      title: isSpanish ? "Acerca de FilePay | Nuestra Historia" : "About FilePay | Our Story",
      description: isSpanish
        ? "Conoce la historia detrás de FilePay. Construido por un desarrollador independiente para hacer que vender archivos digitales sea simple."
        : "Learn the story behind FilePay. Built by a solo developer to make selling digital files simple and accessible.",
      url: `https://filepay.app/${locale}/about`,
      siteName: "FilePay",
      images: [
        {
          url: "https://filepay.app/og-about.png",
          width: 1200,
          height: 630,
          alt: isSpanish ? "FilePay - Nuestra Historia" : "FilePay - Our Story",
        },
      ],
      locale: locale === "es" ? "es_ES" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isSpanish ? "Acerca de FilePay | Nuestra Historia" : "About FilePay | Our Story",
      description: isSpanish
        ? "Conoce la historia detrás de FilePay. Construido para hacer que vender archivos digitales sea simple."
        : "Built to make selling digital files simple and accessible.",
      images: ["https://filepay.app/og-about.png"],
      creator: "@filepay",
    },
    alternates: {
      canonical: `https://filepay.app/${locale}/about`,
      languages: {
        en: "https://filepay.app/en/about",
        es: "https://filepay.app/es/about",
      },
    },
  }
}

export default function AboutPage({ params }: { params: { locale: string } }) {
  return <AboutPageClient params={params} />
}
