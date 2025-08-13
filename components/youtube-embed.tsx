'use client';

import { useEffect, useState, useRef, KeyboardEvent } from 'react';
import Image from 'next/image';
import { Play, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  className?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1';
  autoPlay?: boolean;
  showTitle?: boolean;
}

export function YouTubeEmbed({ 
  videoId, 
  title, 
  className, 
  aspectRatio = '16/9',
  autoPlay = false,
  showTitle = true
}: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const playButtonRef = useRef<HTMLButtonElement>(null);
  
  // Calculate aspect ratio padding
  const getAspectRatioPadding = () => {
    switch (aspectRatio) {
      case '16/9': return '56.25%';
      case '4/3': return '75%';
      case '1/1': return '100%';
      default: return '56.25%';
    }
  };

  // Handle click to load the actual iframe
  const handlePlay = () => {
    setIsLoaded(true);
  };

  // Handle keyboard events for accessibility
  const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handlePlay();
    }
  };

  // Handle iframe load
  const handleIframeLoad = () => {
    setIsLoading(false);
    // Move focus to the iframe for keyboard users
    const iframe = document.querySelector(`iframe[title="${title}"]`) as HTMLIFrameElement;
    if (iframe) {
      iframe.focus();
    }
  };

  // Auto-focus the play button when component mounts
  useEffect(() => {
    if (playButtonRef.current && !isLoaded) {
      playButtonRef.current.focus();
    }
  }, []);

  return (
    <div 
      className={cn(
        'relative w-full overflow-hidden bg-black/5 rounded-lg',
        'focus:outline-none focus-visible:ring-2 focus-visible:ring-sur-orange focus-visible:ring-offset-2',
        className
      )}
      style={{
        position: 'relative',
        paddingBottom: getAspectRatioPadding(),
        height: 0,
      }}
      role="region"
      aria-label={`Video: ${title}`}
    >
      {!isLoaded ? (
        <button
          ref={playButtonRef}
          onClick={handlePlay}
          onKeyDown={handleKeyDown}
          className="absolute inset-0 w-full h-full flex items-center justify-center group focus:outline-none"
          aria-label={`Play video: ${title}`}
          aria-haspopup="true"
          aria-expanded={isLoaded}
        >
          <div className="relative w-full h-full">
            <Image
              src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
              alt=""
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
              priority={false}
              aria-hidden="true"
            />
            <div 
              className="absolute inset-0 bg-black/30 group-hover:bg-black/20 group-focus:ring-2 group-focus:ring-sur-orange transition-all duration-200"
              aria-hidden="true"
            />
          </div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div 
              className="w-16 h-16 md:w-20 md:h-20 bg-red-600 rounded-full flex items-center justify-center transform transition-transform group-hover:scale-110 group-focus:scale-110"
              aria-hidden="true"
            >
              <Play className="w-6 h-6 md:w-8 md:h-8 text-white ml-1" />
            </div>
            <span className="sr-only">Play video: {title}</span>
          </div>
        </button>
      ) : (
        <>
          <iframe
            src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1${autoPlay ? '&autoplay=1' : ''}`}
            title={`Video: ${title}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full focus:outline-none focus-visible:ring-2 focus-visible:ring-sur-orange"
            loading="lazy"
            onLoad={handleIframeLoad}
            tabIndex={0}
            aria-label={`YouTube video player for ${title}`}
            aria-modal="true"
          />
          {showTitle && (
            <div className="sr-only">
              <h3>Now playing: {title}</h3>
            </div>
          )}
        </>
      )}
      
      {isLoading && isLoaded && (
        <div 
          className="absolute inset-0 flex items-center justify-center bg-black/5"
          role="status"
          aria-label="Loading video"
        >
          <Loader2 className="w-12 h-12 text-sur-orange animate-spin" />
          <span className="sr-only">Loading video...</span>
        </div>
      )}
    </div>
  );
}
