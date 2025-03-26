import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowLeft, ExternalLink } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function PortfolioPage() {
  // Portfolio projects data
  const projects = [
    {
      title: "Customer Relationship Management",
      description:
        "A comprehensive CRM solution designed to help businesses manage customer interactions, track sales pipelines, and improve customer service efficiency.",
      image: "/images/crm-login.png",
      url: "https://customer-relation-managment.vercel.app/auth/login",
      tags: ["CRM", "Sales", "Customer Service"],
    },
    {
      title: "Sports Management Information System",
      description:
        "An integrated platform for sports organizations to manage teams, events, athletes, and performance analytics in one centralized system.",
      image: "/images/sports-management-dashboard.png",
      url: "https://sports-management-information-system.vercel.app/",
      tags: ["Sports", "Management", "Analytics"],
    },
    {
      title: "Public Sector Service Portal MIS",
      description:
        "A management information system designed specifically for public sector service portals, enabling efficient service delivery and monitoring.",
      image: "/images/pssp-mis-dashboard.png",
      url: "https://pssp-mis.vercel.app/auth/login",
      tags: ["Public Sector", "Service Management", "MIS"],
    },
    {
      title: "Public Service Portal",
      description:
        "A user-friendly portal that connects citizens with government services, streamlining access to public resources and information.",
      image: "/images/public-service-portal.png",
      url: "https://public-service-portal.vercel.app/en",
      tags: ["Government", "Public Services", "Citizen Portal"],
    },
    {
      title: "SMIS Portal",
      description:
        "A specialized portal for sports management information, providing teams and organizations with tools to manage operations and performance.",
      image: "/images/smis-portal.png",
      url: "https://smis-portal.vercel.app/",
      tags: ["Sports", "Management", "Portal"],
    },
    {
      title: "Accounting Dashboard",
      description:
        "A comprehensive financial management dashboard that provides real-time insights into accounting metrics, financial reporting, and budget tracking.",
      image: "/images/accounting-dashboard.png",
      url: "https://accounting-dashboard-delta.vercel.app/dashboard",
      tags: ["Finance", "Accounting", "Dashboard"],
    },
  ]

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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Portfolio</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Explore our diverse range of software solutions that have helped organizations transform their
                  operations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="w-full py-12 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {projects.map((project, index) => (
                <Card key={index} className="overflow-hidden transition-all hover:shadow-lg">
                  <div className="relative h-48 w-full overflow-hidden">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform hover:scale-105"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-4">
                      <h3 className="text-xl font-bold">{project.title}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary/10 text-primary hover:bg-primary/20"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="p-6 pt-0">
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:underline"
                    >
                      View Project <ExternalLink className="ml-1 h-4 w-4" />
                    </a>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Ready to Build Your Solution?</h2>
                <p className="mx-auto max-w-[700px] md:text-xl/relaxed">
                  Let's discuss how we can create a custom software solution tailored to your specific business needs.
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
                  Contact Us
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

