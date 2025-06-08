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
import CorporateAuditSection from './components/CorporateAuditSection';

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  
  // Efeito de digitação para os novos textos
  const typingLines = [
    "Melhores praticas",
    "Consultoria e Auditoria especializada.",
  ];
  const [typingText, setTypingText] = useState('');
  const [typingIndex] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  // Função para rolar suavemente até uma seção
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false); // Fecha o menu mobile se estiver aberto
  };

  useEffect(() => {
    // Efeito de fade-in quando o componente é montado
    setIsVisible(true);
  }, []);

  // Efeito de digitação
  useEffect(() => {
    const currentLine = typingLines[lineIndex];
    const typingSpeed = isDeleting ? 50 : 150;
    const pauseBetweenLines = 2000;

    const handleTyping = () => {
      if (isDeleting) {
        // Modo apagando
        if (typingText.length > 0) {
          setTypingText(currentLine.substring(0, typingText.length - 1));
        } else {
          setIsDeleting(false);
          setLineIndex((lineIndex + 1) % typingLines.length);
        }
      } else {
        // Modo digitando
        if (typingText.length < currentLine.length) {
          setTypingText(currentLine.substring(0, typingText.length + 1));
        } else if (typingIndex < 1) {
          // Pausa antes de apagar apenas na primeira passagem
          setTimeout(() => setIsDeleting(true), pauseBetweenLines);
        } else {
          setIsDeleting(true);
        }
      }
    };

    const typingTimer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(typingTimer);
  }, [typingText, isDeleting, lineIndex, typingIndex]);

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
              src="/logo-teeconsulting.png"
              alt="Logo T&E Consulting"
              width={300}
              height={80}
              priority
              className="w-auto h-12 md:h-20" // Adicionado para responsividade
            />
            
            {/* Menu Desktop */}
            <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-sm lg:text-base uppercase tracking-wider text-white flex-wrap justify-end max-w-[60%]">
              <a 
                href="#quem-somos" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('global');
                }}
                className="hover:text-[#EC2224] transition-colors duration-300 whitespace-nowrap"
              >
                Quem Somos
              </a>
              <a 
                href="#consultoria" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('expense');
                }}
                className="hover:text-[#EC2224] transition-colors duration-300 whitespace-nowrap"
              >
                Consultoria
              </a>
              <a 
                href="#auditoria" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('audit');
                }}
                className="hover:text-[#EC2224] transition-colors duration-300 whitespace-nowrap"
              >
                Auditoria
              </a>
              <a 
                href="#certificacao" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('platform');
                }}
                className="hover:text-[#EC2224] transition-colors duration-300 whitespace-nowrap"
              >
                Certificação TE 7000
              </a>
              <a 
                href="#clientes" 
                onClick={(e) => {
                  e.preventDefault();
                  const clientsSection = document.querySelector('.clients-slider');
                  clientsSection?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="hover:text-[#EC2224] transition-colors duration-300 whitespace-nowrap"
              >
                Clientes
              </a>
              <a 
                href="#contato" 
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection('contact');
                }}
                className="hover:text-[#EC2224] transition-colors duration-300 whitespace-nowrap"
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
              absolute right-0 top-0 h-full w-64 bg-[#EC2224] shadow-lg p-6
              transform transition-transform duration-300 ease-in-out
              ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
            `}>
              <button 
                className="absolute top-4 right-4 text-white hover:text-black transition-colors duration-300"
                onClick={toggleMobileMenu}
                aria-label="Fechar menu"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <nav className="flex flex-col gap-6 mt-12 text-lg uppercase text-white">
                <a 
                  href="#quem-somos" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('global');
                  }}
                  className="hover:text-black transition-colors duration-300 py-2"
                >
                  Quem Somos
                </a>
                <a 
                  href="#consultoria" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('expense');
                  }}
                  className="hover:text-black transition-colors duration-300 py-2"
                >
                  Consultoria
                </a>
                <a 
                  href="#auditoria" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('audit');
                  }}
                  className="hover:text-black transition-colors duration-300 py-2"
                >
                  Auditoria
                </a>
                <a 
                  href="#certificacao" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('platform');
                  }}
                  className="hover:text-black transition-colors duration-300 py-2"
                >
                  Certificação TE 7000
                </a>
                <a 
                  href="#clientes" 
                  onClick={(e) => {
                    e.preventDefault();
                    const clientsSection = document.querySelector('.clients-slider');
                    clientsSection?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="hover:text-black transition-colors duration-300 py-2"
                >
                  Clientes
                </a>
                <a 
                  href="#contato" 
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection('contact');
                  }}
                  className="hover:text-black transition-colors duration-300 py-2"
                >
                  Contato
                </a>
              </nav>
            </div>
          </div>

          {/* Conteúdo Principal - Agora dividido em esquerda e direita */}
          <main className="flex flex-1 items-center px-6 md:px-12">
            {/* Parte esquerda - Título principal */}
            <div className={`w-1/2 transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light leading-tight mb-8 space-y-1">
                <div className="text-4xl md:text-5xl font-bold text-[#EC2224] mb-4 min-h-[60px]">
                  {typingText}
                  <span className="animate-pulse">|</span>
                </div>
                <div className="font-light">Viagens e Eventos Corporativos</div>
              </h1>

              {/* Subtítulo - Efeito de slide-in */}
              <div className={`overflow-hidden`}>
                <div className={`text-2xl sm:text-3xl font-light mt-2 border-t border-white pt-6 max-w-xl transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                  Projetos Customizados<br />
                  para transformar a forma como sua empresa viaja.
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>

      <ScrollToTopButton/>

      {/* Seções com IDs para scroll */}

      <div id="global">
        <GlobalPresence />
      </div>

      <div id="expense">
        <ExpenseSection />
      </div>

      <div id="why">
        <WhyLoupitSection />
      </div>

      <div id="audit">
        <CorporateAuditSection />
      </div>

      
{/* <div id="platform">
  <PlatformSection />
</div> */}

      <div className="clients-slider">
        <ClientsSlider />
      </div>

      <div id="hotel">
        <HotelSection />
      </div>

      <div id="benefits">
        <TravelSection />
      </div>

      <div id="integration">
        <IntegrationSection />
      </div>

      <div id="contact">
        <Footer />
      </div>
    </div>
  );
}