'use client';

import { useState, useEffect } from 'react';
import { SoundCloudTrack, getSoundCloudEmbedUrl, isValidSoundCloudUrl } from '@/config/soundcloud';
import LoadingSpinner from './animations/LoadingSpinner';

interface SoundCloudEmbedProps {
  track: SoundCloudTrack;
  className?: string;
}

export default function SoundCloudEmbed({ track, className = "" }: SoundCloudEmbedProps) {
  const [embedError, setEmbedError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if the track URL is valid
    if (!isValidSoundCloudUrl(track.url)) {
      setEmbedError(true);
      setIsLoading(false);
      return;
    }

    // Set a timeout to detect if embed fails to load
    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timeout);
  }, [track.url]);

  const handleEmbedLoad = () => {
    setIsLoading(false);
  };

  const handleEmbedError = () => {
    setEmbedError(true);
    setIsLoading(false);
  };

  if (embedError) {
    return (
      <div className={`bg-gray-600 rounded-lg flex flex-col items-center justify-center p-8 text-center ${className}`}>
        <div className="text-gray-300 mb-4">
          <svg className="w-16 h-16 mx-auto mb-4" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-white mb-2">{track.title}</h3>
        <p className="text-gray-300 mb-4">{track.description}</p>
        <div className="flex items-center text-gray-400 mb-6">
          <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <span className="text-sm">SOUNDCLOUD</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      {isLoading && (
        <div className="absolute inset-0 bg-gray-600 rounded-lg flex items-center justify-center">
          <div className="text-white text-center">
            <LoadingSpinner size="lg" className="mb-2" />
            <p className="text-sm">Loading track...</p>
          </div>
        </div>
      )}
      <iframe
        width="100%"
        height="100%"
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        title={`${track.title} - SoundCloud Player`}
        src={getSoundCloudEmbedUrl(track.url)}
        className="rounded-lg min-h-[300px]"
        onLoad={handleEmbedLoad}
        onError={handleEmbedError}
      />
    </div>
  );
}
