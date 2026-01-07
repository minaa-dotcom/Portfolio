import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatedSection } from "../AnimatedSection";
import { SectionHeading } from "../SectionHeading";

const skillCategories = [
  {
    name: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 95 },
      { name: "JavaScript", level: 90 },
      { name: "HTML/CSS", level: 95 },
    ],
  },
  {
    name: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Python", level: 75 },
      { name: "Express.js", level: 80 },
      { name: "PostgreSQL", level: 75 },
      { name: "MongoDB", level: 70 },
      { name: "REST APIs", level: 85 },
    ],
  },
  {
    name: "Tools",
    skills: [
      { name: "Git & GitHub", level: 90 },
      { name: "VS Code", level: 95 },
      { name: "Docker", level: 65 },
      { name: "Figma", level: 70 },
      { name: "Linux", level: 75 },
      { name: "AWS", level: 60 },
    ],
  },
];

export const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState("Frontend");

  const activeCategory = skillCategories.find((cat) => cat.name === activeTab);

  return (
    <section id="skills" className="py-20 lg:py-32 relative bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="Skills & Technologies"
          subtitle="The tools and technologies I use to bring ideas to life"
        />

        {/* Category Tabs */}
        <AnimatedSection className="flex flex-wrap justify-center gap-2 mb-12">
          {skillCategories.map((category) => (
            <motion.button
              key={category.name}
              onClick={() => setActiveTab(category.name)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-medium transition-all ${
                activeTab === category.name
                  ? "bg-gradient-to-r from-primary to-accent text-primary-foreground glow"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              {category.name}
            </motion.button>
          ))}
        </AnimatedSection>

        {/* Skills Grid */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="grid sm:grid-cols-2 gap-6"
          >
            {activeCategory?.skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-xl group hover:glow-accent transition-shadow"
              >
                <div className="flex justify-between items-center mb-3">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-sm text-primary font-semibold">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

      
      </div>
    </section>
  );
};
