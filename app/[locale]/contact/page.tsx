"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, User, MessageSquare, Loader2, CheckCircle } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function ContactPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations()
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    setIsSubmitted(true)
  }

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 dark:from-gray-900 dark:via-teal-900/20 dark:to-blue-900/20">
      {/* Header */}
      <header className="border-b border-white/20 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href={`/${locale}`}
            className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
          >
            {t("common.filepay")}
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <LanguageSwitcher />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto">
          {!isSubmitted ? (
            <Card className="border-0 shadow-2xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-teal-400 to-blue-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-3xl bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">
                  {t("contact.title")}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">{t("contact.subtitle")}</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <User className="w-4 h-4 text-teal-500" />
                      {t("contact.form.name")}
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder={t("contact.form.namePlaceholder")}
                      required
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      className="border-teal-200 dark:border-teal-800 focus:border-teal-500 dark:focus:border-teal-400 transition-all duration-300 hover:shadow-md focus:scale-105"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <Mail className="w-4 h-4 text-blue-500" />
                      {t("contact.form.email")}
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={t("contact.form.emailPlaceholder")}
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="border-blue-200 dark:border-blue-800 focus:border-blue-500 dark:focus:border-blue-400 transition-all duration-300 hover:shadow-md focus:scale-105"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                      <MessageSquare className="w-4 h-4 text-purple-500" />
                      {t("contact.form.message")}
                    </Label>
                    <Textarea
                      id="message"
                      placeholder={t("contact.form.messagePlaceholder")}
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      className="border-purple-200 dark:border-purple-800 focus:border-purple-500 dark:focus:border-purple-400 transition-all duration-300 hover:shadow-md focus:scale-105 resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        {t("contact.form.sending")}
                      </>
                    ) : (
                      <>
                        <Mail className="w-4 h-4 mr-2" />
                        {t("contact.form.submit")}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-0 shadow-2xl bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 text-center">
              <CardHeader>
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                  <CheckCircle className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-2xl text-green-800 dark:text-green-200">{t("contact.success")}</CardTitle>
              </CardHeader>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
