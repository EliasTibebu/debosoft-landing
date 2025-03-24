"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Code, Database, Globe, MessageSquare, Users, ArrowRight, ChevronRight } from "lucide-react"
import dynamic from "next/dynamic"

// Dynamically import Three.js components
const ThreeBackground = dynamic(() => import("@/components/three-background"), { ssr: false })
const ThreeLogo = dynamic(() => import("@/components/three-logo"), { ssr: false })

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="fixed top-0 z-40 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          {/* Header logo section - updated */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <img 
                src="/images/debosoft-logo.png" 
                alt="Debosoft Logo" 
                className="h-14 w-32 my-2" 
              />
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary">
              Features
            </Link>
            <Link href="#services" className="text-sm font-medium transition-colors hover:text-primary">
              Services
            </Link>
            <Link href="/portfolio" className="text-sm font-medium transition-colors hover:text-primary">
              Portfolio
            </Link>
            <Link href="/about-us" className="text-sm font-medium transition-colors hover:text-primary">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Button variant="outline" className="hidden md:flex">
              Log in
            </Button>
            <Button>Get Started</Button>
          </div>
        </div>
      </header>

      <main className="flex-1 pt-16">
        {/* Hero Section with Three.js Background */}
        <section className="relative w-full py-20 md:py-32 lg:py-40 overflow-hidden bg-gradient-to-b from-primary/5 via-background to-background">
          {/* Three.js background - will only render on client */}
          <ThreeBackground />
          <div className="container px-4 md:px-6 relative z-10">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_500px] items-center">
              <div className="flex flex-col justify-center space-y-4">
                <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80 w-fit">
                  Innovative Technology Solutions
                </div>
                <div className="space-y-2">
                  <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Transform Your Business with <span className="text-primary">Debosoft</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Cutting-edge software solutions that drive growth and streamline operations in the digital age.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                  <Button size="lg" className="h-12 px-8 text-base">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                  <Button size="lg" variant="outline" className="h-12 px-8 text-base">
                    Book a Demo
                  </Button>
                </div>
              </div>
              <div className="relative h-[400px] w-full rounded-xl overflow-hidden border shadow-xl bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(3,159,187,0.1),transparent_70%)]"></div>
                <ThreeLogo />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                  <h3 className="font-medium">Our Values in Motion</h3>
                  <p className="text-sm opacity-90">The three connected spheres represent our core values: work together, grow together, and expand together.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="w-full py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                Features
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Powerful Solutions for Modern Challenges
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Our comprehensive suite of tools and services designed to elevate your business to new heights.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="h-2 bg-primary"></div>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Code className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Custom Development</h3>
                    <p className="text-muted-foreground">
                      Tailored software solutions built to address your specific business needs and challenges.
                    </p>
                    <Link href="#" className="inline-flex items-center text-primary hover:underline">
                      Learn more <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="h-2 bg-primary"></div>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Globe className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Cloud Solutions</h3>
                    <p className="text-muted-foreground">
                      Scalable cloud infrastructure that grows with your business and enhances performance.
                    </p>
                    <Link href="#" className="inline-flex items-center text-primary hover:underline">
                      Learn more <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="h-2 bg-primary"></div>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                      <Database className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Data Analytics</h3>
                    <p className="text-muted-foreground">
                      Transform your data into actionable insights for better decision-making and strategy.
                    </p>
                    <Link href="#" className="inline-flex items-center text-primary hover:underline">
                      Learn more <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="w-full py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                Services
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Comprehensive Technology Services
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  End-to-end solutions that cover all aspects of your digital transformation journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 lg:grid-cols-2">
              <div className="flex flex-col space-y-6">
                <div className="flex items-start gap-4 rounded-lg border p-4 transition-all hover:bg-muted/50">
                  <CheckCircle className="mt-1 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">Software Development</h3>
                    <p className="text-muted-foreground">
                      Custom applications, web platforms, and mobile solutions built with cutting-edge technologies.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border p-4 transition-all hover:bg-muted/50">
                  <CheckCircle className="mt-1 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">IT Consulting</h3>
                    <p className="text-muted-foreground">
                      Strategic guidance to align your technology investments with business objectives.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border p-4 transition-all hover:bg-muted/50">
                  <CheckCircle className="mt-1 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">System Integration</h3>
                    <p className="text-muted-foreground">
                      Seamlessly connect your existing systems for improved efficiency and data flow.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col space-y-6">
                <div className="flex items-start gap-4 rounded-lg border p-4 transition-all hover:bg-muted/50">
                  <CheckCircle className="mt-1 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">Cloud Migration</h3>
                    <p className="text-muted-foreground">
                      Transition your infrastructure to the cloud with minimal disruption to your operations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border p-4 transition-all hover:bg-muted/50">
                  <CheckCircle className="mt-1 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">Cybersecurity</h3>
                    <p className="text-muted-foreground">
                      Protect your digital assets with comprehensive security solutions and best practices.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4 rounded-lg border p-4 transition-all hover:bg-muted/50">
                  <CheckCircle className="mt-1 h-6 w-6 text-primary" />
                  <div>
                    <h3 className="text-xl font-bold">Maintenance & Support</h3>
                    <p className="text-muted-foreground">
                      Ongoing technical support and system maintenance to ensure optimal performance.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="w-full py-20 bg-muted/50">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-center">
              <div>
                <div className="space-y-4">
                  <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                    About Us
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Driving Digital Transformation Since 2010
                  </h2>
                  <p className="text-muted-foreground md:text-lg">
                    At Debosoft, we believe in the power of technology to transform businesses and improve lives. Our
                    team of experts is dedicated to delivering innovative solutions that address real-world challenges.
                  </p>
                  <p className="text-muted-foreground md:text-lg">
                    With over a decade of experience, we've helped hundreds of businesses across various industries
                    achieve their digital transformation goals and stay ahead of the competition.
                  </p>
                  <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                    <Link
                      href="/about-us"
                      className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      Our Story
                    </Link>
                    <Link
                      href="/about-us"
                      className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    >
                      Meet the Team
                    </Link>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                    <Users className="h-12 w-12 text-primary" />
                    <div className="text-center">
                      <div className="text-3xl font-bold">100+</div>
                      <div className="text-sm text-muted-foreground">Clients Worldwide</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                    <Code className="h-12 w-12 text-primary" />
                    <div className="text-center">
                      <div className="text-3xl font-bold">500+</div>
                      <div className="text-sm text-muted-foreground">Projects Completed</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                    <MessageSquare className="h-12 w-12 text-primary" />
                    <div className="text-center">
                      <div className="text-3xl font-bold">24/7</div>
                      <div className="text-sm text-muted-foreground">Customer Support</div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-center space-y-2 rounded-lg border bg-background p-6 shadow-sm transition-all hover:shadow-md">
                    <Globe className="h-12 w-12 text-primary" />
                    <div className="text-center">
                      <div className="text-3xl font-bold">20+</div>
                      <div className="text-sm text-muted-foreground">Countries Served</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="testimonials" className="w-full py-20">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                Testimonials
              </div>
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Our Clients Say</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Don't just take our word for it. Here's what our clients have to say about working with Debosoft.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">SJ</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Sarah Johnson</p>
                        <p className="text-xs text-muted-foreground">CTO, TechCorp</p>
                      </div>
                    </div>
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-muted-foreground">
                      "Debosoft transformed our outdated systems into a streamlined digital platform. Their expertise
                      and dedication to our project exceeded our expectations."
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">MC</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Michael Chen</p>
                        <p className="text-xs text-muted-foreground">CEO, GrowthStart</p>
                      </div>
                    </div>
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-muted-foreground">
                      "The cloud migration solution provided by Debosoft helped us scale our operations efficiently.
                      Their team was professional and responsive throughout the process."
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <CardContent className="p-6">
                  <div className="flex flex-col space-y-4">
                    <div className="flex items-center space-x-4">
                      <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-lg font-bold text-primary">ER</span>
                      </div>
                      <div>
                        <p className="text-sm font-medium">Emily Rodriguez</p>
                        <p className="text-xs text-muted-foreground">COO, InnovateCo</p>
                      </div>
                    </div>
                    <div className="flex text-primary">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="h-5 w-5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-muted-foreground">
                      "Debosoft's custom software solution has revolutionized our workflow. Their attention to detail
                      and understanding of our business needs was impressive."
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-20 bg-primary text-primary-foreground relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/placeholder.svg?height=200&width=200')] opacity-10"></div>
          <div className="container px-4 md:px-6 relative z-10">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Transform Your Business?
                </h2>
                <p className="max-w-[600px] md:text-xl/relaxed">
                  Let's discuss how Debosoft can help you achieve your technology goals and drive your business forward.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
                <Button size="lg" variant="secondary" className="h-12 px-8">
                  Schedule a Consultation
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-8 bg-transparent border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-12 md:py-16">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Footer logo section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img 
                  src="/images/debosoft-logo.png" 
                  alt="Debosoft Logo" 
                  className="h-14 w-32" 
                />
              </div>
              <p className="text-sm text-muted-foreground">Innovative software solutions for modern businesses.</p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">Instagram</span>
          </Link>
          <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            <span className="sr-only">GitHub</span>
          </Link>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Company</h3>
        <nav className="flex flex-col space-y-2">
          <Link href="/" className="text-sm text-muted-foreground hover:text-primary">
            Home
          </Link>
          <Link href="/about-us" className="text-sm text-muted-foreground hover:text-primary">
            About
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
            Careers
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
            News
          </Link>
        </nav>
      </div>
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Services</h3>
        <nav className="flex flex-col space-y-2">
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
            Software Development
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
            Cloud Solutions
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
            IT Consulting
          </Link>
          <Link href="#" className="text-sm text-muted-foreground hover:text-primary">
            Cybersecurity
          </Link>
        </nav>
      </div>
      <div className="space-y-4">
        <h3 className="text-sm font-medium">Contact</h3>
        <div className="flex flex-col space-y-2 text-sm text-muted-foreground">
          <p>123 Tech Street</p>
          <p>San Francisco, CA 94107</p>
          <p>info@debosoft.com</p>
          <p>+1 (555) 123-4567</p>
        </div>
      </div>
    </div>
    <div className="mt-8 border-t pt-8 flex flex-col md:flex-row justify-between items-center">
      <p className="text-xs text-muted-foreground">
        &copy; {new Date().getFullYear()} Debosoft. All rights reserved.
      </p>
      <nav className="flex gap-4 mt-4 md:mt-0">
        <Link href="#" className="text-xs text-muted-foreground hover:text-primary">
          Privacy Policy
        </Link>
        <Link href="#" className="text-xs text-muted-foreground hover:text-primary">
          Terms of Service
        </Link>
        <Link href="#" className="text-xs text-muted-foreground hover:text-primary">
          Cookie Policy
        </Link>
      </nav>
    </div>
  </div>
</footer>



</div>
  )
                    }