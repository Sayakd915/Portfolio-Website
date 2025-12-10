import React from 'react';

const About = () => {
  return (
    <section id="about" className="section-container bg-white">
      <h2 className="section-title">About Me</h2>
      <div className="max-w-4xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <div className="w-64 h-64 mx-auto md:mx-0 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full flex items-center justify-center text-white text-6xl font-bold shadow-lg">
              <img src={require('../assets/myimg.jpeg')} alt="Profile" className="w-full h-full object-cover rounded-full" />
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm a passionate Full Stack Machine Learning Developer with expertise in
              building end-to-end ML solutions. I combine deep learning expertise with
              modern application development to create intelligent, scalable applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              My journey spans from training complex neural networks to deploying them
              in production environments, ensuring seamless integration between ML models
              and user-facing applications.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I'm constantly learning and exploring new technologies, always striving to
              bridge the gap between cutting-edge AI research and practical, real-world
              applications.
            </p>
            <div className="pt-4">
              <a
                href="#contact"
                className="inline-block px-6 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors duration-300"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

