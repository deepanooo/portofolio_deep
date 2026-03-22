import { Brain, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Brain,
    title: "Product Thinking",
    description:
      "Designing user-centered solutions with a strong focus on business goals and real user needs.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Crafting intuitive and engaging interfaces that deliver seamless and meaningful user journeys.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Working closely with cross-functional teams to turn ideas into impactful digital products.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "Combining creativity and logical thinking to build innovative solutions that solve real problems.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      
      {/* ⭐ STAR BACKGROUND */}
      <div className="stars"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT */}
          <div className="space-y-8">
            
            {/* HEADER */}
            <div className="text-center lg:text-left">
              
              {/* 🔥 BADGE (UPGRADE) */}
              <div className="flex justify-center lg:justify-start mb-4">
                <span className="px-8 py-2 text-sm font-semibold tracking-widest uppercase 
                text-cyan-400 bg-cyan-400/10 rounded-full border border-cyan-400/20 
                backdrop-blur-sm shadow-[0_0_20px_rgba(34,211,238,0.2)]">
                  About Me
                </span>
              </div>

              {/* TITLE */}
              <h2 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in animation-delay-100 max-w-2xl mx-auto lg:mx-0">
                <span className="highlight">Designing experiences</span>{" "}
                <span className="font-serif italic font-normal text-white">
                  that people love to use.
                </span>
              </h2>
            </div>

            {/* PARAGRAPH */}
            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200 text-center lg:text-left">
              <p>
                I'm a passionate UI/UX and graphic designer focused on 
                creating intuitive and impactful digital experiences. My journey
                started from a strong interest in visual design, which grew into a deeper understanding of how users interact with digital products and how design can solve real problems.
              </p>
              <p>
                As an Information Systems student, I combine design, technology, and business insight to create user-centered solutions that are not only visually appealing but also functional and effective. I have a strong interest in product management, which shapes the way I think about aligning user needs with business goals.
              </p>
              <p>
                I specialize in crafting digital interfaces and visual designs that balance aesthetics and usability. As the founder of Dengankita, I enjoy building and exploring ideas, turning them into meaningful digital products that deliver real value. I’m constantly learning, improving my skills, and exploring new ways to create better user experiences.
              </p>
            </div>

            {/* QUOTE (UPGRADE GLASS) */}
            <div className="rounded-2xl p-6 animate-fade-in animation-delay-300
              bg-white/5 backdrop-blur-md border border-white/10 
              shadow-[0_0_30px_rgba(255,255,255,0.05)]">
              
              <p className="text-lg font-medium italic text-foreground">
                "My mission is to create meaningful digital experiences that users enjoy and that deliver real value for businesses, by combining intuitive design with clear purpose."
              </p>
            </div>

          </div>

          {/* RIGHT - CARDS */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl animate-fade-in 
                bg-white/5 backdrop-blur-md border border-white/10 
                hover:border-cyan-400/30 transition-all duration-300
                hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 
                flex items-center justify-center mb-4 
                hover:bg-primary/20 transition">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};