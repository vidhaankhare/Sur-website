import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Music, Users, Award, Globe, Heart, Target, Lightbulb, BookOpen } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/images/sur-logo.png" alt="SUR Logo" className="w-10 h-10 rounded-full" />
              <div>
                <h1 className="text-xl font-bold text-foreground">SUR</h1>
                <p className="text-xs text-muted-foreground">where music finds you</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/departments" className="text-muted-foreground hover:text-sur-orange transition-colors">
                Departments
              </Link>
              <Link href="/library" className="text-muted-foreground hover:text-sur-orange transition-colors">
                Library
              </Link>
              <Link href="/community" className="text-muted-foreground hover:text-sur-orange transition-colors">
                Community
              </Link>
              <Link href="/about" className="text-sur-orange font-medium">
                About
              </Link>
            </nav>
            <div className="flex items-center space-x-3">
              <Button variant="outline" asChild>
                <Link href="/portal/login">Student Login</Link>
              </Button>
              <Button className="bg-sur-orange hover:bg-sur-orange-dark text-black font-medium" asChild>
                <Link href="/portal/register">Enroll Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 text-center">
        <div className="container mx-auto max-w-4xl">
          <Badge className="mb-6 bg-sur-orange/20 text-sur-orange border-sur-orange/30">About SUR</Badge>
          <h1 className="text-5xl font-bold text-foreground mb-6">
            Democratizing Music Education
            <span className="text-sur-orange block">Through Expert Curation</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            SUR transforms the way people learn music by organizing the best educational content from across the
            internet into structured, progressive learning paths.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center">
                  <Target className="w-6 h-6 mr-3 text-sur-orange" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize music education by making world-class instruction accessible to everyone, regardless of
                  location or economic background. We believe that every person deserves the opportunity to learn music
                  from the best teachers in the world.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center">
                  <Lightbulb className="w-6 h-6 mr-3 text-sur-orange" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  A world where geographical boundaries don't limit musical education, where the best instructional
                  content is organized and accessible, and where every aspiring musician can follow a clear path from
                  beginner to mastery.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How SUR Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We don't create content - we curate the best. Our expert team scours the internet to find exceptional
              music education resources and organizes them into structured learning paths.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-border">
              <CardHeader>
                <div className="w-16 h-16 bg-sur-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="w-8 h-8 text-sur-orange" />
                </div>
                <CardTitle className="text-foreground">Global Content Discovery</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Our experts continuously search for the highest quality music education content from YouTube, online
                  courses, and educational platforms worldwide.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border">
              <CardHeader>
                <div className="w-16 h-16 bg-sur-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-sur-orange" />
                </div>
                <CardTitle className="text-foreground">Expert Curation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Music educators and professional musicians review, select, and organize content into progressive
                  learning paths that build skills systematically.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center border-border">
              <CardHeader>
                <div className="w-16 h-16 bg-sur-orange/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-sur-orange" />
                </div>
                <CardTitle className="text-foreground">Structured Learning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Content is organized into college-style courses with clear prerequisites, learning outcomes, and
                  assessment methods for optimal learning progression.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Impact</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Since our founding, SUR has helped thousands of students around the world achieve their musical goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-sur-orange mb-2">50K+</div>
              <div className="text-muted-foreground">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sur-orange mb-2">2,500+</div>
              <div className="text-muted-foreground">Curated Resources</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sur-orange mb-2">95+</div>
              <div className="text-muted-foreground">Countries Reached</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-sur-orange mb-2">4.8</div>
              <div className="text-muted-foreground">Average Rating</div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do at SUR.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center">
                  <Heart className="w-5 h-5 mr-2 text-sur-orange" />
                  Accessibility
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Quality music education should be available to everyone, regardless of their background or
                  circumstances.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center">
                  <Award className="w-5 h-5 mr-2 text-sur-orange" />
                  Excellence
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  We only curate the highest quality educational content from proven instructors and institutions.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center">
                  <Users className="w-5 h-5 mr-2 text-sur-orange" />
                  Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Learning music is better together. We foster a supportive community of learners and educators.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center">
                  <Lightbulb className="w-5 h-5 mr-2 text-sur-orange" />
                  Innovation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  We continuously improve our platform and methods to enhance the learning experience.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-sur-orange" />
                  Global Perspective
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  We celebrate musical traditions from around the world and promote cultural exchange through music.
                </p>
              </CardContent>
            </Card>

            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center">
                  <Music className="w-5 h-5 mr-2 text-sur-orange" />
                  Passion
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Music has the power to transform lives. We're passionate about sharing that transformative power.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-gradient-to-r from-sur-orange to-sur-orange-dark text-black">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Musical Journey?</h2>
          <p className="text-xl mb-8 opacity-90">Join our community of learners and discover your musical potential</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 bg-black text-white hover:bg-gray-800" asChild>
              <Link href="/portal/register">
                <Award className="mr-2 w-5 h-5" />
                Start Learning - Free
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-black text-black hover:bg-black hover:text-white bg-transparent"
              asChild
            >
              <Link href="/departments">Explore Departments</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
