'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import './globals.css';
import PlatformSection from '@/app/components/PlatformSection';
import ClientsSlider from './components/ClientsSlider';
import GlobalPresence from './components/GlobalPresence';
import HotelSection from './components/HotelSection';
import TravelSection from './components/TravelSection';
import ExpenseSection from './components/ExpenseSection';
import IntegrationSection from './components/IntegrationSection';
import WhyLoupitSection from './components/WhyLoupitSection';
import Footer from './components/Footer';
import PromoBanner from './components/PromoBanner';
import ScrollToTopButton from './components/FloatingButtons';

export default function Home() {
  const lines = [
    { text: 'O FUTURO DA VIAGEM', isPink: true, isBold: true },
    { text: 'CORPORATIVA CHEGOU', isPink: false, isBold: false }
  ];

  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [displayedLines, setDisplayedLines] = useState<{text: string, isPink: boolean, isBold: boolean}[]>([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);

  // Função para rolar suavemente até uma seção
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Fecha o menu mobile se estiver aberto
  };

  // Função para reiniciar a animação
  const resetAnimation = () => {
    setCurrentLineIndex(0);
    setCurrentText('');
    setDisplayedLines([]);
    setAnimationComplete(false);
  };

  // Efeito de digitação
  useEffect(() => {
    if (currentLineIndex >= lines.length) {
      setAnimationComplete(true);
      return;
    }

    const line = lines[currentLineIndex];
    let charIndex = 0;
    let text = '';

    const typeLine = setInterval(() => {
      if (charIndex < line.text.length) {
        text += line.text[charIndex];
        setCurrentText(text);
        charIndex++;
      } else {
        clearInterval(typeLine);
        setTimeout(() => {
          setDisplayedLines(prev => [...prev, line]);
          setCurrentText('');
          setCurrentLineIndex(prev => prev + 1);
        }, 800);
      }
    }, 80);

    return () => clearInterval(typeLine);
  }, [currentLineIndex]);

  // Efeito para reiniciar a animação após 25 segundos quando completa
  useEffect(() => {
    if (!animationComplete) return;

    const restartTimer = setTimeout(() => {
      resetAnimation();
    }, 25000); // 25 segundos

    return () => clearTimeout(restartTimer);
  }, [animationComplete]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="text-white">
      <PromoBanner/>
      {/* Seção Hero */}
      <div className="min-h-screen relative bg-loupit-hero">
        {/* Overlay escuro */}
        <div className="absolute inset-0 bg-opacity-50 z-0" />

        <div className="relative z-10 flex flex-col min-h-screen">
          {/* Top Menu */}
          <header className="flex justify-between items-center px-6 md:px-12 py-6">
            <Image
              src="/loupit-logo.png"
              alt="Logo Loupit"
              width={150}
              height={50}
              priority
            />
            
            {/* Menu Desktop */}
            <nav className="hidden md:flex gap-8 text-base uppercase tracking-wider text-white">
              <a 
                href="#platform" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('platform');
                }}
                className="hover:text-pink-500 transition-colors duration-300"
              >
                Plataforma
              </a>
              <a 
                href="#travel" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('travel');
                }}
                className="hover:text-pink-500 transition-colors duration-300"
              >
                Viagem
              </a>
              <a 
                href="#expense" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('expense');
                }}
                className="hover:text-pink-500 transition-colors duration-300"
              >
                Gestão de despesas
              </a>
              <a 
                href="#integration" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('integration');
                }}
                className="hover:text-pink-500 transition-colors duration-300"
              >
                Integração
              </a>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="hover:text-pink-500 transition-colors duration-300"
              >
                Contato
              </a>
            </nav>

            {/* Botão Hambúrguer Mobile */}
            <button 
              className="md:hidden text-white focus:outline-none"
              onClick={toggleMobileMenu}
              aria-label="Abrir menu"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </header>

          {/* Sidebar Mobile */}
          <div className={`
            fixed inset-0 z-50 bg-black bg-opacity-70 md:hidden
            transition-opacity duration-300 ease-in-out
            ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}
          `}>
            <div className={`
              absolute right-0 top-0 h-full w-64 bg-gray-900 shadow-lg p-6
              transform transition-transform duration-300 ease-in-out
              ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            `}>
              <button 
                className="absolute top-4 right-4 text-white hover:text-pink-500 transition-colors duration-300"
                onClick={toggleMobileMenu}
                aria-label="Fechar menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <nav className="flex flex-col gap-6 mt-12 text-lg uppercase text-white">
                <a 
                  href="#platform" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('platform');
                  }}
                  className="hover:text-pink-500 transition-colors duration-300 py-2"
                >
                  Plataforma
                </a>
                <a 
                href="#clients" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('clients');
                }}
                className="hover:text-pink-500 transition-colors duration-300"
              >
                Clientes
              </a>
              <a 
                href="#global" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('global');
                }}
                className="hover:text-pink-500 transition-colors duration-300"
              >
                Presença global
              </a>
              <a 
                href="#hotel" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('hotel');
                }}
                className="hover:text-pink-500 transition-colors duration-300"
              >
                Hospedagem
              </a>
              <a 
                href="#travel" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('travel');
                }}
                className="hover:text-pink-500 transition-colors duration-300"
              >
                Viagem
              </a>
              <a 
                href="#expense" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('expense');
                }}
                className="hover:text-pink-500 transition-colors duration-300"
              >
                Gestão de despesas
              </a>
              <a 
                href="#integration" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('integration');
                }}
                className="hover:text-pink-500 transition-colors duration-300"
              >
                Integração
              </a>
              <a 
                href="#why" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('why');
                }}
                className="hover:text-pink-500 transition-colors duration-300"
              >
                Porque loupit??
              </a>
              <a 
                href="#contact" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="hover:text-pink-500 transition-colors duration-300"
              >
                Contato
              </a>
              </nav>
            </div>
          </div>

          {/* Conteúdo Principal */}
          <main className="flex flex-1 items-center px-6 md:px-12">
            <div className="max-w-2xl">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-tight mb-8 space-y-1">
                {displayedLines.map((line, idx) => (
                  <div 
                    key={idx} 
                    className={`
                      ${line.isPink ? 'text-pink-500' : ''}
                      ${line.isBold ? 'font-bold' : 'font-light'}
                    `}
                  >
                    {line.text}
                  </div>
                ))}
                {currentText && (
                  <div className="border-r-2 border-white inline-block pr-1 animate-pulse">
                    {currentText}
                  </div>
                )}
              </h1>

              {/* Subtítulo */}
              {currentLineIndex >= lines.length && (
                <p className="text-2xl sm:text-3xl font-light mt-2 border-t border-white pt-6 max-w-xl">
                  Mais rapidez, inovação e economia<br />
                  para transformar a forma como sua empresa viaja.
                </p>
              )}
            </div>
          </main>
        </div>
      </div>

      <ScrollToTopButton/>

      {/* Seções com IDs para scroll */}
      <div id="platform">
        <PlatformSection />
      </div>

      <div id="clients">
        <ClientsSlider />
      </div>

      <div id="global">
        <GlobalPresence />
      </div>

      <div id="hotel">
        <HotelSection />
      </div>

      <div id="travel">
        <TravelSection />
      </div>

      <div id="expense">
        <ExpenseSection />
      </div>

      <div id="integration">
        <IntegrationSection />
      </div>

      <div id="why">
        <WhyLoupitSection />
      </div>

      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}