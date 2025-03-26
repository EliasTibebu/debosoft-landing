"use client"

import Image from "next/image"
import { useEffect, useState } from "react"

export function CoFoundersImage() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="relative h-full w-full rounded-lg overflow-hidden bg-muted/30">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 z-0"></div>

      {/* Cofounders images */}
      <div className="relative h-full w-full flex items-center justify-center p-4 z-10">
        <div className="relative grid grid-cols-2 gap-4 w-full max-w-md">
          {/* Elias - Top Left */}
          <div className="relative aspect-square overflow-hidden rounded-lg border-4 border-background shadow-xl transform -rotate-3 hover:rotate-0 transition-transform duration-300">
            <Image src="/images/elias-tibebu.png" alt="Elias Tibebu" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
              <p className="text-white text-sm font-medium">Elias Tibebu</p>
              <p className="text-white/80 text-xs">CTO</p>
            </div>
          </div>

          {/* Ekram - Top Right */}
          <div className="relative aspect-square overflow-hidden rounded-lg border-4 border-background shadow-xl transform rotate-3 hover:rotate-0 transition-transform duration-300">
            <Image src="/images/ekram-hassan.png" alt="Ekram Hassan" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
              <p className="text-white text-sm font-medium">Ekram Hassan</p>
              <p className="text-white/80 text-xs">CEO</p>
            </div>
          </div>

          {/* Fiyori - Bottom Center */}
          <div className="relative aspect-square overflow-hidden rounded-lg border-4 border-background shadow-xl transform -rotate-2 hover:rotate-0 transition-transform duration-300 col-span-2 mx-auto w-3/4 mt-[-10%]">
            <Image src="/images/fiyori-alemseged.png" alt="Fiyori Alemseged" fill className="object-cover" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-2">
              <p className="text-white text-sm font-medium">Fiyori Alemseged</p>
              <p className="text-white/80 text-xs">Co-Founder & COO</p>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-4 left-4 h-20 w-20 rounded-full bg-primary/10 z-0"></div>
      <div className="absolute bottom-4 right-4 h-16 w-16 rounded-full bg-primary/10 z-0"></div>
    </div>
  )
}

