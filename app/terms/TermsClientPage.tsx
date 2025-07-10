"use client"

import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, Shield, CreditCard, Users, AlertTriangle, Mail, Scale, Lock, RefreshCw } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function TermsClientPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 dark:from-gray-900 dark:via-slate-900/20 dark:to-zinc-900/20">
      {/* Header */}
      <header className="border-b border-white/20 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 animate-slide-in-left">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-slate-600 to-zinc-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
          >
            FilePay
          </Link>
          <div className="flex items-center gap-4">
            <nav className="hidden md:flex items-center gap-6">
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
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-600 to-zinc-600 bg-clip-text text-transparent mb-6">
            Terms of Service
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Please read these terms carefully before using FilePay. By using our service, you agree to these terms.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">Last updated: January 10, 2025</p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {/* Terms Sections */}
          <Card className="border-0 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm animate-slide-up animate-stagger-1">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-slate-400 to-zinc-500 rounded-xl flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl text-slate-700 dark:text-slate-300">1. Acceptance of Terms</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                By accessing and using FilePay, you accept and agree to be bound by the terms and provision of this
                agreement. If you do not agree to abide by the above, please do not use this service. These terms apply
                to all visitors, users, and others who access or use the service.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm animate-slide-up animate-stagger-2">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl text-slate-700 dark:text-slate-300">2. User Accounts</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                When you create an account with us, you must provide information that is accurate, complete, and current
                at all times. You are responsible for safeguarding the password and for all activities that occur under
                your account.
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• You must be at least 18 years old to use FilePay</li>
                <li>• One person or legal entity may not maintain more than one account</li>
                <li>• You are responsible for maintaining the security of your account</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm animate-slide-up animate-stagger-3">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                  <CreditCard className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl text-slate-700 dark:text-slate-300">3. Payment Terms</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                FilePay processes payments on behalf of sellers. We charge a small transaction fee for each successful
                sale.
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Transaction fee: 5% + $0.30 per successful sale</li>
                <li>• Payments are processed within 2-7 business days</li>
                <li>• Refunds are handled according to your refund policy</li>
                <li>• We reserve the right to hold funds for security reviews</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm animate-slide-up animate-stagger-4">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-violet-500 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl text-slate-700 dark:text-slate-300">4. Content Policy</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                You are responsible for the content you upload and sell through FilePay. Prohibited content includes:
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• Copyrighted material you don't own</li>
                <li>• Adult or explicit content</li>
                <li>• Illegal or harmful content</li>
                <li>• Malware, viruses, or malicious code</li>
                <li>• Content that violates third-party rights</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm animate-slide-up animate-stagger-5">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center">
                  <AlertTriangle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl text-slate-700 dark:text-slate-300">
                    5. Limitation of Liability
                  </CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                FilePay shall not be liable for any indirect, incidental, special, consequential, or punitive damages,
                including without limitation, loss of profits, data, use, goodwill, or other intangible losses,
                resulting from your use of the service.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm animate-slide-up animate-stagger-6">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-xl flex items-center justify-center">
                  <Lock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl text-slate-700 dark:text-slate-300">6. Privacy Policy</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                Your privacy is important to us. We collect and use your information to provide and improve our
                services.
              </p>
              <ul className="text-gray-600 dark:text-gray-300 space-y-2">
                <li>• We collect only necessary information to provide our services</li>
                <li>• We never sell your personal data to third parties</li>
                <li>• We use industry-standard security measures</li>
                <li>• You can request deletion of your data at any time</li>
              </ul>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm animate-slide-up animate-stagger-7">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-rose-500 rounded-xl flex items-center justify-center">
                  <RefreshCw className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl text-slate-700 dark:text-slate-300">7. Changes to Terms</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                We reserve the right to modify or replace these terms at any time. If a revision is material, we will
                try to provide at least 30 days notice prior to any new terms taking effect.
              </p>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-xl bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm animate-slide-up animate-stagger-8">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-xl flex items-center justify-center">
                  <Scale className="w-6 h-6 text-white" />
                </div>
                <div>
                  <CardTitle className="text-xl text-slate-700 dark:text-slate-300">8. Governing Law</CardTitle>
                </div>
              </div>
            </CardHeader>
            <CardContent className="prose prose-gray dark:prose-invert max-w-none">
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                These terms shall be interpreted and governed by the laws of the State of California, United States,
                without regard to its conflict of law provisions.
              </p>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <Card className="border-0 shadow-2xl bg-gradient-to-r from-slate-500/10 to-zinc-500/10 dark:from-slate-500/20 dark:to-zinc-500/20 backdrop-blur-sm animate-glow">
            <CardContent className="py-12 text-center">
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-slate-400 to-zinc-500 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 bg-gradient-to-r from-slate-600 to-zinc-600 bg-clip-text text-transparent">
                Questions About These Terms?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-6 max-w-2xl mx-auto">
                If you have any questions about these Terms of Service, please don't hesitate to contact us.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-gradient-to-r from-slate-500 to-zinc-500 hover:from-slate-600 hover:to-zinc-600 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <Link href="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Contact Support
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
