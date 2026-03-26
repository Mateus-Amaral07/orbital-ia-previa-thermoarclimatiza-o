import React, { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { config } from '../data/config';

const ReviewCard = ({ review, index }: { review: any; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="group relative flex flex-col p-8 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 backdrop-blur-sm transition-all duration-500 hover:bg-white/[0.07] hover:shadow-md hover:border-blue-500/30 cursor-default"
    >
      {/* Subtle glow on hover */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-blue-500/5 via-transparent to-blue-400/5 pointer-events-none" />

      {/* Quote icon */}
      <div className="mb-5">
        <Quote className="w-8 h-8 text-blue-400/40" strokeWidth={1.5} />
      </div>

      {/* Stars */}
      <div className="flex gap-0.5 mb-5">
        {Array.from({ length: review.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
        ))}
      </div>

      {/* Text */}
      <p className="text-gray-300 text-base leading-relaxed flex-grow mb-8 font-light">
        {review.text}
      </p>

      {/* Author */}
      <div className="flex items-center gap-3.5 pt-6 border-t border-white/10">
        <div className="relative">
          <img
            src={review.avatar}
            alt={review.author}
            className="w-11 h-11 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-blue-400/30 transition-all duration-300"
          />
          <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-[#010518]" />
        </div>
        <div>
          <div className="font-semibold text-white text-sm tracking-tight">{review.author}</div>
          <div className="text-xs text-gray-500 mt-0.5">{review.role}</div>
        </div>
        <div className="ml-auto">
          <div className="text-xs font-medium text-gray-600 bg-white/5 px-2.5 py-1 rounded-full border border-white/5">Google</div>
        </div>
      </div>
    </motion.div>
  );
};

const Testimonials = () => {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: '-60px' });

  return (
    <section id="depoimentos" className="bg-slate-950 relative overflow-hidden py-24 md:py-32">
      {/* Ambient blobs */}
      <div className="absolute top-[60%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-blue-600/8 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-400/5 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 relative z-10">

        {/* ── Header ── compact, centered */}
        <div ref={headerRef} className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65 }}
            className="text-4xl md:text-5xl font-semibold tracking-tight text-white leading-[1.1] mb-8"
          >
            Não acredite{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">
              apenas na nossa palavra.
            </span>
          </motion.h2>

          {/* Aggregate rating */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.55, delay: 0.15 }}
            className="inline-flex items-center gap-5 bg-white/[0.04] border border-white/10 rounded-2xl px-7 py-4"
          >
            <div className="flex flex-col items-center">
              <span className="text-3xl font-bold text-white tabular-nums leading-none">{config.testimonials.aggregate.rating.toFixed(1)}</span>
              <div className="flex gap-0.5 mt-1.5">
                {[1,2,3,4,5].map(i => <Star key={i} className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />)}
              </div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-left">
              <div className="text-lg font-bold text-white leading-none">{config.testimonials.aggregate.count}</div>
              <div className="text-xs text-gray-400 mt-1">avaliações no Google</div>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="text-left">
              <div className="text-lg font-bold text-white leading-none">{config.testimonials.aggregate.recommendation}</div>
              <div className="text-xs text-gray-400 mt-1">recomendam o serviço</div>
            </div>
          </motion.div>
        </div>

        {/* ── Cards — reviews are the focus ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {config.testimonials.reviews.slice(0, 3).map((review, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="group relative flex flex-col p-8 rounded-2xl bg-white/[0.04] border border-white/10 hover:border-white/20 hover:bg-white/[0.07] transition-all duration-400 hover:shadow-md hover:border-blue-500/30 cursor-default"
            >
              {/* Hover glow */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-accent/5 via-transparent to-orange-400/3 pointer-events-none" />

              {/* Top: stars + quote */}
              <div className="flex items-start justify-between mb-6">
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <Quote className="w-7 h-7 text-accent/30 flex-shrink-0" strokeWidth={1.5} />
              </div>

              {/* Review text — prominent */}
              <p className="text-white/80 text-base md:text-[17px] leading-relaxed flex-grow mb-8">
                {review.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3.5 pt-6 border-t border-white/10">
                <div className="relative flex-shrink-0">
                  <img
                    src={review.avatar}
                    alt={review.author}
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-white/10 group-hover:ring-blue-400/25 transition-all duration-300"
                  />
                  <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-green-500 rounded-full border-2 border-[#010518]" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="font-semibold text-white text-sm truncate">{review.author}</div>
                  <div className="text-xs text-gray-500 mt-0.5 truncate">{review.role}</div>
                </div>
                <div className="text-xs font-medium text-gray-600 bg-white/5 px-2.5 py-1 rounded-full border border-white/5 flex-shrink-0">
                  Google
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
