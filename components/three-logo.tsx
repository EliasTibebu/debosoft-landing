"use client"
import dynamic from "next/dynamic"

// Dynamically import Three.js to avoid SSR issues
const ThreeLogoClient = dynamic(() => import("./three-logo-client"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-full min-h-[300px] bg-primary/5 rounded-xl flex items-center justify-center">
      <div className="animate-pulse w-20 h-20 bg-primary/20 rounded-lg"></div>
    </div>
  ),
})

export default function ThreeLogo() {
  return <ThreeLogoClient />
}

