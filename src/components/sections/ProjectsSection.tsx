import { motion } from "framer-motion";
import { AnimatedSection } from "../AnimatedSection";
import { SectionHeading } from "../SectionHeading";
import { ExternalLink, Github, Star } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description:
      "A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration.",
    image: "🛒",
    tech: ["React", "Node.js", "MongoDB", "Stripe"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: "Task Management App",
    description:
      "A collaborative task management application with real-time updates, drag-and-drop functionality, and team features.",
    image: "📋",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "Socket.io"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: "Weather Dashboard",
    description:
      "A beautiful weather dashboard with location-based forecasts, interactive maps, and severe weather alerts.",
    image: "🌤️",
    tech: ["React", "OpenWeather API", "Mapbox", "Chart.js"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  },
  {
    title: "Social Media Analytics",
    description:
      "An analytics dashboard for tracking social media performance with beautiful visualizations and insights.",
    image: "📊",
    tech: ["Vue.js", "D3.js", "Python", "FastAPI"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  },
  {
    title: "AI Chat Assistant",
    description:
      "An intelligent chat assistant powered by GPT with conversation history and context awareness.",
    image: "🤖",
    tech: ["React", "OpenAI API", "Node.js", "Redis"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: "Portfolio Generator",
    description:
      "A tool to generate beautiful developer portfolios from GitHub profiles automatically.",
    image: "💼",
    tech: ["Next.js", "GitHub API", "Tailwind", "Vercel"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: false,
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Featured Projects"
          subtitle="A selection of projects that showcase my skills and passion for development"
        />

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <AnimatedSection key={project.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -10 }}
                className="group relative glass rounded-2xl overflow-hidden h-full flex flex-col"
              >
                {/* Featured badge */}
                {project.featured && (
                  <div className="absolute top-4 right-4 z-10">
                    <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-primary/90 text-primary-foreground text-xs font-medium">
                      <Star className="w-3 h-3 fill-current" />
                      Featured
                    </span>
                  </div>
                )}

                {/* Project image/emoji placeholder */}
                <div className="relative h-48 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center overflow-hidden">
                  <motion.span
                    className="text-6xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {project.image}
                  </motion.span>
                  
                  {/* Hover overlay with links */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    className="absolute inset-0 bg-background/80 backdrop-blur-sm flex items-center justify-center gap-4"
                  >
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="View on GitHub"
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="p-3 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="View live demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                  </motion.div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 flex-1">
                    {project.description}
                  </p>
                  
                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>

        {/* View more link */}
        <AnimatedSection delay={0.5} className="text-center mt-12">
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border-2 border-primary text-foreground font-medium hover:bg-primary/10 transition-colors"
          >
            <Github className="w-5 h-5" />
            View More on GitHub
          </motion.a>
        </AnimatedSection>
      </div>
    </section>
  );
};
