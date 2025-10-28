export interface SoundCloudTrack {
  id: string;
  title: string;
  url: string;
  embedUrl?: string;
  description?: string;
  duration?: string;
  genre?: string;
}

export const soundcloudTracks: SoundCloudTrack[] = [
  {
    id: "melodic-trip-003",
    title: "Melodic Trip 003",
    url: "https://soundcloud.com/idorgham/melodic-trip-003",
    description: "A melodic techno journey through atmospheric soundscapes",
    duration: "60:00",
    genre: "Melodic Techno"
  },
  {
    id: "dynamic-frequencies-001",
    title: "Dynamic Frequencies 001",
    url: "https://soundcloud.com/idorgham/dynamic-frequencies-001",
    description: "Dynamic frequencies that move the dancefloor",
    duration: "45:00",
    genre: "Indie Dance"
  },
  {
    id: "melodic-infusion-001",
    title: "Melodic Infusion 001",
    url: "https://soundcloud.com/idorgham/melodic-infusion-001",
    description: "Melodic infusion of electronic elements",
    duration: "55:00",
    genre: "Melodic Techno"
  }
];

export const getSoundCloudEmbedUrl = (trackUrl: string): string => {
  // Convert SoundCloud track URL to embed URL
  const encodedUrl = encodeURIComponent(trackUrl);
  return `https://w.soundcloud.com/player/?url=${encodedUrl}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`;
};

export const isValidSoundCloudUrl = (url: string): boolean => {
  return url.includes('soundcloud.com') && url.includes('/idorgham/');
};
