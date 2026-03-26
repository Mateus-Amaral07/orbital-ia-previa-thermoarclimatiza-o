import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { config } from '../data/config';

const BottomCTA = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <section id="contato" className="py-24 md:py-32 bg-slate-950 text-center px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-500 via-transparent to-transparent"></div>
      <div className="relative z-10 max-w-3xl mx-auto" ref={ref}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-6 leading-[1.1]"
        >
          {config.bottomCta.headline}
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-xl text-gray-400 mb-12 max-w-xl mx-auto"
        >
          {config.bottomCta.subheadline}
        </motion.p>
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={isInView ? { opacity: 1, y: 0 } : {}}
           transition={{ duration: 0.8, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
          <a href={`https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(config.contact.whatsappMessage)}`} target="_blank" rel="noreferrer" className="relative inline-flex group w-full sm:w-auto">
            <button className="btn-slide-effect btn-cta-ghost w-full sm:w-auto inline-flex items-center justify-center px-8 py-5 text-lg font-bold rounded-xl">
              <MessageCircle className="w-6 h-6 mr-2" />
              {config.bottomCta.buttonText}
            </button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default BottomCTA;
