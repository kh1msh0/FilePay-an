"use client"
import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ShoppingCart, ArrowLeft, FileText, Shield, Download } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

// Mock data for products
const mockProducts = {
  "12345": {
    id: "12345",
    title: "Complete Web Development Course",
    description:
      "A comprehensive guide to modern web development including HTML, CSS, JavaScript, React, and Node.js. Perfect for beginners and intermediate developers looking to enhance their skills.",
    price: 29.99,
    currency: "€",
    previewUrl: "/placeholder.jpg",
    fileType: "PDF",
    fileSize: "15.2 MB",
    checkoutUrl: "https://checkout.lemonsqueezy.com/placeholder",
  },
  "67890": {
    id: "67890",
    title: "UI/UX Design Templates Pack",
    description:
      "Professional design templates for web and mobile applications. Includes Figma files, Sketch files, and exported assets ready for development.",
    price: 49.99,
    currency: "€",
    previewUrl: "/placeholder.jpg",
    fileType: "ZIP",
    fileSize: "125.8 MB",
    checkoutUrl: "https://checkout.lemonsqueezy.com/placeholder",
  },
  placeholder: {
    id: "placeholder",
    title: "Sample Digital Product",
    description:
      "This is a sample digital product created through FilePay. It demonstrates how your customers will see and purchase your files.",
    price: 19.99,
    currency: "€",
    previewUrl: "/placeholder.jpg",
    fileType: "PDF",
    fileSize: "8.5 MB",
    checkoutUrl: "https://checkout.lemonsqueezy.com/placeholder",
  },
}

interface ProductPageClientProps {
  id: string
}

export default function ProductPageClient({ id }: ProductPageClientProps) {
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate API call
    const fetchProduct = async () => {
      setLoading(true)
      await new Promise((resolve) => setTimeout(resolve, 500)) // Simulate loading

      const productData = mockProducts[id as keyof typeof mockProducts] || mockProducts.placeholder
      setProduct(productData)
      setLoading(false)
    }

    fetchProduct()
  }, [id])

  const handleBuyNow = () => {
    if (product?.checkoutUrl) {
      window.open(product.checkoutUrl, "_blank")
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-orange-900/20 dark:to-pink-900/20">
        <header className="border-b border-white/20 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
            >
              FilePay
            </Link>
            <div className="flex items-center gap-4">
              <ThemeToggle />
            </div>
          </div>
        </header>
        <div className="container mx-auto px-4 py-16 flex justify-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500"></div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-orange-900/20 dark:to-pink-900/20">
        <header className="border-b border-white/20 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80">
          <div className="container mx-auto px-4 py-4 flex justify-between items-center">
            <Link
              href="/"
              className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
            >
              FilePay
            </Link>
            <div className="flex items-center gap-4">
              <ThemeToggle />
            </div>
          </div>
        </header>
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Product Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300 mb-8">The product you're looking for doesn't exist.</p>
          <Link href="/" className="text-orange-600 hover:text-orange-700 dark:text-orange-400">
            ← Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-orange-900/20 dark:to-pink-900/20">
      {/* Header */}
      <header className="border-b border-white/20 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
          >
            FilePay
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Back Button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-orange-600 dark:hover:text-orange-400 transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </Link>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Preview Section */}
            <div className="space-y-4">
              <Card className="border-0 shadow-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 rounded-lg flex items-center justify-center mb-4">
                    {product.previewUrl ? (
                      <Image
                        src={product.previewUrl || "/placeholder.svg"}
                        alt={`Preview of ${product.title}`}
                        width={400}
                        height={300}
                        className="rounded-lg object-cover w-full h-full"
                      />
                    ) : (
                      <div className="text-center">
                        <FileText className="w-16 h-16 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500 dark:text-gray-400">Preview not available</p>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge
                      variant="secondary"
                      className="bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                    >
                      {product.fileType}
                    </Badge>
                    <span className="text-sm text-gray-500 dark:text-gray-400">{product.fileSize}</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Product Details */}
            <div className="space-y-6">
              <Card className="border-0 shadow-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                    {product.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 dark:text-gray-300 text-base leading-relaxed">
                    {product.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Price */}
                  <div className="flex items-center gap-2">
                    <span className="text-3xl font-bold text-green-600 dark:text-green-400">
                      {product.currency}
                      {product.price}
                    </span>
                  </div>

                  {/* Buy Now Button */}
                  <Button
                    onClick={handleBuyNow}
                    className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 text-lg py-6"
                  >
                    <ShoppingCart className="w-5 h-5 mr-2" />
                    Buy Now
                  </Button>

                  {/* Trust Signals */}
                  <div className="space-y-3 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <Shield className="w-4 h-4 text-green-500" />
                      Secure payments powered by Lemon Squeezy
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
                      <Download className="w-4 h-4 text-blue-500" />
                      Instant download after payment
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Additional Info */}
              <Card className="border-0 shadow-lg bg-white/60 dark:bg-gray-900/60 backdrop-blur-sm">
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">What you'll get:</h3>
                  <ul className="text-sm text-gray-600 dark:text-gray-300 space-y-1">
                    <li>• Instant access to download</li>
                    <li>• High-quality {product.fileType} file</li>
                    <li>• Lifetime access to your purchase</li>
                    <li>• 30-day money-back guarantee</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
