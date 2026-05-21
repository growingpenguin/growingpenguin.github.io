import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Learning } from "./components/Learning";
import { Research } from "./components/Research";
import { Skills } from "./components/Skills";
import { Beyond } from "./components/Beyond";
import { Honors } from "./components/Honors";
import { Contact } from "./components/Contact";
import { ScrollToTop } from "./components/ScrollToTop";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Learning />
      <Research />
      <Skills />
      <Beyond />
      <Honors />
      <Contact />
      <ScrollToTop />
    </div>
  );
}