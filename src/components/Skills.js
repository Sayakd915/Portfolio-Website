import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Machine Learning',
      skills: [
        { name: 'TensorFlow', level: 90 },
        { name: 'PyTorch', level: 87 },
        { name: 'Scikit-learn', level: 95 },
        { name: 'Keras', level: 90 },
        { name: 'OpenCV', level: 80 },
      ],
    },
    {
      category: 'Deep Learning',
      skills: [
        { name: 'Neural Networks', level: 92 },
        { name: 'CNN', level: 90 },
        { name: 'RNN/LSTM', level: 85 },
        { name: 'Transformers', level: 91 },
        { name: 'GANs', level: 80 },
      ],
    },
    {
      category: 'Frontend',
      skills: [
        { name: 'React', level: 90 },
        { name: 'JavaScript', level: 88 },
        { name: 'Dart', level: 90 },
        { name: 'TailwindCSS', level: 88 },
        { name: 'Flutter', level: 90 },
      ],
    },
    {
      category: 'Backend',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'Node.js', level: 85 },
        { name: 'Django', level: 88 },
        { name: 'Flask', level: 90 },
        { name: 'FastAPI', level: 90 },
      ],
    },
    {
      category: 'Data & Cloud',
      skills: [
        { name: 'GCP', level: 85 },
        { name: 'Docker', level: 88 },
        { name: 'AWS', level: 75 },
        { name: 'PostgreSQL', level: 90 },
        { name: 'MongoDB', level: 85 },
      ],
    },
    {
      category: 'MLOps',
      skills: [
        { name: 'Jenkins', level: 85 },
        { name: 'Kubeflow', level: 75 },
        { name: 'Hugging Face', level: 85 },
        { name: 'CI/CD', level: 88 },
        { name: 'Model Deployment', level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="section-container bg-white">
      <h2 className="section-title">Skills</h2>
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, catIndex) => (
            <div key={catIndex} className="card">
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

