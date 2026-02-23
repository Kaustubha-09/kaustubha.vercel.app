import { Check, Download, ExternalLink } from 'lucide-react';
import { Link } from 'react-router';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'framer-motion';
import { Badge } from './ui/badge';

export function Hero() {
  const techBadges = ['Python', 'PyTorch', 'React', 'Kotlin', 'AWS', 'LLMs'];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-white dark:bg-slate-900 px-6 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-50/30 dark:from-slate-900 dark:via-slate-900 dark:to-blue-950/20"></div>
      
      <motion.div 
        className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Left side - Text content */}
        <motion.div className="text-center md:text-left space-y-8" variants={itemVariants}>
          {/* Availability Badge */}
          <motion.div variants={itemVariants}>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-full">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              <span className="text-xs font-medium text-green-700 dark:text-green-400">Open to SWE / AI / ML Roles — 2026</span>
            </div>
          </motion.div>

          {/* Name */}
          <motion.h1 className="text-5xl md:text-7xl font-bold leading-tight text-slate-900 dark:text-white" variants={itemVariants}>
            Kaustubha Eluri
          </motion.h1>

          {/* Role Headline */}
          <motion.div variants={itemVariants}>
            <h2 className="text-xl md:text-2xl font-medium text-slate-600 dark:text-slate-400">
              Research Software Engineer | AI/ML Systems Engineer
            </h2>
          </motion.div>

          {/* Credibility Strip */}
          <motion.div className="space-y-3" variants={itemVariants}>
            <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
              <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span>Research SWE @ <span className="font-semibold text-slate-900 dark:text-white">Smith-Kettlewell Eye Research Institute</span></span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
              <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span>Lead AI Engineer @ <span className="font-semibold text-slate-900 dark:text-white">Evenness</span></span>
            </div>
            <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
              <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
              <span>Built AI accessibility systems for <span className="font-semibold text-slate-900 dark:text-white">real users</span></span>
            </div>
          </motion.div>

          {/* Tech Badges */}
          <motion.div className="flex flex-wrap gap-2" variants={itemVariants}>
            {techBadges.map((tech, idx) => (
              <Badge
                key={tech}
                variant="outline"
                className="bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
              >
                {tech}
              </Badge>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-3 pt-4" variants={itemVariants}>
            <Link
              to="/projects"
              className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 transition-all font-medium text-sm flex items-center justify-center gap-2"
            >
              <ExternalLink className="w-4 h-4" />
              View Projects
            </Link>
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
        </motion.div>

        {/* Right side - ONE visual only */}
        <motion.div 
          className="flex justify-center md:justify-end relative"
          variants={itemVariants}
        >
          <div className="relative group">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-2xl overflow-hidden bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900/20 dark:to-purple-900/20">
              <ImageWithFallback
                src="/assets/photos/hero_tech_illustration.png"
                alt="AI/ML and Mobile Engineering"
                className="w-full h-full object-cover"
                fallbackSrc="/assets/personal/profile_pic.jpg"
              />
            </div>
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </div>
        </motion.div>
      </motion.div>

    </section>
  );
}