import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { FileText, ChevronDown, ChevronUp } from "lucide-react";

interface Paper {
  title: string;
  venue: string;
  role: string;
  description?: string;
}

const papers: Paper[] = [
  {
    title: "A Fine-Tuning Approach for Object Detection Models Using Virtually Generated Data",
    venue: "ICTC 2024",
    role: "Co-first author",
    description: "Demonstrated 39% improvement in object detection accuracy by fine-tuning models on synthetic data generated in NVIDIA Isaac Sim, with 4% higher segmentation performance using a hybrid real+synthetic approach.",
  },
  {
    title: "Simulation-Based Service Scenarios Analysis for Commercial Deployment: Robot-Friendly Building Case",
    venue: "KOSIME 2024",
    role: "Co-author",
    description: "Designed and evaluated robot service integration scenarios for commercial buildings, contributing to 10 domestic patent applications with Hyundai Motors.",
  },
  {
    title: "Performance Analysis of Semantic Segmentation in Fine-Tuned Models Based on Virtual Environment",
    venue: "KICS Symposium 2024",
    role: "First author",
    description: "Analyzed semantic segmentation performance improvements when training on virtual environment data, establishing best practices for synthetic data generation pipelines.",
  },
  {
    title: "Analyzing Experimental Data of 6-DOF Motions and Sloshing Impacts in LNG Carriers",
    venue: "ASME OMAE 2024",
    role: "Co-author",
    description: "Applied machine learning to predict sloshing impact loads from 6-degree-of-freedom ship motion data, deployed as a full-stack AWS pipeline with real-time prediction dashboard.",
  },
];

function PaperCard({ paper }: { paper: Paper }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className="bg-card rounded-xl p-6 border border-foreground/10 hover:border-accent/50 transition-all duration-300 cursor-pointer"
      whileHover={{ x: 5 }}
      onClick={() => paper.description && setIsExpanded(!isExpanded)}
    >
      <div className="flex items-start gap-4">
        <div className="flex-shrink-0 w-12 h-12 bg-accent/10 rounded-lg flex items-center justify-center">
          <FileText className="text-accent" size={24} />
        </div>

        <div className="flex-1">
          <h3 className="text-lg mb-2" style={{ fontFamily: 'var(--font-headline)' }}>
            {paper.title}
          </h3>

          <div className="flex flex-wrap items-center gap-3 mb-2">
            <span className="text-sm text-accent">{paper.venue}</span>
            <span className="text-xs px-2 py-1 bg-accent/10 text-accent rounded-full">
              {paper.role}
            </span>
          </div>

          {paper.description && isExpanded && (
            <motion.p
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="text-sm text-foreground/70 mt-3 leading-relaxed"
            >
              {paper.description}
            </motion.p>
          )}

          {paper.description && (
            <div className="flex items-center gap-2 text-accent text-sm mt-2">
              {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              <span>{isExpanded ? "Show less" : "Read more"}</span>
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}

export function Research() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="research" className="py-24 px-6 bg-secondary/30" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4" style={{ fontFamily: 'var(--font-headline)' }}>
              Research & Papers
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Published work at the intersection of synthetic data, computer vision, and ML systems.
            </p>
          </div>

          <div className="space-y-4">
            {papers.map((paper, index) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <PaperCard paper={paper} />
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 rounded-full border border-accent/30">
              <span className="text-accent text-lg">🏆</span>
              <span className="text-foreground">4 published papers</span>
              <span className="text-accent text-lg">·</span>
              <span className="text-foreground">2 first-author</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
