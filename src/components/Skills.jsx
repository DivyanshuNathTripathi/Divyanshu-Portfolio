import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('all');

  const categories = [
    { id: 'all', name: 'All Skills' },
    { id: 'programming', name: 'Programming' },
    { id: 'web', name: 'Web Development' },
    { id: 'ai', name: 'AI & ML' },
    { id: 'backend', name: 'Backend Systems' },
    { id: 'cloud', name: 'Cloud & Tools' }
  ];

  const skillsData = [
    // Programming
    { name: 'C++', category: 'programming', level: 'Intermediate', icon: '💻' },
    { name: 'Python', category: 'programming', level: 'Advanced', icon: '🐍' },
    { name: 'JavaScript', category: 'programming', level: 'Advanced', icon: '🟨' },
    // Web Dev
    { name: 'React', category: 'web', level: 'Advanced', icon: '⚛️' },
    { name: 'HTML5', category: 'web', level: 'Advanced', icon: '🌐' },
    { name: 'CSS3', category: 'web', level: 'Advanced', icon: '🎨' },
    { name: 'Tailwind CSS', category: 'web', level: 'Advanced', icon: '🍃' },
    { name: 'Node.js', category: 'web', level: 'Advanced', icon: '🟢' },
    { name: 'Express.js', category: 'web', level: 'Advanced', icon: '⚙️' },
    { name: 'MongoDB', category: 'web', level: 'Intermediate', icon: '🍃' },
    // AI/ML
    { name: 'Machine Learning', category: 'ai', level: 'Intermediate', icon: '🤖' },
    { name: 'Computer Vision', category: 'ai', level: 'Advanced', icon: '👁️' },
    { name: 'OpenCV', category: 'ai', level: 'Advanced', icon: '📸' },
    // Backend
    { name: 'REST APIs', category: 'backend', level: 'Advanced', icon: '🔗' },
    { name: 'Event-Driven Architecture', category: 'backend', level: 'Intermediate', icon: '⚡' },
    { name: 'Webhooks', category: 'backend', level: 'Advanced', icon: '🪝' },
    // Cloud
    { name: 'GCP', category: 'cloud', level: 'Intermediate', icon: '☁️' },
    { name: 'Twilio', category: 'cloud', level: 'Intermediate', icon: '📞' },
    { name: 'Git', category: 'cloud', level: 'Advanced', icon: '🌿' },
    { name: 'GitHub', category: 'cloud', level: 'Advanced', icon: '🐙' }
  ];

  const filteredSkills = activeTab === 'all' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="bg-white py-28 px-6 md:px-12 w-full relative overflow-hidden font-sans bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:60px_60px]">
      
      {/* Torn paper top divider for styling continuity */}
      <div className="absolute top-0 left-0 w-full pointer-events-none z-10 transform -translate-y-1 rotate-180">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-[#111111]">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto relative z-20">
        
        {/* Header content */}
        <div className="text-center md:text-left mb-16" data-aos="fade-up">
          <div className="inline-block border border-gray-300 rounded-full px-5 py-1.5 text-xs md:text-sm text-gray-600 font-bold mb-4 shadow-sm bg-white">
            My Tech Stack
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-[1.1] tracking-tight">
            Skills &amp; Technologies
          </h2>
          <p className="text-gray-500 text-sm md:text-base max-w-xl font-medium leading-relaxed mt-4">
            An overview of the tools, frameworks, and programming languages I use to build scalable web applications, machine learning modules, and event-driven backend systems.
          </p>
        </div>

        {/* Categories Tab Navigation */}
        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-12" data-aos="fade-up" data-aos-delay="100">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs md:text-sm font-bold transition-all duration-300 shadow-sm border ${
                activeTab === cat.id
                  ? 'bg-red-600 text-white border-red-600 hover:shadow-[0_0_15px_rgba(239,68,68,0.4)]'
                  : 'bg-white text-gray-600 border-gray-200 hover:bg-gray-50'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Skills Wall Grid */}
        <motion.div 
          layout
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {filteredSkills.map((skill, idx) => (
            <motion.div
              layout
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="bg-white border border-gray-100 hover:border-red-500/50 rounded-2xl p-5 shadow-[0_10px_25px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_35px_rgba(239,68,68,0.08)] flex flex-col items-center justify-center text-center group transition-all duration-300 cursor-pointer"
            >
              <span className="text-3xl mb-3 transform group-hover:scale-110 transition-transform duration-300">{skill.icon}</span>
              <h3 className="text-sm font-black text-gray-900 mb-1">{skill.name}</h3>
              <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-gray-400 group-hover:text-red-500 transition-colors">
                {skill.level}
              </span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;
