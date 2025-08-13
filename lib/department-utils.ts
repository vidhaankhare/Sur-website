import { Department, DepartmentData } from "@/types/department";

/**
 * Get a department by its ID
 * @param departmentId - The ID of the department to retrieve
 * @param data - The department data object
 * @returns The department object or undefined if not found
 */
export function getDepartmentById(
  departmentId: string,
  data: DepartmentData
): Department | undefined {
  return data[departmentId as keyof typeof data];
}

/**
 * Get all department IDs for generating static paths
 * @param data - The department data object
 * @returns Array of department IDs as strings
 */
export function getAllDepartmentIds(data: DepartmentData): string[] {
  return Object.keys(data);
}

/**
 * Format student count for display
 * @param count - The number of students
 * @returns Formatted string (e.g., "1.2K" or "12.5K")
 */
export function formatStudentCount(count: number): string {
  if (count >= 1000000) {
    return `${(count / 1000000).toFixed(1)}M`;
  }
  if (count >= 1000) {
    return `${(count / 1000).toFixed(1)}K`;
  }
  return count.toString();
}

/**
 * Get the first available roadmap from a department
 * @param department - The department object
 * @returns The first roadmap or undefined if none exist
 */
export function getFirstRoadmap(department: Department) {
  return department.roadmaps.length > 0 ? department.roadmaps[0] : undefined;
}

/**
 * Get the first week's content from a roadmap
 * @param roadmap - The roadmap object
 * @returns The first week's content or undefined if none exist
 */
export function getFirstWeekContent(roadmap: any) {
  return roadmap.weeklyContent && roadmap.weeklyContent.length > 0 
    ? roadmap.weeklyContent[0] 
    : undefined;
}

/**
 * Get a random color class for department cards
 * @returns A Tailwind CSS color class
 */
export function getRandomColorClass() {
  const colors = [
    'bg-blue-100 text-blue-800',
    'bg-green-100 text-green-800',
    'bg-purple-100 text-purple-800',
    'bg-pink-100 text-pink-800',
    'bg-indigo-100 text-indigo-800',
    'bg-yellow-100 text-yellow-800',
  ];
  return colors[Math.floor(Math.random() * colors.length)];
}
