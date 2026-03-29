import { Download, Github, Linkedin, ArrowDown } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  const arc = [
    { label: 'Arch. Eng.', active: false },
    { label: 'CS', active: false },
    { label: 'ML / AI', active: false },
    { label: 'Accessibility', active: true },
  ];

  return (
    <section
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
      style={{ background: '#0F1923' }}
    >
      {/* Teal radial glow from top */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 70% 45% at 50% 0%, rgba(0,212,170,0.13) 0%, transparent 70%)',
        }}
      />

      {/* Horizontal rule at bottom */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'rgba(255,255,255,0.06)' }}
      />

      <motion.div
        className="max-w-5xl mx-auto px-6 py-28 md:py-36 relative z-10 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* Status chip */}
        <motion.div
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-10 border"
          style={{
            background: 'rgba(0,212,170,0.08)',
            borderColor: 'rgba(0,212,170,0.25)',
          }}
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
        >
          <span
            className="w-1.5 h-1.5 rounded-full animate-pulse"
            style={{ background: '#00D4AA' }}
          />
          <span
            className="text-xs tracking-wide"
            style={{
              fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
              color: '#00D4AA',
            }}
          >
            Open to SWE · AI/ML · Accessibility Roles — 2026
          </span>
        </motion.div>

        {/* Thesis line */}
        <motion.p
          className="text-slate-400 text-lg md:text-xl font-light mb-8 max-w-2xl mx-auto leading-relaxed"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          I build AI systems that work for everyone —
          <br className="hidden md:block" />
          <em className="text-slate-300 not-italic">especially those the defaults forget.</em>
        </motion.p>

        {/* Name — the statement */}
        <motion.h1
          className="font-black text-white leading-none tracking-tight mb-10"
          style={{
            fontSize: 'clamp(3.5rem, 10vw, 9rem)',
            fontFamily: "'Bricolage Grotesque', system-ui, sans-serif",
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          Kaustubha Eluri
        </motion.h1>

        {/* Currently strip */}
        <motion.div
          className="flex flex-wrap justify-center items-center gap-x-5 gap-y-2 mb-12 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <span
            className="text-xs uppercase tracking-widest"
            style={{
              fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
              color: 'rgb(100,116,139)',
            }}
          >
            Currently
          </span>
          <span className="text-slate-400">
            Research SWE @{' '}
            <span className="text-slate-200 font-semibold">Smith-Kettlewell</span>
          </span>
          <span style={{ color: 'rgb(51,65,85)' }}>·</span>
          <span className="text-slate-400">
            Lead AI @{' '}
            <span className="text-slate-200 font-semibold">Evenness</span>
          </span>
          <span style={{ color: 'rgb(51,65,85)' }}>·</span>
          <span className="text-slate-400">
            TA @{' '}
            <span className="text-slate-200 font-semibold">Northeastern</span>
          </span>
        </motion.div>

        {/* Interdisciplinary arc */}
        <motion.div
          className="flex items-center justify-center gap-2 mb-14 flex-wrap"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          {arc.map((item, i) => (
            <div key={item.label} className="flex items-center gap-2">
              <span
                className="px-3 py-1 rounded-full border text-xs font-medium"
                style={
                  item.active
                    ? {
                        fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                        background: 'rgba(0,212,170,0.12)',
                        borderColor: 'rgba(0,212,170,0.45)',
                        color: '#00D4AA',
                        fontWeight: 600,
                      }
                    : {
                        fontFamily: "'IBM Plex Mono', ui-monospace, monospace",
                        background: 'transparent',
                        borderColor: 'rgba(255,255,255,0.08)',
                        color: 'rgb(100,116,139)',
                      }
                }
              >
                {item.label}
              </span>
              {i < arc.length - 1 && (
                <span style={{ color: 'rgb(51,65,85)', fontSize: '0.75rem' }}>→</span>
              )}
            </div>
          ))}
        </motion.div>

        {/* CTA row */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75, duration: 0.5 }}
        >
          {/* Primary — Resume */}
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all hover:opacity-90 hover:scale-[1.02] active:scale-100"
            style={{ background: '#00D4AA', color: '#0F1923' }}
          >
            <Download className="w-4 h-4" />
            Resume
          </a>

          {/* Secondary links */}
          {[
            {
              href: 'https://github.com/Kaustubha-09',
              icon: Github,
              label: 'GitHub',
              external: true,
            },
            {
              href: 'https://linkedin.com/in/kaustubha-ve',
              icon: Linkedin,
              label: 'LinkedIn',
              external: true,
            },
          ].map(({ href, icon: Icon, label, external }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              className="flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition-all hover:border-slate-500"
              style={{
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: 'rgba(255,255,255,0.12)',
                color: 'rgb(203,213,225)',
                background: 'rgba(255,255,255,0.04)',
              }}
            >
              <Icon className="w-4 h-4" />
              {label}
            </a>
          ))}

          {/* View Work scroll */}
          <button
            onClick={() =>
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }
            className="flex items-center gap-2 px-5 py-3 rounded-lg text-sm font-medium transition-all hover:border-slate-500"
            style={{
              borderWidth: 1,
              borderStyle: 'solid',
              borderColor: 'rgba(255,255,255,0.12)',
              color: 'rgb(203,213,225)',
              background: 'rgba(255,255,255,0.04)',
            }}
          >
            View Work
            <ArrowDown className="w-4 h-4" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}
