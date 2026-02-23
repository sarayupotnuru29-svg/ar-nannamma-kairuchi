import { Link } from "react-router-dom";
import { motion } from "framer-motion";

interface CategoryCardProps {
  name: string;
  description: string;
  image: string;
  categoryId: string;
}

const CategoryCard = ({ name, description, image, categoryId }: CategoryCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-card rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow"
    >
      <div className="h-48 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover" />
      </div>
      <div className="p-5">
        <h3 className="font-display text-xl font-bold text-foreground mb-2">{name}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <Link
          to={`/menu?category=${categoryId}`}
          className="inline-block bg-primary text-primary-foreground px-5 py-2 rounded-lg font-medium text-sm hover:opacity-90 transition-opacity"
        >
          Shop Now
        </Link>
      </div>
    </motion.div>
  );
};

export default CategoryCard;
