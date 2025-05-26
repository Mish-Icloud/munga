"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, ChevronRight } from "lucide-react"

export function ExperienceSection() {
  const [selectedExperience, setSelectedExperience] = useState(0)

  const experiences = [
    {
      title: "Blockchain Security Analyst",
      company: "WHTA Networks",
      period: "2023 - Present",
      location: "Remote",
      color: "cyan",
      achievements: [
        "Conducted detailed data analysis and documentation of cryptographic processes, vital for maintaining case records and drafting activity reports.",
        "Collaborated with teams to implement secure systems, enhancing teamwork for stakeholder engagements.",
        "Organized and summarized technical findings for reports, preparing me for drafting summaries of complex activities.",
      ],
      skills: ["Cryptography", "Data Analysis", "Security Assessment", "Technical Documentation"],
    },
    {
      title: "Software Developer Intern",
      company: "Parity IT Consultants",
      period: "2022 - 2023",
      location: "Nairobi, Kenya",
      color: "purple",
      achievements: [
        "Managed data organization projects using structures like hash tables and linked lists, honing organizational skills crucial for maintaining filing systems.",
        "Delivered time-sensitive projects within a team, strengthening my ability to meet deadlines and coordinate logistics.",
        "Developed efficient algorithms and data structures for various client applications.",
      ],
      skills: ["Data Structures", "Algorithm Design", "Project Management", "Team Collaboration"],
    },
    {
      title: "Chairperson of the INITIATIVE",
      company: "Tania Children's Centre",
      period: "2021 - 2022",
      location: "Nairobi, Kenya",
      color: "green",
      achievements: [
        "Spearheaded a donation drive for 50+ orphaned children as part of a project management initiative.",
        "Coordinated logistics for team visits, including scheduling, transportation, and distribution.",
        "Engaged with children and staff to understand needs, fostering empathy and advocacy.",
      ],
      skills: ["Leadership", "Project Management", "Community Engagement", "Logistics Coordination"],
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      cyan: "border-cyan-400 bg-cyan-400/10 text-cyan-400",
      purple: "border-purple-400 bg-purple-400/10 text-purple-400",
      green: "border-green-400 bg-green-400/10 text-green-400",
    }
    return colors[color as keyof typeof colors] || colors.cyan
  }

  return (
    <section id="experience" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800 opacity-95" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">Field Operations</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Real-world experience in building secure systems and leading impactful initiatives
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Timeline Navigation */}
          <div className="lg:col-span-1">
            <div className="space-y-4">
              {experiences.map((exp, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedExperience(index)}
                  className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-300 ${
                    selectedExperience === index
                      ? getColorClasses(exp.color)
                      : "border-gray-600 hover:border-gray-500 bg-gray-800/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-bold text-lg">{exp.title}</h3>
                      <p className="text-gray-400">{exp.company}</p>
                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                    <ChevronRight
                      className={`w-5 h-5 transition-transform ${selectedExperience === index ? "rotate-90" : ""}`}
                    />
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Experience Details */}
          <div className="lg:col-span-2">
            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm h-full">
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`w-4 h-4 rounded-full bg-${experiences[selectedExperience].color}-400`} />
                  <div>
                    <h3 className="text-2xl">{experiences[selectedExperience].title}</h3>
                    <p className="text-lg text-gray-400">{experiences[selectedExperience].company}</p>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-6 text-gray-400">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-5 h-5" />
                    {experiences[selectedExperience].period}
                  </div>
                  <div className="flex items-center gap-2">
                    <MapPin className="w-5 h-5" />
                    {experiences[selectedExperience].location}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4 text-cyan-400">Key Achievements</h4>
                  <ul className="space-y-3">
                    {experiences[selectedExperience].achievements.map((achievement, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div
                          className={`w-2 h-2 rounded-full bg-${experiences[selectedExperience].color}-400 mt-2 flex-shrink-0`}
                        />
                        <p className="text-gray-300 leading-relaxed">{achievement}</p>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold mb-4 text-cyan-400">Skills Developed</h4>
                  <div className="flex flex-wrap gap-2">
                    {experiences[selectedExperience].skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className={`border-${experiences[selectedExperience].color}-400/50 text-${experiences[selectedExperience].color}-400`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
