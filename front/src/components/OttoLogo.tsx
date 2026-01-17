import { motion } from "framer-motion";

interface OttoLogoProps {
  size?: "sm" | "md" | "lg";
  showText?: boolean;
}

const sizeMap = {
  sm: { icon: 40, text: "text-xl" },
  md: { icon: 48, text: "text-2xl" },
  lg: { icon: 64, text: "text-4xl" },
};

export const OttoLogo = ({ size = "md", showText = true }: OttoLogoProps) => {
  const { icon, text } = sizeMap[size];

  return (
    <motion.div 
      className="flex items-center gap-3"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <img 
        src="/ottologo.png" 
        alt="Otto Logo" 
        style={{ width: icon, height: icon }}
        className="object-contain"
      />
      {showText && (
        <div className="flex flex-col">
          <span className={`font-semibold text-foreground ${text}`}>
            Otto
          </span>
        </div>
      )}
    </motion.div>
  );
};
