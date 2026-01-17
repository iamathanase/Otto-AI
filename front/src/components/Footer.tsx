import { OttoLogo } from "./OttoLogo";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="py-12 border-t border-border bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <OttoLogo size="sm" />
          
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link to="/gallery" className="hover:text-foreground transition-colors">
              Examples
            </Link>
            <Link to="/pricing" className="hover:text-foreground transition-colors">
              Pricing
            </Link>
            <a href="mailto:hello@otto.com" className="hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
          
          <p className="text-sm text-muted-foreground">
            © 2024 Otto
          </p>
        </div>
      </div>
    </footer>
  );
};
