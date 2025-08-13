'use client';

import { useState, useRef, useEffect } from 'react';
import { Play, Loader2 } from 'lucide-react';
import { cn } from '@/lib/utils';

// Define thumbnail quality types
type ThumbnailQuality = 'default' | 'mqdefault' | 'hqdefault' | 'sddefault' | 'maxresdefault';

// Define component props interface
interface YouTubeEmbedProps {
  videoId: string;
  title: string;
  className?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1';
  autoPlay?: boolean;
  showTitle?: boolean;
  thumbnailQuality?: ThumbnailQuality;
}

// Main component implementation
export default function YouTubeEmbed({
  videoId,
  title,
  className = '',
  aspectRatio = '16/9',
  autoPlay = false,
  showTitle = true,
  thumbnailQuality = 'hqdefault',
}: YouTubeEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(autoPlay);
  const [isLoading, setIsLoading] = useState(false);
  const [currentThumbnail, setCurrentThumbnail] = useState(thumbnailQuality);
  const playButtonRef = useRef<HTMLButtonElement>(null);
  
  // Generate thumbnail and embed URLs
  const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/${currentThumbnail}.jpg`;
  const embedUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&showinfo=0`;

  // Calculate aspect ratio padding
  const getAspectRatioPadding = (): string => {
    const [width, height] = aspectRatio.split('/').map(Number);
    return `${(height / width) * 100}%`;
  };

  // Handle play button click
  const handlePlay = () => {
    setIsLoaded(true);
    setIsLoading(true);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handlePlay();
    }
  };

  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    const currentSrc = target.src;

    // Try next lower quality thumbnail
    const qualities: ThumbnailQuality[] = ['maxresdefault', 'hqdefault', 'mqdefault', 'default'];
    const currentIndex = qualities.indexOf(currentThumbnail);
    
    if (currentIndex < qualities.length - 1) {
      setCurrentThumbnail(qualities[currentIndex + 1]);
    }
  };

  const handleIframeLoad = () => {
    setIsLoading(false);
    const iframe = document.querySelector(`iframe[title="${title}"]`) as HTMLIFrameElement;
    if (iframe) {
      iframe.focus();
    }
  };

  useEffect(() => {
    if (playButtonRef.current && !isLoaded) {
      playButtonRef.current.focus();
    }
  }, [isLoaded]);

  return (
    <div
      className={cn(
        'relative overflow-hidden bg-black rounded-lg',
        'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sur-orange',
        className
      )}
      style={{
        paddingBottom: getAspectRatioPadding(),
        position: 'relative',
        width: '100%',
        height: 0,
      }}
      aria-label={`YouTube video player for ${title}`}
      role="region"
    >
      {!isLoaded ? (
        <>
          <div className="absolute inset-0 bg-gray-900">
            <img
              src={thumbnailUrl}
              alt={`${title} thumbnail`}
              className="w-full h-full object-cover"
              onError={handleImageError}
            />
          </div>

          <button
            ref={playButtonRef}
            onClick={handlePlay}
            onKeyDown={handleKeyDown}
            className={cn(
              'absolute inset-0 flex items-center justify-center w-full h-full',
              'bg-black/30 hover:bg-black/20 transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-sur-orange',
              'group'
            )}
            aria-label={`Play video: ${title}`}
            aria-haspopup="true"
            aria-expanded={isLoaded}
          >
            <div className="w-16 h-16 md:w-20 md:h-20 bg-sur-orange/90 hover:bg-sur-orange rounded-full flex items-center justify-center group-focus:ring-2 group-focus:ring-white transition-all duration-200 transform hover:scale-110">
              <Play className="w-8 h-8 md:w-10 md:h-10 text-black ml-1" />
            </div>
            <span className="sr-only">Play: {title}</span>
          </button>
        </>
      ) : (
        <>
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black">
              <Loader2 className="w-12 h-12 text-sur-orange animate-spin" />
            </div>
          )}

          <iframe
            src={embedUrl}
            title={title}
            className={cn(
              'absolute top-0 left-0 w-full h-full',
              isLoading ? 'opacity-0' : 'opacity-100',
              'transition-opacity duration-300'
            )}
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            onLoad={handleIframeLoad}
            loading="lazy"
            aria-label={`Embedded YouTube video: ${title}`}
          />
        </>
      )}

      {showTitle && (
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="text-white text-sm font-medium line-clamp-2">{title}</h3>
        </div>
      )}
    </div>
  );
}
