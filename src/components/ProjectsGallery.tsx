import React from 'react';
import { config } from '../data/config';

const ProjectsGallery = () => {
  return (
    <section id="projetos" className="py-24 md:py-32 bg-slate-950 overflow-hidden border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 mb-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              <span className="text-xs font-semibold text-accent tracking-wider uppercase">Portfólio Técnico</span>
            </div>
            <h3 className="text-3xl md:text-5xl font-semibold tracking-tight text-white leading-[1.1]">
              A prova definitiva da nossa excelência.
            </h3>
          </div>
          <p className="text-gray-400 max-w-sm text-lg md:text-right leading-relaxed">
            Instalações que falam por si. Explore nossos projetos recentes, do corporativo ao residencial de alto padrão.
          </p>
        </div>
      </div>

      <div className="relative w-full flex overflow-hidden">
        {/* Gradients for edge fading */}
        <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-[#010518] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-[#010518] to-transparent z-10 pointer-events-none"></div>
        
        {/* Infinite Scroll Track */}
        <div className="flex w-max animate-infinite-scroll hover:[animation-play-state:paused] transition-all duration-300">
          {/* We render the array twice to ensure a seamless infinite loop */}
          {[...config.gallery, ...config.gallery].map((img, i) => (
            <div key={i} className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 flex-shrink-0 px-2 md:px-3 group cursor-pointer">
              <div className="w-full h-full rounded-2xl overflow-hidden bg-white/5 relative border border-white/5">
                <img 
                  src={img} 
                  alt={`Instalação Premium ${i}`} 
                  className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105" 
                />
                <div className="absolute inset-0 bg-blue-900/10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
