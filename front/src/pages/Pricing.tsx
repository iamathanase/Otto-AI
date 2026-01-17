import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const plans = [
  {
    name: "Free",
    price: "$0",
    period: "",
    description: "Try it out",
    features: [
      "10 videos per month",
      "5 second videos",
      "720p quality",
      "Watermark included",
      "Basic styles",
    ],
    cta: "Start free",
    variant: "outline" as const,
    popular: false,
  },
  {
    name: "Creator",
    price: "$19",
    period: "/month",
    description: "For regular use",
    features: [
      "100 videos per month",
      "10 second videos",
      "1080p quality",
      "No watermark",
      "All styles",
      "Priority support",
      "Download as MP4",
    ],
    cta: "Get Creator",
    variant: "default" as const,
    popular: true,
  },
  {
    name: "Pro",
    price: "$49",
    period: "/month",
    description: "For professionals",
    features: [
      "Unlimited videos",
      "10 second videos",
      "4K quality",
      "No watermark",
      "All styles",
      "Fastest processing",
      "API access",
      "Custom styles (coming soon)",
    ],
    cta: "Go Pro",
    variant: "outline" as const,
    popular: false,
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-foreground">
              Simple pricing
            </h1>
            <p className="text-xl text-muted-foreground max-w-xl mx-auto">
              Start free. Upgrade when you're ready.
            </p>
          </motion.div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-card rounded-xl p-8 border relative ${
                  plan.popular ? "border-primary shadow-lg" : "border-border"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-xs font-medium text-primary-foreground">
                    Most popular
                  </div>
                )}

                <div className="mb-6">
                  <h3 className="text-2xl font-semibold mb-1 text-foreground">{plan.name}</h3>
                  <div className="flex items-baseline gap-1 mb-2">
                    <span className="text-4xl font-semibold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{plan.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link to="/create">
                  <Button variant={plan.variant} className="w-full">
                    {plan.cta}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center mt-16"
          >
            <p className="text-muted-foreground">
              Questions?{" "}
              <a href="mailto:hello@otto.com" className="text-primary hover:underline">
                Get in touch
              </a>
            </p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Pricing;
