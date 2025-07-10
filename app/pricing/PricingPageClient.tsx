"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, X, Zap, Upload, Users, Star, ArrowRight } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"
import { Footer } from "@/components/footer"

export default function PricingPageClient() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 dark:from-gray-900 dark:via-emerald-900/20 dark:to-teal-900/20">
      {/* Header */}
      <header className="border-b border-white/20 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 animate-slide-in-left">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
          >
            FilePay
          </Link>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/about"
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="/pricing"
                className="text-sm font-medium text-emerald-600 dark:text-emerald-400 border-b-2 border-emerald-600 dark:border-emerald-400"
              >
                Pricing
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
              >
                Contact
              </Link>
              <Link
                href="/terms"
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors duration-200"
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
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-emerald-900 via-teal-800 to-cyan-800 dark:from-emerald-200 dark:via-teal-200 dark:to-cyan-200 bg-clip-text text-transparent animate-fade-in animate-stagger-1 opacity-0">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in animate-stagger-2 opacity-0">
            Pay only when you sell. No monthly fees, no setup costs, no hidden charges.
          </p>
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 border border-emerald-200 dark:border-emerald-800 rounded-full px-4 py-2 mb-8 animate-bounce-in animate-stagger-3 opacity-0">
            <Star className="w-4 h-4 text-emerald-500" />
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Start selling for free</span>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Free Plan */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900/30 dark:to-slate-900/30 hover:shadow-xl transition-all duration-300 animate-slide-up animate-stagger-1 opacity-0">
            <CardHeader className="text-center pb-8">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-gray-400 to-slate-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <Upload className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-gray-800 dark:text-gray-200">Free</CardTitle>
              <CardDescription className="text-gray-600 dark:text-gray-300">
                Perfect for getting started
              </CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-gray-900 dark:text-white">$0</span>
                <span className="text-gray-500 dark:text-gray-400">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Upload up to 5 files</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Basic payment links</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Email support</span>
                </li>
                <li className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-400" />
                  <span className="text-gray-500 dark:text-gray-400">Custom branding</span>
                </li>
                <li className="flex items-center gap-3">
                  <X className="w-5 h-5 text-red-400" />
                  <span className="text-gray-500 dark:text-gray-400">Analytics dashboard</span>
                </li>
              </ul>
              <div className="pt-4">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  <strong>Transaction fee:</strong> 8% + $0.30
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 bg-transparent"
                >
                  <Link href="/upload">Get Started Free</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Pro Plan */}
          <Card className="border-0 shadow-2xl bg-gradient-to-br from-emerald-50 to-teal-100 dark:from-emerald-900/30 dark:to-teal-900/30 hover:shadow-3xl transition-all duration-300 animate-slide-up animate-stagger-2 opacity-0 relative">
            <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
              Most Popular
            </Badge>
            <CardHeader className="text-center pb-8">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-emerald-800 dark:text-emerald-200">Pro</CardTitle>
              <CardDescription className="text-emerald-600 dark:text-emerald-300">For serious creators</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-emerald-900 dark:text-emerald-100">$19</span>
                <span className="text-emerald-600 dark:text-emerald-400">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Unlimited file uploads</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Custom branding</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Analytics dashboard</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Priority support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Advanced payment options</span>
                </li>
              </ul>
              <div className="pt-4">
                <p className="text-sm text-emerald-700 dark:text-emerald-300 mb-4">
                  <strong>Transaction fee:</strong> 5% + $0.30
                </p>
                <Button
                  asChild
                  className="w-full bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Link href="/upload">
                    Start Pro Trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Enterprise Plan */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-purple-900/30 dark:to-indigo-900/30 hover:shadow-xl transition-all duration-300 animate-slide-up animate-stagger-3 opacity-0">
            <CardHeader className="text-center pb-8">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-purple-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <Users className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl text-purple-800 dark:text-purple-200">Enterprise</CardTitle>
              <CardDescription className="text-purple-600 dark:text-purple-300">
                For teams and businesses
              </CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold text-purple-900 dark:text-purple-100">Custom</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Everything in Pro</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Team collaboration</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">API access</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Dedicated support</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check className="w-5 h-5 text-green-500" />
                  <span className="text-gray-700 dark:text-gray-300">Custom integrations</span>
                </li>
              </ul>
              <div className="pt-4">
                <p className="text-sm text-purple-700 dark:text-purple-300 mb-4">
                  <strong>Transaction fee:</strong> Negotiable
                </p>
                <Button
                  asChild
                  variant="outline"
                  className="w-full border-purple-300 dark:border-purple-600 text-purple-700 dark:text-purple-300 hover:bg-purple-50 dark:hover:bg-purple-900/20 bg-transparent"
                >
                  <Link href="/contact">Contact Sales</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-emerald-900 to-teal-800 dark:from-emerald-200 dark:to-teal-200 bg-clip-text text-transparent">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 animate-slide-up animate-stagger-1 opacity-0">
            <CardHeader>
              <CardTitle className="text-lg text-emerald-800 dark:text-emerald-200">When do I get charged?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                You only pay when you make a sale. Our transaction fee is automatically deducted from each successful
                payment before funds are transferred to your account.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 animate-slide-up animate-stagger-2 opacity-0">
            <CardHeader>
              <CardTitle className="text-lg text-emerald-800 dark:text-emerald-200">
                Can I change plans anytime?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll
                prorate any charges.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 animate-slide-up animate-stagger-3 opacity-0">
            <CardHeader>
              <CardTitle className="text-lg text-emerald-800 dark:text-emerald-200">
                What file types are supported?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                We support all common file types including PDFs, videos (MP4, MOV), images (JPG, PNG), documents (DOCX,
                XLSX), and more. Max file size is 2GB.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg bg-white/80 dark:bg-gray-900/80 animate-slide-up animate-stagger-4 opacity-0">
            <CardHeader>
              <CardTitle className="text-lg text-emerald-800 dark:text-emerald-200">How do I get paid?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
                Payments are processed through Stripe and deposited directly to your bank account. Payouts happen
                automatically every 2 business days.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-900 to-teal-800 dark:from-emerald-200 dark:to-teal-200 bg-clip-text text-transparent">
            Ready to Start Selling?
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Join thousands of creators who are already earning with FilePay. No setup fees, no monthly commitments.
          </p>
          <Button
            asChild
            size="lg"
            className="text-lg px-8 py-6 bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            <Link href="/upload">
              Start Selling Today
              <ArrowRight className="w-5 h-5 ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}
