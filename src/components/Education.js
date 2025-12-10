import React from 'react';

const Education = () => {
  const educationData = [
    {
      degree: 'Bachelor of Technology in Computer Science and Engineering',
      institution: 'SRM Institute of Science and Technology',
      year: '2023 - 2027',
      gpa: '8.13/10.00',
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Delhi Public School, Ruby Park',
      year: '2020-2022',
      gpa: '80.40%',
    },
    {
      degree: 'Secondary Education',
      institution: 'Delhi Public School, Ruby Park',
      year: '2014-2019',
      gpa: '94.40%',
    },
  ];

  return (
    <section id="education" className="section-container bg-gray-50">
      <h2 className="section-title">Education</h2>
      <div className="max-w-4xl mx-auto">
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div key={index} className="card relative pl-8 border-l-4 border-primary-500">
              <div className="absolute -left-3 top-0 w-6 h-6 bg-primary-500 rounded-full border-4 border-white"></div>
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-1">
                    {edu.degree}
                  </h3>
                  <p className="text-xl text-primary-600 font-semibold mb-2">
                    {edu.institution}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-2">
                    {edu.year}
                  </span>
                  <p className="text-gray-600 font-medium">GPA: {edu.gpa}</p>
                </div>
              </div>
              <p className="text-gray-700 leading-relaxed">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

