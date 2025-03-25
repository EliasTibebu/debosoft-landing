import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Linkedin, Mail, Phone } from "lucide-react"

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <img src="/images/debosoft-logo.png" alt="Debosoft Logo" className="h-10 w-auto" />
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/about-us" className="text-sm font-medium transition-colors text-primary">
              About Us
            </Link>
            <Link href="/portfolio" className="text-sm font-medium transition-colors hover:text-primary">
              Portfolio
            </Link>
            <Link href="/#services" className="text-sm font-medium transition-colors hover:text-primary">
              Services
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

      <main className="flex-1">
        {/* Hero Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <Link href="/" className="inline-flex items-center gap-2 text-primary hover:text-primary/80">
                <ArrowLeft className="h-4 w-4" />
                <span>Back to Home</span>
              </Link>
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">About Debosoft</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  We are a team of passionate technology experts dedicated to delivering innovative software solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Story */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-center">
              <div>
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Our Story
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Driving Digital Transformation Since 2010
                  </h2>
                  <p className="text-muted-foreground md:text-lg">
                    Debosoft was founded with a vision to help businesses leverage technology to achieve their goals.
                    What started as a small team of developers has grown into a comprehensive technology solutions
                    provider serving clients across multiple industries worldwide.
                  </p>
                  <p className="text-muted-foreground md:text-lg">
                    Our mission is to deliver innovative, reliable, and scalable software solutions that address
                    real-world challenges and drive business growth. We believe in building long-term partnerships with
                    our clients, understanding their unique needs, and delivering solutions that exceed expectations.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=400&width=600"
                  alt="Debosoft office"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Values
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">What Drives Us</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Our core values shape everything we do at Debosoft.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-primary"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Integrity</h3>
                    <p className="text-muted-foreground">
                      We uphold the highest standards of integrity in all our interactions, ensuring transparency and
                      honesty.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-primary"
                      >
                        <path d="M20 14.66V20a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h5.34" />
                        <polygon points="18 2 22 6 12 16 8 16 8 12 18 2" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Innovation</h3>
                    <p className="text-muted-foreground">
                      We constantly push the boundaries of what's possible, embracing new technologies and creative
                      solutions.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="h-6 w-6 text-primary"
                      >
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Collaboration</h3>
                    <p className="text-muted-foreground">
                      We believe in the power of teamwork, both within our organization and with our clients and
                      partners.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Leadership Team */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Team
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Meet Our Leadership</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  The visionaries behind Debosoft's success.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="relative h-40 w-40 overflow-hidden rounded-full">
                      <Image src="/images/elias-tibebu.png" alt="Elias Tibebu" fill className="object-cover" />
                    </div>
                    <div className="space-y-2 text-center">
                      <h3 className="text-xl font-bold">Elias Tibebu</h3>
                      <p className="text-sm text-primary font-medium">Co-Founder & CTO</p>
                      <p className="text-sm text-muted-foreground">
                        A technology visionary with expertise in cloud architecture and AI, Elias leads our technical
                        innovation and development teams.
                      </p>
                      <div className="flex justify-center space-x-4 pt-2">
                        <Link href="#" className="text-muted-foreground hover:text-primary">
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary">
                          <Mail className="h-5 w-5" />
                          <span className="sr-only">Email</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="relative h-40 w-40 overflow-hidden rounded-full">
                      <Image src="/images/ekram-hassan.png" alt="Ekram Hassan" fill className="object-cover" />
                    </div>
                    <div className="space-y-2 text-center">
                      <h3 className="text-xl font-bold">Ekram Hassan</h3>
                      <p className="text-sm text-primary font-medium">Co-Founder & CEO</p>
                      <p className="text-sm text-muted-foreground">
                        With over 15 years of experience in software development and business leadership, Ekram drives
                        the strategic vision of Debosoft.
                      </p>
                      <div className="flex justify-center space-x-4 pt-2">
                        <Link href="#" className="text-muted-foreground hover:text-primary">
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary">
                          <Mail className="h-5 w-5" />
                          <span className="sr-only">Email</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center space-y-4">
                    <div className="relative h-40 w-40 overflow-hidden rounded-full">
                      <Image src="/images/fiyori-alemseged.png" alt="Fiyori Alemseged" fill className="object-cover" />
                    </div>
                    <div className="space-y-2 text-center">
                      <h3 className="text-xl font-bold">Fiyori Alemseged</h3>
                      <p className="text-sm text-primary font-medium">Co-Founder & COO</p>
                      <p className="text-sm text-muted-foreground">
                        With a background in business operations and project management, Fiyori ensures the seamless
                        delivery of our services to clients.
                      </p>
                      <div className="flex justify-center space-x-4 pt-2">
                        <Link href="#" className="text-muted-foreground hover:text-primary">
                          <Linkedin className="h-5 w-5" />
                          <span className="sr-only">LinkedIn</span>
                        </Link>
                        <Link href="#" className="text-muted-foreground hover:text-primary">
                          <Mail className="h-5 w-5" />
                          <span className="sr-only">Email</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Get in Touch</h2>
                <p className="mx-auto max-w-[700px] md:text-xl/relaxed">
                  Have questions about our services or want to discuss your project? Our team is here to help.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="h-12">
                  Schedule a Meeting
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 bg-transparent border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  <Phone className="mr-2 h-4 w-4" />
                  Call Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full border-t bg-background py-6 md:py-12">
        <div className="container px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <img src="/images/debosoft-logo.png" alt="Debosoft Logo" className="h-12 w-auto" />
              </div>
              <p className="text-sm text-muted-foreground">Innovative software solutions for modern businesses.</p>
              <div className="flex gap-4">
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Facebook</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                  <span className="sr-only">Twitter</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="sr-only">Instagram</span>
                </Link>
                <Link href="#" className="text-muted-foreground hover:text-primary">
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

