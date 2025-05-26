'use client';

import Image from 'next/image';
import { useState} from 'react';

export default function PlatformSection() {
  const [activeTab, setActiveTab] = useState('platform');
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="relative bg-segunda-parte py-20 md:py-32 text-gray-900">
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="flex border-b border-gray-300 mb-12">
          <button
            className={`px-6 py-3 text-lg font-medium transition-colors duration-200 ${
              activeTab === 'platform'
                ? 'text-pink-600 border-b-2 border-pink-600'
                : 'text-gray-600 hover:text-gray-800'
            }`}
            onClick={() => setActiveTab('platform')}
          >
            A PLATAFORMA
          </button>
          <button
            className={`px-6 py-3 text-lg font-medium transition-colors duration-200 ${
              activeTab === 'benefits'
                ? 'text-pink-600 border-b-2 border-pink-600'
                : 'text-gray-600 hover:text-gray-800'
            }`}
            onClick={() => setActiveTab('benefits')}
          >
            BENEFÍCIOS
          </button>
        </div>
        {activeTab === 'platform' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                A PLATAFORMA
              </h2>
              <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl">
                que integra gestão de despesas com um shopping global de viagens, proporcionando uma experiência única e completa para você e sua empresa
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  'Experiência de compra simplificada',
                  'Tarifas globais com descontos',
                  'Consultoria especializada',
                  'Plantão 24/7 - Atendimento humanizado',
                  'Automações que eliminam erros e fraudes',
                  'Relatórios e dashboards customizados',
                  'Processos transparentes',
                  'Política de viagens avançada'
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="text-pink-600 mt-1 mr-3">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:block">
              <Image
                src="/notebook-sys-loupit.png"
                alt="Plataforma Loupit no notebook"
                width={600}
                height={400}
                className="rounded-lg"
              />
            </div>
          </div>
        )}

        {activeTab === 'benefits' && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                BENEFÍCIOS
              </h2>

              <div className="bg-white/90 p-8 rounded-lg shadow-md">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-pink-600 mb-2">No budget custo</h3>
                  <p className="text-gray-700">Portaria do Auditorium 2015</p>
                  <p className="text-gray-700">Cofil de montáculos</p>
                </div>

                <div className="flex justify-between items-end border-t border-gray-300 pt-6">
                  <div>
                    <p className="text-3xl font-bold text-gray-900">R$ 873.93</p>
                    <p className="text-gray-700">Cofil de montáculos</p>
                  </div>
                  <button className="bg-pink-600 hover:bg-pink-700 text-white px-6 py-2 rounded-md transition-colors duration-300">
                    Saiba mais
                  </button>
                </div>
              </div>
            </div>

            <div className="relative hidden lg:block">
              <Image
                src="/iphone-sys-loupit.png"
                alt="App Loupit no iPhone"
                width={300}
                height={600}
                className="rounded-lg mx-auto"
              />
            </div>
          </div>
        )}
        <div className="lg:hidden mt-12">
          <div className="flex justify-center">
            {activeTab === 'platform' ? (
              <Image
                src="/iphone-sys-loupit.png"
                alt="Plataforma Loupit no mobile"
                width={300}
                height={600}
                className="rounded-lg"
              />
            ) : (
              <Image
                src="/notebook-sys-loupit.png"
                alt="Benefícios Loupit no mobile"
                width={600}
                height={400}
                className="rounded-lg"
              />
            )}
          </div>
        </div>
        <div className="flex justify-center mt-16">
          <a
            href="https://wa.me/551120500244"
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 text-lg font-bold rounded-full text-white transition-colors duration-300 text-center"
            style={{
              backgroundColor: isHovered ? '#D4006A' : '#F20077',
              minWidth: '250px',
            }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            TESTE POR 90 DIAS GRÁTIS
          </a>
        </div>
      </div>
    </section>
  );
}