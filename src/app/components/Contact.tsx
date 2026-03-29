import { Mail, Linkedin, Github, MapPin, Download } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';

export function Contact() {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'kaustubha.ev@gmail.com', href: 'mailto:kaustubha.ev@gmail.com' },
    { icon: MapPin, label: 'Location', value: 'San Jose, CA', href: null },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Kaustubha-09' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/kaustubha-ve' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

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
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactInfo.map((info) => (
            <motion.div key={info.label} variants={itemVariants}>
              <Card className="border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all w-48">
                <CardContent className="p-6">
                  <info.icon className="mx-auto mb-3 text-slate-500 dark:text-slate-400" size={20} />
                  <p className="text-xs text-slate-400 dark:text-slate-500 mb-1">{info.label}</p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="font-medium text-sm text-slate-900 dark:text-white transition-colors hover:text-[#00D4AA] dark:hover:text-[#00D4AA]"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-slate-900 dark:text-white font-medium text-sm">{info.value}</p>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Buttons — teal primary, neutral secondary */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href="mailto:kaustubha.ev@gmail.com"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold transition-all hover:opacity-90 hover:scale-[1.02]"
            style={{ background: '#00D4AA', color: '#0F1923' }}
          >
            <Mail className="w-4 h-4" />
            Send Email
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-medium transition-all border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 flex items-center justify-center border border-slate-200 dark:border-slate-800 rounded-lg transition-all hover:scale-105 hover:border-[#00D4AA]/40 group"
              aria-label={link.label}
            >
              <link.icon
                size={20}
                className="text-slate-500 dark:text-slate-400 group-hover:text-[#00D4AA] transition-colors"
              />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
