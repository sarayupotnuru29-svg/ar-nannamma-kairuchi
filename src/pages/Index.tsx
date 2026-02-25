// import { Link } from "react-router-dom";
// import { motion } from "framer-motion";
// import { categories } from "@/data/products";
// import CategoryCard from "@/components/CategoryCard";
// import heroImage from "@/assets/hero-kitchen.jpg";
// import bgPattern from "@/assets/bg-pattern.jpg";

// const Index = () => {
//   return (
//     <div>
//       {/* Hero Section */}
//       <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
//         <img src={heroImage} alt="Traditional Kitchen" className="absolute inset-0 w-full h-full object-cover" />
//         <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80" />
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.8 }}
//           className="relative z-10 text-center px-4 max-w-3xl"
//         >
//           <h1 className="text-5xl md:text-7xl font-display font-bold text-primary-foreground mb-4 leading-tight">
//             AR – Nannamma Kairuchi
//           </h1>
//           <p className="text-xl md:text-2xl text-primary-foreground/90 font-body mb-8">
//             From Amma's Kitchen – Healthy & Tasty
//           </p>
//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <Link
//               to="/menu"
//               className="bg-accent text-accent-foreground px-8 py-3 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity shadow-lg"
//             >
//               View Menu
//             </Link>
//             <Link
//               to="/cart"
//               className="bg-terracotta text-terracotta-foreground px-8 py-3 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity shadow-lg"
//             >
//               Order Now
//             </Link>
//           </div>
//         </motion.div>
//       </section>

//       {/* Categories Section */}
//       <section
//         className="py-16"
//         style={{ backgroundImage: `url(${bgPattern})`, backgroundSize: "400px", backgroundRepeat: "repeat" }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             viewport={{ once: true }}
//             className="text-center mb-12"
//           >
//             <h2 className="text-4xl font-display font-bold text-foreground mb-3">Our Categories</h2>
//             <p className="text-muted-foreground text-lg">Handmade with love, straight from Amma's kitchen</p>
//           </motion.div>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
//             {categories.map((cat) => (
//               <CategoryCard key={cat.id} name={cat.name} description={cat.description} image={cat.image} categoryId={cat.id} />
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Trust Section */}
//       <section className="bg-card py-16">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
//             {[
//               { emoji: "🌿", title: "100% Natural", desc: "No chemicals, no preservatives" },
//               { emoji: "👩‍🍳", title: "Homemade Fresh", desc: "Made in small batches with love" },
//               { emoji: "💛", title: "Amma's Recipes", desc: "Traditional family recipes passed down" },
//             ].map((item) => (
//               <motion.div
//                 key={item.title}
//                 whileHover={{ scale: 1.05 }}
//                 className="p-6"
//               >
//                 <span className="text-5xl mb-4 block">{item.emoji}</span>
//                 <h3 className="font-display text-xl font-bold text-foreground mb-2">{item.title}</h3>
//                 <p className="text-muted-foreground">{item.desc}</p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default Index;





import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { categories } from "@/data/products";
import CategoryCard from "@/components/CategoryCard";
import heroImage from "@/assets/hero-kitchen.jpg";
import bgPattern from "@/assets/bg-pattern.jpg";
import logo from "@/assets/Ar_logo.jpeg"; // Added logo import

const Index = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <img src={heroImage} alt="Traditional Kitchen" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 via-primary/60 to-primary/80" />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-4 max-w-3xl flex flex-col items-center"
        >
          {/* Logo Section - Replaced H1 text with Logo Image */}
          <motion.img 
            src={logo} 
            alt="AR - Nannamma Kairuchi Logo" 
            className="w-48 md:w-64 lg:w-80 h-auto mb-6 rounded-full shadow-2xl border-4 border-accent/20"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
          />
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 font-body mb-8">
            From Amma's Kitchen – Healthy & Tasty
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/menu"
              className="bg-accent text-accent-foreground px-8 py-3 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              View Menu
            </Link>
            <Link
              to="/cart"
              className="bg-terracotta text-terracotta-foreground px-8 py-3 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity shadow-lg"
            >
              Order Now
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Categories Section */}
      <section
        className="py-16"
        style={{ backgroundImage: `url(${bgPattern})`, backgroundSize: "400px", backgroundRepeat: "repeat" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold text-foreground mb-3">Our Categories</h2>
            <p className="text-muted-foreground text-lg">Handmade with love, straight from Amma's kitchen</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((cat) => (
              <CategoryCard key={cat.id} name={cat.name} description={cat.description} image={cat.image} categoryId={cat.id} />
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="bg-card py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {[
              { emoji: "🌿", title: "100% Natural", desc: "No chemicals, no preservatives" },
              { emoji: "👩‍🍳", title: "Homemade Fresh", desc: "Made in small batches with love" },
              { emoji: "💛", title: "Amma's Recipes", desc: "Traditional family recipes passed down" },
            ].map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ scale: 1.05 }}
                className="p-6"
              >
                <span className="text-5xl mb-4 block">{item.emoji}</span>
                <h3 className="font-display text-xl font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;