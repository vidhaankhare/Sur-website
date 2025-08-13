# Department Components

This directory contains reusable components for the department pages of the SUR Music Academy website. These components are designed to be modular, accessible, and easy to maintain.

## Components

### DepartmentHero
Displays the hero section for a department, including the department name, description, stats, and a call-to-action.

**Props:**
- `department`: The department object containing name, description, image, etc.

### RoadmapCard
Displays information about a learning path/roadmap, including title, description, duration, and key metrics.

**Props:**
- `roadmap`: The roadmap object containing course information
- `index`: The index of the roadmap in the list (used for numbering)
- `departmentId`: The ID of the department this roadmap belongs to

### WeeklyContent
Displays the content for a specific week in a roadmap, including lessons, practice exercises, and assignments.

**Props:**
- `content`: The weekly content object
- `weekNumber`: The week number being displayed

## Hooks

### useDepartment
A custom hook that manages the state and logic for department pages.

**Returns:**
- `activeRoadmap`: Currently selected roadmap
- `activeWeek`: Currently selected week
- `currentWeekContent`: Content for the current week
- `progress`: Course progress percentage
- Various handler functions

## Utils

### department-utils.ts
Utility functions for working with department data.

**Key Functions:**
- `getDepartmentById`: Retrieves a department by its ID
- `getAllDepartmentIds`: Gets all department IDs for static generation
- `formatStudentCount`: Formats student count for display
- `getFirstRoadmap`: Gets the first roadmap from a department
- `getFirstWeekContent`: Gets the first week's content from a roadmap

## Accessibility Features

- All interactive elements are keyboard navigable
- ARIA labels and roles are used appropriately
- Focus management for modals and dialogs
- Semantic HTML structure
- Responsive design for all screen sizes

## Usage Example

```tsx
import { DepartmentHero, RoadmapCard, WeeklyContent } from '@/components/departments';
import { useDepartment } from '@/hooks/useDepartment';
import { getDepartmentById } from '@/lib/department-utils';

function DepartmentPage({ departmentId }) {
  const department = getDepartmentById(departmentId, departmentData);
  const {
    activeRoadmap,
    activeWeek,
    currentWeekContent,
    progress,
    selectRoadmap,
    selectWeek
  } = useDepartment({ department });

  if (!department) {
    return <div>Department not found</div>;
  }

  return (
    <div>
      <DepartmentHero department={department} />
      
      {activeRoadmap && (
        <RoadmapCard 
          roadmap={activeRoadmap} 
          index={0} 
          departmentId={departmentId} 
        />
      )}
      
      {currentWeekContent && (
        <WeeklyContent 
          content={currentWeekContent} 
          weekNumber={activeWeek} 
        />
      )}
    </div>
  );
}
```

## Best Practices

1. Always use the `useDepartment` hook for state management
2. Follow the component composition pattern
3. Keep components small and focused
4. Use TypeScript interfaces for props
5. Write unit tests for complex logic
6. Document all props and functions
7. Follow accessibility guidelines
