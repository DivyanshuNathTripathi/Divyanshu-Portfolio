import React from 'react';

const Achievements = () => {
  const achievements = [
    {
      title: "Open Source & Research Head at CSIS MMMUT",
      desc: "Leading open-source initiatives, promoting collaborative research projects, and mentoring peers within the Computer Science & Innovation Society (CSIS) at MMMUT Gorakhpur.",
      icon: "🌐"
    },
    {
      title: "Third Prize in BIS Article Writing Competition",
      desc: "Recognized for outstanding article research and structured delivery in writing.",
      icon: "🏆"
    },
    {
      title: "BIS Youth Connect Participant",
      desc: "Engaged in collaborative standardization programs and youth outreach sessions.",
      icon: "🤝"
    },
    {
      title: "Digital Forensics & Investigation Training",
      desc: "Completed cybersecurity training program hosted under Gorakhpur Police department in collaboration with CYnit Technologies.",
      icon: "🔍"
    }
  ];

  return (
    <section id="achievements" className="bg-[#111111] py-28 px-6 md:px-12 w-full relative overflow-hidden font-sans text-white">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(#ff2a2a_1px,transparent_1px)] bg-[size:24px_24px]"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16" data-aos="fade-up">
          <div className="inline-block border border-red-500/30 bg-red-500/10 rounded-full px-5 py-1.5 text-xs md:text-sm text-red-500 font-bold mb-4">
            Honors
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Achievements
          </h2>
        </div>

        {/* Timeline Layout */}
        <div className="border-l border-red-500/20 pl-6 ml-4 space-y-10">
          {achievements.map((ach, idx) => (
            <div 
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="relative group"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-red-600 border-4 border-black group-hover:scale-125 transition-transform duration-300"></div>
              
              {/* Glass Card */}
              <div className="bg-white/5 border border-white/10 hover:border-red-500/30 rounded-3xl p-6 backdrop-blur-md transition-all duration-300">
                <div className="flex items-start gap-4">
                  <span className="text-3xl shrink-0">{ach.icon}</span>
                  <div>
                    <h3 className="text-lg md:text-xl font-black text-white group-hover:text-red-500 transition-colors duration-300">
                      {ach.title}
                    </h3>
                    <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                      {ach.desc}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Achievements;
