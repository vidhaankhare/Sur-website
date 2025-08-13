import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Search,
  Filter,
  Star,
  Play,
  Video,
  FileText,
  Music,
  Download,
  Heart,
  Eye,
  TrendingUp,
  Calendar,
  User,
} from "lucide-react"
import Link from "next/link"

const resourceTypes = [
  { id: "all", name: "All Resources", count: 2847 },
  { id: "videos", name: "Video Lessons", count: 1923, icon: Video },
  { id: "articles", name: "Articles & Guides", count: 456, icon: FileText },
  { id: "exercises", name: "Practice Exercises", count: 312, icon: Music },
  { id: "backing", name: "Backing Tracks", count: 156, icon: Play },
]

const featuredResources = [
  {
    id: 1,
    title: "Complete Guitar Setup Guide",
    type: "Video Lesson",
    creator: "JustinGuitar",
    duration: "18:42",
    difficulty: "Beginner",
    rating: 4.9,
    views: 125000,
    department: "Guitar",
    description: "Learn how to properly set up your guitar for optimal playability and tone.",
    thumbnail: "/images/guitar-hero.png",
    tags: ["Setup", "Maintenance", "Beginner"],
    addedDate: "2024-01-15",
    videoUrl: "https://www.youtube.com/watch?v=F0bHtH_Slqc",
  },
  {
    id: 2,
    title: "Breathing Techniques for Singers",
    type: "Video Lesson",
    creator: "New York Vocal Coaching",
    duration: "22:15",
    difficulty: "Intermediate",
    rating: 4.8,
    views: 89000,
    department: "Vocal",
    description: "Master proper breathing techniques essential for vocal performance.",
    thumbnail: "/images/vocal-hero.png",
    tags: ["Breathing", "Technique", "Performance"],
    addedDate: "2024-01-12",
    videoUrl: "https://www.youtube.com/watch?v=F_nOSdnZmoI",
  },
  {
    id: 3,
    title: "Jazz Piano Chord Progressions",
    type: "Article",
    creator: "Piano Nanny",
    duration: "15 min read",
    difficulty: "Advanced",
    rating: 4.7,
    views: 67000,
    department: "Piano",
    description: "Comprehensive guide to essential jazz chord progressions and voicings.",
    thumbnail: "/images/piano-hero.png",
    tags: ["Jazz", "Chords", "Theory"],
    addedDate: "2024-01-10",
    videoUrl: "https://www.youtube.com/watch?v=2mxlG5bzcyQ",
  },
  {
    id: 4,
    title: "Drum Rudiments Practice Pack",
    type: "Exercise",
    creator: "Drumeo",
    duration: "45 exercises",
    difficulty: "Intermediate",
    rating: 4.9,
    views: 43000,
    department: "Percussion",
    description: "Essential drum rudiments with practice exercises and backing tracks.",
    thumbnail: "/images/drums-hero.png",
    tags: ["Rudiments", "Practice", "Technique"],
    addedDate: "2024-01-08",
    videoUrl: "https://www.youtube.com/watch?v=p28yHhpT7-8",
  },
  {
    id: 5,
    title: "Music Theory Fundamentals",
    type: "Article Series",
    creator: "Music Theory Academy",
    duration: "8 part series",
    difficulty: "Beginner",
    rating: 4.8,
    views: 156000,
    department: "Theory",
    description: "Complete introduction to music theory concepts and applications.",
    thumbnail: "/images/theory-hero.png",
    tags: ["Theory", "Fundamentals", "Beginner"],
    addedDate: "2024-01-05",
    videoUrl: "https://www.youtube.com/watch?v=kvGYl8JBXRE",
  },
  {
    id: 6,
    title: "Violin Bow Technique Masterclass",
    type: "Video Lesson",
    creator: "Violin Lounge",
    duration: "35:20",
    difficulty: "Advanced",
    rating: 4.9,
    views: 78000,
    department: "Strings",
    description: "Advanced bowing techniques for expressive violin performance.",
    thumbnail: "/images/violin-hero.png",
    tags: ["Bowing", "Technique", "Expression"],
    addedDate: "2024-01-03",
    videoUrl: "https://www.youtube.com/watch?v=lNvWQKXlvzU",
  },
]

