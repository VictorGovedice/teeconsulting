'use client';

import { useEffect, useState } from 'react';

export default function PromoBanner() {
  const [showBanner, setShowBanner] = useState(false);
  const [isClosed, setIsClosed] = useState(false);

  const banners = [
    {
      id: 'empresa',
      bgColor: 'bg-[#EC2224]',
      text: 'EMPRESA: Otimize suas viagens corporativas',
      buttonText: 'Solicite seu diagnóstico em viagens corporativas gratuito',
      buttonLink: '#diagnostico-viagens'
    },
    {
      id: 'fornecedores',
      bgColor: 'bg-[#2E5CFF]',
      text: 'Fornecedores: Destaque-se no mercado',
      buttonText: 'Solicite sua certificação de melhores práticas',
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
      {banners.map((banner) => (
        <div
          key={banner.id}
          className={`w-full ${banner.bgColor} text-white shadow-md py-3 px-4`}
        >
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-base md:text-lg font-medium relative">
            <div className="text-center md:text-left">
              {banner.text}
            </div>
            
            <div className="flex items-center gap-4">
              <a
                href={banner.buttonLink}
                className="bg-white text-black hover:bg-gray-100 transition-colors px-5 py-2 rounded-md text-sm md:text-base font-semibold whitespace-nowrap"
              >
                {banner.buttonText}
              </a>
            </div>
          </div>
        </div>
      ))}
      
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-white text-2xl hover:text-gray-300"
        aria-label="Fechar banner"
      >
        &times;
      </button>
    </div>
  );
}