'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function ExpenseSection() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    '/img-1-loupit-expense.png',
    '/img-2-loupit-expense.png',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 25000); // 25 segundos

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat bg-fixed text-white py-20 px-6"
      style={{ backgroundImage: "url('/background-expense-loupit.png')" }}
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Texto à esquerda */}
        <div className="z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            GESTÃO DE DESPESAS
          </h2>

          <p className="text-lg text-gray-200 mb-8 max-w-xl">
            A solução definitiva para empresas que buscam controle total e máxima
            eficiência na gestão de despesas corporativas:
          </p>

          <ul className="space-y-4 text-base md:text-lg text-white">
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span> <span>Política de despesas</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span> <span>Redução de fraude</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>{' '}
              <span>Conciliação automática de cartão de crédito de qualquer banco</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span> <span>Gestão de adiantamento</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span>{' '}
              <span>Soluções de pagamento com cashback de 1,5%</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="mt-1">•</span> <span>Pagamentos por pix</span>
            </li>
          </ul>
        </div>

        {/* Carrossel de imagens à direita */}
        <div className="flex items-center justify-center">
          <div className="relative w-full h-[600px] rounded-lg overflow-hidden shadow-2xl">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ${
                  index === currentImage ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <Image
                  src={image}
                  alt={`Demonstração de gestão de despesas ${index + 1}`}
                  layout="fill"
                  objectFit="contain"
                  priority={index === 0}
                />
              </div>
            ))}

            {/* Indicadores de slide */}
            <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  className={`w-4 h-4 rounded-full ${
                    index === currentImage ? 'bg-white' : 'bg-white/50'
                  }`}
                  aria-label={`Ir para imagem ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
