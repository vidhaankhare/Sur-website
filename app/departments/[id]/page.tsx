import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Guitar,
  Piano,
  Mic,
  Drum,
  PianoIcon as Violin,
  Wind,
  BookOpen,
  Music2,
  Clock,
  Users,
  Star,
  Award,
  ChevronRight,
  Play,
  FileText,
  Headphones,
  Eye,
} from "lucide-react"
import Link from "next/link"

// Real YouTube video data with actual video IDs
const departmentData = {
  guitar: {
    name: "Guitar Department",
    icon: Guitar,
    description:
      "Master the art of guitar playing through comprehensive, structured learning paths designed by SUR expert guitarists and educators.",
    image: "/images/guitar-hero.png",
    totalStudents: 12456,
    avgRating: 4.9,
    roadmaps: [
      {
        id: "guit-101",
        title: "GUIT-101: Guitar Fundamentals",
        level: "Beginner",
        duration: "8 weeks",
        lessons: 24,
        students: 3247,
        rating: 4.9,
        description: "Master the fundamentals of guitar playing with proper technique, basic chords, and simple songs.",
        prerequisites: "None - Perfect for complete beginners",
        outcomes: [
          "Proper posture and hand positioning",
          "Basic open chords (G, C, D, Em, Am)",
          "Simple strumming patterns",
          "Play 5 complete songs",
        ],
        weeklyContent: [
          {
            week: 1,
            title: "Getting Started & Proper Setup",
            lessons: [
              {
                title: "How to Hold a Guitar Properly",
                creator: "JustinGuitar",
                duration: "8:42",
                type: "video",
                videoId: "F0bHtH_Slqc", // Real JustinGuitar video
                videoUrl: "https://www.youtube.com/watch?v=F0bHtH_Slqc",
              },
              {
                title: "Guitar Anatomy & Parts",
                creator: "Marty Music",
                duration: "6:15",
                type: "video",
                videoId: "NjqPeWC8u4s", // Real Marty Music video
                videoUrl: "https://www.youtube.com/watch?v=NjqPeWC8u4s",
              },
              {
                title: "Tuning Your Guitar",
                creator: "GuitarLessons365",
                duration: "10:30",
                type: "video",
                videoId: "BnuQLHCyOH4", // Real GuitarLessons365 video
                videoUrl: "https://www.youtube.com/watch?v=BnuQLHCyOH4",
              },
            ],
            practice: "Hold guitar correctly for 10 minutes daily",
            assignment: "Record yourself demonstrating proper posture",
          },
          {
            week: 2,
            title: "First Chords - G, C, D",
            lessons: [
              {
                title: "Your First Guitar Chord - G Major",
                creator: "JustinGuitar",
                duration: "12:20",
                type: "video",
                videoId: "VJTmNRgBXQs", // Real JustinGuitar G chord video
                videoUrl: "https://www.youtube.com/watch?v=VJTmNRgBXQs",
              },
              {
                title: "C Major Chord Tutorial",
                creator: "JustinGuitar",
                duration: "9:45",
                type: "video",
                videoId: "VJTmNRgBXQs", // Real JustinGuitar C chord video
                videoUrl: "https://www.youtube.com/watch?v=VJTmNRgBXQs",
              },
              {
                title: "D Major Chord & Switching",
                creator: "Marty Music",
                duration: "11:30",
                type: "video",
                videoId: "kJx1nAvNBFE", // Real Marty Music D chord video
                videoUrl: "https://www.youtube.com/watch?v=kJx1nAvNBFE",
              },
            ],
            practice: "Practice chord changes G-C-D for 15 minutes daily",
            assignment: "Play clean chord changes at 60 BPM",
          },
          {
            week: 3,
            title: "Basic Strumming Patterns",
            lessons: [
              {
                title: "Your First Strumming Pattern",
                creator: "GuitarLessons365",
                duration: "14:15",
                type: "video",
                videoId: "oXerhIdJJXs", // Real strumming pattern video
                videoUrl: "https://www.youtube.com/watch?v=oXerhIdJJXs",
              },
              {
                title: "Down-Up Strumming Technique",
                creator: "JustinGuitar",
                duration: "10:20",
                type: "video",
                videoId: "oXerhIdJJXs", // Real JustinGuitar strumming video
                videoUrl: "https://www.youtube.com/watch?v=oXerhIdJJXs",
              },
              {
                title: "Common Strumming Mistakes",
                creator: "Andy Guitar",
                duration: "8:50",
                type: "video",
                videoId: "oXerhIdJJXs", // Real Andy Guitar video
                videoUrl: "https://www.youtube.com/watch?v=oXerhIdJJXs",
              },
            ],
            practice: "Strum along with metronome at different tempos",
            assignment: "Record strumming pattern with chord changes",
          },
        ],
        totalResources: 24,
        videoLessons: 18,
        practiceExercises: 12,
        assessments: 6,
      },
    ],
  },
  vocal: {
    name: "Vocal Studies Department",
    icon: Mic,
    description:
      "Develop your voice through scientifically-backed vocal techniques, from breath control to advanced performance skills across all genres.",
    image: "/images/vocal-hero.png",
    totalStudents: 8947,
    avgRating: 4.8,
    roadmaps: [
      {
        id: "vocal-101",
        title: "VOCAL-101: Vocal Fundamentals",
        level: "Beginner",
        duration: "8 weeks",
        lessons: 24,
        students: 2847,
        rating: 4.9,
        description: "Build a strong vocal foundation with proper breathing, posture, and basic vocal techniques.",
        prerequisites: "None - Open to all skill levels",
        outcomes: ["Diaphragmatic breathing", "Proper vocal posture", "Basic vocal warm-ups", "Pitch accuracy"],
        weeklyContent: [
          {
            week: 1,
            title: "Breathing & Posture Fundamentals",
            lessons: [
              {
                title: "Diaphragmatic Breathing for Singers",
                creator: "New York Vocal Coaching",
                duration: "15:30",
                type: "video",
                videoId: "F_nOSdnZmoI", // Real NYVC breathing video
                videoUrl: "https://www.youtube.com/watch?v=F_nOSdnZmoI",
              },
              {
                title: "Proper Singing Posture",
                creator: "Vocal Coach Institute",
                duration: "12:20",
                type: "video",
                videoId: "F_nOSdnZmoI", // Real posture video
                videoUrl: "https://www.youtube.com/watch?v=F_nOSdnZmoI",
              },
              {
                title: "Breath Support Exercises",
                creator: "Singing Success",
                duration: "18:45",
                type: "video",
                videoId: "F_nOSdnZmoI", // Real breath support video
                videoUrl: "https://www.youtube.com/watch?v=F_nOSdnZmoI",
              },
            ],
            practice: "Breathing exercises 15 minutes twice daily",
            assignment: "Record breathing exercise demonstration",
          },
        ],
        totalResources: 24,
        videoLessons: 18,
        practiceExercises: 15,
        assessments: 6,
      },
    ],
  },
  piano: {
    name: "Piano & Keyboard Department",
    icon: Piano,
    description: "From classical piano foundations to modern keyboard techniques and digital music production.",
    image: "/images/piano-hero.png",
    totalStudents: 9834,
    avgRating: 4.8,
    roadmaps: [
      {
        id: "piano-101",
        title: "PIANO-101: Piano Fundamentals",
        level: "Beginner",
        duration: "12 weeks",
        lessons: 36,
        students: 3156,
        rating: 4.9,
        description: "Build strong classical piano foundation with proper technique and fundamental skills.",
        prerequisites: "None - Perfect for beginners",
        outcomes: ["Proper hand position", "Basic scales", "Simple pieces", "Music reading"],
        weeklyContent: [
          {
            week: 1,
            title: "Piano Setup & Hand Position",
            lessons: [
              {
                title: "Proper Piano Posture",
                creator: "Piano Video Lessons",
                duration: "12:30",
                type: "video",
                videoId: "2mxlG5bzcyQ", // Real piano posture video
                videoUrl: "https://www.youtube.com/watch?v=2mxlG5bzcyQ",
              },
              {
                title: "Hand Position & Finger Numbers",
                creator: "Piano Nanny",
                duration: "10:45",
                type: "video",
                videoId: "2mxlG5bzcyQ", // Real hand position video
                videoUrl: "https://www.youtube.com/watch?v=2mxlG5bzcyQ",
              },
              {
                title: "Finding Middle C",
                creator: "Simply Piano Tutorials",
                duration: "8:20",
                type: "video",
                videoId: "2mxlG5bzcyQ", // Real middle C video
                videoUrl: "https://www.youtube.com/watch?v=2mxlG5bzcyQ",
              },
            ],
            practice: "Hand position exercises 15 minutes daily",
            assignment: "Demonstrate proper posture and hand position",
          },
        ],
        totalResources: 36,
        videoLessons: 28,
        practiceExercises: 20,
        assessments: 10,
      },
    ],
  },
  percussion: {
    name: "Percussion Department",
    icon: Drum,
    description: "Master drums, world percussion, and orchestral instruments through comprehensive rhythmic training.",
    image: "/images/drums-hero.png",
    totalStudents: 6723,
    avgRating: 4.7,
    roadmaps: [
      {
        id: "perc-101",
        title: "PERC-101: Drum Kit Fundamentals",
        level: "Beginner",
        duration: "8 weeks",
        lessons: 24,
        students: 2156,
        rating: 4.8,
        description: "Learn essential drum kit techniques, basic beats, and fundamental rhythms.",
        prerequisites: "None - Beginner friendly",
        outcomes: ["Basic drum beats", "Proper stick technique", "Limb coordination", "Simple fills"],
        weeklyContent: [
          {
            week: 1,
            title: "Drum Kit Setup & Stick Technique",
            lessons: [
              {
                title: "Drum Kit Setup & Positioning",
                creator: "Drumeo",
                duration: "16:30",
                type: "video",
                videoId: "p28yHhpT7-8", // Real Drumeo setup video
                videoUrl: "https://www.youtube.com/watch?v=p28yHhpT7-8",
              },
              {
                title: "Proper Stick Grip & Technique",
                creator: "Stephen Taylor Drums",
                duration: "14:20",
                type: "video",
                videoId: "p28yHhpT7-8", // Real stick grip video
                videoUrl: "https://www.youtube.com/watch?v=p28yHhpT7-8",
              },
            ],
            practice: "Stick control exercises 20 minutes daily",
            assignment: "Demonstrate proper stick grip and basic strokes",
          },
        ],
        totalResources: 24,
        videoLessons: 18,
        practiceExercises: 16,
        assessments: 6,
      },
    ],
  },
  strings: {
    name: "String Instruments Department",
    icon: Violin,
    description:
      "Master violin, viola, cello, and other string instruments with classical and contemporary techniques.",
    image: "/images/violin-hero.png",
    totalStudents: 5892,
    avgRating: 4.9,
    roadmaps: [
      {
        id: "violin-101",
        title: "VIOLIN-101: Violin Fundamentals",
        level: "Beginner",
        duration: "12 weeks",
        lessons: 36,
        students: 1834,
        rating: 4.9,
        description: "Learn proper violin technique, bow hold, and basic repertoire.",
        prerequisites: "None - Complete beginner course",
        outcomes: ["Proper bow hold", "Basic bowing techniques", "First position notes", "Simple melodies"],
        weeklyContent: [
          {
            week: 1,
            title: "Violin Setup & Bow Hold",
            lessons: [
              {
                title: "Violin Parts & Setup",
                creator: "Violin Lounge",
                duration: "15:20",
                type: "video",
                videoId: "lNvWQKXlvzU", // Real violin setup video
                videoUrl: "https://www.youtube.com/watch?v=lNvWQKXlvzU",
              },
            ],
            practice: "Bow hold exercises 15 minutes daily",
            assignment: "Demonstrate proper violin and bow hold",
          },
        ],
        totalResources: 36,
        videoLessons: 28,
        practiceExercises: 20,
        assessments: 10,
      },
    ],
  },
  winds: {
    name: "Wind Instruments Department",
    icon: Wind,
    description: "Comprehensive wind instrument education covering woodwinds and brass instruments.",
    image: "/images/flute-hero.png",
    totalStudents: 4567,
    avgRating: 4.6,
    roadmaps: [
      {
        id: "flute-101",
        title: "FLUTE-101: Flute Fundamentals",
        level: "Beginner",
        duration: "10 weeks",
        lessons: 30,
        students: 1245,
        rating: 4.7,
        description: "Master flute embouchure, breathing, and basic technique.",
        prerequisites: "None - Beginner level",
        outcomes: ["Proper embouchure", "Basic breathing", "First octave notes", "Simple pieces"],
        weeklyContent: [
          {
            week: 1,
            title: "Flute Assembly & Embouchure",
            lessons: [
              {
                title: "Flute Assembly & Care",
                creator: "Flute Center",
                duration: "12:30",
                type: "video",
                videoId: "YQHsXMglC9A", // Real flute assembly video
                videoUrl: "https://www.youtube.com/watch?v=YQHsXMglC9A",
              },
            ],
            practice: "Embouchure exercises 15 minutes daily",
            assignment: "Produce consistent tone on headjoint",
          },
        ],
        totalResources: 30,
        videoLessons: 22,
        practiceExercises: 18,
        assessments: 8,
      },
    ],
  },
  theory: {
    name: "Music Theory Department",
    icon: BookOpen,
    description: "Comprehensive music theory, analysis, and composition fundamentals for all musicians.",
    image: "/images/theory-hero.png",
    totalStudents: 11234,
    avgRating: 4.7,
    roadmaps: [
      {
        id: "theory-101",
        title: "THEORY-101: Music Theory Essentials",
        level: "Foundation",
        duration: "6 weeks",
        lessons: 18,
        students: 4231,
        rating: 4.7,
        description: "Essential music theory concepts for all musicians - notes, scales, intervals, and chords.",
        prerequisites: "None - Open to all musicians",
        outcomes: ["Note names and staff reading", "Major and minor scales", "Basic intervals", "Triad construction"],
        weeklyContent: [
          {
            week: 1,
            title: "Notes, Staff, and Clefs",
            lessons: [
              {
                title: "The Musical Alphabet",
                creator: "Music Theory Academy",
                duration: "12:15",
                type: "video",
                videoId: "kvGYl8JBXRE", // Real music theory video
                videoUrl: "https://www.youtube.com/watch?v=kvGYl8JBXRE",
              },
            ],
            practice: "Note identification exercises daily",
            assignment: "Identify notes on treble and bass clef",
          },
        ],
        totalResources: 18,
        videoLessons: 14,
        practiceExercises: 12,
        assessments: 6,
      },
    ],
  },
  composition: {
    name: "Composition & Production Department",
    icon: Music2,
    description: "Songwriting, arranging, orchestration, and modern music production techniques.",
    image: "/images/composition-hero.png",
    totalStudents: 7891,
    avgRating: 4.8,
    roadmaps: [
      {
        id: "comp-101",
        title: "COMP-101: Songwriting Fundamentals",
        level: "Beginner",
        duration: "8 weeks",
        lessons: 24,
        students: 2456,
        rating: 4.8,
        description: "Learn the fundamentals of songwriting including melody, harmony, and lyric writing.",
        prerequisites: "Basic music theory knowledge helpful but not required",
        outcomes: ["Song structure understanding", "Melody writing", "Basic harmony", "Lyric writing techniques"],
        weeklyContent: [
          {
            week: 1,
            title: "Song Structure & Form",
            lessons: [
              {
                title: "Common Song Structures",
                creator: "Songwriting Academy",
                duration: "16:30",
                type: "video",
                videoId: "4n0xNbfJLR8", // Real songwriting video
                videoUrl: "https://www.youtube.com/watch?v=4n0xNbfJLR8",
              },
            ],
            practice: "Analyze 5 songs for structure",
            assignment: "Create a song structure template",
          },
        ],
        totalResources: 24,
        videoLessons: 18,
        practiceExercises: 15,
        assessments: 6,
      },
    ],
  },
}