const recentAdditions = [
  {
    title: "Advanced Fingerpicking Patterns",
    creator: "Acoustic Guitar Academy",
    type: "Video",
    addedDate: "2024-01-20",
    department: "Guitar",
    videoUrl: "https://www.youtube.com/watch?v=VJTmNRgBXQs",
  },
  {
    title: "Vocal Warm-up Routine",
    creator: "Vocal Coach Institute",
    type: "Exercise",
    addedDate: "2024-01-19",
    department: "Vocal",
    videoUrl: "https://www.youtube.com/watch?v=F_nOSdnZmoI",
  },
  {
    title: "Piano Sight-Reading Tips",
    creator: "Piano Video Lessons",
    type: "Article",
    addedDate: "2024-01-18",
    department: "Piano",
    videoUrl: "https://www.youtube.com/watch?v=2mxlG5bzcyQ",
  },
  {
    title: "Jazz Drum Fills Collection",
    creator: "Jazz Drumming",
    type: "Exercise",
    addedDate: "2024-01-17",
    department: "Percussion",
    videoUrl: "https://www.youtube.com/watch?v=p28yHhpT7-8",
  },
]

const collections = [
  {
    id: 1,
    title: "Editor'apos;s Pick: Essential Guitar Skills",
    description: "Hand-selected resources for building fundamental guitar techniques",
    resourceCount: 24,
    image: "/images/guitar-hero.png",
    badge: "Editor'apos;s Choice",
  },
  {
    id: 2,
    title: "Student Favorites: Vocal Training",
    description: "Most popular vocal training resources among our students",
    resourceCount: 18,
    image: "/images/vocal-hero.png",
    badge: "Student Choice",
  },
  {
    id: 3,
    title: "New Discoveries: Jazz Essentials",
    description: "Recently discovered excellent jazz education content",
    resourceCount: 15,
    image: "/images/piano-hero.png",
    badge: "New",
  },
  {
    id: 4,
    title: "Genre Spotlight: Classical Piano",
    description: "Comprehensive classical piano learning resources",
    resourceCount: 32,
    image: "/images/piano-hero.png",
    badge: "Featured",
  },
]

