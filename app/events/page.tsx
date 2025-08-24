"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Instagram, Linkedin, Mail } from "lucide-react"

export default function EventsPage() {
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
              <a href="/" className="hover:text-red-700 transition-colors font-medium text-red-900">
                Home
              </a>
              <a href="/events" className="text-red-700 font-semibold border-b-2 border-red-700 pb-1">
                Events
              </a>
              <a href="/board" className="hover:text-red-700 transition-colors font-medium text-red-900">
                Board
              </a>
              <a href="/contact" className="hover:text-red-700 transition-colors font-medium text-red-900">
                Contact
              </a>
              <a href="/partners" className="hover:text-red-700 transition-colors font-medium text-red-900">
                Our Partners
              </a>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/theyla.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-700 transition-colors text-red-900 p-2 hover:bg-red-50 rounded-full"
              title="Instagram"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/company/youth-law-advocacy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-red-700 transition-colors text-red-900 p-2 hover:bg-red-50 rounded-full"
              title="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:youthlawadvocacy@gmail.com"
              className="hover:text-red-700 transition-colors text-red-900 p-2 hover:bg-red-50 rounded-full"
              title="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </nav>

      <main className="bg-gradient-to-br from-red-900 to-red-950 min-h-screen">
        <div className="max-w-6xl mx-auto px-6 py-20">
          {/* Social Links Header */}
          <div className="flex justify-center space-x-6 mb-12">
            <a
              href="https://www.instagram.com/theyla.ca/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-stone-200 transition-colors p-3 hover:bg-white/10 rounded-full"
              title="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://www.linkedin.com/company/youth-law-advocacy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-stone-200 transition-colors p-3 hover:bg-white/10 rounded-full"
              title="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
            <a
              href="mailto:youthlawadvocacy@gmail.com"
              className="text-white hover:text-stone-200 transition-colors p-3 hover:bg-white/10 rounded-full"
              title="Email"
            >
              <Mail size={24} />
            </a>
          </div>

          {/* Page Title */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-serif font-bold text-white mb-8">Upcoming Events</h1>
            <p className="text-xl text-stone-200 max-w-3xl mx-auto leading-relaxed">
              Join us for engaging events that bring together youth, legal professionals, and community leaders to
              explore the world of law.
            </p>
          </div>

          {/* Featured Event */}
          <div className="bg-stone-50 rounded-2xl p-16 shadow-2xl mb-16">
            <div className="text-center mb-8">
              <span className="bg-red-900 text-white px-4 py-2 rounded-full text-sm font-semibold">FEATURED EVENT</span>
            </div>

            <h2 className="text-4xl font-serif font-bold text-red-900 mb-8 text-center">
              The Explore III Case Competition
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <p className="text-lg text-red-800 leading-relaxed mb-8">
                  YLA is cohosting the EX3 case competition alongside other non-profits. This exciting competition
                  challenges participants to analyze complex legal scenarios and present innovative solutions.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-red-900 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">📅</span>
                    </div>
                    <span className="text-red-900 font-semibold">November 22nd, 2025 | 10:00 AM - 3:00 PM</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-red-900 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">📍</span>
                    </div>
                    <span className="text-red-900 font-semibold">Ted Rogers School Of Management, Toronto</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-red-900 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-bold">👥</span>
                    </div>
                    <span className="text-red-900 font-semibold">Open to high school and university students</span>
                  </div>
                </div>

                <Button
                  size="lg"
                  className="bg-red-900 hover:bg-red-800 text-white font-serif text-lg px-8 py-3 w-full md:w-auto"
                  onClick={() => window.open("#signup-form", "_blank")}
                >
                  SIGN UP HERE
                </Button>
              </div>

              <div className="bg-red-50 rounded-xl p-8">
                <h3 className="text-2xl font-serif font-bold text-red-900 mb-6">What to Expect</h3>
                <ul className="space-y-4 text-red-800">
                  <li className="flex items-start space-x-3">
                    <span className="text-red-900 font-bold">•</span>
                    <span>Real-world legal case studies and scenarios</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-900 font-bold">•</span>
                    <span>Team-based problem solving and presentation opportunities</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-900 font-bold">•</span>
                    <span>Networking with legal professionals and peers</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-900 font-bold">•</span>
                    <span>Prizes and recognition for outstanding performance</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-red-900 font-bold">•</span>
                    <span>Lunch and refreshments provided</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Event Types */}
          <div className="bg-stone-50 rounded-2xl p-16 shadow-2xl mb-16">
            <h2 className="text-4xl font-serif font-bold text-red-900 mb-12 text-center">Types of Events We Host</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white font-bold">🏛️</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-red-900 mb-4">Legal Panels</h3>
                <p className="text-red-800 leading-relaxed">
                  Interactive discussions with judges, lawyers, and legal scholars covering various areas of law from
                  criminal justice to corporate law.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white font-bold">⚖️</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-red-900 mb-4">Mock Trials</h3>
                <p className="text-red-800 leading-relaxed">
                  Hands-on courtroom simulations where participants take on roles as lawyers, witnesses, and jury
                  members in realistic legal scenarios.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white font-bold">🎓</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-red-900 mb-4">Workshops</h3>
                <p className="text-red-800 leading-relaxed">
                  Educational sessions covering legal writing, research methods, law school preparation, and career
                  guidance in the legal field.
                </p>
              </div>
            </div>
          </div>

          {/* Past Events */}
          <div className="bg-stone-50 rounded-2xl p-16 shadow-2xl mb-16">
            <h2 className="text-4xl font-serif font-bold text-red-900 mb-12 text-center">Past Events</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="text-xl font-serif font-bold text-red-900 mb-3">Constitutional Law Panel</h3>
                <p className="text-red-800 mb-4">
                  A deep dive into Charter rights and freedoms with Supreme Court clerks and constitutional lawyers.
                </p>
                <span className="text-sm text-red-600">September 2024</span>
              </div>

              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="text-xl font-serif font-bold text-red-900 mb-3">Law School Prep Workshop</h3>
                <p className="text-red-800 mb-4">
                  LSAT preparation tips, application guidance, and insights from current law students.
                </p>
                <span className="text-sm text-red-600">August 2024</span>
              </div>

              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="text-xl font-serif font-bold text-red-900 mb-3">Youth Rights Seminar</h3>
                <p className="text-red-800 mb-4">
                  Understanding legal rights and responsibilities for young people in Canada.
                </p>
                <span className="text-sm text-red-600">June 2024</span>
              </div>

              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="text-xl font-serif font-bold text-red-900 mb-3">Networking Night</h3>
                <p className="text-red-800 mb-4">
                  Connecting youth with legal professionals in an informal, supportive environment.
                </p>
                <span className="text-sm text-red-600">May 2024</span>
              </div>
            </div>
          </div>

          {/* Stay Updated */}
          <div className="text-center">
            <div className="bg-stone-50 rounded-2xl p-16 shadow-2xl">
              <h2 className="text-4xl font-serif font-bold text-red-900 mb-8">Stay Updated</h2>
              <p className="text-xl text-red-800 leading-relaxed mb-8 max-w-3xl mx-auto">
                Don't miss out on our upcoming events! Follow us on social media and join our mailing list to be the
                first to know about new opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://www.instagram.com/theyla.ca/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-900 hover:bg-red-800 text-white font-serif text-lg px-8 py-3 rounded-lg transition-colors"
                >
                  Follow on Instagram
                </a>
                <a
                  href="/contact"
                  className="border-2 border-red-900 text-red-900 hover:bg-red-900 hover:text-white font-serif text-lg px-8 py-3 rounded-lg transition-colors"
                >
                  Contact Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
