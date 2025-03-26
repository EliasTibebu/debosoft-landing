import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, BriefcaseBusiness, Users, GraduationCap, Heart, Send } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function CareersPage() {
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
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">Join Our Team</h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Be part of a team that's transforming businesses through innovative technology solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Company Culture */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 md:grid-cols-2 md:gap-16 items-center">
              <div>
                <div className="space-y-4">
                  <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                    Our Culture
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
                    Work With Purpose, Grow With Passion
                  </h2>
                  <p className="text-muted-foreground md:text-lg">
                    At Debosoft, we believe that our people are our greatest asset. We foster a culture of innovation,
                    collaboration, and continuous learning. Our team members are encouraged to think creatively, take
                    initiative, and contribute to our shared vision of delivering exceptional technology solutions.
                  </p>
                  <p className="text-muted-foreground md:text-lg">
                    We value diversity and inclusion, recognizing that different perspectives drive innovation and
                    better solutions. When you join Debosoft, you become part of a supportive community where your
                    growth and well-being are prioritized.
                  </p>
                </div>
              </div>
              <div className="relative h-[400px] overflow-hidden rounded-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 z-0"></div>
                <div className="relative h-full w-full flex items-center justify-center p-4 z-10">
                  <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                    <div className="aspect-video bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center transform hover:scale-105 transition-transform duration-300">
                      <Users className="h-10 w-10 text-primary mb-3" />
                      <h3 className="font-medium">Collaborative Teams</h3>
                      <p className="text-sm text-muted-foreground">Work together to solve complex challenges</p>
                    </div>
                    <div className="aspect-video bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center transform hover:scale-105 transition-transform duration-300">
                      <GraduationCap className="h-10 w-10 text-primary mb-3" />
                      <h3 className="font-medium">Continuous Learning</h3>
                      <p className="text-sm text-muted-foreground">Opportunities to grow your skills</p>
                    </div>
                    <div className="aspect-video bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center transform hover:scale-105 transition-transform duration-300">
                      <BriefcaseBusiness className="h-10 w-10 text-primary mb-3" />
                      <h3 className="font-medium">Impactful Work</h3>
                      <p className="text-sm text-muted-foreground">Create solutions that matter</p>
                    </div>
                    <div className="aspect-video bg-white rounded-lg shadow-lg p-6 flex flex-col items-center justify-center text-center transform hover:scale-105 transition-transform duration-300">
                      <Heart className="h-10 w-10 text-primary mb-3" />
                      <h3 className="font-medium">Work-Life Balance</h3>
                      <p className="text-sm text-muted-foreground">Flexible policies for your wellbeing</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Benefits
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Why Work With Us</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  We offer a comprehensive benefits package designed to support your professional and personal growth.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
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
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Competitive Compensation</h3>
                    <p className="text-muted-foreground">
                      We offer competitive salaries and performance-based bonuses to recognize your contributions.
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
                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Professional Development</h3>
                    <p className="text-muted-foreground">
                      Access to training, conferences, and educational resources to help you grow your skills and
                      career.
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
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Health & Wellness</h3>
                    <p className="text-muted-foreground">
                      Comprehensive health benefits and wellness programs to support your physical and mental wellbeing.
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
                        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                        <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Flexible Work</h3>
                    <p className="text-muted-foreground">
                      Flexible work arrangements that allow you to balance your professional and personal life.
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
                    <h3 className="text-xl font-bold">Collaborative Environment</h3>
                    <p className="text-muted-foreground">
                      Work with talented professionals in a supportive and inclusive team environment.
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
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Meaningful Projects</h3>
                    <p className="text-muted-foreground">
                      Work on challenging projects that make a real difference for our clients and their customers.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Current Openings / Talent Pool */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">
                  Opportunities
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Join Our Talent Pool</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  While we don't have any open positions at the moment, we're always looking for talented individuals to
                  join our team.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-12">
              <Card>
                <CardContent className="p-6 md:p-8">
                  <div className="space-y-6">
                    <div className="space-y-2 text-center">
                      <h3 className="text-2xl font-bold">Submit Your Information</h3>
                      <p className="text-muted-foreground">
                        We'll keep your resume on file and contact you when a suitable position becomes available.
                      </p>
                    </div>
                    <form className="space-y-4">
                      <div className="grid gap-4 md:grid-cols-2">
                        <div className="space-y-2">
                          <label
                            htmlFor="first-name"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            First Name
                          </label>
                          <input
                            id="first-name"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Enter your first name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="last-name"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Last Name
                          </label>
                          <input
                            id="last-name"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Enter your last name"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Enter your email"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Phone Number
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Enter your phone number"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="position"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Area of Interest
                        </label>
                        <select
                          id="position"
                          defaultValue=""
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        >
                          <option value="" disabled>
                            Select your area of interest
                          </option>
                          <option value="software-development">Software Development</option>
                          <option value="ui-ux-design">UI/UX Design</option>
                          <option value="project-management">Project Management</option>
                          <option value="quality-assurance">Quality Assurance</option>
                          <option value="data-science">Data Science & Analytics</option>
                          <option value="devops">DevOps & Infrastructure</option>
                          <option value="sales-marketing">Sales & Marketing</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="resume"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Resume/CV
                        </label>
                        <input
                          id="resume"
                          type="file"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                        <p className="text-xs text-muted-foreground">Upload your resume/CV (PDF, DOC, or DOCX)</p>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Additional Information
                        </label>
                        <textarea
                          id="message"
                          className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          placeholder="Tell us about your experience, skills, and why you're interested in joining Debosoft"
                        ></textarea>
                      </div>
                      <Button type="submit" className="w-full">
                        <Send className="mr-2 h-4 w-4" />
                        Submit Application
                      </Button>
                    </form>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-primary px-3 py-1 text-sm text-primary-foreground">FAQs</div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Common Questions</h2>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed">
                  Answers to frequently asked questions about careers at Debosoft.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl mt-12 space-y-6">
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">What is the hiring process like at Debosoft?</h3>
                    <p className="text-muted-foreground">
                      Our hiring process typically includes an initial application review, a phone screening, technical
                      assessments relevant to the role, and interviews with the team and leadership. We aim to make the
                      process thorough yet efficient, with clear communication throughout.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">Do you offer remote work opportunities?</h3>
                    <p className="text-muted-foreground">
                      Yes, we offer flexible work arrangements including remote and hybrid options for many positions.
                      We believe in focusing on results rather than location, while ensuring effective collaboration
                      across teams.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">What opportunities are there for career growth?</h3>
                    <p className="text-muted-foreground">
                      We're committed to helping our team members grow professionally. This includes regular performance
                      reviews, mentorship programs, training opportunities, and clear paths for advancement within the
                      company.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="space-y-2">
                    <h3 className="text-xl font-bold">How long will my application be kept on file?</h3>
                    <p className="text-muted-foreground">
                      We keep applications in our talent pool for one year. If a suitable position becomes available
                      during that time, we'll reach out to discuss your interest and qualifications.
                    </p>
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
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">Have Questions?</h2>
                <p className="mx-auto max-w-[700px] md:text-xl/relaxed">
                  If you have any questions about careers at Debosoft, we're here to help.
                </p>
              </div>
              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                <Button size="lg" variant="secondary" className="h-12">
                  Contact HR Team
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 bg-transparent border-primary-foreground hover:bg-primary-foreground hover:text-primary"
                >
                  careers@debosoft.com
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

