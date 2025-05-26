"use client"

import { Card, CardContent } from "@/components/ui/card"

export function AboutSection() {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 opacity-95" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">The Architect's Blueprint</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto" />
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <Card className="bg-gray-800/50 border-cyan-500/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-cyan-400 mb-4">Hello, I'm Misheck Munga.</h3>
                <p className="text-gray-300 leading-relaxed">
                  A dedicated Software Developer with a core belief in the power of technology to transform and protect.
                  My journey has led me from hands-on community development projects, like organizing donation drives
                  for orphaned children, to the intricate worlds of blockchain security and cryptographic processes.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-purple-500/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <p className="text-gray-300 leading-relaxed">
                  I thrive on understanding how systems work, from the inside out. This 'hacker' mindset isn't just
                  about finding vulnerabilities; it's about creative problem-solving, strengthening defenses, and
                  building innovative solutions that are both robust and efficient.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-gray-800/50 border-green-500/20 backdrop-blur-sm">
              <CardContent className="p-6">
                <p className="text-gray-300 leading-relaxed">
                  Eager to contribute organizational and advocacy skills, with a passion for transitioning these
                  technical capabilities to support and protect.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-cyan-400/30">
                <div className="w-64 h-64 bg-gradient-to-br from-gray-800 to-gray-700 rounded-full flex items-center justify-center border-2 border-cyan-400/50">
                  <div className="text-center">
                    <div className="text-6xl mb-4">🛡️</div>
                    <div className="text-cyan-400 font-bold">Digital</div>
                    <div className="text-purple-400 font-bold">Architect</div>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-cyan-400 rounded-full animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-500 rounded-full animate-pulse delay-300" />
              <div className="absolute top-1/2 -left-8 w-4 h-4 bg-green-400 rounded-full animate-pulse delay-700" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
