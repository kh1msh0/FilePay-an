"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, CheckCircle, Upload, Euro, Mail, FileText, Loader2 } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function UploadPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    file: null,
    title: "",
    price: "",
    email: "",
  })
  const [copied, setCopied] = useState(false)

  const checkoutLink = "https://filepay.app/checkout/abc123"

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(checkoutLink)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error("Failed to copy link")
    }
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-red-50 to-pink-50 dark:from-gray-900 dark:via-orange-900/20 dark:to-pink-900/20">
      {/* Header */}
      <header className="border-b border-white/20 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 animate-slide-in-left">
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

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-md mx-auto">
          {!isSubmitted ? (
            <Card className="border-0 shadow-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm animate-scale-in">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-orange-400 to-pink-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg animate-float">
                  <Upload className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent animate-fade-in">
                  Upload Your File
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300 animate-fade-in animate-stagger-1">
                  Set up your digital product and start selling
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2 animate-slide-up animate-stagger-1 opacity-0">
                    <Label htmlFor="file" className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <FileText className="w-4 h-4 text-orange-500" />
                      Upload File
                    </Label>
                    <Input
                      id="file"
                      type="file"
                      required
                      className="cursor-pointer border-orange-200 dark:border-orange-800 focus:border-orange-500 dark:focus:border-orange-400 transition-all duration-300 hover:shadow-md"
                      onChange={(e) => handleInputChange("file", e.target.value)}
                    />
                  </div>

                  <div className="space-y-2 animate-slide-up animate-stagger-2 opacity-0">
                    <Label htmlFor="title" className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <FileText className="w-4 h-4 text-blue-500" />
                      Product Title
                    </Label>
                    <Input
                      id="title"
                      type="text"
                      placeholder="Enter product title"
                      required
                      value={formData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                      className="border-blue-200 dark:border-blue-800 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 hover:shadow-md focus:scale-105"
                    />
                  </div>

                  <div className="space-y-2 animate-slide-up animate-stagger-3 opacity-0">
                    <Label htmlFor="price" className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <Euro className="w-4 h-4 text-green-500" />
                      Price in €
                    </Label>
                    <Input
                      id="price"
                      type="number"
                      placeholder="0.00"
                      min="0"
                      step="0.01"
                      required
                      value={formData.price}
                      onChange={(e) => handleInputChange("price", e.target.value)}
                      className="border-green-200 dark:border-green-800 focus:border-green-500 dark:focus:border-green-400 transition-all duration-300 hover:shadow-md focus:scale-105"
                    />
                  </div>

                  <div className="space-y-2 animate-slide-up animate-stagger-4 opacity-0">
                    <Label htmlFor="email" className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <Mail className="w-4 h-4 text-purple-500" />
                      Your Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your@email.com"
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="border-purple-200 dark:border-purple-800 focus:border-purple-500 dark:focus:border-purple-400 transition-all duration-300 hover:shadow-md focus:scale-105"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-bounce-in animate-stagger-5 opacity-0 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Generating Link...
                      </>
                    ) : (
                      <>
                        <Upload className="w-4 h-4 mr-2" />
                        Generate Payment Link
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 animate-bounce-in">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg animate-pulse-slow">
                  <CheckCircle className="w-8 h-8 text-white animate-bounce" />
                </div>
                <CardTitle className="text-2xl text-green-800 dark:text-green-200 animate-fade-in">
                  Your checkout link is ready
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-white/80 dark:bg-gray-800/80 rounded-lg border border-green-200 dark:border-green-800 animate-glow">
                  <p className="text-sm font-mono break-all text-green-700 dark:text-green-300">{checkoutLink}</p>
                </div>
                <Button
                  onClick={handleCopyLink}
                  className="w-full bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                  variant={copied ? "secondary" : "default"}
                >
                  {copied ? (
                    <>
                      <CheckCircle className="w-4 h-4 mr-2 animate-bounce" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Copy Link
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
