import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import {
  ArrowLeft,
  Code,
  Database,
  Globe,
  Server,
  Shield,
  Smartphone,
  Cpu,
  Cloud,
  BarChart,
  Users,
  Headphones,
  ArrowRight,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ServicesPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Our Services</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Comprehensive technology solutions tailored to meet your business needs and drive growth.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Services Overview */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-center">
              <div>
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Our Approach
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    End-to-End Technology Solutions
                  </h2>
                  <p className="text-muted-foreground md:text-lg">
                    At Debosoft, we provide a comprehensive range of technology services designed to help businesses
                    transform their operations, enhance customer experiences, and achieve their strategic goals.
                  </p>
                  <p className="text-muted-foreground md:text-lg">
                    Our team of experienced professionals works closely with you to understand your unique challenges
                    and objectives, delivering customized solutions that drive real business value.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 z-0"></div>
                <div className="relative h-full w-full flex items-center justify-center p-4 z-10">
                  <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                    <div className="aspect-video bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center transform hover:scale-105 transition-transform duration-300">
                      <Code className="h-10 w-10 text-primary mb-3" />
                      <h3 className="font-medium">Custom Development</h3>
                    </div>
                    <div className="aspect-video bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center transform hover:scale-105 transition-transform duration-300">
                      <Cloud className="h-10 w-10 text-primary mb-3" />
                      <h3 className="font-medium">Cloud Solutions</h3>
                    </div>
                    <div className="aspect-video bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center transform hover:scale-105 transition-transform duration-300">
                      <Database className="h-10 w-10 text-primary mb-3" />
                      <h3 className="font-medium">Data Analytics</h3>
                    </div>
                    <div className="aspect-video bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center transform hover:scale-105 transition-transform duration-300">
                      <Shield className="h-10 w-10 text-primary mb-3" />
                      <h3 className="font-medium">Cybersecurity</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Software Development Services */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Software Development
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Custom Software Solutions</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Tailored software applications designed to address your specific business challenges.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="p-6 flex items-center justify-center bg-primary/5 h-40">
                  <Globe className="h-16 w-16 text-primary" />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Web Application Development</h3>
                    <p className="text-muted-foreground">
                      Responsive, scalable web applications built with modern frameworks and technologies to deliver
                      exceptional user experiences.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground mt-4">
                      <li className="flex items-center">
                        <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                        <span>Progressive Web Apps (PWAs)</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                        <span>Single Page Applications (SPAs)</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                        <span>Enterprise Web Portals</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link href="#" className="inline-flex items-center text-primary hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="p-6 flex items-center justify-center bg-primary/5 h-40">
                  <Smartphone className="h-16 w-16 text-primary" />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Mobile App Development</h3>
                    <p className="text-muted-foreground">
                      Native and cross-platform mobile applications that provide seamless experiences across iOS and
                      Android devices.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground mt-4">
                      <li className="flex items-center">
                        <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                        <span>Native iOS & Android Apps</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                        <span>Cross-Platform Solutions</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                        <span>Mobile App Modernization</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link href="#" className="inline-flex items-center text-primary hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="p-6 flex items-center justify-center bg-primary/5 h-40">
                  <Cpu className="h-16 w-16 text-primary" />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Enterprise Software</h3>
                    <p className="text-muted-foreground">
                      Robust, scalable enterprise applications that streamline operations, improve efficiency, and drive
                      business growth.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground mt-4">
                      <li className="flex items-center">
                        <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                        <span>ERP Systems</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                        <span>CRM Solutions</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                        <span>Business Process Automation</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link href="#" className="inline-flex items-center text-primary hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Cloud & Infrastructure Services */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Cloud & Infrastructure
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Modern Cloud Solutions</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Scalable, secure, and cost-effective cloud infrastructure to power your business.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="p-6 flex items-center justify-center bg-primary/5 h-40">
                  <Cloud className="h-16 w-16 text-primary" />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Cloud Migration</h3>
                    <p className="text-muted-foreground">
                      Seamless migration of your applications and infrastructure to the cloud with minimal disruption to
                      your operations.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground mt-4">
                      <li className="flex items-center">
                        <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                        <span>Migration Assessment & Planning</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                        <span>Lift & Shift Migration</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                        <span>Application Modernization</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link href="#" className="inline-flex items-center text-primary hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="p-6 flex items-center justify-center bg-primary/5 h-40">
                  <Server className="h-16 w-16 text-primary" />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">DevOps & CI/CD</h3>
                    <p className="text-muted-foreground">
                      Streamline your development and deployment processes with automated CI/CD pipelines and DevOps
                      practices.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground mt-4">
                      <li className="flex items-center">
                        <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                        <span>CI/CD Pipeline Implementation</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                        <span>Infrastructure as Code (IaC)</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                        <span>Containerization & Orchestration</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link href="#" className="inline-flex items-center text-primary hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="p-6 flex items-center justify-center bg-primary/5 h-40">
                  <Shield className="h-16 w-16 text-primary" />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Cloud Security</h3>
                    <p className="text-muted-foreground">
                      Comprehensive security solutions to protect your cloud infrastructure and applications from
                      evolving threats.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground mt-4">
                      <li className="flex items-center">
                        <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                        <span>Security Assessment & Compliance</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                        <span>Identity & Access Management</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                        <span>Threat Detection & Response</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link href="#" className="inline-flex items-center text-primary hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Data & Analytics Services */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Data & Analytics
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Data-Driven Insights</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Transform your data into actionable insights that drive better business decisions.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="p-6 flex items-center justify-center bg-primary/5 h-40">
                  <Database className="h-16 w-16 text-primary" />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Data Engineering</h3>
                    <p className="text-muted-foreground">
                      Build robust data pipelines and infrastructure to collect, process, and store your data
                      efficiently.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground mt-4">
                      <li className="flex items-center">
                        <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                        <span>Data Pipeline Development</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                        <span>ETL/ELT Processes</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                        <span>Data Warehouse Implementation</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link href="#" className="inline-flex items-center text-primary hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="p-6 flex items-center justify-center bg-primary/5 h-40">
                  <BarChart className="h-16 w-16 text-primary" />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Business Intelligence</h3>
                    <p className="text-muted-foreground">
                      Visualize your data with interactive dashboards and reports that provide real-time insights into
                      your business performance.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground mt-4">
                      <li className="flex items-center">
                        <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                        <span>Dashboard Development</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                        <span>KPI Monitoring</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                        <span>Custom Reporting Solutions</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link href="#" className="inline-flex items-center text-primary hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="p-6 flex items-center justify-center bg-primary/5 h-40">
                  <Cpu className="h-16 w-16 text-primary" />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">AI & Machine Learning</h3>
                    <p className="text-muted-foreground">
                      Leverage advanced AI and machine learning techniques to extract deeper insights and automate
                      complex processes.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground mt-4">
                      <li className="flex items-center">
                        <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                        <span>Predictive Analytics</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                        <span>Natural Language Processing</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                        <span>Computer Vision Solutions</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link href="#" className="inline-flex items-center text-primary hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Consulting & Support Services */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Consulting & Support
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Strategic Technology Guidance</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Expert advice and ongoing support to help you navigate your digital transformation journey.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="p-6 flex items-center justify-center bg-primary/5 h-40">
                  <Users className="h-16 w-16 text-primary" />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">IT Strategy Consulting</h3>
                    <p className="text-muted-foreground">
                      Strategic guidance to align your technology investments with your business objectives and maximize
                      ROI.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground mt-4">
                      <li className="flex items-center">
                        <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                        <span>Technology Roadmap Development</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                        <span>Digital Transformation Strategy</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                        <span>IT Investment Planning</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link href="#" className="inline-flex items-center text-primary hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="p-6 flex items-center justify-center bg-primary/5 h-40">
                  <Headphones className="h-16 w-16 text-primary" />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Managed IT Services</h3>
                    <p className="text-muted-foreground">
                      Proactive monitoring, maintenance, and support for your IT infrastructure to ensure optimal
                      performance and reliability.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground mt-4">
                      <li className="flex items-center">
                        <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                        <span>24/7 Monitoring & Support</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                        <span>System Administration</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                        <span>Security Management</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link href="#" className="inline-flex items-center text-primary hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
              <Card className="overflow-hidden transition-all hover:shadow-lg">
                <div className="p-6 flex items-center justify-center bg-primary/5 h-40">
                  <Code className="h-16 w-16 text-primary" />
                </div>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Staff Augmentation</h3>
                    <p className="text-muted-foreground">
                      Flexible access to skilled technology professionals to supplement your team and accelerate project
                      delivery.
                    </p>
                    <ul className="space-y-1 text-sm text-muted-foreground mt-4">
                      <li className="flex items-center">
                        <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                        <span>Technical Resource Provision</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                        <span>Project-Based Staffing</span>
                      </li>
                      <li className="flex items-center">
                        <span className="mr-2 h-1 w-1 rounded-full bg-primary"></span>
                        <span>Long-Term Engagement Options</span>
                      </li>
                    </ul>
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0">
                  <Link href="#" className="inline-flex items-center text-primary hover:underline">
                    Learn more <ArrowRight className="ml-1 h-4 w-4" />
                  </Link>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>

        {/* Industries We Serve */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Industries
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Industries We Serve</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  We deliver specialized technology solutions across a wide range of industries.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-4">
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
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
                    className="h-10 w-10 text-primary"
                  >
                    <path d="M18 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2Z" />
                    <path d="m9 22 3-3 3 3" />
                    <path d="M10 6h4" />
                    <path d="M10 10h4" />
                    <path d="M10 14h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Healthcare</h3>
                <p className="text-sm text-muted-foreground">
                  Secure, compliant solutions for healthcare providers and organizations.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
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
                    className="h-10 w-10 text-primary"
                  >
                    <path d="M3 9h18v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V9Z" />
                    <path d="M3 9V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v4" />
                    <path d="M13 13h4" />
                    <path d="M13 17h4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Finance</h3>
                <p className="text-sm text-muted-foreground">
                  Robust, secure solutions for banks, fintech, and financial services.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
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
                    className="h-10 w-10 text-primary"
                  >
                    <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Education</h3>
                <p className="text-sm text-muted-foreground">
                  Innovative solutions for schools, universities, and educational institutions.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 text-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
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
                    className="h-10 w-10 text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Government</h3>
                <p className="text-sm text-muted-foreground">
                  Secure, compliant solutions for government agencies and public sector organizations.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Our Process
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">How We Work</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Our structured approach ensures successful delivery of your technology solutions.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-5xl py-12">
              <div className="relative">
                <div className="absolute left-1/2 h-full w-0.5 -translate-x-1/2 bg-border"></div>
                <div className="space-y-12">
                  <div className="relative flex flex-col gap-6 md:flex-row">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground md:absolute md:left-1/2 md:-translate-x-1/2">
                      1
                    </div>
                    <div className="flex-1 md:text-right md:pr-12">
                      <h3 className="text-xl font-bold">Discovery & Planning</h3>
                      <p className="text-muted-foreground">
                        We work closely with you to understand your business needs, challenges, and objectives,
                        developing a detailed project plan and roadmap.
                      </p>
                    </div>
                    <div className="hidden flex-1 md:block md:pl-12"></div>
                  </div>
                  <div className="relative flex flex-col gap-6 md:flex-row">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground md:absolute md:left-1/2 md:-translate-x-1/2">
                      2
                    </div>
                    <div className="hidden flex-1 md:block md:pr-12"></div>
                    <div className="flex-1 md:pl-12">
                      <h3 className="text-xl font-bold">Design & Architecture</h3>
                      <p className="text-muted-foreground">
                        Our team designs a comprehensive solution architecture that addresses your requirements,
                        ensuring scalability, security, and performance.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col gap-6 md:flex-row">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground md:absolute md:left-1/2 md:-translate-x-1/2">
                      3
                    </div>
                    <div className="flex-1 md:text-right md:pr-12">
                      <h3 className="text-xl font-bold">Development & Implementation</h3>
                      <p className="text-muted-foreground">
                        Using agile methodologies, we develop and implement your solution with regular updates and
                        feedback loops to ensure alignment with your expectations.
                      </p>
                    </div>
                    <div className="hidden flex-1 md:block md:pl-12"></div>
                  </div>
                  <div className="relative flex flex-col gap-6 md:flex-row">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground md:absolute md:left-1/2 md:-translate-x-1/2">
                      4
                    </div>
                    <div className="hidden flex-1 md:block md:pr-12"></div>
                    <div className="flex-1 md:pl-12">
                      <h3 className="text-xl font-bold">Testing & Quality Assurance</h3>
                      <p className="text-muted-foreground">
                        Rigorous testing and quality assurance processes ensure your solution meets the highest
                        standards of quality, security, and performance.
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col gap-6 md:flex-row">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground md:absolute md:left-1/2 md:-translate-x-1/2">
                      5
                    </div>
                    <div className="flex-1 md:text-right md:pr-12">
                      <h3 className="text-xl font-bold">Deployment & Training</h3>
                      <p className="text-muted-foreground">
                        We ensure a smooth deployment of your solution and provide comprehensive training to your team
                        to maximize adoption and value.
                      </p>
                    </div>
                    <div className="hidden flex-1 md:block md:pl-12"></div>
                  </div>
                  <div className="relative flex flex-col gap-6 md:flex-row">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground md:absolute md:left-1/2 md:-translate-x-1/2">
                      6
                    </div>
                    <div className="hidden flex-1 md:block md:pr-12"></div>
                    <div className="flex-1 md:pl-12">
                      <h3 className="text-xl font-bold">Ongoing Support & Optimization</h3>
                      <p className="text-muted-foreground">
                        Our relationship continues after deployment with ongoing support, maintenance, and continuous
                        improvement to ensure your solution evolves with your business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                  Ready to Transform Your Business?
                </h2>
                <p className="mx-auto max-w-[700px] md:text-xl/relaxed">
                  Let's discuss how our technology solutions can help you achieve your business goals.
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
                  View Our Portfolio
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

