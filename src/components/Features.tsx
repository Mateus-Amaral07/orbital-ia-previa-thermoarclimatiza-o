import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { ThermometerSnowflake, ChevronRight, Wrench, Zap, CheckCircle2, PenTool } from 'lucide-react';
import { config } from '../data/config';

const iconMap: Record<string, React.ElementType> = {
  ThermometerSnowflake,
  Wrench,
  Zap,
  PenTool,
  CheckCircle2
};

const Features = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section id="servicos" className="py-24 md:py-32 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16" ref={ref}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="max-w-2xl mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/30 mb-6">
            <span className="w-2 h-2 rounded-full bg-accent"></span>
            <span className="text-xs font-semibold text-accent tracking-wider uppercase">Nossos Serviços</span>
          </div>
          <h3 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-[1.1]">
            Engenharia climática para quem não aceita menos que o melhor.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {config.services.map((service, index) => {
            const Icon = iconMap[service.icon] || CheckCircle2;
            
            // Large Card (Card 0)
            if (index === 0) {
              return (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="md:col-span-2 bg-slate-50 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col justify-between group hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <Icon className={`w-10 h-10 ${service.iconColor} mb-6`} />
                    <h4 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 tracking-tight">{service.title}</h4>
                    <p className="text-gray-600 text-lg max-w-md leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: service.description }} />
                    <a href="#contato" className="inline-flex items-center text-primary-dark hover:text-primary font-medium text-sm transition-all group-hover:gap-2 tracking-wide uppercase">
                      Saber mais <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                  {service.image && (
                    <div className="mt-12 rounded-2xl overflow-hidden aspect-video relative">
                      <img src={service.image} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={service.title} />
                    </div>
                  )}
                </motion.div>
              );
            }

            // Small Card 2 (Dark)
            if (service.dark) {
              return (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="bg-slate-950 text-white rounded-3xl p-8 md:p-10 shadow-sm flex flex-col group hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <Icon className={`w-10 h-10 ${service.iconColor} mb-6`} />
                    <h4 className="text-2xl font-semibold mb-4 tracking-tight">{service.title}</h4>
                    <p className="text-gray-400 text-lg mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: service.description }} />
                    <a href="#contato" className="inline-flex items-center text-yellow-400 hover:text-yellow-300 font-medium text-sm transition-all group-hover:gap-2 tracking-wide uppercase mb-10">
                      Saber mais <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                  {service.features && service.features.length > 0 && (
                    <div className="mt-auto">
                      <ul className="space-y-4">
                        {service.features.map((feat, i) => (
                           <li key={i} className="flex items-center gap-3 text-gray-300"><CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0"/> {feat}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              );
            }

            // Large Card (flex-row style)
            if (service.isLarge && index > 0) {
              return (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="md:col-span-2 bg-slate-50 rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 flex flex-col md:flex-row items-stretch gap-10 group hover:shadow-md transition-all duration-300"
                >
                  <div className="flex-1 flex flex-col">
                    <Icon className={`w-10 h-10 ${service.iconColor} mb-6`} />
                    <h4 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 tracking-tight">{service.title}</h4>
                    <p className="text-gray-600 text-lg leading-relaxed mb-6" dangerouslySetInnerHTML={{ __html: service.description }} />
                    <div className="mt-auto pt-4">
                      <a href="#contato" className="inline-flex items-center text-primary-dark hover:text-primary font-medium text-sm transition-all group-hover:gap-2 tracking-wide uppercase">
                        Saber mais <ChevronRight className="w-4 h-4 ml-1" />
                      </a>
                    </div>
                  </div>
                  {service.image && (
                    <div className="flex-1 w-full rounded-2xl overflow-hidden relative min-h-[250px] mt-2 md:mt-0">
                      <img src={service.image} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={service.title} />
                    </div>
                  )}
                </motion.div>
              );
            }

            // Default Small Card
            return (
                <motion.div 
                  key={service.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
                  className="bg-slate-50 rounded-3xl p-8 md:p-10 shadow-sm border border-gray-100 flex flex-col justify-between group hover:shadow-md transition-all duration-300"
                >
                  <div>
                    <Icon className={`w-10 h-10 ${service.iconColor} mb-6`} />
                    <h4 className="text-2xl font-semibold text-gray-900 mb-4 tracking-tight">{service.title}</h4>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed" dangerouslySetInnerHTML={{ __html: service.description }} />
                    <a href="#contato" className="inline-flex items-center text-primary-dark hover:text-primary font-medium text-sm transition-all group-hover:gap-2 tracking-wide uppercase mb-2">
                      Saber mais <ChevronRight className="w-4 h-4 ml-1" />
                    </a>
                  </div>
                  {service.image && (
                    <div className="mt-6 flex-1 w-full rounded-2xl overflow-hidden relative min-h-[240px]">
                      <img src={service.image} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt={service.title} />
                    </div>
                  )}
                </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
