'use client';

import Image from 'next/image';
import { useState } from 'react';

export default function PlatformSection() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative bg-segunda-parte py-20 md:py-32 text-gray-900">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              CERTIFICADO TE CONSULTING
            </h2>
            <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl">
              A TE Consulting é certificada pela ANAC como Agência de Viagens, garantindo 
              qualidade e segurança em todos os serviços oferecidos.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                'Certificação ANAC nº 2023-1-0036',
                'Agência de viagens autorizada',
                'Processos regulamentados',
                'Segurança nas transações',
                'Conformidade com as normas',
                'Atendimento especializado',
                'Suporte durante toda a viagem',
                'Gestão de viagens corporativas'
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="text-[#EC2224] mt-1 mr-3">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <span className="text-lg text-gray-800">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="w-full max-w-md"> {/* Container para controlar o tamanho */}
              <Image
                src="/certificado-te-consulting.png"
                alt="Certificado TE Consulting"
                width={450}
                height={300} 
                className="rounded-lg object-contain"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-16">
          <a
            href="https://wa.me/5511983669028"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 text-lg font-bold rounded-full text-white transition-colors duration-300 text-center"
            style={{
              backgroundColor: isHovered ? '#D4006A' : '#EC2224',
              minWidth: '250px',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            FALE CONOSCO
          </a>
        </div>
      </div>
    </section>
  );
}