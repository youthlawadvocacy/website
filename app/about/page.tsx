"use client"

import Image from "next/image"

export default function AboutPage() {
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
              <a href="/about" className="text-red-700 font-semibold border-b-2 border-red-700 pb-1">
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

          {/* Main About Section */}
          <div className="text-center mb-16">
            <h1 className="text-6xl font-serif font-bold text-white mb-12">About the YLA</h1>
            <div className="bg-stone-50 rounded-2xl p-16 shadow-2xl">
              <p className="text-2xl text-red-900 leading-relaxed mb-8">
                The YLA is a non-profit organization led by the youth for the youth. Currently based in the GTA
                (Canada), YLA helps youth gain insight in the world of Law through panels, competitions, and other
                events.
              </p>

              <div className="grid md:grid-cols-2 gap-12 mt-12">
                <div className="text-left">
                  <h3 className="text-3xl font-serif font-bold text-red-900 mb-6">Our Mission</h3>
                  <p className="text-lg text-red-800 leading-relaxed">
                    To bridge the gap between youth and the legal profession by providing accessible, engaging, and
                    educational opportunities that inspire the next generation of legal minds.
                  </p>
                </div>

                <div className="text-left">
                  <h3 className="text-3xl font-serif font-bold text-red-900 mb-6">Our Vision</h3>
                  <p className="text-lg text-red-800 leading-relaxed">
                    A future where every young person has the knowledge, confidence, and opportunity to understand and
                    engage with the legal system that shapes their world.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* What We Do Section */}
          <div className="bg-stone-50 rounded-2xl p-16 shadow-2xl mb-16">
            <h2 className="text-4xl font-serif font-bold text-red-900 mb-12 text-center">What We Do</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white font-bold">P</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-red-900 mb-4">Panels</h3>
                <p className="text-red-800 leading-relaxed">
                  Interactive discussions with legal professionals, judges, and law students sharing their experiences
                  and insights into various areas of law.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white font-bold">C</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-red-900 mb-4">Competitions</h3>
                <p className="text-red-800 leading-relaxed">
                  Engaging case competitions and mock trials that allow youth to apply legal reasoning and develop
                  critical thinking skills in real-world scenarios.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl text-white font-bold">E</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-red-900 mb-4">Events</h3>
                <p className="text-red-800 leading-relaxed">
                  Workshops, seminars, and networking events designed to educate, inspire, and connect young people with
                  the legal community.
                </p>
              </div>
            </div>
          </div>

          {/* Our Impact Section */}
          <div className="bg-stone-50 rounded-2xl p-16 shadow-2xl mb-16">
            <h2 className="text-4xl font-serif font-bold text-red-900 mb-12 text-center">Our Impact</h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-3xl font-serif font-bold text-red-900 mb-6">Youth Empowerment</h3>
                <p className="text-lg text-red-800 leading-relaxed mb-6">
                  We believe that knowledge is power. By providing youth with access to legal education and mentorship,
                  we empower them to make informed decisions and become active participants in their communities.
                </p>
                <ul className="text-red-800 space-y-2">
                  <li>• Over 500 youth reached through our programs</li>
                  <li>• 50+ legal professionals engaged as mentors</li>
                  <li>• 25+ successful events and competitions hosted</li>
                </ul>
              </div>

              <div>
                <h3 className="text-3xl font-serif font-bold text-red-900 mb-6">Community Building</h3>
                <p className="text-lg text-red-800 leading-relaxed mb-6">
                  We foster a supportive community where young people can explore their interest in law, connect with
                  like-minded peers, and build lasting relationships with legal professionals.
                </p>
                <ul className="text-red-800 space-y-2">
                  <li>• Active network of youth advocates</li>
                  <li>• Partnerships with law schools and firms</li>
                  <li>• Ongoing mentorship programs</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Join Us Section */}
          <div className="text-center">
            <div className="bg-stone-50 rounded-2xl p-16 shadow-2xl">
              <h2 className="text-4xl font-serif font-bold text-red-900 mb-8">Join Our Movement</h2>
              <p className="text-xl text-red-800 leading-relaxed mb-8 max-w-3xl mx-auto">
                Whether you're a student curious about law, a young professional looking to give back, or a legal expert
                wanting to mentor the next generation, there's a place for you in the YLA community.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="bg-red-900 hover:bg-red-800 text-white font-serif text-lg px-8 py-3 rounded-lg transition-colors"
                >
                  Get Involved
                </a>
                <a
                  href="/events"
                  className="border-2 border-red-900 text-red-900 hover:bg-red-900 hover:text-white font-serif text-lg px-8 py-3 rounded-lg transition-colors"
                >
                  View Events
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