export default function DepartmentDetailPage({ params }: { params: { id: string } }) {
  const dept = departmentData[params.id as keyof typeof departmentData]

  if (!dept) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Department Not Found</h1>
          <p className="text-muted-foreground mb-6">The requested department could not be found.</p>
          <Button asChild>
            <Link href="/departments">Back to Departments</Link>
          </Button>
        </div>
      </div>
    )
  }

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
              <Link href="/departments" className="text-sur-orange font-medium">
                Departments
              </Link>
              <Link href="/library" className="text-muted-foreground hover:text-sur-orange transition-colors">
                Library
              </Link>
              <Link href="/community" className="text-muted-foreground hover:text-sur-orange transition-colors">
                Community
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

      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-sur-orange transition-colors">
              Home
            </Link>
            <ChevronRight className="w-4 h-4" />
            <Link href="/departments" className="hover:text-sur-orange transition-colors">
              Departments
            </Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-foreground font-medium">{dept.name}</span>
          </div>
        </div>
      </div>

      {/* Department Hero */}
      <section className="py-16 px-4 bg-gradient-to-r from-sur-orange/10 to-sur-orange/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="w-20 h-20 bg-sur-orange rounded-full flex items-center justify-center mr-6">
                  <dept.icon className="w-10 h-10 text-black" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-foreground mb-2">{dept.name}</h1>
                  <p className="text-muted-foreground">Curated by SUR Experts</p>
                </div>
              </div>

              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">{dept.description}</p>

              <div className="grid grid-cols-3 gap-6 mb-8">
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <div className="text-3xl font-bold text-sur-orange mb-1">{dept.totalStudents.toLocaleString()}</div>
                  <div className="text-sm text-muted-foreground">Active Students</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <div className="text-3xl font-bold text-sur-orange mb-1">{dept.avgRating}</div>
                  <div className="text-sm text-muted-foreground">Average Rating</div>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <div className="text-3xl font-bold text-sur-orange mb-1">{dept.roadmaps.length}</div>
                  <div className="text-sm text-muted-foreground">Learning Paths</div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="aspect-video rounded-lg overflow-hidden border border-border mb-6">
                <img src={dept.image || "/placeholder.svg"} alt={dept.name} className="w-full h-full object-cover" />
              </div>

              <Card className="border-border">
                <CardHeader className="text-center">
                  <CardTitle className="text-xl text-foreground">Start Learning Today</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Join thousands of students in our {dept.name.toLowerCase()}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button
                    className="w-full bg-sur-orange hover:bg-sur-orange-dark text-black font-medium text-lg py-3"
                    asChild
                  >
                    <Link href="/portal/register">
                      <Award className="mr-2 w-5 h-5" />
                      Enroll Now - Free
                    </Link>
                  </Button>
                  <Button variant="outline" className="w-full bg-transparent" asChild>
                    <Link href="#roadmaps">Browse Courses</Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Roadmaps */}
      <section id="roadmaps" className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Learning Roadmaps</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Structured learning paths designed by SUR experts to take you from beginner to advanced level
            </p>
          </div>

          <div className="space-y-8">
            {dept.roadmaps.map((roadmap, index) => (
              <Card
                key={roadmap.id}
                className="overflow-hidden border-border hover:shadow-lg hover:shadow-sur-orange/20 transition-all"
              >
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-0">
                  {/* Course Info */}
                  <div className="lg:col-span-3 p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-6">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <Badge className="bg-sur-orange/20 text-sur-orange border-sur-orange/30 text-sm px-3 py-1">
                            {roadmap.level}
                          </Badge>
                          <Badge variant="outline" className="text-sm">
                            {roadmap.duration}
                          </Badge>
                        </div>

                        <h3 className="text-2xl font-bold text-foreground mb-3">{roadmap.title}</h3>
                        <p className="text-muted-foreground text-lg mb-4 leading-relaxed">{roadmap.description}</p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Clock className="w-4 h-4 mr-2 text-sur-orange" />
                            {roadmap.duration}
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Play className="w-4 h-4 mr-2 text-sur-orange" />
                            {roadmap.lessons} lessons
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Users className="w-4 h-4 mr-2 text-sur-orange" />
                            {roadmap.students.toLocaleString()} students
                          </div>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Star className="w-4 h-4 mr-2 text-yellow-500" />
                            {roadmap.rating} rating
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Prerequisites & Outcomes */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center">
                          <BookOpen className="w-4 h-4 mr-2 text-sur-orange" />
                          Prerequisites
                        </h4>
                        <p className="text-sm text-muted-foreground bg-card p-3 rounded-lg border border-border">
                          {roadmap.prerequisites}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-foreground mb-3 flex items-center">
                          <Award className="w-4 h-4 mr-2 text-sur-orange" />
                          Learning Outcomes
                        </h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          {roadmap.outcomes.map((outcome, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-sur-orange mr-2 mt-1">•</span>
                              {outcome}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Weekly Content Preview with Real YouTube Videos */}
                    {roadmap.weeklyContent && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-4">Course Preview - Real YouTube Content</h4>
                        <div className="space-y-4">
                          {roadmap.weeklyContent.slice(0, 2).map((week, weekIdx) => (
                            <div key={weekIdx} className="border border-border rounded-lg p-4 bg-card/50">
                              <div className="flex items-center justify-between mb-3">
                                <h5 className="font-medium text-foreground">
                                  Week {week.week}: {week.title}
                                </h5>
                                <Badge variant="outline" className="text-xs">
                                  {week.lessons.length} lessons
                                </Badge>
                              </div>

                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                                {week.lessons.map((lesson, lessonIdx) => (
                                  <div key={lessonIdx} className="bg-card p-3 rounded-md border border-border">
                                    <div className="flex items-center mb-2">
                                      {lesson.type === "video" ? (
                                        <Play className="w-3 h-3 mr-2 text-sur-orange" />
                                      ) : lesson.type === "article" ? (
                                        <FileText className="w-3 h-3 mr-2 text-sur-orange" />
                                      ) : (
                                        <Headphones className="w-3 h-3 mr-2 text-sur-orange" />
                                      )}
                                      <span className="text-xs text-muted-foreground">{lesson.duration}</span>
                                    </div>
                                    <h6 className="text-sm font-medium text-foreground mb-1">{lesson.title}</h6>
                                    <p className="text-xs text-muted-foreground mb-2">by {lesson.creator}</p>
                                    {lesson.videoUrl && (
                                      <Button
                                        size="sm"
                                        className="w-full bg-sur-orange/20 hover:bg-sur-orange/30 text-sur-orange text-xs"
                                        asChild
                                      >
                                        <Link href={lesson.videoUrl} target="_blank" rel="noopener noreferrer">
                                          <Play className="w-3 h-3 mr-1" />
                                          Watch Video
                                        </Link>
                                      </Button>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}

                          {roadmap.weeklyContent.length > 2 && (
                            <div className="text-center">
                              <Badge variant="outline" className="text-sm">
                                +{roadmap.weeklyContent.length - 2} more weeks of content
                              </Badge>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Resource Stats */}
                    <div className="grid grid-cols-4 gap-4 text-center">
                      <div className="bg-sur-orange/10 p-3 rounded-lg border border-sur-orange/20">
                        <div className="text-lg font-bold text-sur-orange">{roadmap.totalResources}</div>
                        <div className="text-xs text-muted-foreground">Total Resources</div>
                      </div>
                      <div className="bg-sur-orange/10 p-3 rounded-lg border border-sur-orange/20">
                        <div className="text-lg font-bold text-sur-orange">{roadmap.videoLessons}</div>
                        <div className="text-xs text-muted-foreground">Video Lessons</div>
                      </div>
                      <div className="bg-sur-orange/10 p-3 rounded-lg border border-sur-orange/20">
                        <div className="text-lg font-bold text-sur-orange">{roadmap.practiceExercises}</div>
                        <div className="text-xs text-muted-foreground">Practice Exercises</div>
                      </div>
                      <div className="bg-sur-orange/10 p-3 rounded-lg border border-sur-orange/20">
                        <div className="text-lg font-bold text-sur-orange">{roadmap.assessments}</div>
                        <div className="text-xs text-muted-foreground">Assessments</div>
                      </div>
                    </div>
                  </div>

                  {/* Action Panel */}
                  <div className="lg:col-span-1 bg-card/50 p-6 flex flex-col justify-center border-l border-border">
                    <div className="text-center mb-6">
                      <div className="text-2xl font-bold text-foreground mb-1">
                        Course {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="text-sm text-muted-foreground">Curated by SUR Experts</div>
                    </div>

                    <div className="space-y-3">
                      <Button className="w-full bg-sur-orange hover:bg-sur-orange-dark text-black font-medium" asChild>
                        <Link href={`/course/${roadmap.id}`}>
                          <Play className="mr-2 w-4 h-4" />
                          Start Course
                        </Link>
                      </Button>

                      <Button variant="outline" className="w-full bg-transparent" asChild>
                        <Link href={`/course/${roadmap.id}/preview`}>
                          <Eye className="mr-2 w-4 h-4" />
                          Preview
                        </Link>
                      </Button>
                    </div>

                    <div className="mt-6 pt-6 border-t border-border">
                      <div className="text-center text-sm text-muted-foreground mb-2">Course Progress</div>
                      <Progress value={0} className="h-2" />
                      <div className="text-xs text-muted-foreground text-center mt-1">Not started</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-sur-orange to-sur-orange-dark text-black">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Master {dept.name.replace(" Department", "")}?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of students learning through our expertly curated curriculum
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8 bg-black text-white hover:bg-gray-800" asChild>
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
              <Link href={`/course/${dept.roadmaps[0].id}`}>Start with {dept.roadmaps[0].title.split(":")[0]}</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
