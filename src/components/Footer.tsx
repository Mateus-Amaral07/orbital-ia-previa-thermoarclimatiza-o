import React from 'react';
import { ThermometerSnowflake, Instagram, Facebook } from 'lucide-react';
import { config } from '../data/config';

const Footer = () => {
  return (
    <footer className="bg-slate-950 py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          {config.company.logo ? (
            <img src={config.company.logo} alt={`${config.company.name} Logo`} className="h-8 md:h-10 bg-white p-1 rounded w-auto object-contain" />
          ) : (
            <>
              <ThermometerSnowflake className="w-6 h-6 text-primary" />
              <span className="text-lg font-bold tracking-tight text-white">{config.company.name}</span>
            </>
          )}
        </div>
        <div className="text-gray-500 text-sm text-center md:text-left flex flex-col items-center md:items-start gap-1">
          <span>© {new Date().getFullYear()} {config.company.nameFull}. Todos os direitos reservados.</span>
          <span>Criado por <a href="https://orbital-ia.com.br/" target="_blank" rel="noreferrer" className="text-primary hover:text-white transition-colors duration-300">Orbital IA</a></span>
        </div>
        <div className="flex items-center gap-4">
          {config.social.instagram && (
            <a href={config.social.instagram} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all duration-300" aria-label="Instagram">
              <Instagram className="w-5 h-5" />
            </a>
          )}
          {config.social.facebook && (
            <a href={config.social.facebook} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-primary transition-all duration-300" aria-label="Facebook">
              <Facebook className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
