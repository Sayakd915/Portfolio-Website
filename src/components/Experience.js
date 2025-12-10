import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: 'Research Intern',
      company: 'Carnegie Mellon University',
      location: 'Pittsburgh, PA',
      period: 'Nov 2025 - Present',
      description: [
        'Developing a physics-informed neural network to forecast patient-specific Creutzfeldt–Jakob disease progression from sparse clinical and biomarker data',
        'Embedding prion autocatalytic kinetics into the model to improve data efficiency and biological plausibility in an ultra-rare disease setting',
        'Integrating Bayesian uncertainty quantification to provide calibrated risk estimates for clinical decision-making and trial stratification',
      ],
    },
    {
      title: 'Undergraduate Student Researcher',
      company: 'SRM Institute of Science and Technology',
      location: 'Chennai, India',
      period: 'July 2025 - Nov 2025',
      description: [
        'Conducted Research and Development in Language-Models and Agentic Systems',
        'Developed hybrid SLM-LLM architectures to detect anomalous performance reports in automotive industry',
        'Developed hybrid retrieval-based agent architecture for collaborative Agricultural Planning',
        'Achieved 98% accuracy in detecting anomalous logs on benchmark datasets',
      ],
    },
  ];

  return (
    <section id="experience" className="section-container bg-gray-50">
      <h2 className="section-title">Experience</h2>
      <div className="max-w-5xl mx-auto">
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-300 hidden md:block"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-white shadow-lg hidden md:block"></div>

                <div className="ml-0 md:ml-16 flex-1 card">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-xl text-primary-600 font-semibold mb-1">
                        {exp.company}
                      </p>
                      <p className="text-gray-600">{exp.location}</p>
                    </div>
                    <span className="mt-2 md:mt-0 inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
                      {exp.period}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start">
                        <span className="text-primary-500 mr-2 mt-1">▸</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;

