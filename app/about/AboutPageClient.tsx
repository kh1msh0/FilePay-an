"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, Target, Heart, Shield, Users } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function AboutPageClient() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-fuchsia-50 to-pink-50 dark:from-gray-900 dark:via-violet-900/20 dark:to-fuchsia-900/20">
      {/* Header */}
      <header className="border-b border-white/20 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 animate-slide-in-left">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
          >
            FilePay
          </Link>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/about"
                className="text-sm font-medium text-violet-600 dark:text-violet-400 border-b-2 border-violet-600 dark:border-violet-400"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
              >
                Contact
              </Link>
              <Link
                href="/terms"
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors duration-200"
              >
                Terms
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>


      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-violet-900 via-fuchsia-800 to-pink-800 dark:from-violet-200 dark:via-fuchsia-200 dark:to-pink-200 bg-clip-text text-transparent animate-fade-in animate-stagger-1 opacity-0">
            About FilePay
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in animate-stagger-2 opacity-0">
            We're on a mission to make selling digital files simple, secure, and profitable for creators worldwide.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-violet-100 to-fuchsia-100 dark:from-violet-900/30 dark:to-fuchsia-900/30 animate-slide-up animate-stagger-1 opacity-0">
            <CardHeader>
              <CardTitle className="text-2xl text-violet-800 dark:text-violet-200 flex items-center gap-3">
                <Target className="w-8 h-8" />
                Our Story
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                FilePay was born from a simple frustration: selling digital files online was unnecessarily complicated.
                Creators had to juggle multiple platforms, deal with complex setups, and worry about secure file
                delivery.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We built FilePay to change that. Our platform lets you upload a file, set a price, and share a link.
                That's it. No storefronts, no monthly fees, no complicated configurations. Just simple, secure file
                selling.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Mission Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-900 to-fuchsia-800 dark:from-violet-200 dark:to-fuchsia-200 bg-clip-text text-transparent">
            Our Mission
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-pink-100 to-violet-100 dark:from-pink-900/30 dark:to-violet-900/30 animate-slide-up animate-stagger-2 opacity-0">
            <CardContent className="p-8">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed text-center">
                To democratize digital commerce by providing creators with the simplest, most secure way to monetize
                their digital content. We believe every creator deserves to be paid fairly for their work, without
                technical barriers getting in the way.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Values Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-900 to-fuchsia-800 dark:from-violet-200 dark:to-fuchsia-200 bg-clip-text text-transparent">
            Our Values
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-violet-50 to-purple-100 dark:from-violet-900/20 dark:to-purple-900/20 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer animate-slide-up animate-stagger-1 opacity-0 group">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-violet-400 to-purple-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                <Heart className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardTitle className="text-violet-800 dark:text-violet-200 group-hover:text-violet-600 dark:group-hover:text-violet-100 transition-colors duration-300">
                Simplicity First
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-violet-700 dark:text-violet-300 group-hover:text-violet-600 dark:group-hover:text-violet-200 transition-colors duration-300">
                We believe the best tools are the simplest ones. No unnecessary complexity, just what you need to
                succeed.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-fuchsia-50 to-pink-100 dark:from-fuchsia-900/20 dark:to-pink-900/20 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer animate-slide-up animate-stagger-2 opacity-0 group">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-pink-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardTitle className="text-fuchsia-800 dark:text-fuchsia-200 group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-100 transition-colors duration-300">
                Security & Trust
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-fuchsia-700 dark:text-fuchsia-300 group-hover:text-fuchsia-600 dark:group-hover:text-fuchsia-200 transition-colors duration-300">
                Your files and payments are protected with bank-level security. Trust is the foundation of everything we
                do.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-pink-50 to-rose-100 dark:from-pink-900/20 dark:to-rose-900/20 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer animate-slide-up animate-stagger-3 opacity-0 group">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                <Users className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardTitle className="text-pink-800 dark:text-pink-200 group-hover:text-pink-600 dark:group-hover:text-pink-100 transition-colors duration-300">
                Creator-First
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-pink-700 dark:text-pink-300 group-hover:text-pink-600 dark:group-hover:text-pink-200 transition-colors duration-300">
                Every decision we make puts creators first. Your success is our success, and we're here to support your
                journey.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-violet-900 to-fuchsia-800 dark:from-violet-200 dark:to-fuchsia-200 bg-clip-text text-transparent">
            Our Impact
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-900/20 dark:to-teal-900/20 animate-slide-up animate-stagger-1 opacity-0">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">10K+</div>
              <div className="text-emerald-700 dark:text-emerald-300 font-medium">Files Sold</div>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 animate-slide-up animate-stagger-2 opacity-0">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">2.5K+</div>
              <div className="text-blue-700 dark:text-blue-300 font-medium">Happy Creators</div>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-amber-50 to-orange-100 dark:from-amber-900/20 dark:to-orange-900/20 animate-slide-up animate-stagger-3 opacity-0">
            <CardContent className="p-8">
              <div className="text-4xl font-bold text-amber-600 dark:text-amber-400 mb-2">99.9%</div>
              <div className="text-amber-700 dark:text-amber-300 font-medium">Uptime</div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-violet-900 to-fuchsia-800 dark:from-violet-200 dark:to-fuchsia-200 bg-clip-text text-transparent">
            Ready to Start Selling?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of creators who trust FilePay to sell their digital files.
          </p>
          <Button
            asChild
            size="lg"
            className="text-lg px-8 py-6 bg-gradient-to-r from-violet-600 to-fuchsia-600 hover:from-violet-700 hover:to-fuchsia-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Link href="/upload">Start Selling Today</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
