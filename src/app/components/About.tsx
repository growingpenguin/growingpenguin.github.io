import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { FloatingSticker } from "./FloatingSticker";

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden" ref={ref}>
      <FloatingSticker emoji="🦭" initialX="90%" initialY="10%" duration={5} canWink={true} />
      <FloatingSticker emoji="⭐" initialX="5%" initialY="30%" duration={6} />

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-8" style={{ fontFamily: 'var(--font-headline)' }}>
            Building ML systems that work in the real world
          </h2>

          <p className="text-lg sm:text-xl text-foreground/80 mb-12 leading-relaxed">
            I create synthetic training data for autonomous vehicles, fine-tune computer vision models on NVIDIA metaverse datasets, and build end-to-end ML pipelines that ship to production. My work bridges research and deployment: published papers, real metrics, and systems that actually run.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* What I do */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-foreground/5">
              <h3 className="text-2xl mb-4 text-accent" style={{ fontFamily: 'var(--font-headline)' }}>
                What I do
              </h3>
              <ul className="space-y-3 text-foreground/80">
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">•</span>
                  <span>ML research: synthetic data for autonomous driving</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">•</span>
                  <span>Computer vision: object detection, semantic segmentation</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">•</span>
                  <span>NLP & RLHF: language model fine-tuning and alignment</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent mr-3 mt-1">•</span>
                  <span>Robot service simulation and deployment scenarios</span>
                </li>
              </ul>
            </div>

            {/* Where I've been */}
            <div className="bg-card rounded-2xl p-8 shadow-lg border border-foreground/5">
              <h3 className="text-2xl mb-4 text-accent" style={{ fontFamily: 'var(--font-headline)' }}>
                Where I've been
              </h3>
              <ul className="space-y-3 text-foreground/80">
                <li>
                  <div className="font-medium">Dartmouth College</div>
                  <div className="text-sm text-muted-foreground">MS Computer Science, 2027</div>
                </li>
                <li>
                  <div className="font-medium">Sungshin Women's University</div>
                  <div className="text-sm text-muted-foreground">BS AI Convergence, GPA 4.07/4.5</div>
                </li>
                <li>
                  <div className="font-medium">Hyundai NGV</div>
                  <div className="text-sm text-muted-foreground">Robot-friendly building research</div>
                </li>
                <li>
                  <div className="font-medium">Ministry of Science and ICT</div>
                  <div className="text-sm text-muted-foreground">Coastal waste marine mobility</div>
                </li>
                <li>
                  <div className="font-medium">Hyundai Heavy Machinery</div>
                  <div className="text-sm text-muted-foreground">Marine sloshing prediction</div>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 p-6 bg-accent/10 rounded-2xl border-l-4 border-accent">
            <p className="text-lg text-foreground/90">
              Currently obsessed with synthetic data, RLHF, multimodal learning, and how language models encode structure.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
