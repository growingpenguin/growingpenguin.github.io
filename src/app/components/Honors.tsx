import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Trophy, Award, Star } from "lucide-react";

export function Honors() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const awards = [
    {
      title: "Top Academic Achievement Scholarship",
      detail: "90% tuition · Sungshin, 2024",
      icon: Trophy,
    },
    {
      title: "Undergraduate Excellent Paper Award",
      detail: "KICS Summer Conference, 2024",
      icon: Award,
    },
    {
      title: "Academic Excellence I Scholarship",
      detail: "80% tuition · Sungshin, 2023",
      icon: Trophy,
    },
    {
      title: "UROP Scholarship",
      detail: "Undergraduate Research, 2023",
      icon: Star,
    },
    {
      title: "Software Development Competition",
      detail: "Winner, 2023",
      icon: Award,
    },
  ];

  return (
    <section id="honors" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4" style={{ fontFamily: 'var(--font-headline)' }}>
              Honors & Awards
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Recognition for academic excellence and research contributions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {awards.map((award, index) => {
              const IconComponent = award.icon;
              return (
                <motion.div
                  key={award.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-foreground/10 hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="text-accent" size={24} />
                    </div>

                    <div>
                      <h3 className="text-lg mb-1" style={{ fontFamily: 'var(--font-headline)' }}>
                        {award.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">{award.detail}</p>
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
