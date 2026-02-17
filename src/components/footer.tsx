import { useState } from "react";
import {
  Instagram,
  Facebook,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { Link } from "react-router";
import { motion } from "motion/react";

export function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      console.log("Newsletter subscription:", email);
      setEmail("");
      alert("Thank you for subscribing!");
    }
  };

  return (
    <footer className="bg-studio-black text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="font-heading text-3xl mb-6 tracking-wide">Atelier</h3>
            <p className="font-body text-gray-400 mb-6 leading-relaxed">
              Crafting timeless interiors that reflect your unique story.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Facebook, label: "Facebook" },
                { icon: Linkedin, label: "LinkedIn" },
              ].map(({ icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href="#"
                  aria-label={`Follow us on ${label}`}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-gold transition-colors duration-300"
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="font-body font-medium mb-6 text-sm tracking-widest uppercase">
              Quick Links
            </h4>
            <ul className="space-y-3 font-body text-gray-400">
              {[
                { to: "/", label: "Home" },
                { to: "/projects", label: "Projects" },
                { to: "/about", label: "About" },
                { to: "/services", label: "Services" },
                { to: "/contact", label: "Contact" },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="hover:text-gold transition-colors duration-300 hover:translate-x-1 inline-block"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="font-body font-medium mb-6 text-sm tracking-widest uppercase">
              Contact
            </h4>
            <ul className="space-y-4 font-body text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-1 flex-shrink-0 text-gold" />
                <span>123 Design Avenue, New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold" />
                <span>hello@atelier.com</span>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="font-body font-medium mb-6 text-sm tracking-widest uppercase">
              Newsletter
            </h4>
            <p className="font-body text-gray-400 mb-4">
              Subscribe to get our latest design insights
            </p>
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-3">
              <input
                type="email"
                name="email"
                required
                placeholder="Your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-4 py-3 bg-white/5 border border-white/10 rounded-lg focus:outline-none focus:border-gold transition-all duration-300 font-body"
              />
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-3 bg-gold text-white rounded-lg hover:bg-gold-hover transition-colors duration-300 font-body font-medium"
              >
                Subscribe
              </motion.button>
            </form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 mt-16 pt-8 text-center font-body text-gray-500 text-sm"
        >
          <p>&copy; 2026 Atelier Interior Design. All rights reserved.</p>
          <p className="mt-2">
            Made by{" "}
            <a
              href="https://website.kelap.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-hover transition-colors duration-300"
            >
              KELAP
            </a>
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
