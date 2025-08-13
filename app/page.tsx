import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Music,
  Guitar,
  Piano,
  Drum,
  PianoIcon as Violin,
  Wind,
  BookOpen,
  Users,
  Award,
  Play,
  Star,
  Clock,
  TrendingUp,
  ChevronRight,
  Mic,
  Music2,
} from "lucide-react"
import Link from "next/link"

const departments = [
  {
    id: "vocal",
    name: "Vocal Studies",
    icon: Mic,
    roadmaps: 12,
    levels: "Beginner → Professional",
    description: "Master vocal techniques from breath control to advanced performance",
  },
  {
    id: "guitar",
    name: "Guitar Department",
    icon: Guitar,
    roadmaps: 18,
    levels: "Beginner → Advanced",
    description: "Acoustic and electric guitar mastery across all genres",
  },
  {
    id: "piano",
    name: "Piano & Keyboard",
    icon: Piano,
    roadmaps: 15,
    levels: "Beginner → Advanced",
    description: "Classical piano to modern keyboard techniques",
  },
  {
    id: "percussion",
    name: "Percussion",
    icon: Drum,
    roadmaps: 10,
    levels: "Beginner → Advanced",
    description: "Drums, percussion instruments, and rhythm mastery",
  },
  {
    id: "strings",
    name: "String Instruments",
    icon: Violin,
    roadmaps: 14,
    levels: "Beginner → Advanced",
    description: "Violin, viola, cello, and other string instruments",
  },
  {
    id: "winds",
    name: "Wind Instruments",
    icon: Wind,
    roadmaps: 11,
    levels: "Beginner → Advanced",
    description: "Flute, saxophone, trumpet, and woodwind family",
  },
  {
    id: "theory",
    name: "Music Theory",
    icon: BookOpen,
    roadmaps: 8,
    levels: "Foundation → Advanced",
    description: "Comprehensive music theory and analysis",
  },
  {
    id: "composition",
    name: "Composition & Production",
    icon: Music2,
    roadmaps: 9,
    levels: "Beginner → Professional",
    description: "Songwriting, arranging, and music production",
  },
]

const featuredPaths = [
  {
    id: "guitar-fundamentals",
    title: "GUIT-101: Guitar Fundamentals",
    department: "Guitar Department",
    level: "Beginner",
    duration: "8 weeks",
    lessons: 24,
    curator: "SUR Experts",
    rating: 4.9,
    students: 2847,
    description: "Master the fundamentals of guitar playing with expert-curated lessons",
  },
  {
    id: "vocal-techniques",
    title: "VOCAL-201: Intermediate Vocal Techniques",
    department: "Vocal Studies",
    level: "Intermediate",
    duration: "10 weeks",
    lessons: 32,
    curator: "SUR Experts",
    rating: 4.8,
    students: 1923,
    description: "Advanced breathing, pitch control, and performance techniques",
  },
  {
    id: "piano-classical",
    title: "PIANO-101: Classical Piano Foundation",
    department: "Piano & Keyboard",
    level: "Beginner",
    duration: "12 weeks",
    lessons: 36,
    curator: "SUR Experts",
    rating: 4.9,
    students: 3156,
    description: "Build strong classical piano foundation with proper technique",
  },
  {
    id: "music-theory",
    title: "THEORY-101: Music Theory Essentials",
    department: "Music Theory",
    level: "Foundation",
    duration: "6 weeks",
    lessons: 18,
    curator: "SUR Experts",
    rating: 4.7,
    students: 4231,
    description: "Essential music theory concepts for all musicians",
  },
]

