import { LucideIcon } from "lucide-react";

export interface VideoLesson {
  title: string;
  creator: string;
  duration: string;
  type: 'video' | 'text' | 'quiz';
  videoId: string;
  videoUrl: string;
}

export interface WeekContent {
  week: number;
  title: string;
  lessons: VideoLesson[];
  practice: string;
  assignment: string;
}

export interface Roadmap {
  id: string;
  title: string;
  level: string;
  duration: string;
  lessons: number;
  students: number;
  rating: number;
  description: string;
  prerequisites: string;
  outcomes: string[];
  weeklyContent: WeekContent[];
  totalResources: number;
  videoLessons: number;
  practiceExercises: number;
  assessments: number;
}

export interface Department {
  name: string;
  icon: LucideIcon;
  description: string;
  image: string;
  totalStudents: number;
  avgRating: number;
  roadmaps: Roadmap[];
}

export interface DepartmentData {
  [key: string]: Department;
}
