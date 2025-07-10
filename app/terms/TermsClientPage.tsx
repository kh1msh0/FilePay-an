"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { FileText, User, CreditCard, Shield, AlertTriangle, Lock, RefreshCw, Scale, Mail } from "lucide-react"

export default function TermsClientPage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  const sections = [
    {
      icon: FileText,
      title: "1. Acceptance of Terms",
      content: `By accessing and using FilePay, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service.`,
    },
    {
      icon: User,
      title: "2. User Accounts",
      content: `You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account. FilePay reserves the right to refuse service, terminate accounts, or cancel orders at our sole discretion.`,
    },
    {
      icon: CreditCard,
      title: "3. Payment Terms",
      content: `All payments are processed securely through our payment partners. FilePay takes a small commission from each sale. Payouts are processed according to our payout schedule. You are responsible for any taxes on your earnings.`,
    },
    {
      icon: Shield,
      title: "4. Content Policy",
      content: `You retain ownership of your uploaded content. However, you grant FilePay a license to distribute your files to purchasers. You must own or have rights to all content you upload. Prohibited content includes illegal, harmful, or copyrighted material.`,
    },
    {
      icon: AlertTriangle,
      title: "5. Limitation of Liability",
      content: `FilePay shall not be liable for any indirect, incidental, special, consequential, or punitive damages. Our total liability shall not exceed the amount paid by you in the twelve months preceding the claim.`,
    },
    {
      icon: Lock,
      title: "6. Privacy Policy",
      content: `We collect and use your information as described in our Privacy Policy. We implement appropriate security measures to protect your personal information. We do not sell your personal data to third parties.`,
    },
    {
      icon: RefreshCw,
      title: "7. Changes to Terms",
      content: `FilePay reserves the right to modify these terms at any time. We will notify users of significant changes via email or platform notifications. Continued use of the service constitutes acceptance of modified terms.`,
    },
    {
      icon: Scale,
      title: "8. Governing Law",
      content: `These terms shall be governed by and construed in accordance with applicable laws. Any disputes shall be resolved through binding arbitration. If any provision is found unenforceable, the remainder shall remain in effect.`,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 dark:from-slate-950 dark:via-gray-950 dark:to-zinc-950">
      {/* Header */}
      <header className="border-b bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">FP</span>
            </div>
            <span className="text-xl font-bold bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
              FilePay
            </span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-600 dark:text-gray-300 hover:text-slate-600 dark:hover:text-slate-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/upload"
              className="text-gray-600 dark:text-gray-300 hover:text-slate-600 dark:hover:text-slate-400 transition-colors"
            >
              Upload
            </Link>
            <Link
              href="/about"
              className="text-gray-600 dark:text-gray-300 hover:text-slate-600 dark:hover:text-slate-400 transition-colors"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 dark:text-gray-300 hover:text-slate-600 dark:hover:text-slate-400 transition-colors"
            >
              Contact
            </Link>
            <Link href="/terms" className="text-slate-600 dark:text-slate-400 font-medium">
              Terms
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-600 via-gray-600 to-zinc-600 bg-clip-text text-transparent">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Please read these terms carefully before using FilePay. These terms govern your use of our platform and
            services.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">Last updated: January 2024</p>
        </div>

        {/* Terms Sections */}
        <div className="max-w-4xl mx-auto space-y-8">
          {sections.map((section, index) => (
            <Card
              key={index}
              className={`bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 animate-in slide-in-from-bottom-4 duration-1000`}
              style={{ animationDelay: `${index * 100 + 300}ms` }}
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-slate-500 to-gray-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{section.title}</h2>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{section.content}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center animate-in slide-in-from-bottom-4 duration-1000 delay-1000">
          <Card className="bg-gradient-to-r from-slate-600 to-gray-600 border-0 shadow-2xl max-w-2xl mx-auto">
            <CardContent className="p-8">
              <Mail className="w-12 h-12 text-white mx-auto mb-4" />
              <h2 className="text-2xl font-bold text-white mb-4">Questions About Our Terms?</h2>
              <p className="text-slate-100 mb-6">
                If you have any questions about these Terms of Service, please don't hesitate to contact us.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center px-6 py-3 bg-white text-slate-600 font-semibold rounded-lg hover:bg-gray-100 transition-colors"
              >
                Contact Support
              </Link>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
