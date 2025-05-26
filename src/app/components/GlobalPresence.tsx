'use client';

import Image from 'next/image';

export default function GlobalPresence() {
  return (
    <section className="bg-white py-20 px-6 w-full">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
          Presença global, expertise local
        </h2>

        <p className="text-lg text-gray-600 mb-8">
          Fazemos parte da aliança global Uniglobe Travel
        </p>

        <div className="flex justify-center mb-8">
          <Image 
            src="/uniglobe-travel-loupit.png"
            alt="Uniglobe Travel Logo"
            width={160}
            height={32}
            className="object-contain h-8 md:h-8 w-auto"
            priority
          />
        </div>

        <div className="text-base md:text-lg text-gray-700 space-y-6 text-left md:text-center">
          <p>
            Somos parte da aliança global Uniglobe, uma rede canadense presente em 90 países, 
            atendendo clientes ao redor do mundo. Com faturamento anual superior a USD 5 bilhões 
            e mais de 400 escritórios distribuídos pelo planeta, garantimos presença e expertise internacional.
          </p>
          <p>
            Nosso ecossistema nos proporciona um alto poder de negociação com fornecedores, 
            resultando em melhores preços e um suporte local totalmente integrado.
          </p>
        </div>
      </div>
    </section>
  );
}
