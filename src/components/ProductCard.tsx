// import { useState } from "react";
// import { ShoppingCart, Minus, Plus } from "lucide-react";
// import { motion } from "framer-motion";
// import { useCart } from "@/context/CartContext";
// import { Product, weightOptions, getPriceForWeight } from "@/data/products";
// import { toast } from "sonner";

// const ProductCard = ({ product }: { product: Product }) => {
//   const { addToCart, items, updateQuantity, removeFromCart } = useCart();
//   const [selectedWeight, setSelectedWeight] = useState(product.hasWeightOptions ? "1kg" : product.fixedWeight || "");

//   const getPrice = () => {
//     if (!product.hasWeightOptions) return product.fixedPrice || 0;
//     const opt = weightOptions.find((w) => w.label === selectedWeight);
//     return opt && product.price1kg ? getPriceForWeight(product.price1kg, opt.grams) : product.price1kg || 0;
//   };

//   const cartItem = items.find(
//     (item) => item.productId === product.id && item.weight === selectedWeight
//   );
//   const cartQty = cartItem?.quantity || 0;

//   const handleAddToCart = () => {
//     addToCart({
//       productId: product.id,
//       name: product.name,
//       weight: selectedWeight,
//       price: getPrice(),
//       quantity: 1,
//       image: product.image,
//     });
//     toast.success(`${product.name} added to cart!`);
//   };

//   return (
//     <motion.div
//       initial={{ opacity: 0, y: 20 }}
//       whileInView={{ opacity: 1, y: 0 }}
//       viewport={{ once: true }}
//       whileHover={{ y: -4 }}
//       className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
//     >
//       <div className="h-44 overflow-hidden relative">
//         <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
//         {product.minQty && (
//           <span className="absolute top-2 right-2 bg-terracotta text-terracotta-foreground text-xs px-2 py-1 rounded-full font-semibold">
//             {product.minQty}
//           </span>
//         )}
//       </div>
//       <div className="p-4">
//         <h3 className="font-display text-lg font-bold text-foreground mb-2 leading-tight">{product.name}</h3>

//         {product.hasWeightOptions && (
//           <select
//             value={selectedWeight}
//             onChange={(e) => setSelectedWeight(e.target.value)}
//             className="w-full mb-3 px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:ring-2 focus:ring-accent outline-none"
//           >
//             {weightOptions.map((w) => (
//               <option key={w.label} value={w.label}>
//                 {w.label} – ₹{product.price1kg ? getPriceForWeight(product.price1kg, w.grams) : 0}
//               </option>
//             ))}
//           </select>
//         )}

//         <div className="flex items-center justify-between">
//           <span className="text-2xl font-bold text-terracotta">₹{getPrice()}</span>
//           <button
//             onClick={handleAddToCart}
//             className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
//           >
//             <ShoppingCart size={16} />
//             Add
//           </button>
//         </div>

//         {/* Quantity controls */}
//         {cartQty > 0 && (
//           <div className="flex items-center justify-center gap-3 mt-3 bg-muted rounded-lg py-2">
//             <button
//               onClick={() => {
//                 if (cartQty <= 1) {
//                   removeFromCart(product.id, selectedWeight);
//                 } else {
//                   updateQuantity(product.id, selectedWeight, cartQty - 1);
//                 }
//               }}
//               className="p-1.5 rounded-lg bg-background hover:bg-border transition-colors"
//             >
//               <Minus size={16} />
//             </button>
//             <span className="font-bold text-foreground w-8 text-center">{cartQty}</span>
//             <button
//               onClick={() => updateQuantity(product.id, selectedWeight, cartQty + 1)}
//               className="p-1.5 rounded-lg bg-background hover:bg-border transition-colors"
//             >
//               <Plus size={16} />
//             </button>
//           </div>
//         )}

//         {!product.hasWeightOptions && product.fixedWeight && (
//           <p className="text-xs text-muted-foreground mt-1">{product.fixedWeight}</p>
//         )}
//       </div>
//     </motion.div>
//   );
// };

// export default ProductCard;






import { useState } from "react";
import { ShoppingCart, Minus, Plus, Info } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { Product, weightOptions, getPriceForWeight } from "@/data/products";
import { toast } from "sonner";

interface ProductCardProps {
  product: Product;
  onShowDetails: (product: Product) => void; // New prop to trigger modal
}

