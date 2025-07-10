"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ThemeToggle } from "@/components/theme-toggle"
import { Heart, Shield, Zap, Users, TrendingUp, Clock } from "lucide-react"

export default function AboutPageClient() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 dark:from-violet-950 dark:via-purple-950 dark:to-fuchsia-950">
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
              className="text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/upload"
              className="text-gray-600 dark:text-gray-300 hover:text-violet-600 dark:hover:text-violet-400 transition-colors"
            >
              Upload
            </Link>
            <Link href="/about" className="text-violet-600 dark:text-violet-400 font-medium">
              About
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
      </header>

      <main className="container mx-auto px-4 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16 animate-in slide-in-from-bottom-4 duration-1000">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-transparent">
            About FilePay
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We're on a mission to empower creators worldwide with the simplest, most secure way to sell digital files
            and monetize their work.
          </p>
        </div>

        {/* Story Section */}
        <div className="mb-16 animate-in slide-in-from-bottom-4 duration-1000 delay-200">
          <Card className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-0 shadow-xl">
            <CardContent className="p-8 md:p-12">
              <h2 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                Our Story
              </h2>
              <div className="prose prose-lg max-w-none text-gray-600 dark:text-gray-300">
                <p className="mb-6">
                  FilePay was born from a simple frustration: creators were struggling to sell their digital work easily
                  and securely. Whether it was photographers selling stock images, developers sharing code templates, or
                  artists distributing digital art, the process was always complicated, expensive, or unreliable.
                </p>
                <p className="mb-6">
                  We believed there had to be a better way. A platform that puts creators first, with instant payments,
                  secure file delivery, and zero hassle. That's why we built FilePay - to remove all barriers between
                  creators and their success.
                </p>
                <p>
                  Today, thousands of creators trust FilePay to handle their digital sales, and we're just getting
                  started. Every feature we build, every decision we make, is guided by one principle: empowering
                  creators to focus on what they do best - creating.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Simplicity",
                description:
                  "Upload, set price, share link. That's it. We believe powerful tools should be simple to use.",
                delay: "delay-300",
              },
              {
                icon: Shield,
                title: "Security",
                description:
                  "Your files and payments are protected with enterprise-grade security. Your work, your control.",
                delay: "delay-500",
              },
              {
                icon: Heart,
                title: "Creator-First",
                description: "Every decision we make prioritizes creators. You create, we handle the rest.",
                delay: "delay-700",
              },
            ].map((value, index) => (
              <Card
                key={index}
                className={`bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 animate-in slide-in-from-bottom-4 duration-1000 ${value.delay}`}
              >
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-gradient-to-r from-violet-500 to-fuchsia-500 rounded-full flex items-center justify-center">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
            Growing Together
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: TrendingUp,
                stat: "10,000+",
                label: "Files Sold",
                delay: "delay-300",
              },
              {
                icon: Users,
                stat: "2,500+",
                label: "Active Creators",
                delay: "delay-500",
              },
              {
                icon: Clock,
                stat: "99.9%",
                label: "Uptime",
                delay: "delay-700",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-br from-violet-500/10 to-fuchsia-500/10 border-violet-200 dark:border-violet-800 hover:shadow-xl transition-all duration-300 animate-in slide-in-from-bottom-4 duration-1000 ${item.delay}`}
              >
                <CardContent className="p-8 text-center">
                  <item.icon className="w-12 h-12 mx-auto mb-4 text-violet-600 dark:text-violet-400" />
                  <div className="text-3xl font-bold mb-2 bg-gradient-to-r from-violet-600 to-fuchsia-600 bg-clip-text text-transparent">
                    {item.stat}
                  </div>
                  <div className="text-gray-600 dark:text-gray-300 font-medium">{item.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center animate-in slide-in-from-bottom-4 duration-1000 delay-900">
          <Card className="bg-gradient-to-r from-violet-600 to-fuchsia-600 border-0 shadow-2xl">
            <CardContent className="p-12">
              <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Selling?</h2>
              <p className="text-violet-100 text-lg mb-8 max-w-2xl mx-auto">
                Join thousands of creators who trust FilePay to handle their digital sales. Upload your first file and
                start earning today.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-violet-600 hover:bg-gray-100 font-semibold px-8 py-3 text-lg"
              >
                <Link href="/upload">Start Selling Now</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
