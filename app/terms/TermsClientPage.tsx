"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ArrowLeft, FileText, Shield, CreditCard, AlertTriangle, Eye, RefreshCw, Scale, Mail } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function TermsClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 dark:from-gray-900 dark:via-slate-900/20 dark:to-zinc-900/20">
      {/* Header */}
      <header className="border-b border-white/20 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 animate-slide-in-left">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-slate-600 to-gray-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
          >
            FilePay
          </Link>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/about"
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-slate-600 dark:hover:text-slate-400 transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-slate-600 dark:hover:text-slate-400 transition-colors duration-200"
              >
                Contact
              </Link>
              <Link
                href="/terms"
                className="text-sm font-medium text-slate-600 dark:text-slate-400 border-b-2 border-slate-600 dark:border-slate-400"
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
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-slate-900 via-gray-800 to-zinc-800 dark:from-slate-200 dark:via-gray-200 dark:to-zinc-200 bg-clip-text text-transparent animate-fade-in animate-stagger-1 opacity-0">
            Terms & Conditions
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in animate-stagger-2 opacity-0">
            Please read these terms carefully before using FilePay to sell your digital files.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 animate-fade-in animate-stagger-3 opacity-0">
            Last updated: January 10, 2025
          </p>
        </div>
      </section>

      {/* Terms Content */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Section 1: Acceptance of Terms */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-gray-100 dark:from-slate-900/30 dark:to-gray-900/30 animate-slide-up animate-stagger-1 opacity-0">
            <CardHeader>
              <CardTitle className="text-xl text-slate-800 dark:text-slate-200 flex items-center gap-3">
                <FileText className="w-6 h-6" />
                1. Acceptance of Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                By accessing and using FilePay, you accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do not use this service.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                These terms apply to all users of the service, including without limitation users who are browsers,
                vendors, customers, merchants, and/or contributors of content.
              </p>
            </CardContent>
          </Card>

          {/* Section 2: User Accounts */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 animate-slide-up animate-stagger-2 opacity-0">
            <CardHeader>
              <CardTitle className="text-xl text-blue-800 dark:text-blue-200 flex items-center gap-3">
                <Shield className="w-6 h-6" />
                2. User Accounts
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                You are responsible for safeguarding the password and for maintaining the confidentiality of your
                account. You are fully responsible for all activities that occur under your account.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                You must immediately notify FilePay of any unauthorized uses of your account or any other breaches of
                security. FilePay will not be liable for any acts or omissions by you, including any damages of any kind
                incurred as a result of such acts or omissions.
              </p>
            </CardContent>
          </Card>

          {/* Section 3: Payment Terms */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/20 dark:to-emerald-900/20 animate-slide-up animate-stagger-3 opacity-0">
            <CardHeader>
              <CardTitle className="text-xl text-green-800 dark:text-green-200 flex items-center gap-3">
                <CreditCard className="w-6 h-6" />
                3. Payment Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                FilePay charges a service fee of 5% + $0.30 per successful transaction. This fee is automatically
                deducted from each sale before funds are transferred to your account.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Payments are processed securely through our payment partners. FilePay does not store credit card
                information. Refunds are handled on a case-by-case basis and must be requested within 30 days of
                purchase.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                You are responsible for any taxes applicable to your sales. FilePay does not provide tax advice and
                recommends consulting with a tax professional regarding your obligations.
              </p>
            </CardContent>
          </Card>

          {/* Section 4: Content Policy */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-900/20 dark:to-red-900/20 animate-slide-up animate-stagger-4 opacity-0">
            <CardHeader>
              <CardTitle className="text-xl text-orange-800 dark:text-orange-200 flex items-center gap-3">
                <AlertTriangle className="w-6 h-6" />
                4. Content Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                You are solely responsible for the content you upload and sell through FilePay. You must own all rights
                to the content or have explicit permission to sell it.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Prohibited content includes but is not limited to: copyrighted material without permission, illegal
                content, malware, adult content, hate speech, or content that violates any applicable laws.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                FilePay reserves the right to remove any content that violates these terms and may suspend or terminate
                accounts that repeatedly violate our content policy.
              </p>
            </CardContent>
          </Card>

          {/* Section 5: Limitation of Liability */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 to-pink-100 dark:from-purple-900/20 dark:to-pink-900/20 animate-slide-up animate-stagger-5 opacity-0">
            <CardHeader>
              <CardTitle className="text-xl text-purple-800 dark:text-purple-200 flex items-center gap-3">
                <Scale className="w-6 h-6" />
                5. Limitation of Liability
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                FilePay shall not be liable for any indirect, incidental, special, consequential, or punitive damages,
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Our total liability to you for any claim arising out of or relating to these terms or our service shall
                not exceed the amount you paid us in the twelve months preceding the claim.
              </p>
            </CardContent>
          </Card>

          {/* Section 6: Privacy Policy */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-teal-50 to-cyan-100 dark:from-teal-900/20 dark:to-cyan-900/20 animate-slide-up animate-stagger-6 opacity-0">
            <CardHeader>
              <CardTitle className="text-xl text-teal-800 dark:text-teal-200 flex items-center gap-3">
                <Eye className="w-6 h-6" />
                6. Privacy Policy
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We collect and use your personal information in accordance with our Privacy Policy. By using FilePay,
                you consent to the collection and use of your information as described in our Privacy Policy.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                We implement appropriate security measures to protect your personal information against unauthorized
                access, alteration, disclosure, or destruction.
              </p>
            </CardContent>
          </Card>

          {/* Section 7: Changes to Terms */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-amber-900/20 dark:to-yellow-900/20 animate-slide-up animate-stagger-7 opacity-0">
            <CardHeader>
              <CardTitle className="text-xl text-amber-800 dark:text-amber-200 flex items-center gap-3">
                <RefreshCw className="w-6 h-6" />
                7. Changes to Terms
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                FilePay reserves the right to modify these terms at any time. We will notify users of any material
                changes via email or through our service.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Your continued use of FilePay after any such changes constitutes your acceptance of the new terms. If
                you do not agree to the modified terms, you should discontinue your use of the service.
              </p>
            </CardContent>
          </Card>

          {/* Section 8: Governing Law */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-indigo-50 to-purple-100 dark:from-indigo-900/20 dark:to-purple-900/20 animate-slide-up animate-stagger-8 opacity-0">
            <CardHeader>
              <CardTitle className="text-xl text-indigo-800 dark:text-indigo-200 flex items-center gap-3">
                <Scale className="w-6 h-6" />
                8. Governing Law
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                These terms shall be governed by and construed in accordance with the laws of the State of California,
                without regard to its conflict of law provisions.
              </p>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts
                located in San Francisco, California.
              </p>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="border-0 shadow-lg bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900/30 dark:to-slate-900/30 animate-slide-up animate-stagger-9 opacity-0">
            <CardHeader>
              <CardTitle className="text-xl text-gray-800 dark:text-gray-200 flex items-center gap-3">
                <Mail className="w-6 h-6" />
                Questions About These Terms?
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
                If you have any questions about these Terms & Conditions, please contact us at:
              </p>
              <div className="space-y-2 text-gray-600 dark:text-gray-400">
                <p>Email: legal@filepay.app</p>
                <p>Address: FilePay Inc., San Francisco, CA</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
