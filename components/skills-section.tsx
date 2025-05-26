"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield, Code, Database, Users, Brain, Zap } from "lucide-react"

export function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState("blockchain")

  const skillCategories = {
    blockchain: {
      icon: <Database className="w-8 h-8" />,
      title: "Blockchain Development",
      color: "cyan",
      skills: ["Smart Contracts", "Solidity", "DApp Development", "Web3.js", "Ethereum", "Cryptographic Processes"],
    },
    cybersecurity: {
      icon: <Shield className="w-8 h-8" />,
      title: "Cybersecurity Engineering",
      color: "purple",
      skills: [
        "Penetration Testing",
        "Vulnerability Assessment",
        "Network Security",
        "Cryptography",
        "Security Analysis",
        "Risk Assessment",
      ],
    },
    development: {
      icon: <Code className="w-8 h-8" />,
      title: "Software Development",
      color: "green",
      skills: [
        "Data Structures",
        "Hash Tables",
        "Linked Lists",
        "Algorithm Design",
        "System Architecture",
        "API Development",
      ],
    },
    core: {
      icon: <Users className="w-8 h-8" />,
      title: "Core Competencies",
      color: "orange",
      skills: ["Project Management", "Data Analysis", "Documentation", "Teamwork", "Leadership", "Public Relations"],
    },
    technical: {
      icon: <Brain className="w-8 h-8" />,
      title: "Technical Skills",
      color: "pink",
      skills: [
        "Effective Communication",
        "Problem Solving",
        "MS Office Proficiency",
        "Technical Writing",
        "Research",
        "Innovation",
      ],
    },
  }

  const getColorClasses = (color: string, isActive: boolean) => {
    const colors = {
      cyan: isActive
        ? "border-cyan-400 bg-cyan-400/10 text-cyan-400"
        : "border-cyan-400/30 hover:border-cyan-400 hover:bg-cyan-400/5",
      purple: isActive
        ? "border-purple-400 bg-purple-400/10 text-purple-400"
        : "border-purple-400/30 hover:border-purple-400 hover:bg-purple-400/5",
      green: isActive
        ? "border-green-400 bg-green-400/10 text-green-400"
        : "border-green-400/30 hover:border-green-400 hover:bg-green-400/5",
      orange: isActive
        ? "border-orange-400 bg-orange-400/10 text-orange-400"
        : "border-orange-400/30 hover:border-orange-400 hover:bg-orange-400/5",
      pink: isActive
        ? "border-pink-400 bg-pink-400/10 text-pink-400"
        : "border-pink-400/30 hover:border-pink-400 hover:bg-pink-400/5",
    }
    return colors[color as keyof typeof colors] || colors.cyan
  }

  return (
    <section id="skills" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-95" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">The Arsenal</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A comprehensive toolkit for building secure, innovative solutions
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4" />
        </div>

        {/* Skill Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.entries(skillCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`flex items-center gap-2 px-6 py-3 rounded-lg border-2 transition-all duration-300 ${getColorClasses(
                category.color,
                activeCategory === key,
              )}`}
            >
              {category.icon}
              <span className="font-medium">{category.title}</span>
            </button>
          ))}
        </div>

        {/* Active Skills Display */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-2xl">
                <div className={`text-${skillCategories[activeCategory as keyof typeof skillCategories].color}-400`}>
                  {skillCategories[activeCategory as keyof typeof skillCategories].icon}
                </div>
                <span className={`text-${skillCategories[activeCategory as keyof typeof skillCategories].color}-400`}>
                  {skillCategories[activeCategory as keyof typeof skillCategories].title}
                </span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className={`p-3 text-center justify-center border-${skillCategories[activeCategory as keyof typeof skillCategories].color}-400/50 text-${skillCategories[activeCategory as keyof typeof skillCategories].color}-400 hover:bg-${skillCategories[activeCategory as keyof typeof skillCategories].color}-400/10 transition-all duration-300 animate-fade-in`}
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Skill Constellation Visualization */}
        <div className="mt-16 flex justify-center">
          <div className="relative w-96 h-96">
            {Object.entries(skillCategories).map(([key, category], index) => {
              const angle = (index * 2 * Math.PI) / Object.keys(skillCategories).length
              const radius = 120
              const x = Math.cos(angle) * radius
              const y = Math.sin(angle) * radius

              return (
                <div
                  key={key}
                  className={`absolute w-16 h-16 rounded-full border-2 flex items-center justify-center cursor-pointer transition-all duration-300 ${
                    activeCategory === key
                      ? `border-${category.color}-400 bg-${category.color}-400/20 scale-125`
                      : `border-${category.color}-400/50 hover:border-${category.color}-400 hover:scale-110`
                  }`}
                  style={{
                    left: `calc(50% + ${x}px - 2rem)`,
                    top: `calc(50% + ${y}px - 2rem)`,
                  }}
                  onClick={() => setActiveCategory(key)}
                >
                  <div className={`text-${category.color}-400`}>{category.icon}</div>
                </div>
              )
            })}

            {/* Center node */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border-2 border-cyan-400 bg-cyan-400/10 flex items-center justify-center">
              <Zap className="w-8 h-8 text-cyan-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
