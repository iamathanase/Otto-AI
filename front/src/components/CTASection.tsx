import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export const CTASection = () => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-card rounded-2xl p-12 md:p-16 text-center max-w-3xl mx-auto border border-border"
        >
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 text-foreground">
            Ready to make your first video?
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-xl mx-auto mb-10">
            Start for free. No credit card needed.
          </p>
          
          <Link to="/create">
            <Button size="lg" className="group text-base px-8 py-6">
              Get started
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
