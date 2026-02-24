import { motion, AnimatePresence } from "framer-motion";
import { X, Leaf, ShieldCheck } from "lucide-react";
import { Product } from "@/data/products";

interface ModalProps {
  product: Product | null;
  onClose: () => void;
}

const ProductModal = ({ product, onClose }: ModalProps) => {
  if (!product) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.9, y: 20 }}
          className="bg-white rounded-3xl overflow-hidden max-w-4xl w-full shadow-2xl flex flex-col md:flex-row relative"
        >
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/80 rounded-full hover:bg-white shadow-md z-10"
          >
            <X size={20} className="text-gray-800" />
          </button>

          {/* Left Side: Image */}
          <div className="md:w-1/2 h-64 md:h-auto">
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Right Side: Details */}
          <div className="md:w-1/2 p-8 overflow-y-auto max-h-[80vh] bg-[#fdfaf5]">
            <span className="text-xs uppercase tracking-widest text-terracotta font-bold">
              {product.category.replace("-", " ")}
            </span>
            <h2 className="text-3xl font-display font-bold text-gray-900 mt-2 mb-4">
              {product.name}
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              {product.description || "Traditional homemade quality you can trust."}
            </p>

            {product.ingredients && (
              <div className="mb-6">
                <div className="flex items-center gap-2 mb-3 text-primary font-bold">
                  <Leaf size={18} />
                  <h3>Ingredients</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {product.ingredients.map((ing) => (
                    <span key={ing} className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm">
                      {ing}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {product.benefits && (
              <div>
                <div className="flex items-center gap-2 mb-3 text-green-700 font-bold">
                  <ShieldCheck size={18} />
                  <h3>Health Benefits</h3>
                </div>
                <ul className="space-y-2">
                  {product.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-gray-700">
                      <span className="text-terracotta mt-1">•</span> {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default ProductModal;