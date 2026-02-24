// import { useState } from "react";
// import { useSearchParams } from "react-router-dom";
// import { motion } from "framer-motion";
// import { products, categories } from "@/data/products";
// import ProductCard from "@/components/ProductCard";
// import bgPattern from "@/assets/bg-pattern.jpg";

// const MenuPage = () => {
//   const [searchParams] = useSearchParams();
//   const initialCat = searchParams.get("category") || "all";
//   const [activeCategory, setActiveCategory] = useState(initialCat);

//   const filtered = activeCategory === "all" ? products : products.filter((p) => p.category === activeCategory);

//   return (
//     <div>
//       <section className="bg-primary py-16">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4"
//           >
//             Our Menu
//           </motion.h1>
//           <p className="text-primary-foreground/80 text-lg">Fresh, homemade, and made with love</p>
//         </div>
//       </section>

//       <section
//         className="py-12"
//         style={{ backgroundImage: `url(${bgPattern})`, backgroundSize: "400px", backgroundRepeat: "repeat" }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Filters */}
//           <div className="flex flex-wrap gap-3 mb-10 justify-center">
//             <button
//               onClick={() => setActiveCategory("all")}
//               className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
//                 activeCategory === "all"
//                   ? "bg-primary text-primary-foreground"
//                   : "bg-card text-foreground hover:bg-muted"
//               }`}
//             >
//               All
//             </button>
//             {categories.map((cat) => (
//               <button
//                 key={cat.id}
//                 onClick={() => setActiveCategory(cat.id)}
//                 className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
//                   activeCategory === cat.id
//                     ? "bg-primary text-primary-foreground"
//                     : "bg-card text-foreground hover:bg-muted"
//                 }`}
//               >
//                 {cat.name}
//               </button>
//             ))}
//           </div>

//           {/* Products Grid */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
//             {filtered.map((product) => (
//               <ProductCard key={product.id} product={product} />
//             ))}
//           </div>

//           {filtered.length === 0 && (
//             <p className="text-center text-muted-foreground py-12">No products found in this category.</p>
//           )}
//         </div>
//       </section>
//     </div>
//   );
// };

// export default MenuPage;





import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { products, categories, Product } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import ProductModal from "@/components/ProductModal";
import bgPattern from "@/assets/bg-pattern.jpg";

const MenuPage = () => {
  const [searchParams] = useSearchParams();
  const initialCat = searchParams.get("category") || "all";
  const [activeCategory, setActiveCategory] = useState(initialCat);

  // State to manage which product is being viewed in the modal
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filtered = activeCategory === "all" 
    ? products 
    : products.filter((p) => p.category === activeCategory);

  return (
    <div className="relative">
      {/* Product Details Modal */}
      <AnimatePresence>
        {selectedProduct && (
          <ProductModal 
            product={selectedProduct} 
            onClose={() => setSelectedProduct(null)} 
          />
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4"
          >
            Our Menu
          </motion.h1>
          <p className="text-primary-foreground/80 text-lg font-medium">
            Fresh, homemade, and made with love
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section
        className="py-12 min-h-screen"
        style={{ 
          backgroundImage: `url(${bgPattern})`, 
          backgroundSize: "400px", 
          backgroundRepeat: "repeat" 
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filters */}
          <div className="flex flex-wrap gap-3 mb-12 justify-center">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm ${
                activeCategory === "all"
                  ? "bg-primary text-primary-foreground scale-105 shadow-md"
                  : "bg-card text-foreground hover:bg-muted border border-border"
              }`}
            >
              All Items
            </button>
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2.5 rounded-full font-bold text-sm transition-all shadow-sm ${
                  activeCategory === cat.id
                    ? "bg-primary text-primary-foreground scale-105 shadow-md"
                    : "bg-card text-foreground hover:bg-muted border border-border"
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Products Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filtered.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onShowDetails={(p) => setSelectedProduct(p)} 
              />
            ))}
          </motion.div>

          {/* Empty State */}
          {filtered.length === 0 && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20 bg-card/50 rounded-3xl border border-dashed border-border mt-10"
            >
              <p className="text-xl text-muted-foreground font-display">
                No products found in this category.
              </p>
              <button 
                onClick={() => setActiveCategory("all")}
                className="mt-4 text-terracotta font-bold hover:underline"
              >
                Show all products
              </button>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default MenuPage;