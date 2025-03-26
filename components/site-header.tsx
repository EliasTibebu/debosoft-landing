"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

export function SiteHeader() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <img src="/images/debosoft-logo.png" alt="Debosoft Logo" className="h-10 w-auto" />
          </Link>
        </div>
        <nav className="flex gap-6">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${pathname === "/" ? "text-primary" : ""}`}
          >
            Home
          </Link>
          <Link
            href="/about-us"
            className={`text-sm font-medium transition-colors hover:text-primary ${pathname === "/about-us" ? "text-primary" : ""}`}
          >
            About Us
          </Link>
          <Link
            href="/portfolio"
            className={`text-sm font-medium transition-colors hover:text-primary ${pathname === "/portfolio" ? "text-primary" : ""}`}
          >
            Portfolio
          </Link>
          <Link
            href="/careers"
            className={`text-sm font-medium transition-colors hover:text-primary ${pathname === "/careers" ? "text-primary" : ""}`}
          >
            Careers
          </Link>
          <Link
            href="/services"
            className={`text-sm font-medium transition-colors hover:text-primary ${pathname === "/services" ? "text-primary" : ""}`}
          >
            Services
          </Link>
        </nav>
      </div>
    </header>
  )
}

