"use client"

import Image from "next/image"
import { Instagram, Linkedin, Mail } from "lucide-react"

export default function PartnersPage() {
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
              <a href="/contact" className="hover:text-red-700 transition-colors font-medium text-red-900">
                Contact
              </a>
              <a href="/partners" className="text-red-700 font-semibold border-b-2 border-red-700 pb-1">
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
              className="hover:text-red-700 transition-colors text-red-900"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/youth-law-advocacy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-700 transition-colors text-red-900"
            >
              <Linkedin size={20} />
            </a>
            <a href="mailto:youthlawadvocacy@gmail.com" className="hover:text-red-700 transition-colors text-red-900">
              <Mail size={20} />
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
              className="text-white hover:text-stone-200 transition-colors"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/youth-law-advocacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-stone-200 transition-colors"
            >
              <Linkedin size={24} />
            </a>
            <a href="mailto:youthlawadvocacy@gmail.com" className="text-white hover:text-stone-200 transition-colors">
              <Mail size={24} />
            </a>
          </div>

          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-serif font-bold text-white mb-8">Our Partners & Sponsors</h1>
            <p className="text-xl text-stone-200 max-w-3xl mx-auto leading-relaxed">
              We are grateful for the support of our partners who help make our mission of youth legal education
              possible.
            </p>
          </div>

          {/* Partnership Impact */}
          <div className="bg-stone-50 rounded-2xl p-16 shadow-2xl mb-16">
            <h2 className="text-4xl font-serif font-bold text-red-900 mb-8 text-center">Partnership Impact</h2>
            <p className="text-lg text-red-800 leading-relaxed text-center mb-12 max-w-4xl mx-auto">
              Through strategic partnerships with law firms, educational institutions, and community organizations,
              we've been able to expand our reach and provide high-quality programming to youth across the GTA.
            </p>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-red-900 mb-2">500+</div>
                <p className="text-red-800">Youth Reached</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-900 mb-2">25+</div>
                <p className="text-red-800">Events Hosted</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-red-900 mb-2">50+</div>
                <p className="text-red-800">Legal Professionals Engaged</p>
              </div>
            </div>
          </div>

          {/* Current Sponsors */}
          <div className="bg-stone-50 rounded-2xl p-16 shadow-2xl mb-16">
            <h2 className="text-4xl font-serif font-bold text-red-900 mb-12 text-center">Current Sponsors</h2>
            <p className="text-lg text-red-800 text-center mb-12 max-w-3xl mx-auto">
              We extend our heartfelt gratitude to these organizations for their continued support of youth legal
              education.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="h-32 bg-white rounded-lg flex items-center justify-center border-2 border-red-100 p-4">
                <Image
                  src="/evas-original-logo.png"
                  alt="Eva's Original - Fresh from Budapest"
                  width={120}
                  height={120}
                  className="max-w-full max-h-full object-contain"
                />
              </div>
              <div className="h-32 bg-red-50 rounded-lg flex items-center justify-center border-2 border-red-100">
                <span className="text-red-600 font-semibold">Sponsor Logo</span>
              </div>
              <div className="h-32 bg-red-50 rounded-lg flex items-center justify-center border-2 border-red-100">
                <span className="text-red-600 font-semibold">Sponsor Logo</span>
              </div>
              <div className="h-32 bg-red-50 rounded-lg flex items-center justify-center border-2 border-red-100">
                <span className="text-red-600 font-semibold">Sponsor Logo</span>
              </div>
              <div className="h-32 bg-red-50 rounded-lg flex items-center justify-center border-2 border-red-100">
                <span className="text-red-600 font-semibold">Sponsor Logo</span>
              </div>
              <div className="h-32 bg-red-50 rounded-lg flex items-center justify-center border-2 border-red-100">
                <span className="text-red-600 font-semibold">Sponsor Logo</span>
              </div>
            </div>
          </div>

          {/* Partnership Opportunities */}
          <div className="bg-stone-50 rounded-2xl p-16 shadow-2xl mb-16">
            <h2 className="text-4xl font-serif font-bold text-red-900 mb-12 text-center">Partnership Opportunities</h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-serif font-bold text-red-900 mb-6">For Law Firms</h3>
                <ul className="space-y-4 text-red-800">
                  <li className="flex items-start space-x-3">
                    <span className="text-red-900 font-bold">•</span>
                    <span>Provide speakers for panels and workshops</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-900 font-bold">•</span>
                    <span>Offer mentorship opportunities for youth</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-900 font-bold">•</span>
                    <span>Host office visits and networking events</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-900 font-bold">•</span>
                    <span>Sponsor competitions and awards</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-900 font-bold">•</span>
                    <span>Provide internship and job shadowing opportunities</span>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-2xl font-serif font-bold text-red-900 mb-6">For Educational Institutions</h3>
                <ul className="space-y-4 text-red-800">
                  <li className="flex items-start space-x-3">
                    <span className="text-red-900 font-bold">•</span>
                    <span>Co-host events and competitions</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-900 font-bold">•</span>
                    <span>Provide venue space for programs</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-900 font-bold">•</span>
                    <span>Share resources and expertise</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-900 font-bold">•</span>
                    <span>Facilitate student participation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-900 font-bold">•</span>
                    <span>Offer academic credit for participation</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Sponsorship Levels */}
          <div className="bg-stone-50 rounded-2xl p-16 shadow-2xl mb-16">
            <h2 className="text-4xl font-serif font-bold text-red-900 mb-12 text-center">Sponsorship Levels</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-red-50 rounded-xl p-8 text-center border-2 border-red-200">
                <h3 className="text-2xl font-serif font-bold text-red-900 mb-4">Bronze Partner</h3>
                <div className="text-3xl font-bold text-red-900 mb-6">$500+</div>
                <ul className="space-y-3 text-red-800 text-left">
                  <li>• Logo on website</li>
                  <li>• Social media recognition</li>
                  <li>• Event program listing</li>
                  <li>• Annual impact report</li>
                </ul>
              </div>

              <div className="bg-red-100 rounded-xl p-8 text-center border-2 border-red-300">
                <h3 className="text-2xl font-serif font-bold text-red-900 mb-4">Silver Partner</h3>
                <div className="text-3xl font-bold text-red-900 mb-6">$1,500+</div>
                <ul className="space-y-3 text-red-800 text-left">
                  <li>• All Bronze benefits</li>
                  <li>• Logo on event materials</li>
                  <li>• Speaking opportunities</li>
                  <li>• Networking event invitations</li>
                  <li>• Quarterly updates</li>
                </ul>
              </div>

              <div className="bg-red-200 rounded-xl p-8 text-center border-2 border-red-400">
                <h3 className="text-2xl font-serif font-bold text-red-900 mb-4">Gold Partner</h3>
                <div className="text-3xl font-bold text-red-900 mb-6">$3,000+</div>
                <ul className="space-y-3 text-red-800 text-left">
                  <li>• All Silver benefits</li>
                  <li>• Title sponsor opportunities</li>
                  <li>• Custom partnership packages</li>
                  <li>• Board meeting invitations</li>
                  <li>• Co-branding opportunities</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Become a Partner */}
          <div className="text-center">
            <div className="bg-stone-50 rounded-2xl p-16 shadow-2xl">
              <h2 className="text-4xl font-serif font-bold text-red-900 mb-8">Become a Partner</h2>
              <p className="text-xl text-red-800 leading-relaxed mb-8 max-w-3xl mx-auto">
                Join us in empowering the next generation of legal minds. Together, we can create more opportunities for
                youth to explore, understand, and engage with the legal profession.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-red-900 hover:bg-red-800 text-white font-serif text-lg px-8 py-3 rounded-lg transition-colors"
                >
                  Partner With Us
                </a>
                <a
                  href="mailto:youthlawadvocacy@gmail.com"
                  className="border-2 border-red-900 text-red-900 hover:bg-red-900 hover:text-white font-serif text-lg px-8 py-3 rounded-lg transition-colors"
                >
                  Email Us Directly
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
