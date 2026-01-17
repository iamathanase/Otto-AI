import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import { Sparkles, Wand2, Loader2 } from "lucide-react";
import { VideoSettings, defaultSettings, styleOptions, cameraOptions, moodOptions, aspectRatioOptions } from "@/types/video";

interface PromptEditorProps {
  onGenerate: (prompt: string, settings: VideoSettings) => void;
  isGenerating: boolean;
}

const examplePrompts = [
  "A serene sunset over calm ocean waves, golden hour lighting, cinematic feel",
  "A futuristic city at night with neon lights and flying cars",
  "A cute animated fox exploring a magical forest with glowing mushrooms",
  "A dramatic slow-motion shot of coffee being poured into a cup",
];

export const PromptEditor = ({ onGenerate, isGenerating }: PromptEditorProps) => {
  const [prompt, setPrompt] = useState("");
  const [settings, setSettings] = useState<VideoSettings>(defaultSettings);

  const handleGenerate = () => {
    onGenerate(prompt, settings);
  };

  const fillExample = () => {
    const randomPrompt = examplePrompts[Math.floor(Math.random() * examplePrompts.length)];
    setPrompt(randomPrompt);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-card rounded-2xl p-6 space-y-6"
    >
      {/* Prompt Input */}
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <label className="font-display text-lg font-semibold">
            Describe Your Video
          </label>
          <Button
            variant="ghost"
            size="sm"
            onClick={fillExample}
            className="text-primary"
          >
            <Wand2 className="w-4 h-4 mr-2" />
            Try Example
          </Button>
        </div>
        <Textarea
          placeholder="A cinematic shot of a sunset over the ocean, with warm golden light reflecting on calm waves..."
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          className="min-h-[120px] bg-muted/50 border-glass-border resize-none text-base"
        />
      </div>

      {/* Settings Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Style */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Style</label>
          <select
            value={settings.style}
            onChange={(e) => setSettings({ ...settings, style: e.target.value as VideoSettings["style"] })}
            className="w-full h-10 px-3 rounded-lg bg-muted/50 border border-glass-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {styleOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Camera */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Camera</label>
          <select
            value={settings.cameraMotion}
            onChange={(e) => setSettings({ ...settings, cameraMotion: e.target.value as VideoSettings["cameraMotion"] })}
            className="w-full h-10 px-3 rounded-lg bg-muted/50 border border-glass-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {cameraOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Mood */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Mood</label>
          <select
            value={settings.mood}
            onChange={(e) => setSettings({ ...settings, mood: e.target.value as VideoSettings["mood"] })}
            className="w-full h-10 px-3 rounded-lg bg-muted/50 border border-glass-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {moodOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        {/* Aspect Ratio */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">Aspect Ratio</label>
          <select
            value={settings.aspectRatio}
            onChange={(e) => setSettings({ ...settings, aspectRatio: e.target.value as VideoSettings["aspectRatio"] })}
            className="w-full h-10 px-3 rounded-lg bg-muted/50 border border-glass-border text-sm focus:outline-none focus:ring-2 focus:ring-primary"
          >
            {aspectRatioOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label} - {option.description}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Duration Toggle */}
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium text-muted-foreground">Duration:</span>
        <div className="flex gap-2">
          {[5, 10].map((dur) => (
            <button
              key={dur}
              onClick={() => setSettings({ ...settings, duration: dur as 5 | 10 })}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                settings.duration === dur
                  ? "bg-primary text-primary-foreground"
                  : "bg-muted/50 text-muted-foreground hover:bg-muted"
              }`}
            >
              {dur}s
            </button>
          ))}
        </div>
      </div>

      {/* Generate Button */}
      <Button
        variant="neon"
        size="xl"
        className="w-full"
        onClick={handleGenerate}
        disabled={isGenerating || !prompt.trim()}
      >
        {isGenerating ? (
          <>
            <Loader2 className="w-5 h-5 mr-2 animate-spin" />
            Generating...
          </>
        ) : (
          <>
            <Sparkles className="w-5 h-5 mr-2" />
            Generate Video
          </>
        )}
      </Button>
    </motion.div>
  );
};
