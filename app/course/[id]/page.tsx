import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Play, Clock, Users, Star, Award, CheckCircle, Lock } from "lucide-react"
import Link from "next/link"

export default function CoursePage({ params }: { params: { id: string } }) {
  // Sample course data
  const course = {
    id: params.id,
    title: "GUIT-101: Guitar Fundamentals",
    description: "Master the fundamentals of guitar playing with proper technique, basic chords, and simple songs.",
    level: "Beginner",
    duration: "8 weeks",
    totalLessons: 24,
    students: 3247,
    rating: 4.9,
    instructor: "SUR Experts",
    progress: 0,
    weeks: [
      {
        week: 1,
        title: "Getting Started & Proper Setup",
        description: "Learn the basics of guitar setup and proper playing posture",
        lessons: [
          {
            id: "0",
            title: "How to Hold a Guitar Properly",
            creator: "JustinGuitar",
            duration: "8:42",
            completed: false,
            videoId: "F0bHtH_Slqc",
            videoUrl: "https://www.youtube.com/watch?v=F0bHtH_Slqc",
          },
          {
            id: "1",
            title: "Guitar Anatomy & Parts",
            creator: "Marty Music",
            duration: "6:15",
            completed: false,
            videoId: "NjqPeWC8u4s",
            videoUrl: "https://www.youtube.com/watch?v=NjqPeWC8u4s",
          },
          {
            id: "2",
            title: "Tuning Your Guitar",
            creator: "GuitarLessons365",
            duration: "10:30",
            completed: false,
            videoId: "BnuQLHCyOH4",
            videoUrl: "https://www.youtube.com/watch?v=BnuQLHCyOH4",
          },
        ],
        assignment: "Record yourself demonstrating proper posture",
        unlocked: true,
      },
      {
        week: 2,
        title: "First Chords - G, C, D",
        description: "Learn your first three essential guitar chords",
        lessons: [
          {
            id: "0",
            title: "Your First Guitar Chord - G Major",
            creator: "JustinGuitar",
            duration: "12:20",
            completed: false,
            videoId: "VJTmNRgBXQs",
            videoUrl: "https://www.youtube.com/watch?v=VJTmNRgBXQs",
          },
          {
            id: "1",
            title: "C Major Chord Tutorial",
            creator: "JustinGuitar",
            duration: "9:45",
            completed: false,
            videoId: "VJTmNRgBXQs",
            videoUrl: "https://www.youtube.com/watch?v=VJTmNRgBXQs",
          },
          {
            id: "2",
            title: "D Major Chord & Switching",
            creator: "Marty Music",
            duration: "11:30",
            completed: false,
            videoId: "kJx1nAvNBFE",
            videoUrl: "https://www.youtube.com/watch?v=kJx1nAvNBFE",
          },
        ],
        assignment: "Play clean chord changes at 60 BPM",
        unlocked: false,
      },
      {
        week: 3,
        title: "Basic Strumming Patterns",
        description: "Develop rhythm and strumming technique",
        lessons: [
          {
            id: "0",
            title: "Your First Strumming Pattern",
            creator: "GuitarLessons365",
            duration: "14:15",
            completed: false,
            videoId: "oXerhIdJJXs",
            videoUrl: "https://www.youtube.com/watch?v=oXerhIdJJXs",
          },
        ],
        assignment: "Record strumming pattern with chord changes",
        unlocked: false,
      },
    ],
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

      {/* Course Header */}
      <section className="py-12 px-4 bg-gradient-to-r from-sur-orange/10 to-sur-orange/5">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <Badge className="mb-4 bg-sur-orange/20 text-sur-orange border-sur-orange/30">{course.level}</Badge>

              <h1 className="text-4xl font-bold text-foreground mb-4">{course.title}</h1>
              <p className="text-lg text-muted-foreground mb-6">{course.description}</p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                <div className="flex items-center text-sm text-muted-foreground">
                  <Clock className="w-4 h-4 mr-2 text-sur-orange" />
                  {course.duration}
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Play className="w-4 h-4 mr-2 text-sur-orange" />
                  {course.totalLessons} lessons
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Users className="w-4 h-4 mr-2 text-sur-orange" />
                  {course.students.toLocaleString()} students
                </div>
                <div className="flex items-center text-sm text-muted-foreground">
                  <Star className="w-4 h-4 mr-2 text-yellow-500" />
                  {course.rating} rating
                </div>
              </div>

              <p className="text-sm text-muted-foreground">👨‍🏫 Curated by: {course.instructor}</p>
            </div>

            <div className="lg:col-span-1">
              <Card className="border-border">
                <CardHeader>
                  <CardTitle className="text-foreground">Course Progress</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Overall Progress</span>
                      <span className="text-sur-orange">{course.progress}%</span>
                    </div>
                    <Progress value={course.progress} className="h-2" />
                  </div>

                  <Button className="w-full bg-sur-orange hover:bg-sur-orange-dark text-black font-medium" asChild>
                    <Link href={`/learn/${course.id}/1/0`}>
                      <Play className="mr-2 w-4 h-4" />
                      {course.progress === 0 ? "Start Course" : "Continue Learning"}
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-foreground mb-8">Course Content</h2>

          <div className="space-y-6">
            {course.weeks.map((week) => (
              <Card key={week.week} className={`border-border ${!week.unlocked ? "opacity-60" : ""}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          week.unlocked ? "bg-sur-orange text-black" : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {week.unlocked ? week.week : <Lock className="w-4 h-4" />}
                      </div>
                      <div>
                        <CardTitle className="text-foreground">
                          Week {week.week}: {week.title}
                        </CardTitle>
                        <CardDescription className="text-muted-foreground">{week.description}</CardDescription>
                      </div>
                    </div>
                    <Badge variant="outline">{week.lessons.length} lessons</Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-3">
                    {week.lessons.map((lesson, index) => (
                      <div
                        key={index}
                        className={`flex items-center justify-between p-3 rounded-lg border border-border ${
                          week.unlocked ? "bg-card hover:bg-card/80" : "bg-muted/50"
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-6 h-6 rounded-full flex items-center justify-center ${
                              lesson.completed
                                ? "bg-green-500"
                                : week.unlocked
                                  ? "bg-sur-orange/20 border border-sur-orange/30"
                                  : "bg-muted"
                            }`}
                          >
                            {lesson.completed ? (
                              <CheckCircle className="w-4 h-4 text-white" />
                            ) : (
                              <Play
                                className={`w-3 h-3 ${week.unlocked ? "text-sur-orange" : "text-muted-foreground"}`}
                              />
                            )}
                          </div>

                          <div>
                            <h4
                              className={`font-medium ${week.unlocked ? "text-foreground" : "text-muted-foreground"}`}
                            >
                              {lesson.title}
                            </h4>
                            <p className="text-sm text-muted-foreground">
                              {lesson.creator} • {lesson.duration}
                            </p>
                          </div>
                        </div>

                        {week.unlocked && (
                          <div className="flex gap-2">
                            <Button size="sm" variant="outline" asChild>
                              <Link href={`/learn/${course.id}/${week.week}/${index}`}>Watch</Link>
                            </Button>
                            <Button size="sm" className="bg-sur-orange hover:bg-sur-orange-dark text-black" asChild>
                              <Link href={lesson.videoUrl} target="_blank" rel="noopener noreferrer">
                                YouTube
                              </Link>
                            </Button>
                          </div>
                        )}
                      </div>
                    ))}

                    {week.assignment && (
                      <div className="mt-4 p-3 bg-sur-orange/10 rounded-lg border border-sur-orange/20">
                        <div className="flex items-center space-x-2 mb-2">
                          <Award className="w-4 h-4 text-sur-orange" />
                          <span className="font-medium text-foreground">Week Assignment</span>
                        </div>
                        <p className="text-sm text-muted-foreground">{week.assignment}</p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
