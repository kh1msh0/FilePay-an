"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Heart, Shield, Users, Sparkles, Target, Zap, TrendingUp, Award } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function AboutPageClient() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 dark:from-gray-900 dark:via-violet-900/20 dark:to-fuchsia-900/20">
      {/* Header */}
      <header className="border-b border-white/20 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 animate-slide-in-left">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
          >
            FilePay
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/upload"
                className="text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              >
                Upload
              </Link>
              <Link
                href="/contact"
                className="text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/terms"
                className="text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
              >
                Terms
              </Link>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 border border-violet-200 dark:border-violet-800 rounded-full px-4 py-2 mb-6">
            <Sparkles className="w-4 h-4 text-violet-500 animate-pulse" />
            <span className="text-sm font-medium text-violet-700 dark:text-violet-300">Our Story</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-700 to-fuchsia-700 dark:from-violet-300 dark:to-fuchsia-300 bg-clip-text text-transparent">
            About FilePay
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to empower creators by making it incredibly simple to sell digital files. No complex
            setup, no monthly fees – just instant payment links that work.
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-white/90 to-violet-50/90 dark:from-gray-900/90 dark:to-violet-900/20 backdrop-blur-sm animate-slide-up animate-stagger-1 opacity-0">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 bg-gradient-to-br from-violet-400 to-fuchsia-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                  <Heart className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-4 text-violet-800 dark:text-violet-200">
                    Built with passion, designed for simplicity
                  </h2>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                    FilePay was born from the frustration of complex e-commerce setups and the need for a
                    straightforward solution to sell digital products. We believe that sharing your work and getting
                    paid for it should be as easy as sending a link.
                  </p>
                  <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                    Built by a solo developer who understands the struggles of creators trying to monetize their
                    content, FilePay removes all the technical barriers between you and your customers.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Mission Section */}
        <Card className="mb-16 border-0 shadow-xl bg-gradient-to-br from-fuchsia-50/90 to-pink-50/90 dark:from-fuchsia-900/20 dark:to-pink-900/20 backdrop-blur-sm animate-slide-up animate-stagger-2 opacity-0">
          <CardContent className="p-8">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-fuchsia-400 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                <Target className="w-8 h-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold mb-4 text-fuchsia-800 dark:text-fuchsia-200">Our Mission</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                  To democratize digital commerce by removing barriers between creators and their customers. We want
                  every artist, educator, developer, and entrepreneur to have the tools they need to turn their digital
                  creations into sustainable income streams.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-violet-700 to-fuchsia-700 dark:from-violet-300 dark:to-fuchsia-300 bg-clip-text text-transparent">
            Our Values
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up animate-stagger-3 opacity-0 group">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                  <Zap className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-blue-800 dark:text-blue-200 group-hover:text-blue-600 dark:group-hover:text-blue-100 transition-colors duration-300">
                  Simplicity First
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-blue-700 dark:text-blue-300 group-hover:text-blue-600 dark:group-hover:text-blue-200 transition-colors duration-300">
                  We prioritize ease of use over complex features. Upload, price, share - that's it. No unnecessary
                  complications or confusing interfaces.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up animate-stagger-4 opacity-0 group">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                  <Shield className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-green-800 dark:text-green-200 group-hover:text-green-600 dark:group-hover:text-green-100 transition-colors duration-300">
                  Security & Trust
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-green-700 dark:text-green-300 group-hover:text-green-600 dark:group-hover:text-green-200 transition-colors duration-300">
                  Your files and payments are protected with enterprise-grade security measures. We take privacy
                  seriously and never compromise on safety.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-slide-up animate-stagger-5 opacity-0 group">
              <CardHeader className="text-center">
                <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
                <CardTitle className="text-purple-800 dark:text-purple-200 group-hover:text-purple-600 dark:group-hover:text-purple-100 transition-colors duration-300">
                  Creator Support
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-purple-700 dark:text-purple-300 group-hover:text-purple-600 dark:group-hover:text-purple-200 transition-colors duration-300">
                  We're here to help creators succeed with responsive support, fair pricing, and tools that actually
                  work for your business.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Stats Section */}
        <Card className="mb-16 border-0 shadow-xl bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 dark:from-violet-500/20 dark:to-fuchsia-500/20 backdrop-blur-sm animate-glow">
          <CardContent className="py-12">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="animate-slide-up animate-stagger-1">
                <div className="flex items-center justify-center mb-4">
                  <TrendingUp className="w-8 h-8 text-violet-600 mr-2" />
                  <span className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                    10K+
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Files Sold</p>
              </div>
              <div className="animate-slide-up animate-stagger-2">
                <div className="flex items-center justify-center mb-4">
                  <Users className="w-8 h-8 text-purple-600 mr-2" />
                  <span className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                    2.5K+
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Happy Creators</p>
              </div>
              <div className="animate-slide-up animate-stagger-3">
                <div className="flex items-center justify-center mb-4">
                  <Award className="w-8 h-8 text-fuchsia-600 mr-2" />
                  <span className="text-4xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                    99.9%
                  </span>
                </div>
                <p className="text-gray-600 dark:text-gray-300 font-medium">Uptime</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="text-center animate-bounce-in">
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white max-w-2xl mx-auto">
            <CardContent className="py-12">
              <h3 className="text-2xl font-bold mb-4">Ready to Start Selling?</h3>
              <p className="text-violet-100 mb-6 text-lg">
                Join thousands of creators who trust FilePay to sell their digital files.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-violet-600 hover:bg-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/upload">Start Selling Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
