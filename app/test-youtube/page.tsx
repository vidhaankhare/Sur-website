'use client';

import YouTubeEmbed from '@/components/youtube-embed';

export default function TestYouTubePage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">YouTube Embed Test</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Test with a valid YouTube video ID */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Test Video 1</h2>
          <YouTubeEmbed 
            videoId="dQw4w9WgXcQ" 
            title="Test Video 1"
            className="mb-4"
          />
        </div>

        {/* Test with another valid YouTube video ID */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Test Video 2</h2>
          <YouTubeEmbed 
            videoId="9bZkp7q19f0" 
            title="Test Video 2"
            className="mb-4"
          />
        </div>

        {/* Test with autoPlay */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Autoplay Test</h2>
          <YouTubeEmbed 
            videoId="dQw4w9WgXcQ" 
            title="Autoplay Test"
            autoPlay={true}
            className="mb-4"
          />
        </div>

        {/* Test with different aspect ratio */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Square Aspect Ratio</h2>
          <YouTubeEmbed 
            videoId="dQw4w9WgXcQ" 
            title="Square Aspect Ratio"
            aspectRatio="1/1"
            className="mb-4"
          />
        </div>
      </div>
    </div>
  );
}
