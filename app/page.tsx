import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Code, Database, Globe, MessageSquare, Users, ArrowRight, ChevronRight } from "lucide-react"
import dynamic from "next/dynamic"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

// Dynamically import Three.js components
const ThreeBackground = dynamic(() => import("@/components/three-background"), { ssr: false })
const ThreeLogo = dynamic(() => import("@/components/three-logo"), { ssr: false })

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <SiteHeader />

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
                  <p className="text-sm opacity-90">
                    The three connected spheres represent our core values: work together, grow together, and expand
                    together.
                  </p>
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
                    Driving Digital Transformation Since 2021
                  </h2>
                  <p className="text-muted-foreground md:text-lg">
                    At Debosoft, we believe in the power of technology to transform businesses and improve lives. Our
                    team of experts is dedicated to delivering innovative solutions that address real-world challenges.
                  </p>
                  <p className="text-muted-foreground md:text-lg">
                    Founded by a team of passionate technology experts, we've quickly established ourselves as a trusted
                    partner for businesses seeking innovative digital solutions. Our collaborative approach and
                    technical expertise enable our clients to stay ahead of the competition.
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
      <SiteFooter />
    </div>
  )
}

