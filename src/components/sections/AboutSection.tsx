import { motion } from "framer-motion";
import { AnimatedSection } from "../AnimatedSection";
import { SectionHeading } from "../SectionHeading";
import { Code2, Coffee, Rocket, Users } from "lucide-react";
import profilePhoto from "@/assets/profile-photo.jpg";

const stats = [
  { icon: Code2, value: "50+", label: "Projects Completed" },
  { icon: Coffee, value: "1000+", label: "Cups of Coffee" },
  { icon: Users, value: "30+", label: "Happy Clients" },
  { icon: Rocket, value: "3+", label: "Years Experience" },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 lg:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          title="About Me"
          subtitle="Get to know me better and discover what drives my passion for development"
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image/Avatar placeholder */}
          <AnimatedSection direction="left" className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Decorative elements */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-2xl blur-2xl opacity-20 animate-pulse" />
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-accent rounded-2xl opacity-50" />
              
              {/* Main image container */}
              <div className="relative aspect-square rounded-2xl overflow-hidden">
                <img 
                  src={profilePhoto} 
                  alt="Profile photo"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </AnimatedSection>

          {/* Content */}
          <AnimatedSection direction="right" className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold">
              Passionate Developer & Creative Problem Solver
            </h3>
            
            <div className="space-y-4 text-muted-foreground">
              <p>
                Hello! I'm a full-stack developer with a passion for creating beautiful, 
                functional, and user-centered digital experiences. With a strong foundation 
                in both frontend and backend technologies, I bring ideas to life through 
                clean code and creative solutions.
              </p>
              <p>
                Currently pursuing my degree in software engineering, I've been fortunate to 
                work on diverse projects ranging from web applications to mobile apps. 
                I believe in continuous learning and staying updated with the latest 
                technologies and best practices.
              </p>
              <p>
                When I'm not coding, you can find me exploring new technologies, 
                contributing to open-source projects, or enjoying a good cup of coffee 
                while reading about the latest tech trends.
              </p>
            </div>

            {/* Quick info */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div>
                <span className="text-sm text-muted-foreground">Location</span>
                <p className="font-medium">Maya, Ethiopia</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Education</span>
                <p className="font-medium">B.S. software engineering</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Email</span>
                <p className="font-medium text-primary">minasegirma40@gmail.com</p>
              </div>
              <div>
                <span className="text-sm text-muted-foreground">Availability</span>
                <p className="font-medium text-green-500">Open to work</p>
              </div>
            </div>
          </AnimatedSection>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 lg:mt-24">
          {stats.map((stat, index) => (
            <AnimatedSection key={stat.label} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -5, scale: 1.02 }}
                className="glass p-6 rounded-xl text-center group"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-lg bg-gradient-to-br from-primary to-accent flex items-center justify-center group-hover:glow transition-shadow">
                  <stat.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-1">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </motion.div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
