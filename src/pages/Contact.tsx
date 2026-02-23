import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Hello AR – Nannamma Kairuchi,%0A%0AName: ${form.name}%0APhone: ${form.phone}%0AMessage: ${form.message}`;
    window.open(`https://wa.me/918660124965?text=${msg}`, "_blank");
  };

  return (
    <div>
      <section className="bg-primary py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-display font-bold text-primary-foreground mb-4"
          >
            Contact Us
          </motion.h1>
          <p className="text-primary-foreground/80 text-lg">We'd love to hear from you</p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-start gap-4">
              <Phone className="text-terracotta mt-1" size={22} />
              <div>
                <h3 className="font-display font-bold text-foreground">Phone</h3>
                <p className="text-muted-foreground">8660124965</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Mail className="text-terracotta mt-1" size={22} />
              <div>
                <h3 className="font-display font-bold text-foreground">Email</h3>
                <p className="text-muted-foreground">nannamakairuchi@gmail.com</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <MapPin className="text-terracotta mt-1" size={22} />
              <div>
                <h3 className="font-display font-bold text-foreground">Address</h3>
                <p className="text-muted-foreground">#513 63rd Cross, 5th Block Rajajinagar, Bangalore – 560010</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <Clock className="text-terracotta mt-1" size={22} />
              <div>
                <h3 className="font-display font-bold text-foreground">Business Hours</h3>
                <div className="text-muted-foreground text-sm space-y-1">
                  <p>Monday: 10am – 5pm</p>
                  <p className="text-terracotta font-semibold">Tuesday: Holiday</p>
                  <p>Wednesday – Friday: 10am – 5pm</p>
                  <p>Saturday: 10am – 5pm</p>
                  <p>Sunday: 10am – 5pm</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4 pt-4">
              <a href="#" className="bg-primary text-primary-foreground p-3 rounded-full hover:opacity-90 transition-opacity">
                <Facebook size={20} />
              </a>
              <a href="#" className="bg-primary text-primary-foreground p-3 rounded-full hover:opacity-90 transition-opacity">
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-card rounded-2xl p-8 shadow-lg space-y-5"
          >
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">Send us a message</h3>
            <input
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:ring-2 focus:ring-accent outline-none"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              required
              className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:ring-2 focus:ring-accent outline-none"
            />
            <textarea
              placeholder="Your Message"
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              required
              rows={4}
              className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:ring-2 focus:ring-accent outline-none resize-none"
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity"
            >
              Send via WhatsApp
            </button>
          </motion.form>
        </div>
      </section>
    </div>
  );
};

export default Contact;
