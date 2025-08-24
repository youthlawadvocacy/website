"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Instagram, Linkedin, Mail } from "lucide-react"

export default function EntryPage() {
  const [showEntry, setShowEntry] = useState(false)
  const [animationPhase, setAnimationPhase] = useState(0)

  useEffect(() => {
    const hasSeenAnimation = sessionStorage.getItem("yla-animation-seen")

    if (!hasSeenAnimation) {
      setShowEntry(true)

      const phases = [
        () => setAnimationPhase(1), // Start logo animation
        () => setAnimationPhase(2), // Add text animation
        () => setAnimationPhase(3), // Add pulse effect
        () => setAnimationPhase(4), // Final phase
      ]

      const timers = phases.map((phase, index) => setTimeout(phase, (index + 1) * 800))

      const finalTimer = setTimeout(() => {
        setShowEntry(false)
        sessionStorage.setItem("yla-animation-seen", "true")
      }, 4000)

      return () => {
        timers.forEach(clearTimeout)
        clearTimeout(finalTimer)
      }
    }
  }, [])

  if (showEntry) {
    return (
      <div
        className="min-h-screen bg-gradient-to-br from-red-900 to-red-950 flex items-center justify-center cursor-pointer overflow-hidden relative"
        onClick={() => {
          setShowEntry(false)
          sessionStorage.setItem("yla-animation-seen", "true")
        }}
      >
        <div className="absolute inset-0">
          <div
            className={`absolute top-1/4 left-1/4 w-32 h-32 bg-white/10 rounded-full transition-all duration-1000 ${animationPhase >= 2 ? "animate-pulse scale-150" : "scale-0"}`}
          />
          <div
            className={`absolute bottom-1/4 right-1/4 w-24 h-24 bg-white/10 rounded-full transition-all duration-1000 delay-300 ${animationPhase >= 3 ? "animate-bounce scale-125" : "scale-0"}`}
          />
          <div
            className={`absolute top-1/2 right-1/3 w-16 h-16 bg-white/10 rounded-full transition-all duration-1000 delay-500 ${animationPhase >= 4 ? "animate-spin scale-100" : "scale-0"}`}
          />
        </div>

        <div className="text-center relative z-10">
          <div
            className={`w-48 h-48 mx-auto mb-8 transition-all duration-1000 ${
              animationPhase >= 1 ? "scale-100 rotate-0" : "scale-0 rotate-180"
            } ${animationPhase >= 3 ? "animate-pulse" : ""}`}
          >
            <Image
              src="/yla-logo.png"
              alt="Youth Law Advocacy Logo"
              width={192}
              height={192}
              className="w-full h-full object-contain"
            />
          </div>

          <h1
            className={`text-3xl font-serif text-white mb-4 transition-all duration-1000 ${
              animationPhase >= 2 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Youth Law Advocacy
          </h1>

          <div
            className={`flex justify-center space-x-2 mb-6 transition-all duration-500 ${
              animationPhase >= 3 ? "opacity-100" : "opacity-0"
            }`}
          >
            <div className="w-2 h-8 bg-white/60 rounded animate-pulse" style={{ animationDelay: "0ms" }} />
            <div className="w-2 h-8 bg-white/60 rounded animate-pulse" style={{ animationDelay: "200ms" }} />
            <div className="w-2 h-8 bg-white/60 rounded animate-pulse" style={{ animationDelay: "400ms" }} />
          </div>

          <p
            className={`text-white/80 text-sm transition-all duration-1000 delay-300 ${
              animationPhase >= 4 ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Click anywhere to continue
          </p>

          <div className="absolute inset-0 pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 bg-white/40 rounded-full transition-all duration-2000 ${
                  animationPhase >= 3 ? "animate-bounce" : "opacity-0"
                }`}
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 2) * 40}%`,
                  animationDelay: `${i * 300}ms`,
                  animationDuration: `${2000 + i * 200}ms`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }

  return <HomePage />
}

function HomePage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <nav className="px-6 py-4 shadow-lg bg-stone-100 border-b border-stone-200">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-12">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Image src="/yla-logo.png" alt="YLA Logo" width={40} height={40} className="w-10 h-10 object-contain" />
              <span className="font-serif text-xl font-semibold text-red-900">YLA</span>
            </div>

            <div className="hidden md:flex space-x-8">
              <a href="/" className="text-red-700 font-semibold border-b-2 border-red-700 pb-1">
                Home
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
          <div className="bg-stone-50 rounded-2xl p-16 text-center shadow-2xl">
            <h1 className="text-6xl font-serif font-bold text-red-950 mb-8 leading-tight">Helping Youth Access Law</h1>
            <h2 className="text-4xl font-serif text-red-800 mb-12">The Youth Law Advocacy</h2>
            <p className="text-xl text-red-700 max-w-3xl mx-auto leading-relaxed">
              It is a youth led non profit organization currently based in the GTA (Canada), helping youth gain insight
              in the world of Law through panels, competitions, and other events.
            </p>
          </div>

          {/* About Section */}
          <div className="mt-16">
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

            <div className="text-center mb-16">
              <h2 className="text-6xl font-serif font-bold text-white mb-12">About the YLA</h2>
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
              <h3 className="text-4xl font-serif font-bold text-red-900 mb-12 text-center">What We Do</h3>

              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-20 h-20 bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl text-white font-bold">P</span>
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-red-900 mb-4">Panels</h4>
                  <p className="text-red-800 leading-relaxed">
                    Interactive discussions with legal professionals, judges, and law students sharing their experiences
                    and insights into various areas of law.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl text-white font-bold">C</span>
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-red-900 mb-4">Competitions</h4>
                  <p className="text-red-800 leading-relaxed">
                    Engaging case competitions and mock trials that allow youth to apply legal reasoning and develop
                    critical thinking skills in real-world scenarios.
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-20 h-20 bg-red-900 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl text-white font-bold">E</span>
                  </div>
                  <h4 className="text-2xl font-serif font-bold text-red-900 mb-4">Events</h4>
                  <p className="text-red-800 leading-relaxed">
                    Workshops, seminars, and networking events designed to educate, inspire, and connect young people
                    with the legal community.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Social Links Section */}
          <div className="mt-16 text-center">
            <div className="flex justify-center space-x-6">
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
          </div>

          <footer className="mt-20 text-center"></footer>
        </div>
      </main>
    </div>
  )
}
