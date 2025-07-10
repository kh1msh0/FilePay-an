"use client"

import Link from "next/link"
import { useTranslations } from "next-intl"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Shield, Users } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { LanguageSwitcher } from "@/components/language-switcher"

export default function AboutPage({ params: { locale } }: { params: { locale: string } }) {
  const t = useTranslations()

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 dark:from-gray-900 dark:via-violet-900/20 dark:to-fuchsia-900/20">
      {/* Header */}
      <header className="border-b border-white/20 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href={`/${locale}`}
            className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
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
        <div className="max-w-4xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-violet-700 to-fuchsia-700 dark:from-violet-300 dark:to-fuchsia-300 bg-clip-text text-transparent">
              {t("about.title")}
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
              {t("about.mission")}
            </p>
          </div>

          {/* Story Section */}
          <Card className="mb-16 border-0 shadow-xl bg-gradient-to-br from-white/90 to-violet-50/90 dark:from-gray-900/90 dark:to-violet-900/20 backdrop-blur-sm">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">{t("about.story")}</p>
            </CardContent>
          </Card>

          {/* Values Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-violet-700 to-fuchsia-700 dark:from-violet-300 dark:to-fuchsia-300 bg-clip-text text-transparent">
              {t("about.values.title")}
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-blue-800 dark:text-blue-200">
                    {t("about.values.simplicity.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-blue-700 dark:text-blue-300">
                    {t("about.values.simplicity.description")}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Shield className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-green-800 dark:text-green-200">
                    {t("about.values.security.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-green-700 dark:text-green-300">
                    {t("about.values.security.description")}
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-purple-800 dark:text-purple-200">
                    {t("about.values.support.title")}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-purple-700 dark:text-purple-300">
                    {t("about.values.support.description")}
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
