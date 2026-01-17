export interface VideoSettings {
  style: "cinematic" | "anime" | "realistic" | "illustration";
  cameraMotion: "static" | "pan" | "zoom" | "handheld" | "drone";
  mood: "dramatic" | "calm" | "futuristic" | "playful" | "dark";
  aspectRatio: "9:16" | "1:1" | "16:9";
  duration: 5 | 10;
}

export interface GeneratedVideo {
  id: string;
  prompt: string;
  settings: VideoSettings;
  videoUrl: string;
  thumbnailUrl?: string;
  createdAt: Date;
  status: "pending" | "generating" | "completed" | "failed";
}

export const defaultSettings: VideoSettings = {
  style: "cinematic",
  cameraMotion: "static",
  mood: "dramatic",
  aspectRatio: "16:9",
  duration: 5,
};

export const styleOptions = [
  { value: "cinematic", label: "Cinematic", description: "Hollywood-style visuals" },
  { value: "anime", label: "Anime", description: "Japanese animation style" },
  { value: "realistic", label: "Realistic", description: "Photorealistic rendering" },
  { value: "illustration", label: "Illustration", description: "Artistic, painterly look" },
] as const;

export const cameraOptions = [
  { value: "static", label: "Static", description: "Fixed camera position" },
  { value: "pan", label: "Pan", description: "Smooth horizontal movement" },
  { value: "zoom", label: "Zoom", description: "Dynamic zoom effect" },
  { value: "handheld", label: "Handheld", description: "Organic, natural feel" },
  { value: "drone", label: "Drone", description: "Aerial perspective" },
] as const;

export const moodOptions = [
  { value: "dramatic", label: "Dramatic", description: "Intense, cinematic feel" },
  { value: "calm", label: "Calm", description: "Peaceful, serene atmosphere" },
  { value: "futuristic", label: "Futuristic", description: "Sci-fi, tech vibes" },
  { value: "playful", label: "Playful", description: "Fun, energetic mood" },
  { value: "dark", label: "Dark", description: "Moody, mysterious tone" },
] as const;

export const aspectRatioOptions = [
  { value: "9:16", label: "9:16", description: "TikTok, Reels, Shorts" },
  { value: "1:1", label: "1:1", description: "Instagram, Square" },
  { value: "16:9", label: "16:9", description: "YouTube, Widescreen" },
] as const;
