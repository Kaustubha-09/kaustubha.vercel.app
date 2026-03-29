import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  return (
    <footer className="px-6 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800">
      {/* Teal accent line */}
      <div className="h-px w-full" style={{ background: 'linear-gradient(90deg, transparent, #00D4AA, transparent)' }} />
      <div className="max-w-6xl mx-auto py-12 flex flex-col items-center gap-6 text-center md:flex-row md:text-left md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-slate-900 dark:text-white">Kaustubha Eluri</p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-0.5">
            Research Software Engineer · AI/ML · Accessibility
          </p>
        </div>

        <div className="flex items-center gap-1">
          {[
            { href: 'https://github.com/Kaustubha-09', icon: Github, label: 'GitHub' },
            { href: 'https://linkedin.com/in/kaustubha-ve', icon: Linkedin, label: 'LinkedIn' },
            { href: 'mailto:kaustubha.ev@gmail.com', icon: Mail, label: 'Email', external: false },
          ].map(({ href, icon: Icon, label, external = true }) => (
            <a
              key={label}
              href={href}
              target={external ? '_blank' : undefined}
              rel={external ? 'noopener noreferrer' : undefined}
              aria-label={label}
              className="p-2 rounded-lg text-slate-500 transition-colors hover:text-[#00D4AA] hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        <p className="text-xs text-slate-400 dark:text-slate-500">
          © {new Date().getFullYear()} Kaustubha Venkata Eluri · U.S. Citizen
        </p>
      </div>
    </footer>
  );
}
