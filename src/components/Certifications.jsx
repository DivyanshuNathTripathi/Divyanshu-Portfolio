import React from 'react';

const Certifications = () => {
  const certs = [
    { title: "Full Stack Internship Certificate", provider: "WSA Internship", icon: "💻" },
    { title: "ISRO Remote Sensing and Digital Image Analysis", provider: "ISRO", icon: "🛰️" },
    { title: "Deloitte Data Analytics Simulation", provider: "Deloitte / Forage", icon: "📊" },
    { title: "JP Morgan Software Engineering Simulation", provider: "JP Morgan / Forage", icon: "📈" },
    { title: "Tata GenAI Data Analytics Simulation", provider: "Tata / Forage", icon: "🤖" }
  ];

  return (
    <section id="certifications" className="bg-[#ff2a2a] py-28 px-6 md:px-12 w-full relative overflow-hidden font-sans text-white">
      {/* Decorative stars / shapes */}
      <div className="absolute top-10 left-10 text-black opacity-20 animate-pulse">
        <svg className="w-12 h-12" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center md:text-left mb-16" data-aos="fade-up">
          <div className="inline-block border border-white/30 bg-white/10 rounded-full px-5 py-1.5 text-xs md:text-sm text-white font-bold mb-4">
            Credentials
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-black tracking-tight leading-tight">
            Certifications
          </h2>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {certs.map((cert, idx) => (
            <div 
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="bg-white/5 border border-white/10 hover:border-black/40 rounded-3xl p-6 backdrop-blur-md hover:bg-white/10 transition-all duration-300 flex items-start gap-4"
            >
              <div className="w-12 h-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-2xl shrink-0">
                {cert.icon}
              </div>
              <div>
                <h3 className="text-base md:text-lg font-black text-white leading-snug">
                  {cert.title}
                </h3>
                <p className="text-red-100 font-mono text-xs mt-1.5 font-bold uppercase tracking-wider">
                  {cert.provider}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Torn paper bottom divider */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#111111]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default Certifications;
