import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Award } from "lucide-react";
import Link from "next/link";
import { Department } from "@/types/department";

interface DepartmentHeroProps {
  department: Department;
}

export function DepartmentHero({ department }: DepartmentHeroProps) {
  const DeptIcon = department.icon;
  
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-sur-orange/10 to-sur-orange/5">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          <div className="lg:col-span-2">
            <div className="flex items-center mb-6">
              <div className="w-20 h-20 bg-sur-orange rounded-full flex items-center justify-center mr-6">
                <DeptIcon className="w-10 h-10 text-black" />
              </div>
              <div>
                <h1 className="text-4xl font-bold text-foreground mb-2">{department.name}</h1>
                <p className="text-muted-foreground">Curated by SUR Experts</p>
              </div>
            </div>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              {department.description}
            </p>

            <div className="grid grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-sur-orange mb-1">
                  {department.totalStudents.toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground">Active Students</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-sur-orange mb-1">
                  {department.avgRating}
                </div>
                <div className="text-sm text-muted-foreground">Average Rating</div>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <div className="text-3xl font-bold text-sur-orange mb-1">
                  {department.roadmaps.length}
                </div>
                <div className="text-sm text-muted-foreground">Learning Paths</div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="aspect-video rounded-lg overflow-hidden border border-border mb-6">
              <img 
                src={department.image || "/placeholder.svg"} 
                alt={department.name} 
                className="w-full h-full object-cover"
              />
            </div>

            <Card className="border-border">
              <CardHeader className="text-center">
                <CardTitle className="text-xl text-foreground">Start Learning Today</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Join thousands of students in our {department.name.toLowerCase()}
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
  );
}
