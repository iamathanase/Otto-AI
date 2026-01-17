import { motion } from "framer-motion";
import { Play, Download, Trash2 } from "lucide-react";
import { GeneratedVideo } from "@/types/video";
import { formatDistanceToNow } from "date-fns";
import { useRef } from "react";

interface VideoCardProps {
  video: GeneratedVideo;
  onSelect: (video: GeneratedVideo) => void;
  onDelete: (id: string) => void;
}

export const VideoCard = ({ video, onSelect, onDelete }: VideoCardProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const aspectRatioClass = {
    "9:16": "aspect-[9/16]",
    "1:1": "aspect-square",
    "16:9": "aspect-video",
  }[video.settings.aspectRatio];

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay might be blocked, ignore error
      });
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      className="glass-card rounded-xl overflow-hidden group cursor-pointer"
      onClick={() => onSelect(video)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className={`${aspectRatioClass} bg-muted relative overflow-hidden`}>
        {video.videoUrl ? (
          <video
            ref={videoRef}
            src={video.videoUrl}
            muted
            playsInline
            loop
            preload="metadata"
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-neon-cyan/10 to-neon-purple/10">
            <Play className="w-8 h-8 text-muted-foreground/50" />
          </div>
        )}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-0 left-0 right-0 p-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-foreground">
              <Play className="w-5 h-5" />
              <span className="text-sm font-medium">{video.settings.duration}s</span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (video.videoUrl) {
                    const link = document.createElement("a");
                    link.href = video.videoUrl;
                    link.download = `otto-ai-${video.id}.mp4`;
                    link.click();
                  }
                }}
                className="p-2 rounded-lg bg-background/50 hover:bg-background/70 transition-colors"
              >
                <Download className="w-4 h-4" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onDelete(video.id);
                }}
                className="p-2 rounded-lg bg-background/50 hover:bg-destructive/70 transition-colors"
              >
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Play Icon Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="w-14 h-14 rounded-full bg-primary/80 flex items-center justify-center backdrop-blur-sm">
            <Play className="w-6 h-6 text-primary-foreground ml-1" />
          </div>
        </div>

        {/* Status Badge */}
        {video.status === "generating" && (
          <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-primary/20 text-primary text-xs font-medium flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Generating...
          </div>
        )}
      </div>
      
      <div className="p-4 space-y-2">
        <p className="text-sm line-clamp-2 font-medium">{video.prompt}</p>
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <span className="capitalize">{video.settings.style}</span>
          <span>{formatDistanceToNow(video.createdAt, { addSuffix: true })}</span>
        </div>
      </div>
    </motion.div>
  );
};
