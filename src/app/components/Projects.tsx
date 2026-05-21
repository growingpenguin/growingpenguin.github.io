import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { FloatingSticker } from "./FloatingSticker";
import { PaperCutShape } from "./PaperCutShape";

interface Project {
  id: string;
  title: string;
  subtitle: string;
  hook: string;
  details: string;
  tags: string[];
  isHero?: boolean;
}

const projects: Project[] = [
  {
    id: "synthetic-data",
    title: "Synthetic Data for Autonomous Driving",
    subtitle: "Mobility Service Research Lab, 2023–2025",
    hook: "39% higher object detection and 4% higher segmentation accuracy by training on NVIDIA Isaac Sim metaverse data.",
    details: "First-author ICTC 2024 paper. Hybrid synthetic + real data approach.",
    tags: ["Computer Vision", "Synthetic Data", "NVIDIA Omniverse", "PyTorch", "Fine-tuning"],
    isHero: true,
  },
  {
    id: "marine-sloshing",
    title: "Marine Sloshing Load Prediction",
    subtitle: "Hyundai Heavy Machinery, 2023",
    hook: "LightGBM + GAMs regression on 6-DoF ship motion data to predict sloshing impact loads.",
    details: "Shipped end-to-end: AWS pipeline, model upload UI, and real-time prediction dashboard.",
    tags: ["LightGBM", "GAMs", "AWS", "PyTorch", "Full-stack ML"],
  },
  {
    id: "coastal-waste",
    title: "Coastal Waste Marine Mobility",
    subtitle: "Ministry of Science and ICT, 2023–2024",
    hook: "Time-series analysis of ship motion using RNN/LSTM/GRU to power AI-driven floating waste cleanup.",
    details: "",
    tags: ["Time Series", "RNN/LSTM/GRU", "PyTorch", "Sustainability"],
  },
  {
    id: "robot-buildings",
    title: "Robot-Friendly Buildings",
    subtitle: "Hyundai NGV, affiliated with Hyundai Motors, 2024–2025",
    hook: "Designed integration scenarios for robot delivery and parking. Co-contributed to 10 domestic patent applications with Hyundai Motors.",
    details: "Standards, certification protocols, simulation-based scenario analysis, and business model design.",
    tags: ["Robotics", "Simulation", "Business Strategy", "Patents"],
  },
];

function ProjectCard({ project }: { project: Project }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      className={`bg-card rounded-2xl overflow-hidden shadow-lg border border-foreground/5 hover:border-accent/50 transition-all duration-300 cursor-pointer ${
        project.isHero ? "md:col-span-2 border-accent/30" : ""
      }`}
      whileHover={{ y: -5, boxShadow: "0 20px 40px rgba(255, 107, 107, 0.15)" }}
      onClick={() => setIsExpanded(!isExpanded)}
    >
      <div className="p-8">
        {project.isHero && (
          <div className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full mb-4">
            Hero Project
          </div>
        )}

        <div className="text-sm text-accent mb-2">{project.subtitle}</div>

        <h3
          className={`${project.isHero ? "text-3xl md:text-4xl" : "text-2xl"} mb-4`}
          style={{ fontFamily: 'var(--font-headline)' }}
        >
          {project.title}
        </h3>

        <p className="text-lg text-foreground/80 mb-4 leading-relaxed">
          {project.hook}
        </p>

        {project.details && isExpanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="mb-4 text-foreground/70"
          >
            {project.details}
          </motion.div>
        )}

        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full border border-accent/20"
            >
              {tag}
            </span>
          ))}
        </div>

        {project.details && (
          <div className="flex items-center gap-2 text-accent text-sm">
            {isExpanded ? (
              <>
                <ChevronUp size={16} />
                <span>Show less</span>
              </>
            ) : (
              <>
                <ChevronDown size={16} />
                <span>Read more</span>
              </>
            )}
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6 bg-secondary/30 relative overflow-hidden" ref={ref}>
      <FloatingSticker emoji="🚀" initialX="8%" initialY="15%" duration={5.5} />
      <FloatingSticker emoji="💡" initialX="92%" initialY="60%" duration={4.5} />
      <PaperCutShape position="top-left" />
      <PaperCutShape position="bottom-right" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4" style={{ fontFamily: 'var(--font-headline)' }}>
              Featured Projects
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground">
              Research that ships. Models that work. Metrics that matter.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </div>

          {/* Placeholder section for future projects */}
          <div className="mt-12 p-8 bg-card rounded-2xl border-2 border-dashed border-foreground/10">
            <h3 className="text-xl mb-2 text-muted-foreground" style={{ fontFamily: 'var(--font-headline)' }}>
              More projects coming soon
            </h3>
            <p className="text-foreground/60">
              AI Agents · Video Understanding · Visual Computing · Computer Vision · Computational Photography
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
