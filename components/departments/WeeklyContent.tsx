import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, FileText, Headphones } from "lucide-react";
import { VideoPlayer } from "@/components/departments/VideoPlayer";
import { WeeklyContent as WeeklyContentType } from "@/types/department";

interface WeeklyContentProps {
  content: WeeklyContentType;
  weekNumber: number;
}

export function WeeklyContent({ content, weekNumber }: WeeklyContentProps) {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-2xl font-bold text-foreground">
          Week {weekNumber}: {content.title}
        </h3>
        <Button variant="ghost" className="text-sur-orange hover:bg-sur-orange/10">
          View all weeks <ChevronRight className="ml-1 w-4 h-4" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {content.lessons.map((lesson, lessonIndex) => (
          <Card key={lessonIndex} className="overflow-hidden border-border hover:shadow-md transition-shadow">
            {lesson.type === 'apos;video'apos; && (
              <div className="aspect-video">
                <VideoPlayer 
                  videoId={lesson.videoId} 
                  title={lesson.title} 
                />
              </div>
            )}
            
            <CardHeader className="p-4">
              <div className="flex items-center justify-between mb-2">
                <Badge variant="outline" className="text-xs">
                  {lesson.type === 'apos;video'apos; ? 'apos;Video'apos; : 'apos;Reading'apos;}
                </Badge>
                <span className="text-xs text-muted-foreground">{lesson.duration}</span>
              </div>
              <CardTitle className="text-lg">{lesson.title}</CardTitle>
              <p className="text-sm text-muted-foreground">By {lesson.creator}</p>
            </CardHeader>
            
            <CardContent className="p-4 pt-0">
              <Button variant="outline" size="sm" className="w-full" asChild>
                <a 
                  href={lesson.videoUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center"
                >
                  {lesson.type === 'apos;video'apos; ? (
                    <>
                      <Play className="w-4 h-4 mr-2" />
                      Watch Now
                    </>
                  ) : (
                    <>
                      <FileText className="w-4 h-4 mr-2" />
                      Read Article
                    </>
                  )}
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {(content.practice || content.assignment) && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {content.practice && (
            <Card className="border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <Headphones className="w-5 h-5 mr-2 text-sur-orange" />
                  Practice Exercise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{content.practice}</p>
              </CardContent>
            </Card>
          )}

          {content.assignment && (
            <Card className="border-border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg flex items-center">
                  <FileText className="w-5 h-5 mr-2 text-sur-orange" />
                  Weekly Assignment
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{content.assignment}</p>
                <Button variant="outline" size="sm" className="mt-4">
                  Submit Assignment
                </Button>
              </CardContent>
            </Card>
          )}
        </div>
      )}
    </div>
  );
}
