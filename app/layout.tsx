import type React from "react"
import "@/app/globals.css"
import { Open_Sans } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
})

export const metadata = {
  title: "Debosoft - Innovative Software Solutions",
  description:
    "Debosoft delivers cutting-edge technology solutions that transform your business operations and drive growth.",
  icons: {
    icon: "/favicon.ico",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${openSans.className} ${openSans.variable}`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'