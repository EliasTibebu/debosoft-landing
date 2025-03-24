"use client"
import dynamic from "next/dynamic"

// Dynamically import Three.js to avoid SSR issues
const ThreeBackgroundClient = dynamic(() => import("./three-background-client"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/5 via-background/50 to-background"></div>
  ),
})

export default function ThreeBackground() {
  return <ThreeBackgroundClient />
}

