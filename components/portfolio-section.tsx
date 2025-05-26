"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Terminal, Shield, Code, Database, ExternalLink, Github } from "lucide-react"

export function PortfolioSection() {
  const [activeTerminal, setActiveTerminal] = useState("")
  const [terminalOutput, setTerminalOutput] = useState("")

  const projects = [
    {
      title: "Blockchain Security Audit Tool",
      description: "Automated vulnerability detection system for smart contracts",
      tech: ["Solidity", "Web3.js", "Node.js", "Security Analysis"],
      icon: <Shield className="w-6 h-6" />,
      color: "cyan",
      status: "Deployed",
    },
    {
      title: "Cryptographic Hash Analyzer",
      description: "Advanced tool for analyzing and testing cryptographic implementations",
      tech: ["Python", "Cryptography", "Data Analysis", "Security"],
      icon: <Database className="w-6 h-6" />,
      color: "purple",
      status: "In Development",
    },
    {
      title: "Decentralized Identity System",
      description: "Blockchain-based identity verification and management platform",
      tech: ["Ethereum", "IPFS", "React", "Smart Contracts"],
      icon: <Code className="w-6 h-6" />,
      color: "green",
      status: "Concept",
    },
  ]

  const terminalCommands = {
    "scan --vulnerabilities":
      "Scanning smart contract for vulnerabilities...\n✓ No critical vulnerabilities found\n✓ 2 minor optimizations suggested\n✓ Gas efficiency: 94%",
    "analyze --cryptography":
      "Analyzing cryptographic implementation...\n✓ Hash function: SHA-256\n✓ Key strength: 256-bit\n✓ Entropy level: High\n✓ Security rating: A+",
    "deploy --testnet":
      "Deploying to testnet...\n✓ Contract compiled successfully\n✓ Gas estimation: 2,847,392\n✓ Transaction hash: 0x1a2b3c4d...\n✓ Deployment successful!",
    help: "Available commands:\n• scan --vulnerabilities\n• analyze --cryptography\n• deploy --testnet\n• status --network\n• help",
  }

  const handleTerminalCommand = (command: string) => {
    setActiveTerminal(command)
    setTerminalOutput(
      terminalCommands[command as keyof typeof terminalCommands] ||
        'Command not found. Type "help" for available commands.',
    )
  }

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-95" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">The Hacker's Den</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Where innovation meets security - exploring the boundaries of what's possible
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4" />
        </div>

        {/* Interactive Terminal */}
        <div className="max-w-4xl mx-auto mb-16">
          <Card className="bg-gray-900 border-cyan-400/30">
            <CardHeader className="bg-gray-800 border-b border-cyan-400/30">
              <CardTitle className="flex items-center gap-2 text-cyan-400">
                <Terminal className="w-5 h-5" />
                Security Analysis Terminal
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="bg-black text-green-400 font-mono text-sm">
                <div className="p-4 border-b border-gray-700">
                  <div className="flex flex-wrap gap-2">
                    {Object.keys(terminalCommands).map((cmd) => (
                      <Button
                        key={cmd}
                        variant="outline"
                        size="sm"
                        onClick={() => handleTerminalCommand(cmd)}
                        className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10 font-mono text-xs"
                      >
                        {cmd}
                      </Button>
                    ))}
                  </div>
                </div>
                <div className="p-4 min-h-[200px]">
                  <div className="mb-2">
                    <span className="text-cyan-400">misheck@security-lab:~$</span>
                    <span className="ml-2">{activeTerminal}</span>
                  </div>
                  <div className="whitespace-pre-line text-green-400">{terminalOutput}</div>
                  <div className="flex items-center mt-4">
                    <span className="text-cyan-400">misheck@security-lab:~$</span>
                    <span className="ml-2 animate-pulse">_</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Project Showcase */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm hover:border-cyan-400/50 transition-all duration-300 group"
            >
              <CardHeader>
                <CardTitle className="flex items-center gap-3">
                  <div className={`text-${project.color}-400`}>{project.icon}</div>
                  <div>
                    <h3 className="text-lg">{project.title}</h3>
                    <Badge
                      variant="outline"
                      className={`border-${project.color}-400/50 text-${project.color}-400 text-xs`}
                    >
                      {project.status}
                    </Badge>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>

                <div className="flex flex-wrap gap-1">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs bg-gray-700/50">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-2 pt-2">
                  <Button size="sm" variant="outline" className="border-cyan-400/50 text-cyan-400 hover:bg-cyan-400/10">
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="border-purple-400/50 text-purple-400 hover:bg-purple-400/10"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Ethical Hacking Philosophy */}
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-gray-800/50 to-gray-700/50 border-cyan-400/30">
          <CardHeader>
            <CardTitle className="text-center text-2xl text-cyan-400">Ethical Hacking Philosophy</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-300 leading-relaxed">
              "True hacking isn't about breaking things—it's about understanding them so deeply that you can make them
              unbreakable. Every vulnerability discovered is an opportunity to strengthen the digital world we all
              depend on."
            </p>
            <div className="flex justify-center gap-8 text-sm text-gray-400">
              <div className="text-center">
                <div className="text-2xl text-cyan-400 font-bold">100%</div>
                <div>Ethical</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-purple-400 font-bold">24/7</div>
                <div>Learning</div>
              </div>
              <div className="text-center">
                <div className="text-2xl text-green-400 font-bold">∞</div>
                <div>Curiosity</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
