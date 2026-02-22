export function Skills() {
  const skillCategories = [
    {
      category: 'Programming Languages',
      skills: ['Python', 'Java', 'JavaScript', 'TypeScript', 'Swift'],
    },
    {
      category: 'AI/ML Systems',
      skills: ['PyTorch', 'TensorFlow', 'Hugging Face', 'OpenAI APIs', 'RAG Pipelines', 'Prompt Engineering'],
    },
    {
      category: 'Backend & APIs',
      skills: ['FastAPI', 'Flask', 'Node.js', 'REST APIs', 'GraphQL'],
    },
    {
      category: 'Databases',
      skills: ['PostgreSQL', 'MongoDB', 'Firebase', 'SQLite'],
    },
    {
      category: 'Mobile Development',
      skills: ['Android (Java/MVVM)', 'Flutter', 'iOS (Swift/SwiftUI)', 'Firebase'],
    },
    {
      category: 'DevOps & Tools',
      skills: ['Docker', 'GitHub Actions', 'CI/CD', 'Git', 'AWS'],
    },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl text-center mb-16">Skills & Technologies</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div key={category.category} className="bg-slate-50 rounded-xl p-8">
              <h3 className="text-xl mb-6 text-slate-900">{category.category}</h3>
              <ul className="space-y-3">
                {category.skills.map((skill) => (
                  <li key={skill} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                    <span className="text-slate-700">{skill}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}