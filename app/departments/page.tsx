import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Guitar,
  Piano,
  Drum,
  PianoIcon as Violin,
  Wind,
  BookOpen,
  Search,
  Filter,
  Star,
  Users,
  Mic,
  Music2,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"

const departments = [
  {
    id: "vocal",
    name: "Vocal Studies",
    icon: Mic,
    description: "Master vocal techniques from breath control to advanced performance across all genres",
    roadmaps: 12,
    totalStudents: 8947,
    avgRating: 4.8,
    levels: ["Foundation", "Intermediate", "Advanced", "Professional"],
    specializations: ["Classical", "Contemporary", "Jazz", "World Music"],
    faculty: "SUR Experts",
    image: "/images/vocal-hero.png",
  },
  {
    id: "guitar",
    name: "Guitar Department",
    icon: Guitar,
    description: "Comprehensive guitar education covering acoustic, electric, classical, and contemporary styles",
    roadmaps: 18,
    totalStudents: 12456,
    avgRating: 4.9,
    levels: ["Beginner", "Intermediate", "Advanced", "Master"],
    specializations: ["Classical", "Rock", "Jazz", "Fingerstyle", "Blues"],
    faculty: "SUR Experts",
    image: "/images/guitar-hero.png",
  },
  {
    id: "piano",
    name: "Piano & Keyboard",
    icon: Piano,
    description: "Classical piano foundation to modern keyboard techniques and digital music production",
    roadmaps: 15,
    totalStudents: 9834,
    avgRating: 4.8,
    levels: ["Beginner", "Intermediate", "Advanced", "Concert Level"],
    specializations: ["Classical", "Jazz", "Contemporary", "Digital"],
    faculty: "SUR Experts",
    image: "/images/piano-hero.png",
  },
  {
    id: "percussion",
    name: "Percussion",
    icon: Drum,
    description: "Comprehensive percussion education including drums, world percussion, and orchestral instruments",
    roadmaps: 10,
    totalStudents: 6723,
    avgRating: 4.7,
    levels: ["Beginner", "Intermediate", "Advanced", "Professional"],
    specializations: ["Drum Kit", "World Percussion", "Orchestral", "Electronic"],
    faculty: "SUR Experts",
    image: "/images/drums-hero.png",
  },
  {
    id: "strings",
    name: "String Instruments",
    icon: Violin,
    description: "Master violin, viola, cello, double bass, and other string instruments",
    roadmaps: 14,
    totalStudents: 5892,
    avgRating: 4.9,
    levels: ["Beginner", "Intermediate", "Advanced", "Virtuoso"],
    specializations: ["Classical", "Folk", "Contemporary", "Chamber Music"],
    faculty: "SUR Experts",
    image: "/images/violin-hero.png",
  },
  {
    id: "winds",
    name: "Wind Instruments",
    icon: Wind,
    description: "Comprehensive wind instrument education covering woodwinds and brass instruments",
    roadmaps: 11,
    totalStudents: 4567,
    avgRating: 4.6,
    levels: ["Beginner", "Intermediate", "Advanced", "Professional"],
    specializations: ["Woodwinds", "Brass", "Jazz", "Classical"],
    faculty: "SUR Experts",
    image: "/images/flute-hero.png",
  },
  {
    id: "theory",
    name: "Music Theory",
    icon: BookOpen,
    description: "Comprehensive music theory, analysis, and composition fundamentals",
    roadmaps: 8,
    totalStudents: 11234,
    avgRating: 4.7,
    levels: ["Foundation", "Intermediate", "Advanced", "Graduate"],
    specializations: ["Classical Theory", "Jazz Theory", "Analysis", "Composition"],
    faculty: "SUR Experts",
    image: "/images/theory-hero.png",
  },
  {
    id: "composition",
    name: "Composition & Production",
    icon: Music2,
    description: "Songwriting, arranging, orchestration, and modern music production techniques",
    roadmaps: 9,
    totalStudents: 7891,
    avgRating: 4.8,
    levels: ["Beginner", "Intermediate", "Advanced", "Professional"],
    specializations: ["Songwriting", "Orchestration", "Digital Production", "Film Scoring"],
    faculty: "SUR Experts",
    image: "/images/composition-hero.png",
  },
]

