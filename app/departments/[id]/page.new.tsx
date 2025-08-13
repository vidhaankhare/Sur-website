import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { DepartmentHero, RoadmapCard, WeeklyContent } from '@/components/departments';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { ChevronRight, BookOpen, Users, Award, Star, Clock, FileText } from 'lucide-react';
import { Department, DepartmentData } from '@/types/department';
import { getDepartmentById } from '@/lib/department-utils';
import { Suspense } from 'react';

interface DepartmentPageProps {
  params: { id: string };
}

export async function generateMetadata({ params }: DepartmentPageProps): Promise<Metadata> {
  const department = getDepartmentById(params.id, departmentData as DepartmentData);
  
  if (!department) {
    return {
      title: 'Department Not Found | SUR Music Academy',
      description: 'The requested department could not be found.'
    };
  }

  return {
    title: `${department.name} | SUR Music Academy`,
    description: department.description,
    openGraph: {
      title: `${department.name} | SUR Music Academy`,
      description: department.description,
      images: [
        {
          url: department.image || '/images/og-image.jpg',
          width: 1200,
          height: 630,
          alt: department.name,
        },
      ],
    },
  };
}

// Error boundary component for department not found
function DepartmentNotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center p-6">
      <div className="w-16 h-16 rounded-full bg-red-100 flex items-center justify-center mb-4">
        <svg
          className="w-8 h-8 text-red-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <h1 className="text-3xl font-bold text-gray-900 mb-2">Department Not Found</h1>
      <p className="text-gray-600 mb-6 max-w-md">
        We couldn't find the department you're looking for. It may have been moved or doesn't exist.
      </p>
      <Button asChild>
        <a href="/departments" className="flex items-center gap-2">
          <span>Browse All Departments</span>
          <ChevronRight className="w-4 h-4" />
        </a>
      </Button>
    </div>
  );
}

export default function DepartmentPage({ params }: DepartmentPageProps) {
  const department = getDepartmentById(params.id, departmentData as DepartmentData);
  
  if (!department) {
    return <DepartmentNotFound />;
  }

  const firstRoadmap = department.roadmaps[0];
  const firstWeekContent = firstRoadmap?.weeklyContent?.[0];

  return (
    <div className="min-h-screen bg-background">
      {/* Department Hero Section */}
      <DepartmentHero department={department} />

      <main className="container mx-auto px-4 py-12">
        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-3 space-y-12">
            {/* Featured Content */}
            {firstWeekContent && (
              <section className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold text-foreground">Featured This Week</h2>
                  <Button variant="ghost" className="text-sur-orange hover:bg-sur-orange/10">
                    View all weeks <ChevronRight className="ml-1 w-4 h-4" />
                  </Button>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {firstWeekContent.lessons.slice(0, 2).map((lesson, idx) => (
                    <div key={idx} className="bg-card rounded-lg border border-border overflow-hidden">
                      <div className="aspect-video bg-black">
                        <Suspense fallback={
                          <div className="w-full h-full flex items-center justify-center bg-gray-100">
                            <div className="animate-pulse w-full h-full bg-gray-200"></div>
                          </div>
                        }>
                          <div className="w-full h-full">
                            <iframe
                              className="w-full h-full"
                              src={`https://www.youtube.com/embed/${lesson.videoId}?rel=0&showinfo=0`}
                              title={lesson.title}
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                              allowFullScreen
                              loading="lazy"
                            />
                          </div>
                        </Suspense>
                      </div>
                      <div className="p-4">
                        <h3 className="font-medium text-foreground line-clamp-2">{lesson.title}</h3>
                        <p className="text-sm text-muted-foreground mt-1">By {lesson.creator}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Roadmaps Section */}
            <section id="roadmaps" className="space-y-6">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold text-foreground">Learning Paths</h2>
                <Button variant="ghost" className="text-sur-orange hover:bg-sur-orange/10">
                  View all paths <ChevronRight className="ml-1 w-4 h-4" />
                </Button>
              </div>

              <Tabs defaultValue={department.roadmaps[0]?.id} className="w-full">
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mb-6">
                  {department.roadmaps.map((roadmap) => (
                    <TabsTrigger key={roadmap.id} value={roadmap.id} className="text-sm">
                      {roadmap.title}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {department.roadmaps.map((roadmap) => (
                  <TabsContent key={roadmap.id} value={roadmap.id} className="space-y-6">
                    <RoadmapCard 
                      roadmap={roadmap} 
                      index={department.roadmaps.indexOf(roadmap)}
                      departmentId={params.id}
                    />
                  </TabsContent>
                ))}
              </Tabs>
            </section>
          </div>

          {/* Right Column - Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            {/* Quick Stats */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold text-lg mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-sur-orange/10 flex items-center justify-center mr-3">
                    <Users className="w-5 h-5 text-sur-orange" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Students</p>
                    <p className="font-medium">{department.totalStudents.toLocaleString()}+</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-sur-orange/10 flex items-center justify-center mr-3">
                    <Star className="w-5 h-5 text-sur-orange" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Rating</p>
                    <p className="font-medium">{department.avgRating}/5.0</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-sur-orange/10 flex items-center justify-center mr-3">
                    <BookOpen className="w-5 h-5 text-sur-orange" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Courses</p>
                    <p className="font-medium">{department.roadmaps.length}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Upcoming Events */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold text-lg mb-4">Upcoming Events</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-sur-orange/10 text-sur-orange rounded-md p-2 mr-3">
                    <CalendarDays className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Live Q&A Session</p>
                    <p className="text-sm text-muted-foreground">Tomorrow, 6:00 PM</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-sur-orange/10 text-sur-orange rounded-md p-2 mr-3">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-medium">Monthly Challenge</p>
                    <p className="text-sm text-muted-foreground">Starts in 3 days</p>
                  </div>
                </div>
              </div>
              <Button variant="outline" className="w-full mt-4">
                View All Events
              </Button>
            </div>

            {/* Resources */}
            <div className="bg-card rounded-lg border border-border p-6">
              <h3 className="font-semibold text-lg mb-4">Resources</h3>
              <div className="space-y-3">
                <Button variant="ghost" className="w-full justify-start">
                  <FileText className="w-4 h-4 mr-2" />
                  Course Syllabus
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Headphones className="w-4 h-4 mr-2" />
                  Practice Tracks
                </Button>
                <Button variant="ghost" className="w-full justify-start">
                  <Music2 className="w-4 h-4 mr-2" />
                  Sheet Music
                </Button>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

// In a real app, this would be fetched from an API or CMS
const departmentData = {
  // ... (existing department data)
};
