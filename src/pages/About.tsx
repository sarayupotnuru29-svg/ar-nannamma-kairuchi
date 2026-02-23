import { motion } from "framer-motion";
import aboutImage from "@/assets/about-kitchen.jpg";

const About = () => {
  return (
    <div>
      {/* Hero */}
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4"
          >
            About Us
          </motion.h1>
          <p className="text-primary-foreground/80 text-lg">The story behind every spice, every laddu, every smile</p>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <img src={aboutImage} alt="Traditional Kitchen" className="rounded-2xl shadow-xl w-full" />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-display font-bold text-foreground">
              Made with Love, Tradition & Purity
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Our food is made with love, tradition and purity. Every powder, laddu and masala carries the warmth of Amma's kitchen.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Healthy, chemical-free, and made fresh – that's our promise. We believe in the power of natural ingredients, traditional grinding methods, and time-tested recipes passed down through generations.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              At AR – Nannamma Kairuchi, every product is handcrafted in small batches to ensure quality and freshness. No preservatives, no artificial colors – just pure homemade goodness.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { num: "50+", label: "Products" },
                { num: "1000+", label: "Happy Customers" },
                { num: "100%", label: "Natural" },
                { num: "0", label: "Preservatives" },
              ].map((stat) => (
                <div key={stat.label} className="bg-card rounded-xl p-4 text-center">
                  <span className="text-2xl font-display font-bold text-terracotta">{stat.num}</span>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
