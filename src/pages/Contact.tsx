import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram } from "lucide-react";
import { products } from "@/data/products";
import bgPattern from "@/assets/bg-pattern.jpg";

const Contact = () => {
  const [form, setForm] = useState({ name: "", phone: "", message: "", orderItem: "" });
  const [phoneError, setPhoneError] = useState("");

  const handlePhoneChange = (value: string) => {
    const digits = value.replace(/\D/g, "");
    setForm({ ...form, phone: digits });
    if (digits.length > 0 && digits.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits");
    } else {
      setPhoneError("");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (form.phone.length !== 10) {
      setPhoneError("Phone number must be exactly 10 digits");
      return;
    }
    const orderText = form.orderItem ? `%0AInterested in: ${form.orderItem}` : "";
    const msg = `Hello AR – Nannamma Kairuchi,%0A%0AName: ${encodeURIComponent(form.name)}%0APhone: ${form.phone}${orderText}%0AMessage: ${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/918660124965?text=${msg}`, "_blank");
  };

  const uniqueProductNames = [...new Set(products.map((p) => p.name))];

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

      <section
        className="py-16"
        style={{ backgroundImage: `url(${bgPattern})`, backgroundSize: "400px", backgroundRepeat: "repeat" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              <div>
                <label className="block text-sm font-semibold text-terracotta mb-1">Your Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:ring-2 focus:ring-accent outline-none"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-terracotta mb-1">Phone Number</label>
                <input
                  type="tel"
                  placeholder="Enter 10-digit phone number"
                  value={form.phone}
                  onChange={(e) => handlePhoneChange(e.target.value)}
                  required
                  maxLength={10}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:ring-2 focus:ring-accent outline-none"
                />
                {phoneError && <p className="text-destructive text-xs mt-1">{phoneError}</p>}
              </div>
              <div>
                <label className="block text-sm font-semibold text-terracotta mb-1">Interested Product</label>
                <select
                  value={form.orderItem}
                  onChange={(e) => setForm({ ...form, orderItem: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:ring-2 focus:ring-accent outline-none"
                >
                  <option value="">Select a product (optional)</option>
                  {uniqueProductNames.map((name) => (
                    <option key={name} value={name}>{name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-semibold text-terracotta mb-1">Your Message</label>
                <textarea
                  placeholder="Write your message here"
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  required
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-background border border-border text-foreground focus:ring-2 focus:ring-accent outline-none resize-none"
                />
              </div>
              <button
                type="submit"
                disabled={form.phone.length !== 10}
                className="w-full bg-primary text-primary-foreground py-3 rounded-xl font-bold text-lg hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Send via WhatsApp
              </button>
            </motion.form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
