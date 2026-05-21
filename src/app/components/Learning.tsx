import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { FloatingSticker } from "./FloatingSticker";

export function Learning() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const currentClasses = [
    "AI Agents",
    "Video Understanding",
    "Visual Computing Seminar",
    "Computer Vision",
    "Computational Photography",
    "Dark Side of AI",
  ];

  const papers = [
    {
      title: "Probing what language models actually encode",
      description: "Structural probes, mutual information, and geometric representations of syntax and semantics in BERT.",
    },
    {
      title: "How RLHF really works",
      description: "Christiano et al. and the foundations behind systems like Claude and ChatGPT.",
    },
    {
      title: "Synthetic data as causal control",
      description: "Extending my Omniverse work toward multimodal generation and dataset audits.",
    },
    {
      title: "Multimodal & video understanding",
      description: "Where vision, language, and audio meet.",
    },
  ];

  return (
    <section id="learning" className="py-24 px-6 relative overflow-hidden" ref={ref}>
      <FloatingSticker emoji="📚" initialX="6%" initialY="20%" duration={6} />
      <FloatingSticker emoji="🔬" initialX="94%" initialY="40%" duration={5} />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4" style={{ fontFamily: 'var(--font-headline)' }}>
              What I'm learning now
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              The classes I'm in, the papers I keep open in 30 tabs.
            </p>
          </div>

          <div className="bg-accent/5 rounded-3xl p-10 border border-accent/20">
            {/* Currently at Dartmouth */}
            <div className="mb-10">
              <h3 className="text-2xl mb-6 text-accent" style={{ fontFamily: 'var(--font-headline)' }}>
                Currently at Dartmouth
              </h3>
              <div className="flex flex-wrap gap-3">
                {currentClasses.map((className, index) => (
                  <motion.div
                    key={className}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="px-5 py-3 bg-card rounded-full border-2 border-accent/30 hover:border-accent hover:scale-105 transition-all duration-200 shadow-md"
                  >
                    <span className="text-foreground">{className}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Papers on my mind */}
            <div>
              <h3 className="text-2xl mb-6 text-accent" style={{ fontFamily: 'var(--font-headline)' }}>
                Papers on my mind
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {papers.map((paper, index) => (
                  <motion.div
                    key={paper.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    className="p-5 bg-card rounded-xl border border-foreground/10 hover:border-accent/50 hover:shadow-lg transition-all duration-200"
                  >
                    <h4 className="text-lg mb-2 text-foreground" style={{ fontFamily: 'var(--font-headline)' }}>
                      {paper.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {paper.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
