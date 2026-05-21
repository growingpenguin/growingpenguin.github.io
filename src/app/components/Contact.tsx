import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { Mail, Linkedin, Github, Phone, MapPin, ArrowRight } from "lucide-react";
import { FloatingSticker } from "./FloatingSticker";

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const contactLinks = [
    {
      icon: Mail,
      label: "Email",
      value: "gyeongbin.ryoo.gr@dartmouth.edu",
      href: "mailto:gyeongbin.ryoo.gr@dartmouth.edu",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "linkedin.com/in/gyeongbin-ryoo",
      href: "https://linkedin.com/in/gyeongbin-ryoo",
    },
    {
      icon: Github,
      label: "GitHub",
      value: "github.com/growingpenguin",
      href: "https://github.com/growingpenguin",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "603-900-1344",
      href: "tel:+16039001344",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Hanover, NH",
      href: null,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-secondary/30 relative overflow-hidden" ref={ref}>
      <FloatingSticker emoji="💌" initialX="10%" initialY="15%" duration={5} />
      <FloatingSticker emoji="✨" initialX="88%" initialY="25%" duration={6} />

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-6" style={{ fontFamily: 'var(--font-headline)' }}>
              Let's build something
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8">
              Open to ML engineering roles, research collaborations, and interesting projects.
            </p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <a
                href="mailto:gyeongbin.ryoo.gr@dartmouth.edu"
                className="inline-flex items-center gap-3 px-8 py-4 bg-accent text-accent-foreground rounded-full text-lg hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
              >
                <span>Get in touch</span>
                <ArrowRight size={20} />
              </a>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {contactLinks.map((link, index) => {
              const IconComponent = link.icon;
              const content = (
                <div className="flex items-center gap-4 p-5 bg-card rounded-xl border border-foreground/10 hover:border-accent/50 hover:shadow-lg transition-all duration-300">
                  <div className="w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <IconComponent className="text-accent" size={20} />
                  </div>

                  <div className="flex-1 min-w-0">
                    <div className="text-sm text-muted-foreground mb-1">{link.label}</div>
                    <div className="text-foreground truncate">{link.value}</div>
                  </div>
                </div>
              );

              return (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 10 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
                >
                  {link.href ? (
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="block"
                    >
                      {content}
                    </a>
                  ) : (
                    content
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Footer */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <div className="inline-flex items-center gap-2 text-muted-foreground">
              <span>Built with</span>
              <span className="text-accent">React</span>
              <span>+</span>
              <span className="text-accent">Tailwind</span>
              <span>+</span>
              <span className="text-accent">Motion</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              © 2026 Gyeongbin Ryoo. Sometimes the best models I train are recipes.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
