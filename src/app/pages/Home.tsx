import { motion } from 'framer-motion';
import { Hero } from '../components/Hero';
import { About } from '../components/About';
import { Experience } from '../components/Experience';
import { Projects } from '../components/Projects';
import { Education } from '../components/Education';
import { Skills } from '../components/Skills';
import { Leadership } from '../components/Leadership';
import { Certifications } from '../components/Certifications';
import { Contact } from '../components/Contact';

function SectionReveal({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 48 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function Home() {
  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <div id="about" className="scroll-mt-16">
        <SectionReveal><About /></SectionReveal>
      </div>
      <div id="experience" className="scroll-mt-16">
        <SectionReveal><Experience /></SectionReveal>
      </div>
      <div id="projects" className="scroll-mt-16">
        <SectionReveal><Projects /></SectionReveal>
      </div>
      <div id="education" className="scroll-mt-16">
        <SectionReveal><Education /></SectionReveal>
      </div>
      <div id="skills" className="scroll-mt-16">
        <SectionReveal><Skills /></SectionReveal>
      </div>
      <div id="leadership" className="scroll-mt-16">
        <SectionReveal><Leadership /></SectionReveal>
      </div>
      <div id="certifications" className="scroll-mt-16">
        <SectionReveal><Certifications /></SectionReveal>
      </div>
      <div id="contact" className="scroll-mt-16">
        <SectionReveal><Contact /></SectionReveal>
      </div>
    </>
  );
}
