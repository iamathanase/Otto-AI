import { useState, useCallback } from "react";
import { GeneratedVideo, VideoSettings, defaultSettings } from "@/types/video";
import { toast } from "@/hooks/use-toast";

const API_BASE_URL = import.meta.env.PROD 
  ? '' // In production, use relative URLs
  : 'http://localhost:8080'; // In development, use Vite dev server

export const useVideoGeneration = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentVideo, setCurrentVideo] = useState<GeneratedVideo | null>(null);
  const [videos, setVideos] = useState<GeneratedVideo[]>([]);
  const [progress, setProgress] = useState(0);

  const generateVideo = useCallback(async (prompt: string, settings: VideoSettings = defaultSettings) => {
    if (!prompt.trim()) {
      toast({
        title: "Prompt required",
        description: "Please enter a description for your video.",
        variant: "destructive",
      });
      return null;
    }

    setIsGenerating(true);
    setProgress(10);

    const newVideo: GeneratedVideo = {
      id: `video-${Date.now()}`,
      prompt,
      settings,
      videoUrl: "",
      createdAt: new Date(),
      status: "generating",
    };

    setCurrentVideo(newVideo);

    // Simulate progress updates
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 90) {
          return prev;
        }
        return prev + 5;
      });
    }, 1000);

    try {
      // Start video generation with FREE Hugging Face API
      const response = await fetch(`${API_BASE_URL}/api/generate-video`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt,
          style: settings.style,
          cameraMotion: settings.cameraMotion,
          mood: settings.mood,
          aspectRatio: settings.aspectRatio,
          duration: settings.duration,
        }),
      });

      const data = await response.json();

      // Handle model loading state
      if (response.status === 202 && data.status === 'loading') {
        clearInterval(progressInterval);
        setProgress(50);
        
        toast({
          title: "Model loading",
          description: "The AI model is warming up. This takes 20-30 seconds on first use. Please try again.",
        });

        // Wait and retry
        await new Promise(resolve => setTimeout(resolve, 30000));
        
        // Retry the request
        const retryResponse = await fetch(`${API_BASE_URL}/api/generate-video`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            prompt,
            style: settings.style,
            cameraMotion: settings.cameraMotion,
            mood: settings.mood,
            aspectRatio: settings.aspectRatio,
            duration: settings.duration,
          }),
        });

        const retryData = await retryResponse.json();
        
        if (!retryResponse.ok) {
          throw new Error(retryData.error || 'Failed to generate video after retry');
        }

        clearInterval(progressInterval);
        setProgress(100);

        const completedVideo: GeneratedVideo = {
          ...newVideo,
          status: "completed",
          videoUrl: retryData.videoUrl || "",
        };

        setCurrentVideo(completedVideo);
        setVideos((prev) => [completedVideo, ...prev]);

        toast({
          title: "Video ready!",
          description: "Your video has been created successfully using FREE API!",
        });

        return completedVideo;
      }

      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate video');
      }

      clearInterval(progressInterval);
      setProgress(100);

      // Create completed video
      const completedVideo: GeneratedVideo = {
        ...newVideo,
        status: "completed",
        videoUrl: data.videoUrl || "",
      };

      setCurrentVideo(completedVideo);
      setVideos((prev) => [completedVideo, ...prev]);

      toast({
        title: "Video ready!",
        description: "Your video has been created successfully using FREE Hugging Face API!",
      });

      return completedVideo;
    } catch (error) {
      clearInterval(progressInterval);
      console.error("Video generation error:", error);
      
      const failedVideo: GeneratedVideo = {
        ...newVideo,
        status: "failed",
      };
      
      setCurrentVideo(failedVideo);
      
      const errorMessage = error instanceof Error ? error.message : "Something went wrong. Please try again.";
      
      toast({
        title: "Generation failed",
        description: errorMessage,
        variant: "destructive",
      });

      return null;
    } finally {
      setIsGenerating(false);
    }
  }, []);

  const deleteVideo = useCallback((id: string) => {
    setVideos((prev) => prev.filter((v) => v.id !== id));
    if (currentVideo?.id === id) {
      setCurrentVideo(null);
    }
    toast({
      title: "Video deleted",
      description: "The video has been removed from your gallery.",
    });
  }, [currentVideo]);

  return {
    isGenerating,
    currentVideo,
    videos,
    progress,
    generateVideo,
    deleteVideo,
    setCurrentVideo,
  };
};
