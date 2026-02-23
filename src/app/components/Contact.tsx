import { Mail, Linkedin, Github, MapPin, Phone, Download, CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';
import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

export function Contact() {
  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'kaustubha.ev@gmail.com', href: 'mailto:kaustubha.ev@gmail.com' },
    { icon: Phone, label: 'Phone', value: '669-204-6927', href: 'tel:669-204-6927' },
    { icon: MapPin, label: 'Location', value: 'San Jose, CA', href: null },
  ];

  const socialLinks = [
    { icon: Github, label: 'GitHub', href: 'https://github.com/Kaustubha-09' },
    { icon: Linkedin, label: 'LinkedIn', href: 'https://linkedin.com/in/kaustubha-ve' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
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
          <h2 className="text-4xl md:text-5xl mb-4 font-bold text-slate-900 dark:text-white">
            Let's Build Intelligent Systems Together
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 max-w-2xl mx-auto">
            I'm actively seeking full-time Software Engineering, AI/ML Engineering, and Product Engineering roles.
          </p>
          
          {/* Availability Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-full mb-12">
            <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
            <span className="text-sm font-medium text-green-700 dark:text-green-400">Open to SWE / AI / ML Roles — 2026</span>
          </div>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-3 gap-6 mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {contactInfo.map((info, idx) => (
            <motion.div key={info.label} variants={itemVariants}>
              <Card className="border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all">
                <CardContent className="p-6">
                  <info.icon className="mx-auto mb-3 text-slate-600 dark:text-slate-400" size={24} />
                  <p className="text-xs text-slate-500 dark:text-slate-500 mb-2">{info.label}</p>
                  {info.href ? (
                    <a href={info.href} className="text-slate-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors font-medium text-sm">
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

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <a
            href="mailto:kaustubha.ev@gmail.com"
            className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-all font-medium text-sm flex items-center justify-center gap-2"
          >
            <Mail className="w-4 h-4" />
            Send Email
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-slate-300 dark:border-slate-700 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all font-medium text-sm flex items-center justify-center gap-2"
          >
            <Download className="w-4 h-4" />
            Download Resume
          </a>
        </motion.div>
        
        {/* Social Links */}
        <motion.div
          className="flex justify-center gap-4"
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
              className="w-12 h-12 flex items-center justify-center border border-slate-200 dark:border-slate-800 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all hover:scale-105"
              aria-label={link.label}
            >
              <link.icon size={20} className="text-slate-600 dark:text-slate-400" />
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}