export default function LibraryPage() {
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
              <Link href="/departments" className="text-gray-700 hover:text-sur-orange transition-colors">
                Departments
              </Link>
              <Link href="/library" className="text-sur-orange font-medium">
                Library
              </Link>
              <Link href="/community" className="text-gray-700 hover:text-sur-orange transition-colors">
                Community
              </Link>
            </nav>
            <div className="flex items-center space-x-3">
              <Button variant="outline" asChild>
                <Link href="/portal/login">Student Login</Link>
              </Button>
              <Button className="bg-sur-orange hover:bg-sur-orange-dark" asChild>
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
            <h1 className="text-4xl font-bold text-gray-800 mb-4">Resource Library</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our comprehensive collection of expertly curated music education resources from the best
              instructors across the internet.
            </p>
          </div>

          {/* Search and Filter */}
          <div className="flex flex-col md:flex-row gap-4 max-w-4xl mx-auto mb-8 items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input placeholder="Search resources, creators, topics..." className="pl-10" />
            </div>
            <div className="flex gap-2">
              <Button variant="outline" className="flex items-center bg-transparent">
                <Filter className="w-4 h-4 mr-2" />
                Filter
              </Button>
              <Button variant="outline" className="flex items-center bg-transparent">
                <TrendingUp className="w-4 h-4 mr-2" />
                Sort
              </Button>
            </div>
          </div>

          {/* Resource Type Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {resourceTypes.map((type) => (
              <Button
                key={type.id}
                variant={type.id === "all" ? "default" : "outline"}
                className={`flex items-center gap-2 ${
                  type.id === "all" ? "bg-sur-orange hover:bg-sur-orange-dark" : "bg-transparent"
                }`}
              >
                {type.icon && <type.icon className="w-4 h-4" />}
                {type.name}
                <Badge variant="secondary" className="ml-1">
                  {type.count}
                </Badge>
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="pb-16 px-4">
        <div className="container mx-auto">
          <Tabs defaultValue="featured" className="w-full">
            <TabsList className="grid w-full grid-cols-4 max-w-2xl mx-auto mb-8 gap-2">
              <TabsTrigger value="featured">Featured</TabsTrigger>
              <TabsTrigger value="recent">Recent</TabsTrigger>
              <TabsTrigger value="collections">Collections</TabsTrigger>
              <TabsTrigger value="browse">Browse All</TabsTrigger>
            </TabsList>

            {/* Featured Resources */}
            <TabsContent value="featured" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredResources.map((resource) => (
                    <Card
                      key={resource.id}
                      className="hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
                    >
                      <div className="aspect-video relative">
                        <img
                          src={resource.thumbnail || "/placeholder.svg"}
                          alt={resource.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 left-2">
                          <Badge className="bg-sur-orange text-white">{resource.type}</Badge>
                        </div>
                        <div className="absolute top-2 right-2">
                          <Badge variant="secondary">{resource.difficulty}</Badge>
                        </div>
                        <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                          {resource.duration}
                        </div>
                      </div>

                      <CardHeader className="pb-2">
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg line-clamp-2">{resource.title}</CardTitle>
                          <Button variant="ghost" size="sm" className="p-1">
                            <Heart className="w-4 h-4" />
                          </Button>
                        </div>
                        <CardDescription className="line-clamp-2">{resource.description}</CardDescription>
                      </CardHeader>

                      <CardContent className="space-y-3">
                        <div className="flex items-center justify-between text-sm text-gray-600">
                          <div className="flex items-center">
                            <User className="w-4 h-4 mr-1" />
                            {resource.creator}
                          </div>
                          <Badge variant="outline">{resource.department}</Badge>
                        </div>

                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center">
                              <Star className="w-4 h-4 text-yellow-500 mr-1" />
                              {resource.rating}
                            </div>
                            <div className="flex items-center">
                              <Eye className="w-4 h-4 text-gray-500 mr-1" />
                              {resource.views.toLocaleString()}
                            </div>
                          </div>
                          <div className="flex items-center text-gray-500">
                            <Calendar className="w-4 h-4 mr-1" />
                            {new Date(resource.addedDate).toLocaleDateString()}
                          </div>
                        </div>

                        <div className="flex flex-wrap gap-1">
                          {resource.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>

                        <div className="flex gap-2 pt-2">
                          <Button className="flex-1 bg-sur-orange hover:bg-sur-orange-dark" asChild>
                            <Link href={resource.videoUrl} target="_blank" rel="noopener noreferrer">
                              <Play className="w-4 h-4 mr-2" />
                              View Resource
                            </Link>
                          </Button>
                          <Button variant="outline" size="sm">
                            <Download className="w-4 h-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Recent Additions */}
            <TabsContent value="recent" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Recently Added</h2>
                <div className="space-y-4">
                  {recentAdditions.map((resource, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                      <CardContent className="p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex-1">
                            <h3 className="font-semibold text-gray-800">{resource.title}</h3>
                            <p className="text-sm text-gray-600">by {resource.creator}</p>
                          </div>
                          <div className="flex items-center space-x-4">
                            <Badge variant="outline">{resource.type}</Badge>
                            <Badge className="bg-sur-orange text-white">{resource.department}</Badge>
                            <div className="text-sm text-gray-500">
                              {new Date(resource.addedDate).toLocaleDateString()}
                            </div>
                            <Button size="sm" className="bg-sur-orange hover:bg-sur-orange-dark" asChild>
                              <Link href={resource.videoUrl} target="_blank" rel="noopener noreferrer">
                                View
                              </Link>
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Collections */}
            <TabsContent value="collections" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Curated Collections by SUR Experts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {collections.map((collection) => (
                    <Card
                      key={collection.id}
                      className="hover:shadow-lg transition-shadow overflow-hidden flex flex-col"
                    >
                      <div className="aspect-video relative">
                        <img
                          src={collection.image || "/placeholder.svg"}
                          alt={collection.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute top-2 left-2">
                          <Badge className="bg-sur-orange text-white">{collection.badge}</Badge>
                        </div>
                      </div>
                      <CardHeader>
                        <CardTitle className="text-lg">{collection.title}</CardTitle>
                        <CardDescription>{collection.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex flex-col justify-between">
                        <div className="flex items-center justify-between">
                          <div className="text-sm text-gray-600">{collection.resourceCount} resources</div>
                          <Button className="bg-sur-orange hover:bg-sur-orange-dark">Explore Collection</Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>

            {/* Browse All */}
            <TabsContent value="browse" className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-6">All Resources</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {featuredResources.map((resource) => (
                    <Card key={resource.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <CardTitle className="text-lg line-clamp-2">{resource.title}</CardTitle>
                          <Badge variant="outline">{resource.type}</Badge>
                        </div>
                        <CardDescription>by {resource.creator}</CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center">
                            <Star className="w-4 h-4 text-yellow-500 mr-1" />
                            {resource.rating}
                          </div>
                          <Badge className="bg-sur-orange text-white">{resource.department}</Badge>
                        </div>
                        <Button className="w-full bg-sur-orange hover:bg-sur-orange-dark" asChild>
                          <Link href={resource.videoUrl} target="_blank" rel="noopener noreferrer">
                            View Resource
                          </Link>
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gradient-to-r from-sur-orange to-sur-orange-dark text-white">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Can'apos;t Find What You'apos;re Looking For?</h2>
          <p className="text-xl mb-8 opacity-90">Suggest new resources or request specific content for our library</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" className="text-lg px-8">
              Suggest Resource
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 border-white text-white hover:bg-white hover:text-sur-orange bg-transparent"
            >
              Request Content
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
