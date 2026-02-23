import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { useCart } from "@/context/CartContext";
import { Product, weightOptions, getPriceForWeight } from "@/data/products";
import { toast } from "sonner";

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();
  const [selectedWeight, setSelectedWeight] = useState(product.hasWeightOptions ? "1kg" : product.fixedWeight || "");

  const getPrice = () => {
    if (!product.hasWeightOptions) return product.fixedPrice || 0;
    const opt = weightOptions.find((w) => w.label === selectedWeight);
    return opt && product.price1kg ? getPriceForWeight(product.price1kg, opt.grams) : product.price1kg || 0;
  };

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
      className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
    >
      <div className="h-44 overflow-hidden relative">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
        {product.minQty && (
          <span className="absolute top-2 right-2 bg-terracotta text-terracotta-foreground text-xs px-2 py-1 rounded-full font-semibold">
            {product.minQty}
          </span>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-display text-lg font-bold text-foreground mb-2 leading-tight">{product.name}</h3>

        {product.hasWeightOptions && (
          <select
            value={selectedWeight}
            onChange={(e) => setSelectedWeight(e.target.value)}
            className="w-full mb-3 px-3 py-2 rounded-lg bg-background border border-border text-foreground text-sm focus:ring-2 focus:ring-accent outline-none"
          >
            {weightOptions.map((w) => (
              <option key={w.label} value={w.label}>
                {w.label} – ₹{product.price1kg ? getPriceForWeight(product.price1kg, w.grams) : 0}
              </option>
            ))}
          </select>
        )}

        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold text-terracotta">₹{getPrice()}</span>
          <button
            onClick={handleAddToCart}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <ShoppingCart size={16} />
            Add
          </button>
        </div>
        {!product.hasWeightOptions && product.fixedWeight && (
          <p className="text-xs text-muted-foreground mt-1">{product.fixedWeight}</p>
        )}
      </div>
    </motion.div>
  );
};

export default ProductCard;