export default function DepartmentsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3">
              <img src="/images/sur-logo.png" alt="SUR Logo" className="w-10 h-10 rounded-full" />
              <div>
                <h1 className="text-xl font-bold text-gray-800">SUR</h1>
                <p className="text-xs text-gray-600">where music finds you</p>
              </div>
            </Link>
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/departments" className="text-sur-orange-500 font-medium">
                Departments
              </Link>
              <Link href="/library" className="text-gray-700 hover:text-sur-orange-500 transition-colors">
                Library
              </Link>
              <Link href="/community" className="text-gray-700 hover:text-sur-orange-500 transition-colors">
                Community
              </Link>
            </nav>
            <div className="flex items-center space-x-3">
              <Button variant="outline" asChild>
                <Link href="/portal/login">Student Login</Link>
              </Button>
              <Button className="bg-sur-orange-500 hover:bg-sur-orange-600" asChild>
                <Link href="/portal/register">Enroll Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Page Header */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Academic Departments</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our comprehensive range of music departments, each offering structured learning paths designed by
              expert faculty members.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto mb-8">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search departments..." className="pl-10" />
            </div>
            <Button variant="outline" className="flex items-center bg-transparent">
              <Filter className="w-4 h-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>
      </section>

      {/* Departments Grid */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept) => (
              <Card
                key={dept.id}
                className="hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col justify-between h-full"
              >
                <div className="flex flex-col h-full">
                  <div className="aspect-video bg-gradient-to-r from-orange-100 to-orange-200 relative">
                    <img
                      src={dept.image || "/placeholder.svg"}
                      alt={dept.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                        <dept.icon className="w-6 h-6 text-sur-orange-600" />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-white/90 text-gray-800">{dept.roadmaps} Roadmaps</Badge>
                    </div>
                  </div>

                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-xl mb-2">{dept.name}</CardTitle>
                        <CardDescription className="text-base">{dept.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>

                  <CardContent className="space-y-3 flex-grow">
                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-2 text-center">
                      <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center mb-1">
                          <Users className="w-4 h-4 text-gray-500 mr-1" />
                          <span className="text-sm font-medium">{dept.totalStudents.toLocaleString()}</span>
                        </div>
                        <p className="text-xs text-gray-500">Students</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center mb-1">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          <span className="text-sm font-medium">{dept.avgRating}</span>
                        </div>
                        <p className="text-xs text-gray-500">Rating</p>
                      </div>
                      <div className="flex flex-col items-center">
                        <div className="flex items-center justify-center mb-1">
                          <BookOpen className="w-4 h-4 text-gray-500 mr-1" />
                          <span className="text-sm font-medium">{dept.roadmaps}</span>
                        </div>
                        <p className="text-xs text-gray-500">Courses</p>
                      </div>
                    </div>

                    {/* Levels */}
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Skill Levels:</p>
                      <div className="flex flex-wrap gap-1">
                        {dept.levels.map((level) => (
                          <Badge key={level} variant="secondary" className="text-xs">
                            {level}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Specializations */}
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Specializations:</p>
                      <div className="flex flex-wrap gap-1">
                        {dept.specializations.map((spec) => (
                          <Badge key={spec} variant="outline" className="text-xs">
                            {spec}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Faculty */}
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-1">Department Faculty:</p>
                      <p className="text-sm text-gray-600">{dept.faculty}</p>
                    </div>
                  </CardContent>
                </div>

                {/* Action Button */}
                <Button className="w-full bg-sur-orange-500 hover:bg-sur-orange-600 mt-auto" asChild>
                  <Link href={`/departments/${dept.id}`}>
                    Enter Department
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-sur-orange-500 to-sur-orange-600 text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Begin Your Musical Education?</h2>
          <p className="text-xl mb-8 opacity-90">
            Choose your department and start learning with expert-curated content today
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8" asChild>
            <Link href="/portal/register">Enroll Now - Free Registration</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
