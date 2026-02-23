import { GraduationCap } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Card, CardContent, CardHeader } from './ui/card';
import { Badge } from './ui/badge';
import { motion } from 'framer-motion';

export function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-white dark:bg-slate-900">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          className="mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">
            Education
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Academic foundation in computer science and architectural engineering
          </p>
        </motion.div>
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Card className="border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 p-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                      <ImageWithFallback
                        src="/assets/education/northeastern_university_logo.jpeg"
                        alt="Northeastern University Logo"
                        className="w-14 h-14 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1 text-slate-900 dark:text-white">Northeastern University</h3>
                      <p className="text-base font-medium text-blue-600 dark:text-blue-400 mb-1">M.S. in Computer Science</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">San Jose, CA</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    Aug. 2023 - Dec. 2025
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="text-xs font-semibold text-slate-900 dark:text-white mb-2 uppercase tracking-wide">Focus Areas</h4>
                  <p className="text-sm text-slate-600 dark:text-slate-400">
                    AI/ML, Generative AI, Mobile & Web Development, Cloud Computing, Scalable System Design
                  </p>
                </div>
                <div>
                  <h4 className="text-xs font-semibold text-slate-900 dark:text-white mb-2 uppercase tracking-wide">Key Courses</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Foundations of AI',
                      'Machine Learning',
                      'Generative AI',
                      'Cloud Computing',
                      'Algorithms',
                      'Mobile Development',
                      'Web Development',
                    ].map((course) => (
                      <Badge key={course} variant="outline" className="text-xs bg-slate-50 dark:bg-slate-800 border-slate-200 dark:border-slate-700">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800">
                  <a 
                    href="https://siliconvalley.northeastern.edu/kaustubha-eluri-aspiring-product-manager/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors group"
                  >
                    <span>Featured on Northeastern Silicon Valley site</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="border border-slate-200 dark:border-slate-800 hover:shadow-lg transition-all">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 p-2 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
                      <ImageWithFallback
                        src="/assets/education/jnafau_logo.png"
                        alt="JNAFAU Logo"
                        className="w-14 h-14 object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-1 text-slate-900 dark:text-white">Jawaharlal Nehru Architecture and Fine Arts University</h3>
                      <p className="text-base font-medium text-blue-600 dark:text-blue-400 mb-1">B.Tech in Architectural Engineering</p>
                      <p className="text-sm text-slate-600 dark:text-slate-400">Hyderabad, India</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    Jun. 2017 - Jun. 2021
                  </Badge>
                </div>
              </CardHeader>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
