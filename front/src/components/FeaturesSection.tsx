import { motion } from "framer-motion";
import { 
  MessageSquare, 
  Palette, 
  Smartphone, 
  Clock, 
  Download,
  Heart
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Just describe it",
    description: "Type what you want to see. Otto figures out the rest.",
  },
  {
    icon: Palette,
    title: "Pick your style",
    description: "Realistic, illustrated, cinematic—whatever fits your vision.",
  },
  {
    icon: Smartphone,
    title: "Made for any platform",
    description: "TikTok, Instagram, YouTube. Your video works everywhere.",
  },
  {
    icon: Clock,
    title: "Ready in seconds",
    description: "Most videos are done in under 30 seconds.",
  },
  {
    icon: Download,
    title: "Download and share",
    description: "Get your video as an MP4. Use it however you like.",
  },
  {
    icon: Heart,
    title: "Made by people who care",
    description: "We're a small team building something useful.",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-foreground">
            How it works
          </h2>
          <p className="text-xl text-muted-foreground">
            Everything you need, nothing you don't.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg p-8 border border-border"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-foreground">
                {feature.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
