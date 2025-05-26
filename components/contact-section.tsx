"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "misheckmunga78@gmail.com",
      href: "mailto:misheckmunga78@gmail.com",
      color: "cyan",
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+254 7 98934136",
      href: "tel:+254798934136",
      color: "purple",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Nairobi, Kenya",
      href: "#",
      color: "green",
    },
  ]

  const socialLinks = [
    { icon: <Github className="w-5 h-5" />, label: "GitHub", href: "#", color: "gray" },
    { icon: <Linkedin className="w-5 h-5" />, label: "LinkedIn", href: "#", color: "blue" },
    { icon: <Twitter className="w-5 h-5" />, label: "Twitter", href: "#", color: "cyan" },
  ]

  return (
    <section id="contact" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-800 to-gray-900 opacity-95" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-cyan-400">Establish Connection</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">Let's Build • Secure • Innovate Together</p>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mt-4" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
              <CardHeader>
                <CardTitle className="text-2xl text-cyan-400">Get In Touch</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-gray-300 leading-relaxed">
                  Ready to collaborate on your next security project or discuss innovative blockchain solutions? I'm
                  always excited to connect with fellow developers, security enthusiasts, and visionaries who share a
                  passion for building a more secure digital future.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <a
                      key={index}
                      href={info.href}
                      className={`flex items-center gap-4 p-4 rounded-lg bg-gray-700/30 border border-gray-600/30 hover:border-${info.color}-400/50 transition-all duration-300 group`}
                    >
                      <div className={`text-${info.color}-400 group-hover:scale-110 transition-transform`}>
                        {info.icon}
                      </div>
                      <div>
                        <p className="text-sm text-gray-400">{info.label}</p>
                        <p className="text-gray-200 font-medium">{info.value}</p>
                      </div>
                    </a>
                  ))}
                </div>

                {/* Social Links */}
                <div className="pt-6 border-t border-gray-700">
                  <h4 className="text-lg font-semibold text-cyan-400 mb-4">Connect Online</h4>
                  <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        className={`p-3 rounded-lg bg-gray-700/30 border border-gray-600/30 hover:border-${social.color}-400/50 hover:bg-${social.color}-400/10 transition-all duration-300 group`}
                        title={social.label}
                      >
                        <div className={`text-${social.color}-400 group-hover:scale-110 transition-transform`}>
                          {social.icon}
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="bg-gradient-to-r from-cyan-400/10 to-purple-500/10 border-cyan-400/30">
              <CardContent className="p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-cyan-400">24h</div>
                    <div className="text-sm text-gray-400">Response Time</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-purple-400">100%</div>
                    <div className="text-sm text-gray-400">Confidential</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-green-400">∞</div>
                    <div className="text-sm text-gray-400">Possibilities</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-gray-800/50 border-gray-700/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-cyan-400">Send Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-gray-700/50 border-gray-600 focus:border-cyan-400 text-white"
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-gray-700/50 border-gray-600 focus:border-cyan-400 text-white"
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="bg-gray-700/50 border-gray-600 focus:border-cyan-400 text-white"
                    placeholder="Project collaboration, security consultation, etc."
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="bg-gray-700/50 border-gray-600 focus:border-cyan-400 text-white resize-none"
                    placeholder="Tell me about your project, security needs, or collaboration ideas..."
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white py-3 text-lg font-medium"
                >
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Footer */}
        <div className="text-center mt-16 pt-8 border-t border-gray-700">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Misheck Munga. Building secure futures, one line of code at a time.
          </p>
        </div>
      </div>
    </section>
  )
}
