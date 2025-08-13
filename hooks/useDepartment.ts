import { useState, useEffect } from 'react';
import { Department, Roadmap } from '@/types/department';
import { getFirstRoadmap, getFirstWeekContent } from '@/lib/department-utils';

interface UseDepartmentProps {
  department: Department;
  isLoading?: boolean;
  error?: Error | null;
}

export function useDepartment({ department, isLoading = false, error = null }: UseDepartmentProps) {
  const [activeRoadmap, setActiveRoadmap] = useState<Roadmap | null>(null);
  const [activeWeek, setActiveWeek] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  // Set initial roadmap and week when department loads
  useEffect(() => {
    if (department?.roadmaps?.length > 0) {
      const firstRoadmap = getFirstRoadmap(department);
      setActiveRoadmap(firstRoadmap);
      
      if (firstRoadmap?.weeklyContent?.length > 0) {
        setActiveWeek(1);
      }
    }
    setIsMounted(true);
  }, [department]);

  // Handle roadmap selection
  const selectRoadmap = (roadmapId: string) => {
    const roadmap = department.roadmaps.find(r => r.id === roadmapId);
    if (roadmap) {
      setActiveRoadmap(roadmap);
      setActiveWeek(1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Handle week selection
  const selectWeek = (weekNumber: number) => {
    setActiveWeek(weekNumber);
    setIsPlaying(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Toggle play/pause for video content
  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  // Get the current week's content
  const currentWeekContent = activeRoadmap?.weeklyContent?.find(
    week => week.week === activeWeek
  );

  // Calculate progress percentage
  const calculateProgress = () => {
    if (!activeRoadmap?.weeklyContent) return 0;
    
    const totalWeeks = activeRoadmap.weeklyContent.length;
    return Math.min(Math.round(((activeWeek - 1) / totalWeeks) * 100), 100);
  };

  return {
    activeRoadmap,
    activeWeek,
    currentWeekContent,
    isPlaying,
    isMounted,
    isLoading,
    error,
    progress: calculateProgress(),
    selectRoadmap,
    selectWeek,
    togglePlay,
  };
}
