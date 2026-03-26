import React, { useEffect } from 'react';
import { config } from './data/config';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustSignals from './components/TrustSignals';
import AboutUs from './components/AboutUs';
import Features from './components/Features';
import ProjectsGallery from './components/ProjectsGallery';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import BottomCTA from './components/BottomCTA';
import Footer from './components/Footer';

export default function App() {
  useEffect(() => {
    // Definir título dinamicamente
    document.title = config.company.name;

    // Aplicar variáveis CSS globais para as cores primárias do tema
    const root = document.documentElement;
    root.style.setProperty('--color-primary', config.colors.primary);
    root.style.setProperty('--color-primary-hover', config.colors.primaryHover);
    root.style.setProperty('--color-primary-light', config.colors.primaryLight);
    root.style.setProperty('--color-primary-dark', config.colors.primaryDark);
    root.style.setProperty('--color-accent', config.colors.accent);
  }, []);

  return (
    <div className="bg-slate-950 min-h-screen text-white font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <Hero />
      <TrustSignals />
      <AboutUs />
      <div className="bg-white text-gray-900">
        <Features />
      </div>
      <ProjectsGallery />
      <Testimonials />
      <div className="bg-white text-gray-900">
        <FAQ />
      </div>
      <BottomCTA />
      <Footer />
    </div>
  );
}
