import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, BookOpen, PenTool, CheckCircle, Clock, User } from "lucide-react"
import Link from "next/link"

// YouTube video component
function YouTubePlayer({ videoId, title }: { videoId: string; title: string }) {
  return (
    <div className="youtube-embed">
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="rounded-lg"
      ></iframe>
    </div>
  )
}

export default function LessonPage({
  params,
}: {
  params: { courseId: string; weekId: string; lessonId: string }
}) {
  // Sample lesson data - in real app this would come from database
  const lesson = {
    id: params.lessonId,
    title: "How to Hold a Guitar Properly",
    creator: "JustinGuitar",
    duration: "8:42",
    videoId: "F0bHtH_Slqc",
    description:
      "Learn the fundamental technique of holding a guitar correctly for optimal playing comfort and technique development.",
    week: Number.parseInt(params.weekId),
    course: "GUIT-101: Guitar Fundamentals",
    keyPoints: [
      "Proper sitting posture with straight back",
      "Guitar positioning on right leg",
      "Left hand thumb placement behind neck",
      "Right arm positioning over guitar body",
    ],
    nextLesson: {
      id: "1",
      title: "Guitar Anatomy & Parts",
      creator: "Marty Music",
    },
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

      {/* Breadcrumb */}
      <div className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center space-x-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-sur-orange transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/departments/guitar" className="hover:text-sur-orange transition-colors">
              Guitar Department
            </Link>
            <span>/</span>
            <Link href={`/course/${params.courseId}`} className="hover:text-sur-orange transition-colors">
              {lesson.course}
            </Link>
            <span>/</span>
            <span className="text-foreground">Week {lesson.week}</span>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Video Content */}
          <div className="lg:col-span-3">
            {/* Video Player */}
            <Card className="mb-6 border-border">
              <CardContent className="p-0">
                <YouTubePlayer videoId={lesson.videoId} title={lesson.title} />
              </CardContent>
            </Card>

            {/* Lesson Info */}
            <Card className="mb-6 border-border">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-2xl text-foreground mb-2">{lesson.title}</CardTitle>
                    <CardDescription className="text-muted-foreground mb-4">{lesson.description}</CardDescription>

                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <User className="w-4 h-4 mr-2 text-sur-orange" />
                        {lesson.creator}
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-4 h-4 mr-2 text-sur-orange" />
                        {lesson.duration}
                      </div>
                      <Badge className="bg-sur-orange/20 text-sur-orange border-sur-orange/30">
                        Week {lesson.week}
                      </Badge>
                    </div>
                  </div>

                  <Button className="bg-sur-orange hover:bg-sur-orange-dark text-black font-medium">
                    <CheckCircle className="w-4 h-4 mr-2" />
                    Mark Complete
                  </Button>
                </div>
              </CardHeader>
            </Card>

            {/* Key Learning Points */}
            <Card className="mb-6 border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center">
                  <BookOpen className="w-5 h-5 mr-2 text-sur-orange" />
                  Key Learning Points
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {lesson.keyPoints.map((point, index) => (
                    <li key={index} className="flex items-start text-muted-foreground">
                      <span className="text-sur-orange mr-2 mt-1">•</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Notes Section */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground flex items-center">
                  <PenTool className="w-5 h-5 mr-2 text-sur-orange" />
                  Your Notes
                </CardTitle>
              </CardHeader>
              <CardContent>
                <textarea
                  className="w-full h-32 p-3 bg-card border border-border rounded-lg text-foreground placeholder-muted-foreground resize-none"
                  placeholder="Take notes about this lesson..."
                />
                <Button className="mt-3 bg-sur-orange hover:bg-sur-orange-dark text-black font-medium">
                  Save Notes
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Progress */}
            <Card className="mb-6 border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Course Progress</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Week {lesson.week} Progress</span>
                      <span className="text-sur-orange">1/3</span>
                    </div>
                    <Progress value={33} className="h-2" />
                  </div>

                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-muted-foreground">Overall Progress</span>
                      <span className="text-sur-orange">4%</span>
                    </div>
                    <Progress value={4} className="h-2" />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <Card className="mb-6 border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Lesson Navigation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button variant="outline" className="w-full justify-start bg-transparent" asChild>
                  <Link href={`/course/${params.courseId}`}>
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Back to Course
                  </Link>
                </Button>

                {lesson.nextLesson && (
                  <Button
                    className="w-full justify-start bg-sur-orange hover:bg-sur-orange-dark text-black font-medium"
                    asChild
                  >
                    <Link href={`/learn/${params.courseId}/${params.weekId}/${lesson.nextLesson.id}`}>
                      Next: {lesson.nextLesson.title}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                )}
              </CardContent>
            </Card>

            {/* Week Overview */}
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-foreground">Week {lesson.week} Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center justify-between p-2 bg-sur-orange/10 rounded border border-sur-orange/20">
                    <span className="text-sm text-foreground">How to Hold a Guitar</span>
                    <CheckCircle className="w-4 h-4 text-sur-orange" />
                  </div>
                  <div className="flex items-center justify-between p-2 bg-card rounded border border-border">
                    <span className="text-sm text-muted-foreground">Guitar Anatomy & Parts</span>
                    <div className="w-4 h-4 border border-border rounded-full"></div>
                  </div>
                  <div className="flex items-center justify-between p-2 bg-card rounded border border-border">
                    <span className="text-sm text-muted-foreground">Tuning Your Guitar</span>
                    <div className="w-4 h-4 border border-border rounded-full"></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
