import { motion } from "motion/react";
import { ArrowDown, Download } from "lucide-react";
import { useState } from "react";
import selfie from "../../imports/image.png";
import cvPdf from "../../imports/Gyeongbin_Ryoo_cv-1.pdf";

export function Hero() {
  const [clickCount, setClickCount] = useState(0);
  const [showEasterEgg, setShowEasterEgg] = useState(false);

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const handleImageClick = () => {
    const newCount = clickCount + 1;
    setClickCount(newCount);

    if (newCount === 3) {
      setShowEasterEgg(true);
      setTimeout(() => {
        setShowEasterEgg(false);
        setClickCount(0);
      }, 5000);
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 relative overflow-hidden">
      {/* Floating decorative elements */}
      <motion.div
        className="absolute top-32 left-[15%] text-6xl z-0 pointer-events-none"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        ✨
      </motion.div>

      <motion.div
        className="absolute bottom-32 right-[20%] text-5xl z-0 pointer-events-none"
        animate={{
          y: [0, 15, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        🦭
      </motion.div>

      <motion.div
        className="absolute top-48 right-[12%] bg-accent/10 rounded-full w-20 h-20 flex items-center justify-center z-0 pointer-events-none"
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <span className="text-2xl">💭</span>
      </motion.div>

      <div className="max-w-6xl w-full relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Left: Text content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-6" style={{ fontFamily: 'var(--font-headline)' }}>
              Hi, I'm <span className="text-accent">Leah</span> 👋
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl mb-4 text-foreground/90">
              ML engineer & researcher. Synthetic data, computer vision, and models that ship.
            </p>

            <p className="text-base sm:text-lg text-muted-foreground mb-8">
              Dartmouth MS CS · 4 published papers · Previously Hyundai · Occasionally cooking solo.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-accent text-accent-foreground rounded-full hover:scale-105 transition-transform duration-200 shadow-lg hover:shadow-xl"
              >
                See my work
              </button>
              <a
                href={cvPdf}
                download="Gyeongbin_Ryoo_CV.pdf"
                className="inline-flex items-center gap-2 px-8 py-4 bg-card text-card-foreground rounded-full border-2 border-foreground/10 hover:border-accent hover:scale-105 transition-all duration-200 shadow-md"
              >
                <Download size={20} />
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>

          {/* Right: Selfie image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div
              className="relative rounded-3xl overflow-hidden shadow-2xl border-8 border-white transform rotate-2 hover:rotate-0 transition-transform duration-300 cursor-pointer"
              onClick={handleImageClick}
            >
              <img
                src={selfie}
                alt="Gyeongbin Ryoo (Leah)"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Easter egg fun fact card */}
            {showEasterEgg && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 20, scale: 0.8 }}
                className="absolute -bottom-24 left-1/2 transform -translate-x-1/2 bg-accent text-accent-foreground px-6 py-4 rounded-2xl shadow-2xl border-4 border-white z-10 whitespace-nowrap"
              >
                <div className="text-center">
                  <div className="text-2xl mb-2">🎉</div>
                  <div className="font-bold mb-1">Fun fact!</div>
                  <div className="text-sm">I debug code and recipes with equal intensity</div>
                </div>
              </motion.div>
            )}

            {/* Decorative arrow */}
            <motion.div
              className="absolute -bottom-4 -right-4 text-accent"
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <ArrowDown size={48} strokeWidth={2.5} />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