const howItWorks = [
  {
    step: 1,
    title: "Choose Your Path",
    description: "Select your instrument and skill level from our comprehensive department catalog",
    icon: Music,
  },
  {
    step: 2,
    title: "Follow Curated Roadmaps",
    description: "Learn through expertly structured sequences of handpicked educational content",
    icon: BookOpen,
  },
  {
    step: 3,
    title: "Learn from Experts",
    description: "Access the best YouTube videos and resources, curated by music education professionals",
    icon: Play,
  },
  {
    step: 4,
    title: "Track Progress",
    description: "Complete modules, earn certificates, and monitor your musical development",
    icon: TrendingUp,
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/images/sur-logo.png" alt="SUR Logo" className="w-12 h-12 rounded-full" />
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
              <Link href="/about" className="text-muted-foreground hover:text-sur-orange transition-colors">
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
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-20 h-20 text-sur-orange">
            <Guitar className="w-full h-full" />
          </div>
          <div className="absolute top-32 right-20 w-16 h-16 text-sur-orange">
            <Piano className="w-full h-full" />
          </div>
          <div className="absolute bottom-20 left-1/4 w-12 h-12 text-sur-orange">
            <Violin className="w-full h-full" />
          </div>
        </div>
        <div className="container mx-auto max-w-4xl relative z-10">
          <Badge className="mb-6 bg-sur-orange/20 text-sur-orange border-sur-orange/30">
            🎓 World-Class Music Education
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
            Master Music Through
            <span className="text-sur-orange block">Expert-Curated Learning</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            World-class music education through expertly curated learning paths. Learn from the best instructors on the
            internet, organized into structured, progressive college-level courses.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-sur-orange hover:bg-sur-orange-dark text-black font-medium text-lg px-8"
              asChild
            >
              <Link href="/departments">
                Explore Departments
                <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8 bg-transparent" asChild>
              <Link href="/courses">View Sample Courses</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Academic Departments */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Academic Departments</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Choose from our comprehensive range of music departments, each offering structured learning paths from
              beginner to professional level.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {departments.map((dept) => (
              <Card
                key={dept.id}
                className="hover:shadow-lg hover:shadow-sur-orange/20 transition-all cursor-pointer group border-border"
              >
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-sur-orange/20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-sur-orange/30 transition-colors">
                    <dept.icon className="w-8 h-8 text-sur-orange" />
                  </div>
                  <CardTitle className="text-lg text-foreground">{dept.name}</CardTitle>
                  <CardDescription className="text-sm text-muted-foreground">
                    {dept.roadmaps} roadmaps • {dept.levels}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{dept.description}</p>
                  <Button className="w-full bg-transparent" variant="outline" asChild>
                    <Link href={`/departments/${dept.id}`}>Enter Department</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Learning Paths */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Featured Learning Paths</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Start your musical journey with our most popular and highly-rated courses, curated by expert faculty
              members.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {featuredPaths.map((path) => (
              <Card key={path.id} className="hover:shadow-lg hover:shadow-sur-orange/20 transition-all border-border">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <Badge variant="secondary" className="mb-2 bg-sur-orange/20 text-sur-orange">
                        {path.department}
                      </Badge>
                      <CardTitle className="text-lg mb-2 text-foreground">{path.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">{path.description}</CardDescription>
                    </div>
                    <Badge className="bg-sur-orange/20 text-sur-orange border-sur-orange/30">{path.level}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-muted-foreground">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-sur-orange" />
                      {path.duration}
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-2 text-sur-orange" />
                      {path.lessons} lessons
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-2 text-yellow-500" />
                      {path.rating} rating
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-sur-orange" />
                      {path.students.toLocaleString()} students
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">👨‍🏫 Curated by: {path.curator}</p>
                  <Button className="w-full bg-sur-orange hover:bg-sur-orange-dark text-black font-medium" asChild>
                    <Link href={`/course/${path.id}`}>Enroll in Course</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How SUR Works */}
      <section className="py-16 px-4 bg-card/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How SUR Works</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our structured approach combines the best of online learning with traditional academic rigor to provide
              world-class music education.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {howItWorks.map((step) => (
              <div key={step.step} className="text-center">
                <div className="w-16 h-16 bg-sur-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <step.icon className="w-8 h-8 text-black" />
                </div>
                <div className="w-8 h-8 bg-sur-orange/20 rounded-full flex items-center justify-center mx-auto mb-4 -mt-12 relative z-10">
                  <span className="text-sur-orange font-bold text-sm">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-sur-orange to-sur-orange-dark text-black">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Start Your Musical Journey?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students learning music through our expertly curated programs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              className="text-lg px-8 bg-black text-white hover:bg-gray-800"
              asChild
            >
              <Link href="/portal/register">
                <Award className="mr-2 w-5 h-5" />
                Enroll Now - Free
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-black text-black hover:bg-black hover:text-white bg-transparent"
              asChild
            >
              <Link href="/departments">Browse All Departments</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-8 h-8 bg-sur-orange rounded-lg flex items-center justify-center">
                  <Guitar className="w-5 h-5 text-black" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground">SUR</h3>
                  <p className="text-xs text-muted-foreground">where music finds you</p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm">
                Democratizing music education through expertly curated learning paths.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Academics</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/departments" className="hover:text-sur-orange transition-colors">
                    Departments
                  </Link>
                </li>
                <li>
                  <Link href="/courses" className="hover:text-sur-orange transition-colors">
                    Course Catalog
                  </Link>
                </li>
                <li>
                  <Link href="/library" className="hover:text-sur-orange transition-colors">
                    Resource Library
                  </Link>
                </li>
                <li>
                  <Link href="/faculty" className="hover:text-sur-orange transition-colors">
                    Faculty
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Student Life</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/portal" className="hover:text-sur-orange transition-colors">
                    Student Portal
                  </Link>
                </li>
                <li>
                  <Link href="/community" className="hover:text-sur-orange transition-colors">
                    Community
                  </Link>
                </li>
                <li>
                  <Link href="/events" className="hover:text-sur-orange transition-colors">
                    Events
                  </Link>
                </li>
                <li>
                  <Link href="/support" className="hover:text-sur-orange transition-colors">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">About</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/about" className="hover:text-sur-orange transition-colors">
                    About SUR
                  </Link>
                </li>
                <li>
                  <Link href="/mission" className="hover:text-sur-orange transition-colors">
                    Our Mission
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-sur-orange transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/careers" className="hover:text-sur-orange transition-colors">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
            <p>&copy; 2024 SUR. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
