import { motion } from "motion/react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center px-8 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease }}
        >
          <motion.h1
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2, ease }}
            className="font-heading text-[12rem] md:text-[16rem] text-gold leading-none mb-2"
          >
            404
          </motion.h1>
          <h2 className="font-heading text-4xl md:text-5xl text-studio-black mb-6">
            Page Not <span className="italic">Found</span>
          </h2>
          <p className="font-body text-lg text-gray-500 mb-12">
            The page you're looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <motion.span
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-3 px-10 py-4 bg-studio-black text-white rounded-full hover:bg-gold transition-all duration-500 font-body font-medium shadow-lg"
            >
              Back to Home
              <ArrowRight size={20} />
            </motion.span>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
