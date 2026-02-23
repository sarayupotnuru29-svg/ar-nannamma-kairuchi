import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart, CartItem as CartItemType } from "@/context/CartContext";

const CartItemComponent = ({ item }: { item: CartItemType }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex items-center gap-4 bg-card rounded-xl p-4 shadow-sm">
      <img src={item.image} alt={item.name} className="w-16 h-16 rounded-lg object-cover" />
      <div className="flex-1 min-w-0">
        <h4 className="font-display font-bold text-foreground truncate">{item.name}</h4>
        <p className="text-sm text-muted-foreground">{item.weight}</p>
        <p className="text-sm font-semibold text-terracotta">₹{item.price}</p>
      </div>
      <div className="flex items-center gap-2">
        <button
          onClick={() => updateQuantity(item.productId, item.weight, item.quantity - 1)}
          className="p-1 rounded-lg bg-muted hover:bg-border transition-colors"
        >
          <Minus size={16} />
        </button>
        <span className="font-bold w-8 text-center">{item.quantity}</span>
        <button
          onClick={() => updateQuantity(item.productId, item.weight, item.quantity + 1)}
          className="p-1 rounded-lg bg-muted hover:bg-border transition-colors"
        >
          <Plus size={16} />
        </button>
      </div>
      <div className="text-right">
        <p className="font-bold text-foreground">₹{item.price * item.quantity}</p>
        <button
          onClick={() => removeFromCart(item.productId, item.weight)}
          className="text-destructive hover:opacity-80 mt-1"
        >
          <Trash2 size={16} />
        </button>
      </div>
    </div>
  );
};

export default CartItemComponent;
