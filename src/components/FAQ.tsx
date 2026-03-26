import React, { useState, useRef } from 'react';
import { motion, AnimatePresence, useInView } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { config } from '../data/config';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });

  return (
    <section id="faq" className="py-24 md:py-32 bg-white border-t border-gray-100">
      <div className="max-w-3xl mx-auto px-4 md:px-8" ref={ref}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-3xl md:text-5xl font-semibold tracking-tight text-center text-gray-900 mb-16"
        >
          Perguntas Frequentes
        </motion.h2>
        <div className="space-y-4">
          {config.faq.map((faq, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: index * 0.1 + 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="bg-slate-50 rounded-2xl overflow-hidden transition-all duration-200"
            >
              <button 
                className="w-full px-6 md:px-8 py-6 text-left flex justify-between items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-inset cursor-pointer"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <span className="font-medium text-lg text-gray-900 pr-4">{faq.q}</span>
                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 md:px-8 pb-6 text-gray-600 text-lg leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
