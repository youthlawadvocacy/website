"use client"

import Image from "next/image"
import { Instagram, Linkedin, Mail } from "lucide-react"

export default function BoardPage() {
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
              <a href="/events" className="hover:text-red-700 transition-colors font-medium text-red-900">
                Events
              </a>
              <a href="/board" className="text-red-700 font-semibold border-b-2 border-red-700 pb-1">
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

          {/* Social Icons */}
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
          {/* Social Icons */}
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
            <h1 className="text-6xl font-serif font-bold text-white mb-8">The YLA Board</h1>
            <p className="text-xl text-stone-200 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated youth leaders who drive our mission forward and make our programs possible.
            </p>
          </div>

          {/* Leadership Message */}
          <div className="bg-stone-50 rounded-2xl p-16 shadow-2xl mb-16">
            <h2 className="text-4xl font-serif font-bold text-red-900 mb-8 text-center">Our Leadership</h2>
            <p className="text-lg text-red-800 leading-relaxed text-center max-w-4xl mx-auto">
              The Youth Law Advocacy is proudly led by passionate young individuals who understand the challenges and
              opportunities facing today's youth. Our board members bring diverse perspectives, skills, and experiences
              to create meaningful programs that bridge the gap between youth and the legal profession.
            </p>
          </div>

          <div className="bg-stone-50 rounded-2xl p-16 shadow-2xl mb-16">
            <div className="flex items-center gap-16">
              <div className="flex-shrink-0">
                <h2 className="text-5xl font-serif font-bold text-red-900">
                  <div className="flex flex-col space-y-2">
                    <span className="text-6xl font-bold">F</span>
                    <span className="text-6xl font-bold">O</span>
                    <span className="text-6xl font-bold">U</span>
                    <span className="text-6xl font-bold">N</span>
                    <span className="text-6xl font-bold">D</span>
                    <span className="text-6xl font-bold">E</span>
                    <span className="text-6xl font-bold">R</span>
                    <span className="text-6xl font-bold">S</span>
                  </div>
                </h2>
              </div>
              <div className="flex-1">
                <p className="text-lg text-red-800 mb-8">
                  The visionary leaders who established YLA with a dream to make legal education accessible to all
                  youth.
                </p>
                <div className="flex space-x-8">
                  <div className="text-center">
                    <div className="w-40 h-40 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-red-600 font-semibold">PHOTO</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-red-900">Co-Founder</h3>
                    <p className="text-red-800">Executive Director</p>
                  </div>
                  <div className="text-center">
                    <div className="w-40 h-40 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-red-600 font-semibold">PHOTO</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-red-900">Co-Founder</h3>
                    <p className="text-red-800">Program Director</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-2xl p-16 shadow-2xl mb-16">
            <div className="flex items-center gap-16">
              <div className="flex-shrink-0">
                <h2 className="text-5xl font-serif font-bold text-red-900">
                  <div className="flex flex-col space-y-2">
                    <span className="text-6xl font-bold">W</span>
                    <span className="text-6xl font-bold">E</span>
                    <span className="text-6xl font-bold">B</span>
                  </div>
                </h2>
              </div>
              <div className="flex-1">
                <p className="text-lg text-red-800 mb-8">
                  Tech-savvy team members who maintain our digital presence and ensure our online platforms serve our
                  community effectively.
                </p>
                <div className="flex justify-start">
                  <div className="text-center">
                    <div className="w-40 h-40 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-red-600 font-semibold">PHOTO</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-red-900">Web Developer</h3>
                    <p className="text-red-800">Digital Platform Management</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-2xl p-16 shadow-2xl mb-16">
            <div className="flex items-center gap-16">
              <div className="flex-shrink-0">
                <h2 className="text-5xl font-serif font-bold text-red-900">
                  <div className="flex flex-col space-y-2">
                    <span className="text-6xl font-bold">M</span>
                    <span className="text-6xl font-bold">A</span>
                    <span className="text-6xl font-bold">R</span>
                    <span className="text-6xl font-bold">K</span>
                    <span className="text-6xl font-bold">E</span>
                    <span className="text-6xl font-bold">T</span>
                    <span className="text-6xl font-bold">I</span>
                    <span className="text-6xl font-bold">N</span>
                    <span className="text-6xl font-bold">G</span>
                  </div>
                </h2>
              </div>
              <div className="flex-1">
                <p className="text-lg text-red-800 mb-8">
                  Creative minds who spread our message and connect with youth across the GTA through innovative
                  campaigns.
                </p>
                <div className="flex space-x-8">
                  <div className="text-center">
                    <div className="w-40 h-40 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-red-600 font-semibold">PHOTO</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-red-900">Marketing Lead</h3>
                    <p className="text-red-800">Social Media Strategy</p>
                  </div>
                  <div className="text-center">
                    <div className="w-40 h-40 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-red-600 font-semibold">PHOTO</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-red-900">Content Creator</h3>
                    <p className="text-red-800">Brand Development</p>
                  </div>
                  <div className="text-center">
                    <div className="w-40 h-40 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-red-600 font-semibold">PHOTO</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-red-900">Outreach Coordinator</h3>
                    <p className="text-red-800">Community Engagement</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-2xl p-16 shadow-2xl mb-16">
            <div className="flex items-center gap-16">
              <div className="flex-shrink-0">
                <h2 className="text-5xl font-serif font-bold text-red-900">
                  <div className="flex flex-col space-y-2">
                    <span className="text-6xl font-bold">E</span>
                    <span className="text-6xl font-bold">V</span>
                    <span className="text-6xl font-bold">E</span>
                    <span className="text-6xl font-bold">N</span>
                    <span className="text-6xl font-bold">T</span>
                    <span className="text-3xl font-bold">PLANNING</span>
                  </div>
                </h2>
              </div>
              <div className="flex-1">
                <p className="text-lg text-red-800 mb-8">
                  The organizational powerhouse behind our panels, competitions, and workshops that bring legal
                  education to life.
                </p>
                <div className="flex space-x-8">
                  <div className="text-center">
                    <div className="w-40 h-40 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-red-600 font-semibold">PHOTO</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-red-900">Events Director</h3>
                    <p className="text-red-800">Program Coordination</p>
                  </div>
                  <div className="text-center">
                    <div className="w-40 h-40 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-red-600 font-semibold">PHOTO</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-red-900">Logistics Manager</h3>
                    <p className="text-red-800">Operations & Venues</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-2xl p-16 shadow-2xl mb-16">
            <div className="flex items-center gap-16">
              <div className="flex-shrink-0">
                <h2 className="text-5xl font-serif font-bold text-red-900">
                  <div className="flex flex-col space-y-2">
                    <span className="text-6xl font-bold">P</span>
                    <span className="text-6xl font-bold">H</span>
                    <span className="text-6xl font-bold">O</span>
                    <span className="text-6xl font-bold">T</span>
                    <span className="text-6xl font-bold">O</span>
                    <span className="text-6xl font-bold">G</span>
                    <span className="text-6xl font-bold">R</span>
                    <span className="text-6xl font-bold">A</span>
                    <span className="text-6xl font-bold">P</span>
                    <span className="text-6xl font-bold">H</span>
                    <span className="text-6xl font-bold">Y</span>
                  </div>
                </h2>
              </div>
              <div className="flex-1">
                <p className="text-lg text-red-800 mb-8">
                  Visual storytellers who capture the energy and impact of our events, preserving memories and sharing
                  our journey.
                </p>
                <div className="flex justify-start">
                  <div className="text-center">
                    <div className="w-40 h-40 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-red-600 font-semibold">PHOTO</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-red-900">Lead Photographer</h3>
                    <p className="text-red-800">Event Documentation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-stone-50 rounded-2xl p-16 shadow-2xl mb-16">
            <div className="flex items-center gap-16">
              <div className="flex-shrink-0">
                <h2 className="text-5xl font-serif font-bold text-red-900">
                  <div className="flex flex-col space-y-2">
                    <span className="text-6xl font-bold">F</span>
                    <span className="text-6xl font-bold">I</span>
                    <span className="text-6xl font-bold">N</span>
                    <span className="text-6xl font-bold">A</span>
                    <span className="text-6xl font-bold">N</span>
                    <span className="text-6xl font-bold">C</span>
                    <span className="text-6xl font-bold">E</span>
                  </div>
                </h2>
              </div>
              <div className="flex-1">
                <p className="text-lg text-red-800 mb-8">
                  Financial stewards who ensure responsible resource management and sustainable growth for our
                  organization.
                </p>
                <div className="flex justify-start">
                  <div className="text-center">
                    <div className="w-40 h-40 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                      <span className="text-red-600 font-semibold">PHOTO</span>
                    </div>
                    <h3 className="text-xl font-serif font-bold text-red-900">Treasurer</h3>
                    <p className="text-red-800">Financial Planning & Oversight</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Join Our Team */}
          <div className="text-center">
            <div className="bg-stone-50 rounded-2xl p-16 shadow-2xl">
              <h2 className="text-4xl font-serif font-bold text-red-900 mb-8">Join Our Team</h2>
              <p className="text-xl text-red-800 leading-relaxed mb-8 max-w-3xl mx-auto">
                Are you passionate about law and youth empowerment? We're always looking for dedicated individuals to
                join our board and help expand our impact across the GTA and beyond.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-red-900 hover:bg-red-800 text-white font-serif text-lg px-8 py-3 rounded-lg transition-colors"
                >
                  Apply to Join
                </a>
                <a
                  href="/"
                  className="border-2 border-red-900 text-red-900 hover:bg-red-900 hover:text-white font-serif text-lg px-8 py-3 rounded-lg transition-colors"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-red-900 to-red-950 py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-white/60 text-sm">
            Website by <span className="text-white/80 font-medium">Adil Mukhi</span>
          </p>
        </div>
      </footer>
    </div>
  )
}
