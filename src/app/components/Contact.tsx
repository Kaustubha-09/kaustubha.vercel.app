import { Mail, Download } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {

  return (
    <section id="contact" className="py-24 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="section-eyebrow mb-3">08 — Contact</p>
          <h2 className="text-4xl md:text-5xl mb-4 font-bold text-slate-900 dark:text-white">
            Let's Build Intelligent Systems Together
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            I'm actively seeking full-time Software Engineering, AI/ML Engineering, and Product Engineering roles.
          </p>

          {/* Availability Badge — teal to match design system */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-12 border"
            style={{
              background: 'rgba(0,212,170,0.08)',
              borderColor: 'rgba(0,212,170,0.3)',
            }}
          >
            <span
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: '#00D4AA' }}
            />
            <span
              className="text-sm font-medium"
              style={{ color: '#00D4AA' }}
            >
              Open to SWE / AI / ML Roles — 2026
            </span>
          </div>
        </motion.div>

        {/* Contact info — 2-col centered */}
        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href="mailto:kaustubha.ev@gmail.com"
            className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-sm font-semibold transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{ background: '#00D4AA', color: '#0F1923' }}
          >
            <Mail className="w-4 h-4" />
            Send Email
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-8 py-3.5 rounded-lg text-sm font-medium transition-all border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  );
}
