import { motion, useScroll, useTransform } from "motion/react";
import { Award, Heart, Lightbulb, Users } from "lucide-react";
import { useRef } from "react";

const teamMembers = [
  {
    id: 1,
    name: "Sophia Chen",
    role: "Founder & Creative Director",
    bio: "With over 15 years of experience in luxury interior design, Sophia brings a refined aesthetic and meticulous attention to detail to every project.",
    image:
      "https://images.unsplash.com/photo-1771072428050-1492abb58f4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGRlc2lnbmVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcxMjc4MjQzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    name: "Marcus Williams",
    role: "Senior Designer",
    bio: "Marcus specializes in creating harmonious spaces that blend contemporary design with timeless elegance. His architectural background informs every detail.",
    image:
      "https://images.unsplash.com/photo-1746899603348-ab9afd71e16d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBhcmNoaXRlY3QlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzEyOTU2NjV8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Lead Designer",
    bio: "Elena's passion for sustainable design and innovative materials helps create spaces that are both beautiful and environmentally conscious.",
    image:
      "https://images.unsplash.com/photo-1697095098675-1d02496ef86a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHdvbWFuJTIwZGVzaWduZXJ8ZW58MXx8fHwxNzcxMjk1NjY1fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const values = [
  {
    icon: Heart,
    title: "Passion",
    description:
      "We pour our hearts into every project, treating each space as if it were our own.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Constantly exploring new materials, techniques, and ideas to push design boundaries.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working closely with our clients to bring their vision to life through thoughtful partnership.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "Committed to delivering exceptional quality and attention to detail in every aspect.",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function AboutPage() {
  const bannerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: bannerRef,
    offset: ["start start", "end start"],
  });
  const bannerY = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const bannerScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  return (
    <div className="overflow-hidden">
      <section ref={bannerRef} className="relative h-[600px] mb-32 overflow-hidden">
        <motion.div style={{ y: bannerY, scale: bannerScale }} className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.15 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease }}
            className="w-full h-full"
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('https://images.unsplash.com/photo-1758873272921-4b64aef3c32b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcxMjk1NjY2fDA&ixlib=rb-4.1.0&q=80&w=1080')`,
              }}
            />
          </motion.div>
        </motion.div>
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white px-8">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-body text-sm tracking-[0.3em] uppercase text-white/70 mb-6"
            >
              About Us
            </motion.p>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.3, ease }}
                className="font-heading text-6xl md:text-8xl mb-6"
              >
                Meet Our <span className="italic">Team</span>
              </motion.h1>
            </div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="font-body text-lg md:text-xl max-w-2xl mx-auto font-light"
            >
              A collective of passionate designers dedicated to creating spaces
              that inspire
            </motion.p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-8 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.15, ease }}
              viewport={{ once: true, margin: "-50px" }}
              whileHover={{ y: -8 }}
              className="bg-white rounded-2xl overflow-hidden shadow-lg group"
            >
              <div className="relative h-[420px] overflow-hidden">
                <img
                  src={member.image}
                  alt={`${member.name} - ${member.role}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </div>
              <div className="p-8">
                <h3 className="font-heading text-3xl text-studio-black mb-2">
                  {member.name}
                </h3>
                <p className="font-body text-gold font-medium mb-4 text-sm tracking-wider uppercase">
                  {member.role}
                </p>
                <p className="font-body text-gray-500 leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <section className="bg-white py-32">
        <div className="max-w-4xl mx-auto px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            viewport={{ once: true }}
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">
              Since 2010
            </p>
            <h2 className="font-heading text-5xl md:text-6xl text-studio-black mb-4">
              Our <span className="italic">Story</span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-24 h-[1px] bg-gold mx-auto mb-10"
            />
            <div className="space-y-6">
              {[
                "Founded in 2010, Atelier emerged from a simple belief: that the spaces we inhabit should be more than just aesthetically pleasing\u2014they should tell our stories, reflect our values, and enhance our daily lives.",
                "What began as a small studio in Brooklyn has evolved into a full-service design firm, trusted by discerning clients across New York and beyond. Our portfolio spans elegant residences, sophisticated commercial spaces, and boutique hospitality venues.",
                "Every project we undertake is approached with fresh eyes and an open heart, ensuring that the final design is as unique as the people who will live, work, and gather within it.",
              ].map((text, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.2 + i * 0.15 }}
                  viewport={{ once: true }}
                  className="font-body text-lg text-gray-600 leading-relaxed"
                >
                  {text}
                </motion.p>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-32 px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4">
              What We Stand For
            </p>
            <h2 className="font-heading text-5xl md:text-6xl text-studio-black mb-4">
              Our <span className="italic">Values</span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="w-24 h-[1px] bg-gold mx-auto"
            />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: index * 0.1, ease }}
                viewport={{ once: true }}
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-shadow duration-500 group"
              >
                <motion.div
                  whileHover={{ rotate: 5, scale: 1.05 }}
                  className="w-16 h-16 bg-beige rounded-full flex items-center justify-center mb-6 group-hover:bg-gold transition-colors duration-500"
                >
                  <value.icon className="text-gold group-hover:text-white transition-colors duration-500" size={28} />
                </motion.div>
                <h3 className="font-heading text-2xl text-studio-black mb-4">
                  {value.title}
                </h3>
                <p className="font-body text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
