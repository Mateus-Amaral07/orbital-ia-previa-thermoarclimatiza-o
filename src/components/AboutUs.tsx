import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Shield } from 'lucide-react';
import { config } from '../data/config';

const AboutUs = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="sobre-nos" className="py-24 md:py-32 bg-white overflow-hidden text-gray-900">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          {/* Left Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="max-w-xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-accent"></span>
              <span className="text-xs font-semibold text-accent tracking-wider uppercase">Sobre a {config.company.name}</span>
            </div>
            
            <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-[1.1] mb-6">
              {config.about.title}
            </h3>
            
            <p className="text-lg text-gray-600 leading-relaxed mb-10">
              {config.about.description}
            </p>
            
            <div className="grid grid-cols-2 gap-8 pt-8 border-t border-gray-100">
              <div>
                <div className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter mb-1">
                  {config.about.stats.projects}
                </div>
                <div className="text-sm text-gray-500 font-medium">Projetos Executados</div>
              </div>
              <div>
                <div className="text-4xl md:text-5xl font-black text-gray-900 tracking-tighter mb-1">
                  {config.about.stats.satisfaction}
                </div>
                <div className="text-sm text-gray-500 font-medium">Índice de Satisfação</div>
              </div>
            </div>
          </motion.div>

          {/* Right Imagery Block */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="relative"
          >
            {/* Background blur decorative */}
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[120%] h-[120%] bg-primary-light/50 rounded-full blur-3xl -z-10 opacity-70"></div>
            
            {/* Main large image */}
            <div className="relative rounded-3xl overflow-hidden aspect-[4/5] sm:aspect-square md:w-[85%] ml-auto z-10 shadow-2xl shadow-blue-900/10 border border-gray-100/50">
              <img 
                src={config.about.images.main} 
                alt="Ambiente climatizado" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            
            {/* Overlapping floating card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="absolute -bottom-8 -left-4 sm:-left-12 w-[70%] sm:w-[60%] p-2 sm:p-3 bg-white/90 backdrop-blur-xl rounded-3xl shadow-xl border border-white z-20"
            >
              <div className="rounded-2xl overflow-hidden aspect-[4/3] sm:aspect-video relative">
                 <img 
                   src={config.about.images.secondary} 
                   alt="Equipe técnica" 
                   className="w-full h-full object-cover" 
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-[#010518]/90 via-[#010518]/20 to-transparent"></div>
                 <div className="absolute bottom-3 left-3 right-3 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-white">
                   <div>
                     <div className="font-semibold text-xs sm:text-sm tracking-tight text-white">Equipe Própria</div>
                     <div className="text-[10px] sm:text-xs text-blue-200 mt-0.5">Engenharia Premium</div>
                   </div>
                   <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full bg-primary/20 backdrop-blur-md flex items-center justify-center border border-white/20 sm:ml-auto">
                     <Shield className="w-3 h-3 sm:w-4 sm:h-4 text-primary-light" />
                   </div>
                 </div>
              </div>
            </motion.div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
