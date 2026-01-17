import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Download, Share2, Trash2, RotateCcw } from "lucide-react";
import { GeneratedVideo } from "@/types/video";
import { toast } from "@/hooks/use-toast";

interface VideoPreviewProps {
  video: GeneratedVideo;
  onDelete: (id: string) => void;
  onNewVideo: () => void;
}

export const VideoPreview = ({ video, onDelete, onNewVideo }: VideoPreviewProps) => {
  const handleDownload = async () => {
    if (video.videoUrl) {
      try {
        const response = await fetch(video.videoUrl);
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `otto-ai-${video.id}.mp4`;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
        
        toast({
          title: "Download started",
          description: "Your video is being downloaded.",
        });
      } catch (error) {
        toast({
          title: "Download failed",
          description: "Could not download the video. Please try again.",
          variant: "destructive",
        });
      }
    }
  };

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Check out my Otto AI video!",
          text: video.prompt,
          url: window.location.href,
        });
      } catch (error) {
        // User cancelled or share failed
        console.log("Share cancelled");
      }
    } else {
      // Fallback: copy link to clipboard
      await navigator.clipboard.writeText(window.location.href);
      toast({
        title: "Link copied!",
        description: "Share link has been copied to your clipboard.",
      });
    }
  };

  const aspectRatioClass = {
    "9:16": "aspect-[9/16] max-w-[300px]",
    "1:1": "aspect-square max-w-[400px]",
    "16:9": "aspect-video max-w-[600px]",
  }[video.settings.aspectRatio];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card rounded-2xl p-6 space-y-6"
    >
      {/* Video Player */}
      <div className={`mx-auto ${aspectRatioClass} rounded-xl overflow-hidden bg-muted relative`}>
        {video.videoUrl ? (
          <video
            src={video.videoUrl}
            controls
            autoPlay
            loop
            playsInline
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center text-muted-foreground">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2" />
              <p>Processing video...</p>
            </div>
          </div>
        )}
      </div>

      {/* Video Info */}
      <div className="space-y-2">
        <h3 className="font-display text-lg font-semibold line-clamp-2">
          {video.prompt}
        </h3>
        <div className="flex flex-wrap gap-2">
          <span className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground capitalize">
            {video.settings.style}
          </span>
          <span className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground capitalize">
            {video.settings.mood}
          </span>
          <span className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
            {video.settings.aspectRatio}
          </span>
          <span className="px-2 py-1 text-xs rounded-full bg-muted text-muted-foreground">
            {video.settings.duration}s
          </span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-wrap gap-3">
        <Button variant="neon" onClick={handleDownload} className="flex-1">
          <Download className="w-4 h-4 mr-2" />
          Download
        </Button>
        <Button variant="glass" onClick={handleShare}>
          <Share2 className="w-4 h-4" />
        </Button>
        <Button variant="glass" onClick={() => onDelete(video.id)}>
          <Trash2 className="w-4 h-4" />
        </Button>
      </div>

      <Button variant="outline" onClick={onNewVideo} className="w-full">
        <RotateCcw className="w-4 h-4 mr-2" />
        Create New Video
      </Button>
    </motion.div>
  );
};
