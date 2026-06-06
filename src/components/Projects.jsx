import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projectsData = [
    {
      id: 1,
      title: "AI-Based Sign Language Detection System",
      shortDesc: "Real-time gesture recognition and translation system utilizing computer vision.",
      longDesc: "This system addresses accessibility challenges for the hearing-impaired by translating sign language into readable text in real-time. Built using deep learning algorithms and a high-performance computer vision pipeline, it recognizes complex manual expressions with low latency.",
      tech: ["Python", "OpenCV", "Machine Learning", "Computer Vision"],
      features: [
        "Real-time hand gesture recognition",
        "Gesture-to-text conversion",
        "Deep learning based classification",
        "Accessibility-focused solution"
      ],
      metrics: "95%+ Accuracy",
      architecture: "MediaPipe Hands tracking model -> TensorFlow LSTM sequence classification model -> Live GUI frame rendering.",
      links: [
        { label: "Sign-ificant Repository", url: "https://github.com/DivyanshuNathTripathi" }
      ]
    },
    {
      id: 2,
      title: "CALLER-AI",
      shortDesc: "Automated event-driven AI calling system orchestrated via Twilio and Google Cloud.",
      longDesc: "A scalable, production-ready calling system designed to run automated workflows. The application coordinates calls, dynamically synthesizes speech, processes client inputs, and stores results securely in the cloud via structured logs.",
      tech: ["Node.js", "REST APIs", "Twilio", "GCP", "Webhooks"],
      features: [
        "Automated calling system",
        "Event-driven architecture",
        "Cloud deployment",
        "Webhook orchestration",
        "Structured logging"
      ],
      metrics: "50+ automated calls/month",
      architecture: "Webhook listener (Express) -> Google Cloud Functions -> Twilio Voice API -> Cloud Logging / Storage.",
      links: [
        { label: "Live Website", url: "https://caller.work/" },
        { label: "GitHub", url: "https://github.com/DivyanshuNathTripathi" }
      ]
    },
    {
      id: 3,
      title: "Prayukti Virtual Lab",
      shortDesc: "Web-based interactive experiment simulation tool for remote engineering courses.",
      longDesc: "An educational platform designed to simulate physical laboratory experiments. Ideal for remote learning setups, it provides modular simulations with accurate mathematics calculations and instant validation of laboratory results.",
      tech: ["HTML", "CSS", "JavaScript"],
      features: [
        "Remote practical learning",
        "Experiment simulations",
        "Modular architecture",
        "Cross-device compatibility"
      ],
      metrics: "Fully Responsive",
      architecture: "Single Page Application (SPA) utilizing modular Canvas API scripts to compute formulas and draw experiment physics states in real time.",
      links: [
        { label: "GitHub Repository", url: "https://github.com/DivyanshuNathTripathi" }
      ]
    }
  ];

  return (
    <section id="projects" className="bg-[#111111] py-28 px-6 md:px-12 w-full relative overflow-hidden font-sans text-white">
      {/* Decorative background grid and blurs */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center md:text-left mb-16" data-aos="fade-up">
          <div className="inline-block border border-red-500/30 bg-red-500/10 rounded-full px-5 py-1.5 text-xs md:text-sm text-red-500 font-bold mb-4">
            Showcase
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Featured Projects
          </h2>
          <p className="text-gray-400 text-sm md:text-base max-w-xl font-medium leading-relaxed mt-4">
            Click on any project to explore the architecture, core features, and GitHub repositories.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsData.map((project, idx) => (
            <div 
              key={project.id}
              onClick={() => setSelectedProject(project)}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="group relative bg-white/5 border border-white/10 hover:border-red-500/40 rounded-3xl p-6 backdrop-blur-md hover:bg-white/10 transition-all duration-500 cursor-pointer shadow-2xl flex flex-col justify-between min-h-[350px]"
            >
              <div>
                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="text-[10px] font-mono font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/10 text-white/80 border border-white/5">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Title & Short Desc */}
                <h3 className="text-xl md:text-2xl font-black mb-3 group-hover:text-red-500 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300 leading-relaxed font-medium mb-6">
                  {project.shortDesc}
                </p>
              </div>

              {/* Bottom Card details */}
              <div className="flex items-center justify-between mt-auto pt-6 border-t border-white/10">
                {project.metrics && (
                  <span className="text-[11px] font-mono text-red-400 font-bold tracking-wider uppercase">
                    {project.metrics}
                  </span>
                )}
                <span className="text-xs font-bold text-white group-hover:translate-x-2 transition-transform duration-300 flex items-center gap-1.5">
                  Learn More 
                  <svg className="w-4 h-4 text-red-500" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100000] bg-black/80 backdrop-blur-xl flex items-center justify-center p-4 md:p-6"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div 
              initial={{ scale: 0.9, y: 50, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="bg-[#181818] border border-white/10 max-w-3xl w-full rounded-3xl p-6 md:p-8 max-h-[90vh] overflow-y-auto relative shadow-[0_20px_50px_rgba(239,68,68,0.2)] scrollbar-thin scrollbar-thumb-white/10"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-white hover:text-red-500 transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Content */}
              <div className="mt-4">
                <span className="text-xs font-mono font-bold text-red-500 uppercase tracking-widest">Project Details</span>
                <h3 className="text-2xl md:text-4xl font-black mt-2 mb-6 leading-tight pr-10">{selectedProject.title}</h3>
                
                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {selectedProject.tech.map(t => (
                    <span key={t} className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-gray-300">
                      {t}
                    </span>
                  ))}
                </div>

                {/* Info grids */}
                <div className="space-y-6 text-gray-300 text-sm md:text-base leading-relaxed">
                  <div>
                    <h4 className="text-white font-bold text-base mb-2 font-mono uppercase tracking-wide">Overview</h4>
                    <p>{selectedProject.longDesc}</p>
                  </div>

                  <div>
                    <h4 className="text-white font-bold text-base mb-2 font-mono uppercase tracking-wide">Key Features</h4>
                    <ul className="list-disc list-inside space-y-1.5 text-gray-300">
                      {selectedProject.features.map((feat, idx) => (
                        <li key={idx}>{feat}</li>
                      ))}
                    </ul>
                  </div>

                  {selectedProject.architecture && (
                    <div>
                      <h4 className="text-white font-bold text-base mb-2 font-mono uppercase tracking-wide">Architecture</h4>
                      <p className="bg-white/5 border border-white/5 rounded-2xl p-4 font-mono text-xs text-red-200">
                        {selectedProject.architecture}
                      </p>
                    </div>
                  )}

                  {selectedProject.metrics && (
                    <div className="flex items-center gap-2 mt-4">
                      <span className="text-white font-bold font-mono uppercase tracking-wide">Metric / Scale:</span>
                      <span className="px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-400 font-bold text-xs font-mono">
                        {selectedProject.metrics}
                      </span>
                    </div>
                  )}
                </div>

                {/* Footer action links */}
                <div className="flex flex-wrap gap-4 mt-10 pt-6 border-t border-white/10">
                  {selectedProject.links.map((link, idx) => (
                    <a 
                      key={idx}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-6 py-3 rounded-full text-xs md:text-sm font-bold transition-all duration-300 transform hover:scale-105 ${
                        idx === 0 
                          ? 'bg-red-600 text-white hover:bg-red-700 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]'
                          : 'bg-white/10 text-white border border-white/10 hover:bg-white/20'
                      }`}
                    >
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
