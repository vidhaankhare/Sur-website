import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Clock, Play, Users, Star, BookOpen, Award, Eye } from "lucide-react";
import Link from "next/link";
import { Roadmap } from "@/types/department";

interface RoadmapCardProps {
  roadmap: Roadmap;
  index: number;
  departmentId: string;
}

export function RoadmapCard({ roadmap, index, departmentId }: RoadmapCardProps) {
  return (
    <Card className="overflow-hidden border-border hover:shadow-lg hover:shadow-sur-orange/20 transition-all">
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
            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
              <div 
                className="h-full bg-sur-orange transition-all duration-500" 
                style={{ width: 'apos;0%'apos; }}
                role="progressbar"
                aria-valuenow={0}
                aria-valuemin={0}
                aria-valuemax={100}
              />
            </div>
            <div className="text-xs text-muted-foreground text-center mt-1">Not started</div>
          </div>
        </div>
      </div>
    </Card>
  );
}
