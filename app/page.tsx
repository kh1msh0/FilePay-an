import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, Shield, Zap, Sparkles, Quote } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-blue-900/20 dark:to-purple-900/20">
      {/* Header */}
      <header className="border-b border-white/20 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 animate-slide-in-left">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
          >
            FilePay
          </Link>
          <div className="flex items-center gap-4">
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-200 dark:border-blue-800 rounded-full px-4 py-2 mb-6 animate-bounce-in animate-stagger-1 opacity-0">
            <Sparkles className="w-4 h-4 text-blue-500 animate-pulse" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Start selling in minutes</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-purple-800 dark:from-white dark:via-blue-200 dark:to-purple-200 bg-clip-text text-transparent animate-fade-in animate-stagger-2 opacity-0">
            Sell digital files with a paywall link
          </h1>

          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in animate-stagger-3 opacity-0">
            Upload your PDF, video, or file. Set a price. Share the link.
          </p>

          <Button
            asChild
            size="lg"
            className="text-lg px-8 py-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 animate-glow animate-bounce-in animate-stagger-4"
          >
            <Link href="/upload">
              <Upload className="w-5 h-5 mr-2 animate-float" />
              Start Selling
            </Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer animate-slide-up animate-stagger-1 opacity-0 group">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardTitle className="text-green-800 dark:text-green-200 group-hover:text-green-600 dark:group-hover:text-green-100 transition-colors duration-300">
                Fast Setup
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-green-700 dark:text-green-300 group-hover:text-green-600 dark:group-hover:text-green-200 transition-colors duration-300">
                Upload your file and set a price in minutes. No complex configuration needed.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-blue-50 to-cyan-100 dark:from-blue-900/20 dark:to-cyan-900/20 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer animate-slide-up animate-stagger-2 opacity-0 group">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardTitle className="text-blue-800 dark:text-blue-200 group-hover:text-blue-600 dark:group-hover:text-blue-100 transition-colors duration-300">
                Secure Checkout
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-blue-700 dark:text-blue-300 group-hover:text-blue-600 dark:group-hover:text-blue-200 transition-colors duration-300">
                Built-in payment processing with secure file delivery after successful payment.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 hover:shadow-2xl hover:scale-105 transition-all duration-500 cursor-pointer animate-slide-up animate-stagger-3 opacity-0 group">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg group-hover:rotate-12 transition-transform duration-300">
                <Upload className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
              </div>
              <CardTitle className="text-purple-800 dark:text-purple-200 group-hover:text-purple-600 dark:group-hover:text-purple-100 transition-colors duration-300">
                Instant File Delivery
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-purple-700 dark:text-purple-300 group-hover:text-purple-600 dark:group-hover:text-purple-200 transition-colors duration-300">
                Customers get immediate access to their purchased files via secure download links.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent">
            Success Stories
          </h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            See how creators are using FilePay to monetize their digital content
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-yellow-50 to-orange-100 dark:from-yellow-900/20 dark:to-orange-900/20 hover:shadow-xl transition-all duration-300 animate-slide-up animate-stagger-1 opacity-0">
            <CardHeader>
              <Quote className="w-8 h-8 text-yellow-600 dark:text-yellow-400 mb-2" />
            </CardHeader>
            <CardContent>
              <blockquote className="text-gray-700 dark:text-gray-300 mb-4 italic">
                "FilePay helped me sell my digital art effortlessly. I've made over $2,000 in my first month!"
              </blockquote>
              <cite className="text-sm font-semibold text-yellow-700 dark:text-yellow-300">
                Sarah Chen, Digital Artist
              </cite>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-pink-50 to-rose-100 dark:from-pink-900/20 dark:to-rose-900/20 hover:shadow-xl transition-all duration-300 animate-slide-up animate-stagger-2 opacity-0">
            <CardHeader>
              <Quote className="w-8 h-8 text-pink-600 dark:text-pink-400 mb-2" />
            </CardHeader>
            <CardContent>
              <blockquote className="text-gray-700 dark:text-gray-300 mb-4 italic">
                "The setup was incredibly simple. I uploaded my photography templates and started earning immediately."
              </blockquote>
              <cite className="text-sm font-semibold text-pink-700 dark:text-pink-300">
                Mike Rodriguez, Photographer
              </cite>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 hover:shadow-xl transition-all duration-300 animate-slide-up animate-stagger-3 opacity-0">
            <CardHeader>
              <Quote className="w-8 h-8 text-indigo-600 dark:text-indigo-400 mb-2" />
            </CardHeader>
            <CardContent>
              <blockquote className="text-gray-700 dark:text-gray-300 mb-4 italic">
                "Perfect for selling my online courses. The instant delivery feature is exactly what I needed."
              </blockquote>
              <cite className="text-sm font-semibold text-indigo-700 dark:text-indigo-300">
                Emma Thompson, Educator
              </cite>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/20 mt-16 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm animate-fade-in animate-stagger-5 opacity-0">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-600 dark:text-gray-400">
            <Link
              href="/about"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              Contact
            </Link>
            <Link
              href="/terms"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
            >
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
