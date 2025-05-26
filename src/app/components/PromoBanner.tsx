'use client';

import { useEffect, useState } from 'react';

export default function PromoBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  useEffect(() => {
    // Verifica se o usuário já fechou o banner anteriormente
    const closedStatus = localStorage.getItem('bannerClosed');
    if (closedStatus) {
      const closedTime = parseInt(closedStatus, 10);
      const currentTime = new Date().getTime();
      
      // Se passaram mais de 40 segundos desde o fechamento, mostra novamente
      if (currentTime - closedTime > 40000) {
        setIsClosed(false);
      } else {
        setIsClosed(true);
        return;
      }
    }

    const handleScroll = () => {
      if (isClosed) return;
      
      const scrollY = window.scrollY;

      if (scrollY > 100 && !showBanner) {
        setShowBanner(true);
      } else if (scrollY < 20 && showBanner) {
        setShowBanner(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [showBanner, isClosed]);

  const handleClose = () => {
    setShowBanner(false);
    setIsClosed(true);
    // Armazena o momento em que o usuário fechou o banner
    localStorage.setItem('bannerClosed', new Date().getTime().toString());
    
    // Depois de 40 segundos, reseta o estado de fechado
    setTimeout(() => {
      setIsClosed(false);
    }, 40000);
  };

  if (!showBanner || isClosed) return null;

  return (
    <div
      className="fixed top-0 left-0 w-full z-50 bg-[#EC2224] text-white shadow-md py-3 px-4 transition-all duration-500"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-base md:text-lg font-medium relative">
        <div className="text-center md:text-left">
          Faça seu certificado hoje, não perca
        </div>
        
        <div className="flex items-center gap-4">
          <a
            href="#certificado" // Substitua pelo link real de ação
            className="bg-white text-[#EC2224] hover:bg-gray-100 transition-colors px-5 py-2 rounded-md text-sm md:text-base font-semibold whitespace-nowrap"
          >
            FAZER AGORA MEU CERTIFICADO
          </a>
          
          <button
            onClick={handleClose}
            className="text-white text-2xl hover:text-gray-300"
            aria-label="Fechar banner"
          >
            &times;
          </button>
        </div>
      </div>
    </div>
  );
}