import { motion } from "motion/react";
import {
  MessageCircle,
  Palette,
  Hammer,
  Sparkles,
  ArrowRight,
  Check,
} from "lucide-react";
import { Link } from "react-router";

const services = [
  {
    icon: MessageCircle,
    title: "Design Consultation",
    description:
      "Begin your design journey with a comprehensive consultation. We'll discuss your vision, lifestyle, and budget to create a tailored design strategy.",
    features: [
      "Initial design meeting",
      "Space analysis & measurements",
      "Mood board creation",
      "Budget planning",
    ],
  },
  {
    icon: Palette,
    title: "Full Interior Design",
    description:
      "Complete design service from concept to completion. We handle every detail, creating cohesive, beautiful spaces that exceed expectations.",
    features: [
      "Concept development",
      "3D renderings & floor plans",
      "Custom furniture selection",
      "Project management",
      "Styling & installation",
    ],
  },
  {
    icon: Hammer,
    title: "Renovation & Remodeling",
    description:
      "Transform existing spaces with thoughtful renovations. We coordinate with contractors and manage the entire process for seamless execution.",
    features: [
      "Architectural planning",
      "Contractor coordination",
      "Material sourcing",
      "Construction oversight",
      "Quality assurance",
    ],
  },
  {
    icon: Sparkles,
    title: "Styling & Finishing",
    description:
      "Perfect the final touches with our styling service. We curate art, accessories, and decor to bring personality and polish to your space.",
    features: [
      "Art & accessory selection",
      "Custom window treatments",
      "Lighting design",
      "Final styling session",
    ],
  },
];

const processSteps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We begin by understanding your vision, lifestyle, and aspirations for the space.",
  },
  {
    number: "02",
    title: "Concept",
    description:
      "Our team develops a comprehensive design concept with mood boards and renderings.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "We refine the design, select materials, and create detailed plans and specifications.",
  },
  {
    number: "04",
    title: "Execution",
    description:
      "Our team manages every detail of implementation, coordinating with contractors.",
  },
  {
    number: "05",
    title: "Reveal",
    description:
      "We style and perfect the final details before presenting your completed space.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function ServicesPage() {
  return (
    <div className="pt-32 pb-24 overflow-hidden">
      <section className="px-8 mb-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4"
          >
            What We Offer
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease }}
            className="font-heading text-6xl md:text-7xl text-studio-black mb-6"
          >
            Our <span className="italic">Services</span>
          </motion.h1>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-24 h-[1px] bg-gold mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="font-body text-lg text-gray-500"
          >
            Comprehensive interior design solutions tailored to your unique
            needs
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 60, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2, ease }}
              viewport={{ once: true, margin: "-80px" }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-2xl transition-shadow duration-500 group"
            >
              <motion.div
                whileHover={{ rotate: 5, scale: 1.05 }}
                className="w-16 h-16 bg-beige rounded-full flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-500"
              >
                <service.icon
                  className="text-gold group-hover:text-white transition-colors duration-500"
                  size={28}
                />
              </motion.div>
              <h3 className="font-heading text-3xl text-studio-black mb-4">
                {service.title}
              </h3>
              <p className="font-body text-gray-500 mb-6 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, fi) => (
                  <motion.li
                    key={feature}
                    initial={{ opacity: 0, x: -15 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + fi * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3 font-body text-gray-600"
                  >
                    <Check className="text-gold flex-shrink-0" size={18} />
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 text-gold hover:text-gold-hover font-body font-medium transition-all duration-300 text-sm tracking-wider uppercase group/link"
              >
                Get in Touch
                <ArrowRight
                  size={16}
                  className="transition-transform duration-300 group-hover/link:translate-x-1"
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-white py-32">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              viewport={{ once: true, margin: "-80px" }}
              className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4"
            >
              How We Work
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease }}
              viewport={{ once: true, margin: "-80px" }}
              className="font-heading text-5xl md:text-6xl text-studio-black mb-4"
            >
              Our <span className="italic">Process</span>
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              viewport={{ once: true, margin: "-80px" }}
              className="w-24 h-[1px] bg-gold mx-auto"
            />
          </div>

          <div className="space-y-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease }}
                viewport={{ once: true, margin: "-60px" }}
                className="flex flex-col md:flex-row items-start gap-6 group"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className="flex-shrink-0"
                >
                  <div className="w-20 h-20 rounded-full bg-beige flex items-center justify-center group-hover:bg-gold transition-colors duration-500">
                    <span className="font-heading text-2xl text-gold group-hover:text-white transition-colors duration-500">
                      {step.number}
                    </span>
                  </div>
                </motion.div>
                <div className="flex-1 bg-cream rounded-2xl p-8 group-hover:shadow-lg transition-shadow duration-500">
                  <h3 className="font-heading text-2xl text-studio-black mb-3">
                    {step.title}
                  </h3>
                  <p className="font-body text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-32 px-8">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center bg-gradient-to-br from-beige to-warm-beige rounded-3xl p-16 shadow-2xl"
        >
          <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">
            Start Your Journey
          </p>
          <h2 className="font-heading text-5xl md:text-6xl text-studio-black mb-6">
            Ready to <span className="italic">Begin?</span>
          </h2>
          <p className="font-body text-lg text-gray-600 mb-10 max-w-xl mx-auto">
            Let's create something beautiful together. Schedule a consultation
            to discuss your project.
          </p>
          <Link to="/contact">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-10 py-4 bg-studio-black text-white rounded-full hover:bg-gold transition-all duration-500 font-body font-medium shadow-lg"
            >
              Get Started
              <ArrowRight size={20} />
            </motion.span>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
