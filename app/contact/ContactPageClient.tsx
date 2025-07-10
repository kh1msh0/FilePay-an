"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, Mail, Clock, MapPin, Send, CheckCircle } from "lucide-react"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ContactPageClient() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true)
    }, 1000)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-cyan-50 to-blue-50 dark:from-gray-900 dark:via-teal-900/20 dark:to-cyan-900/20">
      {/* Header */}
      <header className="border-b border-white/20 backdrop-blur-sm bg-white/80 dark:bg-gray-900/80 animate-slide-in-left">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-200"
          >
            FilePay
          </Link>
          <div className="flex items-center gap-6">
            <nav className="hidden md:flex items-center gap-6">
              <Link
                href="/about"
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-teal-600 dark:text-teal-400 border-b-2 border-teal-600 dark:border-teal-400"
              >
                Contact
              </Link>
              <Link
                href="/terms"
                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors duration-200"
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
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6 bg-gradient-to-r from-teal-900 via-cyan-800 to-blue-800 dark:from-teal-200 dark:via-cyan-200 dark:to-blue-200 bg-clip-text text-transparent animate-fade-in animate-stagger-1 opacity-0">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto animate-fade-in animate-stagger-2 opacity-0">
            Have questions? Need support? We're here to help you succeed with FilePay.
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
          <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-teal-50 to-cyan-100 dark:from-teal-900/20 dark:to-cyan-900/20 hover:shadow-xl transition-all duration-300 animate-slide-up animate-stagger-1 opacity-0">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-teal-400 to-cyan-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-teal-800 dark:text-teal-200">Email Us</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-teal-700 dark:text-teal-300">support@filepay.app</CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-cyan-50 to-blue-100 dark:from-cyan-900/20 dark:to-blue-900/20 hover:shadow-xl transition-all duration-300 animate-slide-up animate-stagger-2 opacity-0">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-cyan-800 dark:text-cyan-200">Support Hours</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-cyan-700 dark:text-cyan-300">
                Mon-Fri: 9AM-6PM EST
                <br />
                Response within 24 hours
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/20 dark:to-indigo-900/20 hover:shadow-xl transition-all duration-300 animate-slide-up animate-stagger-3 opacity-0">
            <CardHeader>
              <div className="mx-auto w-16 h-16 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-2xl flex items-center justify-center mb-4 shadow-lg">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-blue-800 dark:text-blue-200">Location</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-blue-700 dark:text-blue-300">
                San Francisco, CA
                <br />
                Remote-first team
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto">
          <Card className="border-0 shadow-lg bg-gradient-to-br from-white to-teal-50 dark:from-gray-800 dark:to-teal-900/10 animate-slide-up animate-stagger-4 opacity-0">
            <CardHeader>
              <CardTitle className="text-2xl text-teal-800 dark:text-teal-200 text-center">Send us a Message</CardTitle>
              <CardDescription className="text-center text-teal-600 dark:text-teal-400">
                We'll get back to you as soon as possible
              </CardDescription>
            </CardHeader>
            <CardContent>
              {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-teal-700 dark:text-teal-300">
                        Name
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="border-teal-200 dark:border-teal-700 focus:border-teal-500 dark:focus:border-teal-400"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-teal-700 dark:text-teal-300">
                        Email
                      </Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="border-teal-200 dark:border-teal-700 focus:border-teal-500 dark:focus:border-teal-400"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-teal-700 dark:text-teal-300">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="border-teal-200 dark:border-teal-700 focus:border-teal-500 dark:focus:border-teal-400"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-teal-700 dark:text-teal-300">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="border-teal-200 dark:border-teal-700 focus:border-teal-500 dark:focus:border-teal-400"
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-green-700 dark:text-green-400 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-green-600 dark:text-green-300 mb-6">
                    Thank you for contacting us. We'll get back to you within 24 hours.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="border-green-500 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20"
                  >
                    Send Another Message
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
