import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Web & App Design", "Graphic Design", "Video", "Art"];

const projects = [
  {
    title: "Dengan Kita",
    category: "Web & App Design",
    image: "/projects/project1.jpeg",
    tags: ["Figma", "UI/UX"],
    role: "UI/UX Designer",
    description:
      "DenganKita. is a simple event ticketing app to find, book, and manage event tickets easily.",
    link: "https://www.figma.com/design/EuF987yB2as3JAC2LnFHW7/DenganKita?node-id=998-647&t=3i6bMWQukEKjktkp-1",
  },
  {
    title: "International Womans Day",
    category: "Graphic Design",
    image: "/projects/project2.png",
    tags: ["Affinity", "Figma"],
    role: "Graphic Designer",
    description:
      "This poster celebrates International Women’s Day on March 8th. It highlights the strength, courage, and diversity of women, using purple as a symbol of equality and dignity. The message encourages people to support women’s empowerment and gender equality.",
    link: "https://docs.google.com/document/d/1dEDidxx43yuzYPyLay1f6ordGUC6q8dI1ScveGCT0ng/edit?usp=sharing",
  },
  {
    title: "Promo Video",
    category: "Video",
    image: "/projects/project3.png",
    tags: ["CapCut"],
    role: "Video Editor",
    description:
      "Producing engaging promotional content to capture attention and drive engagement.",
    link: "https://your-link.com",
  },
  {
    title: "Gamber",
    category: "Art",
    image: "/projects/project4.jpg",
    tags: ["Photoshop"],
    role: "Visual Designer",
    description:
      "This image shows three comic-style characters: a confident female hero in the center, a strong serious man on the right, and a slouched figure on the left, highlighting contrast between weakness and strength.",
    link: "https://docs.google.com/document/d/1dEDidxx43yuzYPyLay1f6ordGUC6q8dI1ScveGCT0ng/edit?usp=sharing",
  },
];

export const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animated-gradient-text">
           Featured Project
          </h2>
          <p className="text-muted-foreground mt-3">
            Crafting impactful digital experiences through design and creativity.
          </p>
        </div>

        {/* FILTER */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm transition-all duration-300 backdrop-blur ${
                activeCategory === cat
                  ? "bg-gradient-to-r from-[#00F5D4] to-[#22D3EE] text-black shadow-lg scale-105"
                  : "bg-white/5 hover:bg-white/10 text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}
        <motion.div
          layout="position"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.08,
              },
            },
          }}
          className="grid md:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.a
                key={project.title}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                layout
                variants={{
                  hidden: { opacity: 0, y: 60, scale: 0.95 },
                  visible: { opacity: 1, y: 0, scale: 1 },
                }}
                initial="hidden"
                animate="visible"
                exit={{ opacity: 0, y: 40, scale: 0.95 }}
                transition={{
                  duration: 0.6,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >

                <div
                  className="relative rounded-2xl overflow-hidden bg-white/5 backdrop-blur border border-white/10 
                  hover:border-[#00FFCC]/40 
                  hover:shadow-[0_0_40px_#00FFCC30] 
                  transition-all duration-500 cursor-pointer will-change-transform"
                >

                  {/* Glow */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl bg-[#00FFCC]/10" />

                  {/* IMAGE */}
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover 
                      transition-all duration-1000 
                      ease-[cubic-bezier(0.22,1,0.36,1)] 
                      group-hover:scale-[1.08]"
                    />

                    {/* gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                    {/* hover overlay */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition duration-300" />

                    {/* description */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 
                      translate-y-8 opacity-0 
                      group-hover:translate-y-0 group-hover:opacity-100 
                      transition-all duration-700 
                      ease-[cubic-bezier(0.22,1,0.36,1)]">
                      <p className="text-sm text-white/80">
                        {project.description}
                      </p>
                    </div>

                    {/* icon */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                      <div className="p-4 bg-[#00FFCC] rounded-full text-black shadow-xl 
                        group-hover:scale-110 
                        transition-all duration-500 
                        ease-[cubic-bezier(0.22,1,0.36,1)]">
                        <ArrowUpRight />
                      </div>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6 relative">
                    <h3 className="text-xl font-semibold group-hover:text-[#00FFCC] transition">
                      {project.title}
                    </h3>

                    <p className="text-xs text-white/50 mt-1">
                      {project.role}
                    </p>

                    <div className="flex gap-2 mt-3 flex-wrap">
                      {project.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="text-xs px-3 py-1 bg-white/10 rounded-full 
                          group-hover:bg-[#00FFCC]/10 group-hover:text-[#00FFCC] transition"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* BUTTON */}
        <div className="text-center mt-12">
          <AnimatedBorderButton>
            Explore Full Portfolio
          </AnimatedBorderButton>
        </div>

      </div>
    </section>
  );
};
