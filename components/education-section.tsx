"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, Award, Calendar } from "lucide-react"

export function EducationSection() {
  const education = [
    {
      degree: "BSc Computer Technology",
      institution: "Multimedia University",
      period: "2021 - 2025",
      status: "In Progress",
      description: "Comprehensive study of computer systems, software development, and emerging technologies",
      highlights: ["Software Engineering", "Data Structures & Algorithms", "Network Security", "Database Systems"],
      color: "cyan",
    },
    {
      degree: "AI Career Essentials",
      institution: "ALX Africa",
      period: "2023 - 2024",
      status: "Completed",
      description: "Intensive program covering artificial intelligence fundamentals and practical applications",
      highlights: ["Machine Learning", "Data Science", "AI Ethics", "Python Programming"],
      color: "purple",
    },
  ]

  const certifications = [
    { name: "Blockchain Security Specialist", issuer: "Industry Certification", year: "2024" },
    { name: "Ethical Hacking Fundamentals", issuer: "Cybersecurity Institute", year: "2023" },
    { name: "Smart Contract Development", issuer: "Blockchain Academy", year: "2023" },
    { name: "Data Structures & Algorithms", issuer: "Tech Certification Board", year: "2022" },
  ]

  return (
    <section id="education" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 opacity-95" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">Foundational Code</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Building expertise through continuous learning and formal education
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <GraduationCap className={`w-6 h-6 text-${edu.color}-400`} />
                  <div>
                    <h3 className="text-xl">{edu.degree}</h3>
                    <p className="text-gray-400 font-normal">{edu.institution}</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="w-4 h-4" />
                    {edu.period}
                  </div>
                  <Badge variant="outline" className={`border-${edu.color}-400/50 text-${edu.color}-400`}>
                    {edu.status}
                  </Badge>
                </div>

                <p className="text-gray-300 leading-relaxed">{edu.description}</p>

                <div>
                  <h4 className="text-sm font-semibold text-cyan-400 mb-2">Key Areas</h4>
                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight) => (
                      <Badge key={highlight} variant="secondary" className="bg-gray-700/50 text-gray-300">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Certifications */}
        <Card className="max-w-4xl mx-auto bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-center justify-center">
              <Award className="w-6 h-6 text-purple-400" />
              <span className="text-purple-400">Certifications & Achievements</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-gray-700/30 border border-gray-600/30"
                >
                  <div className="w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-200">{cert.name}</h4>
                    <p className="text-sm text-gray-400">
                      {cert.issuer} • {cert.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Learning Philosophy */}
        <div className="text-center mt-16">
          <Card className="max-w-2xl mx-auto bg-gradient-to-r from-cyan-400/10 to-purple-500/10 border-cyan-400/30">
            <CardContent className="p-8">
              <h3 className="text-xl font-bold text-cyan-400 mb-4">Continuous Learning</h3>
              <p className="text-gray-300 leading-relaxed">
                "In the rapidly evolving world of technology, yesterday's expertise is today's foundation. I believe in
                perpetual learning, staying ahead of emerging threats, and mastering new tools that shape the future of
                digital security."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
