import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#111111] text-[#d4d4d4] py-16 px-6 md:px-12 w-full font-mono text-[10px] md:text-xs tracking-widest flex flex-col justify-between min-h-[45vh]">
      
      {/* Top Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full font-medium">
        <div className="flex flex-col gap-1">
          <p>MERN Full Stack Development</p>
          <p>AI, ML &amp; Computer Vision Systems</p>
          <p>Scalable Backend Engineering</p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <p>Building Real-World Projects</p>
          <a href="#projects" className="underline hover:text-white transition-colors mt-1 underline-offset-4 decoration-1">View Projects</a>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <p>Gorakhpur, India</p>
          <p>{new Date().getFullYear()}</p>
        </div>
      </div>

      {/* Middle Huge Text */}
      <div className="w-full flex justify-center items-center py-16 md:py-20 overflow-hidden">
        <h2 className="text-[14vw] leading-none font-sans font-black tracking-tighter uppercase select-none text-[#f4f4f4] w-full text-center">
          DIVYANSHU.
        </h2>
      </div>

      {/* Bottom Row */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full items-end font-medium">
        <div className="flex flex-col gap-6">
          <div className="flex flex-wrap gap-4 text-xs font-bold font-sans">
            <a href="#home" className="hover:text-white transition-colors">Home</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>
          <p className="text-white/60 font-mono text-[9px] md:text-[10px]">
            &copy; {new Date().getFullYear()} Divyanshu Nath Tripathi. All Rights Reserved.
          </p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-center">
          <p className="text-white/80 font-bold lowercase tracking-normal">divyanshutrip2003@gmail.com</p>
        </div>
        
        <div className="flex flex-col gap-1 md:items-end">
          <p className="text-red-500 font-bold tracking-normal text-[11px] font-sans">Full Stack Developer | AI Engineer | MERN Developer</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
