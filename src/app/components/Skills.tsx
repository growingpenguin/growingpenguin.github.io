import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Code2, Brain, Cloud } from "lucide-react";

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillGroups = [
    {
      icon: Code2,
      title: "Languages",
      skills: ["Python", "C++", "Java", "JavaScript", "SQL", "C#"],
    },
    {
      icon: Brain,
      title: "ML/AI",
      skills: ["PyTorch", "TensorFlow", "scikit-learn", "OpenCV", "LightGBM", "GAMs"],
    },
    {
      icon: Cloud,
      title: "Cloud & Tools",
      skills: ["AWS EC2", "AWS S3", "AWS Lambda", "Git", "Docker", "NVIDIA Isaac Sim", "ROS2"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4" style={{ fontFamily: 'var(--font-headline)' }}>
              Skills & Tools
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              The stack I use to build, train, and ship ML systems.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {skillGroups.map((group, groupIndex) => {
              const IconComponent = group.icon;
              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: groupIndex * 0.15 }}
                >
                  <div className="bg-card rounded-2xl p-6 border border-foreground/10 h-full">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center mb-4">
                      <IconComponent className="text-accent" size={24} />
                    </div>

                    <h3 className="text-xl mb-4 text-accent" style={{ fontFamily: 'var(--font-headline)' }}>
                      {group.title}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {group.skills.map((skill, skillIndex) => (
                        <motion.span
                          key={skill}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ duration: 0.3, delay: groupIndex * 0.15 + skillIndex * 0.05 }}
                          className="px-3 py-1 bg-secondary text-foreground text-sm rounded-full border border-foreground/10"
                        >
                          {skill}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
