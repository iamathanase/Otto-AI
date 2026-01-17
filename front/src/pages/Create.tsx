import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PromptEditor } from "@/components/PromptEditor";
import { GenerationProgress } from "@/components/GenerationProgress";
import { VideoPreview } from "@/components/VideoPreview";
import { useVideoGeneration } from "@/hooks/useVideoGeneration";
import { VideoSettings } from "@/types/video";

const Create = () => {
  const { isGenerating, currentVideo, progress, generateVideo, deleteVideo, setCurrentVideo } = useVideoGeneration();
  const [lastPrompt, setLastPrompt] = useState("");

  const handleGenerate = (prompt: string, settings: VideoSettings) => {
    setLastPrompt(prompt);
    generateVideo(prompt, settings);
  };

  const handleNewVideo = () => {
    setCurrentVideo(null);
  };

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
              Create your video
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
              Describe what you want to see. We'll handle the rest.
            </p>
          </motion.div>

          {/* Main Content */}
          <div className="max-w-4xl mx-auto">
            {!isGenerating && !currentVideo && (
              <PromptEditor onGenerate={handleGenerate} isGenerating={isGenerating} />
            )}

            {isGenerating && (
              <GenerationProgress progress={progress} prompt={lastPrompt} />
            )}

            {currentVideo && currentVideo.status === "completed" && (
              <VideoPreview
                video={currentVideo}
                onDelete={deleteVideo}
                onNewVideo={handleNewVideo}
              />
            )}
          </div>

          {/* Tips */}
          {!isGenerating && !currentVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="max-w-4xl mx-auto mt-16"
            >
              <h3 className="text-lg font-semibold mb-6 text-center text-foreground">
                Tips for better videos
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    title: "Be specific",
                    tip: "Include details about colors, lighting, and mood.",
                  },
                  {
                    title: "Set the scene",
                    tip: "Describe the location, time of day, and weather.",
                  },
                  {
                    title: "Add movement",
                    tip: "Mention what's happening or how the camera moves.",
                  },
                ].map((item) => (
                  <div key={item.title} className="bg-card rounded-lg p-6 border border-border">
                    <h4 className="font-medium mb-2 text-foreground">{item.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.tip}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Create;
