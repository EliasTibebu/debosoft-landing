import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Linkedin, Mail, Phone } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { CoFoundersImage } from "@/components/cofounders-image"

export default function AboutUsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <SiteHeader />

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
                    Driving Digital Transformation Since 2021
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
                <CoFoundersImage />
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
                        A founding member with expertise in business operations and project management, Fiyori leads our
                        operational strategy and ensures the seamless delivery of our services to clients.
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
      <SiteFooter />
    </div>
  )
}

