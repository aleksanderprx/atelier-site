import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

type ProjectCategory = "Residential" | "Commercial" | "Hospitality";
type FilterCategory = "All" | ProjectCategory;

interface Project {
  id: number;
  title: string;
  location: string;
  category: ProjectCategory;
  image: string;
}

const projects: Project[] = [
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
    title: "Luxury Hotel Lobby",
    location: "Manhattan, NY",
    category: "Hospitality",
    image:
      "https://images.unsplash.com/photo-1744782996368-dc5b7e697f4c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBob3RlbCUyMGxvYmJ5JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzcxMjM1NDU4fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    title: "Serene Sanctuary",
    location: "Hamptons, NY",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1765862835319-18fb6f8caff6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsaXN0JTIwYmVkcm9vbSUyMGRlc2lnbiUyMG5ldXRyYWx8ZW58MXx8fHwxNzcxMjk1NTcwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    title: "Modern Restaurant",
    location: "SoHo, NY",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1669131196140-49591336b13e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjByZXN0YXVyYW50JTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzcxMjk1NjIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 5,
    title: "Contemporary Kitchen",
    location: "Manhattan, NY",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1560185127-2d06c6d08d3d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBraXRjaGVuJTIwaW50ZXJpb3IlMjBiZWlnZXxlbnwxfHx8fDE3NzEyOTU1NzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 6,
    title: "Executive Office Suite",
    location: "Midtown, NY",
    category: "Commercial",
    image:
      "https://images.unsplash.com/photo-1651602855717-9f79c72893cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwb2ZmaWNlJTIwaW50ZXJpb3IlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzcxMjk1NjIwfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 7,
    title: "Cozy Urban Apartment",
    location: "Chelsea, NY",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1658893136904-63914a6b372c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3p5JTIwYXBhcnRtZW50JTIwbGl2aW5nJTIwcm9vbXxlbnwxfHx8fDE3NzEyOTU2MjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 8,
    title: "Boutique Hotel Suite",
    location: "Brooklyn, NY",
    category: "Hospitality",
    image:
      "https://images.unsplash.com/photo-1709630998478-7c310df16bc0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxib3V0aXF1ZSUyMGhvdGVsJTIwcm9vbSUyMGRlc2lnbnxlbnwxfHx8fDE3NzEyOTU2MjF8MA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 9,
    title: "Marble Spa Bathroom",
    location: "Upper East Side, NY",
    category: "Residential",
    image:
      "https://images.unsplash.com/photo-1750036015902-c6f5ebca924e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBiYXRocm9vbSUyMGludGVyaW9yJTIwbWFyYmxlfGVufDF8fHx8MTc3MTI5NTYyMXww&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

const ease = [0.22, 1, 0.36, 1] as const;

export function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("All");

  const categories: FilterCategory[] = [
    "All",
    "Residential",
    "Commercial",
    "Hospitality",
  ];

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="pt-32 pb-24 px-8 min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="font-body text-sm tracking-[0.3em] uppercase text-gold mb-4"
          >
            Our Work
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease }}
            className="font-heading text-6xl md:text-7xl text-studio-black mb-6"
          >
            Our Portfolio
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
            className="font-body text-lg text-gray-500 max-w-2xl mx-auto"
          >
            Explore our collection of thoughtfully designed spaces that blend
            timeless elegance with modern functionality
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className={`px-8 py-3 rounded-full font-body text-sm tracking-wider uppercase font-medium transition-all duration-500 ${
                activeCategory === category
                  ? "bg-gold text-white shadow-lg"
                  : "bg-white text-studio-black hover:bg-beige shadow-md"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease }}
          >
            <ResponsiveMasonry
              columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
            >
              <Masonry gutter="24px">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 50, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{
                      duration: 0.7,
                      delay: Math.min(index * 0.12, 0.7),
                      ease,
                    }}
                    whileHover={{ y: -6 }}
                    className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer bg-white"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        loading="lazy"
                        className="w-full h-auto object-cover transition-transform duration-[1s] ease-out group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700" />
                      <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-all duration-700 ease-out">
                        <span className="inline-block px-4 py-1 bg-gold/90 text-white text-xs font-body tracking-wider uppercase rounded-full mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                          {project.category}
                        </span>
                        <h3 className="font-heading text-2xl text-white mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150">
                          {project.title}
                        </h3>
                        <p className="font-body text-white/70 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                          {project.location}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </Masonry>
            </ResponsiveMasonry>
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-24"
          >
            <p className="font-body text-xl text-gray-500">
              No projects found in this category.
            </p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
