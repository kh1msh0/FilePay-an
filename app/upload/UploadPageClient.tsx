"use client"

import type React from "react"
import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Copy, CheckCircle, Upload, Euro, Mail, FileText, Loader2, ImageIcon } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function UploadPageClient() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    file: null as File | null,
    previewFile: null as File | null,
    title: "",
    price: "",
    email: "",
  })
  const [copied, setCopied] = useState(false)
  const [fileError, setFileError] = useState("")
  const [previewFileError, setPreviewFileError] = useState("")
  const [priceError, setPriceError] = useState("")
  const [uploadProgress, setUploadProgress] = useState(0)
  const [showProgress, setShowProgress] = useState(false)
  const [previewLink, setPreviewLink] = useState("")

  const checkoutLink = "https://filepay.app/checkout/abc123"

  const validateFile = (file: File) => {
    const maxSize = 100 * 1024 * 1024 // 100MB in bytes
    const allowedTypes = ["application/pdf", "video/mp4", "application/zip", "application/x-zip-compressed"]
    const allowedExtensions = [".pdf", ".mp4", ".zip"]

    if (file.size > maxSize) {
      return "File must be a PDF, MP4, or ZIP and no larger than 100MB."
    }

    const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf("."))
    if (!allowedTypes.includes(file.type) && !allowedExtensions.includes(fileExtension)) {
      return "File must be a PDF, MP4, or ZIP and no larger than 100MB."
    }

    return ""
  }

  const validatePreviewFile = (file: File) => {
    const maxSize = 10 * 1024 * 1024 // 10MB in bytes
    const allowedTypes = ["image/jpeg", "image/png", "image/gif", "application/pdf"]
    const allowedExtensions = [".jpg", ".jpeg", ".png", ".gif", ".pdf"]

    if (file.size > maxSize) {
      return "Preview file must be no larger than 10MB."
    }

    const fileExtension = file.name.toLowerCase().substring(file.name.lastIndexOf("."))
    if (!allowedTypes.includes(file.type) && !allowedExtensions.includes(fileExtension)) {
      return "Preview file must be an image (JPG, PNG, GIF) or PDF."
    }

    return ""
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    // Reset errors
    setFileError("")
    setPriceError("")
    setPreviewFileError("")

    // Validate form
    if (!formData.file) {
      setFileError("Please upload a file before proceeding.")
      return
    }

    if (!formData.price) {
      setPriceError("Please set a price before proceeding.")
      return
    }

    setIsLoading(true)
    setShowProgress(true)

    // Simulate upload progress
    for (let i = 0; i <= 100; i += 10) {
      setUploadProgress(i)
      await new Promise((resolve) => setTimeout(resolve, 100))
    }

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 500))

    setIsLoading(false)
    setShowProgress(false)
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

    // Generate preview link when both file and price are set
    if (field === "price" && value && formData.file) {
      setPreviewLink("https://filepay.io/paywall/placeholder")
    }
  }

  const handleFileChange = (file: File) => {
    const error = validateFile(file)
    setFileError(error)
    setFormData((prev) => ({ ...prev, file }))

    // Generate preview link when both file and price are set
    if (formData.price && !error) {
      setPreviewLink("https://filepay.io/paywall/placeholder")
    }
  }

  const handlePreviewFileChange = (file: File) => {
    const error = validatePreviewFile(file)
    setPreviewFileError(error)
    setFormData((prev) => ({ ...prev, previewFile: file }))
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
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) {
                          handleFileChange(file)
                        }
                      }}
                    />
                    {fileError && <p className="text-sm text-red-600 dark:text-red-400 animate-fade-in">{fileError}</p>}
                  </div>

                  <div className="space-y-2 animate-slide-up animate-stagger-1-5 opacity-0">
                    <Label htmlFor="previewFile" className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <ImageIcon className="w-4 h-4 text-pink-500" />
                      Preview File (Optional)
                    </Label>
                    <Input
                      id="previewFile"
                      type="file"
                      accept="image/*,.pdf"
                      className="cursor-pointer border-pink-200 dark:border-pink-800 focus:border-pink-500 dark:focus:border-pink-400 transition-all duration-300 hover:shadow-md"
                      onChange={(e) => {
                        const file = e.target.files?.[0]
                        if (file) {
                          handlePreviewFileChange(file)
                        }
                      }}
                    />
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      Upload an image or PDF preview for customers (max 10MB)
                    </p>
                    {previewFileError && (
                      <p className="text-sm text-red-600 dark:text-red-400 animate-fade-in">{previewFileError}</p>
                    )}
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
                    {priceError && (
                      <p className="text-sm text-red-600 dark:text-red-400 animate-fade-in">{priceError}</p>
                    )}
                  </div>

                  {previewLink && (
                    <div className="space-y-2 animate-slide-up">
                      <Label className="text-gray-700 dark:text-gray-300">Preview Link</Label>
                      <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
                        <p className="text-sm font-mono text-blue-700 dark:text-blue-300 break-all cursor-pointer hover:underline">
                          {previewLink}
                        </p>
                      </div>
                    </div>
                  )}

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

                  {showProgress && (
                    <div className="space-y-2 animate-slide-up">
                      <div className="flex justify-between text-sm text-gray-600 dark:text-gray-300">
                        <span>Uploading...</span>
                        <span>{uploadProgress}%</span>
                      </div>
                      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                        <div
                          className="bg-gradient-to-r from-orange-500 to-pink-500 h-2 rounded-full transition-all duration-300"
                          style={{ width: `${uploadProgress}%` }}
                        />
                      </div>
                    </div>
                  )}

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

                  <p className="text-center text-sm text-gray-500 dark:text-gray-400 animate-fade-in">
                    Secure payments powered by Lemon Squeezy
                  </p>
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

        {/* Powered by FilePay Badge */}
        <div className="text-center mt-8">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300">
            Powered by FilePay
          </span>
        </div>
      </div>
    </div>
  )
}
