// import { motion } from "framer-motion";
// import aboutImage from "@/assets/aboutpic.jpg";
// import bgPattern from "@/assets/bg-pattern.jpg";

// const About = () => {
//   return (
//     <div>
//       {/* Hero */}
//       <section className="bg-primary py-16">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4"
//           >
//             About Us
//           </motion.h1>
//           <p className="text-primary-foreground/80 text-lg">The story behind every spice, every laddu, every smile</p>
//         </div>
//       </section>

//       {/* Content */}
//       <section
//         className="py-16"
//         style={{ backgroundImage: `url(${bgPattern})`, backgroundSize: "400px", backgroundRepeat: "repeat" }}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//             >
//               <img src={aboutImage} alt="Traditional Kitchen" className="rounded-2xl shadow-xl w-full" />
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, x: 30 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               viewport={{ once: true }}
//               className="space-y-6"
//             >
//               <h2 className="text-3xl font-display font-bold text-foreground">
//                 Made with Love, Tradition & Purity
//               </h2>
//               <p className="text-muted-foreground text-lg leading-relaxed">
//                 Our food is made with love, tradition and purity. Every powder, laddu and masala carries the warmth of Amma's kitchen.
//               </p>
//               <p className="text-muted-foreground text-lg leading-relaxed">
//                 Healthy, chemical-free, and made fresh – that's our promise. We believe in the power of natural ingredients, traditional grinding methods, and time-tested recipes passed down through generations.
//               </p>
//               <p className="text-muted-foreground text-lg leading-relaxed">
//                 At AR – Nannamma Kairuchi, every product is handcrafted in small batches to ensure quality and freshness. No preservatives, no artificial colors – just pure homemade goodness.
//               </p>
//               <div className="grid grid-cols-2 gap-4 pt-4">
//                 {[
//                   { num: "50+", label: "Products" },
//                   { num: "1000+", label: "Happy Customers" },
//                   { num: "100%", label: "Natural" },
//                   { num: "0", label: "Preservatives" },
//                 ].map((stat) => (
//                   <div key={stat.label} className="bg-card rounded-xl p-4 text-center">
//                     <span className="text-2xl font-display font-bold text-terracotta">{stat.num}</span>
//                     <p className="text-sm text-muted-foreground">{stat.label}</p>
//                   </div>
//                 ))}
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;




import { motion } from "framer-motion";
import aboutImage from "@/assets/aboutpic.jpg";
import bgPattern from "@/assets/bg-pattern.jpg";
import { HelpCircle, ShieldCheck, Leaf, Heart, Zap } from "lucide-react";

const faqs = [
  {
    question: "What is so special about your products?",
    answer: "Every product at AR – Nannamma Kairuchi is handcrafted using age-old traditional methods. Unlike mass-produced brands, we make our items in small batches to ensure that the authentic flavor and aroma of homemade food remain intact.",
    icon: <Heart className="text-terracotta" size={24} />
  },
  {
    question: "Why choose our products?",
    answer: "Our products bridge the gap between busy modern lives and the need for traditional nutrition. We offer the convenience of ready-to-use powders and snacks without compromising on the quality and love found in a grandmother's kitchen.",
    icon: <ShieldCheck className="text-terracotta" size={24} />
  },
  {
    question: "What ingredients do you use?",
    answer: "We use 100% natural ingredients including premium multigrains (like Ragi, Jowar, Bajra), traditional spices, pure ghee, and organic jaggery. We strictly avoid artificial colors, flavors, and white sugar in our healthy range.",
    icon: <Leaf className="text-terracotta" size={24} />
  },
  {
    question: "Are these products healthy or unhealthy?",
    answer: "Our products are 100% healthy. By eliminating chemical preservatives and refined oils, we ensure that you are consuming nutrient-dense food that supports your family's long-term well-being rather than empty calories.",
    icon: <HelpCircle className="text-terracotta" size={24} />
  },
  {
    question: "What are the benefits?",
    answer: "Regular consumption of our multigrain flours and protein powders helps in better digestion, sustained energy levels, and improved immunity. Since they are chemical-free, they are safe for everyone from growing children to the elderly.",
    icon: <Zap className="text-terracotta" size={24} />
  }
];

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
      <section
        className="py-16"
        style={{ backgroundImage: `url(${bgPattern})`, backgroundSize: "400px", backgroundRepeat: "repeat" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
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
              <div className="grid grid-cols-2 gap-4 pt-4">
                {[
                  { num: "50+", label: "Products" },
                  { num: "1000+", label: "Happy Customers" },
                  { num: "100%", label: "Natural" },
                  { num: "0", label: "Preservatives" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-card rounded-xl p-4 text-center border border-border">
                    <span className="text-2xl font-display font-bold text-terracotta">{stat.num}</span>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* New FAQ Section */}
          <div className="mt-20">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-display font-bold text-center text-foreground mb-12"
            >
              Common <span className="text-terracotta">Questions</span>
            </motion.h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card p-6 rounded-2xl shadow-sm border border-border hover:shadow-md transition-shadow"
                >
                  <div className="flex gap-4 items-start">
                    <div className="mt-1 p-2 bg-primary/5 rounded-lg">
                      {faq.icon}
                    </div>
                    <div>
                      <h3 className="font-display font-bold text-lg text-foreground mb-2">
                        {faq.question}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;