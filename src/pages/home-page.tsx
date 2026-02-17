import { motion, useScroll, useTransform } from "motion/react";
import { Link } from "react-router";
import { ArrowRight } from "lucide-react";
import { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const heroImageUrl =
  "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjBpbnRlcmlvciUyMGRlc2lnbiUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzcxMjIyMzM0fDA&ixlib=rb-4.1.0&q=80&w=1920";

const featuredProjects = [
  {
    id: 1,
    title: "Modern Minimalist Loft",
    location: "Brooklyn, NY",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1639663742190-1b3dba2eebcf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBpbnRlcmlvciUyMGxpdmluZyUyMHJvb218ZW58MXx8fHwxNzcxMjIyMzM0fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    title: "Serene Sanctuary",
    location: "Hamptons, NY",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1765862835319-18fb6f8caff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmVkcm9vbSUyMGRlc2lnbiUyMG5ldXRyYWx8ZW58MXx8fHwxNzcxMjk1NTcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    title: "Contemporary Kitchen",
    location: "Manhattan, NY",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1560185127-2d06c6d08d3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3IlMjBiZWlnZXxlbnwxfHx8fDE3NzEyOTU1NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const testimonials = [
  {
    id: 1,
    text: "Atelier transformed our home into a sanctuary. Their attention to detail and understanding of our lifestyle created a space that truly reflects who we are.",
    author: "Sarah & Michael Chen",
    project: "Upper East Side Residence",
  },
  {
    id: 2,
    text: "Working with Atelier was an absolute pleasure. They seamlessly blended our vision with their expertise, resulting in a timeless design we'll cherish forever.",
    author: "Jennifer Martinez",
    project: "Brooklyn Townhouse",
  },
  {
    id: 3,
    text: "The team's professionalism and creativity exceeded our expectations. Every corner of our space tells a story, just as they promised.",
    author: "David & Emma Wilson",
    project: "Hamptons Beach House",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function HomePage() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const philosophyRef = useRef<HTMLElement>(null);
  const { scrollYProgress: philProgress } = useScroll({
    target: philosophyRef,
    offset: ["start end", "end start"],
  });
  const philImgY = useTransform(philProgress, [0, 1], [80, -80]);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
    fade: true,
    cssEase: "cubic-bezier(0.22, 1, 0.36, 1)",
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section with parallax */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroY, scale: heroScale }} className="absolute inset-0">
          <motion.div
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease }}
            className="w-full h-full"
          >
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url('${heroImageUrl}')`,
              }}
            />
          </motion.div>
        </motion.div>

        <motion.div style={{ opacity: heroOpacity }} className="relative z-10 text-center text-white px-8 max-w-5xl mx-auto">
          <div className="overflow-hidden mb-4">
            <motion.p
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2, ease }}
              className="font-body text-sm tracking-[0.3em] uppercase text-white/70 mb-6"
            >
              Interior Design Studio
            </motion.p>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease }}
              className="font-heading text-6xl md:text-8xl lg:text-9xl mb-8 leading-[0.95] tracking-tight"
            >
              We Design Spaces
              <br />
              <span className="italic">That Tell Your Story</span>
            </motion.h1>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 0.8, y: 0 }}
            transition={{ duration: 1, delay: 0.8, ease }}
            className="font-body text-lg md:text-xl mb-14 max-w-2xl mx-auto font-light"
          >
            Timeless interiors crafted with passion and precision
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease }}
          >
            <Link to="/projects">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-3 px-10 py-4 bg-white text-studio-black rounded-full hover:bg-gold hover:text-white transition-all duration-500 font-body font-medium shadow-lg"
              >
                Explore Our Work
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <ArrowRight size={20} />
                </motion.span>
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="w-[1px] h-16 bg-gradient-to-b from-transparent via-white/60 to-transparent"
          />
        </motion.div>
      </section>

      {/* Featured Projects */}
      <section className="py-32 px-8 max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4"
          >
            Portfolio
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-heading text-5xl md:text-7xl text-studio-black mb-6"
          >
            Featured Projects
          </motion.h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
            viewport={{ once: true, margin: "-100px" }}
            className="w-24 h-[1px] bg-gold mx-auto mb-6"
          />
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-body text-lg text-gray-500 max-w-2xl mx-auto"
          >
            A curated selection of our most transformative interior design projects
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredProjects.map((project, index) => (
            <Link to="/projects" key={project.id}>
              <motion.div
                initial={{ opacity: 0, y: 70, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.9, delay: 0.15 + index * 0.2, ease }}
                viewport={{ once: true, margin: "-80px" }}
                whileHover={{ y: -8 }}
                className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer"
              >
                <div className="relative h-[450px] overflow-hidden">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-6 group-hover:translate-y-0 transition-all duration-700 ease-out">
                    <span className="inline-block px-4 py-1 bg-gold/90 text-white text-xs font-body tracking-wider uppercase rounded-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                      {project.category}
                    </span>
                    <h3 className="font-heading text-3xl text-white mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                      {project.title}
                    </h3>
                    <p className="font-body text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                      {project.location}
                    </p>
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link to="/projects">
            <motion.span
              whileHover={{ x: 5 }}
              className="inline-flex items-center gap-3 text-gold hover:text-gold-hover font-body font-medium transition-colors duration-300 text-sm tracking-wider uppercase"
            >
              View All Projects
              <ArrowRight size={16} />
            </motion.span>
          </Link>
        </motion.div>
      </section>

      {/* Philosophy Section with parallax image */}
      <section ref={philosophyRef} className="py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease }}
                viewport={{ once: true, margin: "-80px" }}
                className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4"
              >
                Our Philosophy
              </motion.p>
              <motion.h2
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.15, ease }}
                viewport={{ once: true, margin: "-80px" }}
                className="font-heading text-5xl md:text-6xl text-studio-black mb-10 leading-[1.1]"
              >
                Design Is How
                <br />
                <span className="italic">We Tell Stories</span>
              </motion.h2>
              <div className="space-y-6">
                {[
                  "We believe that exceptional design is not about following trends, but about creating timeless spaces that resonate with the people who inhabit them.",
                  "Every project begins with understanding your story, your aspirations, and your lifestyle. We then craft environments that are not only beautiful but deeply personal.",
                  "Our approach combines meticulous attention to detail with a holistic vision, ensuring every element harmonizes to create an atmosphere of refined elegance.",
                ].map((text, i) => (
                  <motion.p
                    key={i}
                    initial={{ opacity: 0, y: 25 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.35 + i * 0.2, ease }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="font-body text-lg text-gray-600 leading-relaxed"
                  >
                    {text}
                  </motion.p>
                ))}
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, x: 80, scale: 0.95 }}
              whileInView={{ opacity: 1, x: 0, scale: 1 }}
              transition={{ duration: 1.2, delay: 0.4, ease }}
              viewport={{ once: true, margin: "-80px" }}
              className="relative h-[650px] rounded-2xl overflow-hidden"
            >
              <motion.img
                style={{ y: philImgY }}
                src="https://images.unsplash.com/photo-1604880901797-a39106914ac2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmlvciUyMGRlc2lnbiUyMHRlYW0lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzEyOTU1NzF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Our design team at work"
                loading="lazy"
                className="w-full h-[130%] object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 px-8 bg-beige overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-20">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease }}
              viewport={{ once: true, margin: "-80px" }}
              className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4"
            >
              Testimonials
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease }}
              viewport={{ once: true, margin: "-80px" }}
              className="font-heading text-5xl md:text-6xl text-studio-black mb-6"
            >
              Client Stories
            </motion.h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.35 }}
              viewport={{ once: true, margin: "-80px" }}
              className="w-24 h-[1px] bg-gold mx-auto"
            />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease }}
            viewport={{ once: true, margin: "-50px" }}
          >
            <Slider {...sliderSettings}>
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="px-4">
                  <div className="bg-white rounded-3xl p-14 shadow-lg">
                    <p className="font-heading text-2xl md:text-3xl text-studio-black mb-10 italic leading-relaxed">
                      &ldquo;{testimonial.text}&rdquo;
                    </p>
                    <div className="flex items-center gap-4">
                      <div className="w-14 h-14 rounded-full bg-gold flex items-center justify-center">
                        <span className="font-body font-medium text-white text-lg">
                          {testimonial.author.charAt(0)}
                        </span>
                      </div>
                      <div>
                        <p className="font-body font-medium text-studio-black">
                          {testimonial.author}
                        </p>
                        <p className="font-body text-sm text-gray-500">
                          {testimonial.project}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
