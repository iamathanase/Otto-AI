import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { VideoCard } from "@/components/VideoCard";
import { VideoPreview } from "@/components/VideoPreview";
import { useVideoGeneration } from "@/hooks/useVideoGeneration";
import { GeneratedVideo } from "@/types/video";
import { Film, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Gallery = () => {
  const { videos, deleteVideo } = useVideoGeneration();
  const [selectedVideo, setSelectedVideo] = useState<GeneratedVideo | null>(null);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-foreground">
              Your videos
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
              All your videos in one place. Download or delete them anytime.
            </p>
          </motion.div>

          {/* Selected Video Preview */}
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-2xl mx-auto mb-12"
            >
              <VideoPreview
                video={selectedVideo}
                onDelete={(id) => {
                  deleteVideo(id);
                  setSelectedVideo(null);
                }}
                onNewVideo={() => setSelectedVideo(null)}
              />
            </motion.div>
          )}

          {/* Video Grid */}
          {videos.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {videos.map((video, index) => (
                <motion.div
                  key={video.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <VideoCard
                    video={video}
                    onSelect={setSelectedVideo}
                    onDelete={deleteVideo}
                  />
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
                <Film className="w-12 h-12 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-foreground">
                No videos yet
              </h3>
              <p className="text-muted-foreground mb-6">
                Make your first video to see it here.
              </p>
              <Link to="/create">
                <Button size="lg">
                  <Plus className="w-5 h-5 mr-2" />
                  Create your first video
                </Button>
              </Link>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Gallery;
