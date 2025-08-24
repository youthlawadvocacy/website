"use client"

import type React from "react"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-stone-50">
      <nav className="px-6 py-4 shadow-lg bg-stone-100 border-b border-stone-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-12">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Image src="/yla-logo.png" alt="YLA Logo" width={40} height={40} className="w-10 h-10 object-contain" />
              <a
                href="/"
                className="font-serif text-xl font-semibold text-red-900 hover:text-red-700 transition-colors"
              >
                YLA
              </a>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex space-x-8">
              <a href="/about" className="hover:text-red-700 transition-colors font-medium text-red-900">
                About
              </a>
              <a href="/events" className="hover:text-red-700 transition-colors font-medium text-red-900">
                Events
              </a>
              <a href="/board" className="hover:text-red-700 transition-colors font-medium text-red-900">
                Board
              </a>
              <a href="/contact" className="text-red-700 font-semibold border-b-2 border-red-700 pb-1">
                Contact
              </a>
              <a href="/partners" className="hover:text-red-700 transition-colors font-medium text-red-900">
                Our Partners
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/theyla.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-700 transition-colors font-medium text-red-900"
            >
              IG
            </a>
            <a href="#" className="hover:text-red-700 transition-colors font-medium text-red-900">
              LINK
            </a>
            <a href="#" className="hover:text-red-700 transition-colors font-medium text-red-900">
              EDIN
            </a>
          </div>
        </div>
      </nav>

      <main className="bg-gradient-to-br from-red-900 to-red-950 min-h-screen">
        <div className="max-w-6xl mx-auto px-6 py-20">
          {/* Social Links Header */}
          <div className="flex justify-center space-x-8 text-lg mb-12">
            <a
              href="https://www.instagram.com/theyla.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-stone-200 transition-colors font-medium"
            >
              IG
            </a>
            <a href="#" className="text-white hover:text-stone-200 transition-colors font-medium">
              LINK
            </a>
            <a href="#" className="text-white hover:text-stone-200 transition-colors font-medium">
              EDIN
            </a>
          </div>

          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-serif font-bold text-white mb-8">Inquiries? Contact Us.</h1>
            <p className="text-xl text-stone-200 max-w-3xl mx-auto leading-relaxed">
              We'd love to hear from you! Whether you have questions, want to get involved, or need more information
              about our programs, don't hesitate to reach out.
            </p>
          </div>

          {/* Contact Methods */}
          <div className="bg-stone-50 rounded-2xl p-16 shadow-2xl mb-16">
            <h2 className="text-4xl font-serif font-bold text-red-900 mb-12 text-center">Get In Touch</h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Email Contact */}
              <div className="text-center">
                <div className="w-20 h-20 bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white font-bold">@</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-red-900 mb-4">Email Us</h3>
                <a
                  href="mailto:youthlawadvocacy@gmail.com"
                  className="text-lg text-red-800 hover:text-red-600 transition-colors"
                >
                  youthlawadvocacy@gmail.com
                </a>
                <p className="text-red-700 mt-2 text-sm">We typically respond within 24 hours</p>
              </div>

              {/* Instagram */}
              <div className="text-center">
                <div className="w-20 h-20 bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white font-bold">IG</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-red-900 mb-4">Follow Us</h3>
                <a
                  href="https://www.instagram.com/theyla.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg text-red-800 hover:text-red-600 transition-colors"
                >
                  @yla.ca
                </a>
                <p className="text-red-700 mt-2 text-sm">Stay updated with our latest events</p>
              </div>

              {/* LinkedIn */}
              <div className="text-center">
                <div className="w-20 h-20 bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white font-bold">IN</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-red-900 mb-4">Connect</h3>
                <a href="#" className="text-lg text-red-800 hover:text-red-600 transition-colors">
                  LINKEDIN Page
                </a>
                <p className="text-red-700 mt-2 text-sm">Professional networking and updates</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-stone-50 rounded-2xl p-16 shadow-2xl mb-16">
            <h2 className="text-4xl font-serif font-bold text-red-900 mb-8 text-center">Send Us a Message</h2>
            <p className="text-lg text-red-800 text-center mb-12 max-w-2xl mx-auto">
              Have a specific question or inquiry? Fill out the form below and we'll get back to you as soon as
              possible.
            </p>

            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-red-900 font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-red-900 font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-red-900 font-semibold mb-2">
                  Subject *
                </label>
                <select
                  id="subject"
                  name="subject"
                  required
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="events">Event Information</option>
                  <option value="volunteer">Volunteer Opportunities</option>
                  <option value="partnership">Partnership/Sponsorship</option>
                  <option value="board">Board Application</option>
                  <option value="media">Media Inquiry</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-red-900 font-semibold mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={6}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-red-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-vertical"
                  placeholder="Tell us more about your inquiry..."
                />
              </div>

              <Button type="submit" className="w-full bg-red-900 hover:bg-red-800 text-white font-serif text-lg py-3">
                Send Message
              </Button>
            </form>
          </div>

          {/* FAQ Section */}
          <div className="bg-stone-50 rounded-2xl p-16 shadow-2xl">
            <h2 className="text-4xl font-serif font-bold text-red-900 mb-12 text-center">Frequently Asked Questions</h2>

            <div className="max-w-4xl mx-auto space-y-8">
              <div>
                <h3 className="text-xl font-serif font-bold text-red-900 mb-3">
                  How can I get involved with YLA events?
                </h3>
                <p className="text-red-800 leading-relaxed">
                  You can stay updated on our events by following our social media accounts and checking our Events page
                  regularly. Most events are free and open to all youth interested in law.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-red-900 mb-3">
                  Do I need legal experience to participate?
                </h3>
                <p className="text-red-800 leading-relaxed">
                  Not at all! Our programs are designed for youth at all levels of legal knowledge. Whether you're just
                  curious about law or already planning a legal career, there's something for everyone.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-red-900 mb-3">How can I join the YLA board?</h3>
                <p className="text-red-800 leading-relaxed">
                  We're always looking for passionate youth to join our team. Send us an email with your interest and
                  background, and we'll let you know about current opportunities and application processes.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-serif font-bold text-red-900 mb-3">
                  Can my organization partner with YLA?
                </h3>
                <p className="text-red-800 leading-relaxed">
                  We welcome partnerships with organizations that share our mission. Please reach out through our
                  contact form or visit our Partners page to learn more about collaboration opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
