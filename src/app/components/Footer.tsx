import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="py-12 px-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <p className="font-semibold text-slate-900 dark:text-white">Kaustubha Eluri</p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            Research Software Engineer · AI/ML · Accessibility
          </p>
        </div>

        <div className="flex items-center gap-2">
          <a
            href="https://github.com/Kaustubha-09"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://linkedin.com/in/kaustubha-ve"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="mailto:kaustubha.ev@gmail.com"
            aria-label="Email"
            className="p-2 rounded-lg text-slate-500 hover:text-slate-900 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors"
          >
            <Mail className="w-5 h-5" />
          </a>
        </div>

        <p className="text-xs text-slate-400 dark:text-slate-500">
          © 2026 Kaustubha Venkata Eluri · U.S. Citizen
        </p>
      </div>
    </footer>
  );
}
