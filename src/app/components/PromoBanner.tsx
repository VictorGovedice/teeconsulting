'use client';

import { useEffect, useState } from 'react';

export default function PromoBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  const banners = [
    {
      id: 'empresa',
      bgColor: 'bg-[#EC2224]', // Vermelho escuro
      barColor: 'bg-[#FF6B6B]', // Vermelho claro
      text: 'EMPRESA: Otimize suas viagens corporativas',
      buttonText: 'Diagnóstico gratuito',
      buttonLink: '#diagnostico-viagens'
    },
    {
      id: 'fornecedores',
      bgColor: 'bg-[#FF6B6B]', // Vermelho claro
      barColor: 'bg-[#EC2224]', // Vermelho escuro
      text: 'Fornecedores: Destaque-se no mercado',
      buttonText: 'Certificação',
      buttonLink: '#certificacao-fornecedores'
    }
  ];

  useEffect(() => {
    const closedStatus = localStorage.getItem('bannerClosed');
    if (closedStatus) {
      const closedTime = parseInt(closedStatus, 10);
      const currentTime = new Date().getTime();
      
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
    localStorage.setItem('bannerClosed', new Date().getTime().toString());
    
    setTimeout(() => {
      setIsClosed(false);
    }, 40000);
  };

  if (!showBanner || isClosed) return null;

  return (
    <div className="fixed top-0 left-0 w-full z-50">
      <div className="flex">
        {banners.map((banner) => (
          <div key={banner.id} className="flex-1 relative">
            {/* Barra lateral esquerda */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${banner.barColor}`}></div>
            
            {/* Conteúdo principal */}
            <div className={`${banner.bgColor} text-white shadow-md py-2 px-4 h-full`}>
              <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2 text-sm md:text-base font-medium relative">
                <div className="text-center md:text-left">
                  {banner.text}
                </div>
                
                <div className="flex items-center gap-2">
                  <a
                    href={banner.buttonLink}
                    className="bg-white text-black hover:bg-gray-100 transition-colors px-3 py-1 rounded-md text-xs md:text-sm font-semibold whitespace-nowrap"
                  >
                    {banner.buttonText}
                  </a>
                </div>
              </div>
            </div>
            
            {/* Barra lateral direita */}
            <div className={`absolute right-0 top-0 bottom-0 w-1 ${banner.barColor}`}></div>
          </div>
        ))}
      </div>
      
      <button
        onClick={handleClose}
        className="absolute top-2 right-2 text-white text-xl hover:text-gray-300"
        aria-label="Fechar banner"
      >
        &times;
      </button>
    </div>
  );
}