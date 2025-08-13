const fs = require('fs');
const path = require('path');

// Files to process
const filesToProcess = [
  'app/about/page.tsx',
  'app/course/[id]/page.tsx',
  'app/departments/page.tsx',
  'app/departments/[id]/page.new.tsx',
  'app/departments/[id]/page.tsx',
  'app/learn/[courseId]/[weekId]/[lessonId]/page.tsx',
  'app/library/page.tsx',
  'app/page.tsx',
  'components/departments/DepartmentHero.tsx',
  'components/departments/RoadmapCard.tsx',
  'components/departments/WeeklyContent.tsx',
  'components/youtube-embed.tsx'
];

// Fix common issues in a file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // 1. Fix unescaped single quotes in JSX text
    content = content.replace(/(<[^>]*>)([^<]*)'([^<]*)(<\/[^>]*>)/g, 
      (match, p1, p2, p3, p4) => {
        return `${p1}${p2}${p2.includes('http') ? "'" : '&apos;'}${p3}${p3.includes('http') ? "'" : '&apos;'}${p4}`;
      }
    );
    
    // 2. Fix single quotes in import/export statements
    content = content.replace(/from\s+'(.*?)'/g, 'from "$1"');
    content = content.replace(/import\s+'(.*?)'/g, 'import "$1"');
    
    // 3. Fix <img> tags to use Next.js Image component
    content = content.replace(
      /<img([^>]*)src=(["'])(.*?)\2([^>]*)>/g,
      (match, p1, p2, p3, p4) => {
        // Skip if already using Image component
        if (match.includes('Image')) return match;
        
        // Get width and height if they exist
        const widthMatch = p4.match(/width=["']?(\d+)["']?/);
        const heightMatch = p4.match(/height=["']?(\d+)["']?/);
        const altMatch = p4.match(/alt=(["'])(.*?)\1/) || ['', '', ''];
        
        const width = widthMatch ? widthMatch[1] : '500';
        const height = heightMatch ? heightMatch[1] : '300';
        const alt = altMatch[2] || 'Image';
        
        return `import Image from 'next/image';\n\n<Image 
  src="${p3}" 
  width={${width}} 
  height={${height}} 
  alt="${alt}" 
  className="${p4.match(/class=["'](.*?)["']/)?.[1] || ''}"
  ${p4.replace(/class=["'].*?["']/g, '')}
/>`;
      }
    );
    
    // 4. Fix <a> tags to use Next.js Link component for internal links
    content = content.replace(
      /<a\s+([^>]*)href=(["'])(?!https?:\/\/)([^"']+)\2([^>]*)>/g,
      (match, p1, p2, p3, p4) => {
        return `import Link from 'next/link';\n\n<Link href="${p3}" ${p1}${p4}>`;
      }
    );
    
    // 5. Add missing imports
    if (content.includes('<Play ') && !content.includes("import { Play }")) {
      content = content.replace(
        /import\s+\{([^}]*)\}\s+from\s+['"]lucide-react['"]/,
        `import { $1, Play } from 'lucide-react'`
      );
    }
    
    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Fixed issues in ${filePath}`);
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error);
  }
}

// Process all files
filesToProcess.forEach(file => {
  const fullPath = path.join(process.cwd(), file);
  if (fs.existsSync(fullPath)) {
    fixFile(fullPath);
  } else {
    console.log(`Skipping non-existent file: ${fullPath}`);
  }
});

console.log('All files processed. Please review the changes and run the build again.');
