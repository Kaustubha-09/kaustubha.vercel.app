import { ArrowDown } from 'lucide-react';
import { Link } from 'react-router';

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-6">
            <span className="text-sm">Available for SWE/AI/ML roles</span>
          </div>
        </div>
        <h1 className="text-5xl md:text-7xl mb-6">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">Kaustubha Eluri</span>
        </h1>
        <p className="text-xl md:text-2xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Research Software Engineer & AI/ML Specialist building accessible, intelligent systems
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/projects"
            className="px-8 py-3 bg-white text-slate-900 rounded-lg hover:bg-slate-100 transition-colors"
          >
            View My Work
          </Link>
          <Link
            to="/contact"
            className="px-8 py-3 border border-white/30 rounded-lg hover:bg-white/10 transition-colors"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </section>
  );
}