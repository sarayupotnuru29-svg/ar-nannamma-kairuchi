// import { Link } from "react-router-dom";
// import { Facebook, Instagram, ArrowUp, Heart } from "lucide-react";
// import logo from "@/assets/Ar_logo.jpeg";

// const Footer = () => {
//   const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

//   return (
//     <footer className="bg-primary text-primary-foreground">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           {/* Brand */}
//           <div>
//             <div className="flex items-center gap-3 mb-4">
//               <img src={logo} alt="AR Logo" className="h-10 w-10 rounded-full object-cover" />
//               <span className="font-display text-lg font-bold">AR – Nannamma Kairuchi</span>
//             </div>
//             <p className="text-primary-foreground/70 text-sm">From Amma's Kitchen – Healthy & Tasty</p>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="font-display text-lg font-semibold mb-4 text-accent">Quick Links</h4>
//             <div className="space-y-2">
//               {[
//                 { to: "/", label: "Home" },
//                 { to: "/about", label: "About Us" },
//                 { to: "/menu", label: "Menu" },
//                 { to: "/contact", label: "Contact" },
//                 { to: "/cart", label: "Cart" },
//               ].map((link) => (
//                 <Link
//                   key={link.to}
//                   to={link.to}
//                   onClick={scrollToTop}
//                   className="block text-primary-foreground/70 hover:text-accent transition-colors text-sm"
//                 >
//                   {link.label}
//                 </Link>
//               ))}
//             </div>
//           </div>

//           {/* Categories */}
//           <div>
//             <h4 className="font-display text-lg font-semibold mb-4 text-accent">Categories</h4>
//             <div className="space-y-2 text-sm text-primary-foreground/70">
//               {["Protein Powders", "Healthy Laddus", "Chatni Powders", "Spicy Masalas", "Healthy Malts", "Multigrain Flours"].map((cat) => (
//                 <button
//                   key={cat}
//                   onClick={scrollToTop}
//                   className="block text-primary-foreground/70 hover:text-accent transition-colors text-sm text-left"
//                 >
//                   {cat}
//                 </button>
//               ))}
//             </div>
//           </div>

//           {/* Contact */}
//           <div>
//             <h4 className="font-display text-lg font-semibold mb-4 text-accent">Contact</h4>
//             <div className="space-y-2 text-sm text-primary-foreground/70">
//               <p>📞 8660124965</p>
//               <p>✉️ nannamakairuchi@gmail.com</p>
//               <p>#513 63rd Cross, 5th Block Rajajinagar, Bangalore – 560010</p>
//               <div className="flex gap-3 mt-4">
//                 <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors"><Facebook size={20} /></a>
//                 <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors"><Instagram size={20} /></a>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-primary-foreground/20 mt-8 pt-6 flex flex-col items-center justify-between gap-4">
//           <div className="flex flex-col items-center gap-2">
//             <p className="text-sm text-primary-foreground/50 text-center">
//               © 2025 AR – Nannamma Kairuchi. All rights reserved.
//             </p>
            
//             {/* Attribution Section */}
//             <div className="flex justify-center items-center gap-1 text-sm text-primary-foreground/70">
//               Made with <Heart className="inline h-4 w-4 text-red-500 mx-1 fill-red-500" /> by
//               <a
//                 href="https://staffarc.in"
//                 target="_blank"
//                 rel="noopener noreferrer"
//                 className="flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors font-medium hover:underline"
//               >
//                 <img
//                   src="https://www.staffarc.in/images/Staffarc-logo.png"
//                   alt="StaffArc logo"
//                   className="h-5 w-5 object-contain"
//                 />
//                 StaffArc
//               </a>
//             </div>
//           </div>

//           <button 
//             onClick={scrollToTop} 
//             className="bg-accent text-accent-foreground p-2 rounded-full hover:opacity-90 transition-opacity"
//             aria-label="Scroll to top"
//           >
//             <ArrowUp size={20} />
//           </button>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;





import { Link } from "react-router-dom";
import { Facebook, Instagram, ArrowUp, Heart, Truck } from "lucide-react";
import logo from "@/assets/Ar_logo.jpeg";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <img src={logo} alt="AR Logo" className="h-10 w-10 rounded-full object-cover" />
              <span className="font-display text-lg font-bold">AR – Nannamma Kairuchi</span>
            </div>
            <p className="text-primary-foreground/70 text-sm italic">
              "From Amma's Kitchen – Healthy & Tasty"
            </p>
            {/* Delivery Info integrated into Brand/Info column */}
            <div className="pt-2 space-y-3">
              <div className="flex items-center gap-2 text-accent">
                <Truck size={18} />
                <span className="text-xs font-bold uppercase tracking-wider">Dispatch Schedule</span>
              </div>
              <ul className="text-xs text-primary-foreground/60 space-y-1">
                <li>• <span className="text-primary-foreground/90 font-medium">Spices/Flours:</span> Next Day</li>
                <li>• <span className="text-primary-foreground/90 font-medium">Laddus/Chutney powders:</span> 48 Hours</li>
                <li>• <span className="text-primary-foreground/90 font-medium">Delivery:</span> ~7 Days</li>
              </ul>
            </div>
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
              {["Protein Powders", "Healthy Laddus", "Chatni Powders", "Spicy Masalas", "Healthy Malts", "Multigrain Flours"].map((cat) => (
                <button
                  key={cat}
                  onClick={scrollToTop}
                  className="block text-primary-foreground/70 hover:text-accent transition-colors text-sm text-left"
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4 text-accent">Contact</h4>
            <div className="space-y-2 text-sm text-primary-foreground/70">
              <p className="flex items-center gap-2">📞 8660124965</p>
              <p className="flex items-center gap-2">✉️ nannamakairuchi@gmail.com</p>
              <p className="leading-relaxed">#513 63rd Cross, 5th Block Rajajinagar, Bangalore – 560010</p>
              <div className="flex gap-3 mt-4">
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors"><Facebook size={20} /></a>
                <a href="#" className="text-primary-foreground/70 hover:text-accent transition-colors"><Instagram size={20} /></a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-6 flex flex-col items-center justify-between gap-4">
          <div className="flex flex-col items-center gap-2">
            <p className="text-sm text-primary-foreground/50 text-center">
              © 2025 AR – Nannamma Kairuchi. All rights reserved.
            </p>
            
            {/* Attribution Section */}
            <div className="flex justify-center items-center gap-1 text-sm text-primary-foreground/70">
              Made with <Heart className="inline h-4 w-4 text-red-500 mx-1 fill-red-500" /> by
              <a
                href="https://staffarc.in"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-orange-400 hover:text-orange-300 transition-colors font-medium hover:underline"
              >
                <img
                  src="https://www.staffarc.in/images/Staffarc-logo.png"
                  alt="StaffArc logo"
                  className="h-5 w-5 object-contain"
                />
                StaffArc
              </a>
            </div>
          </div>

          <button 
            onClick={scrollToTop} 
            className="bg-accent text-accent-foreground p-2 rounded-full hover:opacity-90 transition-opacity"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;