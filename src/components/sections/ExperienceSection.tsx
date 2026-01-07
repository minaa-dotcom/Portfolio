import { motion } from "framer-motion";
import { AnimatedSection } from "../AnimatedSection";
import { SectionHeading } from "../SectionHeading";
import { Briefcase, GraduationCap, Calendar } from "lucide-react";

const experiences = [
  {
    type: "work",
    title: "Software Development Intern",
    organization: "Tech Company Inc.",
    period: "Jun 2024 - Present",
    description:
      "Working on full-stack web applications using React and Node.js. Collaborated with cross-functional teams to deliver features on time.",
    highlights: ["React", "Node.js", "Agile"],
  },
  {
    type: "education",
    title: "Bachelor of Science in Computer Science",
    organization: "University Name",
    period: "Sep 2021 - May 2025",
    description:
      "Pursuing a degree in Computer Science with a focus on software engineering and web technologies. GPA: 3.8/4.0",
    highlights: ["Data Structures", "Algorithms", "Web Development"],
  },
  {
    type: "work",
    title: "Freelance Web Developer",
    organization: "Self-employed",
    period: "Jan 2023 - Jun 2024",
    description:
      "Developed and maintained websites for small businesses. Focused on responsive design and performance optimization.",
    highlights: ["WordPress", "JavaScript", "SEO"],
  },
  {
    type: "education",
    title: "Full-Stack Web Development Bootcamp",
    organization: "Coding Academy",
    period: "Jun 2022 - Sep 2022",
    description:
      "Intensive 12-week program covering modern web development technologies and best practices.",
    highlights: ["MERN Stack", "REST APIs", "Deployment"],
  },
];

export const ExperienceSection = () => {
  return (
    <section id="experience" className="py-20 lg:py-32 relative bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Experience & Education"
          subtitle="My professional journey and academic background"
        />

        <div className="max-w-3xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-accent to-primary/20 hidden md:block" />

            {experiences.map((item, index) => (
              <AnimatedSection
                key={`${item.title}-${index}`}
                delay={index * 0.15}
                direction={index % 2 === 0 ? "left" : "right"}
              >
                <motion.div
                  whileHover={{ x: 5 }}
                  className="relative pl-0 md:pl-20 pb-12 last:pb-0"
                >
                  {/* Timeline dot */}
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className="absolute left-4 top-0 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center glow hidden md:flex"
                  >
                    {item.type === "work" ? (
                      <Briefcase className="w-4 h-4 text-primary-foreground" />
                    ) : (
                      <GraduationCap className="w-4 h-4 text-primary-foreground" />
                    )}
                  </motion.div>

                  {/* Card */}
                  <div className="glass p-6 rounded-xl hover:glow-accent transition-shadow">
                    {/* Mobile icon */}
                    <div className="flex items-center gap-3 mb-4 md:hidden">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                        {item.type === "work" ? (
                          <Briefcase className="w-5 h-5 text-primary-foreground" />
                        ) : (
                          <GraduationCap className="w-5 h-5 text-primary-foreground" />
                        )}
                      </div>
                      <span className="text-xs px-2 py-1 rounded-full bg-secondary text-muted-foreground capitalize">
                        {item.type}
                      </span>
                    </div>

                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                      <h3 className="text-lg font-bold text-foreground">
                        {item.title}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="w-4 h-4" />
                        {item.period}
                      </span>
                    </div>

                    {/* Organization */}
                    <p className="text-primary font-medium mb-3">
                      {item.organization}
                    </p>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm mb-4">
                      {item.description}
                    </p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {item.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
