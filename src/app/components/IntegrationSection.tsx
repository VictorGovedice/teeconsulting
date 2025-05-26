'use client';

import Image from 'next/image';

export default function IntegrationSection() {
  return (
    <section className="bg-white w-full py-20 px-6 text-black">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Texto à esquerda */}
        <div>
          <h2 className="text-2xl md:text-3xl font-light leading-relaxed">
            <span className="font-bold text-[#F20077]">LOUPIT </span>
            INTEGRAÇÃO SEM FRIÇÃO COM<br />
            <span className="font-bold text-gray-800">
              SISTEMAS ERP, RH OU FINANCEIRO
            </span>{' '}
            DE SUA PREFERÊNCIA
          </h2>
        </div>

        {/* Imagem à direita */}
        <div className="flex justify-center lg:justify-end">
          <Image
            src="/integration-loupit-erpts.png"
            alt="Integração Loupit com ERP"
            width={600} // substitua pelo width real da sua imagem
            height={400} // substitua pelo height real da sua imagem
            className="rounded-md shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}