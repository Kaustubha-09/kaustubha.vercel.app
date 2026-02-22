import { GraduationCap } from 'lucide-react';

export function Education() {
  return (
    <section id="education" className="py-24 px-6 bg-slate-50">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-center gap-3 mb-16">
          <GraduationCap className="text-blue-600" size={32} />
          <h2 className="text-4xl md:text-5xl text-center">Education</h2>
        </div>
        <div className="space-y-8">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl mb-2">Northeastern University</h3>
                <p className="text-lg text-blue-600 mb-2">M.S. in Computer Science</p>
                <p className="text-slate-500">San Jose, CA</p>
              </div>
              <span className="text-slate-500 mt-2 md:mt-0">Aug. 2023 - Dec. 2025</span>
            </div>
            <div className="space-y-3 mt-6">
              <div>
                <h4 className="text-sm text-slate-500 mb-2">Focus Areas</h4>
                <p className="text-slate-700">AI/ML, Generative AI, Mobile & Web Development, Cloud Computing, Scalable System Design</p>
              </div>
              <div>
                <h4 className="text-sm text-slate-500 mb-2">Key Courses</h4>
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
                    <span key={course} className="px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-sm">
                      {course}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pt-4">
                <a 
                  href="https://siliconvalley.northeastern.edu/kaustubha-eluri-aspiring-product-manager/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 text-sm"
                >
                  Featured on Northeastern Silicon Valley site →
                </a>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-sm">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-2xl mb-2">Jawaharlal Nehru Architecture and Fine Arts University</h3>
                <p className="text-lg text-blue-600 mb-2">B.Tech in Architectural Engineering</p>
                <p className="text-slate-500">Hyderabad, India</p>
              </div>
              <span className="text-slate-500 mt-2 md:mt-0">Jun. 2017 - Jun. 2021</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
