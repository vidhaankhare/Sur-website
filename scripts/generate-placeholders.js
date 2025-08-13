const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

// Create images directory if it doesn't exist
const imagesDir = path.join(__dirname, '..', 'public', 'images');
if (!fs.existsSync(imagesDir)) {
  fs.mkdirSync(imagesDir, { recursive: true });
}

// Department images to create
const departments = [
  { name: 'piano-hero', text: 'Piano & Keyboard' },
  { name: 'guitar-hero', text: 'Guitar' },
  { name: 'vocal-hero', text: 'Vocal' },
  { name: 'drums-hero', text: 'Percussion' },
  { name: 'violin-hero', text: 'Strings' },
  { name: 'flute-hero', text: 'Winds' },
  { name: 'theory-hero', text: 'Music Theory' },
  { name: 'composition-hero', text: 'Composition' },
];

// Generate placeholder images
departments.forEach(dept => {
  const width = 800;
  const height = 400;
  const canvas = createCanvas(width, height);
  const context = canvas.getContext('2d');

  // Background color
  context.fillStyle = '#f3f4f6';
  context.fillRect(0, 0, width, height);

  // Text
  context.fillStyle = '#111827';
  context.font = 'bold 40px Arial';
  context.textAlign = 'center';
  context.textBaseline = 'middle';
  context.fillText(dept.text, width / 2, height / 2);

  // Border
  context.strokeStyle = '#d1d5db';
  context.lineWidth = 2;
  context.strokeRect(0, 0, width, height);

  // Save to file
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync(path.join(imagesDir, `${dept.name}.png`), buffer);
});

console.log('Generated placeholder images in', imagesDir);
