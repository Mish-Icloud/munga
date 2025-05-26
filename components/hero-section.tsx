"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense, useRef } from "react"
import { useFrame } from "@react-three/fiber"
import { Box } from "@react-three/drei"
import { Button } from "@/components/ui/button"
import type * as THREE from "three"

function FloatingCube() {
  const meshRef = useRef<THREE.Mesh>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2
    }
  })

  return (
    <Box ref={meshRef} args={[1, 1, 1]}>
      <meshStandardMaterial color="#00ffff" transparent opacity={0.7} wireframe />
    </Box>
  )
}

export function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 opacity-90" />

      <div className="container mx-auto px-4 z-10 text-center">
        <div className="mb-8">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-green-400 bg-clip-text text-transparent">
            MISHECK MUNGA
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-2">
            I Don't Just Code. I Decipher. I Secure. I Innovate.
          </div>
          <div className="text-lg md:text-xl text-cyan-400 mb-8">Blockchain Developer & Cybersecurity Engineer</div>
          <p className="text-gray-400 max-w-2xl mx-auto mb-8">
            Architecting Resilient Systems and Uncovering Hidden Pathways
          </p>
        </div>

        {/* 3D Interactive Element */}
        <div className="h-40 mb-8">
          <Canvas camera={{ position: [0, 0, 3] }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <pointLight position={[10, 10, 10]} />
              <FloatingCube />
            </Suspense>
          </Canvas>
        </div>

        <div className="space-x-4">
          <Button
            onClick={scrollToAbout}
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white px-8 py-3 text-lg"
          >
            Explore My Work
          </Button>
          <Button
            variant="outline"
            className="border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-gray-900 px-8 py-3 text-lg"
          >
            Enter the Grid
          </Button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  )
}
