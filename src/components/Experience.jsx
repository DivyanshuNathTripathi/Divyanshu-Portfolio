import React from 'react';

const Experience = () => {
  const experiences = [
    {
      role: "Full Stack Web Development Intern",
      company: "WSA Internship",
      period: "Sep 2025 – Nov 2025",
      highlights: [
        "Worked on SDLC-based MERN projects.",
        "Built applications using React and JavaScript.",
        "Developed MongoDB and Express.js modules.",
        "Implemented API integrations and backend services."
      ]
    }
  ];

  return (
    <section id="experience" className="bg-[#111111] py-28 px-6 md:px-12 w-full relative overflow-hidden font-sans text-white">
      {/* Decorative radial gradient background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16" data-aos="fade-up">
          <div className="inline-block border border-red-500/30 bg-red-500/10 rounded-full px-5 py-1.5 text-xs md:text-sm text-red-500 font-bold mb-4">
            Professional History
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Work Experience
          </h2>
        </div>

        {/* Timeline Path */}
        <div className="relative border-l border-red-500/20 pl-6 ml-4 md:pl-10 md:ml-10 space-y-12">
          
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group" data-aos="fade-up" data-aos-delay={idx * 150}>
              
              {/* Dot marker */}
              <div className="absolute -left-[31px] md:-left-[47px] top-2 w-5 h-5 rounded-full bg-red-600 border-4 border-black group-hover:scale-125 transition-transform duration-300 shadow-[0_0_15px_rgba(239,68,68,0.5)]"></div>
              
              {/* Glassmorphic timeline card */}
              <div className="bg-white/5 border border-white/10 hover:border-red-500/30 rounded-3xl p-6 md:p-8 backdrop-blur-md transition-all duration-500 shadow-2xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-black text-white group-hover:text-red-500 transition-colors duration-300">{exp.role}</h3>
                    <p className="text-red-400 font-bold text-sm md:text-base mt-1">{exp.company}</p>
                  </div>
                  <span className="inline-block px-4 py-1.5 rounded-full bg-red-500/10 border border-red-500/25 text-red-500 text-xs font-mono font-bold tracking-wider uppercase self-start md:self-auto">
                    {exp.period}
                  </span>
                </div>

                <ul className="space-y-3">
                  {exp.highlights.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-sm md:text-base text-gray-300">
                      <span className="text-red-500 font-bold mt-1 text-xs">▲</span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Experience;