const ProductCard = ({ product, onShowDetails }: ProductCardProps) => {
  const { addToCart, items, updateQuantity, removeFromCart } = useCart();
  const [selectedWeight, setSelectedWeight] = useState(product.hasWeightOptions ? "1kg" : product.fixedWeight || "");

  const getPrice = () => {
    if (!product.hasWeightOptions) return product.fixedPrice || 0;
    const opt = weightOptions.find((w) => w.label === selectedWeight);
    return opt && product.price1kg ? getPriceForWeight(product.price1kg, opt.grams) : product.price1kg || 0;
  };

  const cartItem = items.find(
    (item) => item.productId === product.id && item.weight === selectedWeight
  );
  const cartQty = cartItem?.quantity || 0;

  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      name: product.name,
      weight: selectedWeight,
      price: getPrice(),
      quantity: 1,
      image: product.image,
    });
    toast.success(`${product.name} added to cart!`);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -4 }}
      className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all border border-border/50"
    >
      {/* Image Section */}
      <div className="h-44 overflow-hidden relative group">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
        />
        {product.minQty && (
          <span className="absolute top-2 left-2 bg-terracotta text-white text-[10px] uppercase tracking-wider px-2 py-1 rounded-md font-bold shadow-lg">
            {product.minQty}
          </span>
        )}
        {/* Info overlay button for quick access */}
        <button 
          onClick={() => onShowDetails(product)}
          className="absolute top-2 right-2 bg-white/90 p-1.5 rounded-full text-terracotta hover:bg-terracotta hover:text-white transition-colors shadow-sm"
          title="View Details"
        >
          <Info size={18} />
        </button>
      </div>

      <div className="p-4">
        <h3 className="font-display text-lg font-bold text-foreground mb-1 leading-tight min-h-[2.5rem] flex items-center">
          {product.name}
        </h3>

        {/* Weight Selector */}
        {product.hasWeightOptions ? (
          <select
            value={selectedWeight}
            onChange={(e) => setSelectedWeight(e.target.value)}
            className="w-full mb-3 px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:ring-2 focus:ring-accent outline-none cursor-pointer"
          >
            {weightOptions.map((w) => (
              <option key={w.label} value={w.label}>
                {w.label} – ₹{product.price1kg ? getPriceForWeight(product.price1kg, w.grams) : 0}
              </option>
            ))}
          </select>
        ) : (
          <div className="mb-3 h-[38px] flex items-center">
            {product.fixedWeight && (
              <span className="text-xs font-medium text-muted-foreground bg-muted px-2 py-1 rounded">
                Pack size: {product.fixedWeight}
              </span>
            )}
          </div>
        )}

        {/* Pricing & Add Button */}
        <div className="flex items-center justify-between gap-2">
          <span className="text-xl font-bold text-terracotta">₹{getPrice()}</span>
          
          <button
            onClick={handleAddToCart}
            className="flex-1 flex items-center justify-center gap-2 bg-primary text-primary-foreground px-3 py-2 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity active:scale-95"
          >
            <ShoppingCart size={16} />
            Add
          </button>
        </div>

        {/* Quantity controls */}
        {cartQty > 0 && (
          <div className="flex items-center justify-center gap-3 mt-3 bg-muted/50 rounded-lg py-2 border border-border/50">
            <button
              onClick={() => {
                if (cartQty <= 1) {
                  removeFromCart(product.id, selectedWeight);
                } else {
                  updateQuantity(product.id, selectedWeight, cartQty - 1);
                }
              }}
              className="p-1.5 rounded-lg bg-background hover:bg-border transition-colors shadow-sm"
            >
              <Minus size={14} />
            </button>
            <span className="font-bold text-foreground w-8 text-center">{cartQty}</span>
            <button
              onClick={() => updateQuantity(product.id, selectedWeight, cartQty + 1)}
              className="p-1.5 rounded-lg bg-background hover:bg-border transition-colors shadow-sm"
            >
              <Plus size={14} />
            </button>
          </div>
        )}

        {/* Read More Link */}
        <button 
          onClick={() => onShowDetails(product)}
          className="w-full mt-4 pt-3 border-t border-border/40 text-[11px] font-bold text-accent hover:text-terracotta uppercase tracking-widest transition-colors flex items-center justify-center gap-1"
        >
          Read Details & Benefits
        </button>
      </div>
    </motion.div>
  );
};

export default ProductCard;