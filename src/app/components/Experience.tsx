import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Briefcase, GraduationCap, MapPin, CalendarDays } from "lucide-react";
import { FloatingSticker } from "./FloatingSticker";

interface Role {
  org: string;
  title: string;
  location: string;
  period: string;
  icon: typeof Briefcase;
  bullets: string[];
}

const roles: Role[] = [
  {
    org: "MKS Instruments",
    title: "SW Electronics Graduate Intern",
    location: "South Korea",
    period: "July 2026 – August 2026",
    icon: Briefcase,
    bullets: [
      "Rebuilt a fragmented codebase into unified Python modules behind a single GUI, delivering an on-site pipeline built for an air-gapped semiconductor-manufacturing environment that collects encrypted generator data offline, decrypts API-retrieved payloads, and parses them into structured logs.",
      "Extended it with an AWS monitoring pipeline (Amazon Managed Grafana) for real-time log streaming and visualization.",
      "Managed version control with a Gitflow branching workflow and automated builds and deployment through a Jenkins CI/CD pipeline.",
      "Delivered an internal seminar on AI agents and LLM hallucination to the team.",
    ],
  },
  {
    org: "Dartmouth College",
    title: "Graduate Teaching Assistant",
    location: "New Hampshire, United States",
    period: "September 2025 – June 2026",
    icon: GraduationCap,
    bullets: [
      "Artificial Intelligence · September 2025 – November 2025",
      "Advanced NLP · January 2026 – March 2026",
      "Machine Learning and Statistical Data Analysis · April 2026 – June 2026",
    ],
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6 relative overflow-hidden" ref={ref}>
      <FloatingSticker emoji="🛠️" initialX="7%" initialY="18%" duration={5.5} />
      <FloatingSticker emoji="🎓" initialX="93%" initialY="55%" duration={6} />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4" style={{ fontFamily: 'var(--font-headline)' }}>
              Work Experience
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Where I've been on the clock — building in industry and teaching at Dartmouth.
            </p>
          </div>

          <div className="space-y-6">
            {roles.map((role, index) => {
              const IconComponent = role.icon;
              return (
                <motion.div
                  key={role.org + role.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="bg-card rounded-2xl p-8 border border-foreground/10 hover:border-accent/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                    <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <IconComponent className="text-accent" size={24} />
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mb-1">
                        <h3 className="text-2xl" style={{ fontFamily: 'var(--font-headline)' }}>
                          {role.org}
                        </h3>
                        <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <CalendarDays size={14} />
                          <span>{role.period}</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mb-5">
                        <span className="text-accent">{role.title}</span>
                        <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                          <MapPin size={14} />
                          {role.location}
                        </span>
                      </div>

                      <ul className="space-y-3 text-foreground/80">
                        {role.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start">
                            <span className="text-accent mr-3 mt-1 flex-shrink-0">•</span>
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
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
