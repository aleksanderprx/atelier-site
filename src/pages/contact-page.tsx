import { useState } from "react";
import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  projectType: string;
  budget: string;
  message: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  projectType: "",
  budget: "",
  message: "",
};

const ease = [0.22, 1, 0.36, 1] as const;

export function ContactPage() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setIsSubmitted(true);
    setFormData(initialFormData);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const inputClasses =
    "w-full px-5 py-4 border border-gray-200 rounded-xl focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold/20 transition-all duration-300 font-body bg-white";

  return (
    <div className="pt-32 pb-24 overflow-hidden">
      <section className="px-8 mb-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4"
          >
            Get in Touch
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease }}
            className="font-heading text-6xl md:text-7xl text-studio-black mb-6"
          >
            Let's Create <span className="italic">Together</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-[1px] bg-gold mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-body text-lg text-gray-500"
          >
            We'd love to hear about your project. Reach out to start a
            conversation.
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="bg-white rounded-2xl p-10 shadow-lg"
          >
            <h2 className="font-heading text-3xl text-studio-black mb-8">
              Send us a message
            </h2>

            {isSubmitted && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl"
              >
                <p className="font-body text-green-800">
                  Thank you for your inquiry! We'll be in touch soon.
                </p>
              </motion.div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
                <label
                  htmlFor="name"
                  className="block font-body font-medium text-studio-black mb-2 text-sm"
                >
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="John Doe"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.45 }}
              >
                <label
                  htmlFor="email"
                  className="block font-body font-medium text-studio-black mb-2 text-sm"
                >
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className={inputClasses}
                  placeholder="john@example.com"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <label
                  htmlFor="projectType"
                  className="block font-body font-medium text-studio-black mb-2 text-sm"
                >
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">Select a project type</option>
                  <option value="residential">Residential Design</option>
                  <option value="commercial">Commercial Design</option>
                  <option value="hospitality">Hospitality Design</option>
                  <option value="consultation">Consultation Only</option>
                  <option value="renovation">Renovation</option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.55 }}
              >
                <label
                  htmlFor="budget"
                  className="block font-body font-medium text-studio-black mb-2 text-sm"
                >
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={inputClasses}
                >
                  <option value="">Select a budget range</option>
                  <option value="under-50k">Under $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k-250k">$100,000 - $250,000</option>
                  <option value="250k-500k">$250,000 - $500,000</option>
                  <option value="over-500k">Over $500,000</option>
                </select>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
              >
                <label
                  htmlFor="message"
                  className="block font-body font-medium text-studio-black mb-2 text-sm"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`${inputClasses} resize-none`}
                  placeholder="Tell us about your project..."
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.65 }}
              >
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-studio-black text-white rounded-xl hover:bg-gold transition-all duration-500 font-body font-medium shadow-lg"
                >
                  Send Message
                  <Send size={18} />
                </motion.button>
              </motion.div>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease }}
            className="space-y-8"
          >
            <div className="bg-white rounded-2xl p-10 shadow-lg">
              <h2 className="font-heading text-3xl text-studio-black mb-8">
                Get in Touch
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: MapPin,
                    title: "Studio Address",
                    content: "123 Design Avenue\nNew York, NY 10001",
                  },
                  {
                    icon: Phone,
                    title: "Phone",
                    content: "+1 (555) 123-4567",
                  },
                  {
                    icon: Mail,
                    title: "Email",
                    content: "hello@atelier.com",
                  },
                ].map(({ icon: Icon, title, content }, i) => (
                  <motion.div
                    key={title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-beige rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-gold transition-colors duration-300">
                      <Icon className="text-gold" size={22} />
                    </div>
                    <div>
                      <h3 className="font-body font-medium text-studio-black mb-1 text-sm">
                        {title}
                      </h3>
                      <p className="font-body text-gray-500 whitespace-pre-line">
                        {content}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-8 pt-8 border-t border-gray-100">
                <h3 className="font-body font-medium text-studio-black mb-3 text-sm">
                  Studio Hours
                </h3>
                <p className="font-body text-gray-500">
                  Monday - Friday: 9:00 AM - 6:00 PM
                  <br />
                  Saturday: By Appointment
                  <br />
                  Sunday: Closed
                </p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="bg-white rounded-2xl p-4 shadow-lg overflow-hidden h-[400px]"
            >
              <div className="w-full h-full bg-beige rounded-xl flex items-center justify-center">
                <div className="text-center">
                  <motion.div
                    animate={{ y: [0, -8, 0] }}
                    transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                  >
                    <MapPin className="text-gold mx-auto mb-4" size={48} />
                  </motion.div>
                  <p className="font-body text-gray-500">
                    123 Design Avenue
                    <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
