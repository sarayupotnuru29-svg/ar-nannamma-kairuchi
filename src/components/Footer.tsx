import { Link } from "react-router-dom";
import { Facebook, Instagram, ArrowUp } from "lucide-react";
import logo from "@/assets/Ar_logo.jpeg";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="AR Logo" className="h-10 w-10 rounded-full object-cover" />
              <span className="font-display text-lg font-bold">AR – Nannamma Kairuchi</span>
            </div>
            <p className="text-primary-foreground/70 text-sm">From Amma's Kitchen – Healthy & Tasty</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-accent">Quick Links</h4>
            <div className="space-y-2">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About Us" },
                { to: "/menu", label: "Menu" },
                { to: "/contact", label: "Contact" },
                { to: "/cart", label: "Cart" },
              ].map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={scrollToTop}
                  className="block text-primary-foreground/70 hover:text-accent transition-colors text-sm"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-accent">Categories</h4>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <p>Protein Powders</p>
              <p>Healthy Laddus</p>
              <p>Chatni Powders</p>
              <p>Spicy Masalas</p>
              <p>Healthy Malts</p>
              <p>Multigrain Flours</p>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-accent">Contact</h4>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <p>📞 8660124965</p>
              <p>✉️ nannamakairuchi@gmail.com</p>
              <p>#513 63rd Cross, 5th Block Rajajinagar, Bangalore – 560010</p>
              <div className="flex gap-3 mt-4">
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors"><Instagram size={20} /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-primary-foreground/50">© 2025 AR – Nannamma Kairuchi. All rights reserved.</p>
          <button onClick={scrollToTop} className="mt-4 sm:mt-0 bg-accent text-accent-foreground p-2 rounded-full hover:opacity-90 transition-opacity">
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
