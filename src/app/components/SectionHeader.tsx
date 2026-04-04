import { motion } from 'framer-motion';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description: string;
  className?: string;
}

export function SectionHeader({ eyebrow, title, description, className = 'mb-16' }: SectionHeaderProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: -20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <p className="section-eyebrow mb-3">{eyebrow}</p>
      <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
        {title}
      </h2>
      <p className="text-lg text-slate-600 dark:text-slate-400">{description}</p>
    </motion.div>
  );
}
