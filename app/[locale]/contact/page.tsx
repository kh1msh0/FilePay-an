import type { Metadata } from "next"
import ContactPageClient from "./ContactPageClient"

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string }
}): Promise<Metadata> {
  const isSpanish = locale === "es"

  return {
    title: isSpanish ? "Contacto | FilePay" : "Contact | FilePay",
    description: isSpanish
      ? "¿Tienes preguntas sobre FilePay? Ponte en contacto con nosotros. Estamos aquí para ayudarte con cualquier consulta o soporte que necesites."
      : "Have questions about FilePay? Get in touch with us. We're here to help with any questions or support you need.",
    keywords: isSpanish
      ? ["contacto filepay", "soporte", "ayuda", "preguntas", "servicio al cliente"]
      : ["contact filepay", "support", "help", "questions", "customer service"],
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
      title: isSpanish ? "Contacto | FilePay" : "Contact | FilePay",
      description: isSpanish
        ? "¿Tienes preguntas sobre FilePay? Ponte en contacto con nosotros. Estamos aquí para ayudarte."
        : "Have questions about FilePay? Get in touch with us. We're here to help with any questions.",
      url: `https://filepay.app/${locale}/contact`,
      siteName: "FilePay",
      images: [
        {
          url: "https://filepay.app/og-contact.png",
          width: 1200,
          height: 630,
          alt: isSpanish ? "FilePay - Contacto" : "FilePay - Contact",
        },
      ],
      locale: locale === "es" ? "es_ES" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: isSpanish ? "Contacto | FilePay" : "Contact | FilePay",
      description: isSpanish
        ? "¿Tienes preguntas sobre FilePay? Ponte en contacto con nosotros."
        : "Have questions about FilePay? Get in touch with us.",
      images: ["https://filepay.app/og-contact.png"],
      creator: "@filepay",
    },
    alternates: {
      canonical: `https://filepay.app/${locale}/contact`,
      languages: {
        en: "https://filepay.app/en/contact",
        es: "https://filepay.app/es/contact",
      },
    },
  }
}

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  return <ContactPageClient params={{ locale }} />
}
