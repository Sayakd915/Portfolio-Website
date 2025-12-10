import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: 'Cartvision-Nano',
      description:
        'Automation of Retail Shopping Checkout Procedure using Computer Vision and Simple Database Management by scanning items in cart using attached camera.',
      technologies: ['OpenCV', 'FastAPI', 'YOLOv8', 'Pytorch', 'SQLite'],
      github: 'https://github.com/Sayakd915/CartVision-Nano.git',
      image: '🛒',
    },
    {
      title: 'QFortress',
      description:
        'A Cloud Storage Application that provides enhanced security using simulated BB84 Quantum Key Distribution Protocol. Web Application built on Flutter and Supabase, with FastAPI backend.',
      technologies: ['Qiskit', 'Flutter', 'Supabase', 'FastAPI', 'PostgreSQL'],
      github: 'https://github.com/Sayakd915/QFortress.git',
      image: '🔒',
    },
    {
      title: 'CompliancePilot',
      description:
        'A Java-based intelligent agent that automates compliance monitoring and reporting for AI systems using Large Language Models',
      technologies: ['Java', 'Groq API', 'JDBC', 'Java Swing', 'SQL'],
      github: 'https://github.com/Sayakd915/CompliancePilot.git',
      image: '🤖',
    },
  ];

  return (
    <section id="projects" className="section-container bg-white">
      <h2 className="section-title">Projects</h2>
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="card group hover:scale-105 transition-transform duration-300">
              <div className="text-6xl mb-4 text-center">{project.image}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-semibold"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <a
                  href={project.github}
                  className="flex-1 text-center px-4 py-2 bg-gray-900 text-white rounded-lg font-semibold hover:bg-gray-800 transition-colors duration-300"
                >
                  GitHub
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

