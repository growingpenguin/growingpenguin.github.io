import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Newspaper, GraduationCap, Users, Globe } from "lucide-react";
import cookingVideo from "../../imports/what_i_cooked_alone_reel.mp4";

export function Beyond() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const activities = [
    {
      icon: Newspaper,
      title: "Editor-in-Chief",
      org: "Sungshin English Newspaper",
      description: "Led the print-to-digital transition that saved the publication from shutdown.",
    },
    {
      icon: GraduationCap,
      title: "Teaching Assistant",
      org: "Dartmouth College",
      description: "Three quarters in a row: AI, Advanced NLP, ML & Statistics.",
    },
    {
      icon: Users,
      title: "Python Instructor & AI Camp Mentor",
      org: "Naver Connect Foundation",
      description: "Teaching the next generation of ML engineers.",
    },
    {
      icon: Globe,
      title: "Languages & Testing",
      org: "Communication",
      description: "TOEFL 107 · Fluent in English and Korean",
    },
  ];

  return (
    <section id="beyond" className="py-24 px-6 bg-secondary/30" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4" style={{ fontFamily: 'var(--font-headline)' }}>
              Beyond the Code
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Teaching, leading, and occasionally cooking solo.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {activities.map((activity, index) => {
              const IconComponent = activity.icon;
              return (
                <motion.div
                  key={activity.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 border border-foreground/10 hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="text-accent" size={24} />
                    </div>

                    <div>
                      <h3 className="text-xl mb-1" style={{ fontFamily: 'var(--font-headline)' }}>
                        {activity.title}
                      </h3>
                      <div className="text-sm text-accent mb-2">{activity.org}</div>
                      <p className="text-foreground/70">{activity.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Cooking video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-md mx-auto"
          >
            <div className="bg-card rounded-2xl overflow-hidden shadow-xl border-4 border-white">
              <video
                src={cookingVideo}
                controls
                className="w-full"
                poster=""
              >
                Your browser does not support the video tag.
              </video>
              <div className="p-6 bg-accent/5">
                <p className="text-center text-lg text-foreground/80" style={{ fontFamily: 'var(--font-headline)' }}>
                  Sometimes the best models I train are recipes.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
