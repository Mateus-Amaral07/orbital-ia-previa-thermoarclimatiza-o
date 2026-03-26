import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Star } from 'lucide-react';
import { config } from '../data/config';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[720px] flex items-center justify-start overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src={config.hero.images.background} 
          alt="Climatização" 
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/50 to-slate-950"></div>
      </div>
      
      <div className="relative z-10 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto w-full mt-20">
        <div className="max-w-3xl">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-2 mb-8"
          >
            <div className="flex -space-x-2">
              {config.hero.images.avatars.map((avatar, i) => (
                <img key={i} src={avatar} className="w-8 h-8 rounded-full border-2 border-[#010518]" alt="Cliente" />
              ))}
            </div>
            <div className="flex items-center text-sm font-medium text-gray-300 ml-2">
              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
              <span>{config.hero.stats.rating.toFixed(1)} de {config.hero.stats.reviewsCount} avaliações</span>
            </div>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-[56px] leading-[1.05] md:text-[80px] lg:text-[100px] font-semibold tracking-[-0.02em] text-white mb-8"
            dangerouslySetInnerHTML={{ __html: config.hero.headline }}
          />

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mb-12 leading-relaxed"
          >
            {config.hero.subheadline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <a href={`https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(config.contact.whatsappMessage)}`} target="_blank" rel="noreferrer" className="relative inline-flex group w-full sm:w-auto">
              <div className="absolute transition-all duration-1000 opacity-40 -inset-px bg-green-500 rounded-xl blur-lg group-hover:opacity-60 group-hover:-inset-1 group-hover:duration-200 animate-pulse"></div>
              <button className="btn-slide-effect btn-cta-solid w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 md:py-5 text-lg font-bold rounded-xl">
                <MessageCircle className="w-6 h-6 mr-2" />
                {config.hero.ctaText}
              </button>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
