import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ShoppingBag } from "lucide-react";
import { useCart } from "@/context/CartContext";
import CartItemComponent from "@/components/CartItemComponent";
import bgPattern from "@/assets/bg-pattern.jpg";

const Cart = () => {
  const { items, totalPrice, totalItems } = useCart();

  const generateWhatsAppMessage = () => {
    let msg = "Hello AR – Nannamma Kairuchi,%0AI would like to order:%0A%0A";
    items.forEach((item, i) => {
      msg += `${i + 1}. ${item.name} – ${item.weight} – Qty: ${item.quantity} – ₹${item.price * item.quantity}%0A`;
    });
    msg += `%0ATotal Amount: ₹${totalPrice}%0A%0APlease confirm my order.`;
    return msg;
  };

  if (items.length === 0) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center px-4">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center">
          <ShoppingBag size={64} className="text-muted-foreground mx-auto mb-4" />
          <h2 className="text-2xl font-display font-bold text-foreground mb-2">Your cart is empty</h2>
          <p className="text-muted-foreground mb-6">Add some delicious homemade products!</p>
          <Link to="/menu" className="bg-primary text-primary-foreground px-6 py-3 rounded-xl font-bold hover:opacity-90 transition-opacity">
            Browse Menu
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <div>
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-2">Your Cart</h1>
          <p className="text-primary-foreground/80">{totalItems} items</p>
        </div>
      </section>

      <section
        className="py-12"
        style={{ backgroundImage: `url(${bgPattern})`, backgroundSize: "400px", backgroundRepeat: "repeat" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-4 mb-8">
            {items.map((item) => (
              <CartItemComponent key={`${item.productId}-${item.weight}`} item={item} />
            ))}
          </div>

          <div className="bg-card rounded-2xl p-6 shadow-lg">
            <div className="flex items-center justify-between mb-6">
              <span className="text-xl font-display font-bold text-foreground">Grand Total</span>
              <span className="text-3xl font-display font-bold text-terracotta">₹{totalPrice}</span>
            </div>
            <a
              href={`https://wa.me/918660124965?text=${generateWhatsAppMessage()}`}
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full bg-primary text-primary-foreground py-4 rounded-xl font-bold text-lg text-center hover:opacity-90 transition-opacity"
            >
              Order via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Sticky mobile order button */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-card border-t border-border p-4 z-40">
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold text-foreground">Total: ₹{totalPrice}</span>
          <span className="text-sm text-muted-foreground">{totalItems} items</span>
        </div>
        <a
          href={`https://wa.me/918660124965?text=${generateWhatsAppMessage()}`}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full bg-primary text-primary-foreground py-3 rounded-xl font-bold text-center"
        >
          Order Now
        </a>
      </div>
    </div>
  );
};

export default Cart;
