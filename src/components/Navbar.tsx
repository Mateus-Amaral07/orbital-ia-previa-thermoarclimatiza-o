import React, { useState, useEffect } from 'react';
import { ThermometerSnowflake } from 'lucide-react';
import { config } from '../data/config';
/**
 * Navbar Component
 * Estilo atualizado: removida a borda branca e adicionado efeito de sombra suave
 */
const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg py-4' 
        : 'bg-transparent py-7'
    }`}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center">
        <div className="flex items-center gap-2 group cursor-pointer">
          {config.company.logo ? (
            <img src={config.company.logo} alt={`${config.company.name} Logo`} className="h-10 w-auto object-contain" />
          ) : (
            <ThermometerSnowflake className={`w-8 h-8 transition-transform group-hover:rotate-12 ${scrolled ? 'text-primary' : 'text-primaryLight'}`} />
          )}
          {/* Ocultando o nome da empresa quando temos a logo, pois a request fala que a logo_with_name já tem o nome e é para usar ela */}
          {!config.company.logo && (
            <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>{config.company.name}</span>
          )}
        </div>
        
        <div className={`hidden md:flex items-center gap-8 text-sm font-medium transition-colors duration-300 ${scrolled ? 'text-slate-700' : 'text-gray-300'}`}>
          <a href="#sobre-nos" className={`hover:text-accent`}>Sobre Nós</a>
          <a href="#servicos" className={`hover:text-accent`}>Serviços</a>
          <a href="#projetos" className={`hover:text-accent`}>Projetos</a>
          <a href="#depoimentos" className={`hover:text-accent`}>Depoimentos</a>
          <a href="#faq" className={`hover:text-accent`}>FAQ</a>
        </div>

        <a 
          href={`https://wa.me/${config.contact.whatsapp}?text=${encodeURIComponent(config.contact.whatsappMessage)}`}
          target="_blank" 
          rel="noreferrer" 
          className="relative overflow-hidden bg-accent text-white shadow-lg px-6 py-2.5 rounded-full text-sm font-bold hover:opacity-90 hover:scale-105 transition-all group"
        >
          <span className="relative z-10">Orçamento Gratuito</span>
          <div className="absolute top-0 -inset-full h-full w-[150%] z-0 block bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
