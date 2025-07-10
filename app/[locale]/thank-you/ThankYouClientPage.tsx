"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, Mail, CheckCircle, Sparkles } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function ThankYouClientPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations()

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-emerald-900/20 dark:to-cyan-900/20">
      {/* Header */}
      <header className="border-b border-white/20 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 animate-slide-in-left">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href={`/${locale}`}
            className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
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
        <div className="max-w-md mx-auto">
          <Card className="text-center border-0 shadow-2xl bg-gradient-to-br from-white/90 to-emerald-50/90 dark:from-gray-900/90 dark:to-emerald-900/20 backdrop-blur-sm animate-bounce-in">
            <CardHeader>
              <div className="mx-auto w-20 h-20 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-3xl flex items-center justify-center mb-6 shadow-xl relative animate-float">
                <CheckCircle className="w-10 h-10 text-white" />
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center animate-bounce">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
              </div>
              <CardTitle className="text-3xl mb-2 bg-gradient-to-r from-emerald-700 to-cyan-700 dark:from-emerald-300 dark:to-cyan-300 bg-clip-text text-transparent animate-fade-in">
                {t("thankYou.title")}
              </CardTitle>
              <p className="text-emerald-600 dark:text-emerald-400 text-sm animate-fade-in animate-stagger-1">
                {t("thankYou.subtitle")}
              </p>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button
                className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 hover:from-emerald-600 hover:to-cyan-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-glow animate-slide-up animate-stagger-2 opacity-0"
                size="lg"
              >
                <Download className="w-5 h-5 mr-2 animate-bounce" />
                {t("thankYou.download")}
              </Button>
              <Button
                variant="outline"
                className="w-full border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 transition-all duration-300 hover:scale-105 bg-transparent animate-slide-up animate-stagger-3 opacity-0"
              >
                <Mail className="w-4 h-4 mr-2" />
                {t("thankYou.resend")}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
