import type { Metadata } from "next"
import ProductPageClient from "./ProductPageClient"

type Props = {
  params: { id: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `Product ${params.id} - FilePay`,
    description: "Purchase and download digital files securely with FilePay",
  }
}

export default function ProductPage({ params }: Props) {
  return <ProductPageClient id={params.id} />
}
