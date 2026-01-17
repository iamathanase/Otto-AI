import { motion } from "framer-motion";
import { Play } from "lucide-react";

const demoVideos = [
  {
    prompt: "A sunset over calm ocean waves",
    thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=400&h=300&fit=crop",
  },
  {
    prompt: "City lights at night",
    thumbnail: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&h=300&fit=crop",
  },
  {
    prompt: "A forest path in autumn",
    thumbnail: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=400&h=300&fit=crop",
  },
  {
    prompt: "Coffee being poured into a cup",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop",
  },
];

export const ShowcaseSection = () => {
  return (
    <section className="py-24">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 max-w-2xl mx-auto"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-4 text-foreground">
            Made by real people
          </h2>
          <p className="text-xl text-muted-foreground">
            Here's what others have created with Otto.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {demoVideos.map((video, index) => (
            <motion.div
              key={video.prompt}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card rounded-lg overflow-hidden border border-border group cursor-pointer hover:shadow-md transition-shadow"
            >
              <div className="aspect-video relative">
                <img
                  src={video.thumbnail}
                  alt={video.prompt}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-background/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                    <Play className="w-5 h-5 text-primary-foreground ml-0.5" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <p className="text-sm text-muted-foreground">{video.prompt}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
