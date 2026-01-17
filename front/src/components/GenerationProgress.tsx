import { motion } from "framer-motion";
import { Loader2 } from "lucide-react";

interface GenerationProgressProps {
  progress: number;
  prompt: string;
}

export const GenerationProgress = ({ progress, prompt }: GenerationProgressProps) => {
  const stages = [
    { threshold: 0, label: "Analyzing prompt..." },
    { threshold: 20, label: "Initializing AI model..." },
    { threshold: 40, label: "Generating frames..." },
    { threshold: 60, label: "Adding motion..." },
    { threshold: 80, label: "Rendering video..." },
    { threshold: 95, label: "Finalizing..." },
  ];

  const currentStage = stages.filter((s) => progress >= s.threshold).pop();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className="glass-card rounded-2xl p-8 text-center"
    >
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-32 h-32">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              className="stroke-muted fill-none"
              strokeWidth="8"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              className="stroke-primary fill-none"
              strokeWidth="8"
              strokeLinecap="round"
              strokeDasharray={`${progress * 2.83} 283`}
              style={{ transition: "stroke-dasharray 0.3s ease" }}
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold gradient-text">
              {Math.round(progress)}%
            </span>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-center gap-2">
            <Loader2 className="w-4 h-4 animate-spin text-primary" />
            <span className="font-medium">{currentStage?.label}</span>
          </div>
          <p className="text-sm text-muted-foreground max-w-md line-clamp-2">
            "{prompt}"
          </p>
        </div>

        <div className="w-full max-w-md">
          <div className="h-2 rounded-full bg-muted overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-neon-cyan to-neon-purple"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>
      </div>
    </motion.div>
  );
};